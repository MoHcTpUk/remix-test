import { styled } from 'styled-components';

import {
  FONT_SIZES_DESC,
  FONT_SIZES_MOB,
  FONT_WEIGHTS_DESC,
  FONT_WEIGHTS_MOB,
  LINE_HEIGHTS_DESC,
  LINE_HEIGHTS_MOB,
} from '~/components/common/Text';

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  & span {
    font-size: ${FONT_SIZES_MOB.textHeading2};
    line-height: ${LINE_HEIGHTS_MOB.textHeading2};
    font-weight: ${FONT_WEIGHTS_MOB.textHeading2};
  }

  @media (min-width: 768px) {
    & span {
      font-size: ${FONT_SIZES_DESC.textHeading3};
      line-height: ${LINE_HEIGHTS_DESC.textHeading3};
      font-weight: ${FONT_WEIGHTS_DESC.textHeading3};
    }
  }
`;
