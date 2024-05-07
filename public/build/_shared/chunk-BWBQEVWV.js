import {
  MediaBox
} from "/build/_shared/chunk-4ELEE4BM.js";
import {
  ResponseTypeStatus_default
} from "/build/_shared/chunk-KNWWVEW6.js";
import {
  BoxControlContainer
} from "/build/_shared/chunk-6Q4I67JY.js";
import {
  ResumePartCardInfo
} from "/build/_shared/chunk-P4RFN3QO.js";
import {
  ResumePartCardHeading
} from "/build/_shared/chunk-4O6GBBTS.js";
import {
  EntityVariantEnum,
  PageVariantEnum,
  SizeCardVariantEnum
} from "/build/_shared/chunk-SWZFRHVX.js";
import {
  BoxCard,
  VariantCardEnum
} from "/build/_shared/chunk-6J6FMBZW.js";
import {
  Box,
  updateSearchString,
  useApp,
  useScreenWidth
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  Link,
  init_esm,
  useLocation
} from "/build/_shared/chunk-JX76WC46.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6O7TW4X6.js";
import {
  __toESM
} from "/build/_shared/chunk-RFITDC3A.js";

// app/components/entities/cardWidgets/ResumePartCard/index.tsx
init_esm();
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ResumePartCardWidget = (0, import_react2.memo)(({
  resume,
  state,
  type,
  selectedResume,
  variant,
  responseId,
  responseAction,
  handleRequest
}) => {
  const {
    theme
  } = useApp();
  const location = useLocation();
  const widthScreen = useScreenWidth();
  const boxHeading = (resume2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", width: "100%", children: [
    variant === "response" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResponseTypeStatus_default, { state, type }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/ResumePartCard/index.tsx",
      lineNumber: 43,
      columnNumber: 36
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResumePartCardHeading, { resume: resume2, variant }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/ResumePartCard/index.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResumePartCardInfo, { resume: resume2, variant }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/ResumePartCard/index.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/cardWidgets/ResumePartCard/index.tsx",
    lineNumber: 42,
    columnNumber: 43
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { width: "100%", style: {
    cursor: "pointer",
    position: "relative",
    borderRadius: "12px",
    transition: "all 0.2s cubic-bezier(0.2, 0, 0, 1)",
    border: widthScreen >= 1280 && resume?.id === selectedResume ? `2px solid ${theme.modal.borderCardsColor}` : ""
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxCard, { variant: VariantCardEnum.userCard, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MediaBox, { variant: "mobile", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: responseId || resume?.id || "#", style: {
      paddingTop: variant === PageVariantEnum.response ? "62px" : ""
    }, children: boxHeading(resume) }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/ResumePartCard/index.tsx",
      lineNumber: 56,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/ResumePartCard/index.tsx",
      lineNumber: 55,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MediaBox, { variant: "desktop", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: variant === "search" ? `/search/resume${updateSearchString(location.search, resume?.id)}` : `${resume?.id || ""}?responseId=${responseId || ""}`, preventScrollReset: true, style: {
      paddingTop: variant === PageVariantEnum.response ? "62px" : ""
    }, children: boxHeading(resume) }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/ResumePartCard/index.tsx",
      lineNumber: 63,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/ResumePartCard/index.tsx",
      lineNumber: 62,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxControlContainer, { id: resume?.id, responseId, variant, stateResponse: state, typeResponse: type, typeEntity: EntityVariantEnum.resume, typeCard: SizeCardVariantEnum.part, style: {
      marginTop: variant === PageVariantEnum.response ? "-16px" : ""
    }, responseAction, handleRequest }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/ResumePartCard/index.tsx",
      lineNumber: 69,
      columnNumber: 11
    }, this)
  ] }, resume?.id, true, {
    fileName: "app/components/entities/cardWidgets/ResumePartCard/index.tsx",
    lineNumber: 54,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/entities/cardWidgets/ResumePartCard/index.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
});

export {
  ResumePartCardWidget
};
