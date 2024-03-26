const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

// const globalForPrisma = global as unknown as { prisma: PrismaClient; }; 
// export const prisma = globalForPrisma.prisma || new PrismaClient(); 
// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma; 
// export default prisma;

// run inside `async` function
const newUser = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
    },
  })
  
  const users = await prisma.user.findMany()