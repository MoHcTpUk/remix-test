import { motion } from 'framer-motion';
import { memo } from 'react';
import type { Response } from 'shared/v2/responses';
import type { Resume } from 'shared/v2/resumes';
import type { Vacancy } from 'shared/v2/vacancies';

import { Box } from '~/components/common/Box';
import { VacancyPartCardWidget } from '~/components/entities/cardWidgets';
import { useScreenWidth } from '~/hooks';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';

export const InnerResponsesVacanciesComponent = memo(
  ({
    vacancies,
    resume,
    dictionaries,
    responses,
    responseAction,
  }: {
    vacancies?: Vacancy[] | null;
    resume?: Resume;
    dictionaries?: IDictionaries;
    responses?: Response[];
    responseAction?: boolean;
  }): JSX.Element => {
    const widthScreen = useScreenWidth();

    const getResponseForVacancy = (vacancy: Vacancy) =>
      responses?.find((item) => item.shared_id === vacancy.id || item.target_id === vacancy.id);

    return (
      <Box
        flexDirection='column'
        alignItems='flex-start'
        width='100%'
        gap='24px'
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Box
          flexDirection='column'
          width='100%'
          gap={widthScreen > 1024 ? '24px' : '16px'}
          style={{
            flex: '1',
          }}
        >
          {/* <Heading variant='resumes' title={t('user:my_resumes')} /> */}

          {vacancies?.map((item, index) => (
            <VacancyPartCardWidget
              key={item.id}
              state={getResponseForVacancy(item)?.state}
              type={
                getResponseForVacancy(item)?.shared_id === resume?.id ? 'REQUEST' : 'INVITATION'
              }
              responseId={getResponseForVacancy(item)?.id}
              vacancy={item}
              // selectedVacancy={item?.id}
              variant='response'
              responseAction={responseAction}
            />
          ))}
        </Box>
      </Box>
    );
  },
);
