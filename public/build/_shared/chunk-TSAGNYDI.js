import {
  motion
} from "/build/_shared/chunk-47YKAHTX.js";
import {
  CloseMD_default,
  CloseSM_default,
  styled_components_browser_esm_default,
  useApp,
  useScreenWidth
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/common/Icons/Close.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function SvgClose({
  color
}) {
  const {
    theme
  } = useApp();
  const widthScreen = useScreenWidth();
  return widthScreen > 768 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CloseMD_default, { color: theme.modal.svgColor }, void 0, false, {
    fileName: "app/components/common/Icons/Close.tsx",
    lineNumber: 13,
    columnNumber: 30
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CloseSM_default, { color: theme.modal.svgColor }, void 0, false, {
    fileName: "app/components/common/Icons/Close.tsx",
    lineNumber: 13,
    columnNumber: 76
  }, this);
}
var Close_default = SvgClose;

// app/types/enums/variantModalEnum.ts
var VariantModalEnum = {
  filter: "filter",
  navbar: "navbar",
  uploading: "uploading",
  share: "share",
  request: "request",
  confirmEmail: "confirmEmail",
  confirmDelete: "confirmDelete",
  confirmDeleteCompany: "confirmDeleteCompany",
  providingContacts: "providingContacts",
  verification: "verification",
  companyCreated: "companyCreated"
};

// app/components/common/Modal/styles.ts
var Background = styled_components_browser_esm_default.div`
  z-index: 30;
  position: fixed;
  inset: ${({ className }) => className === "navBackground" ? "auto" : "0"};
`;
var ModalContainer = styled_components_browser_esm_default.div`
  position: fixed;
  display: flex;
  z-index: 999;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  margin: ${({ variant }) => (variant === VariantModalEnum.navbar || variant === VariantModalEnum.filter) && "16px 0"};
  overflow: ${({ variant }) => variant === VariantModalEnum.navbar || variant === VariantModalEnum.filter ? "scroll" : "hidden"};
  max-height: ${({ variant }) => (variant === VariantModalEnum.navbar || variant === VariantModalEnum.filter) && "calc(100% - 32px)"};
  padding: 0 16px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    justify-content: ${({ variant }) => variant === VariantModalEnum.navbar && "flex-end"};
    padding: ${({ variant }) => (variant === VariantModalEnum.navbar || variant === VariantModalEnum.filter) && "0 24px"};
    margin: ${({ variant }) => (variant === VariantModalEnum.navbar || variant === VariantModalEnum.filter) && "24px 0"};
  }

  @media (min-width: 1280px) {
    .homePageNavbar {
      top: 48px;
      right: 36px;
    }
  }
`;
var ModalCloseButton = styled_components_browser_esm_default.button`
  position: ${({ variant }) => variant === "withHeader" ? "fixed" : "absolute"};
  top: ${({ variant }) => variant === "withHeader" ? "none" : "16px"};
  right: 16px;
  padding: 8px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.modal.svgBackgroundColor};
  height: 40px;

  svg {
    color: ${({ theme }) => theme.modal.svgColor};
  }

  &:hover,
  :focus {
    background-color: ${({ theme }) => theme.modal.svgBackgroundHoverColor};
  }
  &:active {
    background-color: ${({ theme }) => theme.modal.svgBackgroundActiveColor};
  }

  @media (min-width: 768px) {
    padding: 10px;
    height: 44px;
  }
`;
var ModalInner = styled_components_browser_esm_default(motion.div)`
  position: absolute;
  z-index: 999;
  padding: ${({ variant }) => {
  if (variant === VariantModalEnum.navbar || variant === VariantModalEnum.filter || variant === VariantModalEnum.confirmEmail || variant === VariantModalEnum.confirmDelete || variant === VariantModalEnum.providingContacts)
    return "16px";
  if (variant === VariantModalEnum.verification || variant === VariantModalEnum.confirmDeleteCompany)
    return "32px 16px";
  if (variant === VariantModalEnum.companyCreated)
    return "0";
  return "64px 16px 32px";
}};
  background-color: ${({ theme }) => theme.modal.backgroundColor};
  width: ${({ variant }) => variant === VariantModalEnum.navbar || variant === VariantModalEnum.filter ? "calc(100% - 32px)" : "95vw"};
  max-width: ${({ variant }) => variant === VariantModalEnum.navbar || variant === VariantModalEnum.filter ? "100%" : "590px"};
  top: ${({ variant }) => (variant === VariantModalEnum.navbar || variant === VariantModalEnum.filter) && "0"};
  border-radius: 8px;
  min-height: ${({ variant }) => variant === VariantModalEnum.filter && "100%"};
  box-shadow: ${({ theme }) => theme.modal.shadow};

  @media (min-width: 768px) {
    padding: ${({ variant }) => {
  if (variant === VariantModalEnum.filter || variant === VariantModalEnum.navbar || variant === VariantModalEnum.confirmEmail || variant === VariantModalEnum.confirmDelete || variant === VariantModalEnum.providingContacts)
    return "24px";
  if (variant === VariantModalEnum.uploading)
    return "76px 24px 40px";
  if (variant === VariantModalEnum.companyCreated)
    return "0";
  if (variant === VariantModalEnum.verification || variant === VariantModalEnum.confirmDeleteCompany)
    return "40px 24px 64px";
  return "68px 46px 40px";
}};
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: ${({ variant }) => {
  if (variant === VariantModalEnum.filter || variant === VariantModalEnum.navbar)
    return "360px";
  if (variant === VariantModalEnum.confirmDelete || variant === VariantModalEnum.providingContacts)
    return "100%";
  return "fit-content";
}};
    right: ${({ variant }) => variant === VariantModalEnum.filter && "16px"};
    min-height: ${({ variant }) => variant === VariantModalEnum.navbar && "calc(100vh - 48px)"};
    width: ${({ variant }) => (variant === VariantModalEnum.confirmDelete || variant === VariantModalEnum.providingContacts || variant === VariantModalEnum.confirmDeleteCompany) && "506px"};
    border-radius: 12px;
  }

  @media (min-width: 1024px) {
    width: ${({ variant }) => (variant === VariantModalEnum.confirmDelete || variant === VariantModalEnum.providingContacts || variant === VariantModalEnum.confirmDeleteCompany) && "606px"};
    max-width: ${({ variant }) => (variant === VariantModalEnum.confirmDelete || variant === VariantModalEnum.providingContacts || variant === VariantModalEnum.confirmDeleteCompany) && "100%"};
  }

  @media (min-width: 1280px) {
    padding: ${({ variant }) => {
  if (variant === VariantModalEnum.request || variant === VariantModalEnum.uploading)
    return "76px 24px 40px";
  if (variant === VariantModalEnum.filter || variant === VariantModalEnum.navbar || variant === VariantModalEnum.confirmEmail || variant === VariantModalEnum.confirmDelete || variant === VariantModalEnum.providingContacts)
    return "24px";
  if (variant === VariantModalEnum.verification || variant === VariantModalEnum.confirmDeleteCompany)
    return "40px 24px 64px";
  if (variant === VariantModalEnum.companyCreated)
    return "0";
  return "76px 102px 48px";
}};
    max-width: ${({ variant }) => {
  if (variant === VariantModalEnum.request)
    return "968px";
  if (variant === VariantModalEnum.navbar)
    return "320px";
  if (variant === VariantModalEnum.confirmDelete)
    return "100%";
  if (variant === VariantModalEnum.providingContacts)
    return "100%";
  return "fit-content";
}};
    min-height: ${({ variant }) => variant === VariantModalEnum.navbar && "fit-content"};
    width: ${({ variant }) => (variant === VariantModalEnum.confirmDelete || variant === VariantModalEnum.providingContacts || variant === VariantModalEnum.confirmDeleteCompany) && "620px"};
  }
`;
var LogoWrapper = styled_components_browser_esm_default.div`
  cursor: pointer;
  position: relative;

  svg {
    max-width: 99px;
    height: 40px;
    transition: all 0.15s ease-in;
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.navbar.hoverColor};
    }
  }
`;
var UserBox = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  position: relative;
  align-items: center;
`;
var AvatarContainer = styled_components_browser_esm_default.div`
  width: 44px;
  height: 44px;

  img {
    border-radius: 50%;
    width: 44px;
    height: 44px;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    width: 56px;
    height: 56px;

    img {
      width: 56px;
      height: 56px;
    }
  }
`;
var ModalHeader = styled_components_browser_esm_default.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

export {
  Close_default,
  VariantModalEnum,
  Background,
  ModalContainer,
  ModalCloseButton,
  ModalInner,
  LogoWrapper,
  UserBox,
  AvatarContainer,
  ModalHeader
};
//# sourceMappingURL=/build/_shared/chunk-TSAGNYDI.js.map
