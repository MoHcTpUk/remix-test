import type { ValueOf } from 'shared/utils';

export const CardVariants = {
  companies: 'companies',
  articles: 'articles',
} as const;

export type CardVariant = ValueOf<typeof CardVariants>;
