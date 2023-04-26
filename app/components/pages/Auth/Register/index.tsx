import { Link, useFetcher } from '@remix-run/react';
import { memo, useEffect, useRef } from 'react';

import Button from '~/components/common/Button';
import { CheckBox } from '~/components/common/Checkbox';
import { Input } from '~/components/common/Input';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { CommonLayout } from '~/components/layouts/CommonLayout';
import { useApp } from '~/hooks';
import type { ISignUpResponse } from '~/routes/auth.register';

import { PoliciesText } from '../Login/styles';
import { BoxCheckbox, BoxForm, Wrapper } from './styles';

export const RegisterPage = memo(
  ({ actionData }: { actionData: ISignUpResponse | null }): JSX.Element => {
    const { t } = useApp();
    const register = useFetcher<ISignUpResponse>();

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    // const first_name = useRef<HTMLInputElement>(null);
    // const last_name = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (actionData?.fieldErrors.email) {
        emailRef.current?.focus();
      } else if (actionData?.fieldErrors.password) {
        passwordRef.current?.focus();
      }
    }, [actionData]);

    return (
      <CommonLayout>
        <Wrapper>
          <register.Form
            method='POST'
            action='/auth/register'
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <BoxForm>
              <Text variant={TextVariantEnum.textHeading3} style={{ textAlign: 'center' }}>
                {t('auth:sign_up')}
              </Text>
              <Input
                placeholder={t('auth:enter_first_name')}
                id='i_enter_first_name'
                name='first_name'
              />
              <Input placeholder={t('auth:enter_last_name')} id='i_last_name' name='last_name' />
              <Input
                htmlType='email'
                placeholder={t('auth:enter_email')}
                id='i_email'
                name='email'
                aria-invalid={register.data?.fieldErrors.email ? true : undefined}
                errorText={
                  register.data?.fieldErrors?.email ? register.data?.fieldErrors.email : undefined
                }
              />
              <Input
                htmlType='password'
                placeholder={t('auth:enter_password')}
                id='i_password'
                name='password'
                aria-invalid={register?.data?.fieldErrors.password ? true : undefined}
                errorText={
                  register.data?.fieldErrors.password
                    ? register.data?.fieldErrors.password
                    : undefined
                }
              />
              <Input
                htmlType='password'
                placeholder={t('auth:password_confirmation')}
                id='i_password_confirmation'
                name='password_confirmation'
                aria-invalid={register?.data?.fieldErrors.passwordConfirm ? true : undefined}
                errorText={
                  register.data?.fieldErrors.passwordConfirm
                    ? register.data?.fieldErrors.passwordConfirm
                    : undefined
                }
              />
              <BoxCheckbox>
                <CheckBox
                  id='i_newsletter'
                  name='newsletter'
                  label={t('auth:subscribe_to_newsletter')}
                />
                <CheckBox
                  id='i_policy'
                  name='policy'
                  label={t('auth:i_accept_terms_of_use')}
                  aria-invalid={register.data?.fieldErrors.policy ? true : undefined}
                  errorText={
                    register.data?.fieldErrors.policy
                      ? register.data?.fieldErrors.policy
                      : undefined
                  }
                />
              </BoxCheckbox>
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
          </register.Form>
        </Wrapper>
      </CommonLayout>
    );
  },
);
