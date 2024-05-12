import { Link } from '@remix-run/react';
import { memo } from 'react';
import type { News } from 'shared/client/feeds-contracts';
import routes from 'shared/routing/routes';
import { lng } from 'shared/utils';

import Button from '~/components/common/Button';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import type { ISlide } from '~/components/entities/Slider';
import { Slider } from '~/components/entities/Slider';
import { useApp } from '~/hooks';
import type { LanguageEnum } from '~/types/enums/languageEnum';

import {
  ButtonInner,
  ButtonWrapper,
  SliderContainer,
  TitleContainer,
  WrapperSection,
} from './styles';

export interface INewsProps {
  news?: News[];
}
function mapMaterialsToViewModel(material: News, language: LanguageEnum): ISlide {
  return {
    id: material.id,
    title: lng(material.title_en, material.title_th, language),
    date: material.published_at,
    vacancies: undefined,
    image: material.image_uri,
  } as ISlide;
}

export const SectionNews = memo(({ news }: INewsProps): JSX.Element => {
  const { theme, t, userContext } = useApp();
  const slides = news?.map((item) => mapMaterialsToViewModel(item, userContext.language));

  // temporary repeat of array
  const makeRepeated = (arr: ISlide[], repeats: number) =>
    ([] as ISlide[]).concat(...Array.from({ length: repeats }, () => arr));
  const fakeSlides = slides !== undefined ? makeRepeated(slides, 3) : [];

  return (
    <WrapperSection>
      <TitleContainer>
        <Text color={theme.mainPage.titleColor}>{t('home:news')}</Text>
      </TitleContainer>
      <SliderContainer>
        <Slider theme={theme} variant='articles' slides={fakeSlides} />
      </SliderContainer>
      <ButtonWrapper>
        <ButtonInner>
          <Link to={routes.materials.news.root}>
            <Button priority='secondary' size='S'>
              <Text variant={TextVariantEnum.textBody2}>{t('home:see_all_news')}</Text>
            </Button>
          </Link>
        </ButtonInner>
      </ButtonWrapper>
    </WrapperSection>
  );
});
