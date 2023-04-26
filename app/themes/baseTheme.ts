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
        iconColor: palette.neutral.neutral1,
        iconColorHover: palette.neutral.neutral1,
        iconDisable: palette.darken.darken2.darken2_variant2,
      },
      secondary: {
        backgroundColor: palette.neutral.neutral1,
        spanColor: palette.darken.darken1.darken1_base,
        focusBackgroundColor: palette.neutral.neutral3,
        focusSpanColor: palette.accent.accent1.accent1_base,
        iconColor: palette.accent.accent1.accent1_base,
        iconColorHover: palette.neutral.neutral1,
        iconDisable: palette.darken.darken2.darken2_variant2,
      },
      chips: {
        backgroundColor: palette.neutral.neutral3,
        spanColor: palette.darken.darken1.darken1_base,
        focusBackgroundColor: palette.darken.darken2.darken2_variant2,
        focusSpanColor: palette.accent.accent1.accent1_base,
        activeBorderColor: palette.accent.accent1.accent1_base,
      },
      small: {
        backgroundColor: palette.neutral.neutral1,
        borderColor: palette.accent.accent1.accent1_base,
        pressedBacgroundColor: palette.accent.accent1.accent1_base,
        hoverBackgroundColor: palette.accent.accent1.accent1_variant1,
        hoverBorderColor: palette.accent.accent1.accent1_variant1,
        hoverBorderSpanColor: palette.neutral.neutral1,
        focusBorderColor: palette.accent.accent1.accent1_base,
        iconColor: palette.accent.accent1.accent1_base,
        iconColorHover: palette.neutral.neutral1,
        iconDisable: palette.darken.darken2.darken2_variant2,
      },
    },
    сards: {
      articlesTextColor: palette.darken.darken1.darken1_variant2,
      vacanciesTextColor: palette.accent.accent1.accent1_base,
      noVacanciesTextColor: palette.darken.darken1.darken1_variant2,
      imageBackground: palette.neutral.neutral3,
      cardContentBackground: palette.neutral.neutral1,
    },
    search: {
      backgroundWrapper: palette.neutral.neutral1,
      svgColor: palette.darken.darken2.darken2_base,
      borderColor: palette.accent.accent1.accent1_variant3,
      middleBorderColor: palette.accent.accent1.accent1_variant3,
    },
    tabs: {
      middleBorder: {
        backgroundColor: palette.accent.accent1.accent1_base,
      },
      tabButton: {
        activeBackgroundColor: palette.neutral.neutral1,
        backgroundColor: palette.accent.accent1.accent1_variant5,
        focusBackgroundColor: palette.neutral.neutral1,
        focusActiveBackgroundColor: palette.neutral.neutral3,
        focusSpanBackgroundColor: palette.accent.accent1.accent1_base,
        focusSpanActiveBackgroundColor: palette.darken.darken1.darken1_base,
      },
      tabContainer: {
        backgroundColor: palette.accent.accent1.accent1_variant5,
      },
      activeTabColor: palette.darken.darken1.darken1_base,
      disabledTabColor: palette.darken.darken1.darken1_variant1,
    },
    ui: {
      logoLinkColor: palette.darken.darken2.darken2_base,
      logoLinkHoverColor: palette.accent.accent1.accent1_base,
    },
    slider: {
      backgroundBulletColor: palette.darken.darken1.darken1_variant2,
      backgroundBulletActiveColor: palette.accent.accent1.accent1_base,
      backgroundButtonArrowColor: palette.neutral.neutral3,
      buttonArrowColor: palette.accent.accent1.accent1_base,
      hoverButtonArrowColor: palette.neutral.neutral4,
    },
    navbar: {
      logoColor: palette.darken.darken2.darken2_base,
      wrapperHeaderBackgroundColor: palette.neutral.neutral2,
      hoverColor: palette.accent.accent1.accent1_base,
      noHoverColor: palette.darken.darken2.darken2_base,
      textActiveLangColor: palette.darken.darken2.darken2_base,
      textNoActiveLangColor: palette.darken.darken2.darken2_variant1,
      svgColor: palette.darken.darken2.darken2_base,
    },
    footer: {
      wrapperHeaderBackgroundColor: palette.neutral.neutral2,
      linkSpanColor: palette.accent.accent1.accent1_base,
      linkSpanColorMedia1024: palette.darken.darken2.darken2_base,
      boxCopirightSpanColorMedia1024: palette.darken.darken2.darken2_variant1,
      linkTextColor: palette.darken.darken1.darken1_variant1,
    },
    mainPage: {
      headingColor: palette.neutral.neutral1,
      backgroundSectionTrendingColor: palette.neutral.neutral2,
      backgroundSectionCompaniesColor: palette.darken.darken2.darken2_variant2,
      backgroundSectionArticlesColor: palette.neutral.neutral2,
      backgroundSectionNewsColor: palette.darken.darken2.darken2_variant2,
      benefitHeadingMobileColor: palette.accent.accent1.accent1_base,
      benefitHeaderColorSmall: palette.accent.accent1.accent1_base,
      benefitHeaderColor: palette.darken.darken2.darken2_base,
      benefitBodyColorSmall: palette.darken.darken2.darken2_base,
      benefitBodyColor: palette.darken.darken2.darken2_variant1,
    },
  } as ITheme;
}
