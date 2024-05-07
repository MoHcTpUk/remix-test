import {
  require_request
} from "/build/_shared/chunk-EISN5MP4.js";
import {
  CommonLayout
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
  styled_components_browser_esm_default,
  useApp
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  Form,
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

// app/routes/auth/reset-password.tsx
var import_cloudflare = __toESM(require_cloudflare());
init_esm();

// app/components/pages/Auth/ResetPassword/index.tsx
init_esm();
var import_react2 = __toESM(require_react());

// app/components/pages/Auth/ResetPassword/styles.ts
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
var BoxRadios = styled_components_browser_esm_default.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: center;
  }
`;
var RadioBtnWrapper = styled_components_browser_esm_default.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
var RadioBtn = styled_components_browser_esm_default.input`
  accent-color: ${({ theme }) => theme.auth.radioButtonColor};
  width: 20px;
  height: 20px;
`;

// app/components/pages/Auth/ResetPassword/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ResetPassword = (0, import_react2.memo)(({
  actionData
}) => {
  const {
    t,
    userContext
  } = useApp();
  const passwordRef = (0, import_react2.useRef)(null);
  const confirmPasswordRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    if (actionData?.fieldErrors?.password_confirm?.[userContext.language]) {
      confirmPasswordRef.current?.focus();
    } else if (actionData?.fieldErrors?.password?.[userContext.language]) {
      passwordRef.current?.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommonLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", action: "/auth/reset-password", style: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxForm, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textHeading3, style: {
      textAlign: "center"
    }, children: t("auth:new_password") }, void 0, false, {
      fileName: "app/components/pages/Auth/ResetPassword/index.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { htmlType: "password", placeholder: t("auth:enter_password"), id: "i_password", name: "password", variant: "password", "aria-invalid": actionData?.fieldErrors?.password?.[userContext.language] ? true : void 0, errorText: actionData?.fieldErrors?.password?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/Auth/ResetPassword/index.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { htmlType: "password", placeholder: t("auth:password_confirmation"), id: "i_password_confirmation", name: "password_confirm", "aria-invalid": actionData?.fieldErrors?.password_confirm?.[userContext.language] ? true : void 0, errorText: actionData?.fieldErrors?.password_confirm?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/Auth/ResetPassword/index.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "primary", fullwidth: true, type: "submit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:change_password") }, void 0, false, {
      fileName: "app/components/pages/Auth/ResetPassword/index.tsx",
      lineNumber: 47,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/pages/Auth/ResetPassword/index.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Auth/ResetPassword/index.tsx",
    lineNumber: 38,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/pages/Auth/ResetPassword/index.tsx",
    lineNumber: 31,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/pages/Auth/ResetPassword/index.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/Auth/ResetPassword/index.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
});

// app/routes/auth/reset-password.tsx
var import_request = __toESM(require_request());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Index() {
  const data = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ResetPassword, { actionData: data }, void 0, false, {
    fileName: "app/routes/auth/reset-password.tsx",
    lineNumber: 51,
    columnNumber: 10
  }, this);
}
export {
  Index as default
};
