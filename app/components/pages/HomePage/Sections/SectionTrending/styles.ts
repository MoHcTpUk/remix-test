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
  padding: 40px 29px;
  gap: 16px;
  background-color: ${({ theme }) => theme.mainPage.backgroundSectionTrendingColor};
  @media (min-width: 768px) {
    padding: 64px 44px;
    gap: 32px;
  }

  @media (min-width: 1024px) {
    padding: 64px 104px;
  }
  @media (min-width: 1280px) {
    padding: 80px 0;
    gap: 40px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  text-align: center;

  & span:nth-child(2) {
    font-size: ${FONT_SIZES_MOB[TextVariantEnum.textHeading1]};
    font-weight: ${FONT_WEIGHTS_MOB[TextVariantEnum.textHeading1]};
    line-height: ${LINE_HEIGHTS_MOB[TextVariantEnum.textHeading1]};
  }
  @media (min-width: 768px) {
    gap: 4px;
    & span:nth-child(2) {
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
  display: none;
  width: 100%;
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ChipsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  @media (min-width: 1280px) {
    max-width: 1200px;
    gap: 24px;
  }
`;
