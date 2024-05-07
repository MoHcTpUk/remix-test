/* eslint-disable import/no-cycle */
import SearchCompanyRoutes from './searchCompanyRoutes';
import SearchResumeRoutes from './searchResumeRoutes';
import SearchVacancyRoutes from './searchVacancyRoutes';

class SearchRoutes {
  get root() {
    return '/search';
  }

  get resume() {
    return SearchResumeRoutes;
  }

  get vacancy() {
    return SearchVacancyRoutes;
  }

  get company() {
    return SearchCompanyRoutes;
  }
}

export default new SearchRoutes();
