import { Router } from 'express';

import createUserController from '../../controllers/users/createUser.controller';
import deleteUserController from '../../controllers/users/deleteUser.controller';
import readUserProfileController from '../../controllers/users/readUserProfile.controller';
import readUserController from '../../controllers/users/readUsers.adm.controller';
import updateUserController from '../../controllers/users/updateUser.controller';
import verifyAuthorizationToUpdateMiddleware from '../../middlewares/users/verifyAuthorizationToUpdate.middleware';

import verifyAuthTokenMiddleware from '../../middlewares/users/verifyAuthToken.middleware';
import verifyEmailAvailabilityMiddleware from '../../middlewares/users/verifyEmailAvailability.middleware';
import verifyIsAdmMiddleware from '../../middlewares/users/verifyIsAdm.middleware';

const router = Router();

router.post('', verifyEmailAvailabilityMiddleware, createUserController);
router.get(
  '',
  verifyAuthTokenMiddleware,
  verifyIsAdmMiddleware,
  readUserController
);
router.get('/profile', verifyAuthTokenMiddleware, readUserProfileController);
router.patch(
  '/:uuid',
  verifyAuthTokenMiddleware,
  verifyAuthorizationToUpdateMiddleware,
  updateUserController
);
router.delete(
  '/:uuid',
  verifyAuthTokenMiddleware,
  verifyAuthorizationToUpdateMiddleware,
  deleteUserController
);

export default router;
