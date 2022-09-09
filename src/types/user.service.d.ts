type User = import('@prisma/client').User

interface ListAllUsersArgs {
  limit?: number | string
  offset?: number | string
  withTrashed?: boolean
}

interface UserService {
  listAllUsers: (options: ListAllUsersArgs) => Promise<{
    data: Partial<User>[]
    meta: PaginationMeta
  }>
}

interface PaginationMeta {
  count: number
  limit: number
  offset: number
}
