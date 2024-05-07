import {
  BoxDataFields,
  BoxDataFieldsInner,
  SignInForRequest
} from "/build/_shared/chunk-R2BJLWHH.js";
import {
  BoxControlContainer
} from "/build/_shared/chunk-JTDZABLX.js";
import {
  ResumeCardEnum
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
  CheckBox
} from "/build/_shared/chunk-HWT5QEPJ.js";
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
  DEFAULT_USER_AVATAR,
  Text,
  TextVariantEnum,
  calculateAge,
  getImageUrl,
  getSalary,
  getValueFromDictionaries,
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

// app/components/entities/cardComponents/fullCard/ResumeFullCardAboutEmployee/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ResumeFullCardAboutEmployee({
  resume,
  dictionaries
}) {
  const {
    t,
    userContext
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxDataFieldsInner, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, className: "title", children: t("user:about_employee") }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardAboutEmployee/index.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    resume?.job_position?.description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataField, { data: resume?.job_position?.description }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardAboutEmployee/index.tsx",
      lineNumber: 25,
      columnNumber: 45
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { gap: "24px", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataField, { label: t("user:gender"), data: getValueLang(resume?.general_information?.gender_name, userContext.language) }, void 0, false, {
        fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardAboutEmployee/index.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataField, { label: t("user:age"), data: calculateAge(resume?.general_information?.birthdate?.en).toString() }, void 0, false, {
        fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardAboutEmployee/index.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardAboutEmployee/index.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    resume?.additional_information?.languages?.length && resume?.additional_information?.languages?.[0].language_id && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataField, { variant: "custom", label: t("user:language_knowledge"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", flexWrap: "wrap", gap: "8px", children: resume?.additional_information?.languages?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataField, { data: `${getValueLang(item.language_name, userContext.language) || ""} (${getValueLang(item.proficiency_level_name, userContext.language) || ""})` }, item.language_id, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardAboutEmployee/index.tsx",
      lineNumber: 33,
      columnNumber: 71
    }, this)) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardAboutEmployee/index.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardAboutEmployee/index.tsx",
      lineNumber: 31,
      columnNumber: 123
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardAboutEmployee/index.tsx",
    lineNumber: 21,
    columnNumber: 10
  }, this);
}

// app/components/entities/cardComponents/fullCard/ResumeFullCardAdditional/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function ResumeFullCardAdditional({
  resume
}) {
  const {
    t,
    userContext
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxDataFieldsInner, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, className: "title", children: t("user:additionals") }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardAdditional/index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { gap: "24px", children: [
      resume?.additional_information?.citizenship_name && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataField, { label: t("user:citizenship"), data: getValueLang(resume?.additional_information?.citizenship_name, userContext.language) }, void 0, false, {
        fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardAdditional/index.tsx",
        lineNumber: 23,
        columnNumber: 62
      }, this),
      resume?.location?.relocation_name && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataField, { label: t("user:relocation"), data: getValueLang(resume?.location?.relocation_name, userContext.language) }, void 0, false, {
        fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardAdditional/index.tsx",
        lineNumber: 24,
        columnNumber: 47
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardAdditional/index.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { gap: "24px", children: [
      resume?.additional_information?.religion_name && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataField, { label: t("user:religion"), data: getValueLang(resume?.additional_information?.religion_name, userContext.language) }, void 0, false, {
        fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardAdditional/index.tsx",
        lineNumber: 27,
        columnNumber: 59
      }, this),
      resume?.additional_information?.marital_status_name && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataField, { label: t("user:marital_status"), data: getValueLang(resume?.additional_information?.marital_status_name, userContext.language) }, void 0, false, {
        fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardAdditional/index.tsx",
        lineNumber: 28,
        columnNumber: 65
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardAdditional/index.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { gap: "24px" }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardAdditional/index.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    resume?.additional_information?.driver_license_names?.length && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataField, { variant: "custom", label: t("user:driver_license"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { flexDirection: "row", flexWrap: "wrap", gap: "4px", children: resume?.additional_information?.driver_license_names?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxDataChips, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: getValueLang(item, userContext.language) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardAdditional/index.tsx",
      lineNumber: 34,
      columnNumber: 17
    }, this) }, item.en, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardAdditional/index.tsx",
      lineNumber: 33,
      columnNumber: 80
    }, this)) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardAdditional/index.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardAdditional/index.tsx",
      lineNumber: 31,
      columnNumber: 72
    }, this),
    resume?.additional_information?.other_license && resume?.additional_information?.other_license?.[0] && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataField, { variant: "custom", label: t("user:other_licenses"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { flexDirection: "row", flexWrap: "wrap", gap: "4px", children: Array.isArray(resume?.additional_information?.other_license) ? resume?.additional_information?.other_license?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxDataChips, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: item }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardAdditional/index.tsx",
      lineNumber: 44,
      columnNumber: 21
    }, this) }, item, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardAdditional/index.tsx",
      lineNumber: 43,
      columnNumber: 138
    }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxDataChips, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: resume?.additional_information?.other_license }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardAdditional/index.tsx",
      lineNumber: 46,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardAdditional/index.tsx",
      lineNumber: 45,
      columnNumber: 38
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardAdditional/index.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardAdditional/index.tsx",
      lineNumber: 41,
      columnNumber: 111
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardAdditional/index.tsx",
    lineNumber: 18,
    columnNumber: 10
  }, this);
}

