/* eslint-disable import/no-cycle */
import authLogin from './authLogin';
import AuthRegisterRoutes from './authRegisterRoutes';
import authResetPasswordRoutes from './authResetPasswordRoutes';

class AuthRoutes {
  get root() {
    return '/auth';
  }

  get register() {
    return AuthRegisterRoutes;
  }

  get resetPassword() {
    return authResetPasswordRoutes;
  }

  get login() {
    return authLogin;
  }
}

export default new AuthRoutes();
