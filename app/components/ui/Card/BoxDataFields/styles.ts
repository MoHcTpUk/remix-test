import { styled } from 'styled-components';

import { EntityVariantEnum } from '~/types/enums/entityVariantEnum';
import { PageVariantEnum } from '~/types/enums/pageVariantEnum';

export const Wrapper = styled.div<{ variant?: EntityVariantEnum; pageVariant?: PageVariantEnum }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 8px;

  @media (min-width: 768px) {
    margin-top: ${({ variant, pageVariant }) =>
      (variant === EntityVariantEnum.vacancy || pageVariant === PageVariantEnum.response) &&
      '-8px'};
  }
`;
