import express from 'express'
import config from '@/config'
import * as routes from '@/routes'
import ErrorMiddleware from '@/middlewares/error_middleware'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', routes.home)
app.use('/users', routes.user)
app.use('/auth', routes.auth)
app.use(ErrorMiddleware)

app.listen(config.port, () => console.log(`Server is running at http://localhost:${config.port}`))
