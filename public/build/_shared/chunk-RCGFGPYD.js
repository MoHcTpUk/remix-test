import {
  Modal
} from "/build/_shared/chunk-T7KDPY4G.js";
import {
  Button_default
} from "/build/_shared/chunk-QD72PUQI.js";
import {
  Close_default,
  ModalCloseButton,
  VariantModalEnum
} from "/build/_shared/chunk-4SQREHPC.js";
import {
  FONT_SIZES_DESC,
  FONT_WEIGHTS_DESC,
  LINE_HEIGHTS_DESC,
  Text,
  TextVariantEnum,
  styled_components_browser_esm_default,
  useApp
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  Form,
  init_esm,
  useMatches
} from "/build/_shared/chunk-JX76WC46.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6O7TW4X6.js";
import {
  __toESM
} from "/build/_shared/chunk-RFITDC3A.js";

// app/components/entities/ModalConfirmDelete/index.tsx
init_esm();

// app/components/entities/ModalConfirmDelete/styles.tsx
var BoxContainer = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__BoxContainer",
  componentId: "sc-1t1zl5b-0"
})(["display:flex;flex-direction:column;width:100%;align-items:start;justify-content:center;gap:16px;max-width:100%;@media (min-width:768px){gap:24px;}"]);
var ButtonsControl = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__ButtonsControl",
  componentId: "sc-1t1zl5b-1"
})(["display:flex;flex-direction:column;align-items:center;justify-content:flex-end;width:100%;gap:16px;& form{width:100%;}@media (min-width:768px){flex-direction:row;& form{width:fit-content;}}"]);
var TextWrapper = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__TextWrapper",
  componentId: "sc-1t1zl5b-2"
})(["padding:8px 0;"]);
var HeaderWrapper = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__HeaderWrapper",
  componentId: "sc-1t1zl5b-3"
})(["display:flex;flex-direction:row;"]);
var TitleWrapper = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__TitleWrapper",
  componentId: "sc-1t1zl5b-4"
})(["display:flex;align-items:center;width:100%;padding-top:8px;@media (min-width:768px){align-items:flex-start;& span{font-size:", ";font-weight:", ";line-height:", ";}}"], FONT_SIZES_DESC[TextVariantEnum.textHeading3], FONT_WEIGHTS_DESC[TextVariantEnum.textHeading3], LINE_HEIGHTS_DESC[TextVariantEnum.textHeading3]);

// app/components/entities/ModalConfirmDelete/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ModalConfirmDelete({
  visibility,
  setVisibility,
  id
}) {
  const {
    t,
    theme
  } = useApp();
  const matches = useMatches();
  const resumeMatches = matches.some((m) => m.id === "routes/user/resume");
  const vacancyMatches = matches.some((m) => m.id === "routes/user/vacancy");
  const companyMatches = matches.some((m) => m.id === "routes/user/company");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal, { visibility, setVisibility, variant: VariantModalEnum.confirmDelete, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderWrapper, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleWrapper, { children: [
        resumeMatches && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, children: t("user:delete_resume") }, void 0, false, {
          fileName: "app/components/entities/ModalConfirmDelete/index.tsx",
          lineNumber: 32,
          columnNumber: 31
        }, this),
        vacancyMatches && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, children: t("user:delete_vacancy") }, void 0, false, {
          fileName: "app/components/entities/ModalConfirmDelete/index.tsx",
          lineNumber: 33,
          columnNumber: 32
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/entities/ModalConfirmDelete/index.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalCloseButton, { onClick: () => setVisibility(!visibility), variant: "withHeader", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Close_default, { color: theme.modal.svgColor }, void 0, false, {
        fileName: "app/components/entities/ModalConfirmDelete/index.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/entities/ModalConfirmDelete/index.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/ModalConfirmDelete/index.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextWrapper, { children: [
      resumeMatches && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, children: t("user:are_you_sure_you_want_to_delete_this_resume") }, void 0, false, {
        fileName: "app/components/entities/ModalConfirmDelete/index.tsx",
        lineNumber: 41,
        columnNumber: 29
      }, this),
      vacancyMatches && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, children: t("user:are_you_sure_you_want_to_delete_this_vacancy") }, void 0, false, {
        fileName: "app/components/entities/ModalConfirmDelete/index.tsx",
        lineNumber: 44,
        columnNumber: 30
      }, this),
      companyMatches && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, children: t("user:are_you_sure_you_want_to_delete_this_verified_company_and_all_vacancies_related_to_it") }, void 0, false, {
        fileName: "app/components/entities/ModalConfirmDelete/index.tsx",
        lineNumber: 47,
        columnNumber: 30
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/ModalConfirmDelete/index.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonsControl, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "DELETE", preventScrollReset: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", value: id }, void 0, false, {
          fileName: "app/components/entities/ModalConfirmDelete/index.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "secondary", value: "delete", name: "action", className: "growingButton", type: "submit", onClick: () => setVisibility(false), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("common:delete") }, void 0, false, {
          fileName: "app/components/entities/ModalConfirmDelete/index.tsx",
          lineNumber: 56,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/entities/ModalConfirmDelete/index.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/entities/ModalConfirmDelete/index.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "primary", onClick: () => setVisibility(false), className: "growingButton", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("common:cancel") }, void 0, false, {
        fileName: "app/components/entities/ModalConfirmDelete/index.tsx",
        lineNumber: 60,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/entities/ModalConfirmDelete/index.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/ModalConfirmDelete/index.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/ModalConfirmDelete/index.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/entities/ModalConfirmDelete/index.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}

export {
  BoxContainer,
  ButtonsControl,
  TextWrapper,
  HeaderWrapper,
  TitleWrapper,
  ModalConfirmDelete
};
