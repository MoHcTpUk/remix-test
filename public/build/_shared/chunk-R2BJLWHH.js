import {
  CardContainer
} from "/build/_shared/chunk-OGIUXGZ2.js";
import {
  EntityVariantEnum,
  PageVariantEnum
} from "/build/_shared/chunk-5HXZ6U7H.js";
import {
  BoxCard,
  VariantCardEnum
} from "/build/_shared/chunk-EWP76DBX.js";
import {
  Button_default
} from "/build/_shared/chunk-AF6HCNMF.js";
import {
  motion
} from "/build/_shared/chunk-47YKAHTX.js";
import {
  Box,
  FONT_SIZES_DESC,
  FONT_SIZES_MOB,
  FONT_WEIGHTS_DESC,
  FONT_WEIGHTS_MOB,
  LINE_HEIGHTS_DESC,
  LINE_HEIGHTS_MOB,
  Text,
  TextVariantEnum,
  routes_default,
  styled_components_browser_esm_default,
  useApp
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  Link,
  init_esm,
  useLocation
} from "/build/_shared/chunk-IQJCUQRT.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/pages/Search/SignInForRequest/index.tsx
init_esm();

// app/components/ui/Card/BoxDataFields/styles.ts
var Wrapper = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 8px;

  @media (min-width: 768px) {
    margin-top: ${({ variant, pageVariant }) => (variant === EntityVariantEnum.vacancy || pageVariant === PageVariantEnum.response) && "-8px"};
  }
`;

// app/components/ui/Card/BoxDataFields/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function BoxDataFields({
  children,
  variant,
  pageVariant
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wrapper, { variant, pageVariant, children }, void 0, false, {
    fileName: "app/components/ui/Card/BoxDataFields/index.tsx",
    lineNumber: 15,
    columnNumber: 10
  }, this);
}

// app/components/ui/Card/BoxDataFieldsInner/styles.ts
var Wrapper2 = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 16px;

  @media (min-width: 768px) {
    padding-top: 24px;
    .title {
      font-size: ${FONT_SIZES_DESC.textHeading3};
      line-height: ${LINE_HEIGHTS_DESC.textHeading3};
    }
  }
`;

// app/components/ui/Card/BoxDataFieldsInner/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function BoxDataFieldsInner({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Wrapper2, { children }, void 0, false, {
    fileName: "app/components/ui/Card/BoxDataFieldsInner/index.tsx",
    lineNumber: 9,
    columnNumber: 10
  }, this);
}

// app/components/pages/Search/SignInForRequest/styles.tsx
var HeaderWrapper = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__HeaderWrapper",
  componentId: "sc-1qn5tg2-0"
})(["display:flex;width:100%;align-items:center;justify-content:center;& span{font-size:", ";line-height:", ";font-weight:", ";}@media (min-width:768px){& span{font-size:", ";line-height:", ";font-weight:", ";}}"], FONT_SIZES_MOB.textHeading2, LINE_HEIGHTS_MOB.textHeading2, FONT_WEIGHTS_MOB.textHeading2, FONT_SIZES_DESC.textHeading3, LINE_HEIGHTS_DESC.textHeading3, FONT_WEIGHTS_DESC.textHeading3);

// app/components/pages/Search/SignInForRequest/index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function SignInForRequest({
  variant
}) {
  const {
    t
  } = useApp();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  urlParams.set("login", "true");
  const newUrl = `${location.pathname}?${urlParams.toString()}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BoxCard, { variant: VariantCardEnum.request, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardContainer, { style: {
    alignItems: "center",
    justifyContent: "center"
  }, as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, transition: {
    type: "spring",
    bounce: 0,
    duration: 0.4
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { flexDirection: "column", gap: "24px", maxWidth: "400px", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { flexDirection: "column", gap: "8px", alignItems: "center", textAlign: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HeaderWrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, children: t("user:your_request") }, void 0, false, {
        fileName: "app/components/pages/Search/SignInForRequest/index.tsx",
        lineNumber: 44,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Search/SignInForRequest/index.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, children: variant === EntityVariantEnum.resume ? t("user:only_registered_users_can_apply_for_resumes") : t("user:only_registered_users_can_apply_for_vacancies") }, void 0, false, {
        fileName: "app/components/pages/Search/SignInForRequest/index.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Search/SignInForRequest/index.tsx",
      lineNumber: 42,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { flexDirection: "column", gap: "16px", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: routes_default.auth.register.root, style: {
        width: "100%"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { priority: "secondary", fullwidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("auth:registration") }, void 0, false, {
        fileName: "app/components/pages/Search/SignInForRequest/index.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Search/SignInForRequest/index.tsx",
        lineNumber: 55,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Search/SignInForRequest/index.tsx",
        lineNumber: 52,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: newUrl, preventScrollReset: true, style: {
        width: "100%"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { priority: "primary", fullwidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("common:signIn") }, void 0, false, {
        fileName: "app/components/pages/Search/SignInForRequest/index.tsx",
        lineNumber: 63,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Search/SignInForRequest/index.tsx",
        lineNumber: 62,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Search/SignInForRequest/index.tsx",
        lineNumber: 59,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Search/SignInForRequest/index.tsx",
      lineNumber: 51,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Search/SignInForRequest/index.tsx",
    lineNumber: 41,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/pages/Search/SignInForRequest/index.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/Search/SignInForRequest/index.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}

export {
  BoxDataFields,
  BoxDataFieldsInner,
  SignInForRequest
};
//# sourceMappingURL=/build/_shared/chunk-R2BJLWHH.js.map
