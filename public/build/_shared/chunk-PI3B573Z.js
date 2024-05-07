import {
  BoxCard,
  VariantCardEnum
} from "/build/_shared/chunk-EWP76DBX.js";
import {
  Heading
} from "/build/_shared/chunk-H5SUEHSB.js";
import {
  CommonLayout,
  NavbarItem
} from "/build/_shared/chunk-QY27BVON.js";
import {
  Box,
  IconEnum,
  routes_default,
  styled_components_browser_esm_default,
  useApp,
  useRouteChecks
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  Outlet,
  init_esm,
  useMatches
} from "/build/_shared/chunk-IQJCUQRT.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/ui/RouteLayout/index.tsx
init_esm();

// app/components/entities/Sidebar/index.tsx
init_esm();
var import_react2 = __toESM(require_react());

// app/components/entities/Sidebar/styles.ts
var Wrapper = styled_components_browser_esm_default.div`
  display: none;

  @media (min-width: 1280px) {
    display: block;
    min-width: 282px;
    min-height: calc(100vh - 419px);
    background-color: ${({ theme }) => theme.user.backgroundCardColor};
    border-radius: 12px;
    gap: 8px;
  }
`;

// app/components/entities/Sidebar/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Sidebar = (0, import_react2.memo)(() => {
  const {
    t
  } = useApp();
  const matches = useMatches();
  const userMatches = matches.some((m) => m.id.includes("routes/user/myprofile"));
  const resumeMatches = matches.some((m) => m.id.includes("routes/user/resume"));
  const vacancyMatches = matches.some((m) => m.id.includes("routes/user/vacancy"));
  const companyMatches = matches.some((m) => m.id.includes("routes/user/company"));
  const responsesMatches = matches.some((m) => m.id === "routes/user/responses");
  const userLinks = [{
    id: 1,
    title: t("user:my_profile"),
    href: routes_default.user.root,
    isActive: userMatches,
    icon: IconEnum.user
  }, {
    id: 2,
    title: t("user:my_resumes"),
    href: routes_default.user.resume.root,
    isActive: resumeMatches,
    icon: IconEnum.noteEdit
  }, {
    id: 3,
    title: t("user:my_vacancies"),
    href: routes_default.user.vacancy.root,
    isActive: vacancyMatches,
    icon: IconEnum.noteSearch
  }, {
    id: 4,
    title: t("user:companies"),
    href: routes_default.user.company.root,
    isActive: companyMatches,
    icon: IconEnum.navi
  }, {
    id: 5,
    title: t("user:responses"),
    href: routes_default.user.responses.root,
    isActive: responsesMatches,
    icon: IconEnum.chat
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxCard, { variant: VariantCardEnum.sidebar, children: userLinks.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavbarItem, { item }, void 0, false, {
    fileName: "app/components/entities/Sidebar/index.tsx",
    lineNumber: 55,
    columnNumber: 13
  }, this) }, item.id, false, {
    fileName: "app/components/entities/Sidebar/index.tsx",
    lineNumber: 54,
    columnNumber: 32
  }, this)) }, void 0, false, {
    fileName: "app/components/entities/Sidebar/index.tsx",
    lineNumber: 53,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/entities/Sidebar/index.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
});

// app/components/ui/RouteLayout/styles.ts
var Wrapper2 = styled_components_browser_esm_default.div`
  width: 100%;
  background-color: ${({ theme }) => theme.user.backgroundPageColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
var BoxContainer = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  padding: 80px 16px 16px;

  gap: 16px;
  background-color: ${({ theme }) => theme.user.backgroundPageColor};
  width: 100%;

  @media (min-width: 768px) {
    max-width: ${({ variant, isUserResponses }) => !isUserResponses && variant === "user" && "506px"};
    padding: ${({ variant }) => variant === "user" ? "96px 0 16px" : "96px 40px 16px"};
    padding: ${({ variant, isUserResponses }) => {
  if (variant === "user" && !isUserResponses)
    return "96px 0 16px";
  return "96px 40px 16px";
}};
  }

  @media (min-width: 1024px) {
    max-width: ${({ variant, isUserResponses }) => {
  if (variant === "user" && !isUserResponses)
    return "606px";
  return "816px";
}};
    padding: ${({ isUserResponses }) => !isUserResponses ? "104px 0 24px" : "104px 24px"};
    gap: 24px;
  }

  @media (min-width: 1280px) {
    max-width: ${({ isUserResponses }) => !isUserResponses ? "996px" : "100%"};
  }
`;

// app/components/ui/RouteLayout/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function RouteLayout({
  variant,
  noHeading = false
}) {
  const {
    isUserResponses
  } = useRouteChecks();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CommonLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Wrapper2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxContainer, { variant, isUserResponses, children: [
    !noHeading && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Heading, {}, void 0, false, {
      fileName: "app/components/ui/RouteLayout/index.tsx",
      lineNumber: 22,
      columnNumber: 26
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { flexDirection: variant === "user" ? "row" : "column", gap: "24px", children: [
      variant === "user" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Sidebar, {}, void 0, false, {
        fileName: "app/components/ui/RouteLayout/index.tsx",
        lineNumber: 24,
        columnNumber: 36
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/components/ui/RouteLayout/index.tsx",
        lineNumber: 25,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ui/RouteLayout/index.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/RouteLayout/index.tsx",
    lineNumber: 21,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/ui/RouteLayout/index.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/RouteLayout/index.tsx",
    lineNumber: 19,
    columnNumber: 10
  }, this);
}

export {
  RouteLayout
};
//# sourceMappingURL=/build/_shared/chunk-PI3B573Z.js.map
