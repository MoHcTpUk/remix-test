import { useLocation } from '@remix-run/react';
import { motion } from 'framer-motion';
import { memo, useState } from 'react';
import type { Company } from 'shared/v2/companies';
import type { Resume } from 'shared/v2/resumes';
import type { Vacancy } from 'shared/v2/vacancies';

import { Box } from '~/components/common/Box';
import BoxInformation from '~/components/common/BoxInformation';
import { List, ListItem } from '~/components/common/BoxInformation/styles';
import { CompanyFullCardWidget, VacancyPartCardWidget } from '~/components/entities/cardWidgets';
import ModalShare from '~/components/entities/ModalShare';
import { BoxSelectedCard } from '~/components/ui/Card';
import { useApp, useRouteChecks, useScreenWidth } from '~/hooks';
import { BoxInformationEnum } from '~/types/enums/boxInformationEnum';
import { PageVariantEnum } from '~/types/enums/pageVariantEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import { CLIENT_BASE_URL } from '~/utils/constants';

import VacancySearchCard from './Vacancy';

export const SearchVacanciesComponent = memo(
  ({
    vacancies,
    vacancy,
    dictionaries,
    companies,
    company,
    myResumes,
  }: {
    vacancies?: Vacancy[] | null;
    vacancy?: Vacancy | null;
    companies?: Company[] | null;
    dictionaries?: IDictionaries;
    company?: Company;
    myResumes?: Resume[] | null;
  }): JSX.Element => {
    const { t } = useApp();
    const [visibleShare, setVisibleShare] = useState(false);
    const location = useLocation();
    const { isSearchCompanyVacancies } = useRouteChecks();
    const widthScreen = useScreenWidth();

    return (
      <Box gap='24px' flexDirection='column' width='100%'>
        {isSearchCompanyVacancies && !vacancies?.[0] && (
          <BoxInformation
            variant={BoxInformationEnum.info}
            title={`${t('user:there_are_currently_no_open_positions_at')} ${
              company?.name || 'company'
            }`}
          />
        )}
        {isSearchCompanyVacancies && vacancies?.[0] && (
          <BoxInformation
            variant={BoxInformationEnum.info}
            title={`${t('user:all_open_vacancies_at')} ${company?.name || 'company'}`}
          />
        )}

        {isSearchCompanyVacancies && widthScreen < 1280 && (
          <CompanyFullCardWidget company={company} variant={PageVariantEnum.search} />
        )}

        <Box flexDirection='row' gap='24px' width='100%'>
          <Box
            flexDirection='row'
            alignItems='flex-start'
            justifyContent='center'
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
              style={{ flex: '1' }}
            >
              {vacancies?.map((item) => (
                <VacancyPartCardWidget
                  vacancy={item}
                  selectedVacancy={vacancy?.id}
                  variant={PageVariantEnum.search}
                  key={item?.id}
                />
              ))}

              {!isSearchCompanyVacancies && !vacancies?.[0] && (
                <BoxInformation
                  variant={BoxInformationEnum.info}
                  title={t(
                    'user:the_search_has_not_given_any_results_try_changing_your_search_terms',
                  )}
                  information={
                    <List>
                      <ListItem>{t('user:try_more_general_keywords')}</ListItem>
                      <ListItem>{t('user:try_changing_the_value_of_one_of_the_filters')}</ListItem>
                      <ListItem>{t('user:check_your_spelling')}</ListItem>
                    </List>
                  }
                  flexDirection='column'
                />
              )}

              <ModalShare
                link={`${CLIENT_BASE_URL}${location.pathname}/${vacancy?.id || ''}`}
                visibility={visibleShare}
                setVisibility={setVisibleShare}
              />
            </Box>

            {vacancy && (
              <BoxSelectedCard>
                <VacancySearchCard vacancy={vacancy} myResumes={myResumes} />
              </BoxSelectedCard>
            )}
          </Box>
        </Box>
      </Box>
    );
  },
);
