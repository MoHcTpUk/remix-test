import { useMatches } from '@remix-run/react';
import { memo } from 'react';
import type { Response } from 'shared/v2/responses';
import type { Resume } from 'shared/v2/resumes';
import type { Vacancy } from 'shared/v2/vacancies';

import { WrapperContainer } from '~/components/ui/Containers';
import { calculateStatistics, useMatchesData } from '~/utils/helpers';

import MainFilter from './components/MainFilter';

export const Responses = memo((): JSX.Element => {
  const matches = useMatches();
  const data = useMatchesData(matches[3].id);

  const dataVacancy: Vacancy = data?.vacancy;
  const dataResume: Resume = data?.resume;
  const responses: Response[] = data?.responses?.data;

  const statistics = dataResume
    ? calculateStatistics(responses, dataResume?.id)
    : calculateStatistics(responses, dataVacancy?.id);

  return (
    <WrapperContainer>
      <MainFilter
        vacancy={dataVacancy}
        resume={dataResume}
        variant={(dataVacancy && 'vacancy') || (dataResume && 'resume')}
        statistics={statistics}
      />
    </WrapperContainer>
  );
});
