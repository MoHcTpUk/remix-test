import {
  ModalCompanyCreated
} from "/build/_shared/chunk-BPQEWXLC.js";
import {
  VacancyAdditionalEdit,
  VacancyComponentCardEdit,
  VacancyContactsEdit,
  VacancyLocationEdit,
  VacancyRequirementsEdit,
  VacancyResponsesEdit
} from "/build/_shared/chunk-EYBD4HCQ.js";
import {
  Wrapper
} from "/build/_shared/chunk-XQMFZUMJ.js";
import "/build/_shared/chunk-TPK4GNST.js";
import "/build/_shared/chunk-O6PFKXUU.js";
import "/build/_shared/chunk-DUOL7BQP.js";
import "/build/_shared/chunk-LEK3IZDX.js";
import {
  require_message
} from "/build/_shared/chunk-ULBVCC7P.js";
import {
  require_lib
} from "/build/_shared/chunk-VYIZRLIF.js";
import {
  require_request
} from "/build/_shared/chunk-EISN5MP4.js";
import "/build/_shared/chunk-XQTDVHWG.js";
import "/build/_shared/chunk-BXFA34ZG.js";
import "/build/_shared/chunk-6J6FMBZW.js";
import "/build/_shared/chunk-TPPLNXCO.js";
import "/build/_shared/chunk-MPISASBV.js";
import "/build/_shared/chunk-LQ4YPZYM.js";
import "/build/_shared/chunk-T7KDPY4G.js";
import "/build/_shared/chunk-NSEFQYWN.js";
import "/build/_shared/chunk-QD72PUQI.js";
import "/build/_shared/chunk-GEH4KW55.js";
import "/build/_shared/chunk-MYIBCQY6.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-ASV7D43C.js";
import "/build/_shared/chunk-4SQREHPC.js";
import "/build/_shared/chunk-NC5IH6SX.js";
import {
  require_userContext,
  useModalForParams
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

// app/routes/user/vacancy.create.tsx
var import_cloudflare = __toESM(require_cloudflare());
init_esm();
var import_qs = __toESM(require_lib());

// app/components/pages/User/Vacancies/Vacancy/VacancyCreate.tsx
init_esm();
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var VacancyCreate = (0, import_react2.memo)(({
  step,
  vacancy,
  dictionaries,
  companies,
  vacancyId,
  actionData
}) => {
  const {
    visibilityModal,
    setVisibilityModal
  } = useModalForParams("create");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wrapper, { children: [
    step === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", style: {
      width: "100%"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "step", type: "hidden", value: step }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/VacancyCreate.tsx",
        lineNumber: 39,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VacancyComponentCardEdit, { state: "create", vacancy, dictionaries, step, actionData }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/VacancyCreate.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/VacancyCreate.tsx",
      lineNumber: 36,
      columnNumber: 24
    }, this),
    step === 2 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "PATCH", style: {
      width: "100%"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "step", type: "hidden", value: step }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/VacancyCreate.tsx",
        lineNumber: 45,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "vacancy_id", type: "hidden", value: vacancyId }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/VacancyCreate.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VacancyContactsEdit, { state: "create", vacancy, dictionaries, step, companies, actionData }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/VacancyCreate.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/VacancyCreate.tsx",
      lineNumber: 42,
      columnNumber: 24
    }, this),
    step === 3 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "PATCH", style: {
      width: "100%"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "step", type: "hidden", value: step }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/VacancyCreate.tsx",
        lineNumber: 52,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "vacancy_id", type: "hidden", value: vacancyId }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/VacancyCreate.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VacancyLocationEdit, { state: "create", vacancy, dictionaries, step, actionData }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/VacancyCreate.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/VacancyCreate.tsx",
      lineNumber: 49,
      columnNumber: 24
    }, this),
    step === 4 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "PATCH", style: {
      width: "100%"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "step", type: "hidden", value: step }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/VacancyCreate.tsx",
        lineNumber: 59,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "vacancy_id", type: "hidden", value: vacancyId }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/VacancyCreate.tsx",
        lineNumber: 60,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VacancyRequirementsEdit, { state: "create", vacancy, dictionaries, step, actionData }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/VacancyCreate.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/VacancyCreate.tsx",
      lineNumber: 56,
      columnNumber: 24
    }, this),
    step === 5 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "PATCH", style: {
      width: "100%"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "step", type: "hidden", value: step }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/VacancyCreate.tsx",
        lineNumber: 66,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "vacancy_id", type: "hidden", value: vacancyId }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/VacancyCreate.tsx",
        lineNumber: 67,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VacancyResponsesEdit, { state: "create", vacancy, dictionaries, step, actionData }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/VacancyCreate.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/VacancyCreate.tsx",
      lineNumber: 63,
      columnNumber: 24
    }, this),
    step === 6 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "PATCH", style: {
      width: "100%"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "step", type: "hidden", value: step }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/VacancyCreate.tsx",
        lineNumber: 73,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "vacancy_id", type: "hidden", value: vacancyId }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/VacancyCreate.tsx",
        lineNumber: 74,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VacancyAdditionalEdit, { state: "create", vacancy, dictionaries, step, actionData }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/Vacancy/VacancyCreate.tsx",
        lineNumber: 75,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/VacancyCreate.tsx",
      lineNumber: 70,
      columnNumber: 24
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalCompanyCreated, { visibility: visibilityModal, setVisibility: setVisibilityModal }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/Vacancy/VacancyCreate.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Vacancies/Vacancy/VacancyCreate.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
});

// app/routes/user/vacancy.create.tsx
var import_message = __toESM(require_message());
var import_userContext = __toESM(require_userContext());
var import_request = __toESM(require_request());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Index() {
  const request = useLoaderData();
  const actionData = useActionData();
  const {
    step,
    dictionaries,
    vacancyId
  } = request;
  const companies = request?.companies?.data;
  const vacancy = request?.vacancy;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(VacancyCreate, { step, vacancy, dictionaries, companies, vacancyId, actionData }, void 0, false, {
    fileName: "app/routes/user/vacancy.create.tsx",
    lineNumber: 438,
    columnNumber: 10
  }, this);
}
export {
  Index as default
};
