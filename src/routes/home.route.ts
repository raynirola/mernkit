import { Router } from 'express'
import HomeController from '@/controllers/HomeController'

const home = Router() as Router

home.get('/', HomeController)

export default home
