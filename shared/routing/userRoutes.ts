import UserResumeRoutes from './userResumeRoutes';

class UserRoutes {
  get root() {
    return '/user';
  }

  get resume() {
    return UserResumeRoutes;
  }
}

export default new UserRoutes();
