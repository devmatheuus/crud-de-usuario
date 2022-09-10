import users from '../../database';

const readUserProfileService = userId => {
  const userProfile = users.find(user => user.id === userId);

  if (!userProfile) {
    return 'User not found';
  }

  const { name, email, createdOn, updatedOn, id, isAdm } = userProfile;

  const returnedProfile = {
    uuid: id,
    createdOn,
    updatedOn,
    name,
    email,
    isAdm
  };

  return returnedProfile;
};

export default readUserProfileService;
