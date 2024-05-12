import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';
import type { EntityVacancy } from 'shared/client/data-contracts';
import type { Vacancy } from 'shared/v2/vacancies';

import { BoxCard } from '~/components/common/Card';
import { Input } from '~/components/common/Input';
import { Select } from '~/components/common/Select';
import { BoxFields, CardContainer } from '~/components/ui/Card';
import { useApp, useGetLocation } from '~/hooks';
import type { StateCard } from '~/types/enums/stateCardEnum';
import { VacancyCardEnum } from '~/types/enums/stateCardEnum';
import { VariantCardEnum } from '~/types/enums/variantCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IUpdateVacancy } from '~/types/interfaces/iForms';
import { extractTitles, extractTitlesNewWay } from '~/utils/helpers.client';

export default function VacancyLocationEdit({
  editCard,
  setEditCard,
  state,
  step,
  vacancy,
  dictionaries,
  actionData,
}: {
  vacancy?: Vacancy | null;
  dictionaries?: IDictionaries;
  editCard?: VacancyCardEnum;
  setEditCard?: Dispatch<SetStateAction<string>>;
  state?: StateCard;
  step?: number;
  actionData?: IUpdateVacancy;
}) {
  const { t, userContext } = useApp();

  const {
    entriesRegions,
    setNewContry,
    newRegion,
    setNewRegion,
    newCountry,
    newCity,
    setNewCity,
    newEntriesCity,
  } = useGetLocation(
    vacancy?.location?.country_id,
    vacancy?.location?.region_id,
    vacancy?.location?.city_id,
    dictionaries?.location,
  );

  return (
    <BoxCard
      title={t('user:location')}
      withEditButton
      nameCard={VacancyCardEnum.location}
      editCard={editCard}
      setEditCard={setEditCard}
      state={state}
      step={step}
      maxStep={6}
      variant={VariantCardEnum.editCard}
    >
      <CardContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
      >
        <BoxFields>
          <input name='nameCard' type='hidden' value='location' />

          <Select
            entries={extractTitles(dictionaries?.countries, userContext.language)}
            placeholder={t('user:country')}
            id='country'
            name='country'
            values={newCountry}
            setExternalState={setNewContry}
            variant='search-single'
            errorText={actionData?.fieldErrors?.country_id?.[userContext.language]}
          />
          <Select
            entries={extractTitles(entriesRegions, userContext.language)}
            setExternalState={setNewRegion}
            values={newRegion}
            placeholder={t('user:province')}
            id='region'
            name='region'
            variant='search-single'
            errorText={actionData?.fieldErrors?.region_id?.[userContext.language]}
            disabled={!entriesRegions || !entriesRegions?.length}
          />
          <Select
            entries={extractTitles(newEntriesCity, userContext.language)}
            values={newCity}
            setExternalState={setNewCity}
            placeholder={t('user:district')}
            id='i_city'
            name='city'
            variant='search-single'
            errorText={actionData?.fieldErrors?.city_id?.[userContext.language]}
          />
          <Input
            placeholder={t('user:address')}
            value={vacancy?.location?.address}
            id='i_address'
            name='address'
          />
          <Select
            entries={extractTitlesNewWay(dictionaries?.languagesOfNotify, userContext.language)}
            placeholder={t('user:language_of_notify')}
            id='language_of_notify'
            name='language_of_notify'
            values={[vacancy?.location?.language_of_notify_id || '']}
            errorText={actionData?.fieldErrors?.language_of_notify_id?.[userContext.language]}
          />
          <Select
            entries={extractTitles(dictionaries?.employeeNumbers, userContext.language)}
            placeholder={t('user:number_of_employees')}
            id='number_of_employees'
            name='number_of_employees'
            values={[vacancy?.location?.number_of_employees_id || '']}
            errorText={actionData?.fieldErrors?.number_of_employees_id?.[userContext.language]}
          />
        </BoxFields>
      </CardContainer>
    </BoxCard>
  );
}
