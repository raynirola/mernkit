import { z } from 'zod'
import { RequestHandler } from 'express'

interface Validator {
  (schema: z.ZodSchema<any>): RequestHandler
}

const validate: Validator = schema => async (req, _res, next) => {
  try {
    await schema.parseAsync(req.body)
    next()
  } catch (error) {
    next(error)
  }
}

export default validate
