import dotenv from 'dotenv'

dotenv.config()

const config = {
  app: {
    secret: process.env.APP_KEY
  },
  port: process.env.PORT || 3000
}

export default config
