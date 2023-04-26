export interface IPalette {
  neutral: {
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

  error: {
    error_base: string;
  };
}
