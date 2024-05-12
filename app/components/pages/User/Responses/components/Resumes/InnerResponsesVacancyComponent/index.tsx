import { useMatches } from '@remix-run/react';
import { useState } from 'react';
import type { Response } from 'shared/v2/responses';
import type { Resume } from 'shared/v2/resumes';
import type { Vacancy } from 'shared/v2/vacancies';

import ResponseTypeHeading from '~/components/common/ResponseTypeStatus';
import { VacancyFullCardWidget } from '~/components/entities/cardWidgets';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';

import { BoxContainer } from './styles';

export default function InnerResponsesVacancyComponent({
  vacancy,
  myResumes,
  dictionaries,
  handleClickShare,
  response,
  responseAction,
}: {
  vacancy?: Vacancy | null;
  myResumes?: Resume[] | null;
  dictionaries?: IDictionaries;
  handleClickShare?: (id?: string) => void;
  response?: Response;
  responseAction?: boolean;
}) {
  const [visibleRequest, setVisibleRequest] = useState(false);

  const handleRequest = () => {
    setVisibleRequest(!visibleRequest);
  };

  const matches = useMatches();

  const selectResume: Resume = matches[3].data?.resume;

  return (
    <BoxContainer>
      <VacancyFullCardWidget
        vacancy={vacancy}
        dictionaries={dictionaries}
        handleRequest={handleRequest}
        stateResponse={response?.state}
        typeResponse={response?.shared_id === selectResume?.id ? 'REQUEST' : 'INVITATION'}
        responseId={response?.id}
        variant='response'
        responseAction={responseAction}
        status={
          <ResponseTypeHeading
            type={response?.shared_id === selectResume?.id ? 'REQUEST' : 'INVITATION'}
            state={response?.state}
            position='relative'
            onlyContainer
          />
        }
      />
    </BoxContainer>
  );
}
