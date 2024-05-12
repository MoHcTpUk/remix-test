import { json, LoaderArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { ClientFactory } from "shared/clientFactory";
import { DefaultApi } from "shared/v2/feeds/apis/DefaultApi";
import { HomePage } from "~/components/pages/HomePage";

export const loader = async ({ context }: LoaderArgs) => {
  const feedsClient = ClientFactory.createClient(DefaultApi, context.session);

  const [feeds, location] = await Promise.all([
    feedsClient.getFeeds(),
    context.references.locationMap,
  ]);

  const dictionaries = {
    location: location.ToArray(),
  };

  return json({ feeds, dictionaries });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  const news = data.feeds.data?.news;
  const articles = data.feeds.data?.articles;
  const companies = data.feeds.data?.popular_companies;
  const { location } = data.dictionaries;

  return <HomePage news={news} articles={articles} location={location} companies={companies} />;
}
