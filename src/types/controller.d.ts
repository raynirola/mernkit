type RequestHandler = import('express').RequestHandler

interface RestfulController {
  index?: RequestHandler
  show?: RequestHandler
  store?: RequestHandler
  update?: RequestHandler
  destroy?: RequestHandler
}
