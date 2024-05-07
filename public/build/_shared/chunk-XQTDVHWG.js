import {
  Box,
  FONT_SIZES_DESC,
  FONT_WEIGHTS_DESC,
  Icon,
  LINE_HEIGHTS_DESC,
  Text,
  TextVariantEnum,
  styled_components_browser_esm_default
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6O7TW4X6.js";
import {
  __toESM
} from "/build/_shared/chunk-RFITDC3A.js";

// app/components/entities/EmptyState/styles.ts
var Wrapper = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  height: fit-content;
  gap: 24px;
  padding: 32px 16px;
  background-color: ${({ theme }) => theme.user.backgroundCardColor};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.\u0441ards.shadow};

  @media (min-width: 768px) {
    max-width: 506px;
    border-radius: 12px;
    padding: 40px 24px 64px;
  }
  @media (min-width: 1024px) {
    max-width: 606px;
  }

  @media (min-width: 1280px) {
    box-shadow: ${({ theme }) => theme.\u0441ards.shadow};
    padding: 40px 24px 64px;
    max-width: 690px;
  }
`;
var ContentWrapper = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  align-items: center;

  @media (min-width: 768px) {
    gap: 24px;
  }
`;
var HeaderWrapper = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  text-align: center;

  & svg {
    width: 48px;
    height: 48px;
  }

  @media (min-width: 768px) {
    & svg {
      width: 56px;
      height: 56px;
    }

    .title {
      font-size: ${FONT_SIZES_DESC[TextVariantEnum.textHeading3]};
      font-weight: ${FONT_WEIGHTS_DESC[TextVariantEnum.textHeading3]};
      line-height: ${LINE_HEIGHTS_DESC[TextVariantEnum.textHeading3]};
    }
  }
`;

// app/components/entities/EmptyState/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function EmptyState({
  iconName,
  title,
  text,
  boxInfo,
  buttonControl
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wrapper, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContentWrapper, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderWrapper, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: iconName }, void 0, false, {
          fileName: "app/components/entities/EmptyState/index.tsx",
          lineNumber: 24,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { display: "flex", flexDirection: "column", gap: "8px", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, className: "title", children: title }, void 0, false, {
            fileName: "app/components/entities/EmptyState/index.tsx",
            lineNumber: 26,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: text }, void 0, false, {
            fileName: "app/components/entities/EmptyState/index.tsx",
            lineNumber: 29,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/entities/EmptyState/index.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/entities/EmptyState/index.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      boxInfo
    ] }, void 0, true, {
      fileName: "app/components/entities/EmptyState/index.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    buttonControl
  ] }, void 0, true, {
    fileName: "app/components/entities/EmptyState/index.tsx",
    lineNumber: 21,
    columnNumber: 10
  }, this);
}
var EmptyState_default = EmptyState;

export {
  EmptyState_default
};
