import { Router } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateMessageController } from './controllers/CreateMessageController'
import { GetLastNumberOfMessagesController } from './controllers/GetLastNumberOfMessagesController'
import { ensureAuthenticated } from './middleware/ensureAuthenticated'

const router = Router()

router.post('/authenticate', new AuthenticateUserController().handle)
router.post(
  '/messages',
  ensureAuthenticated,
  new CreateMessageController().handle
)
router.get("/messages/last:NumberOfMessages", new GetLastNumberOfMessagesController().handle)

export { router }
