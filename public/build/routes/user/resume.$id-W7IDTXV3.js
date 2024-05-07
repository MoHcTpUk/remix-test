import {
  ResumeAdditionalinformationEdit,
  ResumeEducationEdit,
  ResumeInformationEdit,
  ResumeJobPositionEdit,
  ResumeLocationEdit,
  ResumeSettingsEdit,
  ResumeWorkExperienceEdit,
  Wrapper as Wrapper2
} from "/build/_shared/chunk-VIQ7DKF4.js";
import {
  BoxSetting,
  Wrapper
} from "/build/_shared/chunk-TPK4GNST.js";
import "/build/_shared/chunk-HVI57Z7R.js";
import "/build/_shared/chunk-N4QY3NH2.js";
import "/build/_shared/chunk-O6PFKXUU.js";
import {
  ResumeCardEnum
} from "/build/_shared/chunk-DUOL7BQP.js";
import "/build/_shared/chunk-SETLP5G4.js";
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
import {
  CheckBox
} from "/build/_shared/chunk-5B64Q63W.js";
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
import "/build/_shared/chunk-NSEFQYWN.js";
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
  getValueFromDictionaries,
  getValueLang,
  useApp,
  useCheckIncompleteness,
  useScreenWidth
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

// app/routes/user/resume.$id.tsx
var import_cloudflare = __toESM(require_cloudflare());
init_esm();
var import_qs = __toESM(require_lib());

// shared/v2/resumes/models/index.ts
var SettingsEmailNotificationsEnum = {
  response: "response",
  never: "never"
};

// app/components/pages/User/Resumes/Resume/index.tsx
var import_react8 = __toESM(require_react());

// app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/index.tsx
init_esm();

// app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationData.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ResumeAdditionalinformationData({
  editCard,
  setEditCard,
  resume,
  dictionaries
}) {
  const {
    t,
    userContext
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxCard, { title: t("user:additional_information"), withEditButton: true, nameCard: ResumeCardEnum.additionalInformation, editCard, setEditCard, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContainer, { as: motion.div, initial: {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataField, { variant: "custom", label: t("user:language"), children: resume?.additional_information?.languages?.[0].language_id && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "row", flexWrap: "wrap", gap: "4px", children: resume?.additional_information?.languages?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxDataChips, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: `${getValueLang(item.language_name, userContext.language) || ""} (${getValueLang(item.proficiency_level_name, userContext.language) || ""})` }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationData.tsx",
      lineNumber: 44,
      columnNumber: 19
    }, this) }, item.language_id, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationData.tsx",
      lineNumber: 43,
      columnNumber: 71
    }, this)) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationData.tsx",
      lineNumber: 42,
      columnNumber: 74
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationData.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataField, { variant: "custom", label: t("user:skills"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "row", flexWrap: "wrap", gap: "4px", children: resume?.additional_information?.skill_names?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxDataChips, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: getValueLang(item, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationData.tsx",
      lineNumber: 53,
      columnNumber: 17
    }, this) }, item.en, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationData.tsx",
      lineNumber: 52,
      columnNumber: 71
    }, this)) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationData.tsx",
      lineNumber: 51,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationData.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataField, { variant: "custom", label: t("user:driver_license"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "row", flexWrap: "wrap", gap: "4px", children: resume?.additional_information?.driver_license_names?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxDataChips, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: getValueLang(item, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationData.tsx",
      lineNumber: 62,
      columnNumber: 17
    }, this) }, item.en, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationData.tsx",
      lineNumber: 61,
      columnNumber: 80
    }, this)) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationData.tsx",
      lineNumber: 60,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationData.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataField, { label: t("user:other_licenses"), data: resume?.additional_information?.other_license }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationData.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataField, { label: t("user:religion"), data: getValueLang(resume?.additional_information?.religion_name, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationData.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataField, { label: t("user:marital_status"), data: getValueLang(resume?.additional_information?.marital_status_name, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationData.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataField, { label: t("user:citizenship"), data: getValueLang(resume?.additional_information?.citizenship_name, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationData.tsx",
      lineNumber: 71,
      columnNumber: 9
    }, this),
    " "
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationData.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationData.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function ResumeAdditionalinformation({
  editCard,
  setEditCard,
  resume,
  dictionaries,
  actionData
}) {
  return editCard === ResumeCardEnum.additionalInformation ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "POST", style: {
    width: "100%"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ResumeAdditionalinformationEdit, { editCard, setEditCard, resume, dictionaries, actionData }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/index.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/index.tsx",
    lineNumber: 23,
    columnNumber: 62
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ResumeAdditionalinformationData, { editCard, setEditCard, resume, dictionaries }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/index.tsx",
    lineNumber: 27,
    columnNumber: 15
  }, this);
}

// app/components/pages/User/Resumes/Resume/components/ResumeEducation/index.tsx
init_esm();

// app/components/pages/User/Resumes/Resume/components/ResumeEducation/ResumeEducationData.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function ResumeEducationData({
  editCard,
  setEditCard,
  resume,
  dictionaries
}) {
  const {
    t,
    userContext
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BoxCard, { title: t("user:education"), withEditButton: true, nameCard: ResumeCardEnum.education, editCard, setEditCard, children: resume?.education && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardContainer, { as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, transition: {
    type: "spring",
    bounce: 0,
    duration: 0.4
  }, children: resume?.education?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { flexDirection: "column", gap: "10px", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DataField, { label: t("user:education_level"), data: getValueLang(item.education_level_name, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/ResumeEducationData.tsx",
      lineNumber: 40,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DataField, { label: t("user:institution"), data: item.institution }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/ResumeEducationData.tsx",
      lineNumber: 41,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DataField, { label: t("user:specialization"), data: getValueLang(item.specialization_name, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/ResumeEducationData.tsx",
      lineNumber: 42,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DataField, { label: t("user:position"), data: item.position }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/ResumeEducationData.tsx",
      lineNumber: 43,
      columnNumber: 15
    }, this),
    getValueLang(item.start_year, userContext.language) && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DataField, { data: `${getValueLang(item.start_year, userContext.language)?.split("-").slice(0, 2).join("-") || ""} - ${!getValueLang(item.end_year, userContext.language) ? t("user:present_time") : getValueLang(item.end_year, userContext.language)?.split("-").slice(0, 2).join("-") || ""}` }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/ResumeEducationData.tsx",
      lineNumber: 44,
      columnNumber: 71
    }, this)
  ] }, item.specialization_id, true, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/ResumeEducationData.tsx",
    lineNumber: 39,
    columnNumber: 43
  }, this)) }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/ResumeEducationData.tsx",
    lineNumber: 28,
    columnNumber: 29
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/ResumeEducationData.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Resumes/Resume/components/ResumeEducation/index.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function ResumeEducation({
  editCard,
  setEditCard,
  resume,
  dictionaries,
  actionData
}) {
  return editCard === ResumeCardEnum.education ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form, { method: "POST", style: {
    width: "100%"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ResumeEducationEdit, { editCard, setEditCard, resume, dictionaries, actionData }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/index.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/index.tsx",
    lineNumber: 23,
    columnNumber: 50
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ResumeEducationData, { editCard, setEditCard, resume, dictionaries }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/index.tsx",
    lineNumber: 27,
    columnNumber: 15
  }, this);
}

