import {
  ResponseType,
  ResponseTypeStatus_default
} from "/build/_shared/chunk-KNWWVEW6.js";
import {
  ResponseState
} from "/build/_shared/chunk-G7LBNXS2.js";
import {
  Box
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6O7TW4X6.js";
import {
  __toESM
} from "/build/_shared/chunk-RFITDC3A.js";

// app/components/common/ResponseAllTypeStatuses/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ResponseAllTypeStatuses({
  statistics
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "row", gap: "8px", flexWrap: "wrap", children: [
    statistics?.requests_approved && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { style: {
      position: "relative"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResponseTypeStatus_default, { type: ResponseType.request, state: ResponseState.APPROVED, position: "relative", onlyContainer: true, totalInvations: statistics.requests_approved }, void 0, false, {
      fileName: "app/components/common/ResponseAllTypeStatuses/index.tsx",
      lineNumber: 16,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/common/ResponseAllTypeStatuses/index.tsx",
      lineNumber: 13,
      columnNumber: 41
    }, this),
    statistics?.invitations_total && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { style: {
      position: "relative"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResponseTypeStatus_default, { type: ResponseType.invitation, state: ResponseState.NEW, position: "relative", onlyContainer: true, totalInvations: statistics.invitations_total, newInvations: statistics.new_invitations }, void 0, false, {
      fileName: "app/components/common/ResponseAllTypeStatuses/index.tsx",
      lineNumber: 21,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/common/ResponseAllTypeStatuses/index.tsx",
      lineNumber: 18,
      columnNumber: 41
    }, this),
    statistics?.requests_total && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { style: {
      position: "relative"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResponseTypeStatus_default, { type: ResponseType.request, state: ResponseState.NEW, position: "relative", onlyContainer: true, totalRequest: statistics.requests_total }, void 0, false, {
      fileName: "app/components/common/ResponseAllTypeStatuses/index.tsx",
      lineNumber: 26,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/common/ResponseAllTypeStatuses/index.tsx",
      lineNumber: 23,
      columnNumber: 38
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/ResponseAllTypeStatuses/index.tsx",
    lineNumber: 12,
    columnNumber: 10
  }, this);
}
var ResponseAllTypeStatuses_default = ResponseAllTypeStatuses;

export {
  ResponseAllTypeStatuses_default
};
