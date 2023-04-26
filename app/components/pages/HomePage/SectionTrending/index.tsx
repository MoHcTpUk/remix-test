import { memo } from 'react';
import Button from '~/components/common/Button';

import { Text } from '~/components/common/Text';
import { Slider } from '~/components/lib/Slider';
import {
  ChipsContainer,
  MobileContainer,
  TabletContainer,
  TitleContainer,
  WrapperSection,
} from './styles';
import { useApp } from '~/hooks';
import { TextVariantEnum } from '~/components/common/Text/enums';

export const SectionTrending = memo(function HomePageMemoized(): JSX.Element {
  const { theme, t } = useApp();

  const temporaryTrending = [
    'Pattaya Jobs',
    'Jobs Near Bangkok MRT',
    'Saturday and Sunday off Jobs',
    'Phuket Jobs',
    'Practice after College',
    'Part-time Jobs',
    'Pattaya Jobs2',
    'Jobs Near Bangkok MRT2',
    'Saturday and Sunday off Jobs2',
    'Phuket Jobs2',
    'Practice after College2',
    'Part-time Jobs2',
  ];

  return (
    <WrapperSection>
      <TitleContainer>
        <Text variant={TextVariantEnum.textBody2medium}>{t('home:dont_know_where_to_start')}</Text>
        <Text variant={TextVariantEnum.textHeading1}>{t('home:trending_searches')}</Text>
      </TitleContainer>
      <MobileContainer>
        <Slider theme={theme} variant='chips' slides={temporaryTrending} slideElements={6} />
      </MobileContainer>
      <TabletContainer>
        <ChipsContainer>
          {temporaryTrending.slice(0, 8).map((item) => (
            <Button key={item} priority='chips'>
              <Text variant={TextVariantEnum.textBody1}>{item}</Text>
            </Button>
          ))}
        </ChipsContainer>
      </TabletContainer>
    </WrapperSection>
  );
});
