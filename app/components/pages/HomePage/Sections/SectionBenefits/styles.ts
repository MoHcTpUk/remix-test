import styled from 'styled-components';

import {
  FONT_SIZES_DESC,
  FONT_SIZES_MOB,
  FONT_WEIGHTS_DESC,
  FONT_WEIGHTS_MOB,
  LINE_HEIGHTS_DESC,
  LINE_HEIGHTS_MOB,
  Text,
} from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';

export const BoxBenefits = styled.div`
  display: none;
  width: 232px;
  height: 232px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.mainPage.benefitBorderColor};

  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1280px) {
    display: grid;
    grid-column: 1/2;
    grid-row: 1/2;
  }
`;

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

export const WrapperSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-repeat: round;
  background-color: ${({ theme }) => theme.mainPage.backgroundSectionTrendingColor};
  flex-wrap: wrap;
  padding: 16px 16px 0 16px;
  background-image: linear-gradient(180deg, rgba(228, 230, 233, 0) 22.51%, #e4e6e9 100%);

  @media (min-width: 768px) {
    padding: 0 44px;
  }
  @media (min-width: 1024px) {
    padding: 0 104px;
  }
  @media (min-width: 1280px) {
    padding: 0;
  }
`;

export const BenefitsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;
  max-width: 1200px;
  padding: 16px 0;

  @media (min-width: 768px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    grid-row-gap: 24px;
    padding: 64px 0;
  }
  @media (min-width: 1024px) {
    gap: 24px;
  }
  @media (min-width: 1280px) {
    padding: 80px 0;
  }
`;

export const BenefitFrame = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  background: ${({ theme }) => theme.сards.cardContentBackground};
  border: 1px solid #d9dbde;
  border-radius: 8px;
  padding: 16px;
  gap: 8px;
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 1;
  border-radius: 8px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -10;
    border-radius: 8px;
    box-shadow: ${({ theme }) => theme.сards.shadow};
  }

  @media (min-width: 768px) {
    padding: 24px;
    border-radius: 12px;

    &::before {
      border-radius: 12px;
      box-shadow: ${({ theme }) => theme.modal.shadow};
    }
  }
`;

export const BenefitHeader = styled(Text)`
  color: ${({ theme }) => theme.mainPage.benefitHeaderColor};
