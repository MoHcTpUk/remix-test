import { useLocation } from '@remix-run/react';
import { motion } from 'framer-motion';
import { memo, useState } from 'react';
import type { Company } from 'shared/v2/companies';

import { Box } from '~/components/common/Box';
import BoxInformation from '~/components/common/BoxInformation';
import { List, ListItem } from '~/components/common/BoxInformation/styles';
import { CompanyPartCardWidget } from '~/components/entities/cardWidgets';
import ModalShare from '~/components/entities/ModalShare';
import { BoxSelectedCard } from '~/components/ui/Card';
import { useApp, useScreenWidth } from '~/hooks';
import { BoxInformationEnum } from '~/types/enums/boxInformationEnum';
import { PageVariantEnum } from '~/types/enums/pageVariantEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import { CLIENT_BASE_URL } from '~/utils/constants';

import CompanySearchCard from './Company';

export const SearchCompaniesComponent = memo(
  ({
    company,
    dictionaries,
    companies,
  }: {
    companies?: Company[] | null;
    company?: Company;
    dictionaries?: IDictionaries;
  }): JSX.Element => {
    const { t } = useApp();
    const [visibleShare, setVisibleShare] = useState(false);
    const location = useLocation();
    const widthScreen = useScreenWidth();

    return (
      <Box
        flexDirection='row'
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
          style={{ flex: '1' }}
        >
          {companies?.map((item) => (
            <CompanyPartCardWidget
              company={item}
              selectedCompany={company?.id}
              dictionaries={dictionaries}
              variant={PageVariantEnum.search}
              key={item?.id}
            />
          ))}
          {!companies?.[0] && (
            <BoxInformation
              variant={BoxInformationEnum.info}
              title={t('user:the_search_has_not_given_any_results_try_changing_your_search_terms')}
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
            link={`${CLIENT_BASE_URL}${location.pathname}/${company?.id || ''}`}
            visibility={visibleShare}
            setVisibility={setVisibleShare}
          />
        </Box>
        {company && (
          <BoxSelectedCard>
            <CompanySearchCard company={company} dictionaries={dictionaries} />
          </BoxSelectedCard>
        )}
      </Box>
    );
  },
);
