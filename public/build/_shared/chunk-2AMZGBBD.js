import {
  Modal
} from "/build/_shared/chunk-ZQ6IGHYP.js";
import {
  Button_default
} from "/build/_shared/chunk-AF6HCNMF.js";
import {
  Box,
  Text,
  TextVariantEnum,
  styled_components_browser_esm_default,
  useApp
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  Form,
  init_esm
} from "/build/_shared/chunk-IQJCUQRT.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/entities/ModalRequestConfirm/index.tsx
init_esm();

// app/components/entities/ModalRequestConfirm/styles.tsx
var BoxContainer = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__BoxContainer",
  componentId: "sc-14joiyp-0"
})(["display:flex;flex-direction:column;width:100%;align-items:center;justify-content:center;gap:16px;width:100%;max-width:100%;@media (min-width:768px){max-width:388px;}"]);
var BoxInput = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__BoxInput",
  componentId: "sc-14joiyp-1"
})(["width:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:center;border-radius:8px;border:1px solid ", ";padding:12px;.link{overflow:hidden;white-space:nowrap;}"], ({
  theme
}) => theme.user.borderCustomFieldData);
var BoxIcons = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__BoxIcons",
  componentId: "sc-14joiyp-2"
})(["overflow:auto;"]);
var IconsContainer = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__IconsContainer",
  componentId: "sc-14joiyp-3"
})(["display:flex;flex-direction:row;overflow:visible;min-width:max-content;gap:8px;"]);

// app/components/entities/ModalRequestConfirm/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ModalRequestConfirm({
  visibility,
  setVisibility,
  variant,
  id
}) {
  const {
    t,
    userContext
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal, { visibility, setVisibility, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textHeading3, children: t("user:send_request") }, void 0, false, {
      fileName: "app/components/entities/ModalRequestConfirm/index.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { style: {
      textAlign: "center"
    }, variant: TextVariantEnum.textBody1medium, children: variant === "resume" ? t("user:are_you_sure_you_want_to_send_this_resume") : t("user:are_you_sure_you_want_to_send_this_vacancy") }, void 0, false, {
      fileName: "app/components/entities/ModalRequestConfirm/index.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { gap: "24px", flexDirection: "column", width: "100%", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "secondary", fullwidth: true, onClick: () => setVisibility(!visibility), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("common:cancel") }, void 0, false, {
        fileName: "app/components/entities/ModalRequestConfirm/index.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/entities/ModalRequestConfirm/index.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", style: {
        width: "100%"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", value: id }, void 0, false, {
          fileName: "app/components/entities/ModalRequestConfirm/index.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "submit", fullwidth: true, priority: "primary", onClick: () => setVisibility(!visibility), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("common:yes") }, void 0, false, {
          fileName: "app/components/entities/ModalRequestConfirm/index.tsx",
          lineNumber: 44,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/entities/ModalRequestConfirm/index.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/entities/ModalRequestConfirm/index.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/ModalRequestConfirm/index.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/ModalRequestConfirm/index.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/entities/ModalRequestConfirm/index.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}

export {
  ModalRequestConfirm
};
//# sourceMappingURL=/build/_shared/chunk-2AMZGBBD.js.map
