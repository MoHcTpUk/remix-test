/* eslint-disable import/no-cycle */
import searchRoutes from './searchRoutes';

class SearchCompanyRoutes {
  get root() {
    return `${searchRoutes.root}/company`;
  }
}

export default new SearchCompanyRoutes();