// app/components/entities/cardComponents/fullCard/ResumeFullCardEducation/index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function ResumeFullCardEducation({
  resume,
  dictionaries
}) {
  const {
    t,
    userContext
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BoxDataFieldsInner, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, className: "title", children: t("user:education") }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardEducation/index.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    resume?.education?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { flexDirection: "column", gap: "10px", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { gap: "24px", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DataField, { label: t("user:education_level"), data: getValueLang(item.education_level_name, userContext.language) }, void 0, false, {
          fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardEducation/index.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DataField, { label: t("user:institution"), data: item.institution }, void 0, false, {
          fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardEducation/index.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardEducation/index.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DataField, { label: t("user:specialization"), data: getValueLang(item.specialization_name, userContext.language) }, void 0, false, {
        fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardEducation/index.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      getValueLang(item.start_year, userContext.language) && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DataField, { data: `${getValueLang(item.start_year, userContext.language)?.split("-").slice(0, 2).join("-") || ""} - ${!getValueLang(item.end_year, userContext.language) ? t("user:present_time") : getValueLang(item.end_year, userContext.language)?.split("-").slice(0, 2).join("-") || ""}` }, void 0, false, {
        fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardEducation/index.tsx",
        lineNumber: 31,
        columnNumber: 67
      }, this)
    ] }, item.specialization_id, true, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardEducation/index.tsx",
      lineNumber: 25,
      columnNumber: 39
    }, this))
  ] }, void 0, true, {
    fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardEducation/index.tsx",
    lineNumber: 21,
    columnNumber: 10
  }, this);
}

