import UserRoutes from './userRoutes';

class Routes {
  get root() {
    return '/';
  }

  get user() {
    return UserRoutes;
  }
}

export default new Routes();
