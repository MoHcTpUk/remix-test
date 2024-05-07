import {
  CompanyFullCardWidget,
  SearchVacanciesComponent
} from "/build/_shared/chunk-ETKNO2ES.js";
import {
  SignInForRequest
} from "/build/_shared/chunk-R2BJLWHH.js";
import {
  ModalShare
} from "/build/_shared/chunk-JTDZABLX.js";
import {
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

// app/components/pages/Search/Companies/Company/index.tsx
init_esm();
var import_react2 = __toESM(require_react());

// app/components/pages/Search/Companies/Company/styles.ts
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
var BoxSearchCompany = styled_components_browser_esm_default.div`
  gap: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: sticky;
  align-items: center;
  min-height: 100%;
  justify-content: center;
  @media (min-width: 1024px) {
    gap: 24px;
  }
  @media (min-width: 1280px) {
    min-height: 100%;
    position: sticky;
    top: 0;
    /* overflow: hidden; */
    justify-content: flex-start;
  }
`;

// app/components/pages/Search/Companies/Company/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function CompanySearchCard({
  vacancies,
  company,
  dictionaries
}) {
  const {
    userContext
  } = useApp();
  const location = useLocation();
  const widthScreen = useScreenWidth();
  const [visibleShare, setVisibleShare] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxSearchCompany, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompanyFullCardWidget, { company, variant: PageVariantEnum.search }, void 0, false, {
      fileName: "app/components/pages/Search/Companies/Company/index.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    !userContext?.user?.isAuthenticated && widthScreen < 1280 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SignInForRequest, { variant: "vacancy" }, void 0, false, {
      fileName: "app/components/pages/Search/Companies/Company/index.tsx",
      lineNumber: 32,
      columnNumber: 69
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalShare, { link: `${CLIENT_BASE_URL}${location.pathname}/${company?.id || ""}`, visibility: visibleShare, setVisibility: setVisibleShare }, void 0, false, {
      fileName: "app/components/pages/Search/Companies/Company/index.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    vacancies && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchVacanciesComponent, { vacancies, dictionaries }, void 0, false, {
      fileName: "app/components/pages/Search/Companies/Company/index.tsx",
      lineNumber: 35,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Search/Companies/Company/index.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}

export {
  CompanySearchCard
};
//# sourceMappingURL=/build/_shared/chunk-5IJMPNDQ.js.map
