import type { LoaderArgs } from '@remix-run/cloudflare';
import { json, redirect } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import type { EntityGetUserInfoResponse } from 'shared/client/data-contracts';
import { UserService } from 'shared/client/UserService';

import { CommonLayout } from '~/components/layouts/CommonLayout';
import { UserInfo } from '~/components/pages/Account/MyProfile';
import { getUserContextSession } from '~/storages/userContext.server';

export const loader = async ({ request }: LoaderArgs) => {
  const userContextSession = await getUserContextSession(request);
  if (!userContextSession.getUserContext()?.user?.isAuthenticated) {
    return redirect('/', {
      status: 302,
    });
  }

  const client = new UserService();
  await client.auth(request);

  const userInfo = await client.infoList();
  return json(userInfo);
};

export default function Index() {
  const request = useLoaderData<typeof loader>();
  const user: EntityGetUserInfoResponse | null = request.data;

  return (
    <CommonLayout>
      <UserInfo user={user} />
    </CommonLayout>
  );
}
