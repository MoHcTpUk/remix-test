import { memo } from 'react';
import { CommonLayout } from '~/components/layouts/CommonLayout';
import { SectionTop } from './SectionTop';
import { SectionTrending } from './SectionTrending';
import { SectionBenefits } from './SectionBenefits';
import { SectionCompanies } from './SectionCompanies';
import { SectionArticles } from './SectionArticles';
import { SectionNews } from './SectionNews';
import { SectionInnerContaier } from './styles';
import type { EntityMaterial } from 'shared/client';

export interface IHomePageProps {
  news: EntityMaterial[];
}

export const HomePage = memo(function HomePageMemoized({ news }: IHomePageProps): JSX.Element {
  return (
    <CommonLayout>
      <SectionTop />
      <SectionTrending />
      <SectionInnerContaier>
        <SectionCompanies />
        <SectionBenefits />
      </SectionInnerContaier>
      <SectionNews news={news} />
      <SectionArticles />
    </CommonLayout>
  );
});
