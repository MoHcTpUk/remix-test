import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import { memo } from 'react';
import routes from 'shared/routing/routes';
import type { ResponsesGroupedByEntity } from 'shared/v2/responses';
import type { Vacancy } from 'shared/v2/vacancies';

import { Box } from '~/components/common/Box';
import BoxInformation from '~/components/common/BoxInformation';
import Button from '~/components/common/Button';
import { BoxCard } from '~/components/common/Card';
import ResponseAllTypeStatuses from '~/components/common/ResponseAllTypeStatuses';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import {
  VacancyPartCardHeading,
  VacancyPartCardInfo,
} from '~/components/entities/cardComponents/partCard';
import { MediaBox } from '~/components/ui/Card';
import { Divider } from '~/components/ui/Divider';
import { useApp, useScreenWidth } from '~/hooks';
import { BoxInformationEnum } from '~/types/enums/boxInformationEnum';
import { ResponseCardVariantEnum } from '~/types/enums/responseCardVariantEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';

export const ResponsesVacanciesComponent = memo(
  ({
    vacancies,
    vacancy,
    dictionaries,
    responses,
  }: {
    vacancies?: Vacancy[] | null;
    vacancy?: Vacancy;
    dictionaries?: IDictionaries;
    responses?: ResponsesGroupedByEntity[];
  }): JSX.Element => {
    const { theme, t } = useApp();
    const widthScreen = useScreenWidth();

    const buttonCreateVacancy = () => (
      <Link to={routes.user.vacancy.create}>
        <Button priority='secondary'>
          <Text variant={TextVariantEnum.textBody2}>{t('user:create_vacancy')}</Text>
        </Button>
      </Link>
    );

    const getResponseStatistics = (responses?: ResponsesGroupedByEntity[], id?: string) =>
      responses?.find((item) => item.entity_id === id)?.statistics;

    const boxHeading = (vacancy: Vacancy) => (
      <Box flexDirection='column' width='100%'>
        <VacancyPartCardHeading
          variant='response'
          vacancy={vacancy}
          variantResponseCard={ResponseCardVariantEnum.main}
        />
        {widthScreen >= 768 && <Divider />}
        <VacancyPartCardInfo vacancy={vacancy} variant='response' />
        <Box flexDirection='row' justifyContent='space-between'>
          <ResponseAllTypeStatuses statistics={getResponseStatistics(responses, vacancy.id)} />
        </Box>
      </Box>
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

          {!vacancies?.length && (
            <BoxInformation
              variant={BoxInformationEnum.info}
              title={t('user:no_vacancies_available')}
              information={t(
                'user:you_dont_have_any_vacancies_yet_for_which_applicants_could_apply',
              )}
              button={() => buttonCreateVacancy()}
              flexDirection='column'
            />
          )}

          {vacancies?.map((item, index) => (
            <Box
              width='100%'
              style={{
                cursor: 'pointer',
                borderRadius: '12px',
                transition: 'all 0.2s cubic-bezier(0.2, 0, 0, 1)',
                border:
                  widthScreen > 1024 && item.id === vacancy?.id
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
