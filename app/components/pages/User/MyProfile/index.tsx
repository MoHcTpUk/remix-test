import { Form, useSubmit } from '@remix-run/react';
import { motion } from 'framer-motion';
import { memo, useEffect, useRef, useState } from 'react';
import type { UserInfo } from 'shared/v2/users';

import BoxInformation from '~/components/common/BoxInformation';
import Button from '~/components/common/Button';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import ModalConfirmEmail from '~/components/entities/ModalConfirmEmail';
import { useApp } from '~/hooks';
import { BoxInformationEnum } from '~/types/enums/boxInformationEnum';
import type { StateCard } from '~/types/enums/stateCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IUpdateProfile } from '~/types/interfaces/iForms';

import { Wrapper } from '../Companies/styles';
import { GeneralInfo } from './components/Info';
import { NotifySettings } from './components/NotifySettings';
import { PasswordSettings } from './components/PasswordSettings';

export const UserInfoComponent = memo(
  ({
    user,
    dictionaries,
    actionData,
  }: {
    user?: UserInfo | null;
    dictionaries: IDictionaries;
    actionData?: IUpdateProfile;
  }): JSX.Element => {
    const [stateUserInfo, setStateUserInfo] = useState<StateCard>('info');
    const [stateUserPassword, setStateUserPassword] = useState<StateCard>('info');

    const { userContext, t } = useApp();

    useEffect(() => {
      if (actionData?.success) {
        if (stateUserInfo !== 'info') setStateUserInfo('info');
        if (stateUserPassword !== 'info') setStateUserPassword('info');
      }
      if (actionData?.emailConfirmed) {
        setVisibleConfirmEmail(true);
      }
    }, [user]);

    const formRef = useRef(null);
    const submit = useSubmit();

    const handleChangeForm = (event: React.ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData();
      const field = event.target.name;

      if (field === 'notify_email') {
        formData.append('notify_phone', user?.notifications?.phone?.toString() || '');
        formData.append('notify_email', (!user?.notifications?.email)?.toString() || '');
        formData.append('birthday', user?.birthday?.toString() || '');

        submit(formData, { method: 'POST', preventScrollReset: true });
      } else if (field === 'notify_phone') {
        formData.append('notify_phone', (!user?.notifications?.phone)?.toString() || '');
        formData.append('notify_email', user?.notifications?.email?.toString() || '');
        formData.append('birthday', user?.birthday?.toString() || '');

        submit(formData, { method: 'POST', preventScrollReset: true });
      }
    };

    const [visibleConfirmEmail, setVisibleConfirmEmail] = useState(false);

    const buttonConfirmEmail = () => (
      <Button type='submit' priority='secondary'>
        <Text variant={TextVariantEnum.textBody2}>{t('user:confirm_email')}</Text>
        <input type='hidden' name='formName' value='confirm_email' />
      </Button>
    );

    return (
      <Wrapper>
        {!userContext.user.isEmailConfirm && (
          <Form method='POST' style={{ width: '100%' }} preventScrollReset>
            <BoxInformation
              variant={BoxInformationEnum.warning}
              title={t('user:email_is_not_confirmed')}
              information={t(
                'user:you_will_not_be_able_to_post_your_resumes_vacancies_and_companies_until_your_email_confirmation',
              )}
              button={() => buttonConfirmEmail()}
              flexDirection='column'
            />
          </Form>
        )}

        <Form
          method='POST'
          style={{ width: '100%' }}
          ref={formRef}
          preventScrollReset
          onChange={handleChangeForm}
        >
          <Wrapper
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ModalConfirmEmail
              visibility={visibleConfirmEmail}
              setVisibility={setVisibleConfirmEmail}
            />

            <GeneralInfo
              user={user}
              stateUserInfo={stateUserInfo}
              setStateUserInfo={setStateUserInfo}
              dictionaries={dictionaries}
              actionData={actionData}
            />

            <PasswordSettings
              stateUserPassword={stateUserPassword}
              setStateUserPassword={setStateUserPassword}
              actionData={actionData}
            />

            <NotifySettings user={user} />
          </Wrapper>
        </Form>
      </Wrapper>
    );
  },
);
