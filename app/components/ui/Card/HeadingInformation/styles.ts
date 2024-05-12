import styled from 'styled-components';

import { FONT_SIZES_DESC, LINE_HEIGHTS_DESC } from '~/components/common/Text';
import { EntityVariantEnum } from '~/types/enums/entityVariantEnum';
import type { ResponseCardVariantEnum } from '~/types/enums/responseCardVariantEnum';

export const Wrapper = styled.div<{
  variant?: EntityVariantEnum;
  variantResponseCard?: ResponseCardVariantEnum;
}>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
  overflow-x: ${({ variant }) => variant === EntityVariantEnum.company && 'hidden'};

  @media (min-width: 768px) {
    gap: 8px;
    .title {
      font-size: ${FONT_SIZES_DESC.textHeading3};
      line-height: ${LINE_HEIGHTS_DESC.textHeading3};
    }
  }
`;
