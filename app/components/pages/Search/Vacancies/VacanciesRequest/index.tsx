import { useMatches } from '@remix-run/react';
import { motion } from 'framer-motion';
import { memo, useEffect, useState } from 'react';
import type { EntityMessage } from 'shared/client/data-contracts';
import type { Company } from 'shared/v2/companies';
import type { Vacancy } from 'shared/v2/vacancies';

import { Box } from '~/components/common/Box';
import BoxInformation from '~/components/common/BoxInformation';
import ModalRequestConfirm from '~/components/entities/ModalRequestConfirm';
import { useApp, useScreenWidth } from '~/hooks';
import { BoxInformationEnum } from '~/types/enums/boxInformationEnum';
import { IconEnum } from '~/types/enums/iconEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';

import { VacancyRequest } from './VacancyRequest';

export const VacanciesRequest = memo(
  ({
    vacancies,
    dictionaries,
    companies,
    actionRequest,
    message,
  }: {
    vacancies?: Vacancy[] | null;
    companies?: Company[] | null;
    dictionaries?: IDictionaries;
    actionRequest?: boolean;
    message: EntityMessage | undefined;
  }): JSX.Element => {
    const { t, userContext } = useApp();
    const widthScreen = useScreenWidth();
    const [confirmVacancy, setConfirmVacancy] = useState(false);
    const [selectedVacancy, setSelectedVacancy] = useState('');

    const [publishedVacancies, setPublishedVacancies] = useState<Vacancy[]>();

    useEffect(() => {
      if (vacancies) {
        const newVacancies = vacancies.filter((vacancy) => vacancy.published);
        setPublishedVacancies(newVacancies);
      }
    }, [vacancies]);

    useEffect(() => {
      if (actionRequest) {
        setConfirmVacancy(false);
      }
    }, [actionRequest]);

    const handleConfirm = (id?: string) => {
      if (id) setSelectedVacancy(id);

      setConfirmVacancy(!confirmVacancy);
    };

    return (
      <Box
        flexDirection='column'
        width='100%'
        gap={widthScreen > 1024 ? '24px' : '16px'}
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {actionRequest === undefined && (
          <BoxInformation
            variant={BoxInformationEnum.info}
            title={t('user:select_vacancy_to_send')}
          />
        )}

        {actionRequest === false && message && (
          <BoxInformation
            variant={BoxInformationEnum.error}
            title={message[userContext.language]}
          />
        )}

        {actionRequest === true && (
          <BoxInformation
            variant={BoxInformationEnum.success}
            title={t('user:your_request_has_been_sent')}
          />
        )}
        {publishedVacancies?.map((vacancy) => (
          <Box
            width='100%'
            style={{ cursor: 'pointer' }}
            key={vacancy?.id}
            onClick={() => handleConfirm(vacancy?.id)}
          >
            <VacancyRequest vacancy={vacancy} companies={companies} dictionaries={dictionaries} />
          </Box>
        ))}
        <ModalRequestConfirm
          id={selectedVacancy}
          variant='vacancy'
          visibility={confirmVacancy}
          setVisibility={setConfirmVacancy}
        />
      </Box>
    );
  },
);
