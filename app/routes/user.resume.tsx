import type { LoaderArgs } from '@remix-run/cloudflare';
import { json, redirect } from '@remix-run/cloudflare';
import { Link, useLoaderData } from '@remix-run/react';
import { UserService } from 'shared/client/UserService';

import { Text } from '~/components/common/Text';
import { CommonLayout } from '~/components/layouts/CommonLayout';
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
  const data = useLoaderData<typeof loader>();

  return (
    <CommonLayout>
      <Link to='/account/resume/create'>
        <Text>CREATE</Text>
      </Link>
    </CommonLayout>
  );
}
