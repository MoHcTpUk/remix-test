import {
  Button
} from "/build/_shared/chunk-GEH4KW55.js";
import {
  FONT_SIZES_DESC,
  FONT_SIZES_MOB,
  FONT_WEIGHTS_DESC,
  FONT_WEIGHTS_MOB,
  Icon,
  IconEnum,
  LINE_HEIGHTS_DESC,
  LINE_HEIGHTS_MOB,
  Text,
  TextVariantEnum,
  styled_components_browser_esm_default,
  useApp
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  init_esm,
  useNavigate
} from "/build/_shared/chunk-JX76WC46.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6O7TW4X6.js";
import {
  __toESM
} from "/build/_shared/chunk-RFITDC3A.js";

// app/types/enums/variantCardEnum.ts
var VariantCardEnum = {
  about: "about",
  sidebar: "sidebar",
  createEntity: "createEntity",
  materials: "materials",
  request: "request",
  userCard: "userCard",
  editCard: "editCard",
  alert: "alert"
};

// app/components/common/Card/index.tsx
init_esm();
var import_react2 = __toESM(require_react());

// app/components/common/Card/styles.ts
var Card = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  padding: ${({ variant }) => {
  if (variant === VariantCardEnum.about)
    return "24px 16px 16px";
  if (variant === VariantCardEnum.createEntity || variant === VariantCardEnum.alert)
    return "32px 16px";
  return "16px";
}};
  background-color: ${({ theme }) => theme.user.backgroundCardColor};
  border-radius: 8px;
  gap: 16px;
  width: 100%;
  height: ${({ variant }) => {
  if (variant === VariantCardEnum.sidebar)
    return "100%";
  if (variant === VariantCardEnum.createEntity)
    return "fit-content";
  return "auto";
}};
  box-shadow: ${({ theme }) => theme.\u0441ards.shadow};

  @media (min-width: 768px) {
    border-radius: 12px;
    padding: ${({ variant }) => {
  if (variant === VariantCardEnum.about)
    return "48px 24px 32px";
  if (variant === VariantCardEnum.createEntity)
    return "40px";
  if (variant === VariantCardEnum.alert)
    return "40px 24px 64px";
  return "24px";
}};
  }
  @media (min-width: 1280px) {
    max-width: ${({ variant }) => variant === VariantCardEnum.materials ? "996px" : "100%"};
    overflow: ${({ variant }) => variant === VariantCardEnum.editCard ? "visible" : "auto"};
    box-shadow: ${({ theme, variant }) => variant === VariantCardEnum.request ? "none" : theme.\u0441ards.shadow};
    margin-top: ${({ variant }) => variant === VariantCardEnum.request && "16px"};
    border-top: ${({ variant, theme }) => variant === VariantCardEnum.request && `1px solid ${theme.user.borderColor}`};
    padding: ${({ variant }) => {
  if (variant === VariantCardEnum.about)
    return "48px 24px 32px";
  if (variant === VariantCardEnum.createEntity)
    return "40px";
  if (variant === VariantCardEnum.request)
    return "24px 24px 0";
  if (variant === VariantCardEnum.alert)
    return "40px 24px 64px";
  return "24px";
}};
  }

  .borderLine {
    padding-top: 16px;
    border-top: 1px solid ${({ theme }) => theme.user.borderColor};
  }
`;
var BoxCardHeading = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  button {
    margin-left: 16px;
  }

  & > span {
    font-size: ${FONT_SIZES_MOB[TextVariantEnum.textHeading2]};
    font-weight: ${FONT_WEIGHTS_MOB[TextVariantEnum.textHeading2]};
    line-height: ${LINE_HEIGHTS_MOB[TextVariantEnum.textHeading2]};
    max-width: fit-content;
    margin-bottom: -4px;
  }

  @media (min-width: 768px) {
    button {
      margin-left: 24px;
    }
    & > span {
      font-size: ${FONT_SIZES_DESC[TextVariantEnum.textHeading3]};
      font-weight: ${FONT_WEIGHTS_DESC[TextVariantEnum.textHeading3]};
      line-height: ${LINE_HEIGHTS_DESC[TextVariantEnum.textHeading3]};
    }
  }
`;
var BoxControl = styled_components_browser_esm_default.div`
  padding-top: 16px;
  margin-top: 8px;
  border-top: 1px solid ${({ theme }) => theme.user.borderColor};
  display: flex;
  flex-direction: 'row';
  gap: 16px;

  @media (min-width: 769px) {
    padding-top: 24px;
  }

  @media (min-width: 1280px) {
    justify-content: flex-end;
    button {
      width: fit-content;
    }
  }
`;
var BoxCardContent = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  gap: ${({ variant }) => {
  if (variant === VariantCardEnum.userCard)
    return "16px";
  if (variant === VariantCardEnum.createEntity)
    return "24px";
  return "8px";
}};
  align-items: ${({ variant }) => variant === VariantCardEnum.createEntity ? "center" : "inherit"};
  text-align: ${({ variant }) => variant === VariantCardEnum.createEntity ? "center" : "start"};

  &:empty {
    display: none;
  }

  @media (min-width: 769px) {
    gap: ${({ variant }) => {
  if (variant === VariantCardEnum.sidebar)
    return "8px";
  if (variant === VariantCardEnum.createEntity)
    return "24px";
  return "16px";
}};
  }
