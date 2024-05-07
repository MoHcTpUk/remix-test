import {
  FieldsWrapper,
  VacancyAdditionalEdit,
  VacancyComponentCardEdit,
  VacancyContactsEdit,
  VacancyLocationEdit,
  VacancyRequirementsEdit,
  VacancyResponsesEdit,
  Wrapper
} from "/build/_shared/chunk-EYBD4HCQ.js";
import {
  BoxLabel,
  SwitcherBox
} from "/build/_shared/chunk-XQMFZUMJ.js";
import {
  BoxSetting
} from "/build/_shared/chunk-TPK4GNST.js";
import "/build/_shared/chunk-O6PFKXUU.js";
import {
  VacancyCardEnum
} from "/build/_shared/chunk-DUOL7BQP.js";
import {
  DataField
} from "/build/_shared/chunk-5HZIPPOH.js";
import {
  CardContainer
} from "/build/_shared/chunk-LEK3IZDX.js";
import {
  require_message
} from "/build/_shared/chunk-ULBVCC7P.js";
import {
  require_lib
} from "/build/_shared/chunk-VYIZRLIF.js";
import {
  require_request
} from "/build/_shared/chunk-EISN5MP4.js";
import "/build/_shared/chunk-BXFA34ZG.js";
import {
  BoxCard
} from "/build/_shared/chunk-6J6FMBZW.js";
import {
  BoxDataChips
} from "/build/_shared/chunk-XPTAWHVK.js";
import {
  Switcher
} from "/build/_shared/chunk-TPPLNXCO.js";
import "/build/_shared/chunk-MPISASBV.js";
import "/build/_shared/chunk-LQ4YPZYM.js";
import "/build/_shared/chunk-QD72PUQI.js";
import "/build/_shared/chunk-GEH4KW55.js";
import {
  BoxInformationEnum,
  BoxInformation_default
} from "/build/_shared/chunk-MYIBCQY6.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-ASV7D43C.js";
import "/build/_shared/chunk-4SQREHPC.js";
import {
  motion
} from "/build/_shared/chunk-NC5IH6SX.js";
import {
  Box,
  Text,
  TextVariantEnum,
  findCompanyById,
  getValueFromDictionaries,
  getValueLang,
  useApp,
  useCheckIncompleteness,
  useScreenWidth,
  validate_default
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  Form,
  init_esm,
  useActionData,
  useLoaderData
} from "/build/_shared/chunk-JX76WC46.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6O7TW4X6.js";
import {
  __toESM
} from "/build/_shared/chunk-RFITDC3A.js";

// app/routes/user/vacancy.$id.tsx
var import_cloudflare = __toESM(require_cloudflare());
init_esm();
var import_qs = __toESM(require_lib());

// app/components/pages/User/Vacancies/Vacancy/index.tsx
var import_react7 = __toESM(require_react());

// app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/index.tsx
init_esm();

