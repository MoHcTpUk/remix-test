import {
  ButtonCreate,
  ModalSelectCreateForm
} from "/build/_shared/chunk-YIHJ7OEM.js";
import {
  Switcher
} from "/build/_shared/chunk-TPPLNXCO.js";
import {
  Input
} from "/build/_shared/chunk-MPISASBV.js";
import {
  Modal
} from "/build/_shared/chunk-T7KDPY4G.js";
import {
  Logo_default
} from "/build/_shared/chunk-NSEFQYWN.js";
import {
  Button_default
} from "/build/_shared/chunk-QD72PUQI.js";
import {
  Box,
  DEFAULT_USER_AVATAR,
  Icon,
  IconEnum,
  LanguageEnum,
  Menu_default,
  Text,
  TextVariantEnum,
  getImageUrl,
  removeLoginSearch,
  routes_default,
  styled_components_browser_esm_default,
  useApp,
  useRouteChecks
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  Form,
  Link,
  NavLink,
  init_esm,
  useFetcher,
  useLocation,
  useMatches,
  useNavigate
} from "/build/_shared/chunk-JX76WC46.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6O7TW4X6.js";
import {
  __toESM
} from "/build/_shared/chunk-RFITDC3A.js";

// app/components/entities/Navbar/styles.ts
var WrapperHeader = styled_components_browser_esm_default.div`
  width: 100%;
  background-color: ${({ type, theme, sticky }) => type === "homePage" && !sticky ? "none" : theme.navbar.wrapperHeaderBackgroundColor};
  display: flex;
  justify-content: center;
  position: ${({ type, sticky }) => {
  if (type === "homePage" && sticky)
    return "fixed";
  return "absolute";
}};
  z-index: 10;
  transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);

  & .transparent {
    color: ${({ type, sticky }) => type === "homePage" && !sticky && "#fff"};
  }
`;
var ContainerHeader = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  width: 100%;
  @media (min-width: 768px) {
    padding: 16px 44px;
  }
  @media (min-width: 1024px) {
    padding: 16px 64px;
  }
  @media (min-width: 1280px) {
    padding: 16px 32px;
  }
`;
var LogoWrapper = styled_components_browser_esm_default.div`
  cursor: pointer;
  svg {
    color: ${({ theme }) => theme.navbar.logoColor};
    max-width: 99px;
    height: 40px;
    transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);
    @media (min-width: 768px) {
      max-width: 118px;
      height: 48px;
    }
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.navbar.hoverColor};
    }
  }
`;
var BoxText = styled_components_browser_esm_default.div`
  cursor: pointer;
  white-space: nowrap;
  span:hover {
    color: ${({ theme }) => theme.navbar.hoverColor};
  }
`;
var MenuLinks = styled_components_browser_esm_default.div`
  display: none;
  span {
    padding: 0 8px;
  }
  span:hover {
    color: ${({ theme }) => theme.navbar.textLinkHoverColor};
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 520px;
  }
`;
var AvatarContainer = styled_components_browser_esm_default.button`
  display: none;

  @media (min-width: 1280px) {
    display: block;
    cursor: pointer;
    width: 44px;
    height: 44px;

    img {
      border-radius: 50%;
      width: 44px;
      height: 44px;
      object-fit: cover;
    }
  }
`;
var MenuContainer = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  @media (min-width: 768px) {
    gap: 34px;
  }
`;
var LeftContainer = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  height: 40px;

  @media (min-width: 768px) {
    height: 48px;
  }
`;
var TranslateBox = styled_components_browser_esm_default.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }
`;
var IconButton = styled_components_browser_esm_default.button`
  cursor: pointer;
  display: block;
  svg {
    transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);
  }
  &:hover {
    svg {
      color: ${({ theme }) => theme.navbar.svgHoverColor};
    }
  }
`;
var IconButtonBurger = styled_components_browser_esm_default.button`
  cursor: pointer;
  display: block;
  svg {
    transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);
  }
  &:hover {
    svg {
      color: ${({ theme }) => theme.navbar.svgHoverColor};
    }
  }
  @media (min-width: 1280px) {
    display: none;
  }
`;
var IconButtons = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  @media (min-width: 768px) {
    gap: 34px;
  }
`;

// app/components/entities/Footer/index.tsx
init_esm();
var import_react2 = __toESM(require_react());

// app/components/entities/Footer/styles.ts
var WrapperFooter = styled_components_browser_esm_default.div`
  width: 100%;
  background-color: ${({ theme }) => theme.footer.wrapperHeaderBackgroundColor};
  display: flex;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.footer.borderColor};
`;
var ContainerFooter = styled_components_browser_esm_default.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 60px;
  width: 100%;
  gap: 38px;
  max-width: 1200px;
  @media (min-width: 768px) {
    padding: 48px 120px;
    gap: 22px;
  }
  @media (min-width: 1280px) {
    padding: 44px 0 52px;
    gap: 28px;
  }
`;
var LinksWrapper = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  row-gap: 16px;

  @media (min-width: 1280px) {
    justify-content: flex-start;
    gap: 48px;
    span {
      line-height: 27px;
    }
  }
`;
var LinkItem = styled_components_browser_esm_default.div`
  cursor: pointer;
  span:hover {
    color: ${({ theme }) => theme.footer.linkSpanColor};
  }
  @media (min-width: 1024px) {
    span {
      color: ${({ theme }) => theme.footer.linkSpanColorMedia1024};
    }
  }
