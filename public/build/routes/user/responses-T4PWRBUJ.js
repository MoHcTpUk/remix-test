import {
  ResponseAllTypeStatuses_default
} from "/build/_shared/chunk-F2CI4NCU.js";
import "/build/_shared/chunk-7N42DDVR.js";
import "/build/_shared/chunk-SIT5KOBR.js";
import {
  ResumePartCardHeading
} from "/build/_shared/chunk-4FBXI3BA.js";
import {
  VacancyPartCardHeading
} from "/build/_shared/chunk-XK5TIN5G.js";
import {
  ResponseCardVariantEnum
} from "/build/_shared/chunk-5HXZ6U7H.js";
import {
  CheckBox
} from "/build/_shared/chunk-HWT5QEPJ.js";
import {
  BoxCard
} from "/build/_shared/chunk-EWP76DBX.js";
import "/build/_shared/chunk-NPNOAFIQ.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-WTGWCS5L.js";
import {
  Box,
  Text,
  TextVariantEnum,
  calculateStatistics,
  styled_components_browser_esm_default,
  useApp,
  useMatchesData,
  useScreenWidth
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  Link,
  Outlet,
  init_esm,
  useLocation,
  useMatches
} from "/build/_shared/chunk-IQJCUQRT.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/user/responses.tsx
var import_cloudflare = __toESM(require_cloudflare());
init_esm();

// app/components/pages/User/Responses/index.tsx
init_esm();
var import_react3 = __toESM(require_react());

// app/components/ui/Containers/WrapperContainer/styles.ts
var Wrapper = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  @media (min-width: 1024px) {
    gap: 24px;
  }
`;

// app/components/ui/Containers/WrapperContainer/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function WrapperContainer({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wrapper, { children }, void 0, false, {
    fileName: "app/components/ui/Containers/WrapperContainer/index.tsx",
    lineNumber: 9,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Responses/components/MainFilter/index.tsx
init_esm();
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function MainFilter({
  variant,
  responses,
  vacancy,
  resume,
  statistics
}) {
  const {
    theme,
    t
  } = useApp();
  const location = useLocation();
  const widthScreen = useScreenWidth();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxCard, { title: t("user:response_filters"), children: [
    resume && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { flexDirection: "column", padding: widthScreen > 768 ? "24px" : "16px", borderRadius: widthScreen > 768 ? "8px" : "4px", backgroundColor: theme.responses.filters.backgroundColor, gap: widthScreen > 768 ? "16px" : "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ResumePartCardHeading, { resume, variant: "response", variantResponseCard: ResponseCardVariantEnum.heading }, void 0, false, {
        fileName: "app/components/pages/User/Responses/components/MainFilter/index.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ResponseAllTypeStatuses_default, { statistics }, void 0, false, {
        fileName: "app/components/pages/User/Responses/components/MainFilter/index.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Responses/components/MainFilter/index.tsx",
      lineNumber: 34,
      columnNumber: 18
    }, this),
    vacancy && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { flexDirection: "column", padding: widthScreen > 768 ? "24px" : "16px", borderRadius: widthScreen > 768 ? "8px" : "4px", backgroundColor: theme.responses.filters.backgroundColor, gap: widthScreen > 768 ? "16px" : "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(VacancyPartCardHeading, { vacancy, variant: "response", variantResponseCard: ResponseCardVariantEnum.heading }, void 0, false, {
        fileName: "app/components/pages/User/Responses/components/MainFilter/index.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ResponseAllTypeStatuses_default, { statistics }, void 0, false, {
        fileName: "app/components/pages/User/Responses/components/MainFilter/index.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Responses/components/MainFilter/index.tsx",
      lineNumber: 40,
      columnNumber: 19
    }, this),
    !resume && !vacancy && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, children: t("user:select_the_resume_or_vacancy_for_which_you_want_to_see_responses") }, void 0, false, {
        fileName: "app/components/pages/User/Responses/components/MainFilter/index.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { gap: "16px", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: location.pathname.includes("responses/resume") ? "/user/responses" : "resume", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CheckBox, { checked: location.pathname.includes("responses/resume"), label: t("user:resumes") }, void 0, false, {
          fileName: "app/components/pages/User/Responses/components/MainFilter/index.tsx",
          lineNumber: 52,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/pages/User/Responses/components/MainFilter/index.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: location.pathname.includes("responses/vacancy") ? "/user/responses" : "vacancy", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CheckBox, { checked: location.pathname.includes("responses/vacancy"), label: t("user:vacancies") }, void 0, false, {
          fileName: "app/components/pages/User/Responses/components/MainFilter/index.tsx",
          lineNumber: 56,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/pages/User/Responses/components/MainFilter/index.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/User/Responses/components/MainFilter/index.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Responses/components/MainFilter/index.tsx",
      lineNumber: 46,
      columnNumber: 31
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Responses/components/MainFilter/index.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
var MainFilter_default = MainFilter;

// app/components/pages/User/Responses/index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var Responses = (0, import_react3.memo)(() => {
  const matches = useMatches();
  const data = useMatchesData(matches[3].id);
  const dataVacancy = data?.vacancy;
  const dataResume = data?.resume;
  const responses = data?.responses?.data;
  const statistics = dataResume ? calculateStatistics(responses, dataResume?.id) : calculateStatistics(responses, dataVacancy?.id);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WrapperContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MainFilter_default, { vacancy: dataVacancy, resume: dataResume, variant: dataVacancy && "vacancy" || dataResume && "resume", statistics }, void 0, false, {
    fileName: "app/components/pages/User/Responses/index.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Responses/index.tsx",
    lineNumber: 16,
    columnNumber: 10
  }, this);
});

// app/routes/user/responses.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { flexDirection: "column", width: "100%", alignItems: "flex-start", gap: "24px", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Responses, {}, void 0, false, {
      fileName: "app/routes/user/responses.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/user/responses.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user/responses.tsx",
    lineNumber: 18,
    columnNumber: 10
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/user/responses-T4PWRBUJ.js.map
