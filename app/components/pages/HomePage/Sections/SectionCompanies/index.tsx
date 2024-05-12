import { Link } from '@remix-run/react';
import { memo } from 'react';
import type { PopularCompany } from 'shared/client/feeds-contracts';
import routes from 'shared/routing/routes';

import Button from '~/components/common/Button';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import type { ISlide } from '~/components/entities/Slider';
import { Slider } from '~/components/entities/Slider';
import { useApp } from '~/hooks';
import { getImageUrl } from '~/utils/helpers.client';

import { ButtonWrapper, SliderContainer, TitleContainer, WrapperSection } from './styles';

export interface ICompaniesProps {
  companies?: PopularCompany[];
}
function mapMaterialsToViewModel(material: PopularCompany): ISlide {
  return {
    id: material.id,
    title: material.name,
    vacancies: material.vacancies_count,
    image: material.icon_uri,
  } as ISlide;
}

export const SectionCompanies = memo(({ companies }: ICompaniesProps): JSX.Element => {
  const { theme, t } = useApp();
  const slides = companies?.map((item) => mapMaterialsToViewModel(item));

  // temporary repeat of array
  const makeRepeated = (arr: ISlide[], repeats: number) =>
    ([] as ISlide[]).concat(...Array.from({ length: repeats }, () => arr));
  const fakeSlides = slides !== undefined ? makeRepeated(slides, 2) : [];

  return (
    <WrapperSection>
      <TitleContainer>
        <Text color={theme.mainPage.titleColor}>{t('home:popular_companies')}</Text>
      </TitleContainer>
      <SliderContainer>
        <Slider theme={theme} variant='companies' slides={fakeSlides} />
      </SliderContainer>
      <ButtonWrapper>
        <Link to={routes.search.company.root}>
          <Button priority='secondary' size='S'>
            <Text variant={TextVariantEnum.textBody2}>{t('home:see_more_companies')}</Text>
          </Button>
        </Link>
      </ButtonWrapper>
    </WrapperSection>
  );
});
