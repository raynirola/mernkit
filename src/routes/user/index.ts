import { Router } from 'express'
import { UserController } from '@/controllers'

const user = Router() as Router

user.get('/', new UserController().index)

export default user
