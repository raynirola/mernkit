import { Action } from '@/actions/base_action'

interface GetAllUsersOptions {
  profile?: boolean
}

export default class UserActions extends Action {
  public async getAllUsers(options?: GetAllUsersOptions) {
    return await this.db.user.findMany({
      include: options?.profile ? { profile: true } : undefined
    })
  }
}
