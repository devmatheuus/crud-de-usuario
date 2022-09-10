import readUsersService from '../../services/users/readUsers.service';
import jwt from 'jsonwebtoken';

const verifyAuthorizationToUpdateMiddleware = (request, response, next) => {
  const token = request.headers.authorization;
  const { uuid } = request.params;

  jwt.verify(token, 'SECRET_KEY', (error, decoded) => {
    const users = readUsersService();
    const userAdm = users.find(user => user.id === request.body.userId);

    if (!userAdm) {
      return response.status(404).json({
        message: 'User not found'
      });
    }

    const otherUser = userAdm.id !== uuid;

    if (!userAdm.isAdm && otherUser) {
      return response
        .status(401)
        .json({ message: 'Missing admin permissions' });
    }

    next();
  });
};

export default verifyAuthorizationToUpdateMiddleware;
