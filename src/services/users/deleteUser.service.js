import readUsersService from './readUsers.service';

const deleteUserService = id => {
  const users = readUsersService();

  const userIndex = users.findIndex(user => user.id === id);

  if (userIndex === -1) {
    return 'User not found';
  }

  users.splice(userIndex, 1);
};

export default deleteUserService;
