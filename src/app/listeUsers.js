const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


  
  const users = await prisma.user.findMany()
  let userList = [];

  users.forEach((user, index) => {
    userList.push(<li 
    className ="fixed left-0 top-0 flex w-full justify-center border-b border-gray-100 bg-gradient-to-b from-zinc-100 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
    key={index}><span>{user.name} : {user.email}</span></li>);
  });

export default function ListUsers() {
  return (
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm ">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
         Liste des utilisateurs &nbsp;
        </p>
                  {userList}

      </div>
  );
}
