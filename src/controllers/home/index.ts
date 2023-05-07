import { RequestHandler } from 'express'
import Controller from '@/controllers/base_controller'

export default class HomeController extends Controller {
  index: RequestHandler = async (_req, res) => {
    res.json({ message: 'success', data: 'Magnificent express typescript boilerplate!' })
  }
}
