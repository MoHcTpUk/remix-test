import { memo } from 'react';
import { Text } from '~/components/common/Text';
import { Slider } from '~/components/lib/Slider';
import { ButtonWrapper, SliderContainer, TitleContainer, WrapperSection } from './styles';
import { useApp } from '~/hooks';
import { TextVariantEnum } from '~/components/common/Text/enums';
import Button from '~/components/common/Button';
import styled from 'styled-components';

export const SectionCompanies = memo(function HomePageMemoized(): JSX.Element {
  const { theme, t } = useApp();

  const temporaryCompanies = [
    {
      id: '1',
      title: 'Apple company-4567',
      vacancies: 100,
      image: 'images/homePage/apple.png',
    },
    {
      id: '2',
      title: 'Apple company-4345567',
      vacancies: 23,
      image: 'images/homePage/apple.png',
    },
    {
      id: '3',
      title: 'Apple company-12435',
      vacancies: 0,
      image: 'images/homePage/apple.png',
    },
    {
      id: '4',
      title: 'Apple company-3456',
      vacancies: 100,
      image: 'images/homePage/apple.png',
    },
    {
      id: '5',
      title: 'Apple company-977',
      vacancies: 23,
      image: 'images/homePage/apple.png',
    },
    {
      id: '6',
      title: 'Apple company-888',
      vacancies: 0,
      image: 'images/homePage/apple.png',
    },
    {
      id: '7',
      title: 'Apple company-677',
      vacancies: 100,
      image: 'images/homePage/apple.png',
    },
    {
      id: '8',
      title: 'Apple company-666',
      vacancies: 23,
      image: 'images/homePage/apple.png',
    },
    {
      id: '9',
      title: 'Apple company-555',
      vacancies: 0,
      image: 'images/homePage/apple.png',
    },
    {
      id: '10',
      title: 'Apple company-333',
      vacancies: 100,
      image: 'images/homePage/apple.png',
    },
    {
      id: '11',
      title: 'Apple company-22',
      vacancies: 23,
      image: 'images/homePage/apple.png',
    },
    {
      id: '12',
      title: 'Apple company-11',
      vacancies: 0,
      image: 'images/homePage/apple.png',
    },
  ];

  return (
    <WrapperSection>
      <TitleContainer>
        <Text variant={TextVariantEnum.textHeading1}>{t('home:companies')}</Text>
      </TitleContainer>
      <SliderContainer>
        <Slider theme={theme} variant='companies' slides={temporaryCompanies} />
      </SliderContainer>
      <ButtonWrapper>
        <Button priority='primary' size='S'>
          <Text variant={TextVariantEnum.textBody2}>{t('home:see_more_companies')}</Text>
        </Button>
      </ButtonWrapper>
    </WrapperSection>
  );
});
