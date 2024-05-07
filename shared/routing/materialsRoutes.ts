/* eslint-disable import/no-cycle */
import MaterialsArticlesRoutes from './materialsArticlesRoutes';
import MaterialsNewsRoutes from './materialsNewsRoutes';

class MaterialsRoutes {
  get root() {
    return '/materials';
  }

  get articles() {
    return MaterialsArticlesRoutes;
  }

  get news() {
    return MaterialsNewsRoutes;
  }
}

export default new MaterialsRoutes();
