import {
  VacancyPartCardWidget
} from "/build/_shared/chunk-7FNYKDMW.js";
import "/build/_shared/chunk-4ELEE4BM.js";
import "/build/_shared/chunk-KNWWVEW6.js";
import "/build/_shared/chunk-6Q4I67JY.js";
import "/build/_shared/chunk-RCGFGPYD.js";
import "/build/_shared/chunk-G7LBNXS2.js";
import "/build/_shared/chunk-IYT3SP4K.js";
import "/build/_shared/chunk-P5TLLZSL.js";
import {
  require_message
} from "/build/_shared/chunk-ULBVCC7P.js";
import "/build/_shared/chunk-FMAU5EOD.js";
import "/build/_shared/chunk-SWZFRHVX.js";
import {
  require_lib
} from "/build/_shared/chunk-VYIZRLIF.js";
import "/build/_shared/chunk-6J6FMBZW.js";
import "/build/_shared/chunk-T7KDPY4G.js";
import "/build/_shared/chunk-NSEFQYWN.js";
import "/build/_shared/chunk-QD72PUQI.js";
import "/build/_shared/chunk-GEH4KW55.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-ASV7D43C.js";
import "/build/_shared/chunk-4SQREHPC.js";
import {
  motion
} from "/build/_shared/chunk-NC5IH6SX.js";
import {
  Box,
  useScreenWidth
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  Outlet,
  init_esm,
  useActionData,
  useLoaderData,
  useMatches
} from "/build/_shared/chunk-JX76WC46.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6O7TW4X6.js";
import {
  __toESM
} from "/build/_shared/chunk-RFITDC3A.js";

// app/routes/user/responses/resume.$id.tsx
var import_cloudflare = __toESM(require_cloudflare());
init_esm();
var import_qs = __toESM(require_lib());

// app/components/pages/User/Responses/components/Resumes/InnerResponsesVacanciesComponent/index.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var InnerResponsesVacanciesComponent = (0, import_react.memo)(({
  vacancies,
  resume,
  dictionaries,
  responses,
  responseAction
}) => {
  const widthScreen = useScreenWidth();
  const getResponseForVacancy = (vacancy) => responses?.find((item) => item.shared_id === vacancy.id || item.target_id === vacancy.id);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", alignItems: "flex-start", width: "100%", gap: "24px", as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", width: "100%", gap: widthScreen > 1024 ? "24px" : "16px", style: {
    flex: "1"
  }, children: vacancies?.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    VacancyPartCardWidget,
    {
      state: getResponseForVacancy(item)?.state,
      type: getResponseForVacancy(item)?.shared_id === resume?.id ? "REQUEST" : "INVITATION",
      responseId: getResponseForVacancy(item)?.id,
      vacancy: item,
      variant: "response",
      responseAction
    },
    item.id,
    false,
    {
      fileName: "app/components/pages/User/Responses/components/Resumes/InnerResponsesVacanciesComponent/index.tsx",
      lineNumber: 37,
      columnNumber: 44
    },
    this
  )) }, void 0, false, {
    fileName: "app/components/pages/User/Responses/components/Resumes/InnerResponsesVacanciesComponent/index.tsx",
    lineNumber: 32,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Responses/components/Resumes/InnerResponsesVacanciesComponent/index.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
});

// app/routes/user/responses/resume.$id.tsx
var import_message = __toESM(require_message());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function ResponseResumeIndex() {
  const request = useLoaderData();
  const actionData = useActionData();
  const {
    vacancies,
    resume,
    responses
  } = request;
  const matches = useMatches();
  const widthScreen = useScreenWidth();
  const checkSelectedVacancyAndMobile = widthScreen < 1280 && matches[4].id.includes("vacancyId");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { flexDirection: "row", width: "100%", gap: widthScreen < 1280 ? "12px" : "24px", children: [
    !checkSelectedVacancyAndMobile && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InnerResponsesVacanciesComponent, { resume, vacancies, responses: responses.data, responseAction: actionData?.success }, void 0, false, {
      fileName: "app/routes/user/responses/resume.$id.tsx",
      lineNumber: 140,
      columnNumber: 42
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/user/responses/resume.$id.tsx",
      lineNumber: 141,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user/responses/resume.$id.tsx",
    lineNumber: 139,
    columnNumber: 10
  }, this);
}
export {
  ResponseResumeIndex as default
};
