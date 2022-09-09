import { Router } from 'express'
import * as controllers from '@/controllers'

const home = Router() as Router

home.get('/', controllers.home)

export default home
