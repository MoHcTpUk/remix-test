import { Form, Link, useFetcher } from '@remix-run/react';
import { IconEnum } from 'public/enums/iconEnum';
import type { EntitySignInRequest } from 'shared/client/data-contracts';

import Button from '~/components/common/Button';
import { Input } from '~/components/common/Input';
import { Modal } from '~/components/common/Modal';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';

import { BoxContainer, BoxForm, BoxHelp, BoxSocial, HelpButton, PoliciesText } from './styles';

interface ISignInResponse {
  fields: EntitySignInRequest;
  formError: null | string;
  fieldErrors: {
    email: string | undefined;
    password: string | undefined;
  };
}

export default function Login({
  visibility,
  setVisibility,
  setVisibilityForgotPassword,
}: {
  visibility: boolean;
  setVisibility: (visibility: boolean) => void;
  setVisibilityForgotPassword: (visibility: boolean) => void;
}) {
  const { t, theme } = useApp();

  const login = useFetcher<ISignInResponse>();

  return (
    <Modal visibility={visibility} setVisibility={setVisibility}>
      <BoxContainer>
        <Text variant={TextVariantEnum.textHeading3} style={{ textAlign: 'center' }}>
          {t('auth:create_new_user_or_sign_in')}
        </Text>
        <login.Form method='POST' action='/auth/login' style={{ width: '100%' }}>
          <BoxForm>
            <Input
              placeholder={t('auth:enter_email')}
              id='i_email'
              name='email'
              value='qwe@qwe.ru'
              aria-invalid={login.data?.fieldErrors.email ? true : undefined}
              errorText={login.data?.fieldErrors.email ? login.data?.fieldErrors.email : undefined}
            />
            <Input
              placeholder={t('auth:enter_password')}
              id='i_password'
              name='password'
              value='qwerty123'
              aria-invalid={login.data?.fieldErrors.password ? true : undefined}
              errorText={
                login.data?.fieldErrors.password ? login.data?.fieldErrors.password : undefined
              }
            />
            <Button priority='primary' fullwidth>
              <Text variant={TextVariantEnum.textBody2}>{t('auth:sign_in_with_email')}</Text>
            </Button>
          </BoxForm>
        </login.Form>
        <Text variant={TextVariantEnum.textBody2medium}>
          {t('auth:or_register_with_social_users')}
        </Text>
        <BoxSocial>
          <Form method='POST' action='/auth/login-google'>
            <Button priority='small' fullwidth iconName={IconEnum.google}>
              <Text variant={TextVariantEnum.textBody2}>{t('auth:sign_with_google')}</Text>
            </Button>
          </Form>
          <Form method='POST' action='/auth/login-facebook'>
            <Button priority='small' fullwidth iconName={IconEnum.fb}>
              <Text variant={TextVariantEnum.textBody2}>{t('auth:sign_with_facebook')}</Text>
            </Button>
          </Form>
        </BoxSocial>
        <BoxHelp>
          <HelpButton
            onClick={() => {
              setVisibility(false);
              setVisibilityForgotPassword(true);
            }}
          >
            <Text variant={TextVariantEnum.textBody2medium} color={theme.auth.helpButtonColor}>
              {t('auth:forgot_password')}
            </Text>
          </HelpButton>
          <HelpButton>
            <Link to='/auth/register'>
              <Text variant={TextVariantEnum.textBody2medium} color={theme.auth.helpButtonColor}>
                {t('auth:registration')}
              </Text>
            </Link>
          </HelpButton>
        </BoxHelp>
        <PoliciesText>
          <Text variant={TextVariantEnum.textBody2}>
            {`${t('auth:by_continuing_i_agree_to_the')} `}
          </Text>
          <Link to='/'>
            <Text
              variant={TextVariantEnum.textBody2}
              style={{ textDecoration: 'underline', cursor: 'pointer' }}
            >
              {t('auth:terms_of_use')}
            </Text>
          </Link>
          <Text variant={TextVariantEnum.textBody2}>{` ${t('auth:and')} `}</Text>
          <Link to='/'>
            <Text
              variant={TextVariantEnum.textBody2}
              style={{ textDecoration: 'underline', cursor: 'pointer' }}
            >
              {t('auth:privacy_policy')}.
            </Text>
          </Link>
        </PoliciesText>
      </BoxContainer>
    </Modal>
  );
}
