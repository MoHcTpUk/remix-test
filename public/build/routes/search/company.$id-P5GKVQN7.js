import {
  CompanySearchCard
} from "/build/_shared/chunk-5IJMPNDQ.js";
import "/build/_shared/chunk-ETKNO2ES.js";
import "/build/_shared/chunk-3A2W4CRF.js";
import "/build/_shared/chunk-OWIWWAS4.js";
import "/build/_shared/chunk-2FSPXWS6.js";
import "/build/_shared/chunk-2HDVGR3L.js";
import "/build/_shared/chunk-S5VX4NQS.js";
import "/build/_shared/chunk-7N42DDVR.js";
import "/build/_shared/chunk-NFPDJYC4.js";
import "/build/_shared/chunk-R2BJLWHH.js";
import "/build/_shared/chunk-JTDZABLX.js";
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
import "/build/_shared/chunk-5HXZ6U7H.js";
import "/build/_shared/chunk-EWP76DBX.js";
import "/build/_shared/chunk-BKRWDH2A.js";
import "/build/_shared/chunk-ZQ6IGHYP.js";
import "/build/_shared/chunk-EOBF4VPL.js";
import "/build/_shared/chunk-AF6HCNMF.js";
import "/build/_shared/chunk-NPNOAFIQ.js";
import "/build/_shared/chunk-D6JIAAYU.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-WTGWCS5L.js";
import "/build/_shared/chunk-TSAGNYDI.js";
import "/build/_shared/chunk-47YKAHTX.js";
import {
  Box
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  init_esm,
  useLoaderData
} from "/build/_shared/chunk-IQJCUQRT.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/search/company.$id.tsx
var import_cloudflare = __toESM(require_cloudflare());
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  const request = useLoaderData();
  const vacancies = request?.vacancies.data;
  const company = request?.company;
  const {
    dictionaries
  } = request;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { width: "100%", maxWidth: "920px", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompanySearchCard, { vacancies, company, dictionaries }, void 0, false, {
      fileName: "app/routes/search/company.$id.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    ";"
  ] }, void 0, true, {
    fileName: "app/routes/search/company.$id.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/search/company.$id-P5GKVQN7.js.map
