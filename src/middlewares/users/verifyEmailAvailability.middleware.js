import readUsersService from '../../services/users/readUsers.service';

const verifyEmailAvailabilityMiddleware = (request, response, next) => {
  const users = readUsersService();
  const { email } = request.body;

  const emailAlreadyExists = users.find(user => user.email === email);

  if (emailAlreadyExists) {
    return response.status(400).json({
      message: 'E-mail already registered'
    });
  }

  next();
};

export default verifyEmailAvailabilityMiddleware;
