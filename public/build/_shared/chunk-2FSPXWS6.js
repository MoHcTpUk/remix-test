import {
  BoxDataFields,
  BoxDataFieldsInner,
  SignInForRequest
} from "/build/_shared/chunk-R2BJLWHH.js";
import {
  BoxControlContainer
} from "/build/_shared/chunk-JTDZABLX.js";
import {
  VacancyCardEnum
} from "/build/_shared/chunk-B4CRX2YS.js";
import {
  BoxAvatar
} from "/build/_shared/chunk-Y237PHJ4.js";
import {
  DataField
} from "/build/_shared/chunk-QGLVK6XR.js";
import {
  CardContainer
} from "/build/_shared/chunk-OGIUXGZ2.js";
import {
  BoxHeading,
  DataBox,
  EntityVariantEnum,
  HeadingInformation,
  SizeCardVariantEnum
} from "/build/_shared/chunk-5HXZ6U7H.js";
import {
  BoxCard
} from "/build/_shared/chunk-EWP76DBX.js";
import {
  BoxDataChips
} from "/build/_shared/chunk-BKRWDH2A.js";
import {
  motion
} from "/build/_shared/chunk-47YKAHTX.js";
import {
  Box,
  DEFAULT_COMPANY_LOGO,
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

// app/components/entities/cardComponents/fullCard/VacancyFullCardAbout/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function VacancyFullCardAbout({
  vacancy
}) {
  const {
    t
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxDataFieldsInner, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, className: "title", children: t("user:vacancy_description") }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardAbout/index.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataField, { data: vacancy?.vacancy_page?.description }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardAbout/index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardAbout/index.tsx",
    lineNumber: 15,
    columnNumber: 10
  }, this);
}

// app/components/entities/cardComponents/fullCard/VacancyFullCardAdditional/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function VacancyFullCardAdditional({
  vacancy
}) {
  const {
    userContext,
    t
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxDataFieldsInner, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, className: "title", children: t("user:additionals") }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardAdditional/index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    vacancy?.additional_skills?.driver_license_ids?.[0] && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataField, { variant: "custom", label: t("user:driver_license"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { flexDirection: "row", flexWrap: "wrap", gap: "4px", children: vacancy?.additional_skills?.driver_license_names?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxDataChips, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: getValueLang(item, userContext.language) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardAdditional/index.tsx",
      lineNumber: 25,
      columnNumber: 17
    }, this) }, item.en, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardAdditional/index.tsx",
      lineNumber: 24,
      columnNumber: 76
    }, this)) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardAdditional/index.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardAdditional/index.tsx",
      lineNumber: 22,
      columnNumber: 63
    }, this),
    vacancy?.additional_skills?.other_licenses?.[0] && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataField, { variant: "custom", label: t("user:other_licenses"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { flexDirection: "row", flexWrap: "wrap", gap: "4px", children: vacancy?.additional_skills?.other_licenses?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxDataChips, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: item }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardAdditional/index.tsx",
      lineNumber: 34,
      columnNumber: 17
    }, this) }, item, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardAdditional/index.tsx",
      lineNumber: 33,
      columnNumber: 70
    }, this)) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardAdditional/index.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardAdditional/index.tsx",
      lineNumber: 31,
      columnNumber: 59
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardAdditional/index.tsx",
    lineNumber: 18,
    columnNumber: 10
  }, this);
}

// app/components/entities/cardComponents/fullCard/VacancyFullCardContacts/index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function VacancyFullCardContacts({
  vacancy
}) {
  const {
    t
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BoxDataFieldsInner, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, className: "title", children: t("user:vacancy_contacts") }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardContacts/index.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DataField, { label: t("user:contact_phone"), data: vacancy?.contacts?.contact_phone }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardContacts/index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DataField, { label: t("user:first_and_last_name"), data: `${vacancy?.contacts?.first_name || ""} ${vacancy?.contacts?.last_name || ""}` }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardContacts/index.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardContacts/index.tsx",
    lineNumber: 15,
    columnNumber: 10
  }, this);
}

// app/components/entities/cardComponents/fullCard/VacancyFullCardDate/index.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function VacancyFullCardDate({
  vacancy,
  variant
}) {
  const {
    theme,
    t,
    userContext
  } = useApp();
  const widthScreen = useScreenWidth();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { flexDirection: "row", gap: "8px", padding: widthScreen > 768 && variant !== "response" ? "16px 0 0" : "8px 0 0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:vacancy_date") }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardDate/index.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, color: theme.accentTextColor, children: getValueLang(vacancy?.created_at, userContext.language) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardDate/index.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardDate/index.tsx",
    lineNumber: 21,
    columnNumber: 10
  }, this);
}

