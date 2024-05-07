import {
  styled_components_browser_esm_default
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6O7TW4X6.js";
import {
  __toESM
} from "/build/_shared/chunk-RFITDC3A.js";

// app/components/ui/Field/styles.ts
var Wrapper = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  .shortDescription {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
  }
`;

// app/components/ui/Field/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Field({
  children,
  variant,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wrapper, { variant, children }, void 0, false, {
    fileName: "app/components/ui/Field/index.tsx",
    lineNumber: 14,
    columnNumber: 10
  }, this);
}

export {
  Field
};
