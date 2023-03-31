export interface ITheme {
  backgroundColor: string;
  buttons: {
    primary: {
      backgroundColor: string;
      spanColor: string;
      focusBackgroundColor: string;
    };
    secondary: {
      backgroundColor: string;
      spanColor: string;
      focusBackgroundColor: string;
      focusSpanColor: string;
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
      hoverBorderColor: string;
      hoverBorderSpanColor: string;
      focusBorderColor: string;
    };
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
  ui: {
    logoLinkColor: string;
    logoLinkHoverColor: string;
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
  };
}