// app/components/entities/cardComponents/fullCard/ResumeFullCardHeading/index.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function ResumeFullCardHeading({
  resume
}) {
  const {
    theme,
    t,
    userContext
  } = useApp();
  const widthScreen = useScreenWidth();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BoxHeading, { variant: EntityVariantEnum.resume, className: "fullCard", sizeVariant: SizeCardVariantEnum.full, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BoxAvatar, { variant: "search", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: resume?.general_information?.photo_uri ? getImageUrl(resume?.general_information?.photo_uri) : DEFAULT_USER_AVATAR, alt: "company logo" }, void 0, false, {
        fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardHeading/index.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardHeading/index.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HeadingInformation, { variant: EntityVariantEnum.resume, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, className: "title", children: `${resume?.general_information?.first_name || ""} ${resume?.general_information?.last_name || ""}` }, void 0, false, {
          fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardHeading/index.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, color: theme.user.descriptionTextColor, children: resume?.job_position?.position }, void 0, false, {
          fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardHeading/index.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        widthScreen >= 768 && (resume?.job_position?.salary_fixed || resume?.job_position?.salary_from && resume?.job_position?.salary_to) && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { children: resume.job_position?.salary_from && resume.job_position?.salary_to ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { className: "price", variant: TextVariantEnum.textHeading3, children: [
          resume.job_position?.salary_from,
          " - ",
          resume.job_position?.salary_to,
          "\xA0",
          getSalary(resume.job_position.currency_name?.en, resume.job_position.salary_payout_period_name?.en, userContext.language)
        ] }, void 0, true, {
          fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardHeading/index.tsx",
          lineNumber: 40,
          columnNumber: 87
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { className: "price", variant: TextVariantEnum.textHeading3, children: [
          resume.job_position?.salary_fixed,
          "\xA0",
          getSalary(resume.job_position.currency_name?.en, resume.job_position.salary_payout_period_name?.en, userContext.language)
        ] }, void 0, true, {
          fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardHeading/index.tsx",
          lineNumber: 44,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardHeading/index.tsx",
          lineNumber: 39,
          columnNumber: 146
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardHeading/index.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardHeading/index.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    widthScreen < 768 && (resume?.job_position?.salary_fixed || resume?.job_position?.salary_from && resume?.job_position?.salary_to) && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DataBox, { variantSize: SizeCardVariantEnum.full, borderBottom: widthScreen < 768, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { children: resume?.job_position?.salary_from && resume?.job_position?.salary_to ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { className: "price", variant: TextVariantEnum.textHeading3, children: [
      resume?.job_position?.salary_from,
      " - ",
      resume?.job_position?.salary_to,
      "\xA0",
      getSalary(resume?.job_position?.currency_name?.en, resume?.job_position?.salary_payout_period_name?.en, userContext.language)
    ] }, void 0, true, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardHeading/index.tsx",
      lineNumber: 54,
      columnNumber: 87
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { className: "price", variant: TextVariantEnum.textHeading3, children: [
      resume?.job_position?.salary_fixed,
      "\xA0",
      getSalary(resume?.job_position?.currency_name?.en, resume?.job_position?.salary_payout_period_name?.en, userContext.language)
    ] }, void 0, true, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardHeading/index.tsx",
      lineNumber: 58,
      columnNumber: 27
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardHeading/index.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardHeading/index.tsx",
      lineNumber: 52,
      columnNumber: 141
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardHeading/index.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}

// app/components/entities/cardComponents/fullCard/ResumeFullCardInformation/index.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function ResumeFullCardInformation({
  resume,
  dictionaries
}) {
  const {
    theme,
    t,
    userContext
  } = useApp();
  const widthScreen = useScreenWidth();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BoxDataFieldsInner, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, className: "title", children: t("user:information") }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardInformation/index.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Box, { gap: "24px", children: [
      resume?.location?.city_name && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataField, { label: t("user:district"), data: getValueLang(resume.location.city_name, userContext.language) }, void 0, false, {
        fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardInformation/index.tsx",
        lineNumber: 29,
        columnNumber: 41
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataField, { label: t("user:phone"), data: resume?.general_information?.phone }, void 0, false, {
        fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardInformation/index.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardInformation/index.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataField, { label: t("user:email"), data: resume?.general_information?.email }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardInformation/index.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    resume?.job_position?.employment_type_names?.[0] && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataField, { variant: "custom", label: t("user:employment"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Box, { flexDirection: "row", gap: "4px", flexWrap: "wrap", children: resume?.job_position?.employment_type_ids?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BoxDataChips, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: getValueFromDictionaries(dictionaries?.employment, item, userContext.language) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardInformation/index.tsx",
      lineNumber: 37,
      columnNumber: 17
    }, this) }, item, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardInformation/index.tsx",
      lineNumber: 36,
      columnNumber: 69
    }, this)) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardInformation/index.tsx",
      lineNumber: 35,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardInformation/index.tsx",
      lineNumber: 34,
      columnNumber: 60
    }, this),
    resume?.job_position?.work_feature_names?.[0] && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataField, { variant: "custom", label: t("user:work_features"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Box, { flexDirection: "row", gap: "4px", flexWrap: "wrap", children: resume?.job_position?.work_feature_ids?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BoxDataChips, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: getValueFromDictionaries(dictionaries?.workfeatures, item, userContext.language) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardInformation/index.tsx",
      lineNumber: 47,
      columnNumber: 17
    }, this) }, item, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardInformation/index.tsx",
      lineNumber: 46,
      columnNumber: 66
    }, this)) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardInformation/index.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardInformation/index.tsx",
      lineNumber: 44,
      columnNumber: 57
    }, this),
    resume?.location?.business_trips === true && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataField, { variant: "custom", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Box, { flexDirection: "column", gap: "8px", padding: "8px 0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CheckBox, { disabled: true, name: "fullTime", label: t("user:business_trips"), checked: resume?.location?.business_trips }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardInformation/index.tsx",
      lineNumber: 55,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardInformation/index.tsx",
      lineNumber: 54,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardInformation/index.tsx",
      lineNumber: 53,
      columnNumber: 53
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataField, { label: t("user:salary_payout_period"), data: getValueLang(resume?.job_position?.salary_payout_period_name, userContext.language) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardInformation/index.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardInformation/index.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}

// app/components/entities/cardComponents/fullCard/ResumeFullCardSkills/index.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function ResumeFullCardSkills({
  resume
}) {
  const {
    t,
    userContext
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(BoxDataFieldsInner, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, className: "title", children: t("user:skills") }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardSkills/index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DataField, { variant: "custom", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Box, { flexDirection: "row", flexWrap: "wrap", gap: "4px", children: resume?.additional_information?.skill_names?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(BoxDataChips, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: getValueLang(item, userContext.language) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardSkills/index.tsx",
      lineNumber: 25,
      columnNumber: 15
    }, this) }, item.en, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardSkills/index.tsx",
      lineNumber: 24,
      columnNumber: 69
    }, this)) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardSkills/index.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardSkills/index.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardSkills/index.tsx",
    lineNumber: 18,
    columnNumber: 10
  }, this);
}

