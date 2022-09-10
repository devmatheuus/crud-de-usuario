import users from '../../database';
import { v4 as uuid } from 'uuid';
import * as bcrypt from 'bcryptjs';

const createUserService = async (name, email, password, isAdm) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: uuid(),
    createdOn: new Date(),
    updatedOn: new Date(),
    name,
    email,
    password: hashedPassword,
    isAdm
  };

  users.push(newUser);

  const returnedNewUser = {
    uuid: newUser.id,
    updatedOn: new Date(),
    createdOn: new Date(),
    name,
    email,
    isAdm
  };

  return returnedNewUser;
};

export default createUserService;
