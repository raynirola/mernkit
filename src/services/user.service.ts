import db from '@/database'
import { Prisma } from '@prisma/client'

const UserService: UserService = {
  listAllUsers: async options => {
    const limit = options.limit ? parseInt(options.limit as string) : 10
    const offset = options.offset ? parseInt(options.offset as string) : 0
    const withTrashed = options.withTrashed || false
    const filter: Prisma.UserWhereInput = { OR: [{ deletedAt: { isSet: false } }, { deletedAt: null }] }

    const pick: Prisma.UserSelect = {
      id: true,
      email: true,
      type: true,
      profile: true,
      createdAt: true,
      updatedAt: true,
      deletedAt: withTrashed
    }

    const users = await db.user.findMany({
      where: withTrashed ? {} : filter,
      select: pick,
      take: limit,
      skip: offset
    })

    const count = await db.user.count({ where: withTrashed ? {} : filter })

    return { data: users, meta: { count, limit, offset } }
  }
}

export default UserService
