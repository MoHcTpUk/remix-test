import type { IPalette } from 'public/interfaces/iPalette';

export const basePalette: IPalette = {
  neutral: {
    neutral1: '#FFFFFF',
    neutral2: '#FAFAFA',
    neutral3: '#EDEFF2',
    neutral4: '#D9DBDE',
  },

  darken: {
    darken1: {
      darken1_base: '#454857',
      darken1_variant1: '#7D7F89',
      darken1_variant2: '#A2A3AB',
    },
    darken2: {
      darken2_base: '#566178',
      darken2_variant1: '#9AA0AE',
      darken2_variant2: '#E4E6E9',
    },
  },

  accent: {
    accent1: {
      accent1_base: '#3C79F5', // Vasil
      accent1_variant1: '#77A1F8', // Vasil 70
      accent1_variant2: '#8AAFF9', // Vasil 60
      accent1_variant3: '#B1C9FB', // Vasil 40
      accent1_variant4: '#D8E4FD', // Vasil 20
      accent1_variant5: '#ECF2FE', // Vasil 15
      accent1_variant6: '#F5F8FF', // Vasil 5
    },
    accent2: '#3B67C0', // Vasil dark
    accent3: '#E5E8F9',
  },
};
