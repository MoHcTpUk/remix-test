// eslint-disable-next-line import/no-cycle
import searchRoutes from './searchRoutes';

class SearchResumeRoutes {
  get root() {
    return `${searchRoutes.root}/resume`;
  }
}

export default new SearchResumeRoutes();
