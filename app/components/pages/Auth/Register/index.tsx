import { Form, Link } from '@remix-run/react';
import { memo } from 'react';
import { Input } from '~/components/common/Input';
import Button from '~/components/common/Button';

import { CommonLayout } from '~/components/layouts/CommonLayout';
import styled from 'styled-components';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';
import { Text } from '~/components/common/Text';
import { PoliciesText } from '../Login/styles';

export const Wrapper = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.auth.backgroundRegisterPage};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    gap: 24px;
  }
`;

export const BoxForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.auth.backgroundRegisterContainerColor};
  border-radius: 8px;
  align-items: center;
  gap: 24px;
  padding: 16px;
  @media (min-width: 768px) {
    gap: 32px;
    max-width: 476px;
    padding: 40px;
  }
  @media (min-width: 1280px) {
    padding: 48px 102px;
    max-width: 792px;
  }
`;

export const BoxRadios = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const RadioBtnWrapper = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const RadioBtn = styled.input`
  accent-color: ${({ theme }) => theme.auth.radioButtonColor};
  width: 20px;
  height: 20px;
`;

export const RegisterPage = memo(function HomePageMemoized(): JSX.Element {
  const { t } = useApp();

  return (
    <CommonLayout>
      <Wrapper>
        <Form
          method='post'
          action='/register'
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <BoxForm>
            <Text variant={TextVariantEnum.textHeading3} style={{ textAlign: 'center' }}>
              {t('auth:sign_up')}
            </Text>
            <Input
              placeholder={t('auth:enter_first_name')}
              id='i_enter_first_name'
              name={'enter_first_name'}
            />
            <Input placeholder={t('auth:enter_last_name')} id='i_last_name' name={'last_name'} />
            <Input placeholder={t('auth:enter_email')} id='i_email' name={'email'} />
            <Input placeholder={t('auth:enter_password')} id='i_password' name={'password'} />
            <Input
              placeholder={t('auth:password_confirmation')}
              id='i_password_confirmation'
              name={'password_confirmation'}
            />
            <BoxRadios>
              <RadioBtnWrapper>
                <RadioBtn type='radio' id='i_newsletter' name={'newsletter'} />
                <Text variant={TextVariantEnum.textBody1medium}>
                  {t('auth:subscribe_to_newsletter')}
                </Text>
              </RadioBtnWrapper>
              <RadioBtnWrapper>
                <RadioBtn type='radio' id='i_policy' name={'policy'} />
                <Text variant={TextVariantEnum.textBody1medium}>
                  {t('auth:i_accept_terms_of_use')}
                </Text>
              </RadioBtnWrapper>
            </BoxRadios>
            <Button priority='primary' fullwidth>
              <Text variant={TextVariantEnum.textBody2}>{t('auth:sign_up')}</Text>
            </Button>
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
          </BoxForm>
        </Form>
      </Wrapper>
    </CommonLayout>
  );
});
