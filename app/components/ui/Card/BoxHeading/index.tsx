import type { ReactNode } from 'react';

import type { EntityVariantEnum } from '~/types/enums/entityVariantEnum';
import type { PageVariantEnum } from '~/types/enums/pageVariantEnum';
import type { ResponseCardVariantEnum } from '~/types/enums/responseCardVariantEnum';
import type { SizeCardVariantEnum } from '~/types/enums/sizeCardVariantEnum';

import { Wrapper } from './styles';

type Props = {
  variant?: EntityVariantEnum;
  pageVariant?: PageVariantEnum;
  sizeVariant?: SizeCardVariantEnum;
  children: ReactNode;
  className?: string;
  variantResponseCard?: ResponseCardVariantEnum;
};

export function BoxHeading({
  children,
  variant,
  pageVariant,
  className,
  sizeVariant,
  variantResponseCard,
}: Props) {
  return (
    <Wrapper
      variant={variant}
      className={className}
      pageVariant={pageVariant}
      sizeVariant={sizeVariant}
      variantResponseCard={variantResponseCard}
    >
      {children}
    </Wrapper>
  );
}
