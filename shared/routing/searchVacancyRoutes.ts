// eslint-disable-next-line import/no-cycle
import searchRoutes from './searchRoutes';

class SearchVacancyRoutes {
  get root() {
    return `${searchRoutes.root}/vacancy`;
  }
}

export default new SearchVacancyRoutes();
