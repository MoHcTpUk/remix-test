export interface ITheme {
  backgroundColor: string;
  defaultTextColor: string;
  errorTextColor: string;
  accentTextColor: string;
  blackIconColor: string;
  buttons: {
    primary: {
      backgroundColor: string;
      focusBackgroundColor: string;
      disabledBackgroundColor: string;
      spanColor: string;
      iconColor: string;
      iconColorHover: string;
      iconDisable: string;
      shadow: string;
    };
    secondary: {
      backgroundColor: string;
      focusBackgroundColor: string;
      activeBackgroundColor: string;
      disabledBackgroundColor: string;
      spanColor: string;
      disabledSpanColor: string;
      focusSpanColor: string;
      iconColor: string;
      iconColorHover: string;
      iconDisable: string;
    };
    tertiary: {
      backgroundColor: string;
      focusBackgroundColor: string;
      activeBackgroundColor: string;
      disabledBackgroundColor: string;
      spanColor: string;
      activeSpanColor: string;
      disabledSpanColor: string;
    };
    chips: {
      backgroundColor: string;
      focusBackgroundColor: string;
      activeBackgroundColor: string;
      spanColor: string;
      focusSpanColor: string;
      activeBorderColor: string;
    };
    small: {
      textColor: string;
      backgroundColor: string;
      borderColor: string;
      hoverBackgroundColor: string;
      pressedBacgroundColor: string;
      hoverBorderColor: string;
      hoverBorderSpanColor: string;
      focusBorderColor: string;
      iconColor: string;
      iconColorHover: string;
      iconDisable: string;
    };
  };
  switcher: {
    backgroundDefault: string;
    backgroundChecked: string;
    textDefaultColor: string;
    textCheckedColor: string;
    backgroundTogglerColor: string;
  };
  inputs: {
    borderColor: string;
    borderFocusColor: string;
    backgroundDefaultColor: string;
  };
  search: {
    backgroundWrapper: string;
    svgColor: string;
    svgFocusColor: string;
    borderColor: string;
    middleBorderColor: string;
    variantSearchCities: string;
  };
  сards: {
    articlesTextColor: string;
    vacanciesTextColor: string;
    noVacanciesTextColor: string;
    descriptionTextColor: string;
    imageBackground: string;
    cardContentBackground: string;
    shadow: string;
  };
  tabs: {
    middleBorder: {
      backgroundColor: string;
    };
    tabButton: {
      activeBackgroundColor: string;
      backgroundColor: string;
      focusBackgroundColor: string;
      focusActiveBackgroundColor: string;
      focusSpanBackgroundColor: string;
      focusSpanActiveBackgroundColor: string;
    };
    tabContainer: {
      backgroundColor: string;
    };
    activeTabColor: string;
    disabledTabColor: string;
  };
  pagination: {
    borderColor: string;
    activeBorderColor: string;
    backgroundActiveColor: string;
    backgroundHoverColor: string;
    backgroundArrowColor: string;
  };
  modal: {
    backgroundColor: string;
    svgColor: string;
    svgDisabledColor: string;
    svgBackgroundColor: string;
    svgBackgroundHoverColor: string;
    svgBackgroundActiveColor: string;
    shadow: string;
    borderCardsColor: string;
  };
  ui: {
    logoLinkColor: string;
    logoLinkHoverColor: string;
  };
  slider: {
    backgroundBulletColor: string;
    backgroundBulletActiveColor: string;
    backgroundButtonArrowColor: string;
    buttonArrowColor: string;
    hoverButtonArrowColor: string;
  };
  navbar: {
    logoColor: string;
    wrapperHeaderBackgroundColor: string;
    hoverColor: string;
    noHoverColor: string;
    textActiveLangColor: string;
    textNoActiveLangColor: string;
    svgColor: string;
    svgHoverColor: string;
    textLinkColor: string;
    textLinkHoverColor: string;
  };
  pgoressBar: {
    backgroundColor: string;
    aggregateColor: string;
    containerColor: string;
  };
  navLinks: {
    backgroundColor: string;
    hoverBackgroundColor: string;
    pressedBackgroundColor: string;
    borderColor: string;
    backgroundActiveColor: string;
  };
  footer: {
    wrapperHeaderBackgroundColor: string;
    linkSpanColor: string;
    linkSpanColorMedia1024: string;
    boxCopirightSpanColorMedia1024: string;
    linkTextColor: string;
    borderColor: string;
  };
  auth: {
    helpButtonColor: string;
    helpButtonHoverColor: string;
    helpButtonActiveColor: string;
    radioButtonColor: string;
    backgroundRegisterPage: string;
    backgroundRegisterContainerColor: string;
  };
  mainPage: {
    headingColor: string;
    titleColor: string;
    backgroundSectionTrendingColor: string;
    backgroundSectionCompaniesColor: string;
    backgroundSectionArticlesColor: string;
    backgroundSectionNewsColor: string;
    benefitHeadingMobileColor: string;
    benefitHeaderColorSmall: string;
    benefitHeaderColor: string;
    benefitBodyColorSmall: string;
    benefitBodyColor: string;
    benefitBorderColor: string;
  };
  user: {
    headingTextColor: string;
    backgroundPageColor: string;
    backgroundCardColor: string;
    borderColor: string;
    descriptionTextColor: string;
    iconColor: string;
    borderAvatar: string;
    borderCustomFieldData: string;
  };
  boxInformation: {
    info: {
      backgroundColor: string;
      borderColor: string;
    };
    warning: {
      backgroundColor: string;
      borderColor: string;
    };
    error: {
      backgroundColor: string;
    };
    success: {
      backgroundColor: string;
      borderColor: string;
    };
  };
  responses: {
    filters: {
      backgroundColor: string;
    };
  };
}
