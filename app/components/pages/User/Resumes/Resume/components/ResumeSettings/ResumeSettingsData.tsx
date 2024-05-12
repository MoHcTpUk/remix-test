import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';
import { type Resume, SettingsEmailNotificationsEnum } from 'shared/v2/resumes';

import { BoxCard } from '~/components/common/Card';
import { Switcher } from '~/components/common/Switcher';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { DataField } from '~/components/entities/DataFIeld';
import { CardContainer } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import { ResumeCardEnum } from '~/types/enums/stateCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';

import { BoxSetting, Wrapper } from './styles';

export default function ResumeSettingsData({
  editCard,
  setEditCard,
  resume,
  dictionaries,
}: {
  resume?: Resume | null;
  dictionaries?: IDictionaries;
  editCard: ResumeCardEnum;
  setEditCard: Dispatch<SetStateAction<string>>;
}) {
  const { t, theme, userContext } = useApp();

  const renderFormFields = (disabled?: boolean) => (
    <>
      <BoxSetting>
        <Text variant={TextVariantEnum.textBody2medium}>{t('user:show_resume_to')}</Text>
        <Switcher
          checked={resume?.settings?.show_resume_to === 'anyone'}
          value={resume?.settings?.show_resume_to}
          htmlLabel='i_show_phone'
          name='show_resume_to'
          variant='default'
          checkedLabel={t('user:anyone')}
          unCheckedLabel={t('user:nobody')}
          disabled
        />
      </BoxSetting>

      <BoxSetting>
        <Text variant={TextVariantEnum.textBody2medium}>{t('user:show_phone_number_to')}</Text>
        <Switcher
          checked={resume?.settings?.show_phone_number_to === 'anyone'}
          value={resume?.settings?.show_phone_number_to}
          htmlLabel='show_phone_number_to'
          name='show_phone_number_to'
          variant='default'
          checkedLabel={t('user:anyone')}
          unCheckedLabel={t('user:nobody')}
          disabled
        />
      </BoxSetting>

      <BoxSetting>
        <Text variant={TextVariantEnum.textBody2medium}>{t('user:show_email_to')}</Text>
        <Switcher
          checked={resume?.settings?.show_email_to === 'anyone'}
          value={resume?.settings?.show_email_to}
          htmlLabel='show_email_to'
          name='show_email_to'
          variant='default'
          checkedLabel={t('user:anyone')}
          unCheckedLabel={t('user:nobody')}
          disabled
        />
      </BoxSetting>

      <BoxSetting>
        <Text variant={TextVariantEnum.textBody2medium}>{t('user:email_notifications')}</Text>
        <DataField
          // label={t('user:email_notifications')}
          data={(() => {
            const emailNotifications = resume?.settings?.email_notifications;
            switch (emailNotifications) {
              case SettingsEmailNotificationsEnum.never:
                return t('user:do_not_send');
              case SettingsEmailNotificationsEnum.response:
                return t('user:each_response');
              default:
                return '';
            }
          })()}
        />
      </BoxSetting>
    </>
  );

  return (
    <BoxCard
      title={t('user:settings')}
      withEditButton
      nameCard={ResumeCardEnum.settings}
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
        <Wrapper>{renderFormFields(true)}</Wrapper>
      </CardContainer>
    </BoxCard>
  );
}
