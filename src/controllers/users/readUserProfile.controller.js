import readUserProfileService from '../../services/users/readUserProfile.service';

const readUserProfileController = (request, response) => {
  const { userId } = request.body;

  const userProfile = readUserProfileService(userId);

  return response.json(userProfile);
};

export default readUserProfileController;
