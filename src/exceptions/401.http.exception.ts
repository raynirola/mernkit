import { HttpException } from '@/interfaces/exception.interface'

class UnauthenticatedException implements HttpException {
  name: 'UnauthenticatedException'
  status = 401
  message: string

  constructor(message?: string) {
    this.message = message || 'Unauthenticated'
  }

  serialize = () => {
    return {
      name: this.name,
      status: this.status,
      message: this.message
    }
  }
}

export default UnauthenticatedException
