import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';
import { type Resume, SettingsEmailNotificationsEnum } from 'shared/v2/resumes';

import { BoxCard } from '~/components/common/Card';
import { Select } from '~/components/common/Select';
import { Switcher } from '~/components/common/Switcher';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { CardContainer } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import type { StateCard } from '~/types/enums/stateCardEnum';
import { ResumeCardEnum } from '~/types/enums/stateCardEnum';
import { VariantCardEnum } from '~/types/enums/variantCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IUpdateResume } from '~/types/interfaces/iForms';
import { extractTitles } from '~/utils/helpers.client';

import { BoxSetting, Wrapper } from './styles';

export default function ResumeSettingsEdit({
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
  const { t } = useApp();

  return (
    <BoxCard
      title={t('user:settings')}
      withEditButton
      nameCard={ResumeCardEnum.settings}
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
        <input name='nameCard' type='hidden' value='settings' />
        <Wrapper>
          <BoxSetting>
            <Text variant={TextVariantEnum.textBody2medium}>{t('user:show_resume_to')}</Text>
            <Switcher
              checked={resume?.settings?.show_resume_to === 'anyone'}
              value={(resume?.settings?.show_resume_to === 'anyone').toString()}
              htmlLabel='i_show_phone'
              name='show_resume_to'
              variant='default'
              checkedLabel={t('user:anyone')}
              unCheckedLabel={t('user:nobody')}
            />
          </BoxSetting>

          <BoxSetting>
            <Text variant={TextVariantEnum.textBody2medium}>{t('user:show_phone_number_to')}</Text>
            <Switcher
              checked={resume?.settings?.show_phone_number_to === 'anyone'}
              value={(resume?.settings?.show_phone_number_to === 'anyone').toString()}
              htmlLabel='show_phone_number_to'
              name='show_phone_number_to'
              variant='default'
              checkedLabel={t('user:anyone')}
              unCheckedLabel={t('user:nobody')}
            />
          </BoxSetting>

          <BoxSetting>
            <Text variant={TextVariantEnum.textBody2medium}>{t('user:show_email_to')}</Text>
            <Switcher
              checked={String(resume?.settings?.show_email_to) === 'anyone'}
              value={String(resume?.settings?.show_email_to === 'anyone')}
              htmlLabel='show_email_to'
              name='show_email_to'
              variant='default'
              checkedLabel={t('user:anyone')}
              unCheckedLabel={t('user:nobody')}
            />
          </BoxSetting>

          <BoxSetting>
            <Select
              entries={[
                ['response', t('user:each_response')],
                ['never', t('user:do_not_send')],
              ]}
              placeholder={t('user:email_notifications')}
              id='email_notifications'
              name='email_notifications'
              values={[resume?.settings?.email_notifications || '']}
            />
          </BoxSetting>
        </Wrapper>
      </CardContainer>
    </BoxCard>
  );
}
