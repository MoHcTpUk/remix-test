import { useFetcher } from '@remix-run/react';
import { useEffect, useRef } from 'react';

import Button from '~/components/common/Button';
import { Input } from '~/components/common/Input';
import { Modal } from '~/components/common/Modal';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';
import type { IForgotPasswordResponse } from '~/routes/auth.forgot-password';

import { BoxContainer, BoxTextWrapper } from './styles';

export default function ForgotPasswordPage({
  visibility,
  setVisibility,
  setVisibilityLogin,
}: {
  visibility: boolean;
  setVisibility: (visibility: boolean) => void;
  setVisibilityLogin: (visibility: boolean) => void;
}) {
  const { t } = useApp();

  const forgotPassword = useFetcher<IForgotPasswordResponse>();
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (forgotPassword.data?.fieldErrors?.email) {
      emailRef.current?.focus();
    }

    if (forgotPassword.data?.status === 200 || forgotPassword.data?.status === 200)
      setVisibility(false);
  }, [forgotPassword]);

  return (
    <Modal visibility={visibility} setVisibility={setVisibility}>
      <BoxContainer>
        <BoxTextWrapper>
          <Text variant={TextVariantEnum.textHeading3} style={{ textAlign: 'center' }}>
            {t('auth:forgot_your_password')}
          </Text>
          <Text variant={TextVariantEnum.textBody1medium} style={{ textAlign: 'center' }}>
            {t('auth:no_problem_we_will_send')}
          </Text>
        </BoxTextWrapper>
        <forgotPassword.Form
          method='post'
          action='/auth/forgot-password'
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Input
            htmlType='email'
            placeholder={t('auth:enter_email')}
            id='i_email'
            name='email'
            textHelper={t('auth:enter_your_email_to_retrieve_a_new_password')}
            aria-invalid={forgotPassword.data?.fieldErrors?.email ? true : undefined}
            errorText={
              forgotPassword.data?.fieldErrors?.email
                ? forgotPassword.data?.fieldErrors?.email
                : undefined
            }
          />
          <Button priority='primary' fullwidth>
            <Text variant={TextVariantEnum.textBody2}>{t('auth:send_password')}</Text>
          </Button>
        </forgotPassword.Form>
        <Text variant={TextVariantEnum.textBody2} style={{ textAlign: 'center' }}>
          {t('auth:by_clicking_send_password_i_agree_to_the_terms_of_use_and_privacy_policy')}
        </Text>
        <Button
          priority='small'
          fullwidth
          onClick={() => {
            setVisibility(false);
            setVisibilityLogin(true);
          }}
        >
          <Text variant={TextVariantEnum.textBody2}>{t('auth:back_to_sign_in')}</Text>
        </Button>
      </BoxContainer>
    </Modal>
  );
}
