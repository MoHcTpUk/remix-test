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
      darken1_varian1: string;
      darken1_varian2: string;
    };
    darken2: {
      darken2_base: string;
      darken2_varian1: string;
      darken2_varian2: string;
    };
  };

  accent: {
    accent1: {
      accent1_base: string;
      accent1_varian1: string;
      accent1_varian2: string;
      accent1_varian3: string;
      accent1_varian4: string;
      accent1_varian5: string;
      accent1_varian6: string;
    };
    accent2: string;
    accent3: string;
  };
}
