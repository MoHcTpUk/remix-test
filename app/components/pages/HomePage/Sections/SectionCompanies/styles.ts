import styled from 'styled-components';

import {
  FONT_SIZES_DESC,
  FONT_SIZES_MOB,
  FONT_WEIGHTS_DESC,
  FONT_WEIGHTS_MOB,
  LINE_HEIGHTS_DESC,
  LINE_HEIGHTS_MOB,
} from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';

export const WrapperSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-repeat: round;
  padding: 4px 0 40px 0;
  gap: 14px;
  background-color: ${({ theme }) => theme.mainPage.backgroundSectionArticlesColor};
  background-image: linear-gradient(180deg, rgba(228, 230, 233, 0) 22.51%, #e4e6e9 100%);

  @media (min-width: 768px) {
    padding: 64px 0;
    gap: 34px;
  }
  @media (min-width: 1024px) {
    gap: 28px;
  }
  @media (min-width: 1280px) {
    gap: 32px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & span {
    font-size: ${FONT_SIZES_MOB[TextVariantEnum.textHeading1]};
    font-weight: ${FONT_WEIGHTS_MOB[TextVariantEnum.textHeading1]};
    line-height: ${LINE_HEIGHTS_MOB[TextVariantEnum.textHeading1]};
  }
  @media (min-width: 768px) {
    & span {
      font-size: ${FONT_SIZES_DESC[TextVariantEnum.textHeading2]};
      font-weight: ${FONT_WEIGHTS_DESC[TextVariantEnum.textHeading2]};
      line-height: ${LINE_HEIGHTS_DESC[TextVariantEnum.textHeading2]};
    }
  }
`;

export const SwiperChips = styled.div`
  display: flex;
`;

export const MobileContainer = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const TabletContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SliderContainer = styled.div`
  width: 100%;

  @media (min-width: 1240px) {
    display: flex;
    justify-content: center;
  }
  @media (min-width: 1280px) {
    padding: 0;
    max-width: 1200px;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: -16px;

  @media (min-width: 768px) {
    margin-top: -26px;
  }

  @media (min-width: 1280px) {
    margin-top: -44px;
  }
`;
