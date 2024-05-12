import type { ReactNode } from 'react';
import type { CSSProperties } from 'styled-components';

import type { EntityVariantEnum } from '~/types/enums/entityVariantEnum';
import type { PageVariantEnum } from '~/types/enums/pageVariantEnum';
import type { SizeCardVariantEnum } from '~/types/enums/sizeCardVariantEnum';

import { Wrapper } from './styles';

type Props = {
  variant?: EntityVariantEnum;
  variantSize?: SizeCardVariantEnum;
  pageVariant?: PageVariantEnum;
  children: ReactNode;
  borderBottom?: boolean;
  borderTop?: boolean;
  padding?: string;
  style?: CSSProperties;
};

export function DataBox({
  children,
  variant,
  borderBottom,
  borderTop,
  padding,
  pageVariant,
  variantSize,
  style,
}: Props) {
  return (
    <Wrapper
      borderBottom={borderBottom}
      borderTop={borderTop}
      variant={variant}
      padding={padding}
      pageVariant={pageVariant}
      variantSize={variantSize}
      style={style}
    >
      {children}
    </Wrapper>
  );
}
