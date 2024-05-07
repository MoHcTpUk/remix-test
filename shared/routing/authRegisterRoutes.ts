// eslint-disable-next-line import/no-cycle
import authRoutes from './authRoutes';

class AuthRegisterRoutes {
  get root() {
    return `${authRoutes.root}/register`;
  }
}

export default new AuthRegisterRoutes();
