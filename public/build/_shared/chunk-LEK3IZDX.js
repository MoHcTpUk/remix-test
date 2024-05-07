import {
  styled_components_browser_esm_default
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6O7TW4X6.js";
import {
  __toESM
} from "/build/_shared/chunk-RFITDC3A.js";

// app/components/ui/Card/CardContainer/styles.ts
var Wrapper = styled_components_browser_esm_default.div`
  display: grid;
  grid-template-rows: 1fr;
  gap: 8px;

  & button {
    justify-self: ${({ withGrowingBtn }) => withGrowingBtn && "end"};
  }
`;

// app/components/ui/Card/CardContainer/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function CardContainer({
  children,
  as,
  id,
  initial,
  animate,
  exit,
  transition,
  style,
  withGrowingBtn
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wrapper, { as, id, initial, animate, exit, transition, style, withGrowingBtn, children }, void 0, false, {
    fileName: "app/components/ui/Card/CardContainer/index.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}

export {
  CardContainer
};
