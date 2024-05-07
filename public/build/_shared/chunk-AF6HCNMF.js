import {
  Button,
  ButtonColorEnum,
  ButtonPriorityEnum,
  ButtonSizeEnum
} from "/build/_shared/chunk-NPNOAFIQ.js";
import {
  Icon
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/common/Button/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ButtonComponent({
  className,
  type = "button",
  size = ButtonSizeEnum.S,
  color = ButtonColorEnum.blue,
  priority = ButtonPriorityEnum.primary,
  children,
  disabled,
  iconName,
  iconColor,
  iconSize,
  fullwidth,
  onlyIcon,
  isActive,
  ...other
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type, priority, className, size, color, disabled, iconName, fullwidth, onlyIcon, isActive, ...other, children: [
    iconName && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: iconName, color: iconColor, size: iconSize }, void 0, false, {
      fileName: "app/components/common/Button/index.tsx",
      lineNumber: 38,
      columnNumber: 20
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/common/Button/index.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
var Button_default = ButtonComponent;

export {
  Button_default
};
//# sourceMappingURL=/build/_shared/chunk-AF6HCNMF.js.map
