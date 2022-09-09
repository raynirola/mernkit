import { Router } from 'express'
import * as controllers from '@/controllers'

const user = Router() as Router

user.get('/', controllers.user.index)

export default user
