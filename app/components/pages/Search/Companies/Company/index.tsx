import { useLocation } from '@remix-run/react';
import { useState } from 'react';
import type { Company } from 'shared/v2/companies';
import type { Vacancy } from 'shared/v2/vacancies';

import { CompanyFullCardWidget } from '~/components/entities/cardWidgets';
import ModalShare from '~/components/entities/ModalShare';
import { useApp, useScreenWidth } from '~/hooks';
import { PageVariantEnum } from '~/types/enums/pageVariantEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import { CLIENT_BASE_URL } from '~/utils/constants';

import SignInForRequest from '../../SignInForRequest';
import { SearchVacanciesComponent } from '../../Vacancies';
import { BoxSearchCompany } from './styles';

export default function CompanySearchCard({
  vacancies,
  company,
  dictionaries,
}: {
  vacancies?: Vacancy[] | null;
  company?: Company;
  dictionaries?: IDictionaries;
}) {
  const { userContext } = useApp();
  const location = useLocation();
  const widthScreen = useScreenWidth();
  const [visibleShare, setVisibleShare] = useState(false);

  return (
    <BoxSearchCompany>
      <CompanyFullCardWidget company={company} variant={PageVariantEnum.search} />

      {!userContext?.user?.isAuthenticated && widthScreen < 1280 && (
        <SignInForRequest variant='vacancy' />
      )}

      <ModalShare
        link={`${CLIENT_BASE_URL}${location.pathname}/${company?.id || ''}`}
        visibility={visibleShare}
        setVisibility={setVisibleShare}
      />
      {vacancies && <SearchVacanciesComponent vacancies={vacancies} dictionaries={dictionaries} />}
    </BoxSearchCompany>
  );
}
