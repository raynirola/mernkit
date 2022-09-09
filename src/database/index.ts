import { PrismaClient } from '@prisma/client'

const globalWithPrisma = global as typeof globalThis & { prisma: PrismaClient }

let db: PrismaClient

if (process.env.NODE_ENV === 'production') {
  db = new PrismaClient()
} else {
  if (!globalWithPrisma.prisma) globalWithPrisma.prisma = new PrismaClient()
  db = globalWithPrisma.prisma
}

export default db
