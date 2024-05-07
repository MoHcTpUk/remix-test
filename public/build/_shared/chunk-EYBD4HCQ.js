import {
  BoxSetting
} from "/build/_shared/chunk-TPK4GNST.js";
import {
  BoxFields
} from "/build/_shared/chunk-O6PFKXUU.js";
import {
  VacancyCardEnum
} from "/build/_shared/chunk-DUOL7BQP.js";
import {
  CardContainer
} from "/build/_shared/chunk-LEK3IZDX.js";
import {
  Select
} from "/build/_shared/chunk-BXFA34ZG.js";
import {
  BoxCard,
  VariantCardEnum
} from "/build/_shared/chunk-6J6FMBZW.js";
import {
  Switcher
} from "/build/_shared/chunk-TPPLNXCO.js";
import {
  Input
} from "/build/_shared/chunk-MPISASBV.js";
import {
  Button_default
} from "/build/_shared/chunk-QD72PUQI.js";
import {
  motion
} from "/build/_shared/chunk-NC5IH6SX.js";
import {
  Box,
  Text,
  TextVariantEnum,
  extractCompanyData,
  extractTitles,
  extractTitlesNewWay,
  routes_default,
  styled_components_browser_esm_default,
  useApp,
  useGetLocation,
  useGetPositionFromSpecialization,
  v4_default
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  Link,
  init_esm
} from "/build/_shared/chunk-JX76WC46.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6O7TW4X6.js";
import {
  __toESM
} from "/build/_shared/chunk-RFITDC3A.js";

