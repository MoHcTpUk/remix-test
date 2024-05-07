import {
  Box,
  Stroke_default,
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

// app/components/common/Checkbox/index.tsx
var import_react = __toESM(require_react());

// app/components/common/Checkbox/styles.ts
var CheckboxBtnWrapper = styled_components_browser_esm_default.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  height: 20px;
  span {
    font-size: ${TextVariantEnum.textBody2medium};
    @media (min-width: 768px) {
      font-size: ${TextVariantEnum.textBody1medium};
    }
  }
  & > span {
    margin-bottom: -4px;
  }
`;
var ContainerCheckbox = styled_components_browser_esm_default.div`
  position: relative;
  width: 20px;
  height: 20px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover input ~ span {
    background-color: transparent;
    border: 1px solid
      ${({ theme, disabled }) => disabled ? theme.defaultTextColor : theme.auth.radioButtonColor};
  }

  & input:checked ~ span {
    background-color: ${({ theme, disabled }) => disabled ? theme.defaultTextColor : theme.auth.radioButtonColor};
    & svg path {
      fill: #fff;
    }
  }

  input:checked ~ span:after {
    display: block;
  }
`;
var Checkmark = styled_components_browser_esm_default.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: 1px solid
    ${({ theme, disabled }) => disabled ? theme.defaultTextColor : theme.auth.radioButtonColor};
  border-radius: 50%;
  transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);

  & svg {
    position: absolute;
    right: 3.5px;
    top: 4.25px;
    & path {
      fill: none;
    }
  }
`;
var CheckboxBtn = styled_components_browser_esm_default.input`
  accent-color: ${({ theme, disabled }) => disabled ? theme.defaultTextColor : theme.auth.radioButtonColor};
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;
var BoxErrors = styled_components_browser_esm_default.div`
  position: absolute;
  top: ${({ isText }) => isText && "16px"};
  left: ${({ isText }) => isText && "26px"};
  /* margin-left: 16px;
  margin: ${({ isText }) => isText && "4px 0"}; */
`;

// app/components/common/Checkbox/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function CheckBox({
  checked,
  label,
  disabled,
  id,
  name,
  errorText,
  onChange,
  value,
  style
}) {
  const {
    theme
  } = useApp();
  const checkboxRef = (0, import_react.useRef)(null);
  const [checkedState, setCheckedState] = (0, import_react.useState)(checked);
  (0, import_react.useEffect)(() => {
    setCheckedState(checked);
  }, [checked]);
  const handleChange = (e) => {
    const isChecked = e.target.checked;
    setCheckedState(isChecked);
    if (onChange) {
      onChange(isChecked);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { style, width: "100%", flexDirection: "column", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxBtnWrapper, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContainerCheckbox, { disabled, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          CheckboxBtn,
          {
            value: value === "true" || value === "false" ? checkedState?.toString() : value || "false",
            disabled,
            type: "checkbox",
            id,
            name,
            ref: checkboxRef,
            checked: checkedState,
            onChange: handleChange
          },
          void 0,
          false,
          {
            fileName: "app/components/common/Checkbox/index.tsx",
            lineNumber: 49,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkmark, { disabled, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stroke_default, {}, void 0, false, {
          fileName: "app/components/common/Checkbox/index.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/common/Checkbox/index.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/common/Checkbox/index.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: label }, void 0, false, {
        fileName: "app/components/common/Checkbox/index.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/Checkbox/index.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    Boolean(errorText) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxErrors, { isText: Boolean(errorText), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textSmall, color: theme.errorTextColor, children: errorText }, void 0, false, {
      fileName: "app/components/common/Checkbox/index.tsx",
      lineNumber: 58,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/common/Checkbox/index.tsx",
      lineNumber: 57,
      columnNumber: 30
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Checkbox/index.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}

export {
  CheckBox
};
//# sourceMappingURL=/build/_shared/chunk-HWT5QEPJ.js.map
