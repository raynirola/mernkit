abstract class HttpException extends Error {
  abstract name: string
  abstract status: number
  abstract errors?: Record<string, string> | string
  abstract serialize: () => ErrorBodyResponse

  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, HttpException.prototype)
  }
}

export default HttpException

interface ErrorBodyResponse {
  status: number
  name: string
  errors?: Record<string, string> | string
}