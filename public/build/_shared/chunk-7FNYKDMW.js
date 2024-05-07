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
  VacancyPartCardInfo
} from "/build/_shared/chunk-IYT3SP4K.js";
import {
  VacancyPartCardHeading
} from "/build/_shared/chunk-P5TLLZSL.js";
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

// app/components/entities/cardWidgets/VacancyPartCard/index.tsx
init_esm();
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var VacancyPartCardWidget = (0, import_react2.memo)(({
  vacancy,
  selectedVacancy,
  variant,
  type,
  state,
  responseId,
  responseAction
}) => {
  const {
    theme
  } = useApp();
  const location = useLocation();
  const widthScreen = useScreenWidth();
  const boxHeading = (vacancy2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", width: "100%", children: [
    variant === "response" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResponseTypeStatus_default, { state, type }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/VacancyPartCard/index.tsx",
      lineNumber: 41,
      columnNumber: 36
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VacancyPartCardHeading, { vacancy: vacancy2, variant }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/VacancyPartCard/index.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VacancyPartCardInfo, { vacancy: vacancy2, variant }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/VacancyPartCard/index.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/cardWidgets/VacancyPartCard/index.tsx",
    lineNumber: 40,
    columnNumber: 44
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { width: "100%", style: {
    cursor: "pointer",
    borderRadius: "12px",
    position: "relative",
    transition: "all 0.2s cubic-bezier(0.2, 0, 0, 1)",
    border: widthScreen >= 1280 && vacancy.id === selectedVacancy ? `2px solid ${theme.modal.borderCardsColor}` : ""
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxCard, { variant: VariantCardEnum.userCard, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MediaBox, { variant: "mobile", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: responseId || vacancy?.id || "#", style: {
      paddingTop: variant === PageVariantEnum.response ? "62px" : ""
    }, children: boxHeading(vacancy) }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/VacancyPartCard/index.tsx",
      lineNumber: 54,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/VacancyPartCard/index.tsx",
      lineNumber: 53,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MediaBox, { variant: "desktop", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: variant === "search" ? `/search/vacancy${updateSearchString(location.search, vacancy?.id)}` : `${vacancy?.id || ""}?responseId=${responseId || ""}`, style: {
      paddingTop: variant === PageVariantEnum.response ? "62px" : ""
    }, preventScrollReset: true, children: boxHeading(vacancy) }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/VacancyPartCard/index.tsx",
      lineNumber: 62,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/VacancyPartCard/index.tsx",
      lineNumber: 61,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxControlContainer, { variant, stateResponse: state, typeResponse: type, typeEntity: EntityVariantEnum.vacancy, id: vacancy?.id, responseId, typeCard: SizeCardVariantEnum.part, responseAction }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/VacancyPartCard/index.tsx",
      lineNumber: 69,
      columnNumber: 11
    }, this)
  ] }, vacancy?.id, true, {
    fileName: "app/components/entities/cardWidgets/VacancyPartCard/index.tsx",
    lineNumber: 52,
    columnNumber: 9
  }, this) }, vacancy?.id, false, {
    fileName: "app/components/entities/cardWidgets/VacancyPartCard/index.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
});

export {
  VacancyPartCardWidget
};
