import express from 'express'
import * as Exception from '@/exceptions'
import { User } from '@prisma/client'

declare global {
  namespace Express {
    export interface Request {
      user?: User
    }
  }
}

const auth: express.RequestHandler = (_req, _res, next) => {
  next(new Exception.Unauthenticated())
}

export default auth
