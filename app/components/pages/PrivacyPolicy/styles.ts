import { styled } from 'styled-components';

import {
  FONT_SIZES_DESC,
  FONT_SIZES_MOB,
  FONT_WEIGHTS_DESC,
  FONT_WEIGHTS_MOB,
  LINE_HEIGHTS_DESC,
  LINE_HEIGHTS_MOB,
} from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;

  span {
    font-size: ${FONT_SIZES_MOB[TextVariantEnum.textHeading2]};
    font-weight: ${FONT_WEIGHTS_MOB[TextVariantEnum.textHeading2]};
    line-height: ${LINE_HEIGHTS_MOB[TextVariantEnum.textHeading2]};
  }

  @media (min-width: 768px) {
    span {
      font-size: ${FONT_SIZES_DESC[TextVariantEnum.textHeading3]};
      font-weight: ${FONT_WEIGHTS_DESC[TextVariantEnum.textHeading3]};
      line-height: ${LINE_HEIGHTS_DESC[TextVariantEnum.textHeading3]};
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  white-space: pre-line;
`;
