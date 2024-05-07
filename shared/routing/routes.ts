import AuthRoutes from './authRoutes';
import MaterialsRoutes from './materialsRoutes';
import privacyPolicyRoutes from './privacyPolicyRoutes';
import SearchRoutes from './searchRoutes';
import UserRoutes from './userRoutes';

class Routes {
  get root() {
    return '/';
  }

  get user() {
    return UserRoutes;
  }

  get search() {
    return SearchRoutes;
  }

  get auth() {
    return AuthRoutes;
  }

  get materials() {
    return MaterialsRoutes;
  }

  get faq() {
    return '/faq';
  }

  get about() {
    return '/about';
  }

  get privacyPolicy() {
    return privacyPolicyRoutes;
  }

  get unsubscribe() {
    return '/unsubscribe';
  }

  get success_register() {
    return '/success_register';
  }
}

export default new Routes();
