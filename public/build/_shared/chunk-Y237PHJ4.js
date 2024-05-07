import {
  styled_components_browser_esm_default
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/ui/Card/BoxAvatar/styles.ts
var WrapperForSearch = styled_components_browser_esm_default.div`
  img {
    border-radius: 50%;
    width: 64px;
    height: 64px;
    object-fit: cover;

    @media (min-width: 768px) {
      min-width: 104px;
      min-height: 104px;
    }
  }
`;
var WrapperForUser = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  img {
    width: 96px;
    height: 96px;
    object-fit: cover;
  }
  button {
    align-self: center;
    width: 100%;
  }

  @media (min-width: 768px) {
    img {
      width: 136px;
      height: 136px;
    }
    button {
      width: fit-content;
    }
  }
  @media (min-width: 1024px) {
    gap: 24px;
  }
`;

// app/components/ui/Card/BoxAvatar/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function BoxAvatar({
  children,
  variant
}) {
  return variant === "user" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperForUser, { children }, void 0, false, {
    fileName: "app/components/ui/Card/BoxAvatar/index.tsx",
    lineNumber: 11,
    columnNumber: 31
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperForSearch, { children }, void 0, false, {
    fileName: "app/components/ui/Card/BoxAvatar/index.tsx",
    lineNumber: 11,
    columnNumber: 77
  }, this);
}

export {
  BoxAvatar
};
//# sourceMappingURL=/build/_shared/chunk-Y237PHJ4.js.map
