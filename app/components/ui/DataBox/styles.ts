import { styled } from 'styled-components';

import { EntityVariantEnum } from '~/types/enums/entityVariantEnum';
import type { PageVariantEnum } from '~/types/enums/pageVariantEnum';
import { SizeCardVariantEnum } from '~/types/enums/sizeCardVariantEnum';

export const Wrapper = styled.div<{
  variant?: EntityVariantEnum | SizeCardVariantEnum;
  borderBottom?: boolean;
  borderTop?: boolean;
  padding?: string;
  pageVariant?: PageVariantEnum;
  variantSize?: SizeCardVariantEnum;
}>`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: ${({ variant, padding, variantSize }) => {
    if (padding) return padding;
    if (variantSize === SizeCardVariantEnum.full) return '4px 0 12px';
    if (variant === EntityVariantEnum.company) return '0';
    if (variant === EntityVariantEnum.vacancy || EntityVariantEnum.resume) return '16px 0';
    return '16px 0 12px';
  }};
  border-bottom: ${({ theme, borderBottom }) =>
    borderBottom && `1px solid ${theme.user.borderColor}`};
  border-top: ${({ theme, borderTop }) => borderTop && `1px solid ${theme.user.borderColor}`};
  @media (min-width: 768px) {
    gap: 32px;
  }
`;
