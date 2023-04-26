import { memo } from 'react';

import { CommonLayout } from '~/components/layouts/CommonLayout';
import { SectionTop } from './SectionTop';
import { SectionTrending } from './SectionTrending';
import { SectionBenefits } from './SectionBenefits';
import { SectionCompanies } from './SectionCompanies';
import { SectionArticles } from './SectionArticles';
import { SectionNews } from './SectionNews';

export const HomePage = memo(function HomePageMemoized(): JSX.Element {
  return (
    <CommonLayout>
      <SectionTop />
      <SectionTrending />
      <SectionCompanies />
      <SectionBenefits />
      <SectionNews />
      <SectionArticles />
    </CommonLayout>
  );
});
