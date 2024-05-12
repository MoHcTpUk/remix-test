import type { MutableRefObject } from 'react';
import { memo } from 'react';
import type { UserInfo } from 'shared/v2/users';

import { CheckBox } from '~/components/common/Checkbox';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { CardContainer } from '~/components/ui/Card';
import { useApp } from '~/hooks';

import { BoxCard } from '../../../../../common/Card';

export const NotifySettings = memo(
  ({
    user,
    formRef,
  }: {
    user?: UserInfo | null;
    formRef?: MutableRefObject<null>;
  }): JSX.Element => {
    const { theme, t } = useApp();

    return (
      <BoxCard title={t('user:notifications')}>
        <CardContainer>
          <CheckBox
            name='notify_phone'
            label={t('user:phone_notifications')}
            checked={user?.notifications?.phone ?? false}
            value={user?.notifications?.phone?.toString()}
            id='phone_notifications'
            // onChange={handleChangeNotify}
          />
          <Text variant={TextVariantEnum.textBody2} color={theme.user.descriptionTextColor}>
            {t(
              'user:by_submitting_the_form_and_checking_this_box_i_hereby_agree_to_receive_calls_sms_and_or_Line_messages_from_UPJOB_company_and_employers_who_use_UPJOB_including_through_automated_dialing_systems_and_recorded_calls_to_the_above_phone_number',
            )}
          </Text>
        </CardContainer>

        <CardContainer>
          <CheckBox
            name='notify_email'
            label={t('user:email_notifications')}
            checked={user?.notifications?.email}
            value={user?.notifications?.email?.toString()}
            id='email_notifications'
            // onChange={handleChangeNotify}
          />
          <Text variant={TextVariantEnum.textBody2} color={theme.user.descriptionTextColor}>
            {t(
              'user:by_submitting_the_form_and_checking_this_box_i_hereby_agree_to_receive_email_from_UPJOB_company_and_employers_who_use_UPJOB_including_automated_notifications_by_email',
            )}
          </Text>
        </CardContainer>
      </BoxCard>
    );
  },
);
