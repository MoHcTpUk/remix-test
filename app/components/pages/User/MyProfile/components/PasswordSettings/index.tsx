import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';
import { memo } from 'react';

import { Box } from '~/components/common/Box';
import { Button } from '~/components/common/Button/styles';
import { Input } from '~/components/common/Input';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { BoxFields, CardContainer } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import type { StateCard } from '~/types/enums/stateCardEnum';
import type { IUpdateProfile } from '~/types/interfaces/iForms';

import { BoxCard } from '../../../../../common/Card';

export const PasswordSettings = memo(
  ({
    stateUserPassword,
    setStateUserPassword,
    actionData,
  }: {
    stateUserPassword: StateCard;
    setStateUserPassword: Dispatch<SetStateAction<StateCard>>;
    actionData?: IUpdateProfile;
  }): JSX.Element => {
    const { theme, t, userContext } = useApp();
    return (
      <BoxCard
        title={t('user:security_settings')}
        state={stateUserPassword}
        setState={setStateUserPassword}
        withControl
      >
        {stateUserPassword === 'info' && (
          <CardContainer
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            style={{ gap: '16px' }}
            withGrowingBtn
          >
            <Box display='flex' flexDirection='column' gap='8px'>
              <Text variant={TextVariantEnum.textBody1medium}>
                {t('user:benefits_of_changing_your_password_regularly')}
              </Text>
              <Text variant={TextVariantEnum.textBody2} color={theme.user.descriptionTextColor}>
                {t('user:it_limits_breaches_to_multiple_users')}
              </Text>
            </Box>
            <Button
              priority='secondary'
              className='growingButton'
              onClick={() => setStateUserPassword('edit')}
            >
              <Text variant={TextVariantEnum.textBody2}> {t('user:change_password')}</Text>
            </Button>
          </CardContainer>
        )}
        {stateUserPassword === 'edit' && (
          <CardContainer
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            style={{ gap: '16px' }}
          >
            <input type='hidden' name='formName' value='password' />

            <Text variant={TextVariantEnum.textBody1medium}>
              {t(
                'user:create_a_new_password_use_a_minimum_of_characters_including_uppercase_letters_lowercase_letters_and_numbers',
              )}
            </Text>
            <BoxFields>
              <Input
                placeholder={t('auth:enter_password')}
                id='i_password'
                name='password'
                variant='password'
                errorText={actionData?.fieldErrors?.password?.[userContext.language]}
              />
              <Input
                placeholder={t('auth:password_confirmation')}
                id='i_passwordConfirmation'
                name='password_confirmation'
                variant='password'
                errorText={actionData?.fieldErrors?.passwordConfirm?.[userContext.language]}
              />
            </BoxFields>
          </CardContainer>
        )}
      </BoxCard>
    );
  },
);
