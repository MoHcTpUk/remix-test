import {
  ResumeFullCardWidget
} from "/build/_shared/chunk-7IYAOZBV.js";
import {
  ModalRequestList
} from "/build/_shared/chunk-MFOM2GJG.js";
import {
  SignInForRequest
} from "/build/_shared/chunk-NYZBDFE7.js";
import {
  styled_components_browser_esm_default,
  useApp,
  useScreenWidth
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6O7TW4X6.js";
import {
  __toESM
} from "/build/_shared/chunk-RFITDC3A.js";

// app/components/pages/Search/Resumes/Resume/index.tsx
var import_react = __toESM(require_react());

// app/components/pages/Search/Resumes/Resume/styles.ts
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
    position: sticky;
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

// app/components/pages/Search/Resumes/Resume/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ResumeSearchCard({
  resume,
  dictionaries,
  myVacancies,
  myCompanies
}) {
  const {
    userContext
  } = useApp();
  const [visibleRequest, setVisibleRequest] = (0, import_react.useState)(false);
  const widthScreen = useScreenWidth();
  const handleRequest = () => {
    setVisibleRequest(!visibleRequest);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResumeFullCardWidget, { resume, dictionaries, handleRequest, variant: "search" }, void 0, false, {
      fileName: "app/components/pages/Search/Resumes/Resume/index.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    !userContext?.user?.isAuthenticated && widthScreen < 1280 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SignInForRequest, { variant: "resume" }, void 0, false, {
      fileName: "app/components/pages/Search/Resumes/Resume/index.tsx",
      lineNumber: 33,
      columnNumber: 69
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalRequestList, { variant: "vacancy", visibility: visibleRequest, setVisibility: setVisibleRequest, vacancies: myVacancies, companies: myCompanies, resumeId: resume?.id }, void 0, false, {
      fileName: "app/components/pages/Search/Resumes/Resume/index.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Search/Resumes/Resume/index.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}

export {
  ResumeSearchCard
};
