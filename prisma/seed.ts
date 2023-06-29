import { Priority, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function createUserWithAddressAndTask() {
  try {
    // Create a user
    const user = await prisma.user.create({
      data: {
        name: 'John Doe',
        email: 'john@example.com',
      },
    })

    // Create an address for the user
    const address = await prisma.address.create({
      data: {
        street: '123 Main Street',
        city: 'Example City',
        state: 'Example State',
        country: 'Example Country',
        userId: user.id,
      },
    })

    // Create a task for the user
    const task = await prisma.task.create({
      data: {
        title: 'Example Task',
        description: 'This is an example task',
        content: 'Create new task',
        priority: Priority.LOW,
        userId: user.id,
      },
    })

    console.log('User:', user)
    console.log('Address:', address)
    console.log('Task:', task)
  } catch (error) {
    console.error('Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

createUserWithAddressAndTask()
