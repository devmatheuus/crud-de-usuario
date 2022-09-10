import readUsersService from '../../services/users/readUsers.service';
import updateUserService from '../../services/users/updateUser.service';

const updateUserController = async (request, response) => {
  const { uuid } = request.params;
  const { name, email } = request.body;

  const users = readUsersService();

  const user = users.find(user => user.id === uuid);

  const updatedUser = await updateUserService(
    uuid,
    user.createdOn,
    name || user.name,
    email || user.email,
    user.isAdm
  );

  return response.json(updatedUser);
};

export default updateUserController;
