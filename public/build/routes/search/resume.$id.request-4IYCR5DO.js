import {
  VacancyRequest
} from "/build/_shared/chunk-4HPJCB5S.js";
import "/build/_shared/chunk-4KH6JWI3.js";
import "/build/_shared/chunk-XK5TIN5G.js";
import {
  ModalRequestConfirm
} from "/build/_shared/chunk-2AMZGBBD.js";
import {
  require_message
} from "/build/_shared/chunk-RC3SGAVD.js";
import "/build/_shared/chunk-X7YBBWQ4.js";
import "/build/_shared/chunk-5HXZ6U7H.js";
import {
  require_lib
} from "/build/_shared/chunk-IZY6H3OZ.js";
import "/build/_shared/chunk-EWP76DBX.js";
import "/build/_shared/chunk-ZQ6IGHYP.js";
import "/build/_shared/chunk-EOBF4VPL.js";
import "/build/_shared/chunk-AF6HCNMF.js";
import "/build/_shared/chunk-NPNOAFIQ.js";
import {
  BoxInformationEnum,
  BoxInformation_default
} from "/build/_shared/chunk-D6JIAAYU.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-WTGWCS5L.js";
import "/build/_shared/chunk-TSAGNYDI.js";
import {
  motion
} from "/build/_shared/chunk-47YKAHTX.js";
import {
  Box,
  useApp,
  useScreenWidth
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  init_esm,
  useActionData,
  useLoaderData
} from "/build/_shared/chunk-IQJCUQRT.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/search/resume.$id.request.tsx
var import_cloudflare = __toESM(require_cloudflare());
init_esm();
var import_qs = __toESM(require_lib());

// app/components/pages/Search/Vacancies/VacanciesRequest/index.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var VacanciesRequest = (0, import_react.memo)(({
  vacancies,
  dictionaries,
  companies,
  actionRequest,
  message
}) => {
  const {
    t,
    userContext
  } = useApp();
  const widthScreen = useScreenWidth();
  const [confirmVacancy, setConfirmVacancy] = (0, import_react.useState)(false);
  const [selectedVacancy, setSelectedVacancy] = (0, import_react.useState)("");
  const [publishedVacancies, setPublishedVacancies] = (0, import_react.useState)();
  (0, import_react.useEffect)(() => {
    if (vacancies) {
      const newVacancies = vacancies.filter((vacancy) => vacancy.published);
      setPublishedVacancies(newVacancies);
    }
  }, [vacancies]);
  (0, import_react.useEffect)(() => {
    if (actionRequest) {
      setConfirmVacancy(false);
    }
  }, [actionRequest]);
  const handleConfirm = (id) => {
    if (id)
      setSelectedVacancy(id);
    setConfirmVacancy(!confirmVacancy);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", width: "100%", gap: widthScreen > 1024 ? "24px" : "16px", as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, children: [
    actionRequest === void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxInformation_default, { variant: BoxInformationEnum.info, title: t("user:select_vacancy_to_send") }, void 0, false, {
      fileName: "app/components/pages/Search/Vacancies/VacanciesRequest/index.tsx",
      lineNumber: 58,
      columnNumber: 41
    }, this),
    actionRequest === false && message && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxInformation_default, { variant: BoxInformationEnum.error, title: message[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/Search/Vacancies/VacanciesRequest/index.tsx",
      lineNumber: 60,
      columnNumber: 48
    }, this),
    actionRequest === true && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxInformation_default, { variant: BoxInformationEnum.success, title: t("user:your_request_has_been_sent") }, void 0, false, {
      fileName: "app/components/pages/Search/Vacancies/VacanciesRequest/index.tsx",
      lineNumber: 62,
      columnNumber: 36
    }, this),
    publishedVacancies?.map((vacancy) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { width: "100%", style: {
      cursor: "pointer"
    }, onClick: () => handleConfirm(vacancy?.id), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VacancyRequest, { vacancy, companies, dictionaries }, void 0, false, {
      fileName: "app/components/pages/Search/Vacancies/VacanciesRequest/index.tsx",
      lineNumber: 66,
      columnNumber: 13
    }, this) }, vacancy?.id, false, {
      fileName: "app/components/pages/Search/Vacancies/VacanciesRequest/index.tsx",
      lineNumber: 63,
      columnNumber: 45
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalRequestConfirm, { id: selectedVacancy, variant: "vacancy", visibility: confirmVacancy, setVisibility: setConfirmVacancy }, void 0, false, {
      fileName: "app/components/pages/Search/Vacancies/VacanciesRequest/index.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Search/Vacancies/VacanciesRequest/index.tsx",
    lineNumber: 51,
    columnNumber: 10
  }, this);
});

// app/routes/search/resume.$id.request.tsx
var import_message = __toESM(require_message());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Index() {
  const request = useLoaderData();
  const actionData = useActionData();
  const vacancies = request.vacancies.data;
  const companies = request.companies.data;
  const {
    dictionaries
  } = request;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(VacanciesRequest, { actionRequest: actionData?.success, message: actionData?.message, vacancies, companies, dictionaries }, void 0, false, {
    fileName: "app/routes/search/resume.$id.request.tsx",
    lineNumber: 119,
    columnNumber: 10
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/search/resume.$id.request-4IYCR5DO.js.map