`;

// app/components/common/Card/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var BoxCard = (0, import_react2.memo)(({
  title,
  state,
  setState,
  editCard,
  setEditCard,
  nameCard,
  withEditButton,
  withControl,
  children,
  step,
  maxStep,
  variant
}) => {
  const {
    theme,
    t
  } = useApp();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { title, variant, children: [
    title && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxCardHeading, { children: [
      title && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: title }, void 0, false, {
        fileName: "app/components/common/Card/index.tsx",
        lineNumber: 48,
        columnNumber: 23
      }, this),
      (withEditButton && state === "info" || withEditButton && state !== "create" && editCard !== nameCard) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { priority: "secondary", onClick: () => {
        if (setState)
          setState("edit");
        if (setEditCard && nameCard)
          setEditCard(nameCard);
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: [
        " ",
        t("common:edit")
      ] }, void 0, true, {
        fileName: "app/components/common/Card/index.tsx",
        lineNumber: 53,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/common/Card/index.tsx",
        lineNumber: 49,
        columnNumber: 119
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/Card/index.tsx",
      lineNumber: 47,
      columnNumber: 19
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxCardContent, { className: title && "borderLine", variant, children }, void 0, false, {
      fileName: "app/components/common/Card/index.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this),
    (withControl && state === "edit" || editCard && editCard === nameCard) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxControl, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: () => {
        if (setState)
          setState("info");
        if (setEditCard)
          setEditCard("all");
      }, fullwidth: true, priority: "secondary", className: "icon", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.arrowLeft, color: theme.user.iconColor, className: "goBackIcon" }, void 0, false, {
          fileName: "app/components/common/Card/index.tsx",
          lineNumber: 65,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, className: "goBackText", children: [
          " ",
          t("common:cancel")
        ] }, void 0, true, {
          fileName: "app/components/common/Card/index.tsx",
          lineNumber: 66,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/common/Card/index.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { priority: "primary", fullwidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: [
        " ",
        t("common:save")
      ] }, void 0, true, {
        fileName: "app/components/common/Card/index.tsx",
        lineNumber: 72,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/common/Card/index.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/Card/index.tsx",
      lineNumber: 60,
      columnNumber: 84
    }, this),
    state === "create" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxControl, { children: [
      step && step === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", onClick: goBack, className: "icon", priority: "secondary", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.arrowLeft, color: theme.user.iconColor, className: "goBackIcon" }, void 0, false, {
          fileName: "app/components/common/Card/index.tsx",
          lineNumber: 78,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, className: "goBackText", children: [
          " ",
          t("common:cancel")
        ] }, void 0, true, {
          fileName: "app/components/common/Card/index.tsx",
          lineNumber: 79,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/common/Card/index.tsx",
        lineNumber: 77,
        columnNumber: 36
      }, this),
      step && step > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: () => {
        if (setState)
          setState("info");
        if (setEditCard)
          setEditCard("all");
      }, className: "icon", priority: "secondary", name: "action", value: "previous", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.arrowLeft, color: theme.user.iconColor, className: "goBackIcon" }, void 0, false, {
          fileName: "app/components/common/Card/index.tsx",
          lineNumber: 89,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, className: "goBackText", children: [
          " ",
          t("common:back")
        ] }, void 0, true, {
          fileName: "app/components/common/Card/index.tsx",
          lineNumber: 90,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/common/Card/index.tsx",
        lineNumber: 85,
        columnNumber: 34
      }, this),
      step && maxStep && step < maxStep && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", priority: "primary", fullwidth: true, name: "action", value: "next", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: [
        " ",
        t("common:next")
      ] }, void 0, true, {
        fileName: "app/components/common/Card/index.tsx",
        lineNumber: 97,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/common/Card/index.tsx",
        lineNumber: 96,
        columnNumber: 51
      }, this),
      step && maxStep && step === maxStep && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", priority: "primary", fullwidth: true, name: "action", value: "complete", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: [
        " ",
        t("common:complete")
      ] }, void 0, true, {
        fileName: "app/components/common/Card/index.tsx",
        lineNumber: 101,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/common/Card/index.tsx",
        lineNumber: 100,
        columnNumber: 53
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/Card/index.tsx",
      lineNumber: 76,
      columnNumber: 32
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Card/index.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
});

export {
  VariantCardEnum,
  BoxControl,
  BoxCard
};
