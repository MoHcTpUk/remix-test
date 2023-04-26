import { LoaderArgs, json } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { Text } from '~/components/common/Text';
import { getUser } from '~/utils/session.server';

export const loader = async ({ request }: LoaderArgs) => {
  // const session = await requireSession(request);
  // const user = await getUser(request);
  // return json({ user });
};

export default function Index() {
  // const data = useLoaderData<typeof loader>();

  return (
    <>
      <Text variant='textHeading1'>THIS IS PERSONL ACCOUNT</Text>
    </>
  );
}
