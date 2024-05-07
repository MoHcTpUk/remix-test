import {
  Close_default,
  ModalCloseButton
} from "/build/_shared/chunk-4SQREHPC.js";
import {
  Ae,
  Box,
  Icon,
  Text,
  TextVariantEnum,
  styled_components_browser_esm_default,
  useApp
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6O7TW4X6.js";
import {
  __toESM
} from "/build/_shared/chunk-RFITDC3A.js";

// app/types/enums/boxInformationEnum.ts
var BoxInformationEnum = {
  info: "attentionInfo",
  error: "attentionError",
  warning: "attention",
  success: "attentionSuccess"
};

// app/components/common/BoxInformation/styles.ts
var Wrapper = styled_components_browser_esm_default.div`
  display: flex;
  /* width: 100%; */
  width: ${({ type }) => type === "popup" ? "343px" : "100%"};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: space-between;
  border-radius: 8px;
  padding: 16px;
  height: fit-content;
  box-shadow: ${({ theme, noShadow }) => !noShadow && theme.\u0441ards.shadow};
  ${({ variant = BoxInformationEnum.info }) => {
  switch (variant) {
    case BoxInformationEnum.success:
      return Ae`
          background-color: ${({ theme }) => theme.boxInformation.success.backgroundColor};
        `;
    case BoxInformationEnum.error:
      return Ae`
          background-color: ${({ theme }) => theme.boxInformation.error.backgroundColor};
        `;
    case BoxInformationEnum.warning:
      return Ae`
          background-color: ${({ theme }) => theme.boxInformation.warning.backgroundColor};
        `;
    default:
      return Ae`
          background-color: ${({ theme }) => theme.boxInformation.info.backgroundColor};
        `;
  }
}}
  @media (min-width: 768px) {
    width: ${({ type }) => type === "popup" ? "606px" : "100%"};
    border-radius: 12px;
    padding: 24px;
  }
  @media (min-width: 1280px) {
    width: ${({ type }) => type === "popup" ? "690px" : "100%"};
    position: relative;
  }
`;
var ContentWrapper = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: flex-start;
  @media (min-width: 768px) {
    gap: 12px;
  }
`;
var MessageWrapper = styled_components_browser_esm_default.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  gap: 8px;
  margin-top: 5px;
  @media (min-width: 768px) {
    margin-top: 2px;
  }
`;
var ButtonWrapper = styled_components_browser_esm_default.div`
  display: flex;
  margin-top: 6px;
`;
var List = styled_components_browser_esm_default.ul`
  padding-left: 8px;
  @media (min-width: 768px) {
    padding-left: 10px;
  }
`;
var ListItem = styled_components_browser_esm_default.li`
  list-style: none;
  &::before {
    content: '·';
    font-size: 36px;
    vertical-align: middle;
    padding-right: 10px;
  }
`;

// app/components/common/BoxInformation/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function BoxInformation({
  variant,
  button,
  title,
  information,
  flexDirection = "row",
  type,
  noShadow,
  onClose
}) {
  const {
    theme
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wrapper, { variant, type, noShadow, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContentWrapper, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: variant }, void 0, false, {
        fileName: "app/components/common/BoxInformation/index.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/common/BoxInformation/index.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MessageWrapper, { flexDirection, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", gap: "8px", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: title }, void 0, false, {
            fileName: "app/components/common/BoxInformation/index.tsx",
            lineNumber: 42,
            columnNumber: 13
          }, this),
          information && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: information }, void 0, false, {
            fileName: "app/components/common/BoxInformation/index.tsx",
            lineNumber: 43,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/common/BoxInformation/index.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this),
        button && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonWrapper, { children: button() }, void 0, false, {
          fileName: "app/components/common/BoxInformation/index.tsx",
          lineNumber: 45,
          columnNumber: 22
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/common/BoxInformation/index.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/BoxInformation/index.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    onClose && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalCloseButton, { style: {
      position: "absolute",
      top: "10px"
    }, onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Close_default, { color: theme.modal.svgColor }, void 0, false, {
      fileName: "app/components/common/BoxInformation/index.tsx",
      lineNumber: 52,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/common/BoxInformation/index.tsx",
      lineNumber: 48,
      columnNumber: 19
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/BoxInformation/index.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
var BoxInformation_default = BoxInformation;

export {
  BoxInformationEnum,
  List,
  ListItem,
  BoxInformation_default
};
