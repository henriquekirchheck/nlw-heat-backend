import prismaClient from '../prisma'

class GetLastNumberOfMessagesService {
  async execute(NumberOfMessages: number) {
    const messages = await prismaClient.message.findMany({
      take: NumberOfMessages,
      orderBy: { created_at: 'desc' },
      include: { user: true },
    })

    return messages
  }
}

export { GetLastNumberOfMessagesService }
