import {
  VacancyFullCardWidget
} from "/build/_shared/chunk-2FSPXWS6.js";
import {
  ModalRequestList
} from "/build/_shared/chunk-NFPDJYC4.js";
import {
  SignInForRequest
} from "/build/_shared/chunk-R2BJLWHH.js";
import {
  ModalShare
} from "/build/_shared/chunk-JTDZABLX.js";
import {
  EntityVariantEnum,
  PageVariantEnum
} from "/build/_shared/chunk-5HXZ6U7H.js";
import {
  CLIENT_BASE_URL,
  styled_components_browser_esm_default,
  useApp,
  useScreenWidth
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  init_esm,
  useLocation
} from "/build/_shared/chunk-IQJCUQRT.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/pages/Search/Vacancies/Vacancy/index.tsx
init_esm();
var import_react2 = __toESM(require_react());

// app/components/pages/Search/Vacancies/Vacancy/styles.ts
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

// app/components/pages/Search/Vacancies/Vacancy/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function VacancySearchCard({
  vacancy,
  myResumes,
  dictionaries
}) {
  const {
    userContext
  } = useApp();
  const [visibleRequest, setVisibleRequest] = (0, import_react2.useState)(false);
  const widthScreen = useScreenWidth();
  const handleRequest = () => {
    setVisibleRequest(!visibleRequest);
  };
  const location = useLocation();
  const [visibleShare, setVisibleShare] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VacancyFullCardWidget, { vacancy, handleRequest, variant: PageVariantEnum.search }, void 0, false, {
      fileName: "app/components/pages/Search/Vacancies/Vacancy/index.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    !userContext?.user?.isAuthenticated && widthScreen < 1280 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SignInForRequest, { variant: "vacancy" }, void 0, false, {
      fileName: "app/components/pages/Search/Vacancies/Vacancy/index.tsx",
      lineNumber: 37,
      columnNumber: 69
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalRequestList, { variant: EntityVariantEnum.resume, visibility: visibleRequest, setVisibility: setVisibleRequest, resumes: myResumes, vacancyId: vacancy?.id }, void 0, false, {
      fileName: "app/components/pages/Search/Vacancies/Vacancy/index.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalShare, { link: `${CLIENT_BASE_URL}${location.pathname}/${vacancy?.id || ""}`, visibility: visibleShare, setVisibility: setVisibleShare }, void 0, false, {
      fileName: "app/components/pages/Search/Vacancies/Vacancy/index.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Search/Vacancies/Vacancy/index.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}

export {
  VacancySearchCard
};
//# sourceMappingURL=/build/_shared/chunk-OWIWWAS4.js.map
