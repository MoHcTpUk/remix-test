import {
  Field
} from "/build/_shared/chunk-X7YBBWQ4.js";
import {
  DataBox
} from "/build/_shared/chunk-5HXZ6U7H.js";
import {
  Text,
  TextVariantEnum,
  calculateAge,
  calculateTotalDurationWorkExperience,
  getValueLang,
  useApp
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/entities/cardComponents/partCard/ResumePartCardInfo/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ResumePartCardInfo({
  resume,
  variant
}) {
  const {
    theme,
    t,
    userContext
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataBox, { borderBottom: variant !== "response", borderTop: variant !== "response", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, color: theme.user.descriptionTextColor, children: t("user:district") }, void 0, false, {
        fileName: "app/components/entities/cardComponents/partCard/ResumePartCardInfo/index.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: getValueLang(resume?.location?.city_name, userContext.language) }, void 0, false, {
        fileName: "app/components/entities/cardComponents/partCard/ResumePartCardInfo/index.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/cardComponents/partCard/ResumePartCardInfo/index.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, color: theme.user.descriptionTextColor, children: t("user:age") }, void 0, false, {
        fileName: "app/components/entities/cardComponents/partCard/ResumePartCardInfo/index.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: calculateAge(resume?.general_information?.birthdate?.en).toString() }, void 0, false, {
        fileName: "app/components/entities/cardComponents/partCard/ResumePartCardInfo/index.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/cardComponents/partCard/ResumePartCardInfo/index.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, color: theme.user.descriptionTextColor, children: t("user:work_experience") }, void 0, false, {
        fileName: "app/components/entities/cardComponents/partCard/ResumePartCardInfo/index.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: [
        calculateTotalDurationWorkExperience(resume?.total_work_experience_in_months, userContext.language),
        " "
      ] }, void 0, true, {
        fileName: "app/components/entities/cardComponents/partCard/ResumePartCardInfo/index.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/cardComponents/partCard/ResumePartCardInfo/index.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/cardComponents/partCard/ResumePartCardInfo/index.tsx",
    lineNumber: 21,
    columnNumber: 10
  }, this);
}

export {
  ResumePartCardInfo
};
//# sourceMappingURL=/build/_shared/chunk-TK7Q23CM.js.map
