import {
  BoxCard,
  VariantCardEnum
} from "/build/_shared/chunk-6J6FMBZW.js";
import "/build/_shared/chunk-GEH4KW55.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-ASV7D43C.js";
import {
  motion
} from "/build/_shared/chunk-NC5IH6SX.js";
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
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  init_esm,
  useLoaderData,
  useLocation
} from "/build/_shared/chunk-JX76WC46.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6O7TW4X6.js";
import {
  __toESM
} from "/build/_shared/chunk-RFITDC3A.js";

// app/routes/privacy_policy/index.tsx
var import_cloudflare = __toESM(require_cloudflare());
init_esm();

// app/components/pages/PrivacyPolicy/index.tsx
init_esm();
var import_react2 = __toESM(require_react());

// app/components/pages/PrivacyPolicy/styles.ts
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
  gap: 18px;
  white-space: pre-line;
`;

// app/components/pages/PrivacyPolicy/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function mapMaterialsToViewModel(material, language) {
  return {
    id: material.id,
    title: lng(material.en?.title, material.th?.title, language),
    text: lng(material.en?.text, material.th?.text, language)
  };
}
var PrivacyPolicyComponent = (0, import_react2.memo)(({
  privacy
}) => {
  const {
    userContext
  } = useApp();
  const location = useLocation();
  const privacyData = mapMaterialsToViewModel(privacy, userContext.language);
  const sections = privacyData?.text?.split("\n\n");
  const privacyStatement = sections?.[0];
  const cookies = sections?.[1];
  const termsAndConditions = sections?.[2];
  (0, import_react2.useEffect)(() => {
    if (location.hash) {
      const elem = document.getElementById(location.hash);
      if (elem) {
        elem.scrollIntoView({
          behavior: "smooth"
        });
      }
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }, [location]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", width: "100%", as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxCard, { variant: VariantCardEnum.about, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleWrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, children: privacyData.title }, void 0, false, {
      fileName: "app/components/pages/PrivacyPolicy/index.tsx",
      lineNumber: 61,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/pages/PrivacyPolicy/index.tsx",
      lineNumber: 60,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContentWrapper, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: privacyStatement }, void 0, false, {
        fileName: "app/components/pages/PrivacyPolicy/index.tsx",
        lineNumber: 65,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: cookies }, void 0, false, {
        fileName: "app/components/pages/PrivacyPolicy/index.tsx",
        lineNumber: 66,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, id: "terms", children: termsAndConditions }, void 0, false, {
        fileName: "app/components/pages/PrivacyPolicy/index.tsx",
        lineNumber: 67,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/PrivacyPolicy/index.tsx",
      lineNumber: 64,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/PrivacyPolicy/index.tsx",
    lineNumber: 59,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/pages/PrivacyPolicy/index.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
});

// app/routes/privacy_policy/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Index() {
  const data = useLoaderData();
  const privacyText = data.privacyPolicy.data;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PrivacyPolicyComponent, { privacy: privacyText }, void 0, false, {
    fileName: "app/routes/privacy_policy/index.tsx",
    lineNumber: 19,
    columnNumber: 10
  }, this);
}
export {
  Index as default
};
