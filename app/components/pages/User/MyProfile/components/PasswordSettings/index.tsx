import { motion } from 'framer-motion';
import type { StateCard } from 'public/enums/stateCardEnum';
import type { Dispatch, SetStateAction } from 'react';
import { memo } from 'react';

import { Button } from '~/components/common/Button/styles';
import { Input } from '~/components/common/Input';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';

import { BoxCard } from '../../../components/Card';
import { BoxFields, SubBox } from './styles';

export const PasswordSettings = memo(
  ({
    stateUserPassword,
    setStateUserPassword,
  }: {
    stateUserPassword: StateCard;
    setStateUserPassword: Dispatch<SetStateAction<StateCard>>;
  }): JSX.Element => {
    const { theme, t } = useApp();

    return (
      <BoxCard
        title={t('user:security_settings')}
        state={stateUserPassword}
        setState={setStateUserPassword}
        withControl
      >
        {stateUserPassword === 'info' && (
          <SubBox
            as={motion.div}
            initial={{ x: '-100%' }}
            animate={{
              x: 0,
            }}
            exit={{
              x: '100%',
            }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
          >
            <Text variant={TextVariantEnum.textBody1medium}>
              {t('user:benefits_of_changing_your_password_regularly')}
            </Text>
            <Text variant={TextVariantEnum.textBody2} color={theme.user.descriptionTextColor}>
              {t('user:it_limits_breaches_to_multiple_users')}
            </Text>
            <Button priority='small' fullwidth onClick={() => setStateUserPassword('edit')}>
              <Text> {t('user:change_password')}</Text>
            </Button>
          </SubBox>
        )}
        {stateUserPassword === 'edit' && (
          <SubBox
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
          </SubBox>
        )}
      </BoxCard>
    );
  },
);
