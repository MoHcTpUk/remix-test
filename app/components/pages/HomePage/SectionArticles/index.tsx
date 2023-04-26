import { memo } from 'react';

import Button from '~/components/common/Button';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { Slider } from '~/components/lib/Slider';
import { useApp } from '~/hooks';

import { ButtonInner } from '../SectionNews/styles';
import { ButtonWrapper, SliderContainer, TitleContainer, WrapperSection } from './styles';

export const SectionArticles = memo((): JSX.Element => {
  const { theme, t } = useApp();

  const temporaryNews = [
    {
      id: '1',
      title: ' 1 - The first Episode of NBT “Mee Kam Tob” Features MOL’s Liveasdas',
      date: '17.02.2023',
      image: '/images/homePage/new.png',
    },
    {
      id: '2',
      title: '2 - The first Episode of NBT “Mee Kam Tob” Features MOL’s Liveasdas',
      date: '17.02.2023',
      image: '/images/homePage/new.png',
    },
    {
      id: '3',
      title: '3 - The first Episode of NBT “Mee Kam Tob” Features MOL’s Liveasdas',
      date: '17.02.2023',
      image: '/images/homePage/new.png',
    },
    {
      id: '4',
      title: '4 - The first Episode of NBT “Mee Kam Tob” Features MOL’s Liveasdas',
      date: '17.02.2023',
      image: '/images/homePage/new.png',
    },
    {
      id: '5',
      title: '5 - The first Episode of NBT “Mee Kam Tob” Features MOL’s Liveasdas',
      date: '17.02.2023',
      image: '/images/homePage/new.png',
    },
    {
      id: '6',
      title: '6 - Apple company-2',
      vacancies: 0,
      image: '/images/homePage/new.png',
    },
    {
      id: '7',
      title: ' 1 - The first Episode of NBT “Mee Kam Tob” Features MOL’s Liveasdas',
      date: '17.02.2023',
      image: '/images/homePage/new.png',
    },
    {
      id: '8',
      title: '2 - The first Episode of NBT “Mee Kam Tob” Features MOL’s Liveasdas',
      date: '17.02.2023',
      image: '/images/homePage/new.png',
    },
    {
      id: '9',
      title: '3 - The first Episode of NBT “Mee Kam Tob” Features MOL’s Liveasdas',
      date: '17.02.2023',
      image: '/images/homePage/new.png',
    },
    {
      id: '10',
      title: '4 - The first Episode of NBT “Mee Kam Tob” Features MOL’s Liveasdas',
      date: '17.02.2023',
      image: '/images/homePage/new.png',
    },
    {
      id: '11',
      title: '5 - The first Episode of NBT “Mee Kam Tob” Features MOL’s Liveasdas',
      date: '17.02.2023',
      image: '/images/homePage/new.png',
    },
    {
      id: '12',
      title: '6 - Apple company-2',
      vacancies: 0,
      image: '/images/homePage/new.png',
    },
  ];

  return (
    <WrapperSection>
      <TitleContainer>
        <Text variant={TextVariantEnum.textHeading1} color={theme.mainPage.titleColor}>
          {t('home:articles')}
        </Text>
      </TitleContainer>
      <SliderContainer>
        <Slider theme={theme} variant='articles' slides={temporaryNews} />
      </SliderContainer>
      <ButtonWrapper>
        <ButtonInner>
          <Button priority='small' size='S'>
            <Text variant={TextVariantEnum.textBody2}>{t('home:see_all_articles')}</Text>
          </Button>
        </ButtonInner>
      </ButtonWrapper>
    </WrapperSection>
  );
});
