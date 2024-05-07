import {
  BoxDataChips
} from "/build/_shared/chunk-BKRWDH2A.js";
import {
  ProgressBar_default
} from "/build/_shared/chunk-QY27BVON.js";
import {
  ButtonCreate,
  ModalSelectCreateForm
} from "/build/_shared/chunk-HGKWYC6I.js";
import {
  Button_default
} from "/build/_shared/chunk-AF6HCNMF.js";
import {
  Box,
  DEFAULT_COMPANY_LOGO,
  DEFAULT_USER_AVATAR,
  FONT_SIZES_DESC,
  FONT_SIZES_MOB,
  Icon,
  IconEnum,
  LINE_HEIGHTS_DESC,
  LINE_HEIGHTS_MOB,
  Text,
  TextVariantEnum,
  getImageUrl,
  getValueLang,
  routes_default,
  styled_components_browser_esm_default,
  useApp,
  useMatchesData,
  useRouteChecks,
  useScreenWidth
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  Link,
  init_esm,
  useLocation,
  useMatches,
  useNavigate,
  useSearchParams
} from "/build/_shared/chunk-IQJCUQRT.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/common/Heading/index.tsx
init_esm();
var import_react11 = __toESM(require_react());

// app/components/common/Heading/components/HeadingForArticles/index.tsx
var import_react = __toESM(require_react());

// app/components/common/Heading/styles.ts
var BoxHeading = styled_components_browser_esm_default.div`
  background: url('/images/homePage/noiseSectionTop.png') repeat,
    url('/images/user/backgroundHeading.png');
  background-size: cover;
  background-position: bottom center;
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.\u0441ards.shadow};
  & .title {
    font-size: ${FONT_SIZES_MOB.textHeading2};
    line-height: ${LINE_HEIGHTS_MOB.textHeading2};
  }

  @media (min-width: 768px) {
    background: url('/images/homePage/noiseSectionTop.png') repeat,
      url('/images/user/backgroundTabletHeading.png') no-repeat;
    background-size: cover;
    background-position: bottom center;
    padding: 16px 24px 24px;
    gap: 24px;
    & .title {
      font-size: ${FONT_SIZES_DESC.textHeading3};
      line-height: ${LINE_HEIGHTS_DESC.textHeading3};
    }
  }

  @media (min-width: 1024px) {
    border-radius: 12px;
  }

  @media (min-width: 1280px) {
    background: url('/images/homePage/noiseSectionTop.png') repeat,
      url('/images/user/backgroundDesktopHeading.png') no-repeat;
    background-size: cover;
    background-position: bottom center;
    padding: 24px;
  }
`;
var ButtonsControl = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  @media (min-width: 768px) {
    gap: 24px;
  }
  @media (min-width: 1280px) {
    .goBackButton {
      display: none;
    }
  }
  &:empty {
    display: none;
  }
`;
var MobileBox = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    gap: 24px;
  }

  @media (min-width: 1280px) {
    display: none;
  }
`;
var ContainerBox = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    gap: 24px;
    padding-top: 8px;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 0;
  }
`;
var DesktopProfile = styled_components_browser_esm_default.div`
  display: none;
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
`;
var LeftBoxProfile = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;
var AvatarBox = styled_components_browser_esm_default.div`
  width: 124px;
  height: 124px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.user.borderAvatar};

  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;
var InformationBox = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;
var BoxTitle = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;

  button {
    display: none;
  }

  @media (min-width: 1280px) {
    button {
      display: flex;
    }
  }
