import { Link, useLocation } from '@remix-run/react';
import { type Response, type Statistics } from 'shared/v2/responses';
import type { Resume } from 'shared/v2/resumes';
import type { Vacancy } from 'shared/v2/vacancies';

import { Box } from '~/components/common/Box';
import { BoxCard } from '~/components/common/Card';
import { CheckBox } from '~/components/common/Checkbox';
import ResponseAllTypeStatuses from '~/components/common/ResponseAllTypeStatuses';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import {
  ResumePartCardHeading,
  VacancyPartCardHeading,
} from '~/components/entities/cardComponents/partCard';
import { useApp, useScreenWidth } from '~/hooks';
import { ResponseCardVariantEnum } from '~/types/enums/responseCardVariantEnum';

function MainFilter({
  variant,
  responses,
  vacancy,
  resume,
  statistics,
}: {
  variant?: 'resume' | 'vacancy';
  responses?: Response[];
  vacancy?: Vacancy;
  resume?: Resume;
  statistics?: Statistics;
}) {
  const { theme, t } = useApp();
  const location = useLocation();
  const widthScreen = useScreenWidth();

  return (
    <BoxCard title={t('user:response_filters')}>
      {resume && (
        <Box
          flexDirection='column'
          padding={widthScreen > 768 ? '24px' : '16px'}
          borderRadius={widthScreen > 768 ? '8px' : '4px'}
          backgroundColor={theme.responses.filters.backgroundColor}
          gap={widthScreen > 768 ? '16px' : ''}
        >
          <ResumePartCardHeading
            resume={resume}
            variant='response'
            variantResponseCard={ResponseCardVariantEnum.heading}
          />

          <ResponseAllTypeStatuses statistics={statistics} />
        </Box>
      )}

      {vacancy && (
        <Box
          flexDirection='column'
          padding={widthScreen > 768 ? '24px' : '16px'}
          borderRadius={widthScreen > 768 ? '8px' : '4px'}
          backgroundColor={theme.responses.filters.backgroundColor}
          gap={widthScreen > 768 ? '16px' : ''}
        >
          <VacancyPartCardHeading
            vacancy={vacancy}
            variant='response'
            variantResponseCard={ResponseCardVariantEnum.heading}
          />

          <ResponseAllTypeStatuses statistics={statistics} />
        </Box>
      )}

      {!resume && !vacancy && (
        <>
          <Text variant={TextVariantEnum.textBody1medium}>
            {t('user:select_the_resume_or_vacancy_for_which_you_want_to_see_responses')}
          </Text>
          <Box gap='16px'>
            <Link
              to={location.pathname.includes('responses/resume') ? '/user/responses' : 'resume'}
            >
              <CheckBox
                checked={location.pathname.includes('responses/resume')}
                label={t('user:resumes')}
              />
            </Link>

            <Link
              to={location.pathname.includes('responses/vacancy') ? '/user/responses' : 'vacancy'}
            >
              <CheckBox
                checked={location.pathname.includes('responses/vacancy')}
                label={t('user:vacancies')}
              />
            </Link>
          </Box>
        </>
      )}
    </BoxCard>
  );
}

export default MainFilter;
