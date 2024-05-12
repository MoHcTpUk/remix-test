import type { ReactNode } from 'react';

import type { EntityVariantEnum } from '~/types/enums/entityVariantEnum';

import { Wrapper } from './styles';

type Props = {
  variant?: EntityVariantEnum;
  children: ReactNode;
};

export function BoxButtons({ children, variant }: Props) {
  return <Wrapper variant={variant}>{children}</Wrapper>;
}