// app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/VacancyAdditionalData.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function VacancyAdditionalData({
  editCard,
  setEditCard,
  vacancy,
  dictionaries
}) {
  const {
    t,
    userContext
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxCard, { title: t("user:additional_information"), withEditButton: true, nameCard: VacancyCardEnum.additional, editCard, setEditCard, children: vacancy?.additional_skills && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContainer, { as: motion.div, initial: {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataField, { variant: "custom", label: t("user:skills"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "row", flexWrap: "wrap", gap: "4px", children: vacancy?.additional_skills?.skill_ids?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxDataChips, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: validate_default(item || "") ? getValueFromDictionaries(dictionaries?.skills, item, userContext.language) : item }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/VacancyAdditionalData.tsx",
      lineNumber: 45,
      columnNumber: 19
    }, this) }, item, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/VacancyAdditionalData.tsx",
      lineNumber: 44,
      columnNumber: 67
    }, this)) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/VacancyAdditionalData.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/VacancyAdditionalData.tsx",
      lineNumber: 42,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataField, { variant: "custom", label: t("user:driver_license"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "row", flexWrap: "wrap", gap: "4px", children: vacancy?.additional_skills?.driver_license_ids?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxDataChips, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: getValueFromDictionaries(dictionaries?.drivingLicenses, item, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/VacancyAdditionalData.tsx",
      lineNumber: 54,
      columnNumber: 19
    }, this) }, item, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/VacancyAdditionalData.tsx",
      lineNumber: 53,
      columnNumber: 76
    }, this)) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/VacancyAdditionalData.tsx",
      lineNumber: 52,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/VacancyAdditionalData.tsx",
      lineNumber: 51,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataField, { variant: "custom", label: t("user:other_licenses"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "row", flexWrap: "wrap", gap: "4px", children: Array.isArray(vacancy?.additional_skills?.other_licenses) ? vacancy?.additional_skills?.other_licenses?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxDataChips, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: item }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/VacancyAdditionalData.tsx",
      lineNumber: 63,
      columnNumber: 23
    }, this) }, item, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/VacancyAdditionalData.tsx",
      lineNumber: 62,
      columnNumber: 132
    }, this)) : vacancy?.additional_skills?.other_licenses && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxDataChips, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: vacancy?.additional_skills?.other_licenses }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/VacancyAdditionalData.tsx",
      lineNumber: 65,
      columnNumber: 23
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/VacancyAdditionalData.tsx",
      lineNumber: 64,
      columnNumber: 86
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/VacancyAdditionalData.tsx",
      lineNumber: 61,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/VacancyAdditionalData.tsx",
      lineNumber: 60,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/VacancyAdditionalData.tsx",
    lineNumber: 31,
    columnNumber: 38
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/VacancyAdditionalData.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function VacancyAdditional({
  editCard,
  setEditCard,
  vacancy,
  dictionaries,
  actionData
}) {
  return editCard === VacancyCardEnum.additional ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "PATCH", style: {
    width: "100%"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(VacancyAdditionalEdit, { editCard, setEditCard, vacancy, dictionaries, actionData }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/index.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/index.tsx",
    lineNumber: 22,
    columnNumber: 52
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(VacancyAdditionalData, { editCard, setEditCard, vacancy, dictionaries }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/index.tsx",
    lineNumber: 26,
    columnNumber: 15
  }, this);
}

// app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/index.tsx
init_esm();

// app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardData.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function VacancyComponentCardData({
  editCard,
  setEditCard,
  vacancy,
  dictionaries
}) {
  const {
    t,
    userContext
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BoxCard, { title: t("user:vacancy"), withEditButton: true, nameCard: VacancyCardEnum.vacancy, editCard, setEditCard, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardContainer, { as: motion.div, initial: {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DataField, { label: t("user:specialization"), data: getValueLang(vacancy?.vacancy_page?.specialization_name, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardData.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DataField, { label: t("user:position"), data: vacancy?.vacancy_page?.position }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardData.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DataField, { variant: "custom", label: t("user:employment"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { flexDirection: "row", gap: "4px", flexWrap: "wrap", children: vacancy?.vacancy_page?.employment_type_names?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BoxDataChips, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: getValueLang(item, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardData.tsx",
      lineNumber: 46,
      columnNumber: 17
    }, this) }, item.en, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardData.tsx",
      lineNumber: 45,
      columnNumber: 72
    }, this)) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardData.tsx",
      lineNumber: 44,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardData.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DataField, { variant: "custom", label: t("user:work_features"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { flexDirection: "row", gap: "4px", flexWrap: "wrap", children: vacancy?.vacancy_page?.work_feature_ids?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BoxDataChips, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: getValueFromDictionaries(dictionaries?.workfeatures, item, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardData.tsx",
      lineNumber: 55,
      columnNumber: 17
    }, this) }, item, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardData.tsx",
      lineNumber: 54,
      columnNumber: 67
    }, this)) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardData.tsx",
      lineNumber: 53,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardData.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DataField, { label: t("user:salary_fixed"), data: vacancy?.vacancy_page?.salary_fixed?.toString() || "" }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardData.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DataField, { label: t("user:salary"), data: vacancy?.vacancy_page?.salary_from ? `${t("user:from")} ${vacancy?.vacancy_page?.salary_from || ""} - ${vacancy?.vacancy_page?.salary_to || ""}` : "" }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardData.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DataField, { label: t("user:currency"), data: getValueFromDictionaries(dictionaries?.currency, vacancy?.vacancy_page?.currency_id, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardData.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DataField, { label: t("user:description"), data: vacancy?.vacancy_page?.description }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardData.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardData.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardData.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/index.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function VacancyComponentCard({
  editCard,
  setEditCard,
  vacancy,
  dictionaries,
  actionData
}) {
  return editCard === VacancyCardEnum.vacancy ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form, { method: "POST", style: {
    width: "100%"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(VacancyComponentCardEdit, { editCard, setEditCard, vacancy, dictionaries, actionData }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/index.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/index.tsx",
    lineNumber: 22,
    columnNumber: 49
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(VacancyComponentCardData, { editCard, setEditCard, vacancy, dictionaries }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/index.tsx",
    lineNumber: 26,
    columnNumber: 15
  }, this);
}

// app/components/pages/User/Vacancies/Vacancy/components/VacancyContacts/index.tsx
init_esm();

// app/components/pages/User/Vacancies/Vacancy/components/VacancyContacts/VacancyContactsData.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function VacancyContactsData({
  editCard,
  setEditCard,
  vacancy,
  dictionaries,
  companies
}) {
  const {
    t,
    userContext
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BoxCard, { title: t("user:vacancy_contacts"), withEditButton: true, nameCard: VacancyCardEnum.employer, editCard, setEditCard, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CardContainer, { as: motion.div, initial: {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataField, { label: t("user:company_name"), data: findCompanyById(vacancy?.contacts?.company_id, companies)?.name }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyContacts/VacancyContactsData.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataField, { label: t("user:contact_phone"), data: vacancy?.contacts?.contact_phone }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyContacts/VacancyContactsData.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataField, { label: t("user:first_name"), data: vacancy?.contacts?.first_name }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyContacts/VacancyContactsData.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataField, { label: t("user:last_name"), data: vacancy?.contacts?.last_name }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyContacts/VacancyContactsData.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataField, { label: t("user:how_did_you_know_about_us"), data: getValueFromDictionaries(dictionaries?.sources, vacancy?.contacts?.source_of_discovery_id, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyContacts/VacancyContactsData.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyContacts/VacancyContactsData.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyContacts/VacancyContactsData.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Vacancies/Vacancy/components/VacancyContacts/index.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function VacancyContacts({
  editCard,
  setEditCard,
  vacancy,
  dictionaries,
  companies,
  actionData
}) {
  return editCard === VacancyCardEnum.employer ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form, { method: "PATCH", style: {
    width: "100%"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(VacancyContactsEdit, { editCard, setEditCard, vacancy, dictionaries, companies, actionData }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyContacts/index.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyContacts/index.tsx",
    lineNumber: 25,
    columnNumber: 50
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(VacancyContactsData, { editCard, setEditCard, vacancy, dictionaries, companies }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyContacts/index.tsx",
    lineNumber: 29,
    columnNumber: 15
  }, this);
}

// app/components/pages/User/Vacancies/Vacancy/components/VacancyLocation/index.tsx
init_esm();

// app/components/pages/User/Vacancies/Vacancy/components/VacancyLocation/VacancyLocationData.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
function VacancyLocationData({
  editCard,
  setEditCard,
  vacancy,
  dictionaries
}) {
  const {
    t,
    userContext
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(BoxCard, { title: t("user:location"), withEditButton: true, nameCard: VacancyCardEnum.location, editCard, setEditCard, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardContainer, { as: motion.div, initial: {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DataField, { label: t("user:country"), data: getValueLang(vacancy?.location?.city_name, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyLocation/VacancyLocationData.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DataField, { label: t("user:province"), data: getValueLang(vacancy?.location?.region_name, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyLocation/VacancyLocationData.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DataField, { label: t("user:district"), data: getValueLang(vacancy?.location?.city_name, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyLocation/VacancyLocationData.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DataField, { label: t("user:language_of_notify"), data: getValueLang(vacancy?.location?.language_of_notify_name, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyLocation/VacancyLocationData.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DataField, { label: t("user:number_of_employees"), data: getValueLang(vacancy?.location?.number_of_employees_name, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyLocation/VacancyLocationData.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyLocation/VacancyLocationData.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyLocation/VacancyLocationData.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Vacancies/Vacancy/components/VacancyLocation/index.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
function VacancyLocation({
  editCard,
  setEditCard,
  vacancy,
  dictionaries,
  actionData
}) {
  return editCard === VacancyCardEnum.location ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Form, { method: "PATCH", style: {
    width: "100%"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(VacancyLocationEdit, { editCard, setEditCard, vacancy, dictionaries, actionData }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyLocation/index.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyLocation/index.tsx",
    lineNumber: 22,
    columnNumber: 50
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(VacancyLocationData, { editCard, setEditCard, vacancy, dictionaries }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyLocation/index.tsx",
    lineNumber: 26,
    columnNumber: 15
  }, this);
}

// app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/index.tsx
init_esm();

// app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsData.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
function VacancyRequirementsData({
  editCard,
  setEditCard,
  vacancy,
  dictionaries
}) {
  const {
    t,
    userContext
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(BoxCard, { title: t("user:requirements"), withEditButton: true, nameCard: VacancyCardEnum.requirements, editCard, setEditCard, children: vacancy?.requirements?.education && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(CardContainer, { as: motion.div, initial: {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Box, { flexDirection: "column", gap: "24px", children: vacancy?.requirements?.education?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Box, { flexDirection: "column", gap: "10px", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DataField, { label: t("user:education"), data: getValueLang(item.education_name, userContext.language) }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsData.tsx",
        lineNumber: 41,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DataField, { label: t("user:specialization"), data: getValueLang(item.specialization_name, userContext.language) }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsData.tsx",
        lineNumber: 42,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DataField, { label: t("user:level"), data: getValueLang(item.level_name, userContext.language) }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsData.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this)
    ] }, item.specialization_id, true, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsData.tsx",
      lineNumber: 40,
      columnNumber: 60
    }, this)) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsData.tsx",
      lineNumber: 39,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Box, { flexDirection: "column", gap: "24px", children: vacancy?.requirements?.work_experience?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Box, { flexDirection: "column", gap: "10px", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DataField, { label: t("user:work_experience"), data: getValueLang(item.work_experience_name, userContext.language) }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsData.tsx",
        lineNumber: 49,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DataField, { label: t("user:period_of_work"), data: getValueLang(item.period_of_work_name, userContext.language) }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsData.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DataField, { label: t("user:specialization"), data: getValueLang(item.specialization_name, userContext.language) }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsData.tsx",
        lineNumber: 51,
        columnNumber: 17
      }, this)
    ] }, item.specialization_id, true, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsData.tsx",
      lineNumber: 48,
      columnNumber: 66
    }, this)) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsData.tsx",
      lineNumber: 47,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Box, { flexDirection: "column", gap: "24px", children: vacancy?.requirements?.language?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Box, { flexDirection: "column", gap: "10px", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DataField, { label: t("user:language_knowledge"), data: getValueLang(item.language_knowledge_name, userContext.language) }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsData.tsx",
        lineNumber: 57,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DataField, { label: t("user:language"), data: getValueLang(item.language_name, userContext.language) }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsData.tsx",
        lineNumber: 58,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DataField, { label: t("user:level"), data: getValueLang(item.level_name, userContext.language) }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsData.tsx",
        lineNumber: 60,
        columnNumber: 17
      }, this)
    ] }, item.language_knowledge_id, true, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsData.tsx",
      lineNumber: 56,
      columnNumber: 59
    }, this)) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsData.tsx",
      lineNumber: 55,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsData.tsx",
    lineNumber: 28,
    columnNumber: 44
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsData.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/index.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
function VacancyRequirements({
  editCard,
  setEditCard,
  vacancy,
  dictionaries,
  actionData
}) {
  return editCard === VacancyCardEnum.requirements ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Form, { method: "PATCH", style: {
    width: "100%"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(VacancyRequirementsEdit, { editCard, setEditCard, vacancy, dictionaries, actionData }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/index.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/index.tsx",
    lineNumber: 22,
    columnNumber: 54
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(VacancyRequirementsData, { editCard, setEditCard, vacancy, dictionaries }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/index.tsx",
    lineNumber: 26,
    columnNumber: 15
  }, this);
}

// app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/index.tsx
init_esm();

// app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesData.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime());
function VacancyResponsesData({
  editCard,
  setEditCard,
  vacancy,
  dictionaries
}) {
  const {
    t,
    theme,
    userContext
  } = useApp();
  const renderFormFields = (disabled) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(BoxSetting, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: t("user:show_phone_number_for_verified_employees_only") }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesData.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(SwitcherBox, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Switcher, { checked: Boolean(vacancy?.responses_vacancy?.show_phone_number), htmlLabel: "i_show_phone", name: "show_phone", disabled: true }, void 0, false, {
          fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesData.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(BoxLabel, { style: {
          cursor: "pointer"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text, { color: vacancy?.responses_vacancy?.show_phone_number ? theme.switcher.backgroundChecked : theme.switcher.textDefaultColor, variant: TextVariantEnum.textBody2, children: vacancy?.responses_vacancy?.show_phone_number ? t("common:show") : t("common:hide") }, void 0, false, {
          fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesData.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesData.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesData.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesData.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(BoxSetting, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: t("user:show_email_for_verified_employees_only") }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesData.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(SwitcherBox, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          Switcher,
          {
            htmlLabel: "i_show_email",
            name: "show_email",
            disabled: true,
            checked: Boolean(vacancy?.responses_vacancy?.show_email)
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesData.tsx",
            lineNumber: 55,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(BoxLabel, { style: {
          cursor: "pointer"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text, { color: vacancy?.responses_vacancy?.show_email ? theme.switcher.backgroundChecked : theme.switcher.textDefaultColor, variant: TextVariantEnum.textBody2, children: vacancy?.responses_vacancy?.show_email ? t("common:show") : t("common:hide") }, void 0, false, {
          fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesData.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesData.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesData.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesData.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesData.tsx",
    lineNumber: 33,
    columnNumber: 52
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(BoxCard, { title: t("user:responses_vacancy"), withEditButton: true, nameCard: VacancyCardEnum.responses, editCard, setEditCard, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CardContainer, { as: motion.div, initial: {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(DataField, { label: t("user:response_can_be_done_by"), data: getValueFromDictionaries(dictionaries?.responseCanBeDoneBy, vacancy?.responses_vacancy?.response_can_be_done_by_id, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesData.tsx",
      lineNumber: 80,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(DataField, { label: t("user:email_for_the_responses"), data: vacancy?.responses_vacancy?.email_for_the_responses }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesData.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(DataField, { label: t("user:get_email_notifications_for"), data: getValueFromDictionaries(dictionaries?.emailNotificationsSettings, vacancy?.responses_vacancy?.get_email_notifications_for_id, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesData.tsx",
      lineNumber: 82,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(DataField, { label: t("user:compliance_of_requirements"), data: getValueFromDictionaries(dictionaries?.complianceOfRequirements, vacancy?.responses_vacancy?.compliance_of_requirements_id, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesData.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(FieldsWrapper, { variant: "data", children: renderFormFields() }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesData.tsx",
      lineNumber: 84,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesData.tsx",
    lineNumber: 69,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesData.tsx",
    lineNumber: 68,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/index.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime());
function VacancyResponses({
  editCard,
  setEditCard,
  vacancy,
  dictionaries,
  actionData
}) {
  return editCard === VacancyCardEnum.responses ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Form, { method: "PATCH", style: {
    width: "100%"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(VacancyResponsesEdit, { editCard, setEditCard, vacancy, dictionaries, actionData }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/index.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/index.tsx",
    lineNumber: 22,
    columnNumber: 51
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(VacancyResponsesData, { editCard, setEditCard, vacancy, dictionaries }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/index.tsx",
    lineNumber: 26,
    columnNumber: 15
  }, this);
}

// app/components/pages/User/Vacancies/Vacancy/index.tsx
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime());
function VacancyComponent({
  vacancy,
  dictionaries,
  actionData,
  companies
}) {
  const [editCard, setEditCard] = (0, import_react7.useState)(VacancyCardEnum.all);
  (0, import_react7.useEffect)(() => {
    if (actionData?.success)
      setEditCard(VacancyCardEnum.all);
  }, [vacancy]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Wrapper, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(VacancyComponentCard, { dictionaries, vacancy, editCard, setEditCard, actionData }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/index.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(VacancyContacts, { dictionaries, vacancy, companies, editCard, setEditCard, actionData }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/index.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(VacancyLocation, { dictionaries, vacancy, editCard, setEditCard, actionData }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/index.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(VacancyRequirements, { dictionaries, vacancy, editCard, setEditCard, actionData }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/index.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(VacancyResponses, { dictionaries, vacancy, editCard, setEditCard, actionData }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/index.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(VacancyAdditional, { dictionaries, vacancy, editCard, setEditCard, actionData }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/index.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/index.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}

// app/routes/user/vacancy.$id.tsx
var import_message = __toESM(require_message());
var import_request = __toESM(require_request());
var import_jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime());
function Index() {
  const request = useLoaderData();
  const vacancy = request?.vacancy;
  const actionData = useActionData();
  const {
    companies
  } = request;
  const {
    dictionaries
  } = request;
  const {
    t
  } = useApp();
  const widthScreen = useScreenWidth();
  const incompleteness = useCheckIncompleteness(null, vacancy);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Box, { flexDirection: "column", width: "100%", gap: widthScreen > 1024 ? "24px" : "16px", children: [
    incompleteness && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(BoxInformation_default, { variant: BoxInformationEnum.warning, title: t("user:vacancy_is_incomplete"), information: t("user:if_the_required_fields_are_not_filled_in_the_vacancy_then_it_will_not_be_placed_in_the_database"), flexDirection: "column" }, void 0, false, {
      fileName: "app/routes/user/vacancy.$id.tsx",
      lineNumber: 387,
      columnNumber: 26
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(VacancyComponent, { vacancy, dictionaries, companies: companies.data, actionData }, void 0, false, {
      fileName: "app/routes/user/vacancy.$id.tsx",
      lineNumber: 389,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user/vacancy.$id.tsx",
    lineNumber: 386,
    columnNumber: 10
  }, this);
}
export {
  Index as default
};
