import { HttpException } from '@/interfaces/exception.interface'
import { ErrorRequestHandler } from 'express'

const error: ErrorRequestHandler = (err, _req, res, next) => {
  if (err instanceof HttpException) {
    return res.status(err.status).json(err.serialize())
  }

  if (err) {
    res.status(500).json({ message: err.message })
  }
  next()
}

export default error
