import {
  ResumeRequest
} from "/build/_shared/chunk-BKQY745J.js";
import "/build/_shared/chunk-TK7Q23CM.js";
import "/build/_shared/chunk-4FBXI3BA.js";
import {
  ModalRequestConfirm
} from "/build/_shared/chunk-2AMZGBBD.js";
import {
  require_message
} from "/build/_shared/chunk-RC3SGAVD.js";
import "/build/_shared/chunk-X7YBBWQ4.js";
import {
  EntityVariantEnum
} from "/build/_shared/chunk-5HXZ6U7H.js";
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

// app/routes/search/vacancy.$id.request.tsx
var import_cloudflare = __toESM(require_cloudflare());
init_esm();
var import_qs = __toESM(require_lib());

// app/components/pages/Search/Resumes/ResumesRequest/index.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ResumesRequest = (0, import_react.memo)(({
  resumes,
  dictionaries,
  actionRequest,
  message
}) => {
  const {
    t,
    userContext
  } = useApp();
  const widthScreen = useScreenWidth();
  const [confirmResume, setConfirmResume] = (0, import_react.useState)(false);
  const [selectedResume, setSelectedResume] = (0, import_react.useState)("");
  const [publishedResumes, setPublishedResumes] = (0, import_react.useState)();
  (0, import_react.useEffect)(() => {
    if (resumes) {
      const newResume = resumes.filter((resume) => resume.published);
      setPublishedResumes(newResume);
    }
  }, [resumes]);
  (0, import_react.useEffect)(() => {
    if (actionRequest) {
      setConfirmResume(false);
    }
  }, [actionRequest]);
  const handleConfirm = (id) => {
    if (id)
      setSelectedResume(id);
    setConfirmResume(!confirmResume);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", width: "100%", gap: widthScreen > 1024 ? "24px" : "16px", as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, children: [
    actionRequest === void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxInformation_default, { variant: BoxInformationEnum.info, title: t("user:select_vacancy_to_send") }, void 0, false, {
      fileName: "app/components/pages/Search/Resumes/ResumesRequest/index.tsx",
      lineNumber: 54,
      columnNumber: 41
    }, this),
    actionRequest === false && message && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxInformation_default, { variant: BoxInformationEnum.error, title: message[userContext.language] }, void 0, false, {
      fileName: "app/components/pages/Search/Resumes/ResumesRequest/index.tsx",
      lineNumber: 56,
      columnNumber: 48
    }, this),
    actionRequest === true && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxInformation_default, { variant: BoxInformationEnum.success, title: t("user:your_request_has_been_sent") }, void 0, false, {
      fileName: "app/components/pages/Search/Resumes/ResumesRequest/index.tsx",
      lineNumber: 58,
      columnNumber: 36
    }, this),
    publishedResumes?.map((resume) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { width: "100%", style: {
      cursor: "pointer"
    }, onClick: () => handleConfirm(resume?.id), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResumeRequest, { resume, dictionaries }, void 0, false, {
      fileName: "app/components/pages/Search/Resumes/ResumesRequest/index.tsx",
      lineNumber: 62,
      columnNumber: 13
    }, this) }, resume.id, false, {
      fileName: "app/components/pages/Search/Resumes/ResumesRequest/index.tsx",
      lineNumber: 59,
      columnNumber: 42
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalRequestConfirm, { id: selectedResume, variant: EntityVariantEnum.resume, visibility: confirmResume, setVisibility: setConfirmResume }, void 0, false, {
      fileName: "app/components/pages/Search/Resumes/ResumesRequest/index.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Search/Resumes/ResumesRequest/index.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
});

// app/routes/search/vacancy.$id.request.tsx
var import_message = __toESM(require_message());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Index() {
  const request = useLoaderData();
  const actionData = useActionData();
  const resumes = request.resumes.data;
  const {
    dictionaries
  } = request;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ResumesRequest, { actionRequest: actionData?.success, message: actionData?.message, resumes, dictionaries }, void 0, false, {
    fileName: "app/routes/search/vacancy.$id.request.tsx",
    lineNumber: 125,
    columnNumber: 10
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/search/vacancy.$id.request-CBDLS4PW.js.map
