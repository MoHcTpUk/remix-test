export interface ITheme {
  backgroundColor: string;
  defaultTextColor: string;
  errorTextColor: string;
  buttons: {
    primary: {
      backgroundColor: string;
      spanColor: string;
      focusBackgroundColor: string;
      iconColor: string;
      iconColorHover: string;
      iconDisable: string;
    };
    secondary: {
      backgroundColor: string;
      spanColor: string;
      focusBackgroundColor: string;
      focusSpanColor: string;
      iconColor: string;
      iconColorHover: string;
      iconDisable: string;
    };
    chips: {
      backgroundColor: string;
      spanColor: string;
      focusBackgroundColor: string;
      focusSpanColor: string;
      activeBorderColor: string;
    };
    small: {
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
  inputs: {
    borderColor: string;
    borderFocusColor: string;
    backgroundDefaultColor: string;
  };
  search: {
    backgroundWrapper: string;
    svgColor: string;
    borderColor: string;
    middleBorderColor: string;
  };
  сards: {
    articlesTextColor: string;
    vacanciesTextColor: string;
    noVacanciesTextColor: string;
    imageBackground: string;
    cardContentBackground: string;
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
  modal: {
    backgroundColor: string;
    svgColor: string;
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
  };
  user: {
    headinTextColor: string;
    backgroundPageColor: string;
    backgroundCardColor: string;
    borderColor: string;
    descriptionTextColor: string;
    iconColor: string;
  };
}
