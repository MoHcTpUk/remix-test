import {
  Logo_default,
  ModalBox
} from "/build/_shared/chunk-NSEFQYWN.js";
import {
  AvatarContainer,
  Background,
  Close_default,
  LogoWrapper,
  ModalCloseButton,
  ModalContainer,
  ModalHeader,
  ModalInner,
  UserBox,
  VariantModalEnum
} from "/build/_shared/chunk-4SQREHPC.js";
import {
  AnimatePresence,
  motion
} from "/build/_shared/chunk-NC5IH6SX.js";
import {
  Box,
  DEFAULT_USER_AVATAR,
  Text,
  TextVariantEnum,
  getImageUrl,
  routes_default,
  useApp,
  useScreenWidth,
  v1_default
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  Link,
  init_esm,
  useMatches
} from "/build/_shared/chunk-JX76WC46.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6O7TW4X6.js";
import {
  __toESM
} from "/build/_shared/chunk-RFITDC3A.js";

// app/components/common/Modal/index.tsx
init_esm();
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Modal({
  visibility,
  setVisibility,
  variant,
  children
}) {
  const {
    theme,
    userContext,
    t
  } = useApp();
  const modalId = v1_default();
  const widthScreen = useScreenWidth();
  const matches = useMatches();
  const indexMatches = matches.some((m) => m.id === "routes/index");
  (0, import_react2.useEffect)(() => {
    document.body.classList.toggle("has-modal", visibility);
    return () => {
      document.body.classList.toggle("has-modal", false);
    };
  }, [visibility]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatePresence, { children: visibility && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Background, { className: variant === VariantModalEnum.navbar && indexMatches && widthScreen > 1280 ? "navBackground" : "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 0.75
    }, exit: {
      opacity: 0
    }, transition: {
      duration: 0.15
    }, style: {
      position: "absolute",
      inset: 0,
      backgroundColor: "rgb(63 63 70)",
      zIndex: 998
    } }, void 0, false, {
      fileName: "app/components/common/Modal/index.tsx",
      lineNumber: 48,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/common/Modal/index.tsx",
      lineNumber: 47,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      ModalContainer,
      {
        role: "dialog",
        "aria-labelledby": modalId,
        "aria-modal": "true",
        variant,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalInner, { initial: {
            x: "50%",
            y: "-50%",
            opacity: 0,
            scale: 0
          }, animate: {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1
          }, exit: {
            x: "50%",
            y: "-50%",
            opacity: 0,
            transition: {
              ease: [0.3, 0, 0.8, 0.15],
              duration: 0.2
            },
            scale: 0
          }, transition: {
            ease: [0.05, 0.7, 0.1, 1],
            duration: 0.5
          }, variant, id: modalId, className: variant === VariantModalEnum.navbar && indexMatches && widthScreen > 1280 ? "homePageNavbar" : "", children: [
            variant === VariantModalEnum.navbar && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalHeader, { children: [
              userContext?.user?.isAuthenticated ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserBox, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AvatarContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: routes_default.user.root, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: userContext.user.avatar ? getImageUrl(userContext.user.avatar) : DEFAULT_USER_AVATAR, alt: "" }, void 0, false, {
                  fileName: "app/components/common/Modal/index.tsx",
                  lineNumber: 93,
                  columnNumber: 27
                }, this) }, void 0, false, {
                  fileName: "app/components/common/Modal/index.tsx",
                  lineNumber: 92,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/components/common/Modal/index.tsx",
                  lineNumber: 91,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, children: userContext.user.firstName }, void 0, false, {
                    fileName: "app/components/common/Modal/index.tsx",
                    lineNumber: 97,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, children: userContext.user.lastName }, void 0, false, {
                    fileName: "app/components/common/Modal/index.tsx",
                    lineNumber: 100,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/common/Modal/index.tsx",
                  lineNumber: 96,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/common/Modal/index.tsx",
                lineNumber: 90,
                columnNumber: 57
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: routes_default.root, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoWrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo_default, { color: theme.navbar.logoColor }, void 0, false, {
                fileName: "app/components/common/Modal/index.tsx",
                lineNumber: 106,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/components/common/Modal/index.tsx",
                lineNumber: 105,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/components/common/Modal/index.tsx",
                lineNumber: 104,
                columnNumber: 34
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalCloseButton, { type: "button", onClick: () => setVisibility(!visibility), variant: "withHeader", className: indexMatches && widthScreen > 1280 ? "hidden" : "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Close_default, { color: theme.modal.svgColor }, void 0, false, {
                fileName: "app/components/common/Modal/index.tsx",
                lineNumber: 110,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/components/common/Modal/index.tsx",
                lineNumber: 109,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/common/Modal/index.tsx",
              lineNumber: 89,
              columnNumber: 55
            }, this),
            variant === VariantModalEnum.filter && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserBox, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, children: t("common:search_filters") }, void 0, false, {
                fileName: "app/components/common/Modal/index.tsx",
                lineNumber: 115,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/components/common/Modal/index.tsx",
                lineNumber: 114,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalCloseButton, { type: "button", onClick: () => setVisibility(!visibility), variant: "withHeader", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Close_default, { color: theme.modal.svgColor }, void 0, false, {
                fileName: "app/components/common/Modal/index.tsx",
                lineNumber: 118,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/components/common/Modal/index.tsx",
                lineNumber: 117,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/common/Modal/index.tsx",
              lineNumber: 113,
              columnNumber: 55
            }, this),
            variant !== VariantModalEnum.navbar && variant !== VariantModalEnum.filter && variant !== VariantModalEnum.confirmDelete && variant !== VariantModalEnum.confirmDeleteCompany && variant !== VariantModalEnum.providingContacts && variant !== VariantModalEnum.uploading && variant !== VariantModalEnum.companyCreated && variant !== VariantModalEnum.verification && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalCloseButton, { type: "button", onClick: () => setVisibility(!visibility), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Close_default, { color: theme.modal.svgColor }, void 0, false, {
              fileName: "app/components/common/Modal/index.tsx",
              lineNumber: 122,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/common/Modal/index.tsx",
              lineNumber: 121,
              columnNumber: 377
            }, this),
            children
          ] }, void 0, true, {
            fileName: "app/components/common/Modal/index.tsx",
            lineNumber: 66,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalBox, { onClick: () => setVisibility(!visibility) }, void 0, false, {
            fileName: "app/components/common/Modal/index.tsx",
            lineNumber: 126,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/common/Modal/index.tsx",
        lineNumber: 63,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/common/Modal/index.tsx",
    lineNumber: 46,
    columnNumber: 22
  }, this) }, void 0, false, {
    fileName: "app/components/common/Modal/index.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}

export {
  Modal
};
