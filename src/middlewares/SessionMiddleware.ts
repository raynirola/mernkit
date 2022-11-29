import db from '@/database'
import express from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'

/**
 * Override Request interface
 * Adds user property to Request interface
 */
declare global {
  namespace Express {
    export interface Request {
      user?: {
        id: string
        uuid: string
        emailVerifiedAt: Date
        type: 'ADMIN' | 'USER'
        limits?: { payload: number; rate: number; storage: number }
      }
    }
  }
}

/**
 * JWT Payload
 * Defines the JWT payload
 */
interface IJwtPayload extends JwtPayload {
  id: string
}

/**
 * SessionMiddleware
 * Checks if the user is authenticated
 * If the user is authenticated, it adds the user to the request
 */
const SessionMiddleware: express.RequestHandler = async (req, _, next) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) return next()

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET) as IJwtPayload

    const user = await db.user.findUniqueOrThrow({
      where: { id: decoded.id },
      select: { id: true, uuid: true, emailVerifiedAt: true, type: true, limits: true }
    })

    req.user = user

    next()
  } catch {
    next()
  }
}

export default SessionMiddleware