// app/components/entities/cardComponents/fullCard/ResumeFullCardWorkExperience/index.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
function ResumeFullCardWorkExperience({
  resume,
  dictionaries
}) {
  const {
    t,
    userContext
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(BoxDataFieldsInner, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, className: "title", children: t("user:work_experience") }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardWorkExperience/index.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    resume?.work_experience?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Box, { flexDirection: "column", gap: "10px", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Box, { gap: "24px", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DataField, { label: t("user:specialization"), data: getValueLang(item.specialization_name, userContext.language) }, void 0, false, {
          fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardWorkExperience/index.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DataField, { label: t("user:position"), data: item.position }, void 0, false, {
          fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardWorkExperience/index.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardWorkExperience/index.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DataField, { label: t("user:company"), data: item.company }, void 0, false, {
        fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardWorkExperience/index.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      getValueLang(item.from, userContext.language) && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DataField, { data: `${getValueLang(item.from, userContext.language)?.split("-").slice(0, 2).join("-") || ""} - ${!getValueLang(item.to, userContext.language) ? t("user:present_time") : getValueLang(item.to, userContext.language)?.split("-").slice(0, 2).join("-") || ""}` }, void 0, false, {
        fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardWorkExperience/index.tsx",
        lineNumber: 31,
        columnNumber: 61
      }, this),
      item.description && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DataField, { label: t("user:description"), data: item.description }, void 0, false, {
        fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardWorkExperience/index.tsx",
        lineNumber: 32,
        columnNumber: 32
      }, this)
    ] }, item.specialization_id, true, {
      fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardWorkExperience/index.tsx",
      lineNumber: 25,
      columnNumber: 45
    }, this))
  ] }, void 0, true, {
    fileName: "app/components/entities/cardComponents/fullCard/ResumeFullCardWorkExperience/index.tsx",
    lineNumber: 21,
    columnNumber: 10
  }, this);
}

// app/components/entities/cardWidgets/ResumeFullCard/index.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
function ResumeFullCardWidget({
  resume,
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(BoxCard, { nameCard: ResumeCardEnum.information, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CardContainer, { as: motion.div, initial: {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ResumeFullCardHeading, { resume }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/ResumeFullCard/index.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this),
    status && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Box, { padding: "16px 0 0", width: "fit-content", children: status }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/ResumeFullCard/index.tsx",
      lineNumber: 54,
      columnNumber: 20
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(BoxDataFields, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ResumeFullCardAboutEmployee, { resume, dictionaries }, void 0, false, {
        fileName: "app/components/entities/cardWidgets/ResumeFullCard/index.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ResumeFullCardInformation, { resume, dictionaries }, void 0, false, {
        fileName: "app/components/entities/cardWidgets/ResumeFullCard/index.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      resume?.work_experience?.length && resume?.work_experience[0]?.from && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ResumeFullCardWorkExperience, { resume }, void 0, false, {
        fileName: "app/components/entities/cardWidgets/ResumeFullCard/index.tsx",
        lineNumber: 60,
        columnNumber: 83
      }, this),
      resume?.education?.length && resume?.education[0]?.institution && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ResumeFullCardEducation, { resume, dictionaries }, void 0, false, {
        fileName: "app/components/entities/cardWidgets/ResumeFullCard/index.tsx",
        lineNumber: 61,
        columnNumber: 78
      }, this),
      resume?.additional_information?.skill_ids?.[0] && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ResumeFullCardSkills, { resume }, void 0, false, {
        fileName: "app/components/entities/cardWidgets/ResumeFullCard/index.tsx",
        lineNumber: 62,
        columnNumber: 62
      }, this),
      (resume?.additional_information?.citizenship_name || resume?.location?.relocation_name || resume?.additional_information?.religion_name || resume?.additional_information?.marital_status_name || resume?.additional_information?.driver_license_names?.length || resume?.additional_information?.other_license?.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ResumeFullCardAdditional, { resume }, void 0, false, {
        fileName: "app/components/entities/cardWidgets/ResumeFullCard/index.tsx",
        lineNumber: 63,
        columnNumber: 328
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/cardWidgets/ResumeFullCard/index.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(BoxControlContainer, { variant, id: resume?.id, responseId, typeCard: "full", handleRequest, stateResponse, typeResponse, typeEntity: EntityVariantEnum.resume, responseAction }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/ResumeFullCard/index.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this),
    !userContext?.user?.isAuthenticated && widthScreen >= 1280 && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(SignInForRequest, { variant: EntityVariantEnum.resume }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/ResumeFullCard/index.tsx",
      lineNumber: 66,
      columnNumber: 72
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/cardWidgets/ResumeFullCard/index.tsx",
    lineNumber: 42,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/entities/cardWidgets/ResumeFullCard/index.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}

export {
  ResumeFullCardWidget
};
//# sourceMappingURL=/build/_shared/chunk-YV5GCJGF.js.map
