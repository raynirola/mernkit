import express from 'express'
import config from '@/config'
import * as routes from '@/routes'
import * as middleware from '@/middlewares'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', routes.home)
app.use('/users', routes.user)
app.use(middleware.error)

app.listen(config.port, () => console.log(`Server is running at http://localhost:${config.port}`))
