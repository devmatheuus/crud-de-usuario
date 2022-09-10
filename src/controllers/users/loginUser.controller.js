import userLoginService from '../../services/users/loginUser.service';

const userLoginController = (request, response) => {
  const { email } = request.body;

  const loggedUser = userLoginService(email);

  return response.status(200).json(loggedUser);
};

export default userLoginController;
