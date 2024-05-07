// eslint-disable-next-line import/no-cycle
import materialsRoutes from './materialsRoutes';

class MaterialsNewsRoutes {
  get root() {
    return `${materialsRoutes.root}/news`;
  }
}

export default new MaterialsNewsRoutes();
