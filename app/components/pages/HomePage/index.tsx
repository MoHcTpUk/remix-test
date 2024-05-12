import { memo } from 'react';
import type { EntityCommonDictionary } from 'shared/client/data-contracts';
import type { Article, News } from 'shared/client/feeds-contracts';
import type { PopularCompany } from 'shared/v2/feeds';

import { CommonLayout } from '~/components/layouts/CommonLayout';

import {
  SectionArticles,
  SectionBenefits,
  SectionCompanies,
  SectionNews,
  SectionTop,
  SectionTrending,
} from './Sections';
import { SectionInnerContainer } from './styles';

export interface IHomePageProps {
  news?: News[];
  articles?: Article[];
  location: EntityCommonDictionary[];
  companies?: PopularCompany[];
}

export const HomePage = memo(
  ({ news, articles, location, companies }: IHomePageProps): JSX.Element => (
    <CommonLayout>
      <SectionTop location={location} />
      <SectionTrending />
      <SectionInnerContainer>
        {companies && companies?.length > 0 && <SectionCompanies companies={companies} />}
        <SectionBenefits />
      </SectionInnerContainer>
      {news && news?.length > 0 && news?.[0] ? <SectionNews news={news} /> : null!}
      {articles && articles?.length > 0 && articles?.[0] ? (
        <SectionArticles articles={articles} />
      ) : (
        null!
      )}
    </CommonLayout>
  ),
);
