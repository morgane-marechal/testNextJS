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
      name: 'Milena',
      email: 'milena@prisma.io',
    },
  })
  
  const users = await prisma.user.findMany()

export default function Content() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Bienvenue sur la page content &nbsp;
          <code className="font-mono font-bold">src/app/page.js</code>
        </p>

      </div>
    </main>
  );
}
