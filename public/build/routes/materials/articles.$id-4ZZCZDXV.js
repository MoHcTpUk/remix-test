import {
  en_GB_default,
  format,
  parseISO,
  th_default
} from "/build/_shared/chunk-ET752KB5.js";
import {
  BoxPagination
} from "/build/_shared/chunk-2G2KSU2T.js";
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
  FONT_SIZES_DESC,
  FONT_SIZES_MOB,
  LINE_HEIGHTS_DESC,
  LINE_HEIGHTS_MOB,
  Text,
  TextVariantEnum,
  getImageUrl,
  lng,
  routes_default,
  styled_components_browser_esm_default,
  useApp,
  useScreenWidth
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
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

// app/routes/materials/articles.$id.tsx
var import_cloudflare = __toESM(require_cloudflare());
init_esm();

// app/components/pages/Materials/Articles/ArticleItem/index.tsx
var import_react = __toESM(require_react());

// app/components/pages/Materials/Articles/ArticleItem/styles.ts
var Wrapper = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    gap: 24px;
  }
`;
var CardHeader = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 16px;
  padding-top: 8px;

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`;
var TitleWrapper = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .cardDate {
    font-size: ${FONT_SIZES_MOB.textSmallmedium};
    line-height: ${LINE_HEIGHTS_MOB.textSmallmedium};
    border-bottom: 1px solid ${({ theme }) => theme.user.borderColor};
    padding-bottom: 16px;

    @media (min-width: 768px) {
      font-size: ${FONT_SIZES_DESC.textBody2medium};
      line-height: ${LINE_HEIGHTS_DESC.textBody2medium};
      border-bottom: none;
      padding-bottom: 0;
    }
  }
`;
var Image = styled_components_browser_esm_default.div`
  background: ${({ theme }) => theme.\u0441ards.imageBackground};
  width: 100%;
  display: flex;
  border-radius: 8px;
  position: relative;
  padding-top: 56.25%;
  overflow: hidden;

  img {
    border-radius: 8px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
  }
`;

// app/components/pages/Materials/Articles/ArticleItem/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function mapMaterialsToViewModel(material, language) {
  return {
    id: material.id,
    title: lng(material.en?.title, material.th?.title, language),
    text: lng(material.en?.text, material.th?.text, language),
    date: material.published_at_utc,
    image: material.image
  };
}
var ArticlesItemComponent = (0, import_react.memo)(({
  articlesItem
}) => {
  const widthScreen = useScreenWidth();
  const {
    theme,
    t,
    userContext
  } = useApp();
  const articlesItemData = mapMaterialsToViewModel(articlesItem, userContext.language);
  const formatDate = articlesItemData.date;
  const formatDateTH = format(parseISO(formatDate), "d MMMM yyyy", {
    locale: th_default
  });
  const formatDateEN = format(parseISO(formatDate), "d MMMM yyyy", {
    locale: en_GB_default
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", width: "100%", gap: widthScreen > 1024 ? "24px" : "16px", as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxCard, { variant: VariantCardEnum.materials, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wrapper, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleWrapper, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textHeading3, children: articlesItemData.title }, void 0, false, {
          fileName: "app/components/pages/Materials/Articles/ArticleItem/index.tsx",
          lineNumber: 56,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "cardDate", variant: TextVariantEnum.textBody2medium, color: theme.\u0441ards.descriptionTextColor, children: userContext.language === "en" ? formatDateEN : formatDateTH }, void 0, false, {
          fileName: "app/components/pages/Materials/Articles/ArticleItem/index.tsx",
          lineNumber: 57,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/Materials/Articles/ArticleItem/index.tsx",
        lineNumber: 55,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: articlesItemData?.image ? getImageUrl(articlesItemData?.image) : "/images/user/squareAvatarDefault.png", alt: "news card" }, void 0, false, {
        fileName: "app/components/pages/Materials/Articles/ArticleItem/index.tsx",
        lineNumber: 62,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Materials/Articles/ArticleItem/index.tsx",
        lineNumber: 61,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Materials/Articles/ArticleItem/index.tsx",
      lineNumber: 54,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "cardText", variant: TextVariantEnum.textBody2, color: theme.mainPage.titleColor, children: articlesItemData.text }, void 0, false, {
      fileName: "app/components/pages/Materials/Articles/ArticleItem/index.tsx",
      lineNumber: 66,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Materials/Articles/ArticleItem/index.tsx",
    lineNumber: 53,
    columnNumber: 11
  }, this) }, articlesItemData?.id, false, {
    fileName: "app/components/pages/Materials/Articles/ArticleItem/index.tsx",
    lineNumber: 52,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/pages/Materials/Articles/ArticleItem/index.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
});

// app/routes/materials/articles.$id.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Index() {
  const data = useLoaderData();
  const {
    t
  } = useApp();
  const articlesItem = data.articles.data;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ArticlesItemComponent, { articlesItem }, void 0, false, {
      fileName: "app/routes/materials/articles.$id.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxPagination, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: routes_default.materials.news.root, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { priority: "secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("home:see_all_news") }, void 0, false, {
      fileName: "app/routes/materials/articles.$id.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/materials/articles.$id.tsx",
      lineNumber: 33,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/materials/articles.$id.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/materials/articles.$id.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/materials/articles.$id.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/materials/articles.$id-4ZZCZDXV.js.map
