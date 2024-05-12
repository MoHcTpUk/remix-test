import { styled } from 'styled-components';

import {
  FONT_SIZES_DESC,
  FONT_SIZES_MOB,
  LINE_HEIGHTS_DESC,
  LINE_HEIGHTS_MOB,
} from '~/components/common/Text';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    gap: 24px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 16px;
  padding-top: 8px;

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .cardDate {
    font-size: ${FONT_SIZES_MOB.textSmallmedium};
    line-height: ${LINE_HEIGHTS_MOB.textSmallmedium};
    border-bottom: 1px solid ${({ theme }) => theme.user.borderColor};
    padding-bottom: 16px;

    @media (min-width: 768px) {
      font-size: ${FONT_SIZES_DESC.textBody2medium};
      line-height: ${LINE_HEIGHTS_DESC.textBody2medium};
      border-bottom: none;
      padding-bottom: 0;
    }
  }
`;

export const Image = styled.div`
  background: ${({ theme }) => theme.сards.imageBackground};
  width: 100%;
  display: flex;
  border-radius: 8px;
  position: relative;
  padding-top: 56.25%;
  overflow: hidden;

  img {
    border-radius: 8px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
  }
`;
