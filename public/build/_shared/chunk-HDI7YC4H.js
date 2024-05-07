import {
  FONT_SIZES_DESC,
  FONT_SIZES_MOB,
  Map_default,
  Search_default,
  Text,
  TextVariantEnum,
  styled_components_browser_esm_default,
  useApp
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  Link,
  init_esm
} from "/build/_shared/chunk-IQJCUQRT.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/common/Tabs/index.tsx
init_esm();
var import_react3 = __toESM(require_react());

// app/components/entities/Search/index.tsx
var import_react = __toESM(require_react());

// app/components/entities/Search/styles.ts
var SearchContainer = styled_components_browser_esm_default.div`
  width: 100%;
  background-color: ${({ theme }) => theme.search.backgroundWrapper};
  display: flex;
  flex-direction: column;
  border-radius: 0 0 8px 8px;

  @media (min-width: 768px) {
    min-height: 64px;
    flex-direction: row;
    border-radius: 0 0 12px 12px;
  }
`;
var SvgWrapper = styled_components_browser_esm_default.div`
  display: flex;
  position: absolute;
  top: 16px;
  left: 24px;
  @media (min-width: 768px) {
    top: 20px;
    left: ${({ search }) => search ? "20px" : "24px"};
  }
  @media (min-width: 1024px) {
    left: 24px;
  }
  @media (min-width: 1280px) {
    left: ${({ search }) => search ? "40px" : "16px"};
  }
`;
var WrapperInput = styled_components_browser_esm_default.div`
  width: 100%;
  position: relative;

  :focus-within {
    ${SvgWrapper} svg path {
      stroke: ${({ theme }) => theme.search.svgFocusColor};
    }
  }
`;
var MainInputSearch = styled_components_browser_esm_default.input`
  background-color: ${({ theme }) => theme.search.backgroundWrapper};
  padding: 18px 34px 14px 56px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-height: 56px;
  font-size: ${FONT_SIZES_MOB[TextVariantEnum.textBody2]};

  &:nth-child(1) {
    border-bottom: 1px solid ${({ theme }) => theme.search.middleBorderColor};
  }

  @media (min-width: 768px) {
    border-radius: 0 0 0 12px;
    padding: 22px 24px 18px 56px;
    font-size: ${FONT_SIZES_DESC[TextVariantEnum.textBody2]};
    &:nth-child(1) {
      border-bottom: none;
    }
  }
  @media (min-width: 1024px) {
    padding: 22px 24px 18px 60px;
  }
  @media (min-width: 1280px) {
    padding: 22px 24px 18px 76px;
  }
`;
var PlaceInputSearch = styled_components_browser_esm_default.input`
  background-color: ${({ theme }) => theme.search.backgroundWrapper};
  padding: 18px 34px 14px 56px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-height: 56px;
  border-radius: 0px 0px 8px 8px;
  font-size: ${FONT_SIZES_MOB[TextVariantEnum.textBody2]};

  @media (min-width: 768px) {
    padding: 22px 24px 18px 64px;
    border-radius: 0px 0px 12px 0px;
    font-size: ${FONT_SIZES_DESC[TextVariantEnum.textBody2]};
  }
  @media (min-width: 1280px) {
    padding: 22px 24px 18px 52px;
  }
`;
var MiddleBorder = styled_components_browser_esm_default.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    min-width: 1px;
    height: 40px;
    background-color: ${({ theme }) => theme.search.middleBorderColor};
    margin: 12px 0;
  }
`;
var DropDownCities = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.search.backgroundWrapper};
  position: absolute;
  max-height: 328px;
  overflow: hidden;
  padding-left: 42px;
  top: 50px;
  z-index: 2;
  border-radius: 0 0 16px 16px;
  gap: 8px;

  @media (min-width: 768px) {
    top: 54px;
  }
`;
var DropDownOption = styled_components_browser_esm_default.div`
  cursor: pointer;
  & span:hover {
    color: ${({ theme }) => theme.accentTextColor};
  }
`;

