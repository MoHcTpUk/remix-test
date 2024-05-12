import styled from 'styled-components';

import type { EntityVariantEnum } from '~/types/enums/entityVariantEnum';

export const Wrapper = styled.div<{ variant?: EntityVariantEnum }>`
  display: flex;
  flex-direction: column;
  gap: 4px;

  .shortDescription {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
  }
`;
