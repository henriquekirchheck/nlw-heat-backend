import { GetLastNumberOfMessagesController } from './controllers/GetLastNumberOfMessagesController'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateMessageController } from './controllers/CreateMessageController'
import { ProfileUserController } from './controllers/ProfileUserController'
import { ensureAuthenticated } from './middleware/ensureAuthenticated'
import { Router } from 'express'

const router = Router()

router.post('/authenticate', new AuthenticateUserController().handle)
router.post(
  '/messages',
  ensureAuthenticated,
  new CreateMessageController().handle
)

router.get('/profile', ensureAuthenticated, new ProfileUserController().handle)
router.get(
  '/messages/last:NumberOfMessages',
  new GetLastNumberOfMessagesController().handle
)

export { router }
