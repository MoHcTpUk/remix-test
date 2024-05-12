import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';
import type { Vacancy } from 'shared/v2/vacancies';

import { BoxCard } from '~/components/common/Card';
import { DataField } from '~/components/entities/DataFIeld';
import { CardContainer } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import { VacancyCardEnum } from '~/types/enums/stateCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import { getValueLang } from '~/utils/helpers.client';

export default function VacancyLocationData({
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
      title={t('user:location')}
      withEditButton
      nameCard={VacancyCardEnum.location}
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
          label={t('user:country')}
          data={getValueLang(vacancy?.location?.city_name, userContext.language)}
        />
        <DataField
          label={t('user:province')}
          data={getValueLang(vacancy?.location?.region_name, userContext.language)}
        />
        <DataField
          label={t('user:district')}
          data={getValueLang(vacancy?.location?.city_name, userContext.language)}
        />
        {/* <DataField label={t('user:address')}  /> */}
        <DataField
          label={t('user:language_of_notify')}
          data={getValueLang(vacancy?.location?.language_of_notify_name, userContext.language)}
        />
        <DataField
          label={t('user:number_of_employees')}
          data={getValueLang(vacancy?.location?.number_of_employees_name, userContext.language)}
        />
      </CardContainer>
    </BoxCard>
  );
}