// app/components/entities/Search/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Search = (0, import_react.memo)(({
  query,
  search_by_city,
  location
}) => {
  const {
    t,
    userContext,
    theme
  } = useApp();
  const searchRef = (0, import_react.useRef)(null);
  const [city, setCity] = (0, import_react.useState)(search_by_city);
  const [dropDownCities, setDropDownCities] = (0, import_react.useState)(false);
  const [selectedCity, setSelectedCity] = (0, import_react.useState)("");
  const handleChangeCity = (e) => {
    const inputValue = e.target.value;
    setCity(inputValue);
    setSelectedCity(inputValue);
    setDropDownCities(!!inputValue);
  };
  const handleSelectCity = (city2) => {
    if (city2) {
      setSelectedCity(city2);
      setCity(city2);
      setDropDownCities(false);
    }
  };
  const filteredLocations = location?.filter((loc) => loc[userContext.language]?.title?.toLowerCase()?.includes(city?.toLowerCase() || ""));
  const handleBlur = () => {
    if (!selectedCity) {
      setCity("");
      setDropDownCities(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperInput, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MainInputSearch, { name: "q", placeholder: t("home:job_title_keywords_or_company"), type: "text", ref: searchRef, defaultValue: query, autoComplete: "off" }, void 0, false, {
        fileName: "app/components/entities/Search/index.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SvgWrapper, { search: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search_default, { color: theme.search.svgColor }, void 0, false, {
        fileName: "app/components/entities/Search/index.tsx",
        lineNumber: 52,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/entities/Search/index.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/Search/index.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MiddleBorder, {}, void 0, false, {
      fileName: "app/components/entities/Search/index.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperInput, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlaceInputSearch, { placeholder: t("home:location"), type: "text", name: "search_by_city", value: city, onChange: (e) => handleChangeCity(e), onBlur: handleBlur, autoComplete: "off" }, void 0, false, {
        fileName: "app/components/entities/Search/index.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SvgWrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Map_default, { color: theme.search.svgColor }, void 0, false, {
        fileName: "app/components/entities/Search/index.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/entities/Search/index.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      dropDownCities && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropDownCities, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        overflow: "auto",
        padding: filteredLocations?.[0] ? "12px 0 10px 0" : "0px"
      }, children: filteredLocations?.map((loc) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropDownOption, { onClick: () => handleSelectCity(loc[userContext.language]?.title), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, color: theme.search.variantSearchCities, children: loc[userContext.language]?.title }, void 0, false, {
        fileName: "app/components/entities/Search/index.tsx",
        lineNumber: 72,
        columnNumber: 21
      }, this) }, loc.id, false, {
        fileName: "app/components/entities/Search/index.tsx",
        lineNumber: 71,
        columnNumber: 48
      }, this)) }, void 0, false, {
        fileName: "app/components/entities/Search/index.tsx",
        lineNumber: 64,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/entities/Search/index.tsx",
        lineNumber: 63,
        columnNumber: 30
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/Search/index.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/Search/index.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
});

// app/components/common/Tabs/styles.ts
var TabContainer = styled_components_browser_esm_default.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.tabs.tabContainer.backgroundColor};
  border-radius: 8px 8px 0 0;
  width: 100%;
  a {
    width: 100%;
    white-space: nowrap;
    min-width: fit-content;
  }
  @media (min-width: 768px) {
    height: 64px;
    border-radius: 12px 12px 0 0;
    a {
      max-width: fit-content;
    }
  }
