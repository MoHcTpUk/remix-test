import {
  BoxCard,
  VariantCardEnum
} from "/build/_shared/chunk-EWP76DBX.js";
import "/build/_shared/chunk-NPNOAFIQ.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-WTGWCS5L.js";
import {
  motion
} from "/build/_shared/chunk-47YKAHTX.js";
import {
  Box,
  FONT_SIZES_DESC,
  FONT_SIZES_MOB,
  FONT_WEIGHTS_DESC,
  FONT_WEIGHTS_MOB,
  LINE_HEIGHTS_DESC,
  LINE_HEIGHTS_MOB,
  Text,
  TextVariantEnum,
  lng,
  styled_components_browser_esm_default,
  useApp
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  init_esm,
  useLoaderData
} from "/build/_shared/chunk-IQJCUQRT.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/about/index.tsx
var import_cloudflare = __toESM(require_cloudflare());
init_esm();

// app/components/pages/About/index.tsx
var import_react = __toESM(require_react());

// app/components/pages/About/styles.ts
var TitleWrapper = styled_components_browser_esm_default.div`
  display: flex;
  justify-content: center;

  span {
    font-size: ${FONT_SIZES_MOB[TextVariantEnum.textHeading2]};
    font-weight: ${FONT_WEIGHTS_MOB[TextVariantEnum.textHeading2]};
    line-height: ${LINE_HEIGHTS_MOB[TextVariantEnum.textHeading2]};
  }

  @media (min-width: 768px) {
    span {
      font-size: ${FONT_SIZES_DESC[TextVariantEnum.textHeading3]};
      font-weight: ${FONT_WEIGHTS_DESC[TextVariantEnum.textHeading3]};
      line-height: ${LINE_HEIGHTS_DESC[TextVariantEnum.textHeading3]};
    }
  }
`;
var ContentWrapper = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  /* gap: 16px; */
  white-space: pre-wrap;
`;

// app/components/pages/About/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function mapMaterialsToViewModel(material, language) {
  return {
    id: material.id,
    title: lng(material.en?.title, material.th?.title, language),
    text: lng(material.en?.text, material.th?.text, language)
  };
}
var AboutComponent = (0, import_react.memo)(({
  about
}) => {
  const {
    userContext
  } = useApp();
  const aboutData = mapMaterialsToViewModel(about, userContext.language);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", width: "100%", as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxCard, { variant: VariantCardEnum.about, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleWrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, children: aboutData.title }, void 0, false, {
      fileName: "app/components/pages/About/index.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/pages/About/index.tsx",
      lineNumber: 38,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContentWrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: aboutData.text }, void 0, false, {
      fileName: "app/components/pages/About/index.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/pages/About/index.tsx",
      lineNumber: 42,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/About/index.tsx",
    lineNumber: 37,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/pages/About/index.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
});

// app/routes/about/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Index() {
  const data = useLoaderData();
  const aboutText = data.about.data;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AboutComponent, { about: aboutText }, void 0, false, {
    fileName: "app/routes/about/index.tsx",
    lineNumber: 19,
    columnNumber: 10
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/about/index-H7H32BPX.js.map