// app/components/entities/cardComponents/fullCard/VacancyFullCardHeading/index.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function VacancyFullCardHeading({
  vacancy
}) {
  const {
    theme,
    userContext
  } = useApp();
  const widthScreen = useScreenWidth();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BoxHeading, { variant: EntityVariantEnum.vacancy, className: "fullCard", sizeVariant: SizeCardVariantEnum.full, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BoxAvatar, { variant: "search", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: vacancy?.company_logo_uri ? getImageUrl(vacancy?.company_logo_uri) : DEFAULT_COMPANY_LOGO, alt: "company logo" }, void 0, false, {
        fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardHeading/index.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardHeading/index.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(HeadingInformation, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { className: "title", variant: TextVariantEnum.textHeading2, children: vacancy?.vacancy_page?.position }, void 0, false, {
          fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardHeading/index.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        vacancy?.contacts?.company_name && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, color: theme.user.descriptionTextColor, children: vacancy?.contacts?.company_name }, void 0, false, {
          fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardHeading/index.tsx",
          lineNumber: 34,
          columnNumber: 47
        }, this),
        widthScreen >= 768 && (vacancy?.vacancy_page?.salary_fixed || vacancy?.vacancy_page?.salary_from && vacancy?.vacancy_page?.salary_to) && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Box, { children: vacancy.vacancy_page?.salary_from && vacancy.vacancy_page?.salary_to ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { className: "price", variant: TextVariantEnum.textHeading3, children: [
          vacancy.vacancy_page?.salary_from,
          " - ",
          vacancy.vacancy_page?.salary_to,
          "\xA0",
          getSalary(vacancy?.vacancy_page?.currency_name?.en, vacancy?.vacancy_page?.salary_payout_period_name?.en, userContext.language)
        ] }, void 0, true, {
          fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardHeading/index.tsx",
          lineNumber: 38,
          columnNumber: 89
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { className: "price", variant: TextVariantEnum.textHeading3, children: [
          vacancy.vacancy_page?.salary_fixed,
          "\xA0",
          getSalary(vacancy.vacancy_page.currency_name?.en, vacancy.vacancy_page.salary_payout_period_name?.en, userContext.language)
        ] }, void 0, true, {
          fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardHeading/index.tsx",
          lineNumber: 42,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardHeading/index.tsx",
          lineNumber: 37,
          columnNumber: 149
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardHeading/index.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardHeading/index.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    widthScreen < 768 && (vacancy?.vacancy_page?.salary_fixed || vacancy?.vacancy_page?.salary_from && vacancy?.vacancy_page?.salary_to) && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataBox, { variantSize: SizeCardVariantEnum.full, borderBottom: widthScreen < 768, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Box, { children: vacancy?.vacancy_page?.salary_from && vacancy?.vacancy_page?.salary_to ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { className: "price", variant: TextVariantEnum.textHeading3, children: [
      vacancy?.vacancy_page?.salary_from,
      " - ",
      vacancy?.vacancy_page?.salary_to,
      "\xA0",
      getSalary(vacancy?.vacancy_page?.currency_name?.en, vacancy?.vacancy_page?.salary_payout_period_name?.en, userContext.language)
    ] }, void 0, true, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardHeading/index.tsx",
      lineNumber: 52,
      columnNumber: 89
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { className: "price", variant: TextVariantEnum.textHeading3, children: [
      vacancy?.vacancy_page?.salary_fixed,
      "\xA0",
      getSalary(vacancy?.vacancy_page?.currency_name?.en, vacancy?.vacancy_page?.salary_payout_period_name?.en, userContext.language)
    ] }, void 0, true, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardHeading/index.tsx",
      lineNumber: 56,
      columnNumber: 27
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardHeading/index.tsx",
      lineNumber: 51,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardHeading/index.tsx",
      lineNumber: 50,
      columnNumber: 144
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardHeading/index.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}

// app/components/entities/cardComponents/fullCard/VacancyFullCardInfo/index.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function VacancyFullCardInfo({
  vacancy
}) {
  const {
    userContext,
    t
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(BoxDataFieldsInner, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, className: "title", children: t("user:job_information") }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardInfo/index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataField, { label: t("user:specialization"), data: getValueLang(vacancy?.vacancy_page?.specialization_name, userContext.language) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardInfo/index.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataField, { variant: "custom", label: t("user:employment"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Box, { flexDirection: "row", gap: "4px", flexWrap: "wrap", children: vacancy?.vacancy_page?.employment_type_names?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(BoxDataChips, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: getValueLang(item, userContext.language) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardInfo/index.tsx",
      lineNumber: 26,
      columnNumber: 15
    }, this) }, item.en, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardInfo/index.tsx",
      lineNumber: 25,
      columnNumber: 70
    }, this)) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardInfo/index.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardInfo/index.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataField, { variant: "custom", label: t("user:work_features"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Box, { flexDirection: "row", gap: "4px", flexWrap: "wrap", children: vacancy?.vacancy_page?.work_feature_names?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(BoxDataChips, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: getValueLang(item, userContext.language) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardInfo/index.tsx",
      lineNumber: 35,
      columnNumber: 15
    }, this) }, item.en, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardInfo/index.tsx",
      lineNumber: 34,
      columnNumber: 67
    }, this)) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardInfo/index.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardInfo/index.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    vacancy?.requirements?.education?.length && vacancy?.requirements?.education?.[0].education_id && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataField, { variant: "custom", label: t("user:education"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Box, { flexDirection: "column", flexWrap: "wrap", gap: "8px", children: vacancy?.requirements?.education?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataField, { data: `${getValueLang(item.specialization_name, userContext.language) || ""}
                (${getValueLang(item.level_name, userContext.language) || ""} -
                ${getValueLang(item.education_name, userContext.language) || ""})` }, item.specialization_id, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardInfo/index.tsx",
      lineNumber: 44,
      columnNumber: 62
    }, this)) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardInfo/index.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardInfo/index.tsx",
      lineNumber: 42,
      columnNumber: 106
    }, this),
    vacancy?.requirements?.work_experience?.length && vacancy?.requirements?.work_experience?.[0].work_experience_id && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataField, { variant: "custom", label: t("user:work_experience"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Box, { flexDirection: "column", flexWrap: "wrap", gap: "8px", children: vacancy?.requirements?.work_experience?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataField, { data: `${getValueLang(item.specialization_name, userContext.language) || ""}
                  (${getValueLang(item.work_experience_name, userContext.language) || ""})
                  ${getValueLang(item.period_of_work_name, userContext.language) || ""}` }, item.specialization_id, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardInfo/index.tsx",
      lineNumber: 52,
      columnNumber: 68
    }, this)) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardInfo/index.tsx",
      lineNumber: 51,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardInfo/index.tsx",
      lineNumber: 50,
      columnNumber: 124
    }, this),
    vacancy?.requirements?.language?.length && vacancy?.requirements?.language?.[0].language_id && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataField, { variant: "custom", label: t("user:language"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Box, { flexDirection: "column", flexWrap: "wrap", gap: "8px", children: vacancy?.requirements?.language?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataField, { data: `${getValueLang(item.language_name, userContext.language) || ""}
                (${getValueLang(item.level_name, userContext.language) || ""} -
                ${getValueLang(item.language_knowledge_name, userContext.language) || ""})` }, item.language_id, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardInfo/index.tsx",
      lineNumber: 60,
      columnNumber: 61
    }, this)) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardInfo/index.tsx",
      lineNumber: 59,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardInfo/index.tsx",
      lineNumber: 58,
      columnNumber: 103
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardInfo/index.tsx",
    lineNumber: 18,
    columnNumber: 10
  }, this);
}