`;

// app/components/common/Heading/components/HeadingForArticles/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var HeadingForArticles = (0, import_react.memo)(({
  isId,
  title,
  variant
}) => {
  const {
    theme,
    t
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContainerBox, { variant: "materials", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "title", variant: TextVariantEnum.textHeading1, color: theme.user.headingTextColor, children: title || t("home:articles") }, void 0, false, {
    fileName: "app/components/common/Heading/components/HeadingForArticles/index.tsx",
    lineNumber: 21,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/common/Heading/components/HeadingForArticles/index.tsx",
    lineNumber: 20,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/common/Heading/components/HeadingForArticles/index.tsx",
    lineNumber: 19,
    columnNumber: 10
  }, this);
});

// app/components/common/Heading/components/HeadingForCompany/index.tsx
init_esm();
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var HeadingForCompany = (0, import_react3.memo)(({
  isId,
  title,
  companies
}) => {
  const {
    theme,
    t,
    userContext
  } = useApp();
  const loc = useLocation();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const {
    isSearchCompany
  } = useRouteChecks();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ContainerBox, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxTitle, { children: [
      isId && !isSearchCompany && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { onClick: goBack, priority: "secondary", onlyIcon: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { name: IconEnum.arrowLeft }, void 0, false, {
        fileName: "app/components/common/Heading/components/HeadingForCompany/index.tsx",
        lineNumber: 35,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/common/Heading/components/HeadingForCompany/index.tsx",
        lineNumber: 34,
        columnNumber: 40
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { className: "title", variant: TextVariantEnum.textHeading1, color: theme.user.headingTextColor, children: title || t("user:companies") }, void 0, false, {
        fileName: "app/components/common/Heading/components/HeadingForCompany/index.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/Heading/components/HeadingForCompany/index.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ButtonsControl, { children: [
      isId && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
        !isSearchCompany && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { className: "goBackButton", onClick: goBack, priority: "secondary", onlyIcon: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { name: IconEnum.arrowLeft }, void 0, false, {
          fileName: "app/components/common/Heading/components/HeadingForCompany/index.tsx",
          lineNumber: 44,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/common/Heading/components/HeadingForCompany/index.tsx",
          lineNumber: 43,
          columnNumber: 36
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: routes_default.user.vacancy.create, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { priority: "primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:create_vacancy") }, void 0, false, {
          fileName: "app/components/common/Heading/components/HeadingForCompany/index.tsx",
          lineNumber: 48,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/common/Heading/components/HeadingForCompany/index.tsx",
          lineNumber: 47,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/common/Heading/components/HeadingForCompany/index.tsx",
          lineNumber: 46,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/common/Heading/components/HeadingForCompany/index.tsx",
        lineNumber: 42,
        columnNumber: 20
      }, this),
      !isId && companies?.[0] && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: userContext.user.isAuthenticated ? routes_default.user.company.create : `${loc.pathname}${loc.search ? `${loc.search}&login=true` : "?login=true"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { priority: "primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:create_company") }, void 0, false, {
        fileName: "app/components/common/Heading/components/HeadingForCompany/index.tsx",
        lineNumber: 54,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/common/Heading/components/HeadingForCompany/index.tsx",
        lineNumber: 53,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/common/Heading/components/HeadingForCompany/index.tsx",
        lineNumber: 52,
        columnNumber: 39
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/Heading/components/HeadingForCompany/index.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Heading/components/HeadingForCompany/index.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
});

