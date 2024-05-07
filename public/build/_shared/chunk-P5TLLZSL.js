import {
  BoxHeading,
  DataBox,
  HeadingInformation,
  PageVariantEnum,
  ResponseCardVariantEnum
} from "/build/_shared/chunk-SWZFRHVX.js";
import {
  Box,
  DEFAULT_COMPANY_LOGO,
  Text,
  TextVariantEnum,
  getImageUrl,
  getSalary,
  useApp,
  useScreenWidth
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6O7TW4X6.js";
import {
  __toESM
} from "/build/_shared/chunk-RFITDC3A.js";

// app/components/entities/cardComponents/partCard/VacancyPartCardHeading/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function VacancyPartCardHeading({
  vacancy,
  variant,
  variantResponseCard
}) {
  const {
    theme,
    userContext
  } = useApp();
  const widthScreen = useScreenWidth();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxHeading, { pageVariant: variant, variantResponseCard, children: [
      (variant !== "response" || widthScreen < 768 && variantResponseCard === ResponseCardVariantEnum.main) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: vacancy?.company_logo_uri ? getImageUrl(vacancy?.company_logo_uri) : DEFAULT_COMPANY_LOGO, alt: "company logo" }, void 0, false, {
        fileName: "app/components/entities/cardComponents/partCard/VacancyPartCardHeading/index.tsx",
        lineNumber: 28,
        columnNumber: 115
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadingInformation, { variantResponseCard, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", gap: widthScreen < 768 ? "4px" : "8px", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "title", variant: TextVariantEnum.textHeading2, children: vacancy?.vacancy_page?.position }, void 0, false, {
            fileName: "app/components/entities/cardComponents/partCard/VacancyPartCardHeading/index.tsx",
            lineNumber: 32,
            columnNumber: 13
          }, this),
          vacancy?.contacts?.company_name && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, color: theme.user.descriptionTextColor, children: vacancy?.contacts?.company_name }, void 0, false, {
            fileName: "app/components/entities/cardComponents/partCard/VacancyPartCardHeading/index.tsx",
            lineNumber: 35,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/entities/cardComponents/partCard/VacancyPartCardHeading/index.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        widthScreen >= 768 && (vacancy?.vacancy_page?.salary_fixed || vacancy?.vacancy_page?.salary_from && vacancy?.vacancy_page?.salary_to) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: vacancy.vacancy_page?.salary_from && vacancy.vacancy_page?.salary_to ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "price", variant: TextVariantEnum.textHeading3, children: [
          vacancy.vacancy_page?.salary_from,
          " - ",
          vacancy.vacancy_page?.salary_to,
          "\xA0",
          getSalary(vacancy?.vacancy_page?.currency_name?.en, vacancy?.vacancy_page?.salary_payout_period_name?.en, userContext.language)
        ] }, void 0, true, {
          fileName: "app/components/entities/cardComponents/partCard/VacancyPartCardHeading/index.tsx",
          lineNumber: 40,
          columnNumber: 89
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "price", variant: TextVariantEnum.textHeading3, children: [
          vacancy.vacancy_page?.salary_fixed,
          "\xA0",
          getSalary(vacancy.vacancy_page.currency_name?.en, vacancy.vacancy_page.salary_payout_period_name?.en, userContext.language)
        ] }, void 0, true, {
          fileName: "app/components/entities/cardComponents/partCard/VacancyPartCardHeading/index.tsx",
          lineNumber: 44,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/entities/cardComponents/partCard/VacancyPartCardHeading/index.tsx",
          lineNumber: 39,
          columnNumber: 149
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/entities/cardComponents/partCard/VacancyPartCardHeading/index.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/cardComponents/partCard/VacancyPartCardHeading/index.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    widthScreen < 768 && (vacancy?.vacancy_page?.salary_fixed || vacancy?.vacancy_page?.salary_from && vacancy?.vacancy_page?.salary_to) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataBox, { borderTop: variantResponseCard !== ResponseCardVariantEnum.heading, pageVariant: variant, borderBottom: widthScreen < 768 && variant === PageVariantEnum.response && variantResponseCard !== ResponseCardVariantEnum.heading, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: vacancy?.vacancy_page?.salary_from && vacancy?.vacancy_page?.salary_to ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "price", variant: TextVariantEnum.textHeading3, children: [
      vacancy?.vacancy_page?.salary_from,
      " - ",
      vacancy?.vacancy_page?.salary_to,
      "\xA0",
      getSalary(vacancy?.vacancy_page?.currency_name?.en, vacancy?.vacancy_page?.salary_payout_period_name?.en, userContext.language)
    ] }, void 0, true, {
      fileName: "app/components/entities/cardComponents/partCard/VacancyPartCardHeading/index.tsx",
      lineNumber: 54,
      columnNumber: 89
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "price", variant: TextVariantEnum.textHeading3, children: [
      vacancy?.vacancy_page?.salary_fixed,
      "\xA0",
      getSalary(vacancy?.vacancy_page?.currency_name?.en, vacancy?.vacancy_page?.salary_payout_period_name?.en, userContext.language)
    ] }, void 0, true, {
      fileName: "app/components/entities/cardComponents/partCard/VacancyPartCardHeading/index.tsx",
      lineNumber: 58,
      columnNumber: 27
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/partCard/VacancyPartCardHeading/index.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/partCard/VacancyPartCardHeading/index.tsx",
      lineNumber: 52,
      columnNumber: 144
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/cardComponents/partCard/VacancyPartCardHeading/index.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}

export {
  VacancyPartCardHeading
};
