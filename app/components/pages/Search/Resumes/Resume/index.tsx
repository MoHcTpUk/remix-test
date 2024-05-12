import { useState } from 'react';
import type { Company } from 'shared/v2/companies';
import type { Resume } from 'shared/v2/resumes';
import type { Vacancy } from 'shared/v2/vacancies';

import { ResumeFullCardWidget } from '~/components/entities/cardWidgets';
import ModalRequestList from '~/components/entities/ModalRequestList';
import { useApp, useScreenWidth } from '~/hooks';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';

import SignInForRequest from '../../SignInForRequest';
import { BoxContainer } from './styles';

export default function ResumeSearchCard({
  resume,
  dictionaries,
  myVacancies,
  myCompanies,
}: {
  resume?: Resume;
  dictionaries?: IDictionaries;
  myVacancies?: Vacancy[] | null;
  myCompanies?: Company[] | null;
}) {
  const { userContext } = useApp();

  const [visibleRequest, setVisibleRequest] = useState(false);
  const widthScreen = useScreenWidth();

  const handleRequest = () => {
    setVisibleRequest(!visibleRequest);
  };

  return (
    <BoxContainer>
      <ResumeFullCardWidget
        resume={resume}
        dictionaries={dictionaries}
        handleRequest={handleRequest}
        variant='search'
      />

      {!userContext?.user?.isAuthenticated && widthScreen < 1280 && (
        <SignInForRequest variant='resume' />
      )}

      <ModalRequestList
        variant='vacancy'
        visibility={visibleRequest}
        setVisibility={setVisibleRequest}
        vacancies={myVacancies}
        companies={myCompanies}
        resumeId={resume?.id}
      />
    </BoxContainer>
  );
}
