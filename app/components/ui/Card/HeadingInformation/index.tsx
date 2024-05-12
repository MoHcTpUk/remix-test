import type { ReactNode } from 'react';

import type { EntityVariantEnum } from '~/types/enums/entityVariantEnum';
import type { ResponseCardVariantEnum } from '~/types/enums/responseCardVariantEnum';

import { Wrapper } from './styles';

type Props = {
  variant?: EntityVariantEnum;
  variantResponseCard?: ResponseCardVariantEnum;
  children: ReactNode;
};

export function HeadingInformation({ children, variant, variantResponseCard }: Props) {
  return (
    <Wrapper variant={variant} variantResponseCard={variantResponseCard}>
      {children}
    </Wrapper>
  );
}
