import {
  EmptyState_default
} from "/build/_shared/chunk-DDNOQBKY.js";
import {
  Modal
} from "/build/_shared/chunk-ZQ6IGHYP.js";
import {
  Button_default
} from "/build/_shared/chunk-AF6HCNMF.js";
import {
  BoxInformationEnum,
  BoxInformation_default
} from "/build/_shared/chunk-D6JIAAYU.js";
import {
  VariantModalEnum
} from "/build/_shared/chunk-TSAGNYDI.js";
import {
  Text,
  TextVariantEnum,
  styled_components_browser_esm_default,
  useApp
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  Link,
  init_esm
} from "/build/_shared/chunk-IQJCUQRT.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/entities/ModalCompanyCreated/index.tsx
init_esm();

// app/components/entities/ModalCompanyCreated/styles.tsx
var ButtonContainer = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__ButtonContainer",
  componentId: "sc-1kmgf85-0"
})(["display:flex;flex-direction:column;gap:16px;width:100%;align-items:center;justify-content:center;a{width:100%;}@media (min-width:768px){flex-direction:row;a{width:fit-content;}}"]);

// app/components/entities/ModalCompanyCreated/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ModalCompanyCreated({
  visibility,
  setVisibility,
  company
}) {
  const {
    t
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal, { visibility, setVisibility, variant: VariantModalEnum.companyCreated, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState_default, { iconName: "emojiStar2", title: t("user:company_created"), text: t("user:your_company_has_been_successfully_created_on_upjob"), boxInfo: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxInformation_default, { variant: BoxInformationEnum.info, title: t("user:verification_is_required"), information: t("user:for_security_reasons_we_need_you_to_confirm_your_connection_with_the_company_and_verify_it"), noShadow: true }, void 0, false, {
    fileName: "app/components/entities/ModalCompanyCreated/index.tsx",
    lineNumber: 25,
    columnNumber: 153
  }, this), buttonControl: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "secondary", onClick: () => setVisibility(false), className: "growingButton", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: [
      t("common:close"),
      " "
    ] }, void 0, true, {
      fileName: "app/components/entities/ModalCompanyCreated/index.tsx",
      lineNumber: 27,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/entities/ModalCompanyCreated/index.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this),
    company && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: company || "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "primary", className: "growingButton", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: [
      t("user:to_company"),
      " "
    ] }, void 0, true, {
      fileName: "app/components/entities/ModalCompanyCreated/index.tsx",
      lineNumber: 31,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/components/entities/ModalCompanyCreated/index.tsx",
      lineNumber: 30,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/entities/ModalCompanyCreated/index.tsx",
      lineNumber: 29,
      columnNumber: 25
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/ModalCompanyCreated/index.tsx",
    lineNumber: 25,
    columnNumber: 389
  }, this) }, void 0, false, {
    fileName: "app/components/entities/ModalCompanyCreated/index.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/entities/ModalCompanyCreated/index.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}

export {
  ModalCompanyCreated
};
//# sourceMappingURL=/build/_shared/chunk-YTNBK2FE.js.map
