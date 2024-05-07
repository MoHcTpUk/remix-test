import type { IPalette } from '~/types/interfaces/iPalette';

export const basePalette: IPalette = {
  neutral: {
    none: 'none',
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
      darken1_variant3: 'rgba(69, 72, 87, 0.12)',
      darken1_variant4: 'rgba(69, 72, 87, 0.08)',
      darken1_variant5: '#F0F0F2',
      darken1_variant6: '#E9E9EB',
      darken1_variant7: '#E0E2E6',
      darken1_variant8: '#D9DBDF',
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

  info: {
    info_errors: {
      info_errors_variant1: '#5F2120',
      info_errors_variant2: '#BA2320',
      info_errors_variant3: '#FDEDED',
    },
    info_warning: {
      info_warning_variant1: '#714A12',
      info_warning_variant2: '#ED6C02',
      info_warning_variant3: '#FFF4E5',
    },
    info_success: {
      info_success_variant1: '#214923',
      info_success_variant2: '#EDF7ED',
    },
  },

  shadow: {
    level_1: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
    level_2: '0px 1px 2px rgba(0, 0, 0, 0.2), 0px 2px 6px 2px rgba(0, 0, 0, 0.1)',
    level_3: '0px 4px 8px 3px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.2)',
    level_modal: '0px 20px 50px rgba(0, 0, 0, 0.2)',
  },
};
