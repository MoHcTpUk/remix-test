import type { ReactNode } from 'react';

import type { EntityVariantEnum } from '~/types/enums/entityVariantEnum';
import type { PageVariantEnum } from '~/types/enums/pageVariantEnum';

import { Wrapper } from './styles';

type Props = {
  variant?: EntityVariantEnum;
  pageVariant?: PageVariantEnum;
  children: ReactNode;
};

export function BoxDataFields({ children, variant, pageVariant }: Props) {
  return (
    <Wrapper variant={variant} pageVariant={pageVariant}>
      {children}
    </Wrapper>
  );
}
