import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';
import type { Vacancy } from 'shared/v2/vacancies';

import { BoxCard } from '~/components/common/Card';
import { Switcher } from '~/components/common/Switcher';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { DataField } from '~/components/entities/DataFIeld';
import { BoxSetting } from '~/components/pages/User/Resumes/Resume/components/ResumeSettings/styles';
import { CardContainer } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import { VacancyCardEnum } from '~/types/enums/stateCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import { getValueFromDictionaries } from '~/utils/helpers.client';

import { BoxLabel, SwitcherBox } from '../../../styles';
import { FieldsWrapper } from '../../styles';

export default function VacancyResponsesData({
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
  const { t, theme, userContext } = useApp();

  const renderFormFields = (disabled?: boolean) => (
    <>
      <BoxSetting>
        <Text variant={TextVariantEnum.textBody2medium}>
          {t('user:show_phone_number_for_verified_employees_only')}
        </Text>
        <SwitcherBox>
          <Switcher
            checked={Boolean(vacancy?.responses_vacancy?.show_phone_number)}
            htmlLabel='i_show_phone'
            name='show_phone'
            disabled
          />
          <BoxLabel style={{ cursor: 'pointer' }}>
            <Text
              color={
                vacancy?.responses_vacancy?.show_phone_number
                  ? theme.switcher.backgroundChecked
                  : theme.switcher.textDefaultColor
              }
              variant={TextVariantEnum.textBody2}
            >
              {vacancy?.responses_vacancy?.show_phone_number ? t('common:show') : t('common:hide')}
            </Text>
          </BoxLabel>
        </SwitcherBox>
      </BoxSetting>

      <BoxSetting>
        <Text variant={TextVariantEnum.textBody2medium}>
          {t('user:show_email_for_verified_employees_only')}
        </Text>
        <SwitcherBox>
          <Switcher
            // onChange={handleOnChange}
            htmlLabel='i_show_email'
            name='show_email'
            disabled
            checked={Boolean(vacancy?.responses_vacancy?.show_email)}
          />
          <BoxLabel style={{ cursor: 'pointer' }}>
            <Text
              color={
                vacancy?.responses_vacancy?.show_email
                  ? theme.switcher.backgroundChecked
                  : theme.switcher.textDefaultColor
              }
              variant={TextVariantEnum.textBody2}
            >
              {vacancy?.responses_vacancy?.show_email ? t('common:show') : t('common:hide')}
            </Text>
          </BoxLabel>
        </SwitcherBox>
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
    >
      <CardContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
      >
        <DataField
          label={t('user:response_can_be_done_by')}
          data={getValueFromDictionaries(
            dictionaries?.responseCanBeDoneBy,
            vacancy?.responses_vacancy?.response_can_be_done_by_id,
            userContext.language,
          )}
        />
        <DataField
          label={t('user:email_for_the_responses')}
          data={vacancy?.responses_vacancy?.email_for_the_responses}
        />
        <DataField
          label={t('user:get_email_notifications_for')}
          data={getValueFromDictionaries(
            dictionaries?.emailNotificationsSettings,
            vacancy?.responses_vacancy?.get_email_notifications_for_id,
            userContext.language,
          )}
        />
        <DataField
          label={t('user:compliance_of_requirements')}
          data={getValueFromDictionaries(
            dictionaries?.complianceOfRequirements,
            vacancy?.responses_vacancy?.compliance_of_requirements_id,
            userContext.language,
          )}
        />
        <FieldsWrapper variant='data'>{renderFormFields()}</FieldsWrapper>
      </CardContainer>
    </BoxCard>
  );
}
