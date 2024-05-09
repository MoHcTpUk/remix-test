import {
  SearchVacanciesComponent
} from "/build/_shared/chunk-V5MNZ2Y5.js";
import "/build/_shared/chunk-7FNYKDMW.js";
import "/build/_shared/chunk-S736XJXX.js";
import "/build/_shared/chunk-E4EPAWHT.js";
import "/build/_shared/chunk-GDKTSAJ4.js";
import "/build/_shared/chunk-4ELEE4BM.js";
import "/build/_shared/chunk-KNWWVEW6.js";
import "/build/_shared/chunk-MFOM2GJG.js";
import "/build/_shared/chunk-NYZBDFE7.js";
import "/build/_shared/chunk-6Q4I67JY.js";
import "/build/_shared/chunk-RCGFGPYD.js";
import "/build/_shared/chunk-DUOL7BQP.js";
import "/build/_shared/chunk-SETLP5G4.js";
import "/build/_shared/chunk-5HZIPPOH.js";
import "/build/_shared/chunk-LEK3IZDX.js";
import "/build/_shared/chunk-G7LBNXS2.js";
import "/build/_shared/chunk-ZGBGIZVF.js";
import "/build/_shared/chunk-P4RFN3QO.js";
import "/build/_shared/chunk-4O6GBBTS.js";
import "/build/_shared/chunk-DECE5T37.js";
import "/build/_shared/chunk-IYT3SP4K.js";
import "/build/_shared/chunk-P5TLLZSL.js";
import "/build/_shared/chunk-FMAU5EOD.js";
import "/build/_shared/chunk-SWZFRHVX.js";
import "/build/_shared/chunk-6J6FMBZW.js";
import "/build/_shared/chunk-XPTAWHVK.js";
import "/build/_shared/chunk-T7KDPY4G.js";
import "/build/_shared/chunk-NSEFQYWN.js";
import "/build/_shared/chunk-QD72PUQI.js";
import "/build/_shared/chunk-GEH4KW55.js";
import "/build/_shared/chunk-MYIBCQY6.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-ASV7D43C.js";
import "/build/_shared/chunk-4SQREHPC.js";
import "/build/_shared/chunk-NC5IH6SX.js";
import {
  isServer
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  init_esm,
  useBeforeUnload,
  useLoaderData
} from "/build/_shared/chunk-JX76WC46.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6O7TW4X6.js";
import {
  __toESM
} from "/build/_shared/chunk-RFITDC3A.js";

// app/routes/search/vacancy.tsx
var import_cloudflare = __toESM(require_cloudflare());
init_esm();
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var useSSRLayoutEffect = isServer() ? () => {
} : import_react2.useLayoutEffect;
function useIsHydrating(queryString) {
  const [isHydrating] = (0, import_react2.useState)(() => !isServer && Boolean(document.querySelector(queryString)));
  return isHydrating;
}
function Search() {
  const request = useLoaderData();
  const vacancies = request?.vacancies?.data;
  const vacancy = request?.vacancy ? request?.vacancy : vacancies?.[0];
  const myResumes = request?.myResumes?.data;
  const {
    dictionaries
  } = request;
  const hydrating = useIsHydrating("[data-hydrating-signal]");
  const parentRef = (0, import_react2.useRef)(null);
  useBeforeUnload((0, import_react2.useCallback)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchVacanciesComponent, { vacancies, vacancy, myResumes, dictionaries }, void 0, false, {
    fileName: "app/routes/search/vacancy.tsx",
    lineNumber: 107,
    columnNumber: 10
  }, this);
}
export {
  Search as default
};