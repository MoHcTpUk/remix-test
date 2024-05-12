import { Link } from '@remix-run/react';
import { memo } from 'react';
import type { Article } from 'shared/client/feeds-contracts';
import routes from 'shared/routing/routes';
import { lng } from 'shared/utils';

import Button from '~/components/common/Button';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import type { ISlide } from '~/components/entities/Slider';
import { Slider } from '~/components/entities/Slider';
import { useApp } from '~/hooks';
import type { LanguageEnum } from '~/types/enums/languageEnum';

import { ButtonInner } from '../SectionNews/styles';
import { ButtonWrapper, SliderContainer, TitleContainer, WrapperSection } from './styles';

export interface IArticlesProps {
  articles?: Article[];
}

function mapMaterialsToViewModel(material: Article, language: LanguageEnum): ISlide {
  return {
    id: material.id,
    title: lng(material.title_en, material.title_th, language),
    date: material.published_at,
    vacancies: undefined,
    image: material.image_uri,
  } as ISlide;
}

export const SectionArticles = memo(({ articles }: IArticlesProps) => {
  const { theme, t, userContext } = useApp();
  const slides = articles?.map((item) => mapMaterialsToViewModel(item, userContext.language));

  // const temporaryNews = [
  //   {
  //     id: '1',
  //     title: ' 1 - The first Episode of NBT “Mee Kam Tob” Features MOL’s Liveasdas',
  //     date: '17.02.2023',
  //     image: '/images/homePage/new.png',
  //   },
  //   {
  //     id: '2',
  //     title: '2 - The first Episode of NBT “Mee Kam Tob” Features MOL’s Liveasdas',
  //     date: '17.02.2023',
  //     image: '/images/homePage/new.png',
  //   },
  //   {
  //     id: '3',
  //     title: '3 - The first Episode of NBT “Mee Kam Tob” Features MOL’s Liveasdas',
  //     date: '17.02.2023',
  //     image: '/images/homePage/new.png',
  //   },
  //   {
  //     id: '4',
  //     title: '4 - The first Episode of NBT “Mee Kam Tob” Features MOL’s Liveasdas',
  //     date: '17.02.2023',
  //     image: '/images/homePage/new.png',
  //   },
  //   {
  //     id: '5',
  //     title: '5 - The first Episode of NBT “Mee Kam Tob” Features MOL’s Liveasdas',
  //     date: '17.02.2023',
  //     image: '/images/homePage/new.png',
  //   },
  //   {
  //     id: '6',
  //     title: '6 - Apple company-2',
  //     vacancies: 0,
  //     image: '/images/homePage/new.png',
  //   },
  //   {
  //     id: '7',
  //     title: ' 1 - The first Episode of NBT “Mee Kam Tob” Features MOL’s Liveasdas',
  //     date: '17.02.2023',
  //     image: '/images/homePage/new.png',
  //   },
  //   {
  //     id: '8',
  //     title: '2 - The first Episode of NBT “Mee Kam Tob” Features MOL’s Liveasdas',
  //     date: '17.02.2023',
  //     image: '/images/homePage/new.png',
  //   },
  //   {
  //     id: '9',
  //     title: '3 - The first Episode of NBT “Mee Kam Tob” Features MOL’s Liveasdas',
  //     date: '17.02.2023',
  //     image: '/images/homePage/new.png',
  //   },
  //   {
  //     id: '10',
  //     title: '4 - The first Episode of NBT “Mee Kam Tob” Features MOL’s Liveasdas',
  //     date: '17.02.2023',
  //     image: '/images/homePage/new.png',
  //   },
  //   {
  //     id: '11',
  //     title: '5 - The first Episode of NBT “Mee Kam Tob” Features MOL’s Liveasdas',
  //     date: '17.02.2023',
  //     image: '/images/homePage/new.png',
  //   },
  //   {
  //     id: '12',
  //     title: '6 - Apple company-2',
  //     vacancies: 0,
  //     image: '/images/homePage/new.png',
  //   },
  // ];

  return (
    <WrapperSection>
      <TitleContainer>
        <Text color={theme.mainPage.titleColor}>{t('home:articles')}</Text>
      </TitleContainer>
      <SliderContainer>
        <Slider theme={theme} variant='articles' slides={slides} />
      </SliderContainer>
      <ButtonWrapper>
        <ButtonInner>
          <Link to={routes.materials.articles.root}>
            <Button priority='secondary' size='S'>
              <Text variant={TextVariantEnum.textBody2}>{t('home:see_all_articles')}</Text>
            </Button>
          </Link>
        </ButtonInner>
      </ButtonWrapper>
    </WrapperSection>
  );
});
