// eslint-disable-next-line import/no-cycle
import userRoutes from './userRoutes';

class UserMyProfileRoutes {
  get root() {
    return `${userRoutes.root}/myprofile`;
  }
}

export default new UserMyProfileRoutes();
