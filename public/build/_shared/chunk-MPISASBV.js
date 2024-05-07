import {
  AttentionErrorIcon,
  BoxErrors,
  ButtonClear,
  InputComponent,
  PlaceHolder,
  TextareaComponent,
  TextareaIcon,
  Wrapper,
  WrapperInner
} from "/build/_shared/chunk-LQ4YPZYM.js";
import {
  Icon,
  IconEnum,
  Text,
  TextVariantEnum,
  useApp
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6O7TW4X6.js";
import {
  __toESM
} from "/build/_shared/chunk-RFITDC3A.js";

// app/components/common/Input/index.tsx
var import_react = __toESM(require_react());

// app/utils/masks.ts
var maskPhone = (e) => {
  let { value } = e.target;
  value = value.replace(/\D/g, "");
  value = value.length ? `+${value}` : "";
  e.target.value = value;
  return e;
};
var maskWebsite = (e) => {
  let { value } = e.target;
  value = value.replace(/https?:\/\//g, "");
  value = value.replace(/\s/g, "");
  value = value.length ? `https://${value}` : "";
  e.target.value = value;
  return e;
};
var maskTaxId = (value) => {
  let taxId = value?.toString();
  taxId = taxId?.replace(/^(\d{9})(\d)/, "$1-$2");
  return taxId;
};

// app/components/common/Input/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Input({
  id,
  value = "",
  placeholder,
  errorText,
  disabled,
  name,
  htmlType = "text",
  variant = "default",
  background,
  textHelper,
  onlyNumber,
  onChange
}) {
  const {
    theme
  } = useApp();
  const inputRef = (0, import_react.useRef)(null);
  const [password, setPassword] = (0, import_react.useState)("");
  const [hidePassword, setHidePassword] = (0, import_react.useState)(true);
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  (0, import_react.useEffect)(() => {
    const {
      current
    } = inputRef;
    if (current) {
      current.value = value;
      setTextAreaValue(current.value);
      if (current.scrollHeight > 45) {
        current.style.borderRadius = `8px`;
        current.style.height = `${current.scrollHeight}px`;
      } else {
        current.style.borderRadius = `80px`;
      }
      if (onChange) {
        onChange(value);
      }
    }
  }, [value]);
  function clearInput() {
    const {
      current
    } = inputRef;
    if (current) {
      current.value = "";
      const event = new Event("input", {
        bubbles: true
      });
      current.dispatchEvent(event);
      current.style.height = "auto";
      current.style.borderRadius = `80px`;
      setTextAreaValue("");
      if (onChange)
        onChange("");
    }
  }
  const handleKeyPress = (event) => {
    if (onlyNumber) {
      const keyCode = event.keyCode || event.which;
      const keyValue = String.fromCharCode(keyCode);
      if (!/^[0-9\b]+$/.test(keyValue)) {
        event.preventDefault();
      }
    }
  };
  const adjustTechAreaHeight = () => {
    const {
      current
    } = inputRef;
    if (current) {
      setTextAreaValue(current.value);
      current.style.height = "auto";
      current.style.height = `${current.scrollHeight}px`;
      if (current.scrollHeight > 44) {
        current.style.borderRadius = `8px`;
      } else {
        current.style.borderRadius = `80px`;
      }
    }
  };
  const [textAreaValue, setTextAreaValue] = (0, import_react.useState)("");
  const isEmptyTextArea = inputRef?.current?.value === "" || textAreaValue.length < 1;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wrapper, { disabled, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperInner, { variant, tabIndex: -1, children: [
      variant === "textarea" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextareaComponent, { rows: 1, ref: inputRef, background, placeholder: " ", id, name, onChange: adjustTechAreaHeight }, void 0, false, {
        fileName: "app/components/common/Input/index.tsx",
        lineNumber: 224,
        columnNumber: 35
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        InputComponent,
        {
          ref: inputRef,
          background,
          placeholder: " ",
          disabled,
          id,
          name,
          error: Boolean(errorText),
          onKeyPress: (e) => {
            if (onlyNumber)
              handleKeyPress(e);
          },
          type: variant === "password" && hidePassword ? "password" : "text",
          onChange: (e) => {
            if (variant === "password")
              setPassword(e.target.value);
            if (variant === "phone")
              handleChange(maskPhone(e));
            if (variant === "website")
              handleChange(maskWebsite(e));
            return handleChange(e);
          },
          autoComplete: variant === "password" ? "off" : "on"
        },
        void 0,
        false,
        {
          fileName: "app/components/common/Input/index.tsx",
          lineNumber: 224,
          columnNumber: 211
        },
        this
      ),
      placeholder && variant !== "search" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlaceHolder, { htmlFor: id, className: "placeholder", error: Boolean(errorText), variant, children: placeholder }, void 0, false, {
        fileName: "app/components/common/Input/index.tsx",
        lineNumber: 234,
        columnNumber: 49
      }, this),
      variant === "textarea" && (isEmptyTextArea ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextareaIcon, { className: "editPencil", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.editPencilLine }, void 0, false, {
        fileName: "app/components/common/Input/index.tsx",
        lineNumber: 238,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/common/Input/index.tsx",
        lineNumber: 237,
        columnNumber: 55
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonClear, { disabled, type: "button", onClick: () => clearInput(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.closeMd }, void 0, false, {
        fileName: "app/components/common/Input/index.tsx",
        lineNumber: 240,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/common/Input/index.tsx",
        lineNumber: 239,
        columnNumber: 31
      }, this)),
      variant !== "textarea" && errorText && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AttentionErrorIcon, { className: "editPencil", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.attentionError }, void 0, false, {
        fileName: "app/components/common/Input/index.tsx",
        lineNumber: 243,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/common/Input/index.tsx",
        lineNumber: 242,
        columnNumber: 49
      }, this),
      variant !== "textarea" && !errorText && (variant === "password" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonClear, { disabled, type: "button", onClick: () => setHidePassword(!hidePassword), children: hidePassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.view, color: theme.buttons.secondary.iconColor }, void 0, false, {
        fileName: "app/components/common/Input/index.tsx",
        lineNumber: 246,
        columnNumber: 31
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.viewHide }, void 0, false, {
        fileName: "app/components/common/Input/index.tsx",
        lineNumber: 246,
        columnNumber: 105
      }, this) }, void 0, false, {
        fileName: "app/components/common/Input/index.tsx",
        lineNumber: 245,
        columnNumber: 76
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonClear, { disabled, type: "button", onClick: () => clearInput(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.closeMd }, void 0, false, {
        fileName: "app/components/common/Input/index.tsx",
        lineNumber: 248,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/common/Input/index.tsx",
        lineNumber: 247,
        columnNumber: 30
      }, this))
    ] }, void 0, true, {
      fileName: "app/components/common/Input/index.tsx",
      lineNumber: 223,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxErrors, { isText: Boolean(errorText) || Boolean(textHelper), children: [
      Boolean(errorText) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textSmall, color: theme.errorTextColor, children: errorText }, void 0, false, {
        fileName: "app/components/common/Input/index.tsx",
        lineNumber: 252,
        columnNumber: 32
      }, this),
      !errorText && Boolean(textHelper) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textSmall, children: textHelper }, void 0, false, {
        fileName: "app/components/common/Input/index.tsx",
        lineNumber: 255,
        columnNumber: 47
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/Input/index.tsx",
      lineNumber: 251,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Input/index.tsx",
    lineNumber: 222,
    columnNumber: 10
  }, this);
}

export {
  maskTaxId,
  Input
};
