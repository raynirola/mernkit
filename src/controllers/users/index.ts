import type { RequestHandler } from 'express'
import Controller from '@/controllers/base_controller'
import UserActions from '@/actions/users'

export default class UserController extends Controller {
  index: RequestHandler = async (_req, res) => {
    const data = await new UserActions().getAllUsers()
    res.json({ message: 'success', data })
  }
}