`;
var IconsWrapper = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 24px;

  img {
    width: 20px;
    transition: all 0.15s ease-in;
  }

  @media (min-width: 1280px) {
    position: absolute;
    right: 0;
    margin-top: 4px;
  }
`;
var SosialImg = styled_components_browser_esm_default.div`
  cursor: pointer;
  img:hover {
    transform: scale(1.05);
  }
`;
var BoxCopiright = styled_components_browser_esm_default.div`
  display: flex;
  justify-content: center;
  text-align: center;

  @media (min-width: 1280px) {
    justify-content: flex-start;
    text-align: flex-start;
    span {
      color: ${({ theme }) => theme.footer.boxCopirightSpanColorMedia1024};
    }
  }
`;

// app/components/entities/Footer/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Footer = (0, import_react2.memo)(() => {
  const {
    theme,
    t
  } = useApp();
  const navlinks = [
    {
      id: "1",
      title: `${t("menu.about")}`,
      href: routes_default.about
    },
    {
      id: "2",
      title: `${t("menu.privacy_policy")}`,
      href: routes_default.privacyPolicy.root
    },
    // {
    //   id: '3',
    //   title: `${t('menu.articles')}`,
    //   href: `${routes.materials.articles.root}`,
    // },
    {
      id: "3",
      title: `${t("menu.faq")}`,
      href: `${routes_default.faq}`
    },
    {
      id: "4",
      title: `${t("menu.news")}`,
      href: `${routes_default.materials.news.root}`
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperFooter, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContainerFooter, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinksWrapper, { children: navlinks.map(({
      href,
      id,
      title
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: href, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { color: theme.footer.linkTextColor, variant: TextVariantEnum.textBody2, children: title }, void 0, false, {
      fileName: "app/components/entities/Footer/index.tsx",
      lineNumber: 53,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/entities/Footer/index.tsx",
      lineNumber: 52,
      columnNumber: 15
    }, this) }, id, false, {
      fileName: "app/components/entities/Footer/index.tsx",
      lineNumber: 51,
      columnNumber: 15
    }, this)) }, void 0, false, {
      fileName: "app/components/entities/Footer/index.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconsWrapper, {}, void 0, false, {
      fileName: "app/components/entities/Footer/index.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxCopiright, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { color: theme.footer.linkTextColor, variant: TextVariantEnum.textSmall, children: t("common:copyright") }, void 0, false, {
      fileName: "app/components/entities/Footer/index.tsx",
      lineNumber: 77,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/entities/Footer/index.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/Footer/index.tsx",
    lineNumber: 45,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/entities/Footer/index.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
});

// app/components/entities/Navbar/index.tsx
init_esm();
var import_react12 = __toESM(require_react());

// app/components/pages/Auth/ForgotPassword/index.tsx
init_esm();
var import_react4 = __toESM(require_react());

// app/components/pages/Auth/ForgotPassword/styles.ts
var BoxContainer = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  max-width: 100%;
  @media (min-width: 768px) {
    max-width: 388px;
  }
  @media (min-width: 1024px) {
    gap: 32px;
  }
`;
var Wrapper = styled_components_browser_esm_default.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.auth.backgroundRegisterPage};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var BoxTextWrapper = styled_components_browser_esm_default.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  @media (min-width: 768px) {
    gap: 16px;
  }
`;
var BoxForm = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.auth.backgroundRegisterContainerColor};
  border-radius: 8px;
  align-items: center;
  padding: 16px;
  gap: 24px;
  @media (min-width: 768px) {
    max-width: 476px;
    padding: 40px;
  }
  @media (min-width: 1280px) {
    padding: 48px 102px;
    max-width: 792px;
  }
`;
var BoxRadios = styled_components_browser_esm_default.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: center;
  }
`;
var RadioBtnWrapper = styled_components_browser_esm_default.label`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
var RadioBtn = styled_components_browser_esm_default.input`
  accent-color: ${({ theme }) => theme.auth.radioButtonColor};
  width: 20px;
  height: 20px;
`;
var PoliciesText = styled_components_browser_esm_default.div`
  text-align: center;
