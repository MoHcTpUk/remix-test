import { Form, Link } from '@remix-run/react';
import { memo } from 'react';
import routes from 'shared/routing/routes';

import Button from '~/components/common/Button';
import { CheckBox } from '~/components/common/Checkbox';
import { Input } from '~/components/common/Input';
import { Select } from '~/components/common/Select';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { CommonLayout } from '~/components/layouts/CommonLayout';
import { useApp } from '~/hooks';
import type { ISignUpResponse } from '~/types/interfaces/iForms';
import { extractTitlesNewWay } from '~/utils/helpers.client';

import { PoliciesText } from '../Login/styles';
import { BoxCheckbox, BoxForm, Wrapper } from './styles';

export const RegisterPage = memo(
  ({ actionData }: { actionData?: ISignUpResponse }): JSX.Element => {
    const { t, userContext, theme } = useApp();

    return (
      <CommonLayout>
        <Wrapper>
          <Form
            method='POST'
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
                {t('auth:sign_up')}
              </Text>
              <Input
                placeholder={t('auth:enter_first_name')}
                id='i_enter_first_name'
                name='first_name'
                aria-invalid={
                  actionData?.fieldErrors?.first_name?.[userContext.language] ? true : undefined
                }
                errorText={actionData?.fieldErrors?.first_name?.[userContext.language]}
              />
              <Input
                placeholder={t('auth:enter_last_name')}
                id='i_last_name'
                name='last_name'
                aria-invalid={
                  actionData?.fieldErrors?.last_name?.[userContext.language] ? true : undefined
                }
                errorText={actionData?.fieldErrors?.last_name?.[userContext.language]}
              />
              <Input
                htmlType='email'
                placeholder={t('auth:enter_email')}
                id='i_email'
                name='email'
                aria-invalid={
                  actionData?.fieldErrors?.email?.[userContext.language] ? true : undefined
                }
                errorText={
                  actionData?.fieldErrors?.email?.[userContext.language]
                    ? actionData?.fieldErrors?.email?.[userContext.language]
                    : undefined
                }
              />
              <Input
                htmlType='password'
                placeholder={t('auth:enter_password')}
                id='i_password'
                name='password'
                variant='password'
                aria-invalid={
                  actionData?.fieldErrors?.password?.[userContext.language] ? true : undefined
                }
                errorText={
                  actionData?.fieldErrors?.password?.[userContext.language]
                    ? actionData?.fieldErrors?.password?.[userContext.language]
                    : undefined
                }
              />
              <Input
                htmlType='password'
                placeholder={t('auth:password_confirmation')}
                id='i_password_confirm'
                name='password_confirm'
                variant='password'
                aria-invalid={
                  actionData?.fieldErrors?.password_confirm?.[userContext.language]
                    ? true
                    : undefined
                }
                errorText={
                  actionData?.fieldErrors?.password_confirm?.[userContext.language]
                    ? actionData?.fieldErrors?.password_confirm?.[userContext.language]
                    : undefined
                }
              />
              <Select
                entries={extractTitlesNewWay(
                  [
                    {
                      id: 'th',
                      value: {
                        en: 'Thai',
                        th: 'ไทย',
                      },
                    },
                    {
                      id: 'en',
                      value: {
                        en: 'English',
                        th: 'อังกฤษ',
                      },
                    },
                  ],
                  userContext.language,
                )}
                placeholder={t('user:language_of_notify')}
                id='primaryLanguage'
                name='primary_language'
                values={[userContext.language || '']}
                errorText={
                  actionData?.fieldErrors?.locale?.[userContext.language]
                    ? actionData?.fieldErrors?.locale?.[userContext.language]
                    : undefined
                }
              />
              <BoxCheckbox>
                {/* <CheckBox
                  id='i_newsletter'
                  name='newsletter'
                  label={t('auth:subscribe_to_newsletter')}
                  value='false'
                /> */}
                <CheckBox
                  id='i_policy'
                  name='policy'
                  label={t('auth:i_accept_terms_of_use')}
                  value='false'
                  aria-invalid={actionData?.fieldErrors?.policy ? true : undefined}
                  errorText={
                    actionData?.fieldErrors?.policy?.[userContext.language]
                      ? actionData?.fieldErrors?.policy?.[userContext.language]
                      : undefined
                  }
                />
              </BoxCheckbox>
              <Button type='submit' priority='primary' fullwidth>
                <Text variant={TextVariantEnum.textBody2}>{t('auth:sign_up')}</Text>
              </Button>
              <PoliciesText>
                <Text variant={TextVariantEnum.textBody2}>
                  {`${t('auth:by_clicking_sign_up_i_agree_to_the')} `}
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
              {actionData?.formError && (
                <Text variant={TextVariantEnum.textHeading3} color={theme.errorTextColor}>
                  {actionData?.formError?.[userContext.language]}
                </Text>
              )}
            </BoxForm>
          </Form>
        </Wrapper>
      </CommonLayout>
    );
  },
);
