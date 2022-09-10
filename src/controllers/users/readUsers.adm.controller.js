import readUsersService from '../../services/users/readUsers.service';

const readUserController = (request, response) => {
  const users = readUsersService();

  return response.json(users);
};

export default readUserController;
