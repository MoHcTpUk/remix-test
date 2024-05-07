import {
  CompanyInformationEdit,
  Wrapper
} from "/build/_shared/chunk-RTDAH7IZ.js";
import "/build/_shared/chunk-JFP3I7KO.js";
import "/build/_shared/chunk-YB7GJSGU.js";
import "/build/_shared/chunk-B4CRX2YS.js";
import "/build/_shared/chunk-Y237PHJ4.js";
import "/build/_shared/chunk-OGIUXGZ2.js";
import {
  require_lib
} from "/build/_shared/chunk-IZY6H3OZ.js";
import {
  require_request
} from "/build/_shared/chunk-P6GQFH2U.js";
import "/build/_shared/chunk-RHNN4TA5.js";
import "/build/_shared/chunk-EWP76DBX.js";
import "/build/_shared/chunk-TCMGB6IX.js";
import "/build/_shared/chunk-KYNJZNBK.js";
import "/build/_shared/chunk-EOBF4VPL.js";
import "/build/_shared/chunk-AF6HCNMF.js";
import "/build/_shared/chunk-NPNOAFIQ.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-WTGWCS5L.js";
import "/build/_shared/chunk-TSAGNYDI.js";
import "/build/_shared/chunk-47YKAHTX.js";
import "/build/_shared/chunk-L3EPBPPP.js";
import {
  Form,
  init_esm,
  useActionData,
  useLoaderData
} from "/build/_shared/chunk-IQJCUQRT.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/user/company.create.tsx
var import_cloudflare = __toESM(require_cloudflare());
init_esm();
var import_qs = __toESM(require_lib());

// app/components/pages/User/Companies/Company/CompanyCreate.tsx
init_esm();
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var CompanyCreate = (0, import_react2.memo)(({
  step,
  company,
  dictionaries,
  actionData
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", style: {
  width: "100%"
}, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wrapper, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "step", type: "hidden", value: step }, void 0, false, {
    fileName: "app/components/pages/User/Companies/Company/CompanyCreate.tsx",
    lineNumber: 22,
    columnNumber: 9
  }, this),
  step === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompanyInformationEdit, { state: "create", company, step, dictionaries, actionData }, void 0, false, {
    fileName: "app/components/pages/User/Companies/Company/CompanyCreate.tsx",
    lineNumber: 23,
    columnNumber: 24
  }, this)
] }, void 0, true, {
  fileName: "app/components/pages/User/Companies/Company/CompanyCreate.tsx",
  lineNumber: 21,
  columnNumber: 7
}, this) }, void 0, false, {
  fileName: "app/components/pages/User/Companies/Company/CompanyCreate.tsx",
  lineNumber: 18,
  columnNumber: 20
}, this));

// app/routes/user/company.create.tsx
var import_request = __toESM(require_request());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Index() {
  const request = useLoaderData();
  const actionData = useActionData();
  const {
    step,
    dictionaries
  } = request;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CompanyCreate, { step, actionData, dictionaries }, void 0, false, {
    fileName: "app/routes/user/company.create.tsx",
    lineNumber: 136,
    columnNumber: 10
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/user/company.create-KGAZYVHK.js.map
