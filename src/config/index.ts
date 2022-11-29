import dotenv from 'dotenv'

dotenv.config()

const config = {
  app: {
    secret: process.env.APP_KEY
  },
  port: process.env.PORT
}

const validateConfigs = (config: string | object) => {
  try {
    Object.keys(config).forEach(key => {
      if (typeof config[key] === 'object') validateConfigs(config[key])
      if (!config[key]) throw new Error(`EnvironmentVariableError: \nMissing config value for ${key}`)
    })
  } catch (error) {
    console.log(`\x1b[31m\x1b[1m${error.message}\x1b[0m`)
    process.exit(1)
  }
}

validateConfigs(config)

export default config
