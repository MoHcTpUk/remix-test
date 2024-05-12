import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';
import type { Vacancy } from 'shared/v2/vacancies';

import { BoxCard } from '~/components/common/Card';
import { Input } from '~/components/common/Input';
import { Select } from '~/components/common/Select';
import { BoxFields, CardContainer } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import type { StateCard } from '~/types/enums/stateCardEnum';
import { VacancyCardEnum } from '~/types/enums/stateCardEnum';
import { VariantCardEnum } from '~/types/enums/variantCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IUpdateVacancy } from '~/types/interfaces/iForms';
import { extractTitles } from '~/utils/helpers';

export default function VacancyAdditionalEdit({
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
  step?: number;
  state?: StateCard;
  actionData?: IUpdateVacancy;
}) {
  const { t, userContext } = useApp();

  const staticFields = () => (
    <>
      <Select
        entries={extractTitles(dictionaries?.skills, userContext.language)}
        placeholder={t('user:skills')}
        id='skills'
        name='skills'
        variant='search-multi'
        values={vacancy?.additional_skills?.skill_ids}
        errorText={actionData?.fieldErrors?.skill_ids?.[userContext.language]}
      />

      <Select
        entries={extractTitles(dictionaries?.drivingLicenses, userContext.language)}
        placeholder={t('user:driver_license')}
        id='driver_license'
        name='driver_license'
        variant='search-multi'
        values={vacancy?.additional_skills?.driver_license_ids}
        errorText={actionData?.fieldErrors?.driver_license_ids?.[userContext.language]}
      />

      <Input
        placeholder={t('user:other_licenses')}
        value={vacancy?.additional_skills?.other_licenses?.join(', ')}
        id='other_licenses'
        name='other_licenses'
        errorText={actionData?.fieldErrors?.other_licenses?.[userContext.language]}
      />
    </>
  );

  return (
    <BoxCard
      title={t('user:additional_information')}
      withEditButton
      nameCard={VacancyCardEnum.additional}
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
          <input name='nameCard' type='hidden' value='additional_skills' />

          {staticFields()}
        </BoxFields>
      </CardContainer>
    </BoxCard>
  );
}
