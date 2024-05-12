import { motion } from 'framer-motion';
import { memo } from 'react';
import type { Response } from 'shared/v2/responses';
import type { Resume } from 'shared/v2/resumes';
import type { Vacancy } from 'shared/v2/vacancies';

import { Box } from '~/components/common/Box';
import { ResumePartCardWidget } from '~/components/entities/cardWidgets';
import { useScreenWidth } from '~/hooks';

export const InnerResponsesResumesComponent = memo(
  ({
    resumes,
    vacancy,
    responses,
    responseAction,
  }: {
    resumes?: Resume[] | null;
    vacancy?: Vacancy;
    responses?: Response[];
    responseAction?: boolean;
  }): JSX.Element => {
    const widthScreen = useScreenWidth();

    const getResponseForResume = (resume: Resume) =>
      responses?.find((item) => item.shared_id === resume.id || item.target_id === resume.id);

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

          {resumes?.map((item, index) => (
            <ResumePartCardWidget
              key={item.id}
              state={getResponseForResume(item)?.state}
              type={
                getResponseForResume(item)?.shared_id === vacancy?.id ? 'REQUEST' : 'INVITATION'
              }
              responseId={getResponseForResume(item)?.id}
              resume={item}
              selectedResume={vacancy?.id}
              variant='response'
              responseAction={responseAction}
            />
          ))}
        </Box>
      </Box>
    );
  },
);
