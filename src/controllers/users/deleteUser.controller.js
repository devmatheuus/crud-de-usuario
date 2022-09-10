import deleteUserService from '../../services/users/deleteUser.service';

const deleteUserController = (request, response) => {
  const { uuid } = request.params;

  const deletedUser = deleteUserService(uuid);

  return response.status(200).json({
    message: 'User deleted with success'
  });
};

export default deleteUserController;
