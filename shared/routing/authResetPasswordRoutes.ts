// eslint-disable-next-line import/no-cycle
import authRoutes from './authRoutes';

class AuthRegisterRoutes {
  get root() {
    return `${authRoutes.root}/reset-password`;
  }
}

export default new AuthRegisterRoutes();