// app/components/common/Heading/components/HeadingForFaq/index.tsx
var import_react4 = __toESM(require_react());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var HeadingForFaq = (0, import_react4.memo)(({
  title,
  variant
}) => {
  const {
    theme,
    t
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ContainerBox, { variant: "materials", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BoxTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { className: "title", variant: TextVariantEnum.textHeading1, color: theme.user.headingTextColor, children: title || t("common:menu.faq") }, void 0, false, {
    fileName: "app/components/common/Heading/components/HeadingForFaq/index.tsx",
    lineNumber: 19,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/common/Heading/components/HeadingForFaq/index.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/common/Heading/components/HeadingForFaq/index.tsx",
    lineNumber: 17,
    columnNumber: 10
  }, this);
});

// app/components/common/Heading/components/HeadingForMyProfile/index.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var AvatarBox2 = styled_components_browser_esm_default.div.withConfig({
  displayName: "HeadingForMyProfile__AvatarBox",
  componentId: "sc-1rdhete-0"
})(["width:124px;height:124px;border-radius:50%;border:2px solid ", ";img{height:100%;width:100%;border-radius:50%;object-fit:cover;}"], ({
  theme
}) => theme.user.borderAvatar);
function HeadingForMyProfile({
  isId,
  variantCreate,
  setVariantCreate,
  setSelectionCreate
}) {
  const {
    theme,
    t,
    userContext
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { width: "100%", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MobileBox, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { className: "title", variant: TextVariantEnum.textHeading3, color: theme.user.headingTextColor, children: t("user:my_profile") }, void 0, false, {
        fileName: "app/components/common/Heading/components/HeadingForMyProfile/index.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ButtonsControl, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ButtonCreate, { variant: "resume", setVariantCreate, setSelectionCreate }, void 0, false, {
          fileName: "app/components/common/Heading/components/HeadingForMyProfile/index.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ButtonCreate, { variant: "vacancy", priority: "primary", setVariantCreate, setSelectionCreate }, void 0, false, {
          fileName: "app/components/common/Heading/components/HeadingForMyProfile/index.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/common/Heading/components/HeadingForMyProfile/index.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/Heading/components/HeadingForMyProfile/index.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DesktopProfile, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(LeftBoxProfile, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AvatarBox2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { style: {}, src: userContext.user.avatar ? getImageUrl(userContext.user.avatar) : DEFAULT_USER_AVATAR, alt: "avatar" }, void 0, false, {
          fileName: "app/components/common/Heading/components/HeadingForMyProfile/index.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/common/Heading/components/HeadingForMyProfile/index.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(InformationBox, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { variant: TextVariantEnum.textHeading3, color: theme.user.headingTextColor, children: `${userContext.user.firstName || ""} ${userContext.user.lastName || ""}` }, void 0, false, {
            fileName: "app/components/common/Heading/components/HeadingForMyProfile/index.tsx",
            lineNumber: 52,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { flexDirection: "row", gap: "4px", alignItems: "center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { name: userContext.user.isEmailConfirm ? IconEnum.verifed : IconEnum.notVerifed }, void 0, false, {
              fileName: "app/components/common/Heading/components/HeadingForMyProfile/index.tsx",
              lineNumber: 56,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, color: theme.user.headingTextColor, children: userContext.user.email }, void 0, false, {
              fileName: "app/components/common/Heading/components/HeadingForMyProfile/index.tsx",
              lineNumber: 57,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/common/Heading/components/HeadingForMyProfile/index.tsx",
            lineNumber: 55,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { flexDirection: "column", width: "210px", gap: "4px", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { flexDirection: "row", width: "100%", justifyContent: "space-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, color: theme.user.headingTextColor, children: t("user:profile_completeness") }, void 0, false, {
                fileName: "app/components/common/Heading/components/HeadingForMyProfile/index.tsx",
                lineNumber: 64,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, color: theme.user.headingTextColor, children: `${userContext.user.progressInfo || ""}%` }, void 0, false, {
                fileName: "app/components/common/Heading/components/HeadingForMyProfile/index.tsx",
                lineNumber: 67,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/common/Heading/components/HeadingForMyProfile/index.tsx",
              lineNumber: 63,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ProgressBar_default, { percent: userContext.user.progressInfo }, void 0, false, {
              fileName: "app/components/common/Heading/components/HeadingForMyProfile/index.tsx",
              lineNumber: 69,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/common/Heading/components/HeadingForMyProfile/index.tsx",
            lineNumber: 62,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/common/Heading/components/HeadingForMyProfile/index.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/common/Heading/components/HeadingForMyProfile/index.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { className: "title", variant: TextVariantEnum.textHeading3, color: theme.user.headingTextColor, children: t("user:my_profile") }, void 0, false, {
          fileName: "app/components/common/Heading/components/HeadingForMyProfile/index.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ButtonsControl, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ButtonCreate, { variant: "resume", setVariantCreate, setSelectionCreate }, void 0, false, {
            fileName: "app/components/common/Heading/components/HeadingForMyProfile/index.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ButtonCreate, { variant: "vacancy", priority: "primary", setVariantCreate, setSelectionCreate }, void 0, false, {
            fileName: "app/components/common/Heading/components/HeadingForMyProfile/index.tsx",
            lineNumber: 80,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/common/Heading/components/HeadingForMyProfile/index.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/common/Heading/components/HeadingForMyProfile/index.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/Heading/components/HeadingForMyProfile/index.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Heading/components/HeadingForMyProfile/index.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}

// app/components/common/Heading/components/HeadingForNews/index.tsx
var import_react5 = __toESM(require_react());
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var HeadingForNews = (0, import_react5.memo)(({
  isId,
  title,
  variant
}) => {
  const {
    theme,
    t
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ContainerBox, { variant: "materials", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BoxTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { className: "title", variant: TextVariantEnum.textHeading1, color: theme.user.headingTextColor, children: title || t("home:news") }, void 0, false, {
    fileName: "app/components/common/Heading/components/HeadingForNews/index.tsx",
    lineNumber: 21,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/common/Heading/components/HeadingForNews/index.tsx",
    lineNumber: 20,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/common/Heading/components/HeadingForNews/index.tsx",
    lineNumber: 19,
    columnNumber: 10
  }, this);
});

// app/components/common/Heading/components/HeadingForResponses/index.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function HeadingForResponses({
  title,
  variant
}) {
  const {
    theme,
    t
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ContainerBox, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(BoxTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { className: "title", variant: TextVariantEnum.textHeading1, color: theme.user.headingTextColor, children: title || t("user:responses") }, void 0, false, {
    fileName: "app/components/common/Heading/components/HeadingForResponses/index.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/common/Heading/components/HeadingForResponses/index.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/Heading/components/HeadingForResponses/index.tsx",
    lineNumber: 16,
    columnNumber: 10
  }, this);
}

// app/components/common/Heading/components/HeadingForResume/index.tsx
init_esm();
var import_react7 = __toESM(require_react());
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
var HeadingForResume = (0, import_react7.memo)(({
  isId,
  title,
  variantCreate,
  setVariantCreate,
  setSelectionCreate,
  resumes,
  step
}) => {
  const {
    theme,
    t
  } = useApp();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const matches = useMatches();
  const isCreate = matches.some((m) => m.id.includes(".create"));
  const {
    isSearchResume
  } = useRouteChecks();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ContainerBox, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(BoxTitle, { children: [
      isId && !isSearchResume && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button_default, { onClick: goBack, priority: "secondary", onlyIcon: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Icon, { name: IconEnum.arrowLeft }, void 0, false, {
        fileName: "app/components/common/Heading/components/HeadingForResume/index.tsx",
        lineNumber: 44,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/common/Heading/components/HeadingForResume/index.tsx",
        lineNumber: 43,
        columnNumber: 39
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text, { className: "title", variant: TextVariantEnum.textHeading1, color: theme.user.headingTextColor, children: title || t("user:my_resumes") }, void 0, false, {
        fileName: "app/components/common/Heading/components/HeadingForResume/index.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/Heading/components/HeadingForResume/index.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ButtonsControl, { children: [
      isId && !isSearchResume && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button_default, { className: "goBackButton", onClick: goBack, priority: "secondary", onlyIcon: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Icon, { name: IconEnum.arrowLeft }, void 0, false, {
        fileName: "app/components/common/Heading/components/HeadingForResume/index.tsx",
        lineNumber: 52,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/common/Heading/components/HeadingForResume/index.tsx",
        lineNumber: 51,
        columnNumber: 39
      }, this),
      isCreate && step && step !== 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Link, { to: routes_default.user.resume.root, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button_default, { priority: "secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:complete_later") }, void 0, false, {
        fileName: "app/components/common/Heading/components/HeadingForResume/index.tsx",
        lineNumber: 57,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/common/Heading/components/HeadingForResume/index.tsx",
        lineNumber: 56,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/common/Heading/components/HeadingForResume/index.tsx",
        lineNumber: 55,
        columnNumber: 46
      }, this),
      !isCreate && resumes?.[0] && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ButtonCreate, { variant: "resume", priority: "primary", setVariantCreate, setSelectionCreate }, void 0, false, {
        fileName: "app/components/common/Heading/components/HeadingForResume/index.tsx",
        lineNumber: 60,
        columnNumber: 41
      }, this),
      isSearchResume && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ButtonCreate, { variant: "resume", priority: "primary", setVariantCreate, setSelectionCreate }, void 0, false, {
        fileName: "app/components/common/Heading/components/HeadingForResume/index.tsx",
        lineNumber: 61,
        columnNumber: 30
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/Heading/components/HeadingForResume/index.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Heading/components/HeadingForResume/index.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
});

// app/components/common/Heading/components/HeadingForSearchCompany/styles.ts
var Wrapper = styled_components_browser_esm_default.div`
  width: 100%;
  padding: 24px;
  background-color: ${({ theme }) => theme.search.backgroundWrapper};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
var AvatarBox3 = styled_components_browser_esm_default.div`
  width: 264px;
  height: 264px;
  border-radius: 8px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;
var InformationBox2 = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: space-between;
`;
var TitlesBox = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 8px;
`;
var BoxInfo = styled_components_browser_esm_default.div`
  width: 240px;
  height: 120px;
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.user.borderColor};
  background-color: ${({ theme }) => theme.buttons.chips.backgroundColor};
`;
var DescriptionBox = styled_components_browser_esm_default.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
var DescriptionInfoBox = styled_components_browser_esm_default.div`
  border-radius: 8px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.user.borderColor};
  padding: 16px;
`;

// app/components/common/Heading/components/HeadingForSearchCompany/index.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
function HeadingForSearchCompany({
  company,
  dictionaries
}) {
  const {
    theme,
    t,
    userContext
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Wrapper, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(InformationBox2, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Box, { gap: "24px", flexDirection: "row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(AvatarBox3, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: company?.logo_uri ? getImageUrl(company?.logo_uri) : DEFAULT_COMPANY_LOGO, alt: "" }, void 0, false, {
          fileName: "app/components/common/Heading/components/HeadingForSearchCompany/index.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/common/Heading/components/HeadingForSearchCompany/index.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(TitlesBox, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Text, { variant: TextVariantEnum.textHeading3, children: company.name }, void 0, false, {
            fileName: "app/components/common/Heading/components/HeadingForSearchCompany/index.tsx",
            lineNumber: 30,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, children: company.name }, void 0, false, {
            fileName: "app/components/common/Heading/components/HeadingForSearchCompany/index.tsx",
            lineNumber: 32,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, color: theme.accentTextColor, children: company.website }, void 0, false, {
            fileName: "app/components/common/Heading/components/HeadingForSearchCompany/index.tsx",
            lineNumber: 34,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/common/Heading/components/HeadingForSearchCompany/index.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/common/Heading/components/HeadingForSearchCompany/index.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Box, { display: "grid", style: {
        gridTemplateRows: "repeat(2, 1fr)",
        gridTemplateColumns: "repeat(2, 1fr)"
      }, gap: "24px", justifyContent: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(BoxInfo, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:opened_vacancies") }, void 0, false, {
            fileName: "app/components/common/Heading/components/HeadingForSearchCompany/index.tsx",
            lineNumber: 44,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(BoxDataChips, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: company.number_of_vacancies }, void 0, false, {
            fileName: "app/components/common/Heading/components/HeadingForSearchCompany/index.tsx",
            lineNumber: 47,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/common/Heading/components/HeadingForSearchCompany/index.tsx",
            lineNumber: 46,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/common/Heading/components/HeadingForSearchCompany/index.tsx",
            lineNumber: 45,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/common/Heading/components/HeadingForSearchCompany/index.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(BoxInfo, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:number_of_employees") }, void 0, false, {
            fileName: "app/components/common/Heading/components/HeadingForSearchCompany/index.tsx",
            lineNumber: 52,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: getValueLang(company?.number_of_employees_name, userContext.language) }, void 0, false, {
            fileName: "app/components/common/Heading/components/HeadingForSearchCompany/index.tsx",
            lineNumber: 53,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/common/Heading/components/HeadingForSearchCompany/index.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(BoxInfo, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:district") }, void 0, false, {
            fileName: "app/components/common/Heading/components/HeadingForSearchCompany/index.tsx",
            lineNumber: 58,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: getValueLang(company?.city_name, userContext.language) }, void 0, false, {
            fileName: "app/components/common/Heading/components/HeadingForSearchCompany/index.tsx",
            lineNumber: 59,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/common/Heading/components/HeadingForSearchCompany/index.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(BoxInfo, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:city") }, void 0, false, {
            fileName: "app/components/common/Heading/components/HeadingForSearchCompany/index.tsx",
            lineNumber: 64,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: getValueLang(company?.city_name, userContext.language) }, void 0, false, {
            fileName: "app/components/common/Heading/components/HeadingForSearchCompany/index.tsx",
            lineNumber: 65,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/common/Heading/components/HeadingForSearchCompany/index.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/common/Heading/components/HeadingForSearchCompany/index.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/Heading/components/HeadingForSearchCompany/index.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DescriptionBox, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Text, { variant: TextVariantEnum.textHeading3, children: t("user:about_company") }, void 0, false, {
        fileName: "app/components/common/Heading/components/HeadingForSearchCompany/index.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DescriptionInfoBox, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: company.description }, void 0, false, {
        fileName: "app/components/common/Heading/components/HeadingForSearchCompany/index.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/common/Heading/components/HeadingForSearchCompany/index.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/Heading/components/HeadingForSearchCompany/index.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Heading/components/HeadingForSearchCompany/index.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}

// app/components/common/Heading/components/HeadingForVacancy/index.tsx
init_esm();
var import_react9 = __toESM(require_react());
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
var HeadingForVacancy = (0, import_react9.memo)(({
  isId,
  title,
  variantCreate,
  setVariantCreate,
  setSelectionCreate,
  vacancies,
  step
}) => {
  const {
    theme,
    t
  } = useApp();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const matches = useMatches();
  const isCreate = matches.some((m) => m.id.includes(".create"));
  const {
    isSearchVacancy
  } = useRouteChecks();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ContainerBox, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(BoxTitle, { children: [
      isId && !isSearchVacancy && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Button_default, { onClick: goBack, priority: "secondary", onlyIcon: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Icon, { name: IconEnum.arrowLeft }, void 0, false, {
        fileName: "app/components/common/Heading/components/HeadingForVacancy/index.tsx",
        lineNumber: 44,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/common/Heading/components/HeadingForVacancy/index.tsx",
        lineNumber: 43,
        columnNumber: 40
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Text, { className: "title", variant: TextVariantEnum.textHeading1, color: theme.user.headingTextColor, children: title || t("user:my_vacancies") }, void 0, false, {
        fileName: "app/components/common/Heading/components/HeadingForVacancy/index.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/Heading/components/HeadingForVacancy/index.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ButtonsControl, { children: [
      isId && !isSearchVacancy && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Button_default, { className: "goBackButton", onClick: goBack, priority: "secondary", onlyIcon: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Icon, { name: IconEnum.arrowLeft }, void 0, false, {
        fileName: "app/components/common/Heading/components/HeadingForVacancy/index.tsx",
        lineNumber: 52,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/common/Heading/components/HeadingForVacancy/index.tsx",
        lineNumber: 51,
        columnNumber: 40
      }, this),
      isCreate && step && step !== 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Link, { to: routes_default.user.vacancy.root, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Button_default, { priority: "secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:complete_later") }, void 0, false, {
        fileName: "app/components/common/Heading/components/HeadingForVacancy/index.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/common/Heading/components/HeadingForVacancy/index.tsx",
        lineNumber: 55,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/common/Heading/components/HeadingForVacancy/index.tsx",
        lineNumber: 54,
        columnNumber: 46
      }, this),
      !isCreate && vacancies?.[0] && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ButtonCreate, { variant: "vacancy", priority: "primary", setVariantCreate, setSelectionCreate }, void 0, false, {
        fileName: "app/components/common/Heading/components/HeadingForVacancy/index.tsx",
        lineNumber: 59,
        columnNumber: 43
      }, this),
      isSearchVacancy && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ButtonCreate, { variant: "vacancy", priority: "primary", setVariantCreate, setSelectionCreate }, void 0, false, {
        fileName: "app/components/common/Heading/components/HeadingForVacancy/index.tsx",
        lineNumber: 60,
        columnNumber: 31
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/Heading/components/HeadingForVacancy/index.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Heading/components/HeadingForVacancy/index.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
});

// app/components/common/Heading/index.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
function Heading() {
  const matchesFromCompnyVacancies = useMatchesData("routes/search/company.$id.vacancy");
  const matches = useMatches();
  const resumes = matches[2]?.data.resumes?.data;
  const vacancies = matches[2]?.data.vacancies?.data;
  const companies = matches[2]?.data.companies?.data;
  const company = matchesFromCompnyVacancies?.company;
  const dictionaries = matchesFromCompnyVacancies?.dictionaries;
  const [searchParams] = useSearchParams();
  const step = Number(searchParams.get("step") ?? "1");
  const {
    isUserProfile,
    isUserResume,
    isUserVacancy,
    isUserCompany,
    isUserResponses,
    isSearchResume,
    isSearchVacancy,
    isSearchCompany,
    isSearchCompanyVacancies,
    isMaterialsArticles,
    isMaterialsNews,
    isFaq,
    isId
  } = useRouteChecks();
  const [visibleSelectionCreate, setSelectionCreate] = (0, import_react11.useState)(false);
  const [variantCreate, setVariantCreate] = (0, import_react11.useState)("resume");
  const widthScreen = useScreenWidth();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
    isSearchCompanyVacancies && widthScreen >= 1280 ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(HeadingForSearchCompany, { company, dictionaries }, void 0, false, {
      fileName: "app/components/common/Heading/index.tsx",
      lineNumber: 41,
      columnNumber: 58
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(BoxHeading, { style: {
      maxWidth: isSearchCompanyVacancies ? "920px" : "auto"
    }, children: [
      isUserProfile && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(HeadingForMyProfile, { isId, variantCreate, setVariantCreate, setSelectionCreate }, void 0, false, {
        fileName: "app/components/common/Heading/index.tsx",
        lineNumber: 44,
        columnNumber: 29
      }, this),
      isUserResume && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(HeadingForResume, { isId, variantCreate, setVariantCreate, setSelectionCreate, resumes, step }, void 0, false, {
        fileName: "app/components/common/Heading/index.tsx",
        lineNumber: 45,
        columnNumber: 28
      }, this),
      isUserVacancy && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(HeadingForVacancy, { isId, variantCreate, setVariantCreate, setSelectionCreate, vacancies, step }, void 0, false, {
        fileName: "app/components/common/Heading/index.tsx",
        lineNumber: 46,
        columnNumber: 29
      }, this),
      isUserCompany && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(HeadingForCompany, { isId, companies }, void 0, false, {
        fileName: "app/components/common/Heading/index.tsx",
        lineNumber: 47,
        columnNumber: 29
      }, this),
      isUserResponses && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(HeadingForResponses, {}, void 0, false, {
        fileName: "app/components/common/Heading/index.tsx",
        lineNumber: 48,
        columnNumber: 31
      }, this),
      isSearchResume && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(HeadingForResume, { title: "Find employee", isId, variantCreate, setVariantCreate, setSelectionCreate }, void 0, false, {
        fileName: "app/components/common/Heading/index.tsx",
        lineNumber: 50,
        columnNumber: 30
      }, this),
      isSearchVacancy && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(HeadingForVacancy, { title: "Find Job", isId, variantCreate, setVariantCreate, setSelectionCreate }, void 0, false, {
        fileName: "app/components/common/Heading/index.tsx",
        lineNumber: 51,
        columnNumber: 31
      }, this),
      isSearchCompany && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(HeadingForCompany, { title: "Companies", isId }, void 0, false, {
        fileName: "app/components/common/Heading/index.tsx",
        lineNumber: 52,
        columnNumber: 31
      }, this),
      isMaterialsArticles && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(HeadingForArticles, { isId, variant: "materials" }, void 0, false, {
        fileName: "app/components/common/Heading/index.tsx",
        lineNumber: 54,
        columnNumber: 35
      }, this),
      isMaterialsNews && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(HeadingForNews, { isId, variant: "materials" }, void 0, false, {
        fileName: "app/components/common/Heading/index.tsx",
        lineNumber: 55,
        columnNumber: 31
      }, this),
      isFaq && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(HeadingForFaq, { variant: "materials" }, void 0, false, {
        fileName: "app/components/common/Heading/index.tsx",
        lineNumber: 56,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/Heading/index.tsx",
      lineNumber: 41,
      columnNumber: 134
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(ModalSelectCreateForm, { visibility: visibleSelectionCreate, setVisibility: setSelectionCreate, variant: variantCreate }, void 0, false, {
      fileName: "app/components/common/Heading/index.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Heading/index.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}

export {
  Heading
};
//# sourceMappingURL=/build/_shared/chunk-H5SUEHSB.js.map
