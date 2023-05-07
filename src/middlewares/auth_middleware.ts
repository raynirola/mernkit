import express from 'express'
import UnauthenticatedException from '@/exceptions/UnauthenticatedException'

const AuthMiddleware: express.RequestHandler = (req, _, next) => {
  if (req.user) return next()
  throw new UnauthenticatedException()
}

export default AuthMiddleware
