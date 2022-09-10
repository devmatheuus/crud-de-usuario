import users from '../../database';
import * as bcrypt from 'bcryptjs';

const updateUserService = async (id, createdOn, name, email, isAdm) => {
  const updatedUser = {
    uuid: id,
    createdOn: createdOn,
    updatedOn: new Date(),
    name: name,
    email: email,
    isAdm: isAdm
  };

  const userIndex = users.findIndex(user => user.id === id);

  if (userIndex === -1) {
    return 'User not found';
  }

  const user = (users[userIndex] = { ...users[userIndex], ...updatedUser });

  const { password, ...rest } = user;

  return rest;
};

export default updateUserService;
