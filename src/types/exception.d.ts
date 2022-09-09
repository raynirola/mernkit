interface ErrorResponseBody {
  status: number
  name: string
  message: string
}

interface Exception extends Error {
  status: number
  message: string
  serialize: () => ErrorResponseBody
}
