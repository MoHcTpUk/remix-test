import {
  Divider
} from "/build/_shared/chunk-TJU4HYEQ.js";
import {
  ResponseAllTypeStatuses_default
} from "/build/_shared/chunk-F2CI4NCU.js";
import {
  MediaBox
} from "/build/_shared/chunk-S5VX4NQS.js";
import "/build/_shared/chunk-7N42DDVR.js";
import "/build/_shared/chunk-SIT5KOBR.js";
import {
  ResumePartCardInfo
} from "/build/_shared/chunk-TK7Q23CM.js";
import {
  ResumePartCardHeading
} from "/build/_shared/chunk-4FBXI3BA.js";
import "/build/_shared/chunk-X7YBBWQ4.js";
import {
  ResponseCardVariantEnum
} from "/build/_shared/chunk-5HXZ6U7H.js";
import {
  BoxCard
} from "/build/_shared/chunk-EWP76DBX.js";
import {
  Button_default
} from "/build/_shared/chunk-AF6HCNMF.js";
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
  Text,
  TextVariantEnum,
  routes_default,
  useApp,
  useScreenWidth
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  Link,
  Outlet,
  init_esm,
  useLoaderData
} from "/build/_shared/chunk-IQJCUQRT.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/user/responses/resume.tsx
var import_cloudflare = __toESM(require_cloudflare());
init_esm();
var import_react4 = __toESM(require_react());

// app/components/pages/User/Responses/components/Resumes/index.tsx
init_esm();
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ResponsesResumesComponent = (0, import_react2.memo)(({
  resumes,
  resume,
  dictionaries,
  responses
}) => {
  const {
    theme,
    t
  } = useApp();
  const widthScreen = useScreenWidth();
  const getResponseStatistics = (responses2, id) => responses2?.find((item) => item.entity_id === id)?.statistics;
  const boxHeading = (resume2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", width: "100%", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResumePartCardHeading, { variant: "response", resume: resume2, variantResponseCard: ResponseCardVariantEnum.main }, void 0, false, {
      fileName: "app/components/pages/User/Responses/components/Resumes/index.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    widthScreen >= 768 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, {}, void 0, false, {
      fileName: "app/components/pages/User/Responses/components/Resumes/index.tsx",
      lineNumber: 40,
      columnNumber: 32
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResumePartCardInfo, { variant: "response", resume: resume2 }, void 0, false, {
      fileName: "app/components/pages/User/Responses/components/Resumes/index.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "row", justifyContent: "space-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResponseAllTypeStatuses_default, { statistics: getResponseStatistics(responses, resume2.id) }, void 0, false, {
      fileName: "app/components/pages/User/Responses/components/Resumes/index.tsx",
      lineNumber: 43,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/Responses/components/Resumes/index.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Responses/components/Resumes/index.tsx",
    lineNumber: 38,
    columnNumber: 42
  }, this);
  const buttonCreateResume = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: routes_default.user.resume.create, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:create_resume") }, void 0, false, {
    fileName: "app/components/pages/User/Responses/components/Resumes/index.tsx",
    lineNumber: 48,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Responses/components/Resumes/index.tsx",
    lineNumber: 47,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Responses/components/Resumes/index.tsx",
    lineNumber: 46,
    columnNumber: 36
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
    !resumes?.length && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxInformation_default, { variant: BoxInformationEnum.info, title: t("user:no_resumes_available"), information: t("user:you_dont_have_a_single_resume_yet_that_employers_could_respond_to"), button: () => buttonCreateResume(), flexDirection: "column" }, void 0, false, {
      fileName: "app/components/pages/User/Responses/components/Resumes/index.tsx",
      lineNumber: 63,
      columnNumber: 32
    }, this),
    resumes?.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { width: "100%", style: {
      cursor: "pointer",
      borderRadius: "12px",
      transition: "all 0.2s cubic-bezier(0.2, 0, 0, 1)",
      border: widthScreen > 1024 && item.id === resume?.id ? `2px solid ${theme.modal.borderCardsColor}` : ""
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxCard, { variant: "userCard", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MediaBox, { variant: "mobile", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item?.id || "#", children: boxHeading(item) }, void 0, false, {
        fileName: "app/components/pages/User/Responses/components/Resumes/index.tsx",
        lineNumber: 73,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/components/pages/User/Responses/components/Resumes/index.tsx",
        lineNumber: 72,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MediaBox, { variant: "desktop", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item?.id, preventScrollReset: true, children: boxHeading(item) }, void 0, false, {
        fileName: "app/components/pages/User/Responses/components/Resumes/index.tsx",
        lineNumber: 77,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/components/pages/User/Responses/components/Resumes/index.tsx",
        lineNumber: 76,
        columnNumber: 17
      }, this)
    ] }, item?.id, true, {
      fileName: "app/components/pages/User/Responses/components/Resumes/index.tsx",
      lineNumber: 71,
      columnNumber: 15
    }, this) }, item?.id, false, {
      fileName: "app/components/pages/User/Responses/components/Resumes/index.tsx",
      lineNumber: 65,
      columnNumber: 42
    }, this))
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Responses/components/Resumes/index.tsx",
    lineNumber: 58,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Responses/components/Resumes/index.tsx",
    lineNumber: 51,
    columnNumber: 10
  }, this);
});

// app/routes/user/responses/resume.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var ResponsesResume = (0, import_react4.memo)(() => {
  const request = useLoaderData();
  const {
    resumes,
    responses
  } = request;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { flexDirection: "column", width: "100%", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ResponsesResumesComponent, { resumes, responses: responses.data }, void 0, false, {
      fileName: "app/routes/user/responses/resume.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/user/responses/resume.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user/responses/resume.tsx",
    lineNumber: 71,
    columnNumber: 10
  }, this);
});
var resume_default = ResponsesResume;
export {
  resume_default as default
};
//# sourceMappingURL=/build/routes/user/responses/resume-O7H6CFZ5.js.map
