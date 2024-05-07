import {
  VacancyPartCardInfo
} from "/build/_shared/chunk-4KH6JWI3.js";
import {
  VacancyPartCardHeading
} from "/build/_shared/chunk-XK5TIN5G.js";
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

// app/components/pages/Search/Vacancies/VacanciesRequest/VacancyRequest.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var VacancyRequest = (0, import_react.memo)(({
  vacancy,
  dictionaries,
  companies
}) => {
  const {
    theme
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxCard, { variant: VariantCardEnum.userCard, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", width: "100%", children: vacancy && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VacancyPartCardHeading, { vacancy }, void 0, false, {
      fileName: "app/components/pages/Search/Vacancies/VacanciesRequest/VacancyRequest.tsx",
      lineNumber: 26,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { borderTop: `1px solid ${theme.user.borderColor}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VacancyPartCardInfo, { vacancy, variant: PageVariantEnum.response }, void 0, false, {
      fileName: "app/components/pages/Search/Vacancies/VacanciesRequest/VacancyRequest.tsx",
      lineNumber: 28,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/pages/Search/Vacancies/VacanciesRequest/VacancyRequest.tsx",
      lineNumber: 27,
      columnNumber: 15
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Search/Vacancies/VacanciesRequest/VacancyRequest.tsx",
    lineNumber: 25,
    columnNumber: 23
  }, this) }, void 0, false, {
    fileName: "app/components/pages/Search/Vacancies/VacanciesRequest/VacancyRequest.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this) }, vacancy?.id, false, {
    fileName: "app/components/pages/Search/Vacancies/VacanciesRequest/VacancyRequest.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
});

export {
  VacancyRequest
};
//# sourceMappingURL=/build/_shared/chunk-4HPJCB5S.js.map
