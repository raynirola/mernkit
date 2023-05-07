import db from '@/database'
import * as _ from 'radash'
import bcrypt from 'bcrypt'
import { faker } from '@faker-js/faker'
import { Prisma } from '@prisma/client'

console.log('*** Seeding database ***')

await createUsers(100)

console.log('*** Seeding database complete 🚀 ***')

async function createUsers(count: number) {
  console.log('Seeding users...')
  const data = [] as Prisma.UserCreateInput[]

  const generateRandomUser: () => Promise<Prisma.UserCreateInput> = async () => {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    return {
      email: faker.internet.email(firstName, lastName).toLowerCase(),
      password: await bcrypt.hash('password', 10),
      profile: {
        create: {
          avatar: faker.image.avatar(),
          bio: faker.lorem.paragraph(),
          name: `${firstName} ${lastName}`
        }
      },
      emailVerifiedAt: Boolean(Math.round(Math.random())) ? faker.date.past() : null,
      deletedAt: Boolean(Math.round(Math.random())) ? faker.date.past() : null
    }
  }

  for (const _i of _.range(1, count)) data.push(await generateRandomUser())

  for (const user of data) await db.user.create({ data: user })

  console.log('Seeding users done. ✅')
}
