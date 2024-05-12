import { Link, useFetcher } from '@remix-run/react';
import { useEffect, useRef } from 'react';
import routes from 'shared/routing/routes';

import Button from '~/components/common/Button';
import { Input } from '~/components/common/Input';
import { Modal } from '~/components/common/Modal';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';
import type { IForgotPasswordResponse } from '~/types/interfaces/iForms';

import { BoxContainer, BoxTextWrapper, PoliciesText } from './styles';

export default function ForgotPasswordPage({
  visibility,
  setVisibility,
  setVisibilityLogin,
}: {
  visibility: boolean;
  setVisibility: (visibility: boolean) => void;
  setVisibilityLogin: (visibility: boolean) => void;
}) {
  const { t, userContext } = useApp();

  const forgotPassword = useFetcher<IForgotPasswordResponse>();
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (forgotPassword.data?.fieldErrors?.email) {
      emailRef.current?.focus();
    }

    if (forgotPassword.data?.status === 200 || forgotPassword.data?.status === 200)
      setVisibility(false);
  }, [forgotPassword.data]);

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
          method='POST'
          action='/auth/forgot-password'
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <Input
            htmlType='email'
            placeholder={t('auth:enter_email')}
            id='i_email'
            name='email'
            textHelper={t('auth:enter_your_email_to_retrieve_a_new_password')}
            aria-invalid={
              forgotPassword?.data?.fieldErrors?.email?.[userContext.language] ? true : undefined
            }
          />
          <Button priority='primary' fullwidth type='submit'>
            <Text variant={TextVariantEnum.textBody2}>{t('auth:send_password')}</Text>
          </Button>
        </forgotPassword.Form>

        <PoliciesText>
          <Text variant={TextVariantEnum.textBody2}>
            {`${t('auth:by_clicking_send_password_i_agree_to_the')} `}
          </Text>
          <Link to={routes.privacyPolicy.terms}>
            <Text
              variant={TextVariantEnum.textBody2}
              style={{ textDecoration: 'underline', cursor: 'pointer' }}
            >
              {t('auth:terms_of_use')}
            </Text>
          </Link>
          <Text variant={TextVariantEnum.textBody2}>{` ${t('auth:and')} `}</Text>
          <Link to={routes.privacyPolicy.root}>
            <Text
              variant={TextVariantEnum.textBody2}
              style={{ textDecoration: 'underline', cursor: 'pointer' }}
            >
              {t('auth:privacy_policy')}.
            </Text>
          </Link>
        </PoliciesText>

        <Button
          priority='secondary'
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