`;

// app/components/pages/Auth/ForgotPassword/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function ForgotPasswordPage({
  visibility,
  setVisibility,
  setVisibilityLogin
}) {
  const {
    t,
    userContext
  } = useApp();
  const forgotPassword = useFetcher();
  const emailRef = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    if (forgotPassword.data?.fieldErrors?.email) {
      emailRef.current?.focus();
    }
    if (forgotPassword.data?.status === 200 || forgotPassword.data?.status === 200)
      setVisibility(false);
  }, [forgotPassword.data]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal, { visibility, setVisibility, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxTextWrapper, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textHeading3, style: {
        textAlign: "center"
      }, children: t("auth:forgot_your_password") }, void 0, false, {
        fileName: "app/components/pages/Auth/ForgotPassword/index.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, style: {
        textAlign: "center"
      }, children: t("auth:no_problem_we_will_send") }, void 0, false, {
        fileName: "app/components/pages/Auth/ForgotPassword/index.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Auth/ForgotPassword/index.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(forgotPassword.Form, { method: "POST", action: "/auth/forgot-password", style: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      gap: "24px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { htmlType: "email", placeholder: t("auth:enter_email"), id: "i_email", name: "email", textHelper: t("auth:enter_your_email_to_retrieve_a_new_password"), "aria-invalid": forgotPassword?.data?.fieldErrors?.email?.[userContext.language] ? true : void 0 }, void 0, false, {
        fileName: "app/components/pages/Auth/ForgotPassword/index.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { priority: "primary", fullwidth: true, type: "submit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("auth:send_password") }, void 0, false, {
        fileName: "app/components/pages/Auth/ForgotPassword/index.tsx",
        lineNumber: 56,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Auth/ForgotPassword/index.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Auth/ForgotPassword/index.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PoliciesText, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: `${t("auth:by_clicking_send_password_i_agree_to_the")} ` }, void 0, false, {
        fileName: "app/components/pages/Auth/ForgotPassword/index.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: routes_default.privacyPolicy.terms, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, style: {
        textDecoration: "underline",
        cursor: "pointer"
      }, children: t("auth:terms_of_use") }, void 0, false, {
        fileName: "app/components/pages/Auth/ForgotPassword/index.tsx",
        lineNumber: 65,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Auth/ForgotPassword/index.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: ` ${t("auth:and")} ` }, void 0, false, {
        fileName: "app/components/pages/Auth/ForgotPassword/index.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: routes_default.privacyPolicy.root, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, style: {
        textDecoration: "underline",
        cursor: "pointer"
      }, children: [
        t("auth:privacy_policy"),
        "."
      ] }, void 0, true, {
        fileName: "app/components/pages/Auth/ForgotPassword/index.tsx",
        lineNumber: 74,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Auth/ForgotPassword/index.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Auth/ForgotPassword/index.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { priority: "secondary", fullwidth: true, onClick: () => {
      setVisibility(false);
      setVisibilityLogin(true);
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("auth:back_to_sign_in") }, void 0, false, {
      fileName: "app/components/pages/Auth/ForgotPassword/index.tsx",
      lineNumber: 87,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/pages/Auth/ForgotPassword/index.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Auth/ForgotPassword/index.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/Auth/ForgotPassword/index.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}

// app/components/pages/Auth/Login/index.tsx
init_esm();
var import_react6 = __toESM(require_react());

// app/components/pages/Auth/Login/styles.ts
var BoxContainer2 = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  max-width: 100%;
  @media (min-width: 768px) {
    max-width: 388px;
  }
  @media (min-width: 1024px) {
    gap: 32px;
  }
`;
var BoxForm2 = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 24px;
  margin-bottom: -8px;
  @media (min-width: 1024px) {
    margin-bottom: -16px;
  }
`;
var BoxSocial = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
  margin-top: -8px;
  @media (min-width: 1024px) {
    margin-top: -16px;
  }
`;
var BoxHelp = styled_components_browser_esm_default.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  justify-content: center;
  margin-top: -8px;
  @media (min-width: 1024px) {
    margin-top: -16px;
  }
`;
var PoliciesText2 = styled_components_browser_esm_default.div`
  margin-top: -8px;
  text-align: center;
`;
var HelpButton = styled_components_browser_esm_default.div`
  &:hover,
  &:focus {
    span {
      color: ${({ theme }) => theme.auth.helpButtonHoverColor};
    }
  }
  &:active {
    transform: scale(0.95);
    span {
      color: ${({ theme }) => theme.auth.helpButtonActiveColor};
    }
  }
