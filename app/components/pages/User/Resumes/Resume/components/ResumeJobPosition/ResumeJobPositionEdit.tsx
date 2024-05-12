import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';
import type { Resume } from 'shared/v2/resumes';

import { BoxCard } from '~/components/common/Card';
import { Input } from '~/components/common/Input';
import { Select } from '~/components/common/Select';
import { BoxUserEditData } from '~/components/pages/User/MyProfile/components/Info/styles';
import { BoxFields, CardContainer } from '~/components/ui/Card';
import { useApp, useGetPositionFromSpecialization } from '~/hooks';
import type { StateCard } from '~/types/enums/stateCardEnum';
import { ResumeCardEnum } from '~/types/enums/stateCardEnum';
import { VariantCardEnum } from '~/types/enums/variantCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IUpdateResume } from '~/types/interfaces/iForms';
import { extractTitles } from '~/utils/helpers.client';

export default function ResumeJobPositionEdit({
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

  const { entriesPositions, setSpecializationState, position, specializationState } =
    useGetPositionFromSpecialization(
      resume?.job_position?.specialization_id,
      resume?.job_position?.position,
    );

  return (
    <BoxCard
      title={t('user:job_position')}
      withEditButton
      nameCard={ResumeCardEnum.jobPosition}
      editCard={editCard}
      setEditCard={setEditCard}
      state={state}
      step={step}
      maxStep={7}
      variant={VariantCardEnum.editCard}
    >
      <CardContainer
        id='growContainer'
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
      >
        <BoxUserEditData>
          <BoxFields>
            <input name='nameCard' type='hidden' value='job_position' />

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
              values={resume?.job_position?.employment_type_ids}
              errorText={actionData?.fieldErrors?.employment_type_ids?.[userContext.language]}
            />
            <Select
              entries={extractTitles(dictionaries?.workfeatures, userContext.language)}
              placeholder={t('user:work_features')}
              id='i_work_features'
              name='work_feature_ids'
              values={resume?.job_position?.work_feature_ids}
              variant='multi'
              errorText={actionData?.fieldErrors?.work_feature_ids?.[userContext.language]}
            />
            <Select
              entries={extractTitles(dictionaries?.payoutPeriods, userContext.language)}
              placeholder={t('user:salary_payout_period')}
              id='i_salary_payout_period'
              name='salary_payout_period_id'
              values={[resume?.job_position?.salary_payout_period_id || '']}
              errorText={actionData?.fieldErrors?.salary_payout_period_id?.[userContext.language]}
            />
            <Input
              placeholder={t('user:salary_fixed')}
              id='fixed'
              name='salary_fixed'
              value={resume?.job_position?.salary_fixed?.toFixed()}
              onlyNumber
              errorText={actionData?.fieldErrors?.salary_payout_period_id?.[userContext.language]}
            />
            <Input
              placeholder={t('user:from')}
              id='from'
              name='salary_from'
              value={resume?.job_position?.salary_from?.toFixed()}
              onlyNumber
              errorText={actionData?.fieldErrors?.salary_from?.[userContext.language]}
            />
            <Input
              placeholder={t('user:to')}
              id='to'
              name='salary_to'
              value={resume?.job_position?.salary_to?.toFixed()}
              onlyNumber
              errorText={actionData?.fieldErrors?.salary_to?.[userContext.language]}
            />

            <Select
              entries={extractTitles(dictionaries?.currency, userContext.language)}
              placeholder={t('user:currency')}
              id='i_currency'
              name='currency_id'
              values={[resume?.job_position?.currency_id || '']}
              errorText={actionData?.fieldErrors?.currency_id?.[userContext.language]}
            />
            <Input
              variant='textarea'
              placeholder={t('user:description')}
              id='i_description'
              name='description'
              value={resume?.job_position?.description}
              errorText={actionData?.fieldErrors?.description?.[userContext.language]}
            />
          </BoxFields>
        </BoxUserEditData>
      </CardContainer>
    </BoxCard>
  );
}
