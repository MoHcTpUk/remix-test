import {
  styled_components_browser_esm_default
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6O7TW4X6.js";
import {
  __toESM
} from "/build/_shared/chunk-RFITDC3A.js";

// app/components/ui/Card/MediaBox/styles.ts
var Wrapper = styled_components_browser_esm_default.div`
  display: ${({ variant }) => variant === "mobile" ? "flex" : "none"};
  flex-direction: ${({ variant }) => variant === "mobile" && "column"};
  width: ${({ variant }) => variant === "mobile" && "100%"};

  @media (min-width: 1280px) {
    display: ${({ variant }) => variant === "mobile" ? "none" : "flex"};
    flex-direction: ${({ variant }) => variant === "desktop" && "column"};
    width: ${({ variant }) => variant === "desktop" && "100%"};
  }
`;

// app/components/ui/Card/MediaBox/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function MediaBox({
  children,
  variant
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wrapper, { variant, children }, void 0, false, {
    fileName: "app/components/ui/Card/MediaBox/index.tsx",
    lineNumber: 11,
    columnNumber: 10
  }, this);
}

export {
  MediaBox
};
