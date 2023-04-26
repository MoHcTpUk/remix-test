import { Text } from '~/components/common/Text';
import type { ISlide } from '~/components/lib/Slider';
import { Slider } from '~/components/lib/Slider';
import {
  ButtonInner,
  ButtonWrapper,
  SliderContainer,
  TitleContainer,
  WrapperSection,
} from './styles';
import { useApp } from '~/hooks';
import { TextVariantEnum } from '~/components/common/Text/enums';
import Button from '~/components/common/Button';
import { memo } from 'react';
import type { EntityMaterial } from 'shared/client';
import { lng } from 'shared/utils';
import type { LanguageEnum } from 'public/enums/languageEnum';

export interface INewsProps {
  news: EntityMaterial[];
}
function mapMaterialsToViewModel(material: EntityMaterial, language: LanguageEnum): ISlide {
  return {
    id: material.id,
    title: lng(material.en?.title, material.th?.title, language),
    date: material.created_at,
    vacancies: undefined,
    image: material.image,
  } as ISlide;
}

export const SectionNews = memo(function HomePageMemoized({ news }: INewsProps): JSX.Element {
  const { theme, t, userContext } = useApp();
  const slides = news.map((item) => mapMaterialsToViewModel(item, userContext!.language));

  return (
    <WrapperSection>
      <TitleContainer>
        <Text variant={TextVariantEnum.textHeading1} color={theme.mainPage.titleColor}>
          {t('home:news')}
        </Text>
      </TitleContainer>
      <SliderContainer>
        <Slider theme={theme} variant='articles' slides={slides} />
      </SliderContainer>
      <ButtonWrapper>
        <ButtonInner>
          <Button priority='small' size='S'>
            <Text variant={TextVariantEnum.textBody2}>{t('home:see_all_news')}</Text>
          </Button>
        </ButtonInner>
      </ButtonWrapper>
    </WrapperSection>
  );
});
