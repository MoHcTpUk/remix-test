import {
  ResumeFullCardWidget
} from "/build/_shared/chunk-YV5GCJGF.js";
import {
  ResponseTypeStatus_default
} from "/build/_shared/chunk-7N42DDVR.js";
import "/build/_shared/chunk-R2BJLWHH.js";
import "/build/_shared/chunk-JTDZABLX.js";
import "/build/_shared/chunk-I66SYKBJ.js";
import "/build/_shared/chunk-B4CRX2YS.js";
import "/build/_shared/chunk-Y237PHJ4.js";
import "/build/_shared/chunk-QGLVK6XR.js";
import "/build/_shared/chunk-OGIUXGZ2.js";
import "/build/_shared/chunk-SIT5KOBR.js";
import {
  require_message
} from "/build/_shared/chunk-RC3SGAVD.js";
import "/build/_shared/chunk-5HXZ6U7H.js";
import {
  require_lib
} from "/build/_shared/chunk-IZY6H3OZ.js";
import "/build/_shared/chunk-HWT5QEPJ.js";
import "/build/_shared/chunk-EWP76DBX.js";
import "/build/_shared/chunk-BKRWDH2A.js";
import "/build/_shared/chunk-ZQ6IGHYP.js";
import "/build/_shared/chunk-EOBF4VPL.js";
import "/build/_shared/chunk-AF6HCNMF.js";
import "/build/_shared/chunk-NPNOAFIQ.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-WTGWCS5L.js";
import "/build/_shared/chunk-TSAGNYDI.js";
import "/build/_shared/chunk-47YKAHTX.js";
import {
  styled_components_browser_esm_default
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  init_esm,
  useActionData,
  useLoaderData,
  useMatches
} from "/build/_shared/chunk-IQJCUQRT.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/user/responses/vacancy.$id/$resumeId.tsx
var import_cloudflare = __toESM(require_cloudflare());
init_esm();
var import_qs = __toESM(require_lib());

// app/components/pages/User/Responses/components/Vacancies/InnerResponsesResumeComponent/index.tsx
init_esm();
var import_react2 = __toESM(require_react());

// app/components/pages/User/Responses/components/Vacancies/InnerResponsesResumeComponent/styles.ts
var BoxContainer = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  width: 100%;
  align-items: center;
  min-height: 100%;
  justify-content: center;
  gap: 16px;
  @media (min-width: 1280px) {
    min-height: 100%;
    top: 0;
    /* overflow: hidden; */
    justify-content: flex-start;
    gap: 24px;
  }
`;
var BoxControl = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.user.borderColor};

  form {
    align-items: center;
    padding-top: 16px;
  }

  @media (min-width: 768px) {
    align-items: flex-end;

    form {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
      align-items: flex-end;
    }
  }

  @media (min-width: 1280px) {
    .requestCard {
      justify-content: center;
    }
  }
`;

// app/components/pages/User/Responses/components/Vacancies/InnerResponsesResumeComponent/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function InnerResponsesResumeComponent({
  resume,
  dictionaries,
  response,
  responseAction
}) {
  const [visibleRequest, setVisibleRequest] = (0, import_react2.useState)(false);
  const handleRequest = () => {
    setVisibleRequest(!visibleRequest);
  };
  const matches = useMatches();
  const selectedVacancy = matches[3].data?.vacancy;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResumeFullCardWidget, { resume, dictionaries, handleRequest, stateResponse: response?.state, typeResponse: response?.shared_id === selectedVacancy?.id ? "REQUEST" : "INVITATION", responseId: response?.id, variant: "response", responseAction, status: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResponseTypeStatus_default, { type: response?.shared_id === selectedVacancy?.id ? "REQUEST" : "INVITATION", state: response?.state, position: "relative", onlyContainer: true }, void 0, false, {
    fileName: "app/components/pages/User/Responses/components/Vacancies/InnerResponsesResumeComponent/index.tsx",
    lineNumber: 29,
    columnNumber: 306
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Responses/components/Vacancies/InnerResponsesResumeComponent/index.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Responses/components/Vacancies/InnerResponsesResumeComponent/index.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}

// app/routes/user/responses/vacancy.$id/$resumeId.tsx
var import_message = __toESM(require_message());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function ResponseVacancyIndex() {
  const request = useLoaderData();
  const actionData = useActionData();
  const {
    resume,
    response,
    dictionaries
  } = request;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InnerResponsesResumeComponent, { resume, response, responseAction: actionData?.success, dictionaries }, void 0, false, {
    fileName: "app/routes/user/responses/vacancy.$id/$resumeId.tsx",
    lineNumber: 101,
    columnNumber: 10
  }, this);
}
export {
  ResponseVacancyIndex as default
};
//# sourceMappingURL=/build/routes/user/responses/vacancy.$id/$resumeId-7H3XTOMV.js.map
