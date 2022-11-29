import HttpException from '@/exceptions/HttpException'

class UnauthenticatedException extends HttpException {
  name = 'UnauthenticatedException'
  status = 401
  message = 'Unauthenticated'

  constructor(message?: string, public errors?: Record<string, string> | string) {
    super(message || 'Unauthenticated')
    this.message = message || 'Unauthenticated'
    Object.setPrototypeOf(this, UnauthenticatedException.prototype)
  }

  serialize = () => {
    return {
      name: this.name,
      status: this.status,
      message: this.message,
      errors: this.errors
    }
  }
}

export default UnauthenticatedException