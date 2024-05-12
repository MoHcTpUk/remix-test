import type { ReactNode } from 'react';
import type { CSSProperties } from 'styled-components';

import type { EntityVariantEnum } from '~/types/enums/entityVariantEnum';
import type { PageVariantEnum } from '~/types/enums/pageVariantEnum';
import type { SizeCardVariantEnum } from '~/types/enums/sizeCardVariantEnum';

import { Wrapper } from './styles';

type Props = {
  variant?: EntityVariantEnum;
  pageVariant?: PageVariantEnum;
  sizeVariant?: SizeCardVariantEnum;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function BoxControl({
  children,
  variant,
  pageVariant,
  sizeVariant,
  className,
  style,
}: Props) {
  return (
    <Wrapper
      style={style}
      variant={variant}
      sizeVariant={sizeVariant}
      pageVariant={pageVariant}
      className={className}
    >
      {children}
    </Wrapper>
  );
}
