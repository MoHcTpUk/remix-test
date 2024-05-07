import {
  BoxHeading,
  DataBox,
  HeadingInformation,
  PageVariantEnum,
  ResponseCardVariantEnum
} from "/build/_shared/chunk-5HXZ6U7H.js";
import {
  Box,
  Text,
  TextVariantEnum,
  getImageUrl,
  getSalary,
  getValueLang,
  useApp,
  useScreenWidth
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/entities/cardComponents/partCard/ResumePartCardHeading/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ResumePartCardHeading({
  resume,
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
      (variant !== "response" || widthScreen < 768 && variantResponseCard === ResponseCardVariantEnum.main) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: getImageUrl(resume?.general_information?.photo_uri), alt: "avatar" }, void 0, false, {
        fileName: "app/components/entities/cardComponents/partCard/ResumePartCardHeading/index.tsx",
        lineNumber: 27,
        columnNumber: 115
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadingInformation, { variantResponseCard, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", gap: widthScreen < 768 ? "4px" : "8px", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "title", variant: TextVariantEnum.textHeading2, children: resume?.job_position?.position }, void 0, false, {
            fileName: "app/components/entities/cardComponents/partCard/ResumePartCardHeading/index.tsx",
            lineNumber: 30,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, color: theme.user.descriptionTextColor, children: getValueLang(resume?.job_position?.specialization_name, userContext.language) }, void 0, false, {
            fileName: "app/components/entities/cardComponents/partCard/ResumePartCardHeading/index.tsx",
            lineNumber: 33,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/entities/cardComponents/partCard/ResumePartCardHeading/index.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        widthScreen >= 768 && (resume?.job_position?.salary_fixed || resume?.job_position?.salary_from && resume?.job_position?.salary_to) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: resume.job_position?.salary_from && resume.job_position?.salary_to ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "price", variant: TextVariantEnum.textHeading3, children: [
          resume.job_position?.salary_from,
          " - ",
          resume.job_position?.salary_to,
          "\xA0",
          getSalary(resume.job_position.currency_name?.en, resume.job_position.salary_payout_period_name?.en, userContext.language)
        ] }, void 0, true, {
          fileName: "app/components/entities/cardComponents/partCard/ResumePartCardHeading/index.tsx",
          lineNumber: 38,
          columnNumber: 87
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "price", variant: TextVariantEnum.textHeading3, children: [
          resume.job_position?.salary_fixed,
          "\xA0",
          getSalary(resume.job_position.currency_name?.en, resume.job_position.salary_payout_period_name?.en, userContext.language)
        ] }, void 0, true, {
          fileName: "app/components/entities/cardComponents/partCard/ResumePartCardHeading/index.tsx",
          lineNumber: 42,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/entities/cardComponents/partCard/ResumePartCardHeading/index.tsx",
          lineNumber: 37,
          columnNumber: 146
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/entities/cardComponents/partCard/ResumePartCardHeading/index.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/cardComponents/partCard/ResumePartCardHeading/index.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    widthScreen < 768 && (resume?.job_position?.salary_fixed || resume?.job_position?.salary_from && resume?.job_position?.salary_to) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataBox, { borderTop: variantResponseCard !== ResponseCardVariantEnum.heading, pageVariant: variant, borderBottom: widthScreen < 768 && variant === PageVariantEnum.response && variantResponseCard !== ResponseCardVariantEnum.heading, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: resume?.job_position?.salary_from && resume?.job_position?.salary_to ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "price", variant: TextVariantEnum.textHeading3, children: [
      resume?.job_position?.salary_from,
      " - ",
      resume?.job_position?.salary_to,
      "\xA0",
      getSalary(resume?.job_position?.currency_name?.en, resume?.job_position?.salary_payout_period_name?.en, userContext.language)
    ] }, void 0, true, {
      fileName: "app/components/entities/cardComponents/partCard/ResumePartCardHeading/index.tsx",
      lineNumber: 51,
      columnNumber: 87
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "price", variant: TextVariantEnum.textHeading3, children: [
      resume?.job_position?.salary_fixed,
      "\xA0",
      getSalary(resume?.job_position?.currency_name?.en, resume?.job_position?.salary_payout_period_name?.en, userContext.language)
    ] }, void 0, true, {
      fileName: "app/components/entities/cardComponents/partCard/ResumePartCardHeading/index.tsx",
      lineNumber: 55,
      columnNumber: 27
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/partCard/ResumePartCardHeading/index.tsx",
      lineNumber: 50,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/partCard/ResumePartCardHeading/index.tsx",
      lineNumber: 49,
      columnNumber: 141
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/cardComponents/partCard/ResumePartCardHeading/index.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}

export {
  ResumePartCardHeading
};
//# sourceMappingURL=/build/_shared/chunk-4FBXI3BA.js.map
