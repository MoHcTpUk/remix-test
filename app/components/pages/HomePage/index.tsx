import { memo } from 'react';
import type { EntityMaterial } from 'shared/client/data-contracts';

import { CommonLayout } from '~/components/layouts/CommonLayout';

import { SectionArticles } from './SectionArticles';
import { SectionBenefits } from './SectionBenefits';
import { SectionCompanies } from './SectionCompanies';
import { SectionNews } from './SectionNews';
import { SectionTop } from './SectionTop';
import { SectionTrending } from './SectionTrending';
import { SectionInnerContainer } from './styles';

export interface IHomePageProps {
  news: EntityMaterial[];
}

export const HomePage = memo(
  ({ news }: IHomePageProps): JSX.Element => (
    <CommonLayout>
      <SectionTop />
      <SectionTrending />
      <SectionInnerContainer>
        <SectionCompanies />
        <SectionBenefits />
      </SectionInnerContainer>
      <SectionNews news={news} />
      <SectionArticles />
    </CommonLayout>
  ),
);
