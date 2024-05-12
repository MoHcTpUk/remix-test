import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';
import type { Vacancy } from 'shared/v2/vacancies';

import { BoxCard } from '~/components/common/Card';
import { Input } from '~/components/common/Input';
import { Select } from '~/components/common/Select';
import { Switcher } from '~/components/common/Switcher';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { BoxSetting } from '~/components/pages/User/Resumes/Resume/components/ResumeSettings/styles';
import { BoxFields, CardContainer } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import type { StateCard } from '~/types/enums/stateCardEnum';
import { VacancyCardEnum } from '~/types/enums/stateCardEnum';
import { VariantCardEnum } from '~/types/enums/variantCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IUpdateVacancy } from '~/types/interfaces/iForms';
import { extractTitles } from '~/utils/helpers';

import { FieldsWrapper } from '../../styles';

export default function VacancyResponsesEdit({
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
  const { t, theme, userContext } = useApp();

  const renderFormFields = (disabled?: boolean) => (
    <>
      <BoxSetting>
        <Text variant={TextVariantEnum.textBody2medium}>
          {t('user:show_phone_number_for_verified_employees_only')}
        </Text>
        <Switcher
          checked={Boolean(vacancy?.responses_vacancy?.show_phone_number)}
          htmlLabel='i_show_phone'
          name='show_phone'
          variant='default'
          checkedLabel={t('common:show')}
          unCheckedLabel={t('common:hide')}
        />
      </BoxSetting>

      <BoxSetting>
        <Text variant={TextVariantEnum.textBody2medium}>
          {t('user:show_email_for_verified_employees_only')}
        </Text>
        <Switcher
          htmlLabel='i_show_email'
          name='show_email'
          checked={Boolean(vacancy?.responses_vacancy?.show_email)}
          variant='default'
          checkedLabel={t('common:show')}
          unCheckedLabel={t('common:hide')}
        />
      </BoxSetting>
    </>
  );

  return (
    <BoxCard
      title={t('user:responses_vacancy')}
      withEditButton
      nameCard={VacancyCardEnum.responses}
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
          <input name='nameCard' type='hidden' value='responses_vacancy' />
          <Select
            entries={extractTitles(dictionaries?.responseCanBeDoneBy, userContext.language)}
            placeholder={t('user:response_can_be_done_by')}
            id='canBeDoneBy'
            name='canBeDoneBy'
            values={[vacancy?.responses_vacancy?.response_can_be_done_by_id || '']}
            errorText={actionData?.fieldErrors?.response_can_be_done_by_id?.[userContext.language]}
          />
          <Input
            placeholder={t('user:email_for_the_responses')}
            id='email'
            name='email'
            value={vacancy?.responses_vacancy?.email_for_the_responses || userContext.user.email}
            errorText={actionData?.fieldErrors?.email_for_the_responses?.[userContext.language]}
          />
          <Select
            entries={extractTitles(dictionaries?.emailNotificationsSettings, userContext.language)}
            placeholder={t('user:get_email_notifications_for')}
            id='notificationsSettings'
            name='notificationsSettings'
            values={[vacancy?.responses_vacancy?.response_can_be_done_by_id || '']}
            errorText={actionData?.fieldErrors?.response_can_be_done_by_id?.[userContext.language]}
          />

          <Select
            entries={extractTitles(dictionaries?.complianceOfRequirements, userContext.language)}
            placeholder={t('user:compliance_of_requirements')}
            id='complianceOfRequirements'
            name='complianceOfRequirements'
            values={[vacancy?.responses_vacancy?.compliance_of_requirements_id || '']}
            errorText={
              actionData?.fieldErrors?.compliance_of_requirements_id?.[userContext.language]
            }
          />
          <FieldsWrapper variant='edit'>{renderFormFields()}</FieldsWrapper>
        </BoxFields>
      </CardContainer>
    </BoxCard>
  );
}
