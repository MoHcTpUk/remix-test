import {
  ResponseState
} from "/build/_shared/chunk-SIT5KOBR.js";
import {
  Ae,
  Icon,
  IconEnum,
  Text,
  TextVariantEnum,
  styled_components_browser_esm_default,
  useApp
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// shared/v2/responses/models/index.ts
var ResponseType = {
  request: "REQUEST",
  invitation: "INVITATION"
};

// app/components/common/ResponseTypeStatus/styles.ts
var Wrapper = styled_components_browser_esm_default.div`
  display: flex;
  width: 100%;
  padding: 16px 24px;
  position: ${({ position }) => position === "relative" ? "relative" : "absolute"};
  padding: ${({ onlyContainer }) => onlyContainer ? "0px" : "16px 24px"};
  top: 0;
  left: 0;
  border-radius: 8px 8px 0 0;
  ${({ type, state }) => {
  if (state === ResponseState.APPROVED) {
    return Ae`
        background-color: ${({ theme }) => theme.boxInformation.success.backgroundColor};
      `;
  }
  if (type === ResponseType.invitation) {
    return Ae`
        background-color: ${({ theme }) => theme.boxInformation.info.backgroundColor};
      `;
  }
  return Ae`
      background-color: ${({ theme }) => theme.boxInformation.warning.backgroundColor};
    `;
}}

  @media (min-width: 768px) {
    border-radius: 12px 12px 0 0;
  }
`;
var ContainerInfo = styled_components_browser_esm_default.div`
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
  border-radius: 80px;
  padding: 1px 12px 1px 5px;
  ${({ type, state }) => {
  if (type === ResponseType.request && state === ResponseState.APPROVED) {
    return Ae`
        border: ${({ theme }) => `1px solid ${theme.boxInformation.success.borderColor}`};
      `;
  }
  if (type === ResponseType.invitation) {
    return Ae`
        border: ${({ theme }) => `1px solid ${theme.boxInformation.info.borderColor}`};
      `;
  }
  return Ae`
      border: ${({ theme }) => `1px solid ${theme.boxInformation.warning.borderColor}`};
    `;
}};
`;

// app/components/common/ResponseTypeStatus/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ResponseTypeStatus({
  type,
  state,
  position,
  onlyContainer,
  totalRequest,
  totalInvations,
  newInvations,
  approvedRequest
}) {
  const {
    t,
    theme
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wrapper, { type, state, position, onlyContainer, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContainerInfo, { type, state, children: [
    type === "INVITATION" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      state === ResponseState.APPROVED_AND_VIEWED || state === ResponseState.APPROVED ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.statusApproved }, void 0, false, {
        fileName: "app/components/common/ResponseTypeStatus/index.tsx",
        lineNumber: 36,
        columnNumber: 96
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.statusWarning }, void 0, false, {
        fileName: "app/components/common/ResponseTypeStatus/index.tsx",
        lineNumber: 36,
        columnNumber: 138
      }, this),
      state === ResponseState.VIEWED && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, color: theme.boxInformation.info.borderColor, children: t("user:invitation_viewed") }, void 0, false, {
        fileName: "app/components/common/ResponseTypeStatus/index.tsx",
        lineNumber: 37,
        columnNumber: 48
      }, this),
      state === ResponseState.NEW && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, color: theme.boxInformation.info.borderColor, children: t("user:Invitation") }, void 0, false, {
          fileName: "app/components/common/ResponseTypeStatus/index.tsx",
          lineNumber: 41,
          columnNumber: 17
        }, this),
        totalInvations && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, color: theme.boxInformation.info.borderColor, children: totalInvations }, void 0, false, {
          fileName: "app/components/common/ResponseTypeStatus/index.tsx",
          lineNumber: 44,
          columnNumber: 36
        }, this),
        newInvations && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, color: theme.boxInformation.info.borderColor, children: `(+${newInvations} ${t("user:new")})` }, void 0, false, {
          fileName: "app/components/common/ResponseTypeStatus/index.tsx",
          lineNumber: 47,
          columnNumber: 34
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/common/ResponseTypeStatus/index.tsx",
        lineNumber: 40,
        columnNumber: 45
      }, this),
      state === ResponseState.CONTACT_SENT && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, color: theme.boxInformation.info.borderColor, children: t("user:contacts_sent") }, void 0, false, {
        fileName: "app/components/common/ResponseTypeStatus/index.tsx",
        lineNumber: 51,
        columnNumber: 54
      }, this),
      (state === ResponseState.APPROVED || state === ResponseState.APPROVED_AND_VIEWED) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, color: theme.boxInformation.success.borderColor, children: t("user:approved") }, void 0, false, {
        fileName: "app/components/common/ResponseTypeStatus/index.tsx",
        lineNumber: 54,
        columnNumber: 99
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/ResponseTypeStatus/index.tsx",
      lineNumber: 35,
      columnNumber: 35
    }, this),
    type === "REQUEST" && state === ResponseState.APPROVED && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.statusApproved }, void 0, false, {
        fileName: "app/components/common/ResponseTypeStatus/index.tsx",
        lineNumber: 59,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, color: theme.boxInformation.success.borderColor, children: t("user:contacts_sent") }, void 0, false, {
        fileName: "app/components/common/ResponseTypeStatus/index.tsx",
        lineNumber: 60,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, color: theme.boxInformation.success.borderColor, children: approvedRequest }, void 0, false, {
        fileName: "app/components/common/ResponseTypeStatus/index.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this),
      approvedRequest && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, color: theme.boxInformation.warning.borderColor, children: approvedRequest }, void 0, false, {
        fileName: "app/components/common/ResponseTypeStatus/index.tsx",
        lineNumber: 66,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/ResponseTypeStatus/index.tsx",
      lineNumber: 58,
      columnNumber: 68
    }, this),
    type === "REQUEST" && state === ResponseState.NEW && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.statusExpectation }, void 0, false, {
        fileName: "app/components/common/ResponseTypeStatus/index.tsx",
        lineNumber: 72,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, color: theme.boxInformation.warning.borderColor, children: t("user:request") }, void 0, false, {
        fileName: "app/components/common/ResponseTypeStatus/index.tsx",
        lineNumber: 73,
        columnNumber: 13
      }, this),
      totalRequest && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, color: theme.boxInformation.warning.borderColor, children: totalRequest }, void 0, false, {
        fileName: "app/components/common/ResponseTypeStatus/index.tsx",
        lineNumber: 76,
        columnNumber: 30
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/ResponseTypeStatus/index.tsx",
      lineNumber: 71,
      columnNumber: 63
    }, this),
    type === "REQUEST" && state === ResponseState.VIEWED && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.statusExpectation }, void 0, false, {
        fileName: "app/components/common/ResponseTypeStatus/index.tsx",
        lineNumber: 81,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, color: theme.boxInformation.warning.borderColor, children: t("user:request_viewed") }, void 0, false, {
        fileName: "app/components/common/ResponseTypeStatus/index.tsx",
        lineNumber: 82,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/ResponseTypeStatus/index.tsx",
      lineNumber: 80,
      columnNumber: 66
    }, this),
    type === "REQUEST" && state === ResponseState.CONTACT_SENT && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.statusExpectation }, void 0, false, {
        fileName: "app/components/common/ResponseTypeStatus/index.tsx",
        lineNumber: 87,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, color: theme.boxInformation.warning.borderColor, children: t("user:request") }, void 0, false, {
        fileName: "app/components/common/ResponseTypeStatus/index.tsx",
        lineNumber: 88,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/ResponseTypeStatus/index.tsx",
      lineNumber: 86,
      columnNumber: 72
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/ResponseTypeStatus/index.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/ResponseTypeStatus/index.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
var ResponseTypeStatus_default = ResponseTypeStatus;

export {
  ResponseType,
  ResponseTypeStatus_default
};
//# sourceMappingURL=/build/_shared/chunk-7N42DDVR.js.map
