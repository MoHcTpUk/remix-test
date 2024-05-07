// eslint-disable-next-line import/no-cycle
import userRoutes from './userRoutes';

class UserResponsesRoutes {
  get root() {
    return `${userRoutes.root}/responses`;
  }

  // get create() {
  //   return `${this.root}/create`;
  // }
}

export default new UserResponsesRoutes();
