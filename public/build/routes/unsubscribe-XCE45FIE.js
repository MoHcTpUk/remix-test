import {
  EmptyState_default
} from "/build/_shared/chunk-XQTDVHWG.js";
import {
  CommonLayout
} from "/build/_shared/chunk-OFCPSJ6G.js";
import "/build/_shared/chunk-YIHJ7OEM.js";
import "/build/_shared/chunk-TPPLNXCO.js";
import "/build/_shared/chunk-MPISASBV.js";
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
  routes_default,
  styled_components_browser_esm_default,
  useApp
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  Link,
  init_esm
} from "/build/_shared/chunk-JX76WC46.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6O7TW4X6.js";
import {
  __toESM
} from "/build/_shared/chunk-RFITDC3A.js";

// app/routes/unsubscribe.tsx
var import_cloudflare = __toESM(require_cloudflare());

// app/components/pages/Alerts/Unsubscribe/index.tsx
init_esm();
var import_react2 = __toESM(require_react());

// app/components/pages/Alerts/Unsubscribe/styles.ts
var Wrapper = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  padding: 80px 16px 0;
  & a,
  button {
    width: 100%;
  }

  @media (min-width: 768px) {
    padding: 96px 0;
    & a,
    button {
      width: fit-content;
      align-self: center;
    }
  }
  @media (min-width: 1024px) {
    padding: 104px 0;
  }
  @media (min-width: 1280px) {
    padding: 104px 0;
  }
`;

// app/components/pages/Alerts/Unsubscribe/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Unsubscribe() {
  const {
    t
  } = useApp();
  const [isUnsubscribed, setIsUnsubscribed] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState_default, { iconName: isUnsubscribed ? "emojiZzz" : "warning", title: isUnsubscribed === false ? `${t("user:unsubscribe_from_mailing_list")}` : `${t("user:you_have_unsubscribed_from_the_mailing_list")}`, text: isUnsubscribed === false ? `${t("user:please_click_the_link_below_to_confirm_that_you_want_to_unsubscribe")}` : `${t("user:thank_you_for_being_with_us_we_hope_our_letters_were_useful_to_you")}`, buttonControl: isUnsubscribed === false ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "primary", className: "growingButton", onClick: () => setIsUnsubscribed(true), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("common:unsubscribe") }, void 0, false, {
    fileName: "app/components/pages/Alerts/Unsubscribe/index.tsx",
    lineNumber: 17,
    columnNumber: 15
  }, this) }, void 0, false, {
    fileName: "app/components/pages/Alerts/Unsubscribe/index.tsx",
    lineNumber: 16,
    columnNumber: 454
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: routes_default.root, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "primary", className: "growingButton", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("common:to_the_main_page") }, void 0, false, {
    fileName: "app/components/pages/Alerts/Unsubscribe/index.tsx",
    lineNumber: 20,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/components/pages/Alerts/Unsubscribe/index.tsx",
    lineNumber: 19,
    columnNumber: 15
  }, this) }, void 0, false, {
    fileName: "app/components/pages/Alerts/Unsubscribe/index.tsx",
    lineNumber: 18,
    columnNumber: 25
  }, this) }, void 0, false, {
    fileName: "app/components/pages/Alerts/Unsubscribe/index.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/Alerts/Unsubscribe/index.tsx",
    lineNumber: 15,
    columnNumber: 10
  }, this);
}

// app/routes/unsubscribe.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CommonLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Unsubscribe, {}, void 0, false, {
    fileName: "app/routes/unsubscribe.tsx",
    lineNumber: 18,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/unsubscribe.tsx",
    lineNumber: 17,
    columnNumber: 10
  }, this);
}
export {
  Index as default
};
