import readUsersService from '../../services/users/readUsers.service';
import jwt from 'jsonwebtoken';

const verifyIsAdmMiddleware = (request, response, next) => {
  const token = request.headers.authorization;

  jwt.verify(token, 'SECRET_KEY', (error, decoded) => {
    const users = readUsersService();
    const userAdm = users.find(user => user.id === request.body.userId);

    if (!userAdm) {
      return response.status(404).json({ message: 'User not found' });
    }

    if (!userAdm.isAdm) {
      return response.status(401).json({ message: 'Unauthorized' });
    }

    next();
  });
};

export default verifyIsAdmMiddleware;