// app/components/entities/cardComponents/fullCard/VacancyFullCardLocation/index.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
function VacancyFullCardLocation({
  vacancy
}) {
  const {
    userContext,
    t
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(BoxDataFieldsInner, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, className: "title", children: t("user:location") }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardLocation/index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Box, { gap: "24px", children: [
      vacancy?.location?.country_id && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DataField, { label: t("user:country"), data: getValueLang(vacancy?.location?.country_name, userContext.language) }, void 0, false, {
        fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardLocation/index.tsx",
        lineNumber: 23,
        columnNumber: 43
      }, this),
      vacancy?.location?.region_id && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DataField, { label: t("user:province"), data: getValueLang(vacancy?.location?.region_name, userContext.language) }, void 0, false, {
        fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardLocation/index.tsx",
        lineNumber: 24,
        columnNumber: 42
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardLocation/index.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    vacancy?.location?.city_id && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DataField, { label: t("user:district"), data: getValueLang(vacancy?.location?.city_name, userContext.language) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardLocation/index.tsx",
      lineNumber: 26,
      columnNumber: 38
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardLocation/index.tsx",
    lineNumber: 18,
    columnNumber: 10
  }, this);
}

// app/components/entities/cardComponents/fullCard/VacancyFullCardSkills/index.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
function VacancyFullCardSkills({
  vacancy
}) {
  const {
    userContext,
    t
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(BoxDataFieldsInner, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, className: "title", children: t("user:skills") }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardSkills/index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DataField, { variant: "custom", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Box, { flexDirection: "row", flexWrap: "wrap", gap: "4px", children: vacancy?.additional_skills?.skill_names?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(BoxDataChips, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: getValueLang(item, userContext.language) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardSkills/index.tsx",
      lineNumber: 25,
      columnNumber: 15
    }, this) }, item.en, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardSkills/index.tsx",
      lineNumber: 24,
      columnNumber: 65
    }, this)) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardSkills/index.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardSkills/index.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/cardComponents/fullCard/VacancyFullCardSkills/index.tsx",
    lineNumber: 18,
    columnNumber: 10
  }, this);
}

