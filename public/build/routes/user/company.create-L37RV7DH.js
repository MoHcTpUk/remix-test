import {
  CompanyInformationEdit,
  Wrapper
} from "/build/_shared/chunk-JCNDOGBX.js";
import "/build/_shared/chunk-N4QY3NH2.js";
import "/build/_shared/chunk-O6PFKXUU.js";
import "/build/_shared/chunk-DUOL7BQP.js";
import "/build/_shared/chunk-SETLP5G4.js";
import "/build/_shared/chunk-LEK3IZDX.js";
import {
  require_lib
} from "/build/_shared/chunk-VYIZRLIF.js";
import {
  require_request
} from "/build/_shared/chunk-EISN5MP4.js";
import "/build/_shared/chunk-BXFA34ZG.js";
import "/build/_shared/chunk-6J6FMBZW.js";
import "/build/_shared/chunk-MPISASBV.js";
import "/build/_shared/chunk-LQ4YPZYM.js";
import "/build/_shared/chunk-NSEFQYWN.js";
import "/build/_shared/chunk-QD72PUQI.js";
import "/build/_shared/chunk-GEH4KW55.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-ASV7D43C.js";
import "/build/_shared/chunk-4SQREHPC.js";
import "/build/_shared/chunk-NC5IH6SX.js";
import "/build/_shared/chunk-FLSKZHT2.js";
import {
  Form,
  init_esm,
  useActionData,
  useLoaderData
} from "/build/_shared/chunk-JX76WC46.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6O7TW4X6.js";
import {
  __toESM
} from "/build/_shared/chunk-RFITDC3A.js";

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
