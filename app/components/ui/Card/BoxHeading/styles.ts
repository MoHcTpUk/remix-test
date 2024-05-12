import styled from 'styled-components';

import type { EntityVariantEnum } from '~/types/enums/entityVariantEnum';
import { PageVariantEnum } from '~/types/enums/pageVariantEnum';
import { ResponseCardVariantEnum } from '~/types/enums/responseCardVariantEnum';
import { SizeCardVariantEnum } from '~/types/enums/sizeCardVariantEnum';

export const Wrapper = styled.div<{
  variant?: EntityVariantEnum;
  className?: string;
  pageVariant?: PageVariantEnum;
  sizeVariant?: SizeCardVariantEnum;
  variantResponseCard?: ResponseCardVariantEnum;
}>`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: flex-start;
  padding-bottom: ${({ pageVariant, variantResponseCard }) =>
    (pageVariant !== PageVariantEnum.response ||
      variantResponseCard === ResponseCardVariantEnum.main) &&
    '16px'};
  border-bottom: ${({ theme, variant, sizeVariant }) => {
    if (sizeVariant === SizeCardVariantEnum.full) return `1px solid ${theme.user.borderColor}`;
    return 'none';
  }};
  width: 100%;
  img {
    border-radius: 50%;
    width: 64px;
    height: 64px;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    img {
      width: ${({ className, sizeVariant }) => sizeVariant === SizeCardVariantEnum.full && '104px'};
      height: ${({ className, sizeVariant }) =>
        sizeVariant === SizeCardVariantEnum.full && '104px'};
    }
  }
`;
