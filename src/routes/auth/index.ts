import { Router } from 'express'
import validate from '@/libraries/zod'
import schema from '@/validators/auth'
import { AuthController } from '@/controllers'

const auth = Router() as Router

auth.post('/login', validate(schema.login), new AuthController().login)

export default auth
