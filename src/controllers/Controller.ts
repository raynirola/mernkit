import db from '@/database'
import { RequestHandler } from 'express'
import { PrismaClient } from '@prisma/client'

interface BaseController {
  readonly db: PrismaClient

  index?: RequestHandler
  show?: RequestHandler
  create?: RequestHandler
  update?: RequestHandler
  delete?: RequestHandler
}

class Controller implements BaseController {
  readonly db = db

  index?: RequestHandler
  show?: RequestHandler
  create?: RequestHandler
  update?: RequestHandler
  delete?: RequestHandler
}

export default Controller
