import {
  BoxContainer,
  ButtonsControl,
  HeaderWrapper,
  TextWrapper,
  TitleWrapper
} from "/build/_shared/chunk-I66SYKBJ.js";
import {
  ResumeRequest
} from "/build/_shared/chunk-BKQY745J.js";
import {
  VacancyRequest
} from "/build/_shared/chunk-4HPJCB5S.js";
import {
  Modal
} from "/build/_shared/chunk-ZQ6IGHYP.js";
import {
  Button_default
} from "/build/_shared/chunk-AF6HCNMF.js";
import {
  BoxInformationEnum,
  BoxInformation_default
} from "/build/_shared/chunk-D6JIAAYU.js";
import {
  Close_default,
  ModalCloseButton,
  VariantModalEnum
} from "/build/_shared/chunk-TSAGNYDI.js";
import {
  Box,
  Text,
  TextVariantEnum,
  routes_default,
  styled_components_browser_esm_default,
  useApp
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  Link,
  init_esm,
  useFetcher
} from "/build/_shared/chunk-IQJCUQRT.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/entities/ModalRequestList/index.tsx
init_esm();
var import_react3 = __toESM(require_react());

// app/components/entities/ModalRequestNoEntity/index.tsx
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ModalRequestNoEntity({
  visibility,
  setVisibility,
  variant
}) {
  const {
    t,
    theme
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal, { visibility, setVisibility, variant: VariantModalEnum.confirmDelete, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderWrapper, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleWrapper, { children: [
        variant === "vacancy" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, children: t("user:check_your_vacancies") }, void 0, false, {
          fileName: "app/components/entities/ModalRequestNoEntity/index.tsx",
          lineNumber: 29,
          columnNumber: 39
        }, this),
        variant === "resume" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, children: t("user:check_your_resumes") }, void 0, false, {
          fileName: "app/components/entities/ModalRequestNoEntity/index.tsx",
          lineNumber: 30,
          columnNumber: 38
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/entities/ModalRequestNoEntity/index.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalCloseButton, { onClick: () => setVisibility(!visibility), variant: "withHeader", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Close_default, { color: theme.modal.svgColor }, void 0, false, {
        fileName: "app/components/entities/ModalRequestNoEntity/index.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/entities/ModalRequestNoEntity/index.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/ModalRequestNoEntity/index.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextWrapper, { children: [
      variant === "vacancy" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, children: t("user:you_dont_have_a_published_vacancy_to_send_to_an_candidate") }, void 0, false, {
        fileName: "app/components/entities/ModalRequestNoEntity/index.tsx",
        lineNumber: 38,
        columnNumber: 37
      }, this),
      variant === "resume" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, children: t("user:you_dont_have_a_published_resume_to_send_to_an_employer") }, void 0, false, {
        fileName: "app/components/entities/ModalRequestNoEntity/index.tsx",
        lineNumber: 41,
        columnNumber: 36
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/ModalRequestNoEntity/index.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonsControl, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "secondary", onClick: () => setVisibility(false), className: "growingButton", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("common:cancel") }, void 0, false, {
        fileName: "app/components/entities/ModalRequestNoEntity/index.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/entities/ModalRequestNoEntity/index.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: variant === "vacancy" ? routes_default.user.vacancy.root : routes_default.user.resume.root, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "primary", className: "growingButton", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: variant === "vacancy" ? t("user:go_to_vacancies") : t("user:go_to_resumes") }, void 0, false, {
        fileName: "app/components/entities/ModalRequestNoEntity/index.tsx",
        lineNumber: 52,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/entities/ModalRequestNoEntity/index.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/entities/ModalRequestNoEntity/index.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/ModalRequestNoEntity/index.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/ModalRequestNoEntity/index.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/entities/ModalRequestNoEntity/index.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}

// app/components/entities/ModalRequestList/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var BoxCards = styled_components_browser_esm_default.div.withConfig({
  displayName: "ModalRequestList__BoxCards",
  componentId: "sc-bp64kc-0"
})(["max-height:624px;margin-top:24px;width:100%;overflow:auto;display:flex;flex-direction:column;align-items:flex-start;gap:24px;"]);
function ModalRequestList({
  visibility,
  setVisibility,
  variant,
  resumes,
  vacancies,
  resumeId,
  vacancyId,
  dictionaries,
  companies,
  actionRequest
}) {
  const {
    t,
    userContext,
    theme
  } = useApp();
  const request = useFetcher();
  const [actionRoute, setActionRoute] = (0, import_react3.useState)("");
  const [selectedCard, setSelectedCard] = (0, import_react3.useState)("");
  const [publishedResumes, setPublishedResumes] = (0, import_react3.useState)();
  const [publishedVacancies, setPublishedVacancies] = (0, import_react3.useState)();
  (0, import_react3.useEffect)(() => {
    if (request.data?.success)
      setVisibility(false);
  }, [request.data?.success]);
  (0, import_react3.useEffect)(() => {
    if (resumes) {
      const newResume = resumes.filter((resume) => resume.published);
      setPublishedResumes(newResume);
    }
    if (vacancies) {
      const newVacancies = vacancies.filter((vacancy) => vacancy.published);
      setPublishedVacancies(newVacancies);
    }
  }, [resumes, vacancies]);
  (0, import_react3.useEffect)(() => {
    if (variant === "resume") {
      setActionRoute(`/search/vacancy/${vacancyId || ""}/request`);
    } else if (variant === "vacancy") {
      setActionRoute(`/search/resume/${resumeId || ""}/request`);
    }
  }, [variant]);
  const handleConfirm = (id) => {
    if (id)
      setSelectedCard(id);
  };
  return variant === "vacancy" && publishedVacancies && !publishedVacancies[0] || variant === "resume" && publishedResumes && !publishedResumes[0] ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ModalRequestNoEntity, { visibility, setVisibility, variant }, void 0, false, {
    fileName: "app/components/entities/ModalRequestList/index.tsx",
    lineNumber: 85,
    columnNumber: 150
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal, { visibility, setVisibility, variant: VariantModalEnum.request, children: [
    request.data === void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxInformation_default, { variant: BoxInformationEnum.info, title: variant === "resume" ? t("user:select_resume_to_send") : t("user:select_vacancy_to_send") }, void 0, false, {
      fileName: "app/components/entities/ModalRequestList/index.tsx",
      lineNumber: 86,
      columnNumber: 38
    }, this),
    request.data?.success === false && request.data.message && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxInformation_default, { variant: BoxInformationEnum.error, title: request.data.message[userContext.language] }, void 0, false, {
      fileName: "app/components/entities/ModalRequestList/index.tsx",
      lineNumber: 88,
      columnNumber: 67
    }, this),
    request.data?.success === true && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxInformation_default, { variant: BoxInformationEnum.success, title: t("user:your_request_has_been_sent") }, void 0, false, {
      fileName: "app/components/entities/ModalRequestList/index.tsx",
      lineNumber: 90,
      columnNumber: 42
    }, this),
    variant === "resume" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxCards, { children: publishedResumes?.map((resume) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { width: "100%", style: {
      cursor: "pointer",
      borderRadius: "12px",
      border: resume.id === selectedCard ? `2px solid ${theme.modal.borderCardsColor}` : ""
    }, onClick: () => handleConfirm(resume?.id), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ResumeRequest, { resume, dictionaries }, void 0, false, {
      fileName: "app/components/entities/ModalRequestList/index.tsx",
      lineNumber: 97,
      columnNumber: 15
    }, this) }, resume?.id, false, {
      fileName: "app/components/entities/ModalRequestList/index.tsx",
      lineNumber: 92,
      columnNumber: 44
    }, this)) }, void 0, false, {
      fileName: "app/components/entities/ModalRequestList/index.tsx",
      lineNumber: 91,
      columnNumber: 31
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxCards, { children: publishedVacancies?.map((vacancy) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { width: "100%", style: {
      cursor: "pointer",
      borderRadius: "12px",
      border: vacancy.id === selectedCard ? `2px solid ${theme.modal.borderCardsColor}` : ""
    }, onClick: () => handleConfirm(vacancy?.id), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(VacancyRequest, { vacancy, companies, dictionaries }, void 0, false, {
      fileName: "app/components/entities/ModalRequestList/index.tsx",
      lineNumber: 105,
      columnNumber: 15
    }, this) }, vacancy?.id, false, {
      fileName: "app/components/entities/ModalRequestList/index.tsx",
      lineNumber: 100,
      columnNumber: 47
    }, this)) }, void 0, false, {
      fileName: "app/components/entities/ModalRequestList/index.tsx",
      lineNumber: 99,
      columnNumber: 23
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: "24px", width: "100%", margin: "24px 0 0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { priority: "secondary", onClick: () => setVisibility(!visibility), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("common:cancel") }, void 0, false, {
        fileName: "app/components/entities/ModalRequestList/index.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/entities/ModalRequestList/index.tsx",
        lineNumber: 109,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(request.Form, { method: "POST", action: actionRoute, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "id", value: selectedCard }, void 0, false, {
          fileName: "app/components/entities/ModalRequestList/index.tsx",
          lineNumber: 113,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { priority: "primary", type: "submit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:send_request") }, void 0, false, {
          fileName: "app/components/entities/ModalRequestList/index.tsx",
          lineNumber: 115,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/entities/ModalRequestList/index.tsx",
          lineNumber: 114,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/entities/ModalRequestList/index.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/ModalRequestList/index.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/ModalRequestList/index.tsx",
    lineNumber: 85,
    columnNumber: 249
  }, this);
}

export {
  ModalRequestList
};
//# sourceMappingURL=/build/_shared/chunk-NFPDJYC4.js.map