`;

// app/components/pages/Auth/Login/index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Login({
  visibility,
  setVisibility,
  setVisibilityForgotPassword
}) {
  const {
    t,
    theme,
    userContext
  } = useApp();
  const location = useLocation();
  const login = useFetcher();
  (0, import_react6.useEffect)(() => {
    if (login?.data?.success) {
      setVisibility(false);
    }
  }, [login.data?.success]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Modal, { visibility, setVisibility, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BoxContainer2, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textHeading3, style: {
      textAlign: "center"
    }, children: t("auth:create_new_user_or_sign_in") }, void 0, false, {
      fileName: "app/components/pages/Auth/Login/index.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(login.Form, { method: "POST", action: "/auth/login", style: {
      width: "100%"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BoxForm2, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Input, { placeholder: t("auth:enter_email"), id: "i_email", name: "email", "aria-invalid": login.data?.fieldErrors?.email?.[userContext.language] ? true : void 0, errorText: login.data?.fieldErrors?.email?.[userContext.language] }, void 0, false, {
        fileName: "app/components/pages/Auth/Login/index.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Input, { placeholder: t("auth:enter_password"), id: "i_password", name: "password", variant: "password", "aria-invalid": login.data?.fieldErrors?.password?.[userContext.language] ? true : void 0, errorText: login.data?.fieldErrors?.password?.[userContext.language] }, void 0, false, {
        fileName: "app/components/pages/Auth/Login/index.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { type: "submit", priority: "primary", fullwidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("auth:sign_in_with_email") }, void 0, false, {
        fileName: "app/components/pages/Auth/Login/index.tsx",
        lineNumber: 49,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Auth/Login/index.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Auth/Login/index.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/pages/Auth/Login/index.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: t("auth:or_register_with_social_users") }, void 0, false, {
      fileName: "app/components/pages/Auth/Login/index.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BoxSocial, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form, { method: "POST", action: "/auth/login-google", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { type: "submit", priority: "secondary", fullwidth: true, iconName: IconEnum.google, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("auth:sign_with_google") }, void 0, false, {
          fileName: "app/components/pages/Auth/Login/index.tsx",
          lineNumber: 59,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/pages/Auth/Login/index.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "path", value: removeLoginSearch(`${location.pathname}${location.search}`) || "" }, void 0, false, {
          fileName: "app/components/pages/Auth/Login/index.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/Auth/Login/index.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form, { method: "POST", action: "/auth/login-facebook", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { type: "submit", priority: "secondary", fullwidth: true, iconName: IconEnum.fb, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("auth:sign_with_facebook") }, void 0, false, {
          fileName: "app/components/pages/Auth/Login/index.tsx",
          lineNumber: 66,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/pages/Auth/Login/index.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "path", value: removeLoginSearch(`${location.pathname}${location.search}`) || "" }, void 0, false, {
          fileName: "app/components/pages/Auth/Login/index.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/Auth/Login/index.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Auth/Login/index.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BoxHelp, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HelpButton, { onClick: () => {
        setVisibility(false);
        setVisibilityForgotPassword(true);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, color: theme.auth.helpButtonColor, children: t("auth:forgot_password") }, void 0, false, {
        fileName: "app/components/pages/Auth/Login/index.tsx",
        lineNumber: 77,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Auth/Login/index.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HelpButton, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: routes_default.auth.register.root, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, color: theme.auth.helpButtonColor, children: t("auth:registration") }, void 0, false, {
        fileName: "app/components/pages/Auth/Login/index.tsx",
        lineNumber: 83,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Auth/Login/index.tsx",
        lineNumber: 82,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Auth/Login/index.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Auth/Login/index.tsx",
      lineNumber: 72,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(PoliciesText2, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: `${t("auth:by_continuing_i_agree_to_the")} ` }, void 0, false, {
        fileName: "app/components/pages/Auth/Login/index.tsx",
        lineNumber: 90,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: routes_default.privacyPolicy.terms, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, style: {
        textDecoration: "underline",
        cursor: "pointer"
      }, children: t("auth:terms_of_use") }, void 0, false, {
        fileName: "app/components/pages/Auth/Login/index.tsx",
        lineNumber: 94,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Auth/Login/index.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: ` ${t("auth:and")} ` }, void 0, false, {
        fileName: "app/components/pages/Auth/Login/index.tsx",
        lineNumber: 101,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: routes_default.privacyPolicy.root, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, style: {
        textDecoration: "underline",
        cursor: "pointer"
      }, children: [
        t("auth:privacy_policy"),
        "."
      ] }, void 0, true, {
        fileName: "app/components/pages/Auth/Login/index.tsx",
        lineNumber: 103,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Auth/Login/index.tsx",
        lineNumber: 102,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Auth/Login/index.tsx",
      lineNumber: 89,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Auth/Login/index.tsx",
    lineNumber: 36,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/Auth/Login/index.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}

// app/components/entities/MobileNavbar/index.tsx
init_esm();
var import_react10 = __toESM(require_react());

// app/components/common/ProgressBar/styles.ts
var ProgresWrapper = styled_components_browser_esm_default.div`
  background-color: ${({ theme }) => theme.pgoressBar.backgroundColor};
  padding: 8px;
  border-radius: 80px;
`;
var ProgressBarContainer = styled_components_browser_esm_default.div`
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.pgoressBar.containerColor};
  border-radius: 10px;
  overflow: hidden;
`;
var Progress = styled_components_browser_esm_default.div`
  height: 100%;
  background-color: ${({ theme }) => theme.pgoressBar.aggregateColor};
  width: ${({ percent }) => percent}%;
`;

// app/components/common/ProgressBar/index.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function ProgressBar({
  percent = "0"
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ProgresWrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ProgressBarContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Progress, { percent: +percent }, void 0, false, {
    fileName: "app/components/common/ProgressBar/index.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/common/ProgressBar/index.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/ProgressBar/index.tsx",
    lineNumber: 9,
    columnNumber: 10
  }, this);
}
var ProgressBar_default = ProgressBar;

// app/components/entities/NavLink/index.tsx
init_esm();
var import_react8 = __toESM(require_react());

// app/components/entities/NavLink/styles.ts
var LinkContainer = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.navLinks.borderColor};
  background-color: ${({ theme, isActive }) => isActive ? theme.navLinks.backgroundActiveColor : theme.navLinks.backgroundColor};
  border-radius: 80px;
  height: 40px;
  padding: 8px 16px;
  transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);

  &:hover,
  &:focus {
    background-color: ${({ theme, isActive }) => isActive ? theme.navLinks.backgroundActiveColor : theme.navLinks.hoverBackgroundColor};
  }
  &:active {
    background-color: ${({ theme, isActive }) => isActive ? theme.navLinks.backgroundActiveColor : theme.navLinks.pressedBackgroundColor};
  }

  @media (min-width: 768px) {
    height: 44px;
    padding: 10px 16px;
  }
`;

