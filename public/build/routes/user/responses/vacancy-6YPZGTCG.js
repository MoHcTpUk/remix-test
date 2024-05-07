import {
  Divider
} from "/build/_shared/chunk-Z5YXUZA6.js";
import {
  ResponseAllTypeStatuses_default
} from "/build/_shared/chunk-W6P6YFST.js";
import {
  MediaBox
} from "/build/_shared/chunk-4ELEE4BM.js";
import "/build/_shared/chunk-KNWWVEW6.js";
import "/build/_shared/chunk-G7LBNXS2.js";
import {
  VacancyPartCardInfo
} from "/build/_shared/chunk-IYT3SP4K.js";
import {
  VacancyPartCardHeading
} from "/build/_shared/chunk-P5TLLZSL.js";
import "/build/_shared/chunk-FMAU5EOD.js";
import {
  ResponseCardVariantEnum
} from "/build/_shared/chunk-SWZFRHVX.js";
import {
  BoxCard
} from "/build/_shared/chunk-6J6FMBZW.js";
import {
  Button_default
} from "/build/_shared/chunk-QD72PUQI.js";
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
  routes_default,
  useApp,
  useScreenWidth
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  Link,
  Outlet,
  init_esm,
  useLoaderData
} from "/build/_shared/chunk-JX76WC46.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6O7TW4X6.js";
import {
  __toESM
} from "/build/_shared/chunk-RFITDC3A.js";

// app/routes/user/responses/vacancy.tsx
var import_cloudflare = __toESM(require_cloudflare());
init_esm();
var import_react4 = __toESM(require_react());

// app/components/pages/User/Responses/components/Vacancies/index.tsx
init_esm();
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ResponsesVacanciesComponent = (0, import_react2.memo)(({
  vacancies,
  vacancy,
  dictionaries,
  responses
}) => {
  const {
    theme,
    t
  } = useApp();
  const widthScreen = useScreenWidth();
  const buttonCreateVacancy = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: routes_default.user.vacancy.create, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:create_vacancy") }, void 0, false, {
    fileName: "app/components/pages/User/Responses/components/Vacancies/index.tsx",
    lineNumber: 39,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Responses/components/Vacancies/index.tsx",
    lineNumber: 38,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Responses/components/Vacancies/index.tsx",
    lineNumber: 37,
    columnNumber: 37
  }, this);
  const getResponseStatistics = (responses2, id) => responses2?.find((item) => item.entity_id === id)?.statistics;
  const boxHeading = (vacancy2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", width: "100%", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VacancyPartCardHeading, { variant: "response", vacancy: vacancy2, variantResponseCard: ResponseCardVariantEnum.main }, void 0, false, {
      fileName: "app/components/pages/User/Responses/components/Vacancies/index.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    widthScreen >= 768 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, {}, void 0, false, {
      fileName: "app/components/pages/User/Responses/components/Vacancies/index.tsx",
      lineNumber: 45,
      columnNumber: 32
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VacancyPartCardInfo, { vacancy: vacancy2, variant: "response" }, void 0, false, {
      fileName: "app/components/pages/User/Responses/components/Vacancies/index.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "row", justifyContent: "space-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResponseAllTypeStatuses_default, { statistics: getResponseStatistics(responses, vacancy2.id) }, void 0, false, {
      fileName: "app/components/pages/User/Responses/components/Vacancies/index.tsx",
      lineNumber: 48,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/Responses/components/Vacancies/index.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Responses/components/Vacancies/index.tsx",
    lineNumber: 43,
    columnNumber: 44
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", alignItems: "flex-start", width: "100%", gap: "24px", as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", width: "100%", gap: widthScreen > 1024 ? "24px" : "16px", style: {
    flex: "1"
  }, children: [
    !vacancies?.length && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxInformation_default, { variant: BoxInformationEnum.info, title: t("user:no_vacancies_available"), information: t("user:you_dont_have_any_vacancies_yet_for_which_applicants_could_apply"), button: () => buttonCreateVacancy(), flexDirection: "column" }, void 0, false, {
      fileName: "app/components/pages/User/Responses/components/Vacancies/index.tsx",
      lineNumber: 63,
      columnNumber: 34
    }, this),
    vacancies?.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { width: "100%", style: {
      cursor: "pointer",
      borderRadius: "12px",
      transition: "all 0.2s cubic-bezier(0.2, 0, 0, 1)",
      border: widthScreen > 1024 && item.id === vacancy?.id ? `2px solid ${theme.modal.borderCardsColor}` : ""
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxCard, { variant: "userCard", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MediaBox, { variant: "mobile", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item?.id || "#", children: boxHeading(item) }, void 0, false, {
        fileName: "app/components/pages/User/Responses/components/Vacancies/index.tsx",
        lineNumber: 73,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/components/pages/User/Responses/components/Vacancies/index.tsx",
        lineNumber: 72,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MediaBox, { variant: "desktop", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item?.id, preventScrollReset: true, children: boxHeading(item) }, void 0, false, {
        fileName: "app/components/pages/User/Responses/components/Vacancies/index.tsx",
        lineNumber: 77,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/components/pages/User/Responses/components/Vacancies/index.tsx",
        lineNumber: 76,
        columnNumber: 17
      }, this)
    ] }, item?.id, true, {
      fileName: "app/components/pages/User/Responses/components/Vacancies/index.tsx",
      lineNumber: 71,
      columnNumber: 15
    }, this) }, item?.id, false, {
      fileName: "app/components/pages/User/Responses/components/Vacancies/index.tsx",
      lineNumber: 65,
      columnNumber: 44
    }, this))
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Responses/components/Vacancies/index.tsx",
    lineNumber: 58,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Responses/components/Vacancies/index.tsx",
    lineNumber: 51,
    columnNumber: 10
  }, this);
});

// app/routes/user/responses/vacancy.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var ResponsesResume = (0, import_react4.memo)(() => {
  const request = useLoaderData();
  const {
    vacancies,
    responses
  } = request;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { flexDirection: "column", width: "100%", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ResponsesVacanciesComponent, { responses: responses.data, vacancies }, void 0, false, {
      fileName: "app/routes/user/responses/vacancy.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/user/responses/vacancy.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user/responses/vacancy.tsx",
    lineNumber: 74,
    columnNumber: 10
  }, this);
});
var vacancy_default = ResponsesResume;
export {
  vacancy_default as default
};
