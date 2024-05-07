// eslint-disable-next-line import/no-cycle
import materialsRoutes from './materialsRoutes';

class MaterialsArticlesRoutes {
  get root() {
    return `${materialsRoutes.root}/articles`;
  }
}

export default new MaterialsArticlesRoutes();
