import { useLocation } from '@remix-run/react';
import { motion } from 'framer-motion';
import { memo, useState } from 'react';
import type { Company } from 'shared/v2/companies';
import type { Resume } from 'shared/v2/resumes';
import type { Vacancy } from 'shared/v2/vacancies';

import { Box } from '~/components/common/Box';
import BoxInformation from '~/components/common/BoxInformation';
import { List, ListItem } from '~/components/common/BoxInformation/styles';
import { ResumePartCardWidget } from '~/components/entities/cardWidgets';
import ModalShare from '~/components/entities/ModalShare';
import { BoxSelectedCard } from '~/components/ui/Card';
import { useApp, useScreenWidth } from '~/hooks';
import { BoxInformationEnum } from '~/types/enums/boxInformationEnum';
import { PageVariantEnum } from '~/types/enums/pageVariantEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import { CLIENT_BASE_URL } from '~/utils/constants';

import ResumeSearchCard from './Resume';

export const SearchResumesComponent = memo(
  ({
    resumes,
    resume,
    myVacancies,
    myCompanies,
    dictionaries,
  }: {
    resumes?: Resume[] | null;
    myCompanies?: Company[] | null;
    myVacancies?: Vacancy[] | null;
    resume?: Resume;
    dictionaries?: IDictionaries;
  }): JSX.Element => {
    const { t } = useApp();
    const [visibleShare, setVisibleShare] = useState(false);
    const location = useLocation();
    const [linkShare, setLinkShare] = useState('');
    const widthScreen = useScreenWidth();
    const [visibleRequest, setVisibleRequest] = useState(false);

    const handleRequest = () => {
      setVisibleRequest(!visibleRequest);
    };

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
          style={{
            flex: '1',
          }}
        >
          {/* <Heading variant='resumes' title={t('user:my_resumes')} /> */}

          {resumes?.map((item) => (
            <ResumePartCardWidget
              resume={item}
              selectedResume={resume?.id}
              variant={PageVariantEnum.search}
              // key={item?.id}
              handleRequest={handleRequest}
            />
          ))}
          {!resumes?.[0] && (
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
            link={`${CLIENT_BASE_URL}${location.pathname}/${linkShare}`}
            visibility={visibleShare}
            setVisibility={setVisibleShare}
          />
        </Box>
        {resume?.id && (
          <BoxSelectedCard>
            <ResumeSearchCard
              myCompanies={myCompanies}
              myVacancies={myVacancies}
              resume={resume}
              dictionaries={dictionaries}
              // handleClickShare={handleClickShare}
            />
          </BoxSelectedCard>
        )}
      </Box>
    );
  },
);
