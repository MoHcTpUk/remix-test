import type { LoaderArgs } from '@remix-run/cloudflare';
import { json } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { Materials } from 'shared/client/Materials';

import { HomePage } from '~/components/pages/HomePage';

export const loader = async ({ request }: LoaderArgs) => {
  const client = new Materials();
  const response = await client.newsList();

  if (response.data.data) {
    return json(response.data.data);
  }

  return json([]);
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return <HomePage news={data} />;
}
