import type { FetcherWithComponents } from '@remix-run/react';
import { motion } from 'framer-motion';
import type { StateCard } from 'public/enums/stateCardEnum';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { memo } from 'react';
import type { EntityGetUserInfoResponse } from 'shared/client/data-contracts';

import { Box } from '~/components/common/Box';
import { Button } from '~/components/common/Button/styles';
import { Input } from '~/components/common/Input';
import { Select } from '~/components/common/Select';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';

import { BoxCard } from '../../../components/Card';
import { DataField } from '../../../components/DataFIeld';
import { BoxAvatar, BoxFields, BoxPicture, BoxUserData, BoxUserEditData } from './styles';

export const GeneralInfo = memo(
  ({
    stateUserInfo,
    setStateUserInfo,
    fetcher,
    user,
  }: {
    stateUserInfo: StateCard;
    setStateUserInfo?: Dispatch<SetStateAction<StateCard>>;
    fetcher: FetcherWithComponents<EntityGetUserInfoResponse>;
    user?: EntityGetUserInfoResponse | null;
  }): JSX.Element => {
    const { t } = useApp();

    return (
      <BoxCard
        title={t('user:personal_information')}
        state={stateUserInfo}
        setState={setStateUserInfo}
        withEditButton
        withControl
      >
        {stateUserInfo === 'info' && (
          <BoxUserData
            as={motion.div}
            initial={{ x: '-100vw' }}
            animate={{
              x: 0,
            }}
            exit={{
              x: '100vw',
            }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
          >
            <DataField
              label={t('user:first_name')}
              data={fetcher.data?.firstName || user?.firstName || ''}
            />
            <DataField
              label={t('user:last_name')}
              data={fetcher.data?.lastName || user?.lastName || ''}
            />
            <DataField label={t('user:gender')} data={fetcher.data?.gender || user?.gender || ''} />
            <DataField
              label={t('user:date_of_birth')}
              data={fetcher.data?.birthday || user?.birthday || ''}
            />
            <DataField label={t('user:email')} data={fetcher.data?.email || user?.email || ''} />
            <DataField label={t('user:phone')} data={fetcher.data?.phone || user?.phone || ''} />
            <DataField
              label={t('user:language_of_notify')}
              data={fetcher.data?.primaryLanguage || user?.primaryLanguage || ''}
            />
          </BoxUserData>
        )}
        {stateUserInfo === 'edit' && (
          <Box
            width='100%'
            as={motion.div}
            initial={{ x: '100%' }}
            animate={{
              x: 0,
            }}
            exit={{
              x: '100%',
            }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
          >
            <BoxUserEditData>
              <BoxPicture>
                <Text variant={TextVariantEnum.textBody1medium}>{t('user:profile_picture')}</Text>
                <BoxAvatar>
                  <img src='images/user/avatarDefault.png' alt='avatar' />
                  <Button priority='small' fullwidth>
                    <Text> {t('user:edit_photo')}</Text>
                  </Button>
                </BoxAvatar>
              </BoxPicture>
              <BoxFields>
                <Input
                  placeholder={t('user:first_name')}
                  id='i_firstName'
                  name='firstName'
                  value={fetcher.data?.firstName || user?.firstName || ''}
                />
                <Input
                  placeholder={t('user:last_name')}
                  id='i_lastName'
                  name='lastName'
                  value={fetcher.data?.lastName || user?.lastName || ''}
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
                  name='gender'
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
                  name='birthday'
                />
                <Input
                  placeholder={t('user:email')}
                  id='i_email'
                  name='email'
                  value={fetcher.data?.email || user?.email || ''}
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
                  name='primaryLanguage'
                />
              </BoxFields>
            </BoxUserEditData>
          </Box>
        )}
      </BoxCard>
    );
  },
);
