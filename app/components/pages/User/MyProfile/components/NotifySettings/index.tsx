import type { FetcherWithComponents } from '@remix-run/react';
import { memo } from 'react';
import type { EntityGetUserInfoResponse } from 'shared/client/data-contracts';

import { CheckBox } from '~/components/common/Checkbox';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';

import { BoxCard } from '../../../components/Card';
import { SubBox } from './styles';

export const NotifySettings = memo(
  ({
    fetcher,
    user,
    handleChangeNotify,
  }: {
    handleChangeNotify: (e: React.ChangeEvent<HTMLInputElement>) => void;
    user?: EntityGetUserInfoResponse | null;
    fetcher: FetcherWithComponents<EntityGetUserInfoResponse>;
  }): JSX.Element => {
    const { theme, t } = useApp();

    return (
      <BoxCard title={t('user:notifications')}>
        <SubBox>
          <CheckBox
            name='phone_notify'
            label={t('user:phone_notifications')}
            checked={
              fetcher.data?.notifications?.phone !== undefined
                ? fetcher.data?.notifications?.phone
                : user?.notifications?.email ?? false
            }
            onChange={handleChangeNotify}
          />
          <Text variant={TextVariantEnum.textBody2} color={theme.user.descriptionTextColor}>
            {t(
              'user:by_submitting_the_form_and_checking_this_box_i_hereby_agree_to_receive_calls_sms_and_or_Line_messages_from_UPJOB_company_and_employers_who_use_UPJOB_including_through_automated_dialing_systems_and_recorded_calls_to_the_above_phone_number',
            )}
          </Text>
        </SubBox>

        <SubBox>
          <CheckBox
            name='email_notify'
            label={t('user:email_notifications')}
            checked={
              fetcher.data?.notifications?.email !== undefined
                ? fetcher.data?.notifications?.email
                : user?.notifications?.email
            }
            onChange={handleChangeNotify}
          />
          <Text variant={TextVariantEnum.textBody2} color={theme.user.descriptionTextColor}>
            {t(
              'user:by_submitting_the_form_and_checking_this_box_i_hereby_agree_to_receive_email_from_UPJOB_company_and_employers_who_use_UPJOB_including_automated_notifications_by_email',
            )}
          </Text>
        </SubBox>
      </BoxCard>
    );
  },
);
