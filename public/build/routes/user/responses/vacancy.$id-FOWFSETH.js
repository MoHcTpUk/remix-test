import {
  ResumePartCardWidget
} from "/build/_shared/chunk-BWBQEVWV.js";
import "/build/_shared/chunk-4ELEE4BM.js";
import "/build/_shared/chunk-KNWWVEW6.js";
import "/build/_shared/chunk-6Q4I67JY.js";
import "/build/_shared/chunk-RCGFGPYD.js";
import "/build/_shared/chunk-G7LBNXS2.js";
import "/build/_shared/chunk-P4RFN3QO.js";
import "/build/_shared/chunk-4O6GBBTS.js";
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

// app/routes/user/responses/vacancy.$id.tsx
var import_cloudflare = __toESM(require_cloudflare());
init_esm();
var import_qs = __toESM(require_lib());

// app/components/pages/User/Responses/components/Vacancies/InnerResponsesResumesComponent/index.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var InnerResponsesResumesComponent = (0, import_react.memo)(({
  resumes,
  vacancy,
  responses,
  responseAction
}) => {
  const widthScreen = useScreenWidth();
  const getResponseForResume = (resume) => responses?.find((item) => item.shared_id === resume.id || item.target_id === resume.id);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", alignItems: "flex-start", width: "100%", gap: "24px", as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", width: "100%", gap: widthScreen > 1024 ? "24px" : "16px", style: {
    flex: "1"
  }, children: resumes?.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResumePartCardWidget, { state: getResponseForResume(item)?.state, type: getResponseForResume(item)?.shared_id === vacancy?.id ? "REQUEST" : "INVITATION", responseId: getResponseForResume(item)?.id, resume: item, selectedResume: vacancy?.id, variant: "response", responseAction }, item.id, false, {
    fileName: "app/components/pages/User/Responses/components/Vacancies/InnerResponsesResumesComponent/index.tsx",
    lineNumber: 34,
    columnNumber: 42
  }, this)) }, void 0, false, {
    fileName: "app/components/pages/User/Responses/components/Vacancies/InnerResponsesResumesComponent/index.tsx",
    lineNumber: 29,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Responses/components/Vacancies/InnerResponsesResumesComponent/index.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
});

// app/routes/user/responses/vacancy.$id.tsx
var import_message = __toESM(require_message());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function ResponseResumeIndex() {
  const request = useLoaderData();
  const actionData = useActionData();
  const {
    resumes,
    responses,
    vacancy
  } = request;
  const matches = useMatches();
  const widthScreen = useScreenWidth();
  const checkSelectedResumeAndMobile = widthScreen < 1280 && matches[4].id.includes("resumeId");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { flexDirection: "row", width: "100%", gap: widthScreen < 1280 ? "12px" : "24px", children: [
    !checkSelectedResumeAndMobile && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InnerResponsesResumesComponent, { resumes, vacancy, responses: responses.data, responseAction: actionData?.success }, void 0, false, {
      fileName: "app/routes/user/responses/vacancy.$id.tsx",
      lineNumber: 146,
      columnNumber: 41
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/user/responses/vacancy.$id.tsx",
      lineNumber: 148,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user/responses/vacancy.$id.tsx",
    lineNumber: 145,
    columnNumber: 10
  }, this);
}
export {
  ResponseResumeIndex as default
};
