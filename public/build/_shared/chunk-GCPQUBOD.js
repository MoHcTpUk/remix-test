import {
  EmptyState_default
} from "/build/_shared/chunk-DDNOQBKY.js";
import {
  ButtonCreate,
  ModalSelectCreateForm
} from "/build/_shared/chunk-HGKWYC6I.js";
import {
  Button_default
} from "/build/_shared/chunk-AF6HCNMF.js";
import {
  Text,
  TextVariantEnum,
  routes_default,
  styled_components_browser_esm_default,
  useApp,
  useRouteChecks
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  Link,
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

// app/components/pages/User/components/CreateEntityCard/index.tsx
init_esm();
var import_react2 = __toESM(require_react());

// app/components/pages/User/components/CreateEntityCard/styles.ts
var ButtonWrapper = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;

  & a,
  button {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  @media (min-width: 768px) {
    & a,
    button {
      width: fit-content;
    }
  }
`;

// app/components/pages/User/components/CreateEntityCard/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function CreateEntityCard() {
  const {
    t,
    userContext
  } = useApp();
  const loc = useLocation();
  const {
    isUserResume,
    isUserVacancy,
    isUserCompany
  } = useRouteChecks();
  const [visibleSelectionCreate, setSelectionCreate] = (0, import_react2.useState)(false);
  const [variantCreate, setVariantCreate] = (0, import_react2.useState)("resume");
  const isRoute = isUserResume || isUserVacancy || isUserCompany;
  let iconName;
  let title;
  let text;
  let buttonElement;
  switch (isRoute) {
    case false:
      iconName = "";
      title = "";
      text = "";
      buttonElement = null;
      break;
    case isUserResume:
      iconName = "emojiDocument";
      title = `${t("common:create_resume")}`;
      text = `${t("user:create_your_first_resume_it_takes_only_a_few_minutes")}`;
      buttonElement = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonCreate, { variant: "resume", priority: "primary", setVariantCreate, setSelectionCreate }, void 0, false, {
        fileName: "app/components/pages/User/components/CreateEntityCard/index.tsx",
        lineNumber: 41,
        columnNumber: 23
      }, this);
      break;
    case isUserVacancy:
      iconName = "emojiBriefcase";
      title = `${t("common:create_vacancy")}`;
      text = `${t("user:create_your_first_vacancy_it_takes_only_a_few_minutes")}`;
      buttonElement = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonCreate, { variant: "vacancy", priority: "primary", setVariantCreate, setSelectionCreate }, void 0, false, {
        fileName: "app/components/pages/User/components/CreateEntityCard/index.tsx",
        lineNumber: 47,
        columnNumber: 23
      }, this);
      break;
    case isUserCompany:
      iconName = "emojiStar2";
      title = `${t("common:create_company")}`;
      text = `${t("user:create_your_first_company_it_takes_only_a_few_minutes")}`;
      buttonElement = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: userContext.user.isAuthenticated ? routes_default.user.company.create : `${loc.pathname}${loc.search ? `${loc.search}&login=true` : "?login=true"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:create_company") }, void 0, false, {
        fileName: "app/components/pages/User/components/CreateEntityCard/index.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/pages/User/components/CreateEntityCard/index.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/pages/User/components/CreateEntityCard/index.tsx",
        lineNumber: 53,
        columnNumber: 23
      }, this);
      break;
    default:
      iconName = "";
      title = "";
      text = "";
      buttonElement = null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState_default, { iconName, title, text, buttonControl: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonWrapper, { children: buttonElement }, void 0, false, {
      fileName: "app/components/pages/User/components/CreateEntityCard/index.tsx",
      lineNumber: 66,
      columnNumber: 80
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/components/CreateEntityCard/index.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalSelectCreateForm, { visibility: visibleSelectionCreate, setVisibility: setSelectionCreate, variant: variantCreate }, void 0, false, {
      fileName: "app/components/pages/User/components/CreateEntityCard/index.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/components/CreateEntityCard/index.tsx",
    lineNumber: 65,
    columnNumber: 10
  }, this);
}

export {
  CreateEntityCard
};
//# sourceMappingURL=/build/_shared/chunk-GCPQUBOD.js.map
