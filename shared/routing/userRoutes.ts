/* eslint-disable import/no-cycle */
import UserCompanyRoutes from './userCompanyRoutes';
import userMyProfileRoutes from './userMyProfileRoutes';
import UserResponsesRoutes from './userResponsesRoutes';
import UserResumeRoutes from './userResumeRoutes';
import UserVacancyRoutes from './userVacancyRoutes';

class UserRoutes {
  get root() {
    return '/user';
  }

  get myProfile() {
    return userMyProfileRoutes;
  }

  get resume() {
    return UserResumeRoutes;
  }

  get vacancy() {
    return UserVacancyRoutes;
  }

  get company() {
    return UserCompanyRoutes;
  }

  get responses() {
    return UserResponsesRoutes;
  }
}

export default new UserRoutes();
