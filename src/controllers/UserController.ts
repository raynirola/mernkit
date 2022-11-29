import { RequestHandler } from 'express'
import Controller from '@/controllers/Controller'

class UserController extends Controller {
  index: RequestHandler = async (_req, res) => {
    const users = await this.db.user.findMany()
    res.json(users)
  }
}

export default new UserController()
