import { Form, useFetcher } from '@remix-run/react';
import { memo, useEffect, useRef } from 'react';

import Button from '~/components/common/Button';
import { Input } from '~/components/common/Input';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { CommonLayout } from '~/components/layouts/CommonLayout';
import { useApp } from '~/hooks';
import type { IResetPassword } from '~/types/interfaces/iForms';

import { BoxForm, Wrapper } from './styles';

export const ResetPassword = memo(({ actionData }: { actionData: IResetPassword }): JSX.Element => {
  const { t, userContext } = useApp();

  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (actionData?.fieldErrors?.password_confirm?.[userContext.language]) {
      confirmPasswordRef.current?.focus();
    } else if (actionData?.fieldErrors?.password?.[userContext.language]) {
      passwordRef.current?.focus();
    }
  }, [actionData]);

  return (
    <CommonLayout>
      <Wrapper>
        <Form
          method='POST'
          action='/auth/reset-password'
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <BoxForm>
            <Text variant={TextVariantEnum.textHeading3} style={{ textAlign: 'center' }}>
              {t('auth:new_password')}
            </Text>
            <Input
              htmlType='password'
              placeholder={t('auth:enter_password')}
              id='i_password'
              name='password'
              variant='password'
              aria-invalid={
                actionData?.fieldErrors?.password?.[userContext.language] ? true : undefined
              }
              errorText={actionData?.fieldErrors?.password?.[userContext.language]}
            />
            <Input
              htmlType='password'
              placeholder={t('auth:password_confirmation')}
              id='i_password_confirmation'
              name='password_confirm'
              aria-invalid={
                actionData?.fieldErrors?.password_confirm?.[userContext.language] ? true : undefined
              }
              errorText={actionData?.fieldErrors?.password_confirm?.[userContext.language]}
            />
            <Button priority='primary' fullwidth type='submit'>
              <Text variant={TextVariantEnum.textBody2}>{t('user:change_password')}</Text>
            </Button>
          </BoxForm>
        </Form>
      </Wrapper>
    </CommonLayout>
  );
});
