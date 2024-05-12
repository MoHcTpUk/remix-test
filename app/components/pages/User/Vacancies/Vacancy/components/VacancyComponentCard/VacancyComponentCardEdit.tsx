import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';
import type { EntityCompany } from 'shared/client/data-contracts';
import type { Vacancy } from 'shared/v2/vacancies';

import { BoxCard } from '~/components/common/Card';
import { Input } from '~/components/common/Input';
import { Select } from '~/components/common/Select';
import { BoxFields, CardContainer } from '~/components/ui/Card';
import { useApp, useGetPositionFromSpecialization } from '~/hooks';
import type { StateCard } from '~/types/enums/stateCardEnum';
import { VacancyCardEnum } from '~/types/enums/stateCardEnum';
import { VariantCardEnum } from '~/types/enums/variantCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IUpdateVacancy } from '~/types/interfaces/iForms';
import { extractTitles } from '~/utils/helpers.client';

export default function VacancyComponentCardEdit({
  editCard,
  setEditCard,
  state,
  step,
  vacancy,
  dictionaries,
  companies,
  actionData,
}: {
  vacancy?: Vacancy | null;
  dictionaries?: IDictionaries;
  editCard?: VacancyCardEnum;
  setEditCard?: Dispatch<SetStateAction<string>>;
  state?: StateCard;
  step?: number;
  companies?: EntityCompany[];
  actionData?: IUpdateVacancy;
}) {
  const { t, userContext } = useApp();

  const { entriesPositions, setSpecializationState, position, specializationState } =
    useGetPositionFromSpecialization(
      vacancy?.vacancy_page?.specialization_id,
      vacancy?.vacancy_page?.position,
    );

  return (
    <BoxCard
      title={t('user:vacancy')}
      withEditButton
      nameCard={VacancyCardEnum.vacancy}
      editCard={editCard}
      setEditCard={setEditCard}
      step={step}
      state={state}
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
          <input name='nameCard' type='hidden' value='vacancy_page' />

          <Select
            entries={extractTitles(dictionaries?.specializations, userContext.language)}
            placeholder={t('user:specialization')}
            id='specialization'
            name='specialization'
            setExternalState={setSpecializationState}
            values={specializationState}
            variant='search-single'
            errorText={actionData?.fieldErrors?.specialization_id?.[userContext.language]}
          />
          <Select
            placeholder={t('user:position')}
            id='position'
            name='position'
            externalState={[position || '']}
            values={[position || '']}
            entries={entriesPositions}
            variant='single-text'
            errorText={actionData?.fieldErrors?.position?.[userContext.language]}
            disabled={!specializationState[0]}
          />

          <Select
            entries={extractTitles(dictionaries?.employment, userContext.language)}
            placeholder={t('user:employment')}
            id='employment'
            name='employment'
            variant='multi'
            values={vacancy?.vacancy_page?.employment_type_ids}
            errorText={actionData?.fieldErrors?.employment_type_ids?.[userContext.language]}
          />
          <Select
            entries={extractTitles(dictionaries?.workfeatures, userContext.language)}
            placeholder={t('user:work_features')}
            id='work_features'
            name='work_features'
            values={vacancy?.vacancy_page?.work_feature_ids}
            errorText={actionData?.fieldErrors?.work_feature_ids?.[userContext.language]}
            variant='multi'
          />
          <Select
            entries={extractTitles(dictionaries?.payoutPeriods, userContext.language)}
            placeholder={t('user:salary_payout_period')}
            id='salary_payout_period'
            name='salary_payout_period'
            values={[vacancy?.vacancy_page?.salary_payout_period_id || '']}
            errorText={actionData?.fieldErrors?.salary_payout_period_id?.[userContext.language]}
          />
          <Input
            placeholder={t('user:salary_fixed')}
            id='fixed'
            name='fixed'
            value={vacancy?.vacancy_page?.salary_fixed?.toString()}
            errorText={actionData?.fieldErrors?.salary_fixed?.[userContext.language]}
            onlyNumber
          />
          <Input
            placeholder={t('user:from')}
            id='from'
            name='from'
            value={vacancy?.vacancy_page?.salary_from?.toString()}
            errorText={actionData?.fieldErrors?.salary_from?.[userContext.language]}
            onlyNumber
          />
          <Input
            placeholder={t('user:to')}
            id='to'
            name='to'
            value={vacancy?.vacancy_page?.salary_to?.toString()}
            errorText={actionData?.fieldErrors?.salary_to?.[userContext.language]}
            onlyNumber
          />

          <Select
            entries={extractTitles(dictionaries?.currency, userContext.language)}
            placeholder={t('user:currency')}
            id='i_currency'
            name='currency'
            values={[vacancy?.vacancy_page?.currency_id || '']}
            errorText={actionData?.fieldErrors?.currency_id?.[userContext.language]}
          />
          <Input
            variant='textarea'
            placeholder={t('user:description')}
            id='i_description'
            name='description'
            value={vacancy?.vacancy_page?.description}
            errorText={actionData?.fieldErrors?.description?.[userContext.language]}
          />
        </BoxFields>
      </CardContainer>
    </BoxCard>
  );
}
