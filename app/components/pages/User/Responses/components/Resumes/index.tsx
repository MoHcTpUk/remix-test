import { Link, useLocation } from '@remix-run/react';
import { motion } from 'framer-motion';
import { memo } from 'react';
import routes from 'shared/routing/routes';
import type { ResponsesGroupedByEntity } from 'shared/v2/responses';
import type { Resume } from 'shared/v2/resumes';

import { Box } from '~/components/common/Box';
import BoxInformation from '~/components/common/BoxInformation';
import Button from '~/components/common/Button';
import { BoxCard } from '~/components/common/Card';
import ResponseAllTypeStatuses from '~/components/common/ResponseAllTypeStatuses';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import {
  ResumePartCardHeading,
  ResumePartCardInfo,
} from '~/components/entities/cardComponents/partCard';
import { MediaBox } from '~/components/ui/Card';
import { Divider } from '~/components/ui/Divider';
import { useApp, useScreenWidth } from '~/hooks';
import { BoxInformationEnum } from '~/types/enums/boxInformationEnum';
import { ResponseCardVariantEnum } from '~/types/enums/responseCardVariantEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';

export const ResponsesResumesComponent = memo(
  ({
    resumes,
    resume,
    dictionaries,
    responses,
  }: {
    resumes?: Resume[] | null;
    resume?: Resume;
    dictionaries?: IDictionaries;
    responses?: ResponsesGroupedByEntity[];
  }): JSX.Element => {
    const { theme, t } = useApp();
    const widthScreen = useScreenWidth();

    const getResponseStatistics = (responses?: ResponsesGroupedByEntity[], id?: string) =>
      responses?.find((item) => item.entity_id === id)?.statistics;

    const boxHeading = (resume: Resume) => (
      <Box flexDirection='column' width='100%'>
        <ResumePartCardHeading
          variant='response'
          resume={resume}
          variantResponseCard={ResponseCardVariantEnum.main}
        />
        {widthScreen >= 768 && <Divider />}
        <ResumePartCardInfo variant='response' resume={resume} />
        <Box flexDirection='row' justifyContent='space-between'>
          <ResponseAllTypeStatuses statistics={getResponseStatistics(responses, resume.id)} />
        </Box>
      </Box>
    );

    const buttonCreateResume = () => (
      <Link to={routes.user.resume.create}>
        <Button priority='secondary'>
          <Text variant={TextVariantEnum.textBody2}>{t('user:create_resume')}</Text>
        </Button>
      </Link>
    );

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

          {!resumes?.length && (
            <BoxInformation
              variant={BoxInformationEnum.info}
              title={t('user:no_resumes_available')}
              information={t(
                'user:you_dont_have_a_single_resume_yet_that_employers_could_respond_to',
              )}
              button={() => buttonCreateResume()}
              flexDirection='column'
            />
          )}

          {resumes?.map((item, index) => (
            <Box
              width='100%'
              style={{
                cursor: 'pointer',
                borderRadius: '12px',
                transition: 'all 0.2s cubic-bezier(0.2, 0, 0, 1)',
                border:
                  widthScreen > 1024 && item.id === resume?.id
                    ? `2px solid ${theme.modal.borderCardsColor}`
                    : '',
              }}
              key={item?.id}
            >
              <BoxCard key={item?.id} variant='userCard'>
                <MediaBox variant='mobile'>
                  <Link to={item?.id || '#'}>{boxHeading(item)}</Link>
                </MediaBox>

                <MediaBox variant='desktop'>
                  <Link to={item?.id} preventScrollReset>
                    {boxHeading(item)}
                  </Link>
                </MediaBox>
              </BoxCard>
            </Box>
          ))}
        </Box>
      </Box>
    );
  },
);
