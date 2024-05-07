import {
  FONT_SIZES_DESC,
  LINE_HEIGHTS_DESC,
  styled_components_browser_esm_default
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6O7TW4X6.js";
import {
  __toESM
} from "/build/_shared/chunk-RFITDC3A.js";

// app/types/enums/entityVariantEnum.ts
var EntityVariantEnum = {
  resume: "resume",
  vacancy: "vacancy",
  company: "company"
};

// app/types/enums/pageVariantEnum.ts
var PageVariantEnum = {
  user: "user",
  search: "search",
  response: "response"
};

// app/types/enums/responseCardVariantEnum.ts
var ResponseCardVariantEnum = {
  main: "main",
  inner: "inner",
  heading: "heading"
};

// app/types/enums/sizeCardVariantEnum.ts
var SizeCardVariantEnum = {
  full: "full",
  part: "part"
};

// app/components/ui/Card/BoxHeading/styles.ts
var Wrapper = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: flex-start;
  padding-bottom: ${({ pageVariant, variantResponseCard }) => (pageVariant !== PageVariantEnum.response || variantResponseCard === ResponseCardVariantEnum.main) && "16px"};
  border-bottom: ${({ theme, variant, sizeVariant }) => {
  if (sizeVariant === SizeCardVariantEnum.full)
    return `1px solid ${theme.user.borderColor}`;
  return "none";
}};
  width: 100%;
  img {
    border-radius: 50%;
    width: 64px;
    height: 64px;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    img {
      width: ${({ className, sizeVariant }) => sizeVariant === SizeCardVariantEnum.full && "104px"};
      height: ${({ className, sizeVariant }) => sizeVariant === SizeCardVariantEnum.full && "104px"};
    }
  }
`;

// app/components/ui/Card/BoxHeading/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function BoxHeading({
  children,
  variant,
  pageVariant,
  className,
  sizeVariant,
  variantResponseCard
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wrapper, { variant, className, pageVariant, sizeVariant, variantResponseCard, children }, void 0, false, {
    fileName: "app/components/ui/Card/BoxHeading/index.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}

// app/components/ui/Card/HeadingInformation/styles.ts
var Wrapper2 = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
  overflow-x: ${({ variant }) => variant === EntityVariantEnum.company && "hidden"};

  @media (min-width: 768px) {
    gap: 8px;
    .title {
      font-size: ${FONT_SIZES_DESC.textHeading3};
      line-height: ${LINE_HEIGHTS_DESC.textHeading3};
    }
  }
`;

// app/components/ui/Card/HeadingInformation/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function HeadingInformation({
  children,
  variant,
  variantResponseCard
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Wrapper2, { variant, variantResponseCard, children }, void 0, false, {
    fileName: "app/components/ui/Card/HeadingInformation/index.tsx",
    lineNumber: 15,
    columnNumber: 10
  }, this);
}

// app/components/ui/DataBox/styles.ts
var Wrapper3 = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: ${({ variant, padding, variantSize }) => {
  if (padding)
    return padding;
  if (variantSize === SizeCardVariantEnum.full)
    return "4px 0 12px";
  if (variant === EntityVariantEnum.company)
    return "0";
  if (variant === EntityVariantEnum.vacancy || EntityVariantEnum.resume)
    return "16px 0";
  return "16px 0 12px";
}};
  border-bottom: ${({ theme, borderBottom }) => borderBottom && `1px solid ${theme.user.borderColor}`};
  border-top: ${({ theme, borderTop }) => borderTop && `1px solid ${theme.user.borderColor}`};
  @media (min-width: 768px) {
    gap: 32px;
  }
`;

// app/components/ui/DataBox/index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function DataBox({
  children,
  variant,
  borderBottom,
  borderTop,
  padding,
  pageVariant,
  variantSize,
  style
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Wrapper3, { borderBottom, borderTop, variant, padding, pageVariant, variantSize, style, children }, void 0, false, {
    fileName: "app/components/ui/DataBox/index.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}

export {
  SizeCardVariantEnum,
  EntityVariantEnum,
  PageVariantEnum,
  ResponseCardVariantEnum,
  BoxHeading,
  HeadingInformation,
  DataBox
};
