import type { ReactNode } from 'react';

import type { EntityVariantEnum } from '~/types/enums/entityVariantEnum';

import { Wrapper } from './styles';

type Props = {
  variant?: EntityVariantEnum;
  children: ReactNode;
  className?: string;
};

export function Field({ children, variant, className }: Props) {
  return <Wrapper variant={variant}>{children}</Wrapper>;
}
