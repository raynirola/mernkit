import HttpException from '@/exceptions/HttpException'

class BadRequestException extends HttpException {
  name = 'BadRequestException'
  status = 400
  message = 'Bad Request'

  constructor(message?: string, public errors?: Record<string, string> | string) {
    super(message || 'Bad Request')
    this.message = message || 'Bad Request'
    Object.setPrototypeOf(this, BadRequestException.prototype)
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

export default BadRequestException