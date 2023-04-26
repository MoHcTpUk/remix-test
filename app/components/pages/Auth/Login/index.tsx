import { useState, useEffect, useRef } from 'react';

import { useNavigate, useActionData, Form, Link, useFetcher } from '@remix-run/react';
import { Modal } from '~/components/common/Modal';
import { Input } from '~/components/common/Input';
import { useApp } from '~/hooks';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { Box } from '~/components/common/Box';
import Button from '~/components/common/Button';
import { IconEnum } from 'public/enums/iconEnum';
import { Icon } from '~/components/common/Icon';
import styled from 'styled-components';
import { BoxContainer, BoxForm, BoxHelp, BoxSocial, HelpButton, PoliciesText } from './styles';

export default function Login({
  visibility,
  setVisibility,
}: {
  visibility: boolean;
  setVisibility: (visibility: boolean) => void;
}) {
  const { t, theme } = useApp();

  const login = useFetcher();
  const ref = useRef();

  useEffect(() => {
    if (login.type === 'done' && login.data.ok) {
      ref.current?.reset();
    }
  }, [login]);

  const handlefetch = async () => {
    // добавить в env process.env.BASE_HOST
    const user = await fetch('https://upjob.com/api/v1/user-service/login', {
      method: 'post',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: 'qwe@qwe.ru', password: 'qwerty123' }),
    });
  };

  return (
    <Modal visibility={visibility} setVisibility={setVisibility}>
      <BoxContainer>
        <Text variant={TextVariantEnum.textHeading3} style={{ textAlign: 'center' }}>
          {t('auth:create_new_account_or_sign_in')}
        </Text>
        <login.Form method='POST' action='/auth/login' style={{ width: '100%' }}>
          <BoxForm>
            <Input placeholder={t('auth:enter_email')} id='i_email' name={'email'} />
            <Input placeholder={t('auth:enter_password')} id='i_password' name={'password'} />
            <Button priority='primary' fullwidth>
              <Text variant={TextVariantEnum.textBody2}>{t('auth:sign_in_with_email')}</Text>
            </Button>
          </BoxForm>
        </login.Form>
        <Text variant={TextVariantEnum.textBody2medium}>
          {t('auth:or_register_with_social_accounts')}
        </Text>
        <BoxSocial>
          <Button onClick={handlefetch} priority='small' fullwidth iconName={IconEnum.google}>
            <Text variant={TextVariantEnum.textBody2}>{t('auth:sign_with_google')}</Text>
          </Button>
          <Button priority='small' fullwidth iconName={IconEnum.fb}>
            <Text variant={TextVariantEnum.textBody2}>{t('auth:sign_with_facebook')}</Text>
          </Button>
        </BoxSocial>
        <BoxHelp>
          <HelpButton>
            <Text variant={TextVariantEnum.textBody2medium} color={theme.auth.helpButtonColor}>
              {t('auth:forgot_password')}
            </Text>
          </HelpButton>
          <HelpButton>
            <Link to={'/register'}>
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
