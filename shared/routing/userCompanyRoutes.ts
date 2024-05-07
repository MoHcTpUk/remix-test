// eslint-disable-next-line import/no-cycle
import userRoutes from './userRoutes';

class UserCompanyRoutes {
  get root() {
    return `${userRoutes.root}/company`;
  }

  get create() {
    return `${this.root}/create`;
  }
}

export default new UserCompanyRoutes();
