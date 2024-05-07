import {
  BoxCard,
  VariantCardEnum
} from "/build/_shared/chunk-EWP76DBX.js";
import {
  Button_default
} from "/build/_shared/chunk-AF6HCNMF.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-WTGWCS5L.js";
import {
  motion
} from "/build/_shared/chunk-47YKAHTX.js";
import {
  Box,
  Text,
  TextVariantEnum,
  getImageUrl,
  lng,
  styled_components_browser_esm_default,
  useApp,
  useScreenWidth
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  Form,
  Link,
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

// app/routes/materials/news.tsx
var import_cloudflare = __toESM(require_cloudflare());
init_esm();

// app/components/pages/Materials/News/index.tsx
init_esm();
var import_react2 = __toESM(require_react());

// app/components/pages/Materials/News/styles.ts
var Wrapper = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`;
var Image = styled_components_browser_esm_default.div`
  background: ${({ theme }) => theme.\u0441ards.imageBackground};
  min-width: 100%;
  height: 100%;
  display: flex;
  border-radius: 4px;

  img {
    width: 100%;
    height: 180px;
    border-radius: 4px;
  }

  @media (min-width: 768px) {
    min-width: 180px;

    img {
      width: 180px;
      height: 180px;
      border-radius: 8px;
    }
  }
`;
var CardContent = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;

  @media (min-width: 768px) {
    gap: 16px;
    height: 180px;
  }

  .cardTitle {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 4;

    @media (min-width: 768px) {
      flex: none;
      -webkit-line-clamp: 3;
    }
    @media (min-width: 1024px) {
      -webkit-line-clamp: 3;
    }
    @media (min-width: 1280px) {
      -webkit-line-clamp: 2;
    }
  }
  .cardText {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;

    @media (min-width: 768px) {
      flex: none;
      max-height: calc(5 * 24px);
      -webkit-line-clamp: unset;
    }
  }
`;

// app/components/pages/Materials/News/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function mapMaterialsToViewModel(material, language) {
  return {
    id: material.id,
    title: lng(material.en?.title, material.th?.title, language),
    shorttext: lng(material.en?.text, material.th?.text, language),
    image: material.image
  };
}
var NewsComponent = (0, import_react2.memo)(({
  news
}) => {
  const widthScreen = useScreenWidth();
  const {
    theme,
    userContext
  } = useApp();
  const newsItems = news?.map((item) => mapMaterialsToViewModel(item, userContext.language));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", width: "100%", gap: widthScreen > 1024 ? "24px" : "16px", as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, children: newsItems?.map((newsItem) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxCard, { variant: VariantCardEnum.materials, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: newsItem?.id || "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wrapper, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: newsItem?.image ? getImageUrl(newsItem?.image) : "/images/user/squareAvatarDefault.png", alt: "news card" }, void 0, false, {
      fileName: "app/components/pages/Materials/News/index.tsx",
      lineNumber: 46,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/pages/Materials/News/index.tsx",
      lineNumber: 45,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "cardTitle", variant: TextVariantEnum.textHeading3, children: newsItem.title }, void 0, false, {
        fileName: "app/components/pages/Materials/News/index.tsx",
        lineNumber: 49,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "cardText", variant: TextVariantEnum.textBody2, color: theme.mainPage.titleColor, children: newsItem.shorttext }, void 0, false, {
        fileName: "app/components/pages/Materials/News/index.tsx",
        lineNumber: 52,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Materials/News/index.tsx",
      lineNumber: 48,
      columnNumber: 15
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Materials/News/index.tsx",
    lineNumber: 44,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/pages/Materials/News/index.tsx",
    lineNumber: 43,
    columnNumber: 11
  }, this) }, newsItem?.id, false, {
    fileName: "app/components/pages/Materials/News/index.tsx",
    lineNumber: 42,
    columnNumber: 35
  }, this)) }, void 0, false, {
    fileName: "app/components/pages/Materials/News/index.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
});

// app/routes/materials/news.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var BoxPagination = styled_components_browser_esm_default.div.withConfig({
  displayName: "news__BoxPagination",
  componentId: "sc-1giqwr3-0"
})(["width:100%;display:flex;align-items:center;justify-content:center;"]);
function Index() {
  const data = useLoaderData();
  const {
    t
  } = useApp();
  const news = data.news.data.data;
  const newsLimit = +data.limit || 12;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NewsComponent, { news }, void 0, false, {
      fileName: "app/routes/materials/news.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "GET", preventScrollReset: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxPagination, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { priority: "secondary", name: "limit", type: "submit", value: newsLimit + 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:show_more") }, void 0, false, {
      fileName: "app/routes/materials/news.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/materials/news.tsx",
      lineNumber: 43,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/materials/news.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/materials/news.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/materials/news.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}

export {
  BoxPagination,
  Index
};
//# sourceMappingURL=/build/_shared/chunk-2G2KSU2T.js.map
