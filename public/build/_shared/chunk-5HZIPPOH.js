import {
  Text,
  TextVariantEnum,
  styled_components_browser_esm_default
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
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

// app/components/entities/DataFIeld/index.tsx
init_esm();
var import_react2 = __toESM(require_react());

// app/components/entities/DataFIeld/styles.ts
var FieldWrapper = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;
var BoxData = styled_components_browser_esm_default.div`
  padding: 11px 16px 9px;
  border-radius: 80px;
  display: flex;
  align-items: center;
  min-height: 40px;
  height: fit-content;
  border: 1px solid ${({ theme }) => theme.user.borderColor};

  @media (min-width: 768px) {
    min-height: 44px;
    padding: 10px 16px 8px;
  }
`;

// app/components/entities/DataFIeld/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var DataField = (0, import_react2.memo)(({
  label,
  variant = "default",
  data,
  children,
  color
}) => {
  const boxDataRef = (0, import_react2.useRef)(null);
  const location = useLocation();
  (0, import_react2.useEffect)(() => {
    const {
      current
    } = boxDataRef;
    if (current) {
      if (current.scrollHeight > 44) {
        current.style.borderRadius = `8px`;
      } else {
        current.style.borderRadius = `80px`;
      }
    }
  }, [location]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldWrapper, { children: [
    label && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: label }, void 0, false, {
      fileName: "app/components/entities/DataFIeld/index.tsx",
      lineNumber: 35,
      columnNumber: 19
    }, this),
    variant === "default" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxData, { ref: boxDataRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, color, children: data || "" }, void 0, false, {
      fileName: "app/components/entities/DataFIeld/index.tsx",
      lineNumber: 37,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/entities/DataFIeld/index.tsx",
      lineNumber: 36,
      columnNumber: 34
    }, this) : children
  ] }, void 0, true, {
    fileName: "app/components/entities/DataFIeld/index.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
});

export {
  DataField
};
