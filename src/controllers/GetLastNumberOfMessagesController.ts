import { Request, Response } from 'express'
import { GetLastNumberOfMessagesService } from '../services/GetLastNumberOfMessagesService'

class GetLastNumberOfMessagesController {
  async handle(request: Request, response: Response) {
    const service = new GetLastNumberOfMessagesService()

    try {
      const NumberOfMessages = Number.parseInt(request.params.NumberOfMessages)
      const result = await service.execute(NumberOfMessages)
      return response.json(result)
    } catch (error) {
      return response.json({ error: `Invalid Number of Messages: ${request.params.NumberOfMessages}` })
    }
  }
}

export { GetLastNumberOfMessagesController }
