import { useState, useEffect } from 'react';

import { useNavigate, useActionData, Form, Link } from '@remix-run/react';
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

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  max-width: 100%;
  @media (min-width: 768px) {
    max-width: 388px;
  }
  @media (min-width: 1024px) {
    gap: 32px;
  }
`;

const BoxForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 24px;
  margin-bottom: -8px;
  @media (min-width: 1024px) {
    margin-bottom: -16px;
  }
`;

const BoxSocial = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 24px;
  margin-top: -8px;
  @media (min-width: 1024px) {
    margin-top: -16px;
  }
`;

const BoxHelp = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  justify-content: center;
  margin-top: -8px;
  @media (min-width: 1024px) {
    margin-top: -16px;
  }
`;

const PoliciesText = styled.div`
  margin-top: -8px;
  text-align: center;
`;

const HelpButton = styled.div`
  &:hover,
  &:focus {
    span {
      color: ${({ theme }) => theme.auth.helpButtonHoverColor};
    }
  }
  &:active {
    transform: scale(0.95);
    span {
      color: ${({ theme }) => theme.auth.helpButtonActiveColor};
    }
  }
`;

export default function Login({
  visibility,
  setVisibility,
}: {
  visibility: boolean;
  setVisibility: (visibility: boolean) => void;
}) {
  const { t, theme } = useApp();

  return (
    <Modal visibility={visibility} setVisibility={setVisibility}>
      <BoxContainer>
        <Text variant={TextVariantEnum.textHeading3} style={{ textAlign: 'center' }}>
          {t('auth:create_new_account_or_sign_in')}
        </Text>
        <Form method='post' action='/' style={{ width: '100%' }}>
          <BoxForm>
            <Input placeholder={t('auth:enter_email')} id='i_email' name={'email'} />
            <Input placeholder={t('auth:enter_password')} id='i_password' name={'password'} />
            <Button priority='primary' fullwidth>
              <Text variant={TextVariantEnum.textBody2}>{t('auth:sign_in_with_email')}</Text>
            </Button>
          </BoxForm>
        </Form>
        <Text variant={TextVariantEnum.textBody2medium}>
          {t('auth:or_register_with_social_accounts')}
        </Text>
        <BoxSocial>
          <Button priority='small' fullwidth iconName={IconEnum.google}>
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
            <Text variant={TextVariantEnum.textBody2medium} color={theme.auth.helpButtonColor}>
              {t('auth:registration')}
            </Text>
          </HelpButton>
        </BoxHelp>
        <PoliciesText>
          <Text variant={TextVariantEnum.textBody2}>{t('auth:by_continuing_i_agree_to_the')}</Text>
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
