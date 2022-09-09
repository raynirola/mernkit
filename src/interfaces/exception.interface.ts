export abstract class HttpException implements Exception {
  name: string
  status: number
  message: string
  serialize: () => ErrorResponseBody
}
