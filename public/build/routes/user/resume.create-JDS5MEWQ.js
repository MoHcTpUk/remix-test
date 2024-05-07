import {
  ResumeAdditionalinformationEdit,
  ResumeEducationEdit,
  ResumeInformationEdit,
  ResumeJobPositionEdit,
  ResumeLocationEdit,
  ResumeSettingsEdit,
  ResumeWorkExperienceEdit,
  Wrapper
} from "/build/_shared/chunk-GD4GP4OC.js";
import "/build/_shared/chunk-525APBKN.js";
import "/build/_shared/chunk-YF7JB3BJ.js";
import "/build/_shared/chunk-JFP3I7KO.js";
import "/build/_shared/chunk-YB7GJSGU.js";
import "/build/_shared/chunk-B4CRX2YS.js";
import "/build/_shared/chunk-Y237PHJ4.js";
import "/build/_shared/chunk-OGIUXGZ2.js";
import {
  require_message
} from "/build/_shared/chunk-RC3SGAVD.js";
import {
  require_lib
} from "/build/_shared/chunk-IZY6H3OZ.js";
import {
  require_request
} from "/build/_shared/chunk-P6GQFH2U.js";
import "/build/_shared/chunk-HWT5QEPJ.js";
import "/build/_shared/chunk-RHNN4TA5.js";
import "/build/_shared/chunk-EWP76DBX.js";
import "/build/_shared/chunk-TOIUBYEI.js";
import "/build/_shared/chunk-TCMGB6IX.js";
import "/build/_shared/chunk-KYNJZNBK.js";
import "/build/_shared/chunk-EOBF4VPL.js";
import "/build/_shared/chunk-AF6HCNMF.js";
import "/build/_shared/chunk-NPNOAFIQ.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-WTGWCS5L.js";
import "/build/_shared/chunk-TSAGNYDI.js";
import "/build/_shared/chunk-47YKAHTX.js";
import {
  require_userContext
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  Form,
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

// app/routes/user/resume.create.tsx
var import_cloudflare = __toESM(require_cloudflare());
init_esm();
var import_qs = __toESM(require_lib());

// app/components/pages/User/Resumes/Resume/ResumeCreate.tsx
init_esm();
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ResumeCreate = (0, import_react2.memo)(({
  step,
  resume,
  actionData,
  dictionaries,
  resumeId
}) => (
  // const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  // }
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wrapper, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "step", type: "hidden", value: step }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/Resume/ResumeCreate.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    step === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", style: {
      width: "100%"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "step", type: "hidden", value: step }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/ResumeCreate.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResumeInformationEdit, { state: "create", resume, dictionaries, step, actionData }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/ResumeCreate.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Resumes/Resume/ResumeCreate.tsx",
      lineNumber: 33,
      columnNumber: 22
    }, this),
    step === 2 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "PATCH", style: {
      width: "100%"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "step", type: "hidden", value: step }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/ResumeCreate.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "vacancy_id", type: "hidden", value: resumeId }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/ResumeCreate.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResumeLocationEdit, { state: "create", resume, dictionaries, step, actionData }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/ResumeCreate.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Resumes/Resume/ResumeCreate.tsx",
      lineNumber: 39,
      columnNumber: 22
    }, this),
    step === 3 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "PATCH", style: {
      width: "100%"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "step", type: "hidden", value: step }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/ResumeCreate.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "vacancy_id", type: "hidden", value: resumeId }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/ResumeCreate.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResumeJobPositionEdit, { state: "create", resume, dictionaries, step, actionData }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/ResumeCreate.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Resumes/Resume/ResumeCreate.tsx",
      lineNumber: 46,
      columnNumber: 22
    }, this),
    step === 4 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "PATCH", style: {
      width: "100%"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "step", type: "hidden", value: step }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/ResumeCreate.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "vacancy_id", type: "hidden", value: resumeId }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/ResumeCreate.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResumeEducationEdit, { state: "create", resume, dictionaries, step, actionData }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/ResumeCreate.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Resumes/Resume/ResumeCreate.tsx",
      lineNumber: 53,
      columnNumber: 22
    }, this),
    step === 5 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "PATCH", style: {
      width: "100%"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "step", type: "hidden", value: step }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/ResumeCreate.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "vacancy_id", type: "hidden", value: resumeId }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/ResumeCreate.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResumeWorkExperienceEdit, { state: "create", resume, dictionaries, step, actionData }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/ResumeCreate.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Resumes/Resume/ResumeCreate.tsx",
      lineNumber: 60,
      columnNumber: 22
    }, this),
    step === 6 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "PATCH", style: {
      width: "100%"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "step", type: "hidden", value: step }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/ResumeCreate.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "vacancy_id", type: "hidden", value: resumeId }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/ResumeCreate.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResumeAdditionalinformationEdit, { state: "create", resume, dictionaries, step, actionData }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/ResumeCreate.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Resumes/Resume/ResumeCreate.tsx",
      lineNumber: 67,
      columnNumber: 22
    }, this),
    step === 7 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "PATCH", style: {
      width: "100%"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "step", type: "hidden", value: step }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/ResumeCreate.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "vacancy_id", type: "hidden", value: resumeId }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/ResumeCreate.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResumeSettingsEdit, { state: "create", resume, dictionaries, step, actionData }, void 0, false, {
        fileName: "app/components/pages/User/Resumes/Resume/ResumeCreate.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Resumes/Resume/ResumeCreate.tsx",
      lineNumber: 74,
      columnNumber: 22
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Resumes/Resume/ResumeCreate.tsx",
    lineNumber: 31,
    columnNumber: 1
  }, this)
));

// app/routes/user/resume.create.tsx
var import_message = __toESM(require_message());
var import_userContext = __toESM(require_userContext());
var import_request = __toESM(require_request());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Index() {
  const request = useLoaderData();
  const actionData = useActionData();
  const {
    step,
    resumeId,
    dictionaries
  } = request;
  const resume = request?.resume;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ResumeCreate, { step, resume, actionData, resumeId, dictionaries }, void 0, false, {
    fileName: "app/routes/user/resume.create.tsx",
    lineNumber: 509,
    columnNumber: 10
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/user/resume.create-JDS5MEWQ.js.map
