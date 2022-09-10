import readUsersService from '../../services/users/readUsers.service';
import * as bcrypt from 'bcryptjs';

const verifyLoginMiddleware = (request, response, next) => {
  const { email, password } = request.body;

  const users = readUsersService();
  const user = users.find(user => user.email === email);

  if (!user) {
    return response.status(401).json({
      message: 'Wrong email/password'
    });
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return response.status(401).json({
      message: 'Wrong email/password'
    });
  }

  next();
};

export default verifyLoginMiddleware;
