import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';
import type { Resume } from 'shared/v2/resumes';

import { BoxCard } from '~/components/common/Card';
import { CheckBox } from '~/components/common/Checkbox';
import { Input } from '~/components/common/Input';
import { Select } from '~/components/common/Select';
import { BoxUserEditData } from '~/components/pages/User/MyProfile/components/Info/styles';
import { BoxFields, CardContainer } from '~/components/ui/Card';
import { useApp, useGetLocation } from '~/hooks';
import type { StateCard } from '~/types/enums/stateCardEnum';
import { ResumeCardEnum } from '~/types/enums/stateCardEnum';
import { VariantCardEnum } from '~/types/enums/variantCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IUpdateResume } from '~/types/interfaces/iForms';
import { extractTitles } from '~/utils/helpers.client';

export default function ResumeLocationEdit({
  editCard,
  setEditCard,
  state,
  step,
  resume,
  dictionaries,
  actionData,
}: {
  resume?: Resume | null;
  dictionaries?: IDictionaries;
  editCard?: ResumeCardEnum;
  setEditCard?: Dispatch<SetStateAction<string>>;
  state?: StateCard;
  step?: number;
  actionData?: IUpdateResume;
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
    resume?.location?.country_id,
    resume?.location?.region_id,
    resume?.location?.city_id,
    dictionaries?.location,
  );

  return (
    <BoxCard
      title={t('user:location')}
      withEditButton
      nameCard={ResumeCardEnum.location}
      editCard={editCard}
      setEditCard={setEditCard}
      state={state}
      step={step}
      maxStep={7}
      variant={VariantCardEnum.editCard}
    >
      <CardContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
      >
        <BoxUserEditData>
          <BoxFields>
            <input name='nameCard' type='hidden' value='location' />

            <Select
              entries={extractTitles(dictionaries?.countries, userContext.language)}
              placeholder={t('user:country')}
              id='country'
              name='country_id'
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
              name='region_id'
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
              name='city_id'
              variant='search-single'
              errorText={actionData?.fieldErrors?.city_id?.[userContext.language]}
            />

            <Input
              placeholder={t('user:address')}
              id='address'
              name='address'
              value={resume?.location?.address}
              errorText={actionData?.fieldErrors?.address?.[userContext.language]}
            />
            <Select
              entries={extractTitles(dictionaries?.sources, userContext.language)}
              values={[resume?.location?.source_id || '']}
              placeholder={t('user:source')}
              id='i_source'
              name='source_id'
              variant='search-single'
              errorText={actionData?.fieldErrors?.source_id?.[userContext.language]}
            />
            <Select
              entries={extractTitles(dictionaries?.relocations, userContext.language)}
              placeholder={t('user:relocation')}
              id='i_relocation'
              name='relocation_id'
              values={[resume?.location?.relocation_id || '']}
              errorText={actionData?.fieldErrors?.relocation_id?.[userContext.language]}
            />
            <CheckBox
              name='business_trips'
              label={t('user:business_trips')}
              checked={Boolean(resume?.location?.business_trips)}
              id='id_business_trips'
              value={resume?.location?.business_trips?.toString()}
            />
          </BoxFields>
        </BoxUserEditData>
      </CardContainer>
    </BoxCard>
  );
}
