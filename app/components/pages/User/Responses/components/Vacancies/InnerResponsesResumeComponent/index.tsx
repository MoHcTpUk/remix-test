import { useMatches } from '@remix-run/react';
import { useState } from 'react';
import { type Response } from 'shared/v2/responses';
import type { Resume } from 'shared/v2/resumes';
import type { Vacancy } from 'shared/v2/vacancies';

import ResponseTypeHeading from '~/components/common/ResponseTypeStatus';
import { ResumeFullCardWidget } from '~/components/entities/cardWidgets';
import { useApp, useScreenWidth } from '~/hooks';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';

import { BoxContainer } from './styles';

export default function InnerResponsesResumeComponent({
  resume,
  dictionaries,
  response,
  responseAction,
}: {
  resume?: Resume;
  dictionaries?: IDictionaries;
  response?: Response;
  responseAction?: boolean;
}) {
  const [visibleRequest, setVisibleRequest] = useState(false);

  const handleRequest = () => {
    setVisibleRequest(!visibleRequest);
  };

  const matches = useMatches();
  const selectedVacancy: Vacancy = matches[3].data?.vacancy;

  return (
    <BoxContainer>
      <ResumeFullCardWidget
        resume={resume}
        dictionaries={dictionaries}
        handleRequest={handleRequest}
        stateResponse={response?.state}
        typeResponse={response?.shared_id === selectedVacancy?.id ? 'REQUEST' : 'INVITATION'}
        responseId={response?.id}
        variant='response'
        responseAction={responseAction}
        status={
          <ResponseTypeHeading
            type={response?.shared_id === selectedVacancy?.id ? 'REQUEST' : 'INVITATION'}
            state={response?.state}
            position='relative'
            onlyContainer
          />
        }
      />
    </BoxContainer>
  );
}
