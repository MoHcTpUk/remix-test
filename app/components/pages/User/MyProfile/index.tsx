import { useFetcher } from '@remix-run/react';
import type { StateCard } from 'public/enums/stateCardEnum';
import { memo, useState } from 'react';
import type { EntityGetUserInfoResponse } from 'shared/client/data-contracts';
import Routes from 'shared/routing/routes';

import { useApp } from '~/hooks';

import { Heading } from '../components/Heading';
import { WrapperContainer } from '../components/Wrapper';
import { GeneralInfo } from './components/Info';
import { NotifySettings } from './components/NotifySettings';
import { PasswordSettings } from './components/PasswordSettings';

export const UserInfo = memo(
  ({ user }: { user?: EntityGetUserInfoResponse | null }): JSX.Element => {
    const { t } = useApp();
    const userInfoFetcher = useFetcher<EntityGetUserInfoResponse>();

    const [stateUserInfo, setStateUserInfo] = useState<StateCard>('info');
    const [stateUserPassword, setStateUserPassword] = useState<StateCard>('info');

    const handleChangeNotify = (event: React.ChangeEvent<HTMLInputElement>) => {
      const formData = new FormData();
      formData.append(event.target.name, event.target.checked.toString());
      formData.append('formName', event.target.name);
      userInfoFetcher.submit(formData, { method: 'PUT', action: Routes.user.root });
    };

    return (
      <WrapperContainer>
        <Heading title={t('user:my_profile')} />

        <userInfoFetcher.Form
          style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
          method='PUT'
        >
          <GeneralInfo
            user={user}
            stateUserInfo={stateUserInfo}
            setStateUserInfo={setStateUserInfo}
            fetcher={userInfoFetcher}
          />

          <PasswordSettings
            stateUserPassword={stateUserPassword}
            setStateUserPassword={setStateUserPassword}
          />

          <NotifySettings
            fetcher={userInfoFetcher}
            user={user}
            handleChangeNotify={handleChangeNotify}
          />
        </userInfoFetcher.Form>

        {/* <Text>{JSON.stringify(data)}</Text> */}
      </WrapperContainer>
    );
  },
);
