import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';
import type { Vacancy } from 'shared/v2/vacancies';

import { Box } from '~/components/common/Box';
import { BoxCard } from '~/components/common/Card';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { DataField } from '~/components/entities/DataFIeld';
import { BoxDataChips, CardContainer } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import { VacancyCardEnum } from '~/types/enums/stateCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import { getValueFromDictionaries, getValueLang } from '~/utils/helpers';

export default function VacancyComponentCardData({
  editCard,
  setEditCard,
  vacancy,
  dictionaries,
}: {
  vacancy?: Vacancy | null;
  dictionaries?: IDictionaries;
  editCard: VacancyCardEnum;
  setEditCard: Dispatch<SetStateAction<string>>;
}) {
  const { t, userContext } = useApp();

  return (
    <BoxCard
      title={t('user:vacancy')}
      withEditButton
      nameCard={VacancyCardEnum.vacancy}
      editCard={editCard}
      setEditCard={setEditCard}
    >
      <CardContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
      >
        <DataField
          label={t('user:specialization')}
          data={getValueLang(vacancy?.vacancy_page?.specialization_name, userContext.language)}
        />
        <DataField label={t('user:position')} data={vacancy?.vacancy_page?.position} />
        <DataField variant='custom' label={t('user:employment')}>
          <Box flexDirection='row' gap='4px' flexWrap='wrap'>
            {vacancy?.vacancy_page?.employment_type_names?.map((item) => (
              <BoxDataChips key={item.en}>
                <Text variant={TextVariantEnum.textBody2medium}>
                  {getValueLang(item, userContext.language)}
                </Text>
              </BoxDataChips>
            ))}
          </Box>
        </DataField>
        <DataField variant='custom' label={t('user:work_features')}>
          <Box flexDirection='row' gap='4px' flexWrap='wrap'>
            {vacancy?.vacancy_page?.work_feature_ids?.map((item) => (
              <BoxDataChips key={item}>
                <Text variant={TextVariantEnum.textBody2medium}>
                  {getValueFromDictionaries(dictionaries?.workfeatures, item, userContext.language)}
                </Text>
              </BoxDataChips>
            ))}
          </Box>
        </DataField>

        <DataField
          label={t('user:salary_fixed')}
          data={vacancy?.vacancy_page?.salary_fixed?.toString() || ''}
        />

        <DataField
          label={t('user:salary')}
          data={
            vacancy?.vacancy_page?.salary_from
              ? `${t('user:from')} ${vacancy?.vacancy_page?.salary_from || ''} - ${
                  vacancy?.vacancy_page?.salary_to || ''
                }`
              : ''
          }
        />

        <DataField
          label={t('user:currency')}
          data={getValueFromDictionaries(
            dictionaries?.currency,
            vacancy?.vacancy_page?.currency_id,
            userContext.language,
          )}
        />
        <DataField label={t('user:description')} data={vacancy?.vacancy_page?.description} />
      </CardContainer>
    </BoxCard>
  );
}
