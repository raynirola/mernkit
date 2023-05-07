import { Router } from 'express'
import HomeController from '@/controllers/home'

const home = Router() as Router

home.get('/', new HomeController().index)

export default home