`;
var TabButton = styled_components_browser_esm_default.button`
  cursor: pointer;
  width: 100%;
  min-width: fit-content;
  background-color: ${({ isActive, theme }) => isActive ? theme.tabs.tabButton.activeBackgroundColor : theme.tabs.tabButton.backgroundColor};
  padding: 12px 14px;
  border-radius: 8px 8px 0 0;
  transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);
  span {
    font-size: ${FONT_SIZES_MOB[TextVariantEnum.textBody2]};
    transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);
  }
  &:hover {
    background-color: ${({ isActive, theme }) => isActive ? theme.tabs.tabButton.activeBackgroundColor : theme.tabs.tabButton.backgroundColor};
    span {
      color: ${({ theme }) => theme.tabs.tabButton.focusSpanActiveBackgroundColor};
    }
  }
  &:active,
  :focus {
    background-color: ${({ isActive, theme }) => isActive ? theme.tabs.tabButton.focusBackgroundColor : theme.tabs.tabButton.focusActiveBackgroundColor};
    span {
      color: ${({ theme }) => theme.tabs.tabButton.focusSpanActiveBackgroundColor};
    }
  }

  @media (min-width: 768px) {
    max-width: fit-content;
    padding: 21px 40px 19px;
    border-radius: 12px 12px 0 0;
    span {
      font-size: ${FONT_SIZES_DESC[TextVariantEnum.textBody2]};
    }
  }

  @media (min-width: 1024px) {
    max-width: fit-content;
    padding: 21px 48px 19px;
  }

  @media (max-width: 340px) {
    span {
      font-size: 12px;
    }
  }
`;
var MiddleBorder2 = styled_components_browser_esm_default.div`
  min-width: 1px;
  height: 26px;
  transition: all 0.15s ease-in;
  background-color: ${({ theme }) => theme.tabs.middleBorder.backgroundColor};
  visibility: ${({ index, activeTab, tabs }) => index !== tabs.length - 1 && activeTab.id !== tabs[index]?.id && activeTab.id !== tabs[index + 1]?.id ? "visible" : "hidden"};
  @media (min-width: 768px) {
    height: 44px;
  }
`;
var TabContent = styled_components_browser_esm_default.div`
  padding: 16px;
  border: 2px solid lightblue;
  margin-top: 16px;
`;

// app/components/common/Tabs/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function TabSwitcher({
  query,
  search_by_city,
  tabs,
  activeTab,
  handleTabClick,
  isSearch,
  location
}) {
  const {
    theme,
    t
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabContainer, { children: tabs?.map((tab, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.default.Fragment, { children: isSearch ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: `/search/${tab?.id || ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabButton, { type: "button", isActive: activeTab?.id === tab.id, onClick: () => handleTabClick && handleTabClick(tab), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, color: activeTab?.id === tab.id ? theme.tabs.activeTabColor : theme.tabs.disabledTabColor, children: [
      tab.label,
      activeTab?.id === tab.id
    ] }, void 0, true, {
      fileName: "app/components/common/Tabs/index.tsx",
      lineNumber: 36,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/components/common/Tabs/index.tsx",
      lineNumber: 35,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/common/Tabs/index.tsx",
      lineNumber: 34,
      columnNumber: 25
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabButton, { type: "button", isActive: activeTab?.id === tab.id, onClick: () => handleTabClick && handleTabClick(tab), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, color: activeTab?.id === tab.id ? theme.tabs.activeTabColor : theme.tabs.disabledTabColor, children: [
      tab.label,
      activeTab?.id === tab.id
    ] }, void 0, true, {
      fileName: "app/components/common/Tabs/index.tsx",
      lineNumber: 42,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/common/Tabs/index.tsx",
      lineNumber: 41,
      columnNumber: 25
    }, this) }, tab.id, false, {
      fileName: "app/components/common/Tabs/index.tsx",
      lineNumber: 33,
      columnNumber: 36
    }, this)) }, void 0, false, {
      fileName: "app/components/common/Tabs/index.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Search, { query, search_by_city, location }, void 0, false, {
      fileName: "app/components/common/Tabs/index.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Tabs/index.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
var Tabs_default = TabSwitcher;

export {
  Tabs_default
};
//# sourceMappingURL=/build/_shared/chunk-HDI7YC4H.js.map
