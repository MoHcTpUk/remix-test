import { useFetcher } from '@remix-run/react';
import { memo, useEffect, useRef } from 'react';

import Button from '~/components/common/Button';
import { Input } from '~/components/common/Input';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { CommonLayout } from '~/components/layouts/CommonLayout';
import { useApp } from '~/hooks';
import type { IError } from '~/routes/auth.reset-password';

import { BoxForm, Wrapper } from './styles';

export const ResetPassword = memo(({ actionData }: { actionData: IError | null }): JSX.Element => {
  const { t } = useApp();

  const resetPaswword = useFetcher();

  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (actionData?.fieldErrors.password_confirmation) {
      confirmPasswordRef.current?.focus();
    } else if (actionData?.fieldErrors.password) {
      passwordRef.current?.focus();
    }
  }, [actionData]);

  return (
    <CommonLayout>
      <Wrapper>
        <resetPaswword.Form
          method='POST'
          action='/auth/reset-password'
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <BoxForm>
            <Text variant={TextVariantEnum.textHeading3} style={{ textAlign: 'center' }}>
              {t('auth:new_password')}
            </Text>
            <Input
              ref={passwordRef}
              htmlType='password'
              placeholder={t('auth:enter_password')}
              id='i_password'
              name='password'
            />
            <Input
              ref={confirmPasswordRef}
              htmlType='password'
              placeholder={t('auth:password_confirmation')}
              id='i_password_confirmation'
              name='password_confirmation'
            />
            <Button priority='primary' fullwidth>
              <Text variant={TextVariantEnum.textBody2}>{t('auth:fo')}</Text>
            </Button>
            <Button priority='small' fullwidth>
              <Text variant={TextVariantEnum.textBody2}>{t('auth:cansel')}</Text>
            </Button>
          </BoxForm>
        </resetPaswword.Form>
      </Wrapper>
    </CommonLayout>
  );
});
