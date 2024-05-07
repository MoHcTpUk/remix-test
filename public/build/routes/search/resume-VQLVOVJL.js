import {
  ResumePartCardWidget
} from "/build/_shared/chunk-YQ2RU5HO.js";
import {
  ResumeSearchCard
} from "/build/_shared/chunk-F3YASTO7.js";
import "/build/_shared/chunk-YV5GCJGF.js";
import {
  BoxSelectedCard
} from "/build/_shared/chunk-2HDVGR3L.js";
import "/build/_shared/chunk-S5VX4NQS.js";
import "/build/_shared/chunk-7N42DDVR.js";
import "/build/_shared/chunk-NFPDJYC4.js";
import "/build/_shared/chunk-R2BJLWHH.js";
import {
  ModalShare
} from "/build/_shared/chunk-JTDZABLX.js";
import "/build/_shared/chunk-I66SYKBJ.js";
import "/build/_shared/chunk-B4CRX2YS.js";
import "/build/_shared/chunk-Y237PHJ4.js";
import "/build/_shared/chunk-QGLVK6XR.js";
import "/build/_shared/chunk-OGIUXGZ2.js";
import "/build/_shared/chunk-SIT5KOBR.js";
import "/build/_shared/chunk-BKQY745J.js";
import "/build/_shared/chunk-TK7Q23CM.js";
import "/build/_shared/chunk-4FBXI3BA.js";
import "/build/_shared/chunk-4HPJCB5S.js";
import "/build/_shared/chunk-4KH6JWI3.js";
import "/build/_shared/chunk-XK5TIN5G.js";
import "/build/_shared/chunk-X7YBBWQ4.js";
import {
  PageVariantEnum
} from "/build/_shared/chunk-5HXZ6U7H.js";
import "/build/_shared/chunk-HWT5QEPJ.js";
import "/build/_shared/chunk-EWP76DBX.js";
import "/build/_shared/chunk-BKRWDH2A.js";
import "/build/_shared/chunk-ZQ6IGHYP.js";
import "/build/_shared/chunk-EOBF4VPL.js";
import "/build/_shared/chunk-AF6HCNMF.js";
import "/build/_shared/chunk-NPNOAFIQ.js";
import {
  BoxInformationEnum,
  BoxInformation_default,
  List,
  ListItem
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
  CLIENT_BASE_URL,
  isServer,
  useApp,
  useScreenWidth
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  init_esm,
  useBeforeUnload,
  useLoaderData,
  useLocation
} from "/build/_shared/chunk-IQJCUQRT.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/search/resume.tsx
var import_cloudflare = __toESM(require_cloudflare());
init_esm();
var import_react4 = __toESM(require_react());

// app/components/pages/Search/Resumes/index.tsx
init_esm();
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var SearchResumesComponent = (0, import_react2.memo)(({
  resumes,
  resume,
  myVacancies,
  myCompanies,
  dictionaries
}) => {
  const {
    t
  } = useApp();
  const [visibleShare, setVisibleShare] = (0, import_react2.useState)(false);
  const location = useLocation();
  const [linkShare, setLinkShare] = (0, import_react2.useState)("");
  const widthScreen = useScreenWidth();
  const [visibleRequest, setVisibleRequest] = (0, import_react2.useState)(false);
  const handleRequest = () => {
    setVisibleRequest(!visibleRequest);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "row", alignItems: "flex-start", width: "100%", gap: "24px", as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", width: "100%", gap: widthScreen > 1024 ? "24px" : "16px", style: {
      flex: "1"
    }, children: [
      resumes?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        ResumePartCardWidget,
        {
          resume: item,
          selectedResume: resume?.id,
          variant: PageVariantEnum.search,
          handleRequest
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/Search/Resumes/index.tsx",
          lineNumber: 55,
          columnNumber: 33
        },
        this
      )),
      !resumes?.[0] && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxInformation_default, { variant: BoxInformationEnum.info, title: t("user:the_search_has_not_given_any_results_try_changing_your_search_terms"), information: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListItem, { children: t("user:try_more_general_keywords") }, void 0, false, {
          fileName: "app/components/pages/Search/Resumes/index.tsx",
          lineNumber: 59,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListItem, { children: t("user:try_changing_the_value_of_one_of_the_filters") }, void 0, false, {
          fileName: "app/components/pages/Search/Resumes/index.tsx",
          lineNumber: 60,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListItem, { children: t("user:check_your_spelling") }, void 0, false, {
          fileName: "app/components/pages/Search/Resumes/index.tsx",
          lineNumber: 61,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/Search/Resumes/index.tsx",
        lineNumber: 58,
        columnNumber: 178
      }, this), flexDirection: "column" }, void 0, false, {
        fileName: "app/components/pages/Search/Resumes/index.tsx",
        lineNumber: 58,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalShare, { link: `${CLIENT_BASE_URL}${location.pathname}/${linkShare}`, visibility: visibleShare, setVisibility: setVisibleShare }, void 0, false, {
        fileName: "app/components/pages/Search/Resumes/index.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Search/Resumes/index.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this),
    resume?.id && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxSelectedCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      ResumeSearchCard,
      {
        myCompanies,
        myVacancies,
        resume,
        dictionaries
      },
      void 0,
      false,
      {
        fileName: "app/components/pages/Search/Resumes/index.tsx",
        lineNumber: 66,
        columnNumber: 13
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/pages/Search/Resumes/index.tsx",
      lineNumber: 65,
      columnNumber: 24
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Search/Resumes/index.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
});

// app/routes/search/resume.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var useSSRLayoutEffect = isServer() ? () => {
} : import_react4.useLayoutEffect;
function useIsHydrating(queryString) {
  const [isHydrating] = (0, import_react4.useState)(() => !isServer && Boolean(document.querySelector(queryString)));
  return isHydrating;
}
function Search() {
  const request = useLoaderData();
  const resumes = request.resumes?.data;
  const myVacancies = request.myVacancies?.data;
  const myCompanies = request.myCompanies.data;
  const {
    dictionaries
  } = request;
  const resume = request?.resume ? request?.resume : resumes?.[0];
  const hydrating = useIsHydrating("[data-hydrating-signal]");
  const parentRef = (0, import_react4.useRef)(null);
  useBeforeUnload((0, import_react4.useCallback)(() => {
    if (!parentRef.current)
      return;
    sessionStorage.setItem("infiniteScrollTop", parentRef.current.scrollTop.toString());
  }, []));
  useSSRLayoutEffect(() => {
    if (!hydrating)
      return;
    if (!parentRef.current)
      return;
    const infiniteScrollTop = sessionStorage.getItem("infiniteScrollTop");
    if (!infiniteScrollTop)
      return;
    parentRef.current.scrollTop = Number(infiniteScrollTop);
    return () => {
      sessionStorage.removeItem("infiniteScrollTop");
    };
  }, [hydrating]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SearchResumesComponent, { resumes, resume, myVacancies, myCompanies, dictionaries }, void 0, false, {
    fileName: "app/routes/search/resume.tsx",
    lineNumber: 119,
    columnNumber: 10
  }, this);
}
export {
  Search as default
};
//# sourceMappingURL=/build/routes/search/resume-VQLVOVJL.js.map
