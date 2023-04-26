import type { LoaderArgs } from '@remix-run/cloudflare';
import { json } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react/dist/components';
import { Api } from 'shared/client';
import { HomePage } from '~/components/pages/HomePage';

export const loader = async ({ request }: LoaderArgs) => {
  const client = new Api();
  const response = await client.materials.newsList();

  if (response.data.data) {
    return json(response.data.data)
  }

  return json([]);
};


export default function Index() {
  const data = useLoaderData<typeof loader>();
  console.warn(data)
  return <HomePage news={data} />;
}
