import {
  BoxSetting,
  Wrapper
} from "/build/_shared/chunk-525APBKN.js";
import {
  BoxUserEditData,
  DatePicker
} from "/build/_shared/chunk-YF7JB3BJ.js";
import {
  UploadingImageModal
} from "/build/_shared/chunk-JFP3I7KO.js";
import {
  BoxFields
} from "/build/_shared/chunk-YB7GJSGU.js";
import {
  ResumeCardEnum
} from "/build/_shared/chunk-B4CRX2YS.js";
import {
  BoxAvatar
} from "/build/_shared/chunk-Y237PHJ4.js";
import {
  CardContainer
} from "/build/_shared/chunk-OGIUXGZ2.js";
import {
  CheckBox
} from "/build/_shared/chunk-HWT5QEPJ.js";
import {
  Select
} from "/build/_shared/chunk-RHNN4TA5.js";
import {
  BoxCard,
  VariantCardEnum
} from "/build/_shared/chunk-EWP76DBX.js";
import {
  Switcher
} from "/build/_shared/chunk-TOIUBYEI.js";
import {
  Input
} from "/build/_shared/chunk-TCMGB6IX.js";
import {
  Button_default
} from "/build/_shared/chunk-AF6HCNMF.js";
import {
  motion
} from "/build/_shared/chunk-47YKAHTX.js";
import {
  Box,
  DEFAULT_USER_AVATAR,
  Text,
  TextVariantEnum,
  extractTitles,
  extractTitlesNewWay,
  getImageUrl,
  getValueLang,
  styled_components_browser_esm_default,
  useApp,
  useGetLocation,
  useGetPositionFromSpecialization
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationEdit.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function LanguageForm({
  language,
  dictionaries,
  index,
  onChange,
  onDelete
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { width: "100%", flexDirection: "column", gap: "24px", style: {
    borderBottom: `1px solid ${theme.user.borderColor}`,
    paddingBottom: "24px"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { entries: extractTitles(dictionaries?.languages, userContext.language), placeholder: t("user:language"), id: "language_id", name: "language_id", values: [language?.language_id || ""], onChange: (value) => handleChange({
      ...language,
      language_id: value
    }) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationEdit.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { entries: extractTitles(dictionaries?.languageLevel, userContext.language), placeholder: t("user:proficiency_level"), id: "proficiency_level_id", name: "proficiency_level_id", variant: "search-single", values: [language?.proficiency_level_id || ""], onChange: (value) => handleChange({
      ...language,
      proficiency_level_id: value
    }) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationEdit.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { onClick: handleDelete, priority: "secondary", fullwidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("common:delete") }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationEdit.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationEdit.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationEdit.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
}
function ResumeAdditionalinformationEdit({
  editCard,
  setEditCard,
  state,
  step,
  resume,
  dictionaries,
  actionData
}) {
  const {
    t,
    userContext
  } = useApp();
  const langs = [{
    language_id: "",
    proficiency_level_id: ""
  }];
  const [languages, setLanguages] = (0, import_react.useState)(resume?.additional_information?.languages || langs);
  const handleAddLangsClick = () => {
    setLanguages((prevLanguages) => [...prevLanguages, {
      language_id: "",
      proficiency_level_id: ""
    }]);
  };
  const handleDeleteLanguage = (index) => {
    setLanguages((prevLanguages) => prevLanguages.filter((_, i) => i !== index));
  };
  const handleLanguageChange = (index, updatedLanguage) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index] = updatedLanguage;
    setLanguages(updatedLanguages);
  };
  const staticFields = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { entries: extractTitles(dictionaries?.skills, userContext.language), placeholder: t("user:skills"), id: "skill_ids", name: "skill_ids", variant: "search-multi", values: resume?.additional_information?.skill_ids, errorText: actionData?.fieldErrors?.skill_ids?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationEdit.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { entries: extractTitles(dictionaries?.drivingLicenses, userContext.language), placeholder: t("user:driver_license"), id: "driver_license", name: "driver_license_ids", variant: "search-multi", values: resume?.additional_information?.driver_license_ids, errorText: actionData?.fieldErrors?.driver_license_ids?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationEdit.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { placeholder: t("user:other_licenses"), value: resume?.additional_information?.other_license, id: "other_licenses", name: "other_license", errorText: actionData?.fieldErrors?.other_license?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationEdit.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { entries: extractTitles(dictionaries?.religions, userContext.language), placeholder: t("user:religion"), id: "religion", name: "religion_id", values: [resume?.additional_information?.religion_id || ""], errorText: actionData?.fieldErrors?.religion_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationEdit.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { entries: extractTitles(dictionaries?.maritalStatuses, userContext.language), placeholder: t("user:marital_status"), id: "marital_status", name: "marital_status_id", values: [resume?.additional_information?.marital_status_id || ""], errorText: actionData?.fieldErrors?.marital_status_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationEdit.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { entries: extractTitles(dictionaries?.citizenship, userContext.language), placeholder: t("user:citizenship"), id: "citizenship", name: "citizenship_id", values: [resume?.additional_information?.citizenship_id || ""], errorText: actionData?.fieldErrors?.citizenship_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationEdit.tsx",
      lineNumber: 117,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationEdit.tsx",
    lineNumber: 106,
    columnNumber: 30
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxCard, { title: t("user:additional_information"), withEditButton: true, nameCard: ResumeCardEnum.additionalInformation, editCard, setEditCard, state, step, maxStep: 7, variant: VariantCardEnum.editCard, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContainer, { as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, transition: {
    type: "spring",
    bounce: 0,
    duration: 0.4
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxUserEditData, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "nameCard", type: "hidden", value: "additional_information" }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationEdit.tsx",
      lineNumber: 132,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxFields, { children: [
      languages?.map((language, index) => {
        const key = `education-${index}`;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LanguageForm, { index, language, dictionaries, onChange: handleLanguageChange, onDelete: handleDeleteLanguage }, key, false, {
          fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationEdit.tsx",
          lineNumber: 137,
          columnNumber: 20
        }, this);
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { onClick: handleAddLangsClick, priority: "secondary", fullwidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:add_language") }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationEdit.tsx",
        lineNumber: 140,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationEdit.tsx",
        lineNumber: 139,
        columnNumber: 13
      }, this),
      staticFields()
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationEdit.tsx",
      lineNumber: 134,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationEdit.tsx",
    lineNumber: 131,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationEdit.tsx",
    lineNumber: 120,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeAdditionalInformation/ResumeAdditionalInformationEdit.tsx",
    lineNumber: 119,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Resumes/Resume/components/ResumeEducation/ResumeEducationEdit.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function EducationForm({
  educationExperience,
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
  const {
    entriesPositions,
    setSpecializationState,
    position,
    specializationState
  } = useGetPositionFromSpecialization(educationExperience?.specialization_id, educationExperience?.position);
  (0, import_react2.useEffect)(() => {
    if (!educationExperience.end_year === true) {
      handleChange({
        ...educationExperience,
        end_year: void 0
      });
    }
  }, [educationExperience.present]);
  (0, import_react2.useEffect)(() => {
    if (!educationExperience?.end_year) {
      handleChange({
        ...educationExperience,
        present: true
      });
    }
  }, [educationExperience?.end_year]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { width: "100%", flexDirection: "column", gap: "24px", style: {
    borderBottom: `1px solid ${theme.user.borderColor}`,
    paddingBottom: "24px"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Select, { entries: extractTitles(dictionaries?.educationLevel, userContext.language), placeholder: t("user:education_level"), id: "education_level_id", name: "education_level_id", values: [educationExperience.education_level_id || ""], onChange: (value) => handleChange({
      ...educationExperience,
      education_level_id: value
    }), errorText: actionData?.fieldErrors?.education_level_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/ResumeEducationEdit.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { placeholder: t("user:institution"), id: "institution", name: "institution", value: educationExperience.institution, onChange: (value) => handleChange({
      ...educationExperience,
      institution: value
    }), errorText: actionData?.fieldErrors?.institution?.[`${index}`]?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/ResumeEducationEdit.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Select, { entries: extractTitles(dictionaries?.specializations, userContext.language), placeholder: t("user:specialization"), id: "specialization", name: "specialization_id", setExternalState: setSpecializationState, values: specializationState, variant: "search-single", onChange: (value) => handleChange({
      ...educationExperience,
      specialization_id: value
    }), errorText: actionData?.fieldErrors?.specialization_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/ResumeEducationEdit.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Select, { placeholder: t("user:position"), id: "position", name: "position", externalState: [position || ""], values: [educationExperience.position || ""], entries: entriesPositions, variant: "single-text", onChange: (value) => handleChange({
      ...educationExperience,
      position: value
    }), errorText: actionData?.fieldErrors?.position?.[`${index}`]?.[userContext.language], disabled: !specializationState[0] }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/ResumeEducationEdit.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DatePicker, { name: "date", nameYear: "start_year", variant: "year", defaultYear: typeof educationExperience.start_year === "string" ? educationExperience.start_year : getValueLang(educationExperience.start_year, userContext.language), placeholderYear: t("user:start_year"), onChange: (value) => handleChange({
      ...educationExperience,
      start_year: value
    }), externalStartDateLimit: getValueLang(userContext.user.birthday, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/ResumeEducationEdit.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CheckBox, { name: "present_time", label: t("user:present_time"), checked: Boolean(educationExperience?.present) || !educationExperience.end_year, onChange: (value) => {
      handleChange({
        ...educationExperience,
        present: Boolean(value),
        end_year: void 0
      });
    } }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/ResumeEducationEdit.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { width: "100%", style: {
      display: educationExperience.present ? "none" : "flex"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DatePicker, { name: "date", nameYear: "end_year", variant: "year", defaultYear: typeof educationExperience.end_year === "string" ? educationExperience.end_year : getValueLang(educationExperience.end_year, userContext.language), placeholderYear: t("user:end_year"), onChange: (value) => {
      handleChange({
        ...educationExperience,
        end_year: value
      });
    }, externalStartDateLimit: typeof educationExperience.start_year === "string" ? educationExperience.start_year : getValueLang(educationExperience.start_year, userContext.language), disabled: !educationExperience.start_year || educationExperience.present }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/ResumeEducationEdit.tsx",
      lineNumber: 117,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/ResumeEducationEdit.tsx",
      lineNumber: 114,
      columnNumber: 7
    }, this),
    educationExperience.present && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "end_year", value: "" }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/ResumeEducationEdit.tsx",
      lineNumber: 124,
      columnNumber: 39
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { onClick: handleDelete, priority: "secondary", fullwidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("common:delete") }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/ResumeEducationEdit.tsx",
      lineNumber: 128,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/ResumeEducationEdit.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/ResumeEducationEdit.tsx",
    lineNumber: 78,
    columnNumber: 10
  }, this);
}
function ResumeEducationEdit({
  editCard,
  setEditCard,
  state,
  step,
  resume,
  dictionaries,
  actionData
}) {
  const {
    t,
    theme
  } = useApp();
  const educations = [{
    education_level_id: "",
    institution: "",
    specialization_id: "",
    position: "",
    start_year: "",
    end_year: "",
    present: false
  }];
  const [educationExperiences, setEducationExperiences] = (0, import_react2.useState)(resume?.education || educations);
  const handleAddEducationClick = () => {
    setEducationExperiences((prevExperiences) => [...prevExperiences, {
      education_level_id: "",
      institution: "",
      specialization_id: "",
      position: "",
      start_year: "",
      end_year: "",
      present: false
    }]);
  };
  const handleDeleteEducation = (index) => {
    setEducationExperiences((prevExperiences) => prevExperiences.filter((_, i) => i !== index));
  };
  const handleEducationChange = (index, updatedEducation) => {
    const updatedExperiences = [...educationExperiences];
    updatedExperiences[index] = updatedEducation;
    setEducationExperiences(updatedExperiences);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxCard, { title: t("user:education"), withEditButton: true, nameCard: ResumeCardEnum.education, editCard, setEditCard, step, state, maxStep: 7, variant: VariantCardEnum.editCard, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardContainer, { as: motion.div, initial: {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { name: "nameCard", type: "hidden", value: "education" }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/ResumeEducationEdit.tsx",
      lineNumber: 194,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxUserEditData, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxFields, { children: [
      educationExperiences?.map((education, index) => {
        const key = `education-${index}`;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(EducationForm, { index, educationExperience: education, dictionaries, onChange: handleEducationChange, onDelete: handleDeleteEducation, actionData }, key, false, {
          fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/ResumeEducationEdit.tsx",
          lineNumber: 199,
          columnNumber: 20
        }, this);
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { onClick: handleAddEducationClick, priority: "secondary", fullwidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: [
        " ",
        t("user:add_education")
      ] }, void 0, true, {
        fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/ResumeEducationEdit.tsx",
        lineNumber: 202,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/ResumeEducationEdit.tsx",
        lineNumber: 201,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/ResumeEducationEdit.tsx",
      lineNumber: 196,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/ResumeEducationEdit.tsx",
      lineNumber: 195,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/ResumeEducationEdit.tsx",
    lineNumber: 183,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeEducation/ResumeEducationEdit.tsx",
    lineNumber: 182,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationEdit.tsx
var import_react3 = __toESM(require_react());

// app/components/pages/User/Resumes/Resume/components/ResumeInformation/styles.ts
var BoxPicture = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;
var Image = styled_components_browser_esm_default.img`
  width: 96px;
  height: 96px;
  object-fit: cover;
  border-radius: 50%;
  @media (min-width: 768px) {
    width: 136px;
    height: 136px;
  }
`;

// app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationEdit.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function ResumeInformationEdit({
  editCard,
  setEditCard,
  state,
  step,
  resume,
  dictionaries,
  actionData
}) {
  const {
    t,
    userContext,
    theme
  } = useApp();
  const [photo, setPhoto] = (0, import_react3.useState)(resume?.general_information?.photo_uri ? getImageUrl(resume?.general_information?.photo_uri) : DEFAULT_USER_AVATAR);
  const [showUploader, setShowUploader] = (0, import_react3.useState)(false);
  const [errorTextForImage, setErrorTextForImage] = (0, import_react3.useState)(false);
  (0, import_react3.useEffect)(() => {
    if (!photo?.startsWith("data:image/jpg") && !photo?.startsWith("data:image/jpeg") && !photo?.startsWith("https://api.test.upjob.com/m") && !photo?.startsWith("/images/user") && photo) {
      setErrorTextForImage(true);
    } else {
      setErrorTextForImage(false);
    }
  }, [photo]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BoxCard, { title: t("user:personal_information"), withEditButton: true, nameCard: ResumeCardEnum.information, editCard, setEditCard, state, step, maxStep: 7, variant: VariantCardEnum.editCard, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardContainer, { as: motion.div, initial: {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { name: "formName", type: "hidden", value: "general" }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationEdit.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BoxUserEditData, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { name: "nameCard", type: "hidden", value: "general_information" }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationEdit.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BoxPicture, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, children: t("user:profile_picture") }, void 0, false, {
          fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationEdit.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BoxAvatar, { variant: "user", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "logo", value: photo }, void 0, false, {
            fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationEdit.tsx",
            lineNumber: 76,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Image, { src: photo || DEFAULT_USER_AVATAR, alt: "avatar" }, void 0, false, {
            fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationEdit.tsx",
            lineNumber: 77,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { type: "button", priority: "secondary", onClick: () => setShowUploader(!showUploader), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: [
            " ",
            t("user:edit_photo")
          ] }, void 0, true, {
            fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationEdit.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationEdit.tsx",
            lineNumber: 78,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationEdit.tsx",
          lineNumber: 75,
          columnNumber: 13
        }, this),
        errorTextForImage && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textSmall, color: theme.errorTextColor, children: t("user:image_type_must_be_jpeg") }, void 0, false, {
          fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationEdit.tsx",
          lineNumber: 82,
          columnNumber: 35
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(UploadingImageModal, { visibility: showUploader, setVisibility: setShowUploader, defaultImage: photo, setDefaultImage: setPhoto }, void 0, false, {
          fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationEdit.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationEdit.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BoxFields, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Input, { placeholder: t("user:first_name"), id: "firstName", name: "first_name", value: resume?.general_information?.first_name || userContext.user.firstName, errorText: actionData?.fieldErrors?.first_name?.[userContext.language] }, void 0, false, {
          fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationEdit.tsx",
          lineNumber: 88,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Input, { placeholder: t("user:last_name"), id: "lastName", name: "last_name", value: resume?.general_information?.last_name || userContext.user.lastName, errorText: actionData?.fieldErrors?.last_name?.[userContext.language] }, void 0, false, {
          fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationEdit.tsx",
          lineNumber: 89,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Select, { entries: extractTitles(dictionaries?.genders, userContext.language), placeholder: t("user:gender"), id: "gender", name: "gender_id", values: [resume?.general_information?.gender_id || userContext.user.gender || ""], errorText: actionData?.fieldErrors?.gender_id?.[userContext.language] }, void 0, false, {
          fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationEdit.tsx",
          lineNumber: 90,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DatePicker, { name: "birthdate", defaultDate: getValueLang(resume?.general_information?.birthdate, userContext.language) ?? getValueLang(userContext.user.birthday, userContext.language), placeholderDay: t("user:day_of_birth"), placeholderMonth: t("user:month_of_birth"), placeholderYear: t("user:year_of_birth") }, void 0, false, {
          fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationEdit.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Input, { placeholder: t("user:email"), id: "email", name: "email", value: resume?.general_information?.email || userContext.user.email, errorText: actionData?.fieldErrors?.email?.[userContext.language] }, void 0, false, {
          fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationEdit.tsx",
          lineNumber: 93,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Input, { placeholder: t("user:phone"), id: "phone", name: "phone", variant: "phone", value: resume?.general_information?.phone || userContext.user.phone, errorText: actionData?.fieldErrors?.phone?.[userContext.language] }, void 0, false, {
          fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationEdit.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Select, { entries: extractTitlesNewWay(dictionaries?.languagesOfNotify, userContext.language), placeholder: t("user:language_of_notify"), id: "primaryLanguage", name: "language_of_notify_id", values: [resume?.general_information?.language_of_notify_id || ""], errorText: actionData?.fieldErrors?.language_of_notify_id?.[userContext.language] }, void 0, false, {
          fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationEdit.tsx",
          lineNumber: 95,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationEdit.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationEdit.tsx",
      lineNumber: 71,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationEdit.tsx",
    lineNumber: 59,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeInformation/ResumeInformationEdit.tsx",
    lineNumber: 58,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionEdit.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function ResumeJobPositionEdit({
  editCard,
  setEditCard,
  state,
  step,
  resume,
  dictionaries,
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
  } = useGetPositionFromSpecialization(resume?.job_position?.specialization_id, resume?.job_position?.position);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BoxCard, { title: t("user:job_position"), withEditButton: true, nameCard: ResumeCardEnum.jobPosition, editCard, setEditCard, state, step, maxStep: 7, variant: VariantCardEnum.editCard, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardContainer, { id: "growContainer", as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, transition: {
    type: "spring",
    bounce: 0,
    duration: 0.4
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BoxUserEditData, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BoxFields, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { name: "nameCard", type: "hidden", value: "job_position" }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionEdit.tsx",
      lineNumber: 57,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Select, { entries: extractTitles(dictionaries?.specializations, userContext.language), placeholder: t("user:specialization"), id: "specialization", name: "specialization", setExternalState: setSpecializationState, values: specializationState, variant: "search-single", errorText: actionData?.fieldErrors?.specialization_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionEdit.tsx",
      lineNumber: 59,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Select, { placeholder: t("user:position"), id: "position", name: "position", externalState: [position || ""], values: [position || ""], entries: entriesPositions, variant: "single-text", errorText: actionData?.fieldErrors?.position?.[userContext.language], disabled: !specializationState[0] }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionEdit.tsx",
      lineNumber: 60,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Select, { entries: extractTitles(dictionaries?.employment, userContext.language), placeholder: t("user:employment"), id: "employment", name: "employment", variant: "multi", values: resume?.job_position?.employment_type_ids, errorText: actionData?.fieldErrors?.employment_type_ids?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionEdit.tsx",
      lineNumber: 62,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Select, { entries: extractTitles(dictionaries?.workfeatures, userContext.language), placeholder: t("user:work_features"), id: "i_work_features", name: "work_feature_ids", values: resume?.job_position?.work_feature_ids, variant: "multi", errorText: actionData?.fieldErrors?.work_feature_ids?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionEdit.tsx",
      lineNumber: 63,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Select, { entries: extractTitles(dictionaries?.payoutPeriods, userContext.language), placeholder: t("user:salary_payout_period"), id: "i_salary_payout_period", name: "salary_payout_period_id", values: [resume?.job_position?.salary_payout_period_id || ""], errorText: actionData?.fieldErrors?.salary_payout_period_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionEdit.tsx",
      lineNumber: 64,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Input, { placeholder: t("user:salary_fixed"), id: "fixed", name: "salary_fixed", value: resume?.job_position?.salary_fixed?.toFixed(), onlyNumber: true, errorText: actionData?.fieldErrors?.salary_payout_period_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionEdit.tsx",
      lineNumber: 65,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Input, { placeholder: t("user:from"), id: "from", name: "salary_from", value: resume?.job_position?.salary_from?.toFixed(), onlyNumber: true, errorText: actionData?.fieldErrors?.salary_from?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionEdit.tsx",
      lineNumber: 66,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Input, { placeholder: t("user:to"), id: "to", name: "salary_to", value: resume?.job_position?.salary_to?.toFixed(), onlyNumber: true, errorText: actionData?.fieldErrors?.salary_to?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionEdit.tsx",
      lineNumber: 67,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Select, { entries: extractTitles(dictionaries?.currency, userContext.language), placeholder: t("user:currency"), id: "i_currency", name: "currency_id", values: [resume?.job_position?.currency_id || ""], errorText: actionData?.fieldErrors?.currency_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionEdit.tsx",
      lineNumber: 69,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Input, { variant: "textarea", placeholder: t("user:description"), id: "i_description", name: "description", value: resume?.job_position?.description, errorText: actionData?.fieldErrors?.description?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionEdit.tsx",
      lineNumber: 70,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionEdit.tsx",
    lineNumber: 56,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionEdit.tsx",
    lineNumber: 55,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionEdit.tsx",
    lineNumber: 44,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeJobPosition/ResumeJobPositionEdit.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Resumes/Resume/components/ResumeLocation/ResumeLocationEdit.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function ResumeLocationEdit({
  editCard,
  setEditCard,
  state,
  step,
  resume,
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
  } = useGetLocation(resume?.location?.country_id, resume?.location?.region_id, resume?.location?.city_id, dictionaries?.location);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BoxCard, { title: t("user:location"), withEditButton: true, nameCard: ResumeCardEnum.location, editCard, setEditCard, state, step, maxStep: 7, variant: VariantCardEnum.editCard, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CardContainer, { as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, transition: {
    type: "spring",
    bounce: 0,
    duration: 0.4
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BoxUserEditData, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BoxFields, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { name: "nameCard", type: "hidden", value: "location" }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeLocation/ResumeLocationEdit.tsx",
      lineNumber: 62,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Select, { entries: extractTitles(dictionaries?.countries, userContext.language), placeholder: t("user:country"), id: "country", name: "country_id", values: newCountry, setExternalState: setNewContry, variant: "search-single", errorText: actionData?.fieldErrors?.country_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeLocation/ResumeLocationEdit.tsx",
      lineNumber: 64,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Select, { entries: extractTitles(entriesRegions, userContext.language), setExternalState: setNewRegion, values: newRegion, placeholder: t("user:province"), id: "region", name: "region_id", variant: "search-single", errorText: actionData?.fieldErrors?.region_id?.[userContext.language], disabled: !entriesRegions || !entriesRegions?.length }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeLocation/ResumeLocationEdit.tsx",
      lineNumber: 65,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Select, { entries: extractTitles(newEntriesCity, userContext.language), values: newCity, setExternalState: setNewCity, placeholder: t("user:district"), id: "i_city", name: "city_id", variant: "search-single", errorText: actionData?.fieldErrors?.city_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeLocation/ResumeLocationEdit.tsx",
      lineNumber: 66,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Input, { placeholder: t("user:address"), id: "address", name: "address", value: resume?.location?.address, errorText: actionData?.fieldErrors?.address?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeLocation/ResumeLocationEdit.tsx",
      lineNumber: 68,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Select, { entries: extractTitles(dictionaries?.sources, userContext.language), values: [resume?.location?.source_id || ""], placeholder: t("user:source"), id: "i_source", name: "source_id", variant: "search-single", errorText: actionData?.fieldErrors?.source_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeLocation/ResumeLocationEdit.tsx",
      lineNumber: 69,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Select, { entries: extractTitles(dictionaries?.relocations, userContext.language), placeholder: t("user:relocation"), id: "i_relocation", name: "relocation_id", values: [resume?.location?.relocation_id || ""], errorText: actionData?.fieldErrors?.relocation_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeLocation/ResumeLocationEdit.tsx",
      lineNumber: 70,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CheckBox, { name: "business_trips", label: t("user:business_trips"), checked: Boolean(resume?.location?.business_trips), id: "id_business_trips", value: resume?.location?.business_trips?.toString() }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeLocation/ResumeLocationEdit.tsx",
      lineNumber: 71,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeLocation/ResumeLocationEdit.tsx",
    lineNumber: 61,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeLocation/ResumeLocationEdit.tsx",
    lineNumber: 60,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeLocation/ResumeLocationEdit.tsx",
    lineNumber: 49,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeLocation/ResumeLocationEdit.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsEdit.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function ResumeSettingsEdit({
  editCard,
  setEditCard,
  state,
  step,
  resume,
  dictionaries,
  actionData
}) {
  const {
    t
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(BoxCard, { title: t("user:settings"), withEditButton: true, nameCard: ResumeCardEnum.settings, editCard, setEditCard, state, step, maxStep: 7, variant: VariantCardEnum.editCard, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CardContainer, { as: motion.div, initial: {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { name: "nameCard", type: "hidden", value: "settings" }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsEdit.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Wrapper, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(BoxSetting, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: t("user:show_resume_to") }, void 0, false, {
          fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsEdit.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Switcher, { checked: resume?.settings?.show_resume_to === "anyone", value: (resume?.settings?.show_resume_to === "anyone").toString(), htmlLabel: "i_show_phone", name: "show_resume_to", variant: "default", checkedLabel: t("user:anyone"), unCheckedLabel: t("user:nobody") }, void 0, false, {
          fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsEdit.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsEdit.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(BoxSetting, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: t("user:show_phone_number_to") }, void 0, false, {
          fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsEdit.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Switcher, { checked: resume?.settings?.show_phone_number_to === "anyone", value: (resume?.settings?.show_phone_number_to === "anyone").toString(), htmlLabel: "show_phone_number_to", name: "show_phone_number_to", variant: "default", checkedLabel: t("user:anyone"), unCheckedLabel: t("user:nobody") }, void 0, false, {
          fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsEdit.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsEdit.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(BoxSetting, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: t("user:show_email_to") }, void 0, false, {
          fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsEdit.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Switcher, { checked: String(resume?.settings?.show_email_to) === "anyone", value: String(resume?.settings?.show_email_to === "anyone"), htmlLabel: "show_email_to", name: "show_email_to", variant: "default", checkedLabel: t("user:anyone"), unCheckedLabel: t("user:nobody") }, void 0, false, {
          fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsEdit.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsEdit.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(BoxSetting, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Select, { entries: [["response", t("user:each_response")], ["never", t("user:do_not_send")]], placeholder: t("user:email_notifications"), id: "email_notifications", name: "email_notifications", values: [resume?.settings?.email_notifications || ""] }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsEdit.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsEdit.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsEdit.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsEdit.tsx",
    lineNumber: 39,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeSettings/ResumeSettingsEdit.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/ResumeWorkExperienceEdit.tsx
var import_react4 = __toESM(require_react());
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
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
  const {
    entriesPositions,
    setSpecializationState,
    position,
    specializationState
  } = useGetPositionFromSpecialization(workExperience?.specialization_id, workExperience?.position);
  (0, import_react4.useEffect)(() => {
    if (!workExperience.to === true) {
      handleChange({
        ...workExperience,
        to: void 0
      });
    }
  }, [workExperience.present]);
  (0, import_react4.useEffect)(() => {
    if (!workExperience.to && !workExperience.present) {
      handleChange({
        ...workExperience,
        present: true
      });
    }
  }, [workExperience.to]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Box, { width: "100%", flexDirection: "column", gap: "24px", style: {
    borderBottom: `1px solid ${theme.user.borderColor}`,
    paddingBottom: "24px"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Select, { entries: extractTitles(dictionaries?.specializations, userContext.language), placeholder: t("user:specialization"), id: "specialization", name: "specialization_id", setExternalState: setSpecializationState, values: specializationState, variant: "search-single", onChange: (value) => handleChange({
      ...workExperience,
      specialization_id: value
    }), errorText: actionData?.fieldErrors?.specialization_id?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/ResumeWorkExperienceEdit.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Select, { placeholder: t("user:position"), id: "position", name: "position", externalState: [position || ""], values: [workExperience.position || ""], entries: entriesPositions, variant: "single-text", onChange: (value) => handleChange({
      ...workExperience,
      position: value
    }), errorText: actionData?.fieldErrors?.position?.[`${index}`]?.[userContext.language], disabled: !specializationState[0] }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/ResumeWorkExperienceEdit.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Input, { placeholder: t("user:company"), id: "company", name: "company", value: workExperience.company, onChange: (value) => handleChange({
      ...workExperience,
      company: value
    }), errorText: actionData?.fieldErrors?.company?.[`${index}`]?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/ResumeWorkExperienceEdit.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DatePicker, { name: "from", variant: "year-month", defaultDate: typeof workExperience.from === "string" ? workExperience.from : getValueLang(workExperience.from, userContext.language), placeholderYear: t("user:year"), placeholderMonth: t("user:month"), onChange: (value) => handleChange({
      ...workExperience,
      from: value
    }), externalStartDateLimit: getValueLang(userContext.user.birthday, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/ResumeWorkExperienceEdit.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CheckBox, { name: "present_time", label: t("user:present_time"), checked: Boolean(workExperience?.present) || !workExperience.to, onChange: (value) => {
      handleChange({
        ...workExperience,
        present: Boolean(value),
        to: void 0
      });
    } }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/ResumeWorkExperienceEdit.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Box, { width: "100%", style: {
      display: workExperience.present ? "none" : "flex"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DatePicker, { name: "to", variant: "year-month", defaultDate: typeof workExperience.to === "string" ? workExperience.to : getValueLang(workExperience.to, userContext.language), placeholderYear: t("user:year"), placeholderMonth: t("user:month"), onChange: (value) => handleChange({
      ...workExperience,
      to: value
    }), externalStartDateLimit: typeof workExperience.from === "string" ? workExperience.from : getValueLang(workExperience.from, userContext.language), disabled: !workExperience.from || workExperience.present }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/ResumeWorkExperienceEdit.tsx",
      lineNumber: 111,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/ResumeWorkExperienceEdit.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Input, { variant: "textarea", placeholder: t("user:description"), id: "description", name: "description", value: workExperience.description, onChange: (value) => handleChange({
      ...workExperience,
      description: value
    }), errorText: actionData?.fieldErrors?.description?.[`${index}`]?.[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/ResumeWorkExperienceEdit.tsx",
      lineNumber: 117,
      columnNumber: 7
    }, this),
    workExperience.present && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "hidden", name: "to", value: "" }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/ResumeWorkExperienceEdit.tsx",
      lineNumber: 121,
      columnNumber: 34
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button_default, { onClick: handleDelete, priority: "secondary", fullwidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("common:delete") }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/ResumeWorkExperienceEdit.tsx",
      lineNumber: 125,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/ResumeWorkExperienceEdit.tsx",
      lineNumber: 124,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/ResumeWorkExperienceEdit.tsx",
    lineNumber: 77,
    columnNumber: 10
  }, this);
}
function ResumeWorkExperienceEdit({
  editCard,
  setEditCard,
  state,
  step,
  resume,
  dictionaries,
  actionData
}) {
  const {
    t,
    theme
  } = useApp();
  const works = [{
    specialization_id: "",
    position: "",
    company: "",
    from: "",
    to: "",
    description: "",
    present: false
  }];
  const [workExperiences, setWorkExperiences] = (0, import_react4.useState)(resume?.work_experience || works);
  const handleAddWorksClick = () => {
    setWorkExperiences((prevExperiences) => [...prevExperiences, {
      specialization_id: "",
      position: "",
      company: "",
      from: "",
      to: "",
      description: "",
      present: false
    }]);
  };
  const handleDeleteWorkExperience = (index) => {
    setWorkExperiences((prevExperiences) => prevExperiences.filter((_, i) => i !== index));
  };
  const handleWorkExperienceChange = (index, updatedWorkExperience) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences[index] = updatedWorkExperience;
    setWorkExperiences(updatedExperiences);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(BoxCard, { title: t("user:work_experience"), withEditButton: true, nameCard: ResumeCardEnum.workExperience, editCard, setEditCard, state, step, maxStep: 7, variant: VariantCardEnum.editCard, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardContainer, { as: motion.div, initial: {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { name: "nameCard", type: "hidden", value: "work_experience" }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/ResumeWorkExperienceEdit.tsx",
      lineNumber: 191,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(BoxUserEditData, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(BoxFields, { children: [
      workExperiences?.map((workExperience, index) => {
        const key = `workExperience-${index}`;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(WorkExperienceForm, { index, workExperience, dictionaries, onChange: handleWorkExperienceChange, onDelete: handleDeleteWorkExperience, actionData }, key, false, {
          fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/ResumeWorkExperienceEdit.tsx",
          lineNumber: 196,
          columnNumber: 20
        }, this);
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button_default, { onClick: handleAddWorksClick, priority: "secondary", fullwidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:add_work_experience") }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/ResumeWorkExperienceEdit.tsx",
        lineNumber: 199,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/ResumeWorkExperienceEdit.tsx",
        lineNumber: 198,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/ResumeWorkExperienceEdit.tsx",
      lineNumber: 193,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/ResumeWorkExperienceEdit.tsx",
      lineNumber: 192,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/ResumeWorkExperienceEdit.tsx",
    lineNumber: 180,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Resumes/Resume/components/ResumeWorkExperience/ResumeWorkExperienceEdit.tsx",
    lineNumber: 179,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Resumes/Resume/styles.ts
var BoxCustomData = styled_components_browser_esm_default.div`
  padding: 8px 12px;
  border-radius: 80px;
  border: 1px solid ${({ theme }) => theme.user.borderColor};
  height: 40px;
  @media (min-width: 1024px) {
    height: 44px;
  }
`;
var Wrapper2 = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  @media (min-width: 1024px) {
    gap: 24px;
  }
`;
var EmploymentContainer = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    padding: 8px 0;
  }
`;

export {
  ResumeAdditionalinformationEdit,
  ResumeEducationEdit,
  ResumeInformationEdit,
  ResumeJobPositionEdit,
  ResumeLocationEdit,
  ResumeSettingsEdit,
  ResumeWorkExperienceEdit,
  Wrapper2 as Wrapper
};
//# sourceMappingURL=/build/_shared/chunk-GD4GP4OC.js.map
