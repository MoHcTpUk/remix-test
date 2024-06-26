import type { IPalette } from '~/types/interfaces/iPalette';

import { basePalette } from './basePalette';

export const darkPalette: IPalette = {
  ...basePalette,
  neutral: {
    neutral1: '#444',
    neutral2: '#DDD',
    neutral3: '#BBB',
    neutral4: '#999',
  },
  accent: {
    accent1: {
      accent1_base: '#CCC',
      accent1_variant1: '#CCC',
    },
    accent2: '#CCC',
    accent3: '#CCC',
  },
};
