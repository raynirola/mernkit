import { Action } from '@/actions/base_action'

export default class UserActions extends Action {
  public async getAllUsers() {
    return await this.db.user.findMany()
  }
}
