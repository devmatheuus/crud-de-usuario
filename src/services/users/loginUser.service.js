import jwt from 'jsonwebtoken';
import readUsersService from './readUsers.service';

const userLoginService = email => {
  const users = readUsersService();
  const user = users.find(user => user.email === email);

  const token = jwt.sign({ id: user.id }, 'SECRET_KEY', { expiresIn: '24h' });

  return { token: token };
};

export default userLoginService;
