import {
  require_lib
} from "/build/_shared/chunk-VYIZRLIF.js";
import {
  require_request
} from "/build/_shared/chunk-EISN5MP4.js";
import {
  CheckBox
} from "/build/_shared/chunk-5B64Q63W.js";
import {
  Select
} from "/build/_shared/chunk-BXFA34ZG.js";
import {
  CommonLayout,
  PoliciesText
} from "/build/_shared/chunk-OFCPSJ6G.js";
import "/build/_shared/chunk-YIHJ7OEM.js";
import "/build/_shared/chunk-TPPLNXCO.js";
import {
  Input
} from "/build/_shared/chunk-MPISASBV.js";
import "/build/_shared/chunk-LQ4YPZYM.js";
import "/build/_shared/chunk-T7KDPY4G.js";
import "/build/_shared/chunk-NSEFQYWN.js";
import {
  Button_default
} from "/build/_shared/chunk-QD72PUQI.js";
import "/build/_shared/chunk-GEH4KW55.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-ASV7D43C.js";
import "/build/_shared/chunk-4SQREHPC.js";
import "/build/_shared/chunk-NC5IH6SX.js";
import {
  Text,
  TextVariantEnum,
  extractTitlesNewWay,
  routes_default,
  styled_components_browser_esm_default,
  useApp
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  Form,
  Link,
  init_esm,
  useActionData
} from "/build/_shared/chunk-JX76WC46.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6O7TW4X6.js";
import {
  __toESM
} from "/build/_shared/chunk-RFITDC3A.js";

// app/routes/auth/register.tsx
var import_cloudflare = __toESM(require_cloudflare());
init_esm();
var import_qs = __toESM(require_lib());

// app/components/pages/Auth/Register/index.tsx
init_esm();
var import_react2 = __toESM(require_react());

// app/components/pages/Auth/Register/styles.ts
var Wrapper = styled_components_browser_esm_default.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.auth.backgroundRegisterPage};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 64px;
  @media (min-width: 768px) {
    gap: 24px;
    margin-top: 80px;
  }
`;
var BoxForm = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.auth.backgroundRegisterContainerColor};
  border-radius: 8px;
  align-items: center;
  gap: 24px;
  padding: 16px;
  @media (min-width: 768px) {
    max-width: 476px;
    padding: 40px;
  }
  @media (min-width: 1280px) {
    padding: 48px 102px;
    max-width: 792px;
  }
`;
var BoxCheckbox = styled_components_browser_esm_default.div`
  /* width: 100%; */
  display: flex;
  /* flex-direction: column; */
  gap: 16px;
  justify-content: center;
  position: relative;

  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: center;
  }
`;

