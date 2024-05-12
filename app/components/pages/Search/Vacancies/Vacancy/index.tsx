import { useLocation } from '@remix-run/react';
import { useState } from 'react';
import type { Resume } from 'shared/v2/resumes';
import type { Vacancy } from 'shared/v2/vacancies';

import { VacancyFullCardWidget } from '~/components/entities/cardWidgets';
import ModalRequestList from '~/components/entities/ModalRequestList';
import ModalShare from '~/components/entities/ModalShare';
import { useApp, useScreenWidth } from '~/hooks';
import { EntityVariantEnum } from '~/types/enums/entityVariantEnum';
import { PageVariantEnum } from '~/types/enums/pageVariantEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import { CLIENT_BASE_URL } from '~/utils/constants';

import SignInForRequest from '../../SignInForRequest';
import { BoxContainer } from './styles';

export default function VacancySearchCard({
  vacancy,
  myResumes,
  dictionaries,
}: {
  vacancy?: Vacancy | null;
  myResumes?: Resume[] | null;
  dictionaries?: IDictionaries;
}) {
  const { userContext } = useApp();
  const [visibleRequest, setVisibleRequest] = useState(false);
  const widthScreen = useScreenWidth();

  const handleRequest = () => {
    setVisibleRequest(!visibleRequest);
  };

  const location = useLocation();
  const [visibleShare, setVisibleShare] = useState(false);

  return (
    <BoxContainer>
      <VacancyFullCardWidget
        vacancy={vacancy}
        handleRequest={handleRequest}
        variant={PageVariantEnum.search}
      />

      {!userContext?.user?.isAuthenticated && widthScreen < 1280 && (
        <SignInForRequest variant='vacancy' />
      )}

      <ModalRequestList
        variant={EntityVariantEnum.resume}
        visibility={visibleRequest}
        setVisibility={setVisibleRequest}
        resumes={myResumes}
        vacancyId={vacancy?.id}
      />

      <ModalShare
        link={`${CLIENT_BASE_URL}${location.pathname}/${vacancy?.id || ''}`}
        visibility={visibleShare}
        setVisibility={setVisibleShare}
      />
    </BoxContainer>
  );
}
