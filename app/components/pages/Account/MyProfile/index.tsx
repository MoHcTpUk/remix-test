import { Form, useFetcher } from '@remix-run/react';
import { motion } from 'framer-motion';
import { IconEnum } from 'public/enums/iconEnum';
import { memo, useState } from 'react';
import type { EntityGetUserInfoResponse } from 'shared/client/data-contracts';
import styled from 'styled-components';

import { Box } from '~/components/common/Box';
import Button from '~/components/common/Button';
import { CheckBox } from '~/components/common/Checkbox';
import { Icon } from '~/components/common/Icon';
import { Input } from '~/components/common/Input';
import { Select } from '~/components/common/Select';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';

export const BoxAccount = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
  background-color: ${({ theme }) => theme.account.backgroundPageColor};
`;

export const BoxHeading = styled.div`
  background: url('images/account/backgroundHeading.jpg') no-repeat;
  background-size: cover;
  background-repeat: round;
  width: 100%;
  padding: 16px;
  border-radius: 8px;
`;

export const BoxCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: ${({ theme }) => theme.account.backgroundCardColor};
  border-radius: 8px;
  gap: 16px;
`;

export const BoxCardHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.account.borderColor};

  span {
    max-width: 140px;
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BoxUserData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BoxUserEditData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BoxData = styled.div`
  padding: 11px 16px;
  border-radius: 80px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.account.borderColor};
`;

export const SubBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BoxPicture = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const BoxAvatar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  img {
    width: 96px;
    height: 96px;
  }
`;

export const BoxFields = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.account.borderColor};
`;

export const BoxCotrol = styled.div`
  display: flex;
  flex-direction: 'row';
  gap: 16px;

  .icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

function DataField({ label, data }: { label: string; data: string }) {
  return (
    <FieldWrapper>
      <Text variant={TextVariantEnum.textBody2}>{label}</Text>
      <BoxData>
        <Text variant={TextVariantEnum.textBody2medium}>{data}</Text>
      </BoxData>
    </FieldWrapper>
  );
}

export const UserInfo = memo(
  ({ user }: { user?: EntityGetUserInfoResponse | null }): JSX.Element => {
    const { theme, t } = useApp();

    const phoneNotify = useFetcher();
    const emailNotify = useFetcher();
    const userInfo = useFetcher();

    const [stateUserInfo, setStateUserInfo] = useState<'info' | 'edit'>('info');
    const [stateUserPassword, setStateUserPassword] = useState<'info' | 'change'>('info');

    return (
      <BoxAccount>
        <BoxHeading>
          <Text variant={TextVariantEnum.textHeading1} color={theme.account.headinTextColor}>
            {t('user:my_profile')}
          </Text>
        </BoxHeading>

        <BoxCard>
          <BoxCardHeading>
            <Text variant={TextVariantEnum.textHeading2}>{t('user:personal_information')}</Text>
            {stateUserInfo === 'info' && (
              <Button priority='small' onClick={() => setStateUserInfo('edit')}>
                <Text> {t('common:edit')}</Text>
              </Button>
            )}
          </BoxCardHeading>
          {stateUserInfo === 'info' && (
            <BoxUserData as={motion.div} initial={{ x: '-100%' }} animate={{ x: '0' }}>
              <DataField label={t('user:first_name')} data={user?.firstName || ''} />
              <DataField label={t('user:last_name')} data={user?.lastName || ''} />
              <DataField label={t('user:gender')} data={user?.gender || ''} />
              <DataField label={t('user:date_of_birth')} data={user?.birthday || ''} />
              <DataField label={t('user:email')} data={user?.email || ''} />
              <DataField label={t('user:phone')} data={user?.phone || ''} />
              <DataField label={t('user:language_of_notify')} data={user?.primaryLanguage || ''} />
            </BoxUserData>
          )}
          {stateUserInfo === 'edit' && (
            <Box width='100%' as={motion.div} initial={{ x: '100%' }} animate={{ x: '0' }}>
              <userInfo.Form
                style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
                method='POST'
                action='/account'
              >
                <BoxUserEditData>
                  <BoxPicture>
                    <Text variant={TextVariantEnum.textBody1medium}>
                      {t('user:profile_picture')}
                    </Text>
                    <BoxAvatar>
                      <img src={user?.photo || 'images/account/avatarDefault.png'} alt='avatar' />
                      <Button priority='small' fullwidth>
                        <Text> {t('user:edit_photo')}</Text>
                      </Button>
                    </BoxAvatar>
                  </BoxPicture>
                  <BoxFields>
                    <Input
                      placeholder={t('user:first_name')}
                      id='i_firstName'
                      name='first_name'
                      value={user?.firstName}
                    />
                    <Input
                      placeholder={t('user:last_name')}
                      id='i_lastName'
                      name='last_name'
                      value={user?.lastName}
                    />
                    <Select
                      values={['test', 'test1', 'test2', 'test3', 'test4', 'test5']}
                      entries={[
                        ['1', 'test1-1'],
                        ['2', 'test2-1'],
                        ['3', 'test3-1'],
                        ['4', 'test4-1'],
                        ['5', 'test5-1'],
                      ]}
                      placeholder={t('user:gender')}
                      id='i_gender'
                    />
                    <Select
                      values={['test', 'test1', 'test2', 'test3', 'test4', 'test5']}
                      entries={[
                        ['1', 'test1-1'],
                        ['2', 'test2-1'],
                        ['3', 'test3-1'],
                        ['4', 'test4-1'],
                        ['5', 'test5-1'],
                      ]}
                      placeholder={t('user:date_of_birth')}
                      id='i_dateOfBirth'
                    />
                    <Input
                      placeholder={t('user:email')}
                      id='i_email'
                      name='email'
                      value={user?.email}
                    />
                    <Input
                      placeholder={t('user:phone')}
                      id='i_phone'
                      name='phone'
                      value={user?.phone}
                    />
                    <Select
                      values={['test', 'test1', 'test2', 'test3', 'test4', 'test5']}
                      entries={[
                        ['1', 'test1-1'],
                        ['2', 'test2-1'],
                        ['3', 'test3-1'],
                        ['4', 'test4-1'],
                        ['5', 'test5-1'],
                      ]}
                      placeholder={t('user:language_of_notify')}
                      id='i_languageOfNotify'
                    />
                  </BoxFields>
                  <BoxCotrol>
                    <Button
                      onClick={() => setStateUserInfo('info')}
                      className='icon'
                      priority='small'
                    >
                      <Icon name={IconEnum.arrowLeft} color={theme.account.iconColor} />
                    </Button>
                    <Button priority='primary' fullwidth>
                      <Text> {t('common:edit')}</Text>
                    </Button>
                  </BoxCotrol>
                </BoxUserEditData>
              </userInfo.Form>
            </Box>
          )}
        </BoxCard>
        <BoxCard>
          <BoxCardHeading>
            <Text variant={TextVariantEnum.textHeading2}>{t('user:security_settings')}</Text>
          </BoxCardHeading>
          {stateUserPassword === 'info' && (
            <SubBox as={motion.div} initial={{ x: '-100%' }} animate={{ x: '0' }}>
              <Text variant={TextVariantEnum.textBody1medium}>
                {t('user:benefits_of_changing_your_password_regularly')}
              </Text>
              <Text variant={TextVariantEnum.textBody2} color={theme.account.descriptionTextColor}>
                {t('user:it_limits_breaches_to_multiple_accounts')}
              </Text>
              <Button priority='small' fullwidth onClick={() => setStateUserPassword('change')}>
                <Text> {t('user:change_password')}</Text>
              </Button>
            </SubBox>
          )}
          {stateUserPassword === 'change' && (
            <SubBox as={motion.div} initial={{ x: '100%' }} animate={{ x: '0' }}>
              <Text variant={TextVariantEnum.textBody1medium}>
                {t(
                  'user:create_a_new_password_use_a_minimum_of_characters_including_uppercase_letters_lowercase_letters_and_numbers',
                )}
              </Text>
              <BoxFields>
                <Input placeholder={t('auth:enter_password')} id='i_password' name='password' />
                <Input
                  placeholder={t('auth:password_confirmation')}
                  id='i_passwordConfirmation'
                  name='password_confirmation'
                />
              </BoxFields>
              <BoxCotrol>
                <Button
                  onClick={() => setStateUserPassword('info')}
                  className='icon'
                  priority='small'
                >
                  <Icon name={IconEnum.arrowLeft} color={theme.account.iconColor} />
                </Button>
                <Button priority='primary' fullwidth>
                  <Text> {t('common:save')}</Text>
                </Button>
              </BoxCotrol>
            </SubBox>
          )}
        </BoxCard>
        <BoxCard>
          <BoxCardHeading>
            <Text variant={TextVariantEnum.textHeading2}>{t('user:notifications')}</Text>
          </BoxCardHeading>

          <SubBox>
            <phoneNotify.Form style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
              <CheckBox
                name='phoneNotify'
                label={t('user:phone_notifications')}
                checked={user?.notifications?.phone}
              />
            </phoneNotify.Form>
            <Text variant={TextVariantEnum.textBody2} color={theme.account.descriptionTextColor}>
              {t(
                'user:by_submitting_the_form_and_checking_this_box_i_hereby_agree_to_receive_calls_sms_and_or_Line_messages_from_UPJOB_company_and_employers_who_use_UPJOB_including_through_automated_dialing_systems_and_recorded_calls_to_the_above_phone_number',
              )}
            </Text>
          </SubBox>

          <SubBox>
            <emailNotify.Form
              method='POST'
              style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CheckBox
                name='emailNotify'
                label={t('user:email_notifications')}
                checked={user?.notifications?.phone}
              />
            </emailNotify.Form>
            <Text variant={TextVariantEnum.textBody2} color={theme.account.descriptionTextColor}>
              {t(
                'user:by_submitting_the_form_and_checking_this_box_i_hereby_agree_to_receive_email_from_UPJOB_company_and_employers_who_use_UPJOB_including_automated_notifications_by_email',
              )}
            </Text>
          </SubBox>
        </BoxCard>
        {/* <Text>{JSON.stringify(data)}</Text> */}
      </BoxAccount>
    );
  },
);
