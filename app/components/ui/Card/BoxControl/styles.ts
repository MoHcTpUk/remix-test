import styled, { CSSProperties } from 'styled-components';

import type { EntityVariantEnum } from '~/types/enums/entityVariantEnum';
import type { PageVariantEnum } from '~/types/enums/pageVariantEnum';
import { SizeCardVariantEnum } from '~/types/enums/sizeCardVariantEnum';

export const Wrapper = styled.div<{
  variant?: EntityVariantEnum;
  className?: string;
  pageVariant?: PageVariantEnum;
  sizeVariant?: SizeCardVariantEnum;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: ${({ className, sizeVariant, theme }) =>
    sizeVariant === SizeCardVariantEnum.full ? `1px solid ${theme.user.borderColor}` : 'none'};

  form {
    align-items: center;
    padding-top: ${({ className, sizeVariant }) =>
      sizeVariant === SizeCardVariantEnum.full ? '16px' : '0'};
  }

  @media (min-width: 768px) {
    align-items: flex-end;

    form {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
      align-items: flex-end;
    }
  }

  @media (min-width: 1280px) {
    .notAuthenticated {
      justify-content: center;
    }
  }
`;