// app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/VacancyAdditionalEdit.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function VacancyAdditionalEdit({
  editCard,
  setEditCard,
  state,
  step,
  vacancy,
  dictionaries,
  actionData
}) {
  const {
    t,
    userContext
  } = useApp();
  const staticFields = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { entries: extractTitles(dictionaries?.skills, userContext.language), placeholder: t("user:skills"), id: "skills", name: "skills", variant: "search-multi", values: vacancy?.additional_skills?.skill_ids, errorText: actionData?.fieldErrors?.skill_ids?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/VacancyAdditionalEdit.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { entries: extractTitles(dictionaries?.drivingLicenses, userContext.language), placeholder: t("user:driver_license"), id: "driver_license", name: "driver_license", variant: "search-multi", values: vacancy?.additional_skills?.driver_license_ids, errorText: actionData?.fieldErrors?.driver_license_ids?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/VacancyAdditionalEdit.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { placeholder: t("user:other_licenses"), value: vacancy?.additional_skills?.other_licenses?.join(", "), id: "other_licenses", name: "other_licenses", errorText: actionData?.fieldErrors?.other_licenses?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/VacancyAdditionalEdit.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/VacancyAdditionalEdit.tsx",
    lineNumber: 36,
    columnNumber: 30
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxCard, { title: t("user:additional_information"), withEditButton: true, nameCard: VacancyCardEnum.additional, editCard, setEditCard, state, step, maxStep: 6, variant: VariantCardEnum.editCard, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContainer, { as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, transition: {
    type: "spring",
    bounce: 0,
    duration: 0.4
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxFields, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "nameCard", type: "hidden", value: "additional_skills" }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/VacancyAdditionalEdit.tsx",
      lineNumber: 56,
      columnNumber: 11
    }, this),
    staticFields()
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/VacancyAdditionalEdit.tsx",
    lineNumber: 55,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/VacancyAdditionalEdit.tsx",
    lineNumber: 44,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyAdditional/VacancyAdditionalEdit.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardEdit.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function VacancyComponentCardEdit({
  editCard,
  setEditCard,
  state,
  step,
  vacancy,
  dictionaries,
  companies,
  actionData
}) {
  const {
    t,
    userContext
  } = useApp();
  const {
    entriesPositions,
    setSpecializationState,
    position,
    specializationState
  } = useGetPositionFromSpecialization(vacancy?.vacancy_page?.specialization_id, vacancy?.vacancy_page?.position);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxCard, { title: t("user:vacancy"), withEditButton: true, nameCard: VacancyCardEnum.vacancy, editCard, setEditCard, step, state, maxStep: 6, variant: VariantCardEnum.editCard, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardContainer, { as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, transition: {
    type: "spring",
    bounce: 0,
    duration: 0.4
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxFields, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { name: "nameCard", type: "hidden", value: "vacancy_page" }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardEdit.tsx",
      lineNumber: 58,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Select, { entries: extractTitles(dictionaries?.specializations, userContext.language), placeholder: t("user:specialization"), id: "specialization", name: "specialization", setExternalState: setSpecializationState, values: specializationState, variant: "search-single", errorText: actionData?.fieldErrors?.specialization_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardEdit.tsx",
      lineNumber: 60,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Select, { placeholder: t("user:position"), id: "position", name: "position", externalState: [position || ""], values: [position || ""], entries: entriesPositions, variant: "single-text", errorText: actionData?.fieldErrors?.position?.[userContext.language], disabled: !specializationState[0] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardEdit.tsx",
      lineNumber: 61,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Select, { entries: extractTitles(dictionaries?.employment, userContext.language), placeholder: t("user:employment"), id: "employment", name: "employment", variant: "multi", values: vacancy?.vacancy_page?.employment_type_ids, errorText: actionData?.fieldErrors?.employment_type_ids?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardEdit.tsx",
      lineNumber: 63,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Select, { entries: extractTitles(dictionaries?.workfeatures, userContext.language), placeholder: t("user:work_features"), id: "work_features", name: "work_features", values: vacancy?.vacancy_page?.work_feature_ids, errorText: actionData?.fieldErrors?.work_feature_ids?.[userContext.language], variant: "multi" }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardEdit.tsx",
      lineNumber: 64,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Select, { entries: extractTitles(dictionaries?.payoutPeriods, userContext.language), placeholder: t("user:salary_payout_period"), id: "salary_payout_period", name: "salary_payout_period", values: [vacancy?.vacancy_page?.salary_payout_period_id || ""], errorText: actionData?.fieldErrors?.salary_payout_period_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardEdit.tsx",
      lineNumber: 65,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { placeholder: t("user:salary_fixed"), id: "fixed", name: "fixed", value: vacancy?.vacancy_page?.salary_fixed?.toString(), errorText: actionData?.fieldErrors?.salary_fixed?.[userContext.language], onlyNumber: true }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardEdit.tsx",
      lineNumber: 66,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { placeholder: t("user:from"), id: "from", name: "from", value: vacancy?.vacancy_page?.salary_from?.toString(), errorText: actionData?.fieldErrors?.salary_from?.[userContext.language], onlyNumber: true }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardEdit.tsx",
      lineNumber: 67,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { placeholder: t("user:to"), id: "to", name: "to", value: vacancy?.vacancy_page?.salary_to?.toString(), errorText: actionData?.fieldErrors?.salary_to?.[userContext.language], onlyNumber: true }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardEdit.tsx",
      lineNumber: 68,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Select, { entries: extractTitles(dictionaries?.currency, userContext.language), placeholder: t("user:currency"), id: "i_currency", name: "currency", values: [vacancy?.vacancy_page?.currency_id || ""], errorText: actionData?.fieldErrors?.currency_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardEdit.tsx",
      lineNumber: 70,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { variant: "textarea", placeholder: t("user:description"), id: "i_description", name: "description", value: vacancy?.vacancy_page?.description, errorText: actionData?.fieldErrors?.description?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardEdit.tsx",
      lineNumber: 71,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardEdit.tsx",
    lineNumber: 57,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardEdit.tsx",
    lineNumber: 46,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyComponentCard/VacancyComponentCardEdit.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Vacancies/Vacancy/components/VacancyContacts/VacancyContactsEdit.tsx
init_esm();
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function VacancyContactsEdit({
  editCard,
  setEditCard,
  state,
  step,
  vacancy,
  dictionaries,
  companies,
  actionData
}) {
  const {
    t,
    userContext
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BoxCard, { title: t("user:vacancy_contacts"), withEditButton: true, nameCard: VacancyCardEnum.employer, editCard, setEditCard, state, step, maxStep: 6, variant: VariantCardEnum.editCard, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardContainer, { as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, transition: {
    type: "spring",
    bounce: 0,
    duration: 0.4
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BoxFields, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { name: "nameCard", type: "hidden", value: "contacts" }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyContacts/VacancyContactsEdit.tsx",
      lineNumber: 57,
      columnNumber: 11
    }, this),
    state !== "create" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Select, { entries: extractCompanyData(companies), placeholder: t("user:company_name"), id: "company_id", name: "company_id", values: [vacancy?.contacts?.company_id || ""], errorText: actionData?.fieldErrors?.company_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyContacts/VacancyContactsEdit.tsx",
      lineNumber: 59,
      columnNumber: 34
    }, this),
    state === "create" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Select, { entries: extractCompanyData(companies), placeholder: t("user:choose_company"), name: "company_id", id: "company_id", values: [vacancy?.contacts?.company_id || ""], errorText: actionData?.fieldErrors?.company_id?.[userContext.language] }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyContacts/VacancyContactsEdit.tsx",
        lineNumber: 62,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: `${routes_default.user.company.create}?forvacancy=true`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { name: "create-company", priority: "secondary", fullwidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:create_another_company") }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyContacts/VacancyContactsEdit.tsx",
        lineNumber: 66,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyContacts/VacancyContactsEdit.tsx",
        lineNumber: 65,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyContacts/VacancyContactsEdit.tsx",
        lineNumber: 64,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyContacts/VacancyContactsEdit.tsx",
      lineNumber: 61,
      columnNumber: 34
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Input, { placeholder: t("user:contact_phone"), id: "contact_phone", name: "contact_phone", variant: "phone", value: vacancy?.contacts?.contact_phone || userContext.user.phone, errorText: actionData?.fieldErrors?.contact_phone?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyContacts/VacancyContactsEdit.tsx",
      lineNumber: 73,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Input, { placeholder: t("user:first_name"), id: "first_name", name: "first_name", value: vacancy?.contacts?.first_name || userContext.user.firstName, errorText: actionData?.fieldErrors?.first_name?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyContacts/VacancyContactsEdit.tsx",
      lineNumber: 74,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Input, { placeholder: t("user:last_name"), id: "last_name", name: "last_name", value: vacancy?.contacts?.last_name || userContext.user.lastName, errorText: actionData?.fieldErrors?.last_name?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyContacts/VacancyContactsEdit.tsx",
      lineNumber: 75,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Select, { entries: extractTitles(dictionaries?.sources, userContext.language), placeholder: t("user:how_did_you_know_about_us"), id: "source", name: "source", values: [vacancy?.contacts?.source_of_discovery_id || ""], errorText: actionData?.fieldErrors?.source_of_discovery_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyContacts/VacancyContactsEdit.tsx",
      lineNumber: 77,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyContacts/VacancyContactsEdit.tsx",
    lineNumber: 56,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyContacts/VacancyContactsEdit.tsx",
    lineNumber: 45,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyContacts/VacancyContactsEdit.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Vacancies/Vacancy/components/VacancyLocation/VacancyLocationEdit.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function VacancyLocationEdit({
  editCard,
  setEditCard,
  state,
  step,
  vacancy,
  dictionaries,
  actionData
}) {
  const {
    t,
    userContext
  } = useApp();
  const {
    entriesRegions,
    setNewContry,
    newRegion,
    setNewRegion,
    newCountry,
    newCity,
    setNewCity,
    newEntriesCity
  } = useGetLocation(vacancy?.location?.country_id, vacancy?.location?.region_id, vacancy?.location?.city_id, dictionaries?.location);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BoxCard, { title: t("user:location"), withEditButton: true, nameCard: VacancyCardEnum.location, editCard, setEditCard, state, step, maxStep: 6, variant: VariantCardEnum.editCard, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardContainer, { as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, transition: {
    type: "spring",
    bounce: 0,
    duration: 0.4
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BoxFields, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { name: "nameCard", type: "hidden", value: "location" }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyLocation/VacancyLocationEdit.tsx",
      lineNumber: 60,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Select, { entries: extractTitles(dictionaries?.countries, userContext.language), placeholder: t("user:country"), id: "country", name: "country", values: newCountry, setExternalState: setNewContry, variant: "search-single", errorText: actionData?.fieldErrors?.country_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyLocation/VacancyLocationEdit.tsx",
      lineNumber: 62,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Select, { entries: extractTitles(entriesRegions, userContext.language), setExternalState: setNewRegion, values: newRegion, placeholder: t("user:province"), id: "region", name: "region", variant: "search-single", errorText: actionData?.fieldErrors?.region_id?.[userContext.language], disabled: !entriesRegions || !entriesRegions?.length }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyLocation/VacancyLocationEdit.tsx",
      lineNumber: 63,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Select, { entries: extractTitles(newEntriesCity, userContext.language), values: newCity, setExternalState: setNewCity, placeholder: t("user:district"), id: "i_city", name: "city", variant: "search-single", errorText: actionData?.fieldErrors?.city_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyLocation/VacancyLocationEdit.tsx",
      lineNumber: 64,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Input, { placeholder: t("user:address"), value: vacancy?.location?.address, id: "i_address", name: "address" }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyLocation/VacancyLocationEdit.tsx",
      lineNumber: 65,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Select, { entries: extractTitlesNewWay(dictionaries?.languagesOfNotify, userContext.language), placeholder: t("user:language_of_notify"), id: "language_of_notify", name: "language_of_notify", values: [vacancy?.location?.language_of_notify_id || ""], errorText: actionData?.fieldErrors?.language_of_notify_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyLocation/VacancyLocationEdit.tsx",
      lineNumber: 66,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Select, { entries: extractTitles(dictionaries?.employeeNumbers, userContext.language), placeholder: t("user:number_of_employees"), id: "number_of_employees", name: "number_of_employees", values: [vacancy?.location?.number_of_employees_id || ""], errorText: actionData?.fieldErrors?.number_of_employees_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyLocation/VacancyLocationEdit.tsx",
      lineNumber: 67,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyLocation/VacancyLocationEdit.tsx",
    lineNumber: 59,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyLocation/VacancyLocationEdit.tsx",
    lineNumber: 48,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyLocation/VacancyLocationEdit.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function EducationForm({
  education,
  dictionaries,
  index,
  onChange,
  onDelete,
  actionData
}) {
  const {
    t,
    theme,
    userContext
  } = useApp();
  const handleChange = (updatedEducation) => {
    onChange(index, updatedEducation);
  };
  const handleDelete = () => {
    onDelete(index);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Box, { width: "100%", flexDirection: "column", gap: "24px", style: {
    borderBottom: `1px solid ${theme.user.borderColor}`,
    paddingBottom: "24px"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Select, { entries: extractTitles(dictionaries?.requirementsLevel, userContext.language), placeholder: t("user:education"), id: `${index}.education`, name: "education", values: [education.education_id || ""], onChange: (value) => handleChange({
      ...education,
      education_id: value
    }), errorText: actionData?.fieldErrors?.education_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Select, { entries: extractTitles(dictionaries?.educationLevel, userContext.language), placeholder: t("user:education_level"), id: `${index}.education_level`, name: "education_level", values: [education.level_id || ""], onChange: (value) => handleChange({
      ...education,
      level_id: value
    }), errorText: actionData?.fieldErrors?.level_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Select, { entries: extractTitles(dictionaries?.specializations, userContext.language), placeholder: t("user:specialization"), id: `${index}.education_specialization`, name: "education_specialization", values: [education.specialization_id || ""], onChange: (value) => handleChange({
      ...education,
      specialization_id: value
    }), errorText: actionData?.fieldErrors?.specialization_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { onClick: handleDelete, priority: "secondary", fullwidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("common:delete") }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
      lineNumber: 84,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this)
  ] }, education.specialization_id, true, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
    lineNumber: 63,
    columnNumber: 10
  }, this);
}
function WorkExperienceForm({
  workExperience,
  dictionaries,
  index,
  onChange,
  onDelete,
  actionData
}) {
  const {
    t,
    theme,
    userContext
  } = useApp();
  const handleChange = (updatedWorkExperience) => {
    onChange(index, updatedWorkExperience);
  };
  const handleDelete = () => {
    onDelete(index);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Box, { width: "100%", flexDirection: "column", gap: "24px", style: {
    borderBottom: `1px solid ${theme.user.borderColor}`,
    paddingBottom: "24px"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Select, { entries: extractTitles(dictionaries?.requirementsLevel, userContext.language), placeholder: t("user:work_experience"), id: `${index}.work_experience`, name: "workExperience", values: [workExperience.work_experience_id || ""], onChange: (value) => handleChange({
      ...workExperience,
      work_experience_id: value
    }), errorText: actionData?.fieldErrors?.work_experience_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Select, { entries: extractTitles(dictionaries?.yearsOfExperience, userContext.language), placeholder: t("user:period_of_work"), id: `${index}.periodOfWork`, name: "periodOfWork", values: [workExperience.period_of_work_id || ""], onChange: (value) => handleChange({
      ...workExperience,
      period_of_work_id: value
    }), errorText: actionData?.fieldErrors?.period_of_work_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Select, { entries: extractTitles(dictionaries?.specializations, userContext.language), placeholder: t("user:specialization"), id: `${index}.workExperience_specialization`, name: "workExperience_specialization", values: [workExperience.specialization_id || ""], onChange: (value) => handleChange({
      ...workExperience,
      specialization_id: value
    }), errorText: actionData?.fieldErrors?.specialization_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
      lineNumber: 121,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { onClick: handleDelete, priority: "secondary", fullwidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("common:delete") }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
      lineNumber: 128,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this)
  ] }, workExperience.specialization_id, true, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
    lineNumber: 107,
    columnNumber: 10
  }, this);
}
function LanguageForm({
  language,
  dictionaries,
  index,
  onChange,
  onDelete,
  actionData
}) {
  const {
    t,
    theme,
    userContext
  } = useApp();
  const handleChange = (updatedLanguage) => {
    onChange(index, updatedLanguage);
  };
  const handleDelete = () => {
    onDelete(index);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Box, { width: "100%", flexDirection: "column", gap: "24px", style: {
    borderBottom: `1px solid ${theme.user.borderColor}`,
    paddingBottom: "24px"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Select, { entries: extractTitles(dictionaries?.requirementsLevel, userContext.language), placeholder: t("user:language_knowledge"), id: `${index}.language_knowledge`, name: "language_knowledge", values: [language.language_knowledge_id || ""], onChange: (value) => handleChange({
      ...language,
      language_knowledge_id: value
    }), errorText: actionData?.fieldErrors?.language_knowledge_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
      lineNumber: 155,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Select, { entries: extractTitles(dictionaries?.languages, userContext.language), placeholder: t("user:language"), id: `${index}.language`, name: "language", values: [language.language_id || ""], onChange: (value) => handleChange({
      ...language,
      language_id: value
    }), errorText: actionData?.fieldErrors?.language_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
      lineNumber: 160,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Select, { entries: extractTitles(dictionaries?.languageLevel, userContext.language), placeholder: t("user:level"), id: `${index}.language_level`, name: "language_level", values: [language.level_id || ""], onChange: (value) => handleChange({
      ...language,
      level_id: value
    }), errorText: actionData?.fieldErrors?.level_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
      lineNumber: 165,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { onClick: handleDelete, priority: "secondary", fullwidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("common:delete") }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
      lineNumber: 172,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
      lineNumber: 171,
      columnNumber: 7
    }, this)
  ] }, language.language_knowledge_id, true, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
    lineNumber: 151,
    columnNumber: 10
  }, this);
}
function VacancyRequirementsEdit({
  editCard,
  setEditCard,
  state,
  step,
  vacancy,
  dictionaries,
  actionData
}) {
  const {
    t
  } = useApp();
  const educations = [{
    education_id: "",
    level_id: "",
    specialization_id: ""
  }];
  const works = [{
    work_experience_id: "",
    period_of_work_id: "",
    specialization_id: ""
  }];
  const langs = [{
    language_id: "",
    level_id: "",
    language_knowledge_id: ""
  }];
  const [educationExperiences, setEducationExperiences] = (0, import_react2.useState)(vacancy?.requirements?.education || educations);
  const [workExperiences, setWorkExperiences] = (0, import_react2.useState)(vacancy?.requirements?.work_experience || works);
  const [languages, setLanguages] = (0, import_react2.useState)(vacancy?.requirements?.language || langs);
  const handleAddEducationClick = () => {
    setEducationExperiences((prevExperiences) => [...prevExperiences, {
      education_id: "",
      level_id: "",
      specialization_id: ""
    }]);
  };
  const handleAddWorksClick = () => {
    setWorkExperiences((prevExperiences) => [...prevExperiences, {
      work_experience_id: "",
      period_of_work_id: "",
      specialization_id: ""
    }]);
  };
  const handleAddLangsClick = () => {
    setLanguages((prevLanguages) => [...prevLanguages, {
      language_id: "",
      level_id: "",
      language_knowledge_id: ""
    }]);
  };
  const handleDeleteEducation = (index) => {
    setEducationExperiences((prevExperiences) => prevExperiences.filter((_, i) => i !== index));
  };
  const handleDeleteWorkExperience = (index) => {
    setWorkExperiences((prevExperiences) => prevExperiences.filter((_, i) => i !== index));
  };
  const handleDeleteLanguage = (index) => {
    setLanguages((prevLanguages) => prevLanguages.filter((_, i) => i !== index));
  };
  const handleEducationChange = (index, updatedEducation) => {
    const updatedExperiences = [...educationExperiences];
    updatedExperiences[index] = updatedEducation;
    setEducationExperiences(updatedExperiences);
  };
  const handleWorkExperienceChange = (index, updatedWorkExperience) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences[index] = updatedWorkExperience;
    setWorkExperiences(updatedExperiences);
  };
  const handleLanguageChange = (index, updatedLanguage) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index] = updatedLanguage;
    setLanguages(updatedLanguages);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BoxCard, { title: t("user:requirements"), withEditButton: true, nameCard: VacancyCardEnum.requirements, editCard, setEditCard, state, step, maxStep: 6, variant: VariantCardEnum.editCard, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CardContainer, { as: motion.div, initial: {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { name: "nameCard", type: "hidden", value: "requirements" }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
      lineNumber: 271,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BoxFields, { children: [
      educationExperiences?.map((education, index) => {
        const key = v4_default();
        return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(EducationForm, { index, education, dictionaries, onChange: handleEducationChange, onDelete: handleDeleteEducation, actionData }, key, false, {
          fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
          lineNumber: 275,
          columnNumber: 18
        }, this);
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { onClick: handleAddEducationClick, priority: "secondary", fullwidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: [
        " ",
        t("user:add_education")
      ] }, void 0, true, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
        lineNumber: 278,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
        lineNumber: 277,
        columnNumber: 11
      }, this),
      workExperiences?.map((workExperience, index) => {
        const key = v4_default();
        return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(WorkExperienceForm, { index, workExperience, dictionaries, onChange: handleWorkExperienceChange, onDelete: handleDeleteWorkExperience, actionData }, key, false, {
          fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
          lineNumber: 282,
          columnNumber: 18
        }, this);
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { onClick: handleAddWorksClick, priority: "secondary", fullwidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:add_work_experience") }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
        lineNumber: 285,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
        lineNumber: 284,
        columnNumber: 11
      }, this),
      languages?.map((language, index) => {
        const key = v4_default();
        return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(LanguageForm, { index, language, dictionaries, onChange: handleLanguageChange, onDelete: handleDeleteLanguage, actionData }, key, false, {
          fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
          lineNumber: 289,
          columnNumber: 18
        }, this);
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { onClick: handleAddLangsClick, priority: "secondary", fullwidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:add_language") }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
        lineNumber: 292,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
        lineNumber: 291,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
      lineNumber: 272,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
    lineNumber: 260,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyRequirements/VacancyRequirementsEdit.tsx",
    lineNumber: 259,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Vacancies/Vacancy/styles.ts
var BoxCustomData = styled_components_browser_esm_default.div`
  padding: 8px 12px;
  border-radius: 80px;
  border: 1px solid ${({ theme }) => theme.user.borderColor};
  height: 40px;
  @media (min-width: 1024px) {
    height: 44px;
  }
`;
var Wrapper = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  @media (min-width: 1024px) {
    gap: 24px;
  }
`;
var FieldsWrapper = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  @media (min-width: 768px) {
    padding-top: ${({ variant }) => variant === "data" ? "8px" : "0"};
    margin-bottom: ${({ variant }) => variant === "edit" ? "-4px" : "0"};
  }
`;

// app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesEdit.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function VacancyResponsesEdit({
  editCard,
  setEditCard,
  state,
  step,
  vacancy,
  dictionaries,
  actionData
}) {
  const {
    t,
    theme,
    userContext
  } = useApp();
  const renderFormFields = (disabled) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(BoxSetting, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: t("user:show_phone_number_for_verified_employees_only") }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesEdit.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Switcher, { checked: Boolean(vacancy?.responses_vacancy?.show_phone_number), htmlLabel: "i_show_phone", name: "show_phone", variant: "default", checkedLabel: t("common:show"), unCheckedLabel: t("common:hide") }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesEdit.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesEdit.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(BoxSetting, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: t("user:show_email_for_verified_employees_only") }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesEdit.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Switcher, { htmlLabel: "i_show_email", name: "show_email", checked: Boolean(vacancy?.responses_vacancy?.show_email), variant: "default", checkedLabel: t("common:show"), unCheckedLabel: t("common:hide") }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesEdit.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesEdit.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesEdit.tsx",
    lineNumber: 42,
    columnNumber: 52
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(BoxCard, { title: t("user:responses_vacancy"), withEditButton: true, nameCard: VacancyCardEnum.responses, editCard, setEditCard, state, step, maxStep: 6, variant: VariantCardEnum.editCard, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CardContainer, { as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, transition: {
    type: "spring",
    bounce: 0,
    duration: 0.4
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(BoxFields, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { name: "nameCard", type: "hidden", value: "responses_vacancy" }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesEdit.tsx",
      lineNumber: 70,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Select, { entries: extractTitles(dictionaries?.responseCanBeDoneBy, userContext.language), placeholder: t("user:response_can_be_done_by"), id: "canBeDoneBy", name: "canBeDoneBy", values: [vacancy?.responses_vacancy?.response_can_be_done_by_id || ""], errorText: actionData?.fieldErrors?.response_can_be_done_by_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesEdit.tsx",
      lineNumber: 71,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Input, { placeholder: t("user:email_for_the_responses"), id: "email", name: "email", value: vacancy?.responses_vacancy?.email_for_the_responses || userContext.user.email, errorText: actionData?.fieldErrors?.email_for_the_responses?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesEdit.tsx",
      lineNumber: 72,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Select, { entries: extractTitles(dictionaries?.emailNotificationsSettings, userContext.language), placeholder: t("user:get_email_notifications_for"), id: "notificationsSettings", name: "notificationsSettings", values: [vacancy?.responses_vacancy?.response_can_be_done_by_id || ""], errorText: actionData?.fieldErrors?.response_can_be_done_by_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesEdit.tsx",
      lineNumber: 73,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Select, { entries: extractTitles(dictionaries?.complianceOfRequirements, userContext.language), placeholder: t("user:compliance_of_requirements"), id: "complianceOfRequirements", name: "complianceOfRequirements", values: [vacancy?.responses_vacancy?.compliance_of_requirements_id || ""], errorText: actionData?.fieldErrors?.compliance_of_requirements_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesEdit.tsx",
      lineNumber: 75,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(FieldsWrapper, { variant: "edit", children: renderFormFields() }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesEdit.tsx",
      lineNumber: 76,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesEdit.tsx",
    lineNumber: 69,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesEdit.tsx",
    lineNumber: 58,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/components/VacancyResponses/VacancyResponsesEdit.tsx",
    lineNumber: 57,
    columnNumber: 10
  }, this);
}

export {
  VacancyAdditionalEdit,
  VacancyComponentCardEdit,
  VacancyContactsEdit,
  VacancyLocationEdit,
  VacancyRequirementsEdit,
  Wrapper,
  FieldsWrapper,
  VacancyResponsesEdit
};
