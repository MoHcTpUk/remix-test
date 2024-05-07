import {
  Text,
  TextVariantEnum,
  styled_components_browser_esm_default,
  useApp
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/common/Switcher/index.tsx
var import_react = __toESM(require_react());

// app/components/common/Switcher/styles.ts
var Wrapper = styled_components_browser_esm_default.div`
  /* width: max-content; */
  height: max-content;
`;
var Switch = styled_components_browser_esm_default.label`
  background: ${({ theme, variant, checked }) => (
  // eslint-disable-next-line no-nested-ternary
  variant === "lang" ? theme.switcher.backgroundDefault : checked && variant === "default" ? theme.switcher.backgroundChecked : theme.switcher.backgroundDefault
)};
  display: block;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.2, 0, 0, 1);
  width: 56px;
  height: 32px;

  &::before {
    content: attr(data-content);
    display: ${({ variant }) => variant === "default" ? "flex" : "none"};
    position: absolute;
    color: ${({ checked, theme }) => checked ? theme.switcher.textCheckedColor : theme.switcher.textDefaultColor};
    font-size: 9px;
    top: 11px;
    right: ${({ checked }) => !checked && "10px"};
    left: ${({ checked }) => checked && "10px"};
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    background: var(--white);
    border-radius: 50%;
    left: 4px;
    top: 4px;
    width: 24px;
    height: 24px;
    transition: left 0.15s ease-in;
    left: ${({ checked }) => checked && "28px"};
    background: ${({ checked, variant, theme }) => (
  // eslint-disable-next-line no-nested-ternary
  variant === "default" ? theme.switcher.backgroundTogglerColor : checked && variant === "lang" ? "url('/images/flags/English.png')" : "url('/images/flags/Thailand.png')"
)};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
var Checkbox = styled_components_browser_esm_default.input`
  display: none;
`;
var BoxLabel = styled_components_browser_esm_default.div`
  cursor: pointer;
`;
var SwitcherBox = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

// app/components/common/Switcher/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Switcher({
  checked,
  onChange,
  htmlLabel,
  label,
  disabled,
  name,
  value,
  variant = "default",
  checkedLabel,
  unCheckedLabel,
  control
}) {
  const {
    theme
  } = useApp();
  const custom = {
    onChange: (ev) => {
      if (onChange) {
        onChange(!ev.target.checked);
      } else {
        console.log(!ev.target.checked);
      }
    }
  };
  const [checkedState, setCheckedState] = (0, import_react.useState)(checked);
  const checkboxRef = (0, import_react.useRef)(null);
  const handleChange = (e) => {
    setCheckedState((prevChecked) => !prevChecked);
    if (checkboxRef.current) {
      const isChecked = checkboxRef.current.checked;
      if (onChange)
        onChange(isChecked);
    }
  };
  (0, import_react.useEffect)(() => {
    if (checked !== void 0) {
      setCheckedState(checked);
      if (checkboxRef.current) {
        checkboxRef.current.checked = checked;
      }
    }
  }, [checked]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wrapper, { children: [
    variant === "lang" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switch, { checked, htmlFor: htmlLabel, title: label, variant: "lang", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox, { disabled, id: htmlLabel, type: "checkbox", ...custom }, void 0, false, {
      fileName: "app/components/common/Switcher/index.tsx",
      lineNumber: 53,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/common/Switcher/index.tsx",
      lineNumber: 52,
      columnNumber: 30
    }, this),
    variant === "default" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SwitcherBox, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switch, { "data-content": checkedState ? "on" : "off", checked: checkedState, variant: "default", htmlFor: htmlLabel, title: label, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox, { value: value === "true" || value === "false" || !value ? checkedState?.toString() : value, disabled, type: "checkbox", id: htmlLabel, name, ref: checkboxRef, checked: control ? checkedState : void 0, defaultChecked: !checked ? checked : void 0, onChange: (e) => control ? console.log(e.target.value) : handleChange(e) }, void 0, false, {
        fileName: "app/components/common/Switcher/index.tsx",
        lineNumber: 57,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/common/Switcher/index.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxLabel, { style: {
        cursor: "pointer"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { color: checkedState ? theme.switcher.backgroundChecked : theme.switcher.textDefaultColor, variant: TextVariantEnum.textBody2, children: checkedState ? checkedLabel : unCheckedLabel }, void 0, false, {
        fileName: "app/components/common/Switcher/index.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/common/Switcher/index.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/Switcher/index.tsx",
      lineNumber: 55,
      columnNumber: 33
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Switcher/index.tsx",
    lineNumber: 51,
    columnNumber: 10
  }, this);
}

export {
  Switcher
};
//# sourceMappingURL=/build/_shared/chunk-TOIUBYEI.js.map
