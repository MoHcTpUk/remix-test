// eslint-disable-next-line import/no-cycle
import userRoutes from './userRoutes';

class UserVacancyRoutes {
  get root() {
    return `${userRoutes.root}/vacancy`;
  }

  get create() {
    return `${this.root}/create`;
  }
}

export default new UserVacancyRoutes();