// app/components/entities/NavLink/index.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var NavbarItem = (0, import_react8.memo)(({
  item,
  handleCloseBar,
  handleClickSearch
}) => {
  const {
    theme
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: item.href, onClick: () => {
    if (handleCloseBar) {
      handleCloseBar();
    }
    if (handleClickSearch) {
      handleClickSearch(item.search);
    }
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(LinkContainer, { isActive: item.isActive, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Box, { flexDirection: "row", alignItems: "center", gap: "16px", children: [
      item.icon && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { name: item.icon, color: item.isActive ? theme.navbar.hoverColor : theme.defaultTextColor }, void 0, false, {
        fileName: "app/components/entities/NavLink/index.tsx",
        lineNumber: 42,
        columnNumber: 27
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: item.title }, void 0, false, {
        fileName: "app/components/entities/NavLink/index.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/NavLink/index.tsx",
      lineNumber: 41,
      columnNumber: 11
    }, this),
    !item.isActive && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { name: IconEnum.arrowRight }, void 0, false, {
      fileName: "app/components/entities/NavLink/index.tsx",
      lineNumber: 45,
      columnNumber: 30
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/NavLink/index.tsx",
    lineNumber: 40,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/entities/NavLink/index.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
});

// app/components/entities/MobileNavbar/styles.ts
var BoxContainer3 = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1280px) {
    .noDesktop {
      display: none;
    }
  }
`;
var Section = styled_components_browser_esm_default.div`
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.user.borderColor};
  padding: 16px 0 8px;
  display: 'flex';
  flex-direction: column;
  gap: 8px;

  &:first-child {
    margin-top: 16px;
  }

  @media (min-width: 768px) {
    padding: 16px 0 16px;
  }

  @media (min-width: 1280px) {
    border-top: none;
    border-bottom: 1px solid ${({ theme }) => theme.user.borderColor};
    margin-bottom: 16px;
  }
`;
var TranslateBox2 = styled_components_browser_esm_default.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 16px 0;
  border-top: 1px solid ${({ theme }) => theme.user.borderColor};
  border-bottom: 1px solid ${({ theme }) => theme.user.borderColor};

  @media (min-width: 1280px) {
    display: none;
  }
`;
var ButtonsGroup = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  gap: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.user.borderColor};
  margin-bottom: 16px;

  @media (min-width: 1280px) {
    display: none;
  }
`;

// app/components/entities/MobileNavbar/index.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function MobileNavbar({
  visibility,
  setVisibility,
  visibilityLogin,
  setVisibilityLogin
}) {
  const matches = useMatches();
  const indexMatches = matches.some((m) => m.id === "routes/index");
  const isUserMatches = matches.some((m) => m.id.includes("user"));
  const userMatches = matches.some((m) => m.id === "routes/user/myprofile");
  const resumeMatches = matches.some((m) => m.id === "routes/user/resume");
  const vacancyMatches = matches.some((m) => m.id === "routes/user/vacancy");
  const companyMatches = matches.some((m) => m.id === "routes/user/company");
  const responsesMatches = matches.some((m) => m.id === "routes/user/responses");
  const searchVacancyMatches = matches.some((m) => m.id === "routes/search/vacancy");
  const searchResumeMatches = matches.some((m) => m.id === "routes/search/resume");
  const searchCompanyMatches = matches.some((m) => m.id === "routes/search/company");
  const {
    userContext,
    setUserContext,
    theme,
    t,
    i18n
  } = useApp();
  function setLang(language) {
    setUserContext((prevContext) => ({
      ...prevContext,
      language
    }));
  }
  const changeLanguage = () => userContext?.language === LanguageEnum.TH ? setUserContext((prevContext) => ({
    ...prevContext,
    language: LanguageEnum.EN
  })) : setUserContext((prevContext) => ({
    ...prevContext,
    language: LanguageEnum.TH
  }));
  function setSearch(search) {
    setUserContext((prevContext) => ({
      ...prevContext,
      search
    }));
  }
  const handleClickSearch = (search) => {
    if (search)
      setSearch(search);
  };
  (0, import_react10.useEffect)(() => {
    i18n.changeLanguage(userContext?.language);
  }, [i18n, userContext?.language]);
  const homeLinks = [{
    id: 1,
    title: t("common:home_page"),
    href: routes_default.root,
    isActive: indexMatches
  }];
  const searchLinks = [{
    id: 1,
    title: t("home:find_job"),
    href: routes_default.search.vacancy.root,
    isActive: searchVacancyMatches,
    search: "vacancy"
  }, {
    id: 2,
    title: t("home:find_employer"),
    href: routes_default.search.resume.root,
    isActive: searchResumeMatches,
    search: "resume"
  }, {
    id: 3,
    title: t("home:find_company"),
    href: routes_default.search.company.root,
    isActive: searchCompanyMatches,
    search: "company"
  }];
  const userLinks = [{
    id: 1,
    title: t("user:my_profile"),
    href: routes_default.user.root,
    isActive: userMatches
  }, {
    id: 2,
    title: t("user:my_resumes"),
    href: routes_default.user.resume.root,
    isActive: resumeMatches
  }, {
    id: 3,
    title: t("user:my_vacancies"),
    href: routes_default.user.vacancy.root,
    isActive: vacancyMatches
  }, {
    id: 4,
    title: t("user:companies"),
    href: routes_default.user.company.root,
    isActive: companyMatches
  }, {
    id: 5,
    title: t("user:responses"),
    href: routes_default.user.responses.root,
    isActive: responsesMatches
  }];
  const [visibleSelectionCreate, setSelectionCreate] = (0, import_react10.useState)(false);
  const [variantCreate, setVariantCreate] = (0, import_react10.useState)("vacancy");
  const loc = useLocation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Modal, { variant: "navbar", visibility, setVisibility, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(BoxContainer3, { children: [
      userContext.user?.isAuthenticated && isUserMatches && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Box, { flexDirection: "column", gap: "8px", style: {
        margin: "8px 0 16px"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Box, { flexDirection: "row", gap: "4px", alignItems: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Icon, { name: userContext.user.isEmailConfirm ? IconEnum.verifed : IconEnum.notVerifed }, void 0, false, {
            fileName: "app/components/entities/MobileNavbar/index.tsx",
            lineNumber: 135,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { variant: TextVariantEnum.textSmallmedium, children: userContext.user?.email }, void 0, false, {
            fileName: "app/components/entities/MobileNavbar/index.tsx",
            lineNumber: 136,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/entities/MobileNavbar/index.tsx",
          lineNumber: 134,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Box, { flexDirection: "column", gap: "8px", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Box, { flexDirection: "row", justifyContent: "space-between", alignItems: "center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { variant: "textSmall", children: t("common:profile_completeness") }, void 0, false, {
              fileName: "app/components/entities/MobileNavbar/index.tsx",
              lineNumber: 140,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { variant: "textSmall", children: `${userContext.user.progressInfo || ""}%` }, void 0, false, {
              fileName: "app/components/entities/MobileNavbar/index.tsx",
              lineNumber: 141,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/entities/MobileNavbar/index.tsx",
            lineNumber: 139,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ProgressBar_default, { percent: userContext.user?.progressInfo }, void 0, false, {
            fileName: "app/components/entities/MobileNavbar/index.tsx",
            lineNumber: 143,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/entities/MobileNavbar/index.tsx",
          lineNumber: 138,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/entities/MobileNavbar/index.tsx",
        lineNumber: 131,
        columnNumber: 64
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Section, { className: "noDesktop", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: t("common:home") }, void 0, false, {
          fileName: "app/components/entities/MobileNavbar/index.tsx",
          lineNumber: 147,
          columnNumber: 11
        }, this),
        homeLinks.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react10.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(NavbarItem, { item, handleCloseBar: () => setVisibility(!visibility) }, void 0, false, {
          fileName: "app/components/entities/MobileNavbar/index.tsx",
          lineNumber: 149,
          columnNumber: 15
        }, this) }, item.id, false, {
          fileName: "app/components/entities/MobileNavbar/index.tsx",
          lineNumber: 148,
          columnNumber: 34
        }, this))
      ] }, void 0, true, {
        fileName: "app/components/entities/MobileNavbar/index.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Section, { className: "noDesktop", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: t("common:search") }, void 0, false, {
          fileName: "app/components/entities/MobileNavbar/index.tsx",
          lineNumber: 154,
          columnNumber: 11
        }, this),
        searchLinks.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react10.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(NavbarItem, { handleClickSearch, item, handleCloseBar: () => setVisibility(!visibility) }, void 0, false, {
          fileName: "app/components/entities/MobileNavbar/index.tsx",
          lineNumber: 157,
          columnNumber: 15
        }, this) }, item.id, false, {
          fileName: "app/components/entities/MobileNavbar/index.tsx",
          lineNumber: 156,
          columnNumber: 36
        }, this))
      ] }, void 0, true, {
        fileName: "app/components/entities/MobileNavbar/index.tsx",
        lineNumber: 153,
        columnNumber: 9
      }, this),
      userContext.user?.isAuthenticated && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Section, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: t("user:profile") }, void 0, false, {
          fileName: "app/components/entities/MobileNavbar/index.tsx",
          lineNumber: 162,
          columnNumber: 13
        }, this),
        userLinks.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react10.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(NavbarItem, { item, handleCloseBar: () => setVisibility(!visibility) }, void 0, false, {
          fileName: "app/components/entities/MobileNavbar/index.tsx",
          lineNumber: 164,
          columnNumber: 17
        }, this) }, item.id, false, {
          fileName: "app/components/entities/MobileNavbar/index.tsx",
          lineNumber: 163,
          columnNumber: 36
        }, this))
      ] }, void 0, true, {
        fileName: "app/components/entities/MobileNavbar/index.tsx",
        lineNumber: 161,
        columnNumber: 47
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(TranslateBox2, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Switcher, { onChange: changeLanguage, checked: userContext?.language === LanguageEnum.EN, htmlLabel: "lang", variant: "lang" }, void 0, false, {
          fileName: "app/components/entities/MobileNavbar/index.tsx",
          lineNumber: 169,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(BoxText, { style: {
          cursor: "pointer"
        }, lang: LanguageEnum.EN, selectedLang: userContext?.language ?? "", onClick: () => {
          if (userContext.language === "th")
            setLang(LanguageEnum.EN);
          if (userContext.language === "en")
            setLang(LanguageEnum.TH);
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { color: theme.defaultTextColor, variant: TextVariantEnum.textBody2, children: userContext?.language === "en" ? "English" : "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22" }, void 0, false, {
          fileName: "app/components/entities/MobileNavbar/index.tsx",
          lineNumber: 176,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/entities/MobileNavbar/index.tsx",
          lineNumber: 170,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/entities/MobileNavbar/index.tsx",
        lineNumber: 168,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ButtonsGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ButtonCreate, { variant: "resume", fullwidth: true, setVariantCreate, setSelectionCreate }, void 0, false, {
          fileName: "app/components/entities/MobileNavbar/index.tsx",
          lineNumber: 183,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ButtonCreate, { variant: "vacancy", fullwidth: true, setVariantCreate, setSelectionCreate }, void 0, false, {
          fileName: "app/components/entities/MobileNavbar/index.tsx",
          lineNumber: 184,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Link, { to: userContext.user.isAuthenticated ? routes_default.user.company.create : `${loc.pathname}${loc.search ? `${loc.search}&login=true` : "?login=true"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button_default, { priority: "secondary", size: "S", fullwidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: [
          " ",
          t("user:create_company")
        ] }, void 0, true, {
          fileName: "app/components/entities/MobileNavbar/index.tsx",
          lineNumber: 187,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/entities/MobileNavbar/index.tsx",
          lineNumber: 186,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/entities/MobileNavbar/index.tsx",
          lineNumber: 185,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/entities/MobileNavbar/index.tsx",
        lineNumber: 182,
        columnNumber: 9
      }, this),
      !userContext.user?.isAuthenticated ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button_default, { onClick: () => {
        setVisibility(!visibility);
        setVisibilityLogin(!visibilityLogin);
      }, priority: "primary", fullwidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { children: t("common:log_in") }, void 0, false, {
        fileName: "app/components/entities/MobileNavbar/index.tsx",
        lineNumber: 195,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/entities/MobileNavbar/index.tsx",
        lineNumber: 191,
        columnNumber: 47
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form, { method: "POST", action: "/auth/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button_default, { onClick: () => {
        setVisibility(!visibility);
        setVisibilityLogin(!visibilityLogin);
      }, priority: "tertiary", fullwidth: true, type: "submit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { children: t("common:log_out") }, void 0, false, {
        fileName: "app/components/entities/MobileNavbar/index.tsx",
        lineNumber: 201,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/entities/MobileNavbar/index.tsx",
        lineNumber: 197,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/entities/MobileNavbar/index.tsx",
        lineNumber: 196,
        columnNumber: 23
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/MobileNavbar/index.tsx",
      lineNumber: 130,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ModalSelectCreateForm, { variant: variantCreate, visibility: visibleSelectionCreate, setVisibility: setSelectionCreate }, void 0, false, {
      fileName: "app/components/entities/MobileNavbar/index.tsx",
      lineNumber: 205,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/MobileNavbar/index.tsx",
    lineNumber: 129,
    columnNumber: 10
  }, this);
}

// app/components/entities/Navbar/index.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
var Navbar = (0, import_react12.memo)(() => {
  const [visibilityLogin, setVisibilityLogin] = (0, import_react12.useState)(false);
  const [initialRender, setInitialRender] = (0, import_react12.useState)(false);
  const [visibilityForgotPassword, setVisibilityForgotPassword] = (0, import_react12.useState)(false);
  const [visibleMobileNavbar, setVisibleMobileNavbar] = (0, import_react12.useState)(false);
  const [sticky, setSticky] = (0, import_react12.useState)(false);
  const {
    isHomePage,
    isSearchResume,
    isSearchVacancy,
    isSearchCompany
  } = useRouteChecks();
  const {
    userContext,
    setUserContext,
    theme,
    t,
    i18n
  } = useApp();
  function setLang(language) {
    setUserContext((prevContext) => ({
      ...prevContext,
      language
    }));
  }
  const changeLanguage = () => userContext?.language === LanguageEnum.TH ? setUserContext((prevContext) => ({
    ...prevContext,
    language: LanguageEnum.EN
  })) : setUserContext((prevContext) => ({
    ...prevContext,
    language: LanguageEnum.TH
  }));
  (0, import_react12.useEffect)(() => {
    i18n.changeLanguage(userContext?.language);
  }, [i18n, userContext?.language]);
  const location = useLocation();
  const navigate = useNavigate();
  (0, import_react12.useEffect)(() => {
    const urlParams = new URLSearchParams(location.search);
    const loginParam = urlParams.get("login");
    if (loginParam === "true" && !visibilityLogin) {
      setVisibilityLogin(true);
    } else if ((!loginParam || loginParam === "false") && visibilityLogin) {
      setVisibilityLogin(false);
    }
  }, [location.search]);
  (0, import_react12.useEffect)(() => {
    const urlParams = new URLSearchParams(window?.location?.search);
    if (!initialRender) {
      setInitialRender(true);
    } else if (!visibilityLogin && urlParams.has("login")) {
      urlParams.delete("login");
      if (urlParams.toString() === "") {
        navigate(`${location.pathname}`);
      } else {
        navigate(`${location.pathname}?${urlParams.toString()}`);
      }
    }
  }, [visibilityLogin]);
  const handleOpenModal = (visibility) => {
    const urlParams = new URLSearchParams(window?.location?.search);
    urlParams.set("login", "true");
    const newUrl = `${location.pathname}?${urlParams.toString()}`;
    window.history.pushState({}, "", newUrl);
    setVisibilityLogin(!visibility);
  };
  (0, import_react12.useEffect)(() => {
    const stickyNavbar = () => {
      const searchHeight = document.getElementById("searchSection");
      const windowHeight = window.scrollY;
      if (window !== void 0 && searchHeight) {
        if (windowHeight > searchHeight.offsetHeight) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      }
    };
    window.addEventListener("scroll", stickyNavbar);
    return () => {
      window.removeEventListener("scroll", stickyNavbar);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(WrapperHeader, { sticky, type: isHomePage ? "homePage" : "", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ContainerHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(LeftContainer, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Link, { to: routes_default.root, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(LogoWrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Logo_default, { className: "transparent" }, void 0, false, {
          fileName: "app/components/entities/Navbar/index.tsx",
          lineNumber: 108,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/entities/Navbar/index.tsx",
          lineNumber: 107,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/entities/Navbar/index.tsx",
          lineNumber: 106,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TranslateBox, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Switcher, { onChange: changeLanguage, checked: userContext?.language === LanguageEnum.EN, htmlLabel: "lang", variant: "lang" }, void 0, false, {
            fileName: "app/components/entities/Navbar/index.tsx",
            lineNumber: 128,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(BoxText, { style: {
            cursor: "pointer"
          }, lang: LanguageEnum.EN, selectedLang: userContext?.language ?? "", onClick: () => {
            if (userContext.language === "th")
              setLang(LanguageEnum.EN);
            if (userContext.language === "en")
              setLang(LanguageEnum.TH);
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text, { color: theme.navbar.textActiveLangColor, variant: TextVariantEnum.textBody2, className: "transparent", children: userContext?.language === "en" ? "English" : "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22" }, void 0, false, {
            fileName: "app/components/entities/Navbar/index.tsx",
            lineNumber: 135,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/entities/Navbar/index.tsx",
            lineNumber: 129,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/entities/Navbar/index.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(MenuLinks, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(NavLink, { to: routes_default.root, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button_default, { priority: "tertiary", isActive: isHomePage, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text, { color: theme.navbar.textLinkColor, variant: TextVariantEnum.textBody2, className: "transparent", children: t("common:home") }, void 0, false, {
            fileName: "app/components/entities/Navbar/index.tsx",
            lineNumber: 143,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/entities/Navbar/index.tsx",
            lineNumber: 142,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/entities/Navbar/index.tsx",
            lineNumber: 141,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(NavLink, { to: `/search/${userContext.search || ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button_default, { priority: "tertiary", isActive: isSearchResume || isSearchVacancy || isSearchCompany, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text, { color: theme.navbar.textLinkColor, variant: TextVariantEnum.textBody2, className: "transparent", children: t("home:search") }, void 0, false, {
            fileName: "app/components/entities/Navbar/index.tsx",
            lineNumber: 150,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/entities/Navbar/index.tsx",
            lineNumber: 149,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/entities/Navbar/index.tsx",
            lineNumber: 148,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/entities/Navbar/index.tsx",
          lineNumber: 140,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/entities/Navbar/index.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(MenuContainer, { children: [
        userContext.user?.isAuthenticated ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(AvatarContainer, { onClick: () => setVisibleMobileNavbar(!visibleMobileNavbar), children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: userContext.user.avatar ? getImageUrl(userContext.user.avatar) : DEFAULT_USER_AVATAR, alt: "avatar" }, void 0, false, {
          fileName: "app/components/entities/Navbar/index.tsx",
          lineNumber: 170,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/entities/Navbar/index.tsx",
          lineNumber: 168,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/entities/Navbar/index.tsx",
          lineNumber: 159,
          columnNumber: 48
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button_default, { onClick: () => handleOpenModal(visibilityLogin), priority: !sticky ? "secondary" : "primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("signIn") }, void 0, false, {
          fileName: "app/components/entities/Navbar/index.tsx",
          lineNumber: 174,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/entities/Navbar/index.tsx",
          lineNumber: 173,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(IconButtonBurger, { onClick: () => setVisibleMobileNavbar(!visibleMobileNavbar), children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Menu_default, { color: theme.navbar.svgColor, className: "transparent" }, void 0, false, {
          fileName: "app/components/entities/Navbar/index.tsx",
          lineNumber: 177,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/entities/Navbar/index.tsx",
          lineNumber: 176,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/entities/Navbar/index.tsx",
        lineNumber: 158,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/Navbar/index.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Login, { visibility: visibilityLogin, setVisibility: setVisibilityLogin, setVisibilityForgotPassword }, void 0, false, {
      fileName: "app/components/entities/Navbar/index.tsx",
      lineNumber: 181,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ForgotPasswordPage, { visibility: visibilityForgotPassword, setVisibility: setVisibilityForgotPassword, setVisibilityLogin }, void 0, false, {
      fileName: "app/components/entities/Navbar/index.tsx",
      lineNumber: 182,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(MobileNavbar, { visibility: visibleMobileNavbar, setVisibility: setVisibleMobileNavbar, visibilityLogin, setVisibilityLogin }, void 0, false, {
      fileName: "app/components/entities/Navbar/index.tsx",
      lineNumber: 183,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/Navbar/index.tsx",
    lineNumber: 103,
    columnNumber: 10
  }, this);
});

// app/components/layouts/CommonLayout.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
var Container = styled_components_browser_esm_default(Box).withConfig({
  displayName: "CommonLayout__Container",
  componentId: "sc-1kqrea7-0"
})(["background-color:", ";"], ({
  theme
}) => theme.backgroundColor);
function CommonLayout({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Container, { flexDirection: "column", minHeight: "100vh", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Navbar, {}, void 0, false, {
      fileName: "app/components/layouts/CommonLayout.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Box, { width: "100%", flexDirection: "column", alignItems: "center", flexGrow: "1", backgroundColor: "#E4E6E9", children }, void 0, false, {
      fileName: "app/components/layouts/CommonLayout.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Footer, {}, void 0, false, {
      fileName: "app/components/layouts/CommonLayout.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layouts/CommonLayout.tsx",
    lineNumber: 17,
    columnNumber: 10
  }, this);
}

export {
  PoliciesText2 as PoliciesText,
  ProgressBar_default,
  BoxText,
  TranslateBox,
  NavbarItem,
  CommonLayout
};
