import { Link } from '@remix-run/react';
import { memo } from 'react';

import Button from '~/components/common/Button';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { Slider } from '~/components/entities/Slider';
import { useApp } from '~/hooks';

import {
  ChipsContainer,
  MobileContainer,
  TabletContainer,
  TitleContainer,
  WrapperSection,
} from './styles';

export const SectionTrending = memo((): JSX.Element => {
  const { theme, t } = useApp();

  const temporaryTrending = [
    'Pattaya Jobs',
    'Jobs Near Bangkok MRT',
    'Saturday and Sunday off Jobs',
    'Data',
    'Practice after College',
    'Manager',
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
        <Text variant={TextVariantEnum.textBody2medium} color={theme.mainPage.titleColor}>
          {t('home:dont_know_where_to_start')}
        </Text>
        <Text color={theme.mainPage.titleColor}>{t('home:trending_searches')}</Text>
      </TitleContainer>
      <MobileContainer>
        <Slider theme={theme} variant='chips' slides={temporaryTrending} slideElements={6} />
      </MobileContainer>
      <TabletContainer>
        <ChipsContainer>
          {temporaryTrending.slice(0, 8).map((item) => (
            <Link to={`/search/vacancy?q=${item}`} key={item}>
              <Button key={item} priority='chips'>
                <Text variant={TextVariantEnum.textBody2}>{item}</Text>
              </Button>
            </Link>
          ))}
        </ChipsContainer>
      </TabletContainer>
    </WrapperSection>
  );
});
