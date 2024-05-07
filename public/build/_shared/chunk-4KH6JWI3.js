import {
  Field
} from "/build/_shared/chunk-X7YBBWQ4.js";
import {
  DataBox,
  EntityVariantEnum
} from "/build/_shared/chunk-5HXZ6U7H.js";
import {
  Box,
  Text,
  TextVariantEnum,
  getValueLang,
  useApp
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/entities/cardComponents/partCard/VacancyPartCardInfo/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function VacancyPartCardInfo({
  vacancy,
  variant
}) {
  const {
    theme,
    t,
    userContext
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataBox, { variant: EntityVariantEnum.vacancy, borderBottom: variant !== "response", borderTop: variant !== "response", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, color: theme.user.descriptionTextColor, children: t("user:district") }, void 0, false, {
        fileName: "app/components/entities/cardComponents/partCard/VacancyPartCardInfo/index.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: getValueLang(vacancy?.location?.city_name, userContext.language) }, void 0, false, {
        fileName: "app/components/entities/cardComponents/partCard/VacancyPartCardInfo/index.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/cardComponents/partCard/VacancyPartCardInfo/index.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, color: theme.user.descriptionTextColor, children: t("user:employment") }, void 0, false, {
        fileName: "app/components/entities/cardComponents/partCard/VacancyPartCardInfo/index.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", gap: "4px", children: vacancy?.vacancy_page?.employment_type_names?.map((employment) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: getValueLang(employment, userContext.language) }, employment.en, false, {
        fileName: "app/components/entities/cardComponents/partCard/VacancyPartCardInfo/index.tsx",
        lineNumber: 37,
        columnNumber: 76
      }, this)) }, void 0, false, {
        fileName: "app/components/entities/cardComponents/partCard/VacancyPartCardInfo/index.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/cardComponents/partCard/VacancyPartCardInfo/index.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, color: theme.user.descriptionTextColor, children: t("user:work_features") }, void 0, false, {
        fileName: "app/components/entities/cardComponents/partCard/VacancyPartCardInfo/index.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", gap: "4px", children: vacancy?.vacancy_page?.work_feature_names?.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: getValueLang(feature, userContext.language) }, feature.en, false, {
        fileName: "app/components/entities/cardComponents/partCard/VacancyPartCardInfo/index.tsx",
        lineNumber: 47,
        columnNumber: 70
      }, this)) }, void 0, false, {
        fileName: "app/components/entities/cardComponents/partCard/VacancyPartCardInfo/index.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/cardComponents/partCard/VacancyPartCardInfo/index.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/cardComponents/partCard/VacancyPartCardInfo/index.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}

export {
  VacancyPartCardInfo
};
//# sourceMappingURL=/build/_shared/chunk-4KH6JWI3.js.map
