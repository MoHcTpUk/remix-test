export interface IPalette {
  neutral: {
    none: string;
    neutral1: string;
    neutral2: string;
    neutral3: string;
    neutral4: string;
  };

  darken: {
    darken1: {
      darken1_base: string;
      darken1_variant1: string;
      darken1_variant2: string;
      darken1_variant3: string;
      darken1_variant4: string;
      darken1_variant5: string;
      darken1_variant6: string;
      darken1_variant7: string;
      darken1_variant8: string;
    };
    darken2: {
      darken2_base: string;
      darken2_variant1: string;
      darken2_variant2: string;
    };
  };

  accent: {
    accent1: {
      accent1_base: string;
      accent1_variant1: string;
      accent1_variant2: string;
      accent1_variant3: string;
      accent1_variant4: string;
      accent1_variant5: string;
      accent1_variant6: string;
    };
    accent2: string;
    accent3: string;
  };

  info: {
    info_errors: {
      info_errors_variant1: string;
      info_errors_variant2: string;
      info_errors_variant3: string;
    };
    info_warning: {
      info_warning_variant1: string;
      info_warning_variant2: string;
      info_warning_variant3: string;
    };
    info_success: {
      info_success_variant1: string;
      info_success_variant2: string;
    };
  };

  shadow: {
    level_1: string;
    level_2: string;
    level_3: string;
    level_modal: string;
  };
}
