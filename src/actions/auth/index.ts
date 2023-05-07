import { Action } from '@/actions/base_action'
import { AuthRequest } from '@/validators/auth'

export default class AuthAction extends Action {
  public async login(data: AuthRequest.Login) {
    console.dir(data)
    return data
  }
}