// app/components/pages/User/Resumes/Resume/components/ResumeInformation/index.tsx
init_esm();

// app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationData.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function ResumeInformationData({
  editCard,
  setEditCard,
  resume,
  dictionaries
}) {
  const {
    t,
    userContext
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BoxCard, { title: t("user:personal_information"), withEditButton: true, nameCard: ResumeCardEnum.information, editCard, setEditCard, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CardContainer, { as: motion.div, initial: {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataField, { label: t("user:first_name"), data: resume?.general_information?.first_name }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationData.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataField, { label: t("user:last_name"), data: resume?.general_information?.last_name }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationData.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataField, { label: t("user:gender"), data: getValueLang(resume?.general_information?.gender_name, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationData.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataField, { label: t("user:date_of_birth"), data: getValueLang(resume?.general_information?.birthdate, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationData.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataField, { label: t("user:email"), data: resume?.general_information?.email }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationData.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataField, { label: t("user:phone"), data: resume?.general_information?.phone }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationData.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataField, { label: t("user:language_of_notify"), data: getValueLang(resume?.general_information?.language_of_notify_name, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationData.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationData.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationData.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Resumes/Resume/components/ResumeInformation/index.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function ResumeInformation({
  editCard,
  setEditCard,
  resume,
  dictionaries,
  actionData
}) {
  return editCard === ResumeCardEnum.information ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form, { method: "POST", style: {
    width: "100%"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ResumeInformationEdit, { editCard, setEditCard, resume, dictionaries, actionData }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/index.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/index.tsx",
    lineNumber: 22,
    columnNumber: 52
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ResumeInformationData, { editCard, setEditCard, resume, dictionaries }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/index.tsx",
    lineNumber: 26,
    columnNumber: 15
  }, this);
}

// app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/index.tsx
init_esm();

// app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionData.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
function ResumeJobPositionData({
  editCard,
  setEditCard,
  resume,
  dictionaries
}) {
  const {
    t,
    userContext
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(BoxCard, { title: t("user:job_position"), withEditButton: true, nameCard: ResumeCardEnum.jobPosition, editCard, setEditCard, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardContainer, { as: motion.div, initial: {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DataField, { label: t("user:specialization"), data: getValueLang(resume?.job_position?.specialization_name, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionData.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DataField, { label: t("user:position"), data: resume?.job_position?.position }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionData.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DataField, { variant: "custom", label: t("user:employment"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Box, { flexDirection: "row", gap: "4px", flexWrap: "wrap", children: resume?.job_position?.employment_type_names?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(BoxDataChips, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: getValueLang(item, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionData.tsx",
      lineNumber: 47,
      columnNumber: 17
    }, this) }, item.en, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionData.tsx",
      lineNumber: 46,
      columnNumber: 71
    }, this)) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionData.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionData.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DataField, { variant: "custom", label: t("user:work_features"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Box, { flexDirection: "row", gap: "4px", flexWrap: "wrap", children: resume?.job_position?.work_feature_ids?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(BoxDataChips, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: getValueFromDictionaries(dictionaries?.workfeatures, item, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionData.tsx",
      lineNumber: 56,
      columnNumber: 17
    }, this) }, item, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionData.tsx",
      lineNumber: 55,
      columnNumber: 66
    }, this)) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionData.tsx",
      lineNumber: 54,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionData.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DataField, { label: t("user:salary_payout_period"), data: getValueLang(resume?.job_position?.salary_payout_period_name, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionData.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this),
    resume?.job_position?.salary_fixed ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DataField, { label: t("user:salary_fixed"), data: resume?.job_position?.salary_fixed?.toFixed() }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionData.tsx",
      lineNumber: 63,
      columnNumber: 47
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DataField, { label: t("user:salary"), data: `${t("user:from")} ${resume?.job_position?.salary_from || ""} - ${resume?.job_position?.salary_to || ""}` }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionData.tsx",
      lineNumber: 63,
      columnNumber: 147
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DataField, { label: t("user:currency"), data: getValueLang(resume?.job_position?.currency_name, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionData.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DataField, { label: t("user:description"), data: resume?.job_position?.description }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionData.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionData.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionData.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/index.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
function ResumeJobPosition({
  editCard,
  setEditCard,
  resume,
  dictionaries,
  actionData
}) {
  return editCard === ResumeCardEnum.jobPosition ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Form, { method: "POST", style: {
    width: "100%"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ResumeJobPositionEdit, { editCard, setEditCard, resume, dictionaries, actionData }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/index.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/index.tsx",
    lineNumber: 22,
    columnNumber: 52
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ResumeJobPositionData, { editCard, setEditCard, resume, dictionaries }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/index.tsx",
    lineNumber: 26,
    columnNumber: 15
  }, this);
}

// app/components/pages/User/Resumes/Resume/components/ResumeLocation/index.tsx
init_esm();

// app/components/pages/User/Resumes/Resume/components/ResumeLocation/ResumeLocationData.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
function ResumeLocationData({
  editCard,
  setEditCard,
  resume,
  dictionaries
}) {
  const {
    t,
    userContext
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(BoxCard, { title: t("user:location"), withEditButton: true, nameCard: ResumeCardEnum.location, editCard, setEditCard, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(CardContainer, { as: motion.div, initial: {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DataField, { label: t("user:country"), data: getValueLang(resume?.location?.country_name, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeLocation/ResumeLocationData.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DataField, { label: t("user:district"), data: getValueLang(resume?.location?.city_name, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeLocation/ResumeLocationData.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DataField, { label: t("user:address"), data: resume?.location?.address }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeLocation/ResumeLocationData.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DataField, { label: t("user:source"), data: getValueLang(resume?.location?.source_name, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeLocation/ResumeLocationData.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DataField, { label: t("user:relocation"), data: getValueLang(resume?.location?.relocation_name, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeLocation/ResumeLocationData.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Box, { padding: "8px 0 0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(CheckBox, { disabled: true, name: "business_trips", label: t("user:business_trips"), checked: resume?.location?.business_trips, onChange: () => null }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeLocation/ResumeLocationData.tsx",
      lineNumber: 47,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeLocation/ResumeLocationData.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeLocation/ResumeLocationData.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeLocation/ResumeLocationData.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Resumes/Resume/components/ResumeLocation/index.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
function ResumeLocation({
  editCard,
  setEditCard,
  resume,
  dictionaries,
  actionData
}) {
  const {
    t
  } = useApp();
  return editCard === ResumeCardEnum.location ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Form, { method: "POST", style: {
    width: "100%"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(ResumeLocationEdit, { editCard, setEditCard, resume, dictionaries, actionData }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeLocation/index.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeLocation/index.tsx",
    lineNumber: 26,
    columnNumber: 49
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(ResumeLocationData, { editCard, setEditCard, resume, dictionaries }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeLocation/index.tsx",
    lineNumber: 30,
    columnNumber: 15
  }, this);
}

// app/components/pages/User/Resumes/Resume/components/ResumeSettings/index.tsx
init_esm();

// app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsData.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime());
function ResumeSettingsData({
  editCard,
  setEditCard,
  resume,
  dictionaries
}) {
  const {
    t,
    theme,
    userContext
  } = useApp();
  const renderFormFields = (disabled) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(BoxSetting, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: t("user:show_resume_to") }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsData.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Switcher, { checked: resume?.settings?.show_resume_to === "anyone", value: resume?.settings?.show_resume_to, htmlLabel: "i_show_phone", name: "show_resume_to", variant: "default", checkedLabel: t("user:anyone"), unCheckedLabel: t("user:nobody"), disabled: true }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsData.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsData.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(BoxSetting, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: t("user:show_phone_number_to") }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsData.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Switcher, { checked: resume?.settings?.show_phone_number_to === "anyone", value: resume?.settings?.show_phone_number_to, htmlLabel: "show_phone_number_to", name: "show_phone_number_to", variant: "default", checkedLabel: t("user:anyone"), unCheckedLabel: t("user:nobody"), disabled: true }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsData.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsData.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(BoxSetting, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: t("user:show_email_to") }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsData.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Switcher, { checked: resume?.settings?.show_email_to === "anyone", value: resume?.settings?.show_email_to, htmlLabel: "show_email_to", name: "show_email_to", variant: "default", checkedLabel: t("user:anyone"), unCheckedLabel: t("user:nobody"), disabled: true }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsData.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsData.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(BoxSetting, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: t("user:email_notifications") }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsData.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        DataField,
        {
          data: (() => {
            const emailNotifications = resume?.settings?.email_notifications;
            switch (emailNotifications) {
              case SettingsEmailNotificationsEnum.never:
                return t("user:do_not_send");
              case SettingsEmailNotificationsEnum.response:
                return t("user:each_response");
              default:
                return "";
            }
          })()
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsData.tsx",
          lineNumber: 48,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsData.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsData.tsx",
    lineNumber: 30,
    columnNumber: 52
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(BoxCard, { title: t("user:settings"), withEditButton: true, nameCard: ResumeCardEnum.settings, editCard, setEditCard, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CardContainer, { as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, transition: {
    type: "spring",
    bounce: 0,
    duration: 0.4
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Wrapper, { children: renderFormFields(true) }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsData.tsx",
    lineNumber: 75,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsData.tsx",
    lineNumber: 64,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsData.tsx",
    lineNumber: 63,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Resumes/Resume/components/ResumeSettings/index.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime());
function ResumeSettings({
  editCard,
  setEditCard,
  resume,
  dictionaries,
  actionData
}) {
  return editCard === ResumeCardEnum.settings ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Form, { method: "POST", style: {
    width: "100%"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(ResumeSettingsEdit, { editCard, setEditCard, resume, dictionaries, actionData }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/index.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/index.tsx",
    lineNumber: 22,
    columnNumber: 49
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(ResumeSettingsData, { editCard, setEditCard, resume, dictionaries }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/index.tsx",
    lineNumber: 26,
    columnNumber: 15
  }, this);
}

// app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/index.tsx
init_esm();

// app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/ResumeWorkExperienceData.tsx
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime());
function ResumeWorkExperienceData({
  editCard,
  setEditCard,
  resume,
  dictionaries
}) {
  const {
    t,
    userContext
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(BoxCard, { title: t("user:work_experience"), withEditButton: true, nameCard: ResumeCardEnum.workExperience, editCard, setEditCard, children: resume?.work_experience && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(CardContainer, { as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, transition: {
    type: "spring",
    bounce: 0,
    duration: 0.4
  }, children: resume?.work_experience?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Box, { flexDirection: "column", gap: "10px", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(DataField, { label: t("user:specialization"), data: getValueLang(item.specialization_name, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/ResumeWorkExperienceData.tsx",
      lineNumber: 40,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(DataField, { label: t("user:position"), data: item.position }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/ResumeWorkExperienceData.tsx",
      lineNumber: 41,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(DataField, { label: t("user:company"), data: item.company }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/ResumeWorkExperienceData.tsx",
      lineNumber: 42,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(DataField, { label: t("user:description"), data: item.description }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/ResumeWorkExperienceData.tsx",
      lineNumber: 43,
      columnNumber: 15
    }, this),
    getValueLang(item.from, userContext.language) && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(DataField, { data: `${getValueLang(item.from, userContext.language)?.split("-").slice(0, 2).join("-") || ""} - ${!getValueLang(item.to, userContext.language) ? t("user:present_time") : getValueLang(item.to, userContext.language)?.split("-").slice(0, 2).join("-") || ""}` }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/ResumeWorkExperienceData.tsx",
      lineNumber: 44,
      columnNumber: 65
    }, this)
  ] }, item.specialization_id, true, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/ResumeWorkExperienceData.tsx",
    lineNumber: 39,
    columnNumber: 49
  }, this)) }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/ResumeWorkExperienceData.tsx",
    lineNumber: 28,
    columnNumber: 35
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/ResumeWorkExperienceData.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/index.tsx
var import_jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime());
function ResumeWorkExperience({
  editCard,
  setEditCard,
  resume,
  dictionaries,
  actionData
}) {
  return editCard === ResumeCardEnum.workExperience ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Form, { method: "POST", style: {
    width: "100%"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(ResumeWorkExperienceEdit, { editCard, setEditCard, resume, dictionaries, actionData }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/index.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/index.tsx",
    lineNumber: 23,
    columnNumber: 55
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(ResumeWorkExperienceData, { editCard, setEditCard, resume, dictionaries }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/index.tsx",
    lineNumber: 27,
    columnNumber: 15
  }, this);
}

// app/components/pages/User/Resumes/Resume/index.tsx
var import_jsx_dev_runtime15 = __toESM(require_jsx_dev_runtime());
function ResumeComponent({
  resume,
  dictionaries,
  actionSuccess,
  actionData
}) {
  const [editCard, setEditCard] = (0, import_react8.useState)(ResumeCardEnum.all);
  (0, import_react8.useEffect)(() => {
    if (actionSuccess)
      setEditCard(ResumeCardEnum.all);
  }, [resume]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Wrapper2, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(ResumeInformation, { resume, dictionaries, editCard, setEditCard, actionData }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/index.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(ResumeLocation, { resume, dictionaries, editCard, setEditCard, actionData }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/index.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(ResumeJobPosition, { resume, dictionaries, editCard, setEditCard, actionData }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/index.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(ResumeEducation, { resume, dictionaries, editCard, setEditCard, actionData }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/index.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(ResumeWorkExperience, { resume, dictionaries, editCard, setEditCard, actionData }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/index.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(ResumeAdditionalinformation, { resume, dictionaries, editCard, setEditCard, actionData }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/index.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(ResumeSettings, { resume, dictionaries, editCard, setEditCard, actionData }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/index.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Resumes/Resume/index.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}

// app/routes/user/resume.$id.tsx
var import_message = __toESM(require_message());
var import_request = __toESM(require_request());
var import_jsx_dev_runtime16 = __toESM(require_jsx_dev_runtime());
function Index() {
  const request = useLoaderData();
  const resume = request?.resume;
  const {
    dictionaries
  } = request;
  const actionData = useActionData();
  const actionSuccess = actionData?.success;
  const {
    t
  } = useApp();
  const widthScreen = useScreenWidth();
  const incompleteness = useCheckIncompleteness(resume);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Box, { flexDirection: "column", width: "100%", gap: widthScreen > 1024 ? "24px" : "16px", children: [
    incompleteness && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(BoxInformation_default, { variant: BoxInformationEnum.warning, title: t("user:resume_is_incomplete"), information: t("user:if_the_required_fields_are_not_filled_in_the_resume_then_it_will_not_be_placed_in_the_database"), flexDirection: "column" }, void 0, false, {
      fileName: "app/routes/user/resume.$id.tsx",
      lineNumber: 431,
      columnNumber: 26
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(ResumeComponent, { actionData, resume, dictionaries, actionSuccess }, void 0, false, {
      fileName: "app/routes/user/resume.$id.tsx",
      lineNumber: 433,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user/resume.$id.tsx",
    lineNumber: 430,
    columnNumber: 10
  }, this);
}
export {
  Index as default
};