`;

export const BenefitText = styled(Text)`
  color: ${({ theme }) => theme.mainPage.benefitBodyColorSmall};

  @media (min-width: 768px) {
    color: ${({ theme }) => theme.mainPage.benefitBodyColor};
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  text-align: center;
  max-width: 311px;

  & span:nth-child(2) {
    font-size: ${FONT_SIZES_MOB[TextVariantEnum.textBody2medium]};
    font-weight: ${FONT_WEIGHTS_MOB[TextVariantEnum.textBody2medium]};
    line-height: ${LINE_HEIGHTS_MOB[TextVariantEnum.textBody2medium]};
  }
  @media (min-width: 768px) {
    gap: 16px;
    max-width: 493px;
    & span:nth-child(2) {
      font-size: ${FONT_SIZES_DESC[TextVariantEnum.textBody1medium]};
      font-weight: ${FONT_WEIGHTS_DESC[TextVariantEnum.textBody1medium]};
      line-height: ${LINE_HEIGHTS_DESC[TextVariantEnum.textBody1medium]};
    }
  }
`;

export const MainBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  gap: 24px;
  padding: 40px 16px 16px;
  background: ${({ theme }) => theme.сards.cardContentBackground};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.сards.shadow};

  @media (min-width: 768px) {
    border-radius: 12px;
    padding: 64px 24px 24px;
    gap: 48px;
    box-shadow: ${({ theme }) => theme.modal.shadow};
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 16px;
  height: 560px;

  @media (min-width: 768px) {
    gap: 24px;
    height: 579px;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr max-content;
    height: 688px;
  }
  @media (min-width: 1280px) {
    grid-template-columns: 232px 232px 1fr;
    height: 488px;
  }
`;
// export const ImgWrapper = styled.div`
//   @media (max-width: 1279px) {
//     display: none;
//   }

//   background: url('/images/homePage/workerSectionBenefits.png') repeat;
//   background-size: cover;
//   background-position: center center;

//   @media (min-width: 1280px) {
// display: grid;
// grid-column: 1/2;
// grid-row: 1/2;
//   }
// `;

export const SloganWrapper = styled.div`
  width: 232px;
  height: 232px;
  background-image: linear-gradient(180deg, rgba(237, 239, 242, 0.55) 0%, #edeff2 100%);
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.mainPage.benefitBorderColor};
  gap: 16px;
  display: none;

  @media (min-width: 1024px) {
    padding: 24px;
    display: grid;
    grid-column: 2/3;
    grid-template-rows: max-content 1fr;
  }
  @media (min-width: 1280px) {
    grid-column: 2/3;
    grid-row: 1/2;
  }
`;
export const SliderWrapper = styled.div`
  border-radius: 8px;
  background-color: green;
  width: 100%;
  height: 360px;
  background: url('/images/homePage/sliderImgSectionBenefitsMobile.png') no-repeat;
  background-size: cover;
  background-position: top center;

  @media (min-width: 510px) {
    background: url('/images/homePage/sliderImgSectionBenefitsTablet.png') no-repeat;
    background-size: cover;
    background-position: top center;
  }

  @media (min-width: 768px) {
    height: 355px;
    background: url('/images/homePage/sliderImgSectionBenefitsTablet.png') no-repeat;
    background-size: cover;
    background-position: top center;
  }

  @media (min-width: 1024px) {
    grid-column: 1/3;
    grid-row: 2/3;
    height: 432px;
  }

  @media (min-width: 1280px) {
    grid-column: 3/4;
    grid-row: 1/3;
    width: 642px;
    height: 100%;
    background: url('/images/homePage/sliderImgSectionBenefitsDesktop.png') no-repeat;
    background-size: cover;
    background-position: top center;
  }
`;

export const SliderContentWrapper = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  max-width: 279px;
  margin: 0 auto;
  gap: 16px;
  text-align: center;
  justify-items: center;
  align-content: center;

  & > span {
    align-self: end;
    font-size: ${FONT_SIZES_MOB[TextVariantEnum.textHeading1]};
    line-height: ${LINE_HEIGHTS_MOB[TextVariantEnum.textHeading1]};
  }

  @media (min-width: 768px) {
    gap: 24px;
    max-width: 250px;

    & > span {
      font-size: ${FONT_SIZES_DESC[TextVariantEnum.textHeading3]};
      line-height: ${LINE_HEIGHTS_DESC[TextVariantEnum.textHeading3]};
    }
  }
`;

export const QuoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-image: linear-gradient(180deg, rgba(237, 239, 242, 0.55) 0%, #edeff2 100%);
  padding: 16px;
  gap: 16px;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.mainPage.benefitBorderColor};

  @media (min-width: 768px) {
    padding: 24px;
    gap: 24px;
  }

  @media (min-width: 1024px) {
    grid-column: 1/2;
    grid-row: 1/2;
  }
  @media (min-width: 1280px) {
    grid-column: 1/3;
    grid-row: 2/3;
  }
`;

export const OwnerWrapper = styled.div`
  display: flex;
  gap: 16px;
  img {
    width: 64px;
    height: 64px;
  }

  @media (min-width: 768px) {
  }
`;
export const OwnerInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & span:nth-child(1) {
    font-size: ${FONT_SIZES_MOB[TextVariantEnum.textBody2medium]};
    font-weight: ${FONT_WEIGHTS_MOB[TextVariantEnum.textBody2medium]};
    line-height: ${LINE_HEIGHTS_MOB[TextVariantEnum.textBody2medium]};
  }

  @media (min-width: 768px) {
    gap: 0;
    & span:nth-child(1) {
      font-size: ${FONT_SIZES_DESC[TextVariantEnum.textBody1medium]};
      font-weight: ${FONT_WEIGHTS_DESC[TextVariantEnum.textBody1medium]};
      line-height: ${LINE_HEIGHTS_DESC[TextVariantEnum.textBody1medium]};
    }
  }
`;
