import type { LoaderArgs } from '@remix-run/cloudflare';
import { json } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { Text } from '~/components/common/Text';
import { getSession } from '~/storages/session.server';
import { Api } from 'shared/client';

export const loader = async ({ request }: LoaderArgs) => {
  const sessionStorage = await getSession(request);
  const session = sessionStorage.get('session').split(';').at(0);

  const authHeader: HeadersInit = { 'Cookie': session }

  const client = new Api();
  const userInfo = await client.userService.infoList({ headers: authHeader });

  return json(userInfo.data);
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <Text>{JSON.stringify(data)}</Text>
    </>
  );
}
