import {
  DEFAULT_COMPANY_LOGO,
  FONT_SIZES_DESC,
  Text,
  TextVariantEnum,
  getImageUrl,
  styled_components_browser_esm_default,
  useApp,
  useScreenWidth
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  Link,
  init_esm
} from "/build/_shared/chunk-JX76WC46.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6O7TW4X6.js";
import {
  __toESM
} from "/build/_shared/chunk-RFITDC3A.js";

// app/components/common/SlideCard/index.tsx
init_esm();

// app/components/common/SlideCard/styles.tsx
var CardWrapper = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__CardWrapper",
  componentId: "sc-1p87h7p-0"
})(["cursor:pointer;display:flex;flex-direction:column;align-items:flex-start;width:100%;min-height:176px;transition:transform 0.2s cubic-bezier(0.2,0,0,1);position:relative;margin:8px 0;box-shadow:", ";border-radius:8px;@media (min-width:1024px){min-width:100%;max-width:", ";margin:", ";}@media (min-width:1280px){border-radius:12px;margin:12px 4px;max-width:", ";}&:hover{z-index:1;transform:translateZ(0) ", ";}"], ({
  theme
}) => theme.\u0441ards.shadow, ({
  variant
}) => variant === "companies" ? "186px" : "245px", ({
  variant
}) => variant === "companies" ? "14px 0" : "0", ({
  variant
}) => variant === "companies" ? "186px" : "100%", ({
  variant
}) => variant === "companies" ? "scale(1.08)" : "scale(1.05)");
var Image = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__Image",
  componentId: "sc-1p87h7p-1"
})(["padding:0;background:", ";min-width:", ";width:100%;display:flex;border-radius:8px 8px 0px 0px;min-height:", ";height:", ";flex-grow:1;img{width:100%;max-width:100%;max-height:100%;object-fit:cover;border-radius:8px 8px 0px 0px;}@media (min-width:768px){padding:0;height:", ";img{max-width:100%;max-height:100%;}}@media (min-width:1024px){border-radius:12px 12px 0px 0px;max-height:", ";padding:0;width:100%;img{border-radius:12px 12px 0px 0px;}}@media (min-width:1280px){border-radius:12px 12px 0px 0px;width:100%;height:", ";}"], ({
  theme
}) => theme.\u0441ards.imageBackground, ({
  variant
}) => variant === "companies" ? "100%" : "138px", ({
  variant
}) => variant === "companies" ? "auto" : "138px", ({
  variant
}) => variant === "companies" ? "74px" : "138px", ({
  variant
}) => variant === "companies" ? "118px" : "200px", ({
  variant
}) => variant === "companies" ? "130px" : "100%", ({
  variant
}) => variant === "companies" ? "132px" : "256px");
var CardContent = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__CardContent",
  componentId: "sc-1p87h7p-2"
})(["width:100%;height:", ";display:flex;flex-direction:column;align-items:flex-start;text-align:start;background:", ";border-radius:0px 0px 8px 8px;gap:8px;padding:", ";justify-content:", ";.cardTitle{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;-webkit-line-clamp:3;}@media (min-width:768px){padding:16px;height:", ";}@media (min-width:1024px){border-radius:0px 0px 12px 12px;width:100%;.cardTitle{font-size:", ";}}@media (min-width:1280px){padding:", ";width:100%;height:", ";.cardTitle{-webkit-line-clamp:2;}}"], ({
  variant
}) => variant === "articles" ? "110px" : "102px", ({
  theme
}) => theme.\u0441ards.cardContentBackground, ({
  variant
}) => variant === "companies" ? "12px" : "16px", ({
  variant
}) => variant === "companies" ? "space-between" : "flex-start", ({
  variant
}) => variant === "articles" ? "136px" : "128px", FONT_SIZES_DESC[TextVariantEnum.textBody1], ({
  variant
}) => variant === "companies" ? "16px 24px" : "16px 16px 24px", ({
  variant
}) => variant === "articles" ? "120px" : "132px");

// app/components/common/SlideCard/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function SlideCard({
  className,
  style,
  variant,
  title,
  date,
  vacancies,
  image,
  id
}) {
  const {
    theme
  } = useApp();
  const widthScreen = useScreenWidth();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardWrapper, { variant, className, style, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: (
    // eslint-disable-next-line no-nested-ternary
    variant === "companies" ? widthScreen > 1280 ? `/search/company/${id || ""}/vacancy` : `/search/company/${id || ""}` : `/materials/news/${id || ""}`
  ), style: {
    width: "100%"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { variant, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: image ? getImageUrl(image, "company") : DEFAULT_COMPANY_LOGO, alt: title }, void 0, false, {
      fileName: "app/components/common/SlideCard/index.tsx",
      lineNumber: 46,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/common/SlideCard/index.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { variant, children: [
      variant === "articles" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, color: theme.\u0441ards.articlesTextColor, children: date }, void 0, false, {
        fileName: "app/components/common/SlideCard/index.tsx",
        lineNumber: 49,
        columnNumber: 38
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "cardTitle", variant: TextVariantEnum.textBody2medium, children: title }, void 0, false, {
        fileName: "app/components/common/SlideCard/index.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      variant === "companies" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textSmall, color: vacancies ? theme.\u0441ards.vacanciesTextColor : theme.\u0441ards.noVacanciesTextColor, children: vacancies ? `${vacancies} vacancies` : "no vacancies" }, void 0, false, {
        fileName: "app/components/common/SlideCard/index.tsx",
        lineNumber: 55,
        columnNumber: 39
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/SlideCard/index.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/SlideCard/index.tsx",
    lineNumber: 40,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/SlideCard/index.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
var SlideCard_default = SlideCard;

export {
  SlideCard_default
};
