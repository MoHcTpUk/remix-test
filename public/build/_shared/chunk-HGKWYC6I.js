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
  routes_default,
  styled_components_browser_esm_default,
  useApp
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  Form,
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

// app/components/entities/ButtonCreate/index.tsx
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ButtonCreate({
  variant,
  priority = "secondary",
  setSelectionCreate,
  setVariantCreate,
  fullwidth = false
}) {
  const {
    t,
    userContext
  } = useApp();
  const loc = useLocation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    variant === "resume" && (userContext.user.isAuthenticated ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      userContext.forms?.resume && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority, size: "S", fullwidth, onClick: () => {
        setVariantCreate?.("resume");
        setSelectionCreate?.(true);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: [
        " ",
        t("user:create_resume")
      ] }, void 0, true, {
        fileName: "app/components/entities/ButtonCreate/index.tsx",
        lineNumber: 31,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/entities/ButtonCreate/index.tsx",
        lineNumber: 27,
        columnNumber: 43
      }, this),
      !userContext.forms?.resume && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: routes_default.user.resume.create, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority, size: "S", fullwidth, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:create_resume") }, void 0, false, {
        fileName: "app/components/entities/ButtonCreate/index.tsx",
        lineNumber: 36,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/components/entities/ButtonCreate/index.tsx",
        lineNumber: 35,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/entities/ButtonCreate/index.tsx",
        lineNumber: 34,
        columnNumber: 44
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/ButtonCreate/index.tsx",
      lineNumber: 26,
      columnNumber: 68
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `${loc.pathname}${loc.search ? `${loc.search}&login=true` : "?login=true"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority, size: "S", fullwidth, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: [
      " ",
      t("user:create_resume")
    ] }, void 0, true, {
      fileName: "app/components/entities/ButtonCreate/index.tsx",
      lineNumber: 41,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/entities/ButtonCreate/index.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/entities/ButtonCreate/index.tsx",
      lineNumber: 39,
      columnNumber: 17
    }, this)),
    variant === "vacancy" && (userContext.user.isAuthenticated ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      userContext.forms?.vacancy && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority, size: "S", fullwidth, onClick: () => {
        setVariantCreate?.("vacancy");
        setSelectionCreate?.(true);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: [
        " ",
        t("user:create_vacancy")
      ] }, void 0, true, {
        fileName: "app/components/entities/ButtonCreate/index.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/entities/ButtonCreate/index.tsx",
        lineNumber: 46,
        columnNumber: 44
      }, this),
      !userContext.forms?.vacancy && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: routes_default.user.vacancy.create, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority, size: "S", fullwidth, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:create_vacancy") }, void 0, false, {
        fileName: "app/components/entities/ButtonCreate/index.tsx",
        lineNumber: 55,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/components/entities/ButtonCreate/index.tsx",
        lineNumber: 54,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/entities/ButtonCreate/index.tsx",
        lineNumber: 53,
        columnNumber: 45
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/ButtonCreate/index.tsx",
      lineNumber: 45,
      columnNumber: 69
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `${loc.pathname}${loc.search ? `${loc.search}&login=true` : "?login=true"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority, size: "S", fullwidth, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: [
      " ",
      t("user:create_vacancy")
    ] }, void 0, true, {
      fileName: "app/components/entities/ButtonCreate/index.tsx",
      lineNumber: 60,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/entities/ButtonCreate/index.tsx",
      lineNumber: 59,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/entities/ButtonCreate/index.tsx",
      lineNumber: 58,
      columnNumber: 17
    }, this))
  ] }, void 0, true, {
    fileName: "app/components/entities/ButtonCreate/index.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}

// app/components/entities/ModalSelectCreateForm/index.tsx
init_esm();

// app/components/entities/ModalSelectCreateForm/styles.tsx
var BoxContainer = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__BoxContainer",
  componentId: "sc-38rzwx-0"
})(["display:flex;flex-direction:column;width:100%;align-items:center;justify-content:center;gap:24px;width:100%;max-width:100%;@media (min-width:768px){max-width:388px;}@media (min-width:1024px){gap:32px;}"]);
var ButtonsControl = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__ButtonsControl",
  componentId: "sc-38rzwx-1"
})(["display:flex;flex-direction:column;align-items:center;width:100%;gap:16px;@media (min-width:768px){gap:24px;}"]);
var LabelRadio = styled_components_browser_esm_default.label.withConfig({
  displayName: "styles__LabelRadio",
  componentId: "sc-38rzwx-2"
})(["display:flex;flex-direction:row;align-items:center;gap:8px;cursor:pointer;input{height:16px;width:16px;margin-bottom:4px;}"]);

