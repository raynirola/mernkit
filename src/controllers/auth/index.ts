import type { RequestHandler } from 'express'
import Controller from '@/controllers/base_controller'
import { AuthRequest } from '@/validators/auth'
import AuthAction from '@/actions/auth'

export default class AuthController extends Controller {
  login: RequestHandler<{}, {}, AuthRequest.Login> = async (req, res) => {
    const data = await new AuthAction().login(req.body)
    res.json({ message: 'success', data })
  }
}