// app/components/entities/cardWidgets/VacancyFullCard/index.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
function VacancyFullCardWidget({
  vacancy,
  dictionaries,
  handleRequest,
  stateResponse,
  typeResponse,
  variant,
  status,
  responseId,
  responseAction
}) {
  const {
    userContext
  } = useApp();
  const widthScreen = useScreenWidth();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(BoxCard, { nameCard: VacancyCardEnum.vacancy, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(CardContainer, { as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, transition: {
    type: "spring",
    bounce: 0,
    duration: 0.4
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(VacancyFullCardHeading, { vacancy }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/VacancyFullCard/index.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(BoxDataFields, { variant: EntityVariantEnum.vacancy, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Box, { flexDirection: "column", children: [
        status && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Box, { padding: "16px 0 0", width: "fit-content", children: status }, void 0, false, {
          fileName: "app/components/entities/cardWidgets/VacancyFullCard/index.tsx",
          lineNumber: 58,
          columnNumber: 24
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(VacancyFullCardDate, { vacancy, variant }, void 0, false, {
          fileName: "app/components/entities/cardWidgets/VacancyFullCard/index.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/entities/cardWidgets/VacancyFullCard/index.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      vacancy?.location?.country_id && vacancy?.location?.region_id && vacancy?.location?.city_id && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(VacancyFullCardLocation, { vacancy }, void 0, false, {
        fileName: "app/components/entities/cardWidgets/VacancyFullCard/index.tsx",
        lineNumber: 64,
        columnNumber: 107
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(VacancyFullCardContacts, { vacancy }, void 0, false, {
        fileName: "app/components/entities/cardWidgets/VacancyFullCard/index.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(VacancyFullCardInfo, { vacancy }, void 0, false, {
        fileName: "app/components/entities/cardWidgets/VacancyFullCard/index.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      vacancy?.additional_skills?.skill_ids && vacancy?.additional_skills?.skill_ids?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(VacancyFullCardSkills, { vacancy }, void 0, false, {
        fileName: "app/components/entities/cardWidgets/VacancyFullCard/index.tsx",
        lineNumber: 69,
        columnNumber: 106
      }, this),
      (vacancy?.additional_skills?.driver_license_ids?.[0] || vacancy?.additional_skills?.other_licenses?.[0]) && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(VacancyFullCardAdditional, { vacancy }, void 0, false, {
        fileName: "app/components/entities/cardWidgets/VacancyFullCard/index.tsx",
        lineNumber: 71,
        columnNumber: 120
      }, this),
      vacancy?.vacancy_page?.description && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(VacancyFullCardAbout, { vacancy }, void 0, false, {
        fileName: "app/components/entities/cardWidgets/VacancyFullCard/index.tsx",
        lineNumber: 73,
        columnNumber: 50
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/cardWidgets/VacancyFullCard/index.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(BoxControlContainer, { variant, typeEntity: EntityVariantEnum.vacancy, id: vacancy?.id, responseId, typeCard: SizeCardVariantEnum.full, handleRequest, stateResponse, typeResponse, responseAction }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/VacancyFullCard/index.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this),
    !userContext?.user?.isAuthenticated && widthScreen >= 1280 && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(SignInForRequest, { variant: "vacancy" }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/VacancyFullCard/index.tsx",
      lineNumber: 78,
      columnNumber: 72
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/cardWidgets/VacancyFullCard/index.tsx",
    lineNumber: 43,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/entities/cardWidgets/VacancyFullCard/index.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}

export {
  VacancyFullCardWidget
};
//# sourceMappingURL=/build/_shared/chunk-2FSPXWS6.js.map
