import type { IPalette } from 'public/interfaces/iPalette';
import type { ITheme } from '../../public/interfaces/iTheme';

export function getTheme(palette: IPalette): ITheme {
  return {
    backgroundColor: palette.neutral.neutral4,
    buttons: {
      primary: {
        backgroundColor: palette.accent.accent1.accent1_base,
        spanColor: palette.neutral.neutral1,
        focusBackgroundColor: palette.accent.accent2,
      },
      secondary: {
        backgroundColor: palette.neutral.neutral1,
        spanColor: palette.darken.darken1.darken1_base,
        focusBackgroundColor: palette.neutral.neutral3,
        focusSpanColor: palette.accent.accent1.accent1_base,
      },
      chips: {
        backgroundColor: palette.neutral.neutral3,
        spanColor: palette.darken.darken1.darken1_base,
        focusBackgroundColor: palette.darken.darken2.darken2_varian2,
        focusSpanColor: palette.accent.accent1.accent1_base,
        activeBorderColor: palette.accent.accent1.accent1_base,
      },
      small: {
        backgroundColor: palette.neutral.neutral1,
        borderColor: palette.accent.accent1.accent1_base,
        hoverBackgroundColor: palette.accent.accent1.accent1_varian1,
        hoverBorderColor: palette.accent.accent1.accent1_varian1,
        hoverBorderSpanColor: palette.neutral.neutral1,
        focusBorderColor: palette.accent.accent1.accent1_base,
      },
    },
    сards: {
      articlesTextColor: palette.darken.darken1.darken1_varian2,
      vacanciesTextColor: palette.accent.accent1.accent1_base,
      noVacanciesTextColor: palette.darken.darken1.darken1_varian2,
      imageBackground: palette.neutral.neutral3,
      cardContentBackground: palette.neutral.neutral1,
    },
    search: {
      backgroundWrapper: palette.neutral.neutral1,
      svgColor: palette.darken.darken2.darken2_base,
      borderColor: palette.accent.accent1.accent1_varian3,
      middleBorderColor: palette.accent.accent1.accent1_varian3,
    },
    tabs: {
      middleBorder: {
        backgroundColor: palette.accent.accent1.accent1_base,
      },
      tabButton: {
        activeBackgroundColor: palette.neutral.neutral1,
        backgroundColor: palette.accent.accent3,
        focusBackgroundColor: palette.neutral.neutral1,
        focusActiveBackgroundColor: palette.neutral.neutral3,
        focusSpanBackgroundColor: palette.accent.accent1.accent1_base,
        focusSpanActiveBackgroundColor: palette.darken.darken1.darken1_base,
      },
      tabContainer: {
        backgroundColor: palette.accent.accent3,
      },
      activeTabColor: palette.darken.darken1.darken1_base,
      disabledTabColor: palette.darken.darken1.darken1_varian1,
    },
    ui: {
      logoLinkColor: palette.darken.darken2.darken2_base,
      logoLinkHoverColor: palette.accent.accent1.accent1_base,
    },
    navbar: {
      logoColor: palette.darken.darken2.darken2_base,
      wrapperHeaderBackgroundColor: palette.neutral.neutral2,
      hoverColor: palette.accent.accent1.accent1_base,
      noHoverColor: palette.darken.darken2.darken2_base,
      textActiveLangColor: palette.darken.darken2.darken2_base,
      textNoActiveLangColor: palette.darken.darken2.darken2_varian1,
      svgColor: palette.darken.darken2.darken2_base,
    },
    footer: {
      wrapperHeaderBackgroundColor: palette.neutral.neutral2,
      linkSpanColor: palette.accent.accent1.accent1_base,
      linkSpanColorMedia1024: palette.darken.darken2.darken2_base,
      boxCopirightSpanColorMedia1024: palette.darken.darken2.darken2_varian1,
      linkTextColor: palette.darken.darken1.darken1_varian1,
    },
  } as ITheme;
}
