import {
  BoxCard,
  VariantCardEnum
} from "/build/_shared/chunk-EWP76DBX.js";
import {
  Button_default
} from "/build/_shared/chunk-AF6HCNMF.js";
import "/build/_shared/chunk-NPNOAFIQ.js";
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

// app/routes/materials/articles.tsx
var import_cloudflare = __toESM(require_cloudflare());
init_esm();

// app/components/pages/Materials/Articles/index.tsx
init_esm();
var import_react2 = __toESM(require_react());

// app/components/pages/Materials/Articles/styles.ts
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
  overflow: hidden;
  gap: 8px;

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

// app/components/pages/Materials/Articles/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function mapMaterialsToViewModel(material, language) {
  return {
    id: material.id,
    title: lng(material.en?.title, material.th?.title, language),
    shorttext: lng(material.en?.text, material.th?.text, language),
    image: material.image
  };
}
var ArticlesComponent = (0, import_react2.memo)(({
  articles
}) => {
  const widthScreen = useScreenWidth();
  const {
    theme,
    t,
    userContext
  } = useApp();
  const articlesItems = articles?.map((item) => mapMaterialsToViewModel(item, userContext.language));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", width: "100%", gap: widthScreen > 1024 ? "24px" : "16px", as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, children: articlesItems?.map((articlesItem) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxCard, { variant: VariantCardEnum.materials, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: articlesItem?.id || "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wrapper, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: articlesItem?.image ? getImageUrl(articlesItem?.image) : "/images/user/squareAvatarDefault.png", alt: "article card" }, void 0, false, {
      fileName: "app/components/pages/Materials/Articles/index.tsx",
      lineNumber: 47,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/components/pages/Materials/Articles/index.tsx",
      lineNumber: 46,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "cardTitle", variant: TextVariantEnum.textHeading3, children: articlesItem.title }, void 0, false, {
        fileName: "app/components/pages/Materials/Articles/index.tsx",
        lineNumber: 50,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "cardText", variant: TextVariantEnum.textBody2, color: theme.mainPage.titleColor, children: articlesItem.shorttext }, void 0, false, {
        fileName: "app/components/pages/Materials/Articles/index.tsx",
        lineNumber: 53,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Materials/Articles/index.tsx",
      lineNumber: 49,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Materials/Articles/index.tsx",
    lineNumber: 45,
    columnNumber: 15
  }, this) }, void 0, false, {
    fileName: "app/components/pages/Materials/Articles/index.tsx",
    lineNumber: 44,
    columnNumber: 13
  }, this) }, articlesItem?.id, false, {
    fileName: "app/components/pages/Materials/Articles/index.tsx",
    lineNumber: 43,
    columnNumber: 45
  }, this)) }, void 0, false, {
    fileName: "app/components/pages/Materials/Articles/index.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
});

// app/routes/materials/articles.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var BoxPagination = styled_components_browser_esm_default.div.withConfig({
  displayName: "articles__BoxPagination",
  componentId: "sc-1mcux8-0"
})(["width:100%;display:flex;align-items:center;justify-content:center;"]);
function Index() {
  const data = useLoaderData();
  const {
    t
  } = useApp();
  const articles = data.articles.data.data;
  const articlesLimit = +data.limit || 12;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ArticlesComponent, { articles }, void 0, false, {
      fileName: "app/routes/materials/articles.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "GET", preventScrollReset: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxPagination, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { priority: "secondary", name: "limit", type: "submit", value: articlesLimit + 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:show_more") }, void 0, false, {
      fileName: "app/routes/materials/articles.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/materials/articles.tsx",
      lineNumber: 43,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/materials/articles.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/materials/articles.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/materials/articles.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/materials/articles-IAQTT6RY.js.map