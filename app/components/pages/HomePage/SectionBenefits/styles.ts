import { LanguageEnum } from 'public/enums/languageEnum';
import styled from 'styled-components';

import { Text } from '~/components/common/Text';

export const TextContainer = styled.div`
  padding: 0 44px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  svg {
    width: 58px;
    height: 18px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const WrapperBanner = styled.div<{ lang?: LanguageEnum }>`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    height: 560px;
    width: 100%;
    background: url('images/homePage/bannerTablet.jpg');
    background-size: cover;
    background-repeat: round;
  }
  @media (min-width: 1024px) {
    background: url('images/homePage/bannerTabletM.jpg');
    background-size: cover;
    background-repeat: round;
  }
  @media (min-width: 1280px) {
    height: 640px;
    background: ${({ lang }) =>
      lang === LanguageEnum.EN
        ? "url('images/homePage/bannerDesctopEn.jpg')"
        : "url('images/homePage/bannerDesctopTh.jpg')"};
    background-size: cover;
    background-repeat: round;
  }
`;

export const WrapperSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-size: cover;
  background-repeat: round;
  background-color: ${({ theme }) => theme.mainPage.backgroundSectionTrendingColor};
  flex-wrap: wrap;
  padding: 32px 16px;

  @media (min-width: 1024px) {
    padding: 40px 104px;
  }
  @media (min-width: 1280px) {
    padding: 64px 120px;
  }
`;

export const BenefitsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;
  max-width: 1200px;
  padding: 0px 16px;

  @media (min-width: 768px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    padding: 0 44px;
  }
`;

export const BenefitFrame = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  border: 1px solid #d9dbde;
  border-radius: 8px;
  padding: 16px 24px;
  gap: 6px;
  height: 100%;
  width: 100%;
`;

export const BenefitHeader = styled(Text)`
  color: ${({ theme }) => theme.mainPage.benefitHeaderColorSmall};

  @media (min-width: 768px) {
    color: ${({ theme }) => theme.mainPage.benefitHeaderColor};
  }
`;

export const BenefitText = styled(Text)`
  color: ${({ theme }) => theme.mainPage.benefitBodyColorSmall};

  @media (min-width: 768px) {
    color: ${({ theme }) => theme.mainPage.benefitBodyColor};
  }
`;
