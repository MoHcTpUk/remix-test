import {
  ResumePartCardInfo
} from "/build/_shared/chunk-TK7Q23CM.js";
import {
  ResumePartCardHeading
} from "/build/_shared/chunk-4FBXI3BA.js";
import {
  PageVariantEnum
} from "/build/_shared/chunk-5HXZ6U7H.js";
import {
  BoxCard,
  VariantCardEnum
} from "/build/_shared/chunk-EWP76DBX.js";
import {
  Box,
  useApp
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/pages/Search/Resumes/ResumesRequest/ResumeRequest.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ResumeRequest = (0, import_react.memo)(({
  resume,
  dictionaries
}) => {
  const {
    theme,
    t,
    userContext
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxCard, { variant: VariantCardEnum.userCard, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", width: "100%", children: resume && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResumePartCardHeading, { resume }, void 0, false, {
      fileName: "app/components/pages/Search/Resumes/ResumesRequest/ResumeRequest.tsx",
      lineNumber: 30,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { borderTop: `1px solid ${theme.user.borderColor}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResumePartCardInfo, { resume, variant: PageVariantEnum.response }, void 0, false, {
      fileName: "app/components/pages/Search/Resumes/ResumesRequest/ResumeRequest.tsx",
      lineNumber: 32,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/pages/Search/Resumes/ResumesRequest/ResumeRequest.tsx",
      lineNumber: 31,
      columnNumber: 15
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Search/Resumes/ResumesRequest/ResumeRequest.tsx",
    lineNumber: 29,
    columnNumber: 22
  }, this) }, void 0, false, {
    fileName: "app/components/pages/Search/Resumes/ResumesRequest/ResumeRequest.tsx",
    lineNumber: 28,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/pages/Search/Resumes/ResumesRequest/ResumeRequest.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
});

export {
  ResumeRequest
};
//# sourceMappingURL=/build/_shared/chunk-BKQY745J.js.map