// app/components/pages/Auth/Register/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var RegisterPage = (0, import_react2.memo)(({
  actionData
}) => {
  const {
    t,
    userContext,
    theme
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommonLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", style: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxForm, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textHeading3, style: {
      textAlign: "center"
    }, children: t("auth:sign_up") }, void 0, false, {
      fileName: "app/components/pages/Auth/Register/index.tsx",
      lineNumber: 36,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { placeholder: t("auth:enter_first_name"), id: "i_enter_first_name", name: "first_name", "aria-invalid": actionData?.fieldErrors?.first_name?.[userContext.language] ? true : void 0, errorText: actionData?.fieldErrors?.first_name?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/Auth/Register/index.tsx",
      lineNumber: 41,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { placeholder: t("auth:enter_last_name"), id: "i_last_name", name: "last_name", "aria-invalid": actionData?.fieldErrors?.last_name?.[userContext.language] ? true : void 0, errorText: actionData?.fieldErrors?.last_name?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/Auth/Register/index.tsx",
      lineNumber: 42,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { htmlType: "email", placeholder: t("auth:enter_email"), id: "i_email", name: "email", "aria-invalid": actionData?.fieldErrors?.email?.[userContext.language] ? true : void 0, errorText: actionData?.fieldErrors?.email?.[userContext.language] ? actionData?.fieldErrors?.email?.[userContext.language] : void 0 }, void 0, false, {
      fileName: "app/components/pages/Auth/Register/index.tsx",
      lineNumber: 43,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { htmlType: "password", placeholder: t("auth:enter_password"), id: "i_password", name: "password", variant: "password", "aria-invalid": actionData?.fieldErrors?.password?.[userContext.language] ? true : void 0, errorText: actionData?.fieldErrors?.password?.[userContext.language] ? actionData?.fieldErrors?.password?.[userContext.language] : void 0 }, void 0, false, {
      fileName: "app/components/pages/Auth/Register/index.tsx",
      lineNumber: 44,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { htmlType: "password", placeholder: t("auth:password_confirmation"), id: "i_password_confirm", name: "password_confirm", variant: "password", "aria-invalid": actionData?.fieldErrors?.password_confirm?.[userContext.language] ? true : void 0, errorText: actionData?.fieldErrors?.password_confirm?.[userContext.language] ? actionData?.fieldErrors?.password_confirm?.[userContext.language] : void 0 }, void 0, false, {
      fileName: "app/components/pages/Auth/Register/index.tsx",
      lineNumber: 45,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { entries: extractTitlesNewWay([{
      id: "th",
      value: {
        en: "Thai",
        th: "\u0E44\u0E17\u0E22"
      }
    }, {
      id: "en",
      value: {
        en: "English",
        th: "\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29"
      }
    }], userContext.language), placeholder: t("user:language_of_notify"), id: "primaryLanguage", name: "primary_language", values: [userContext.language || ""], errorText: actionData?.fieldErrors?.locale?.[userContext.language] ? actionData?.fieldErrors?.locale?.[userContext.language] : void 0 }, void 0, false, {
      fileName: "app/components/pages/Auth/Register/index.tsx",
      lineNumber: 46,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxCheckbox, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckBox, { id: "i_policy", name: "policy", label: t("auth:i_accept_terms_of_use"), value: "false", "aria-invalid": actionData?.fieldErrors?.policy ? true : void 0, errorText: actionData?.fieldErrors?.policy?.[userContext.language] ? actionData?.fieldErrors?.policy?.[userContext.language] : void 0 }, void 0, false, {
      fileName: "app/components/pages/Auth/Register/index.tsx",
      lineNumber: 66,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/pages/Auth/Register/index.tsx",
      lineNumber: 59,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "submit", priority: "primary", fullwidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("auth:sign_up") }, void 0, false, {
      fileName: "app/components/pages/Auth/Register/index.tsx",
      lineNumber: 69,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/pages/Auth/Register/index.tsx",
      lineNumber: 68,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PoliciesText, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: `${t("auth:by_clicking_sign_up_i_agree_to_the")} ` }, void 0, false, {
        fileName: "app/components/pages/Auth/Register/index.tsx",
        lineNumber: 72,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: routes_default.privacyPolicy.terms, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, style: {
        textDecoration: "underline",
        cursor: "pointer"
      }, children: t("auth:terms_of_use") }, void 0, false, {
        fileName: "app/components/pages/Auth/Register/index.tsx",
        lineNumber: 76,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Auth/Register/index.tsx",
        lineNumber: 75,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: ` ${t("auth:and")} ` }, void 0, false, {
        fileName: "app/components/pages/Auth/Register/index.tsx",
        lineNumber: 83,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: routes_default.privacyPolicy.root, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, style: {
        textDecoration: "underline",
        cursor: "pointer"
      }, children: [
        t("auth:privacy_policy"),
        "."
      ] }, void 0, true, {
        fileName: "app/components/pages/Auth/Register/index.tsx",
        lineNumber: 85,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Auth/Register/index.tsx",
        lineNumber: 84,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Auth/Register/index.tsx",
      lineNumber: 71,
      columnNumber: 15
    }, this),
    actionData?.formError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textHeading3, color: theme.errorTextColor, children: actionData?.formError?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/Auth/Register/index.tsx",
      lineNumber: 93,
      columnNumber: 41
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Auth/Register/index.tsx",
    lineNumber: 35,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/pages/Auth/Register/index.tsx",
    lineNumber: 28,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/pages/Auth/Register/index.tsx",
    lineNumber: 27,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/pages/Auth/Register/index.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
});

// app/routes/auth/register.tsx
var import_request = __toESM(require_request());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Register() {
  const actionData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RegisterPage, { actionData }, void 0, false, {
    fileName: "app/routes/auth/register.tsx",
    lineNumber: 89,
    columnNumber: 10
  }, this);
}
export {
  Register as default
};
