import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
  // ... you will write your Prisma Client queries here

  // const post = await prisma.post.create({
  //   data: {
  //     title: "Prisma makes databases easy",
  //     author: {
  //       connect: { email: "sarah@prisma.io"},
  //     },
  //   },
  // })
  // console.log(post);

  const post = await prisma.post.update({
    where: { id: 2 },
    data: { published: true },
  })
  console.log(post);

  const allUsers = await prisma.user.findMany({
    include: { posts: true },
  })
  // console.log(allUsers)
  console.dir(allUsers, {depth: null})
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
