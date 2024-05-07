import {
  motion
} from "/build/_shared/chunk-NC5IH6SX.js";
import {
  styled_components_browser_esm_default
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6O7TW4X6.js";
import {
  __toESM
} from "/build/_shared/chunk-RFITDC3A.js";

// app/components/ui/Card/BoxSelectedCard/styles.ts
var Wrapper = styled_components_browser_esm_default.div`
  display: none;
  border-radius: 8px;

  @media (min-width: 768px) {
    border-radius: 12px;
  }
  @media (min-width: 1280px) {
    display: flex;
    display: -webkit-flex;
    top: 0;
    box-shadow: ${({ theme }) => theme.\u0441ards.shadow};
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    position: sticky;
    overflow-y: auto;
    height: auto;
    max-height: 100vh;
    -webkit-overflow-scrolling: touch;
  }
`;

// app/components/ui/Card/BoxSelectedCard/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function BoxSelectedCard({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wrapper, { as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, children }, void 0, false, {
    fileName: "app/components/ui/Card/BoxSelectedCard/index.tsx",
    lineNumber: 10,
    columnNumber: 10
  }, this);
}

export {
  BoxSelectedCard
};
