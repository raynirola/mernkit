import { ZodError } from 'zod'
import schema from '@/validators/auth'
import { ErrorRequestHandler } from 'express'
import { HttpException, BadRequestException } from '@/exceptions'

const ErrorMiddleware: ErrorRequestHandler = (err, _req, res, next) => {
  if (err instanceof ZodError<typeof schema>) {
    const errors = formatZodError(err)

    return res.status(400).json(new BadRequestException('Validation Error', errors).serialize())
  }

  if (err instanceof HttpException) {
    return res.status(err.status).json({ message: 'error', data: err.serialize() })
  }

  res.status(500).json({ message: 'error', data: err.message })
}

function formatZodError(err: ZodError<any>) {
  const errors = {} as Record<string, string>

  Object.keys(err.formErrors.fieldErrors).map(key => {
    errors[key] = err.formErrors.fieldErrors[key]?.[0]
  })

  return errors
}

export default ErrorMiddleware