// app/components/entities/ModalSelectCreateForm/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function ModalSelectCreateForm({
  visibility,
  setVisibility,
  variant
}) {
  const {
    t
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal, { visibility, setVisibility, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textHeading3, style: {
      textAlign: "center"
    }, children: t("user:choose_an_action") }, void 0, false, {
      fileName: "app/components/entities/ModalSelectCreateForm/index.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this),
    variant === "resume" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, style: {
      textAlign: "center"
    }, children: t("user:you_already_have_an_unfinished_resume_what_would_you_like_to_do_now") }, void 0, false, {
      fileName: "app/components/entities/ModalSelectCreateForm/index.tsx",
      lineNumber: 29,
      columnNumber: 33
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, style: {
      textAlign: "center"
    }, children: t("user:you_already_have_an_unfinished_vacancy_what_would_you_like_to_do_now") }, void 0, false, {
      fileName: "app/components/entities/ModalSelectCreateForm/index.tsx",
      lineNumber: 33,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ButtonsControl, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "POST", action: "/actions/set-forms", style: {
        width: "100%"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { flexDirection: "column", width: "100%", gap: "10px", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LabelRadio, { htmlFor: "continue", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { name: "selection", value: "continue", type: "radio", id: "continue", defaultChecked: true }, void 0, false, {
            fileName: "app/components/entities/ModalSelectCreateForm/index.tsx",
            lineNumber: 45,
            columnNumber: 17
          }, this),
          variant === "resume" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:continue_filling_out_an_existing_resume") }, void 0, false, {
            fileName: "app/components/entities/ModalSelectCreateForm/index.tsx",
            lineNumber: 46,
            columnNumber: 41
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:continue_filling_out_an_existing_vacancy") }, void 0, false, {
            fileName: "app/components/entities/ModalSelectCreateForm/index.tsx",
            lineNumber: 48,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/entities/ModalSelectCreateForm/index.tsx",
          lineNumber: 44,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LabelRadio, { htmlFor: "delete", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { name: "selection", value: "delete", type: "radio", id: "delete" }, void 0, false, {
            fileName: "app/components/entities/ModalSelectCreateForm/index.tsx",
            lineNumber: 53,
            columnNumber: 17
          }, this),
          variant === "resume" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:create_a_new_resume") }, void 0, false, {
            fileName: "app/components/entities/ModalSelectCreateForm/index.tsx",
            lineNumber: 54,
            columnNumber: 41
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:create_a_new_vacancy") }, void 0, false, {
            fileName: "app/components/entities/ModalSelectCreateForm/index.tsx",
            lineNumber: 54,
            columnNumber: 124
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/entities/ModalSelectCreateForm/index.tsx",
          lineNumber: 52,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { priority: "primary", type: "submit", fullwidth: true, onClick: () => setVisibility(false), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("common:confirm") }, void 0, false, {
          fileName: "app/components/entities/ModalSelectCreateForm/index.tsx",
          lineNumber: 57,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/entities/ModalSelectCreateForm/index.tsx",
          lineNumber: 56,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "form", value: variant }, void 0, false, {
          fileName: "app/components/entities/ModalSelectCreateForm/index.tsx",
          lineNumber: 59,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/entities/ModalSelectCreateForm/index.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/entities/ModalSelectCreateForm/index.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { priority: "secondary", onClick: () => setVisibility(false), fullwidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("common:cancel") }, void 0, false, {
        fileName: "app/components/entities/ModalSelectCreateForm/index.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/entities/ModalSelectCreateForm/index.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/ModalSelectCreateForm/index.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/ModalSelectCreateForm/index.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/entities/ModalSelectCreateForm/index.tsx",
    lineNumber: 21,
    columnNumber: 10
  }, this);
}

export {
  ButtonCreate,
  ModalSelectCreateForm
};
//# sourceMappingURL=/build/_shared/chunk-HGKWYC6I.js.map
