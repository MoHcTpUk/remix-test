// eslint-disable-next-line import/no-cycle
import userRoutes from './userRoutes';

class UserResumeRoutes {
  get root() {
    return `${userRoutes.root}/resume`;
  }

  get create() {
    return `${this.root}/create`;
  }
}

export default new UserResumeRoutes();
