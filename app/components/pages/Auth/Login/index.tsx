import { Form, Link, useFetcher, useLocation } from '@remix-run/react';
import { useEffect } from 'react';
import routes from 'shared/routing/routes';

import Button from '~/components/common/Button';
import { Input } from '~/components/common/Input';
import { Modal } from '~/components/common/Modal';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';
import { IconEnum } from '~/types/enums/iconEnum';
import type { ISignInResponse } from '~/types/interfaces/iForms';

import { BoxContainer, BoxForm, BoxHelp, BoxSocial, HelpButton, PoliciesText } from './styles';
import { removeLoginSearch } from '~/utils/helpers.client';

export default function Login({
  visibility,
  setVisibility,
  setVisibilityForgotPassword,
}: {
  visibility: boolean;
  setVisibility: (visibility: boolean) => void;
  setVisibilityForgotPassword: (visibility: boolean) => void;
}) {
  const { t, theme, userContext } = useApp();
  const location = useLocation();

  const login = useFetcher<ISignInResponse>();

  useEffect(() => {
    if (login?.data?.success) {
      setVisibility(false);
    }
  }, [login.data?.success]);

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
              aria-invalid={
                login.data?.fieldErrors?.email?.[userContext.language] ? true : undefined
              }
              errorText={login.data?.fieldErrors?.email?.[userContext.language]}
            />
            <Input
              placeholder={t('auth:enter_password')}
              id='i_password'
              name='password'
              variant='password'
              aria-invalid={
                login.data?.fieldErrors?.password?.[userContext.language] ? true : undefined
              }
              errorText={login.data?.fieldErrors?.password?.[userContext.language]}
            />
            <Button type='submit' priority='primary' fullwidth>
              <Text variant={TextVariantEnum.textBody2}>{t('auth:sign_in_with_email')}</Text>
            </Button>
          </BoxForm>
        </login.Form>
        <Text variant={TextVariantEnum.textBody2medium}>
          {t('auth:or_register_with_social_users')}
        </Text>
        <BoxSocial>
          <Form method='POST' action='/auth/login-google'>
            <Button type='submit' priority='secondary' fullwidth iconName={IconEnum.google}>
              <Text variant={TextVariantEnum.textBody2}>{t('auth:sign_with_google')}</Text>
            </Button>
            {/* to redirect to the same page from where the authorization was */}
            <input
              type='hidden'
              name='path'
              value={removeLoginSearch(`${location.pathname}${location.search}`) || ''}
            />
          </Form>
          <Form method='POST' action='/auth/login-facebook'>
            <Button type='submit' priority='secondary' fullwidth iconName={IconEnum.fb}>
              <Text variant={TextVariantEnum.textBody2}>{t('auth:sign_with_facebook')}</Text>
            </Button>
            {/* to redirect to the same page from where the authorization was */}
            <input
              type='hidden'
              name='path'
              value={removeLoginSearch(`${location.pathname}${location.search}`) || ''}
            />
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
            <Link to={routes.auth.register.root}>
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
      </BoxContainer>
    </Modal>
  );
}
