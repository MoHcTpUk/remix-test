import {
  Select
} from "/build/_shared/chunk-BXFA34ZG.js";
import {
  SlideCard_default
} from "/build/_shared/chunk-C2TCWTKM.js";
import {
  Tabs_default
} from "/build/_shared/chunk-LFJBUGHQ.js";
import {
  BoxText,
  CommonLayout,
  TranslateBox
} from "/build/_shared/chunk-OFCPSJ6G.js";
import {
  Switcher
} from "/build/_shared/chunk-TPPLNXCO.js";
import {
  Input
} from "/build/_shared/chunk-MPISASBV.js";
import {
  Button_default
} from "/build/_shared/chunk-QD72PUQI.js";
import {
  Box,
  LanguageEnum,
  Text,
  ThemeEnum,
  useApp
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-6O7TW4X6.js";
import {
  __toESM
} from "/build/_shared/chunk-RFITDC3A.js";

// app/routes/ui/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  const {
    userContext,
    setUserContext,
    t
  } = useApp();
  const companies = [{
    id: "1",
    title: "Apple company-1",
    vacancies: 100,
    image: "/images/homePage/apple.png"
  }, {
    id: "2",
    title: "Apple company-1",
    vacancies: 23,
    image: "/images/homePage/apple.png"
  }, {
    id: "3",
    title: "Apple company-2",
    vacancies: 0,
    image: "/images/homePage/apple.png"
  }, {
    id: "4",
    title: "Apple company-1",
    vacancies: 100,
    image: "/images/homePage/apple.png"
  }, {
    id: "5",
    title: "Apple company-1",
    vacancies: 23,
    image: "/images/homePage/apple.png"
  }, {
    id: "6",
    title: "Apple company-2",
    vacancies: 0,
    image: "/images/homePage/apple.png"
  }];
  const news = [{
    id: "1",
    title: " 1 - The first Episode of NBT \u201CMee Kam Tob\u201D Features MOL\u2019s",
    date: "17.02.2023",
    image: "/images/homePage/new.png"
  }, {
    id: "2",
    title: "2 - The first Episode of NBT \u201CMee Kam Tob\u201D Features MOL\u2019s",
    date: "17.02.2023",
    image: "/images/homePage/new.png"
  }, {
    id: "3",
    title: "3 - The first Episode of NBT \u201CMee Kam Tob\u201D Features MOL\u2019s",
    date: "17.02.2023",
    image: "/images/homePage/new.png"
  }, {
    id: "4",
    title: "4 - The first Episode of NBT \u201CMee Kam Tob\u201D Features MOL\u2019s",
    date: "17.02.2023",
    image: "/images/homePage/new.png"
  }, {
    id: "5",
    title: "5 - The first Episode of NBT \u201CMee Kam Tob\u201D Features MOL\u2019s",
    date: "17.02.2023",
    image: "/images/homePage/new.png"
  }, {
    id: "6",
    title: "6 - Apple company-2",
    vacancies: 0,
    image: "/images/homePage/new.png"
  }];
  function setTheme(event) {
    switch (event.currentTarget.value) {
      case ThemeEnum.Light:
        setUserContext((prevContext) => ({
          ...prevContext,
          theme: ThemeEnum.Light
        }));
        break;
      case ThemeEnum.Dark:
        setUserContext((prevContext) => ({
          ...prevContext,
          theme: ThemeEnum.Dark
        }));
        break;
      case ThemeEnum.Dora:
        setUserContext((prevContext) => ({
          ...prevContext,
          theme: ThemeEnum.Dora
        }));
        break;
    }
  }
  function setLang(language) {
    setUserContext((prevContext) => ({
      ...prevContext,
      language
    }));
  }
  const changeLanguage = () => userContext?.language === LanguageEnum.TH ? setUserContext((prevContext) => ({
    ...prevContext,
    language: LanguageEnum.EN
  })) : setUserContext((prevContext) => ({
    ...prevContext,
    language: LanguageEnum.TH
  }));
  function themeIsCheckedRadiobutton(value) {
    switch (value) {
      case ThemeEnum.Dark:
        return userContext?.theme === ThemeEnum.Dark;
      case ThemeEnum.Dora:
        return userContext?.theme === ThemeEnum.Dora;
      case ThemeEnum.Light:
      default:
        return userContext?.theme === ThemeEnum.Light;
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommonLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", padding: "16px", gap: "20px", maxWidth: "960px", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "row", gap: "10px", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", border: "1px solid", borderRadius: "5px", gap: "10px", className: "p-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Theme test" }, void 0, false, {
          fileName: "app/routes/ui/index.tsx",
          lineNumber: 134,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "light", className: "pl-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", value: "light", id: "light", name: "theme", onChange: setTheme, checked: themeIsCheckedRadiobutton("light") }, void 0, false, {
            fileName: "app/routes/ui/index.tsx",
            lineNumber: 137,
            columnNumber: 19
          }, this),
          "Light"
        ] }, void 0, true, {
          fileName: "app/routes/ui/index.tsx",
          lineNumber: 136,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/ui/index.tsx",
          lineNumber: 135,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "dark", className: "pl-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", value: "dark", id: "dark", name: "theme", onChange: setTheme, checked: themeIsCheckedRadiobutton("dark") }, void 0, false, {
            fileName: "app/routes/ui/index.tsx",
            lineNumber: 143,
            columnNumber: 19
          }, this),
          "Dark"
        ] }, void 0, true, {
          fileName: "app/routes/ui/index.tsx",
          lineNumber: 142,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/ui/index.tsx",
          lineNumber: 141,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "dora", className: "pl-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", value: "dora", id: "dora", name: "theme", onChange: setTheme, checked: themeIsCheckedRadiobutton("dora") }, void 0, false, {
            fileName: "app/routes/ui/index.tsx",
            lineNumber: 149,
            columnNumber: 19
          }, this),
          "Dora"
        ] }, void 0, true, {
          fileName: "app/routes/ui/index.tsx",
          lineNumber: 148,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/ui/index.tsx",
          lineNumber: 147,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ui/index.tsx",
        lineNumber: 133,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/ui/index.tsx",
        lineNumber: 132,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", border: "1px solid", borderRadius: "5px", gap: "10px", className: "p-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
          "Language test: ",
          t("language")
        ] }, void 0, true, {
          fileName: "app/routes/ui/index.tsx",
          lineNumber: 158,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TranslateBox, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxText, { style: {
            cursor: "pointer"
          }, lang: LanguageEnum.TH, selectedLang: userContext?.language ?? "", onClick: () => setLang(LanguageEnum.TH), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22" }, void 0, false, {
            fileName: "app/routes/ui/index.tsx",
            lineNumber: 163,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/ui/index.tsx",
            lineNumber: 160,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switcher, { onChange: changeLanguage, checked: userContext?.language === LanguageEnum.EN, htmlLabel: "lang" }, void 0, false, {
            fileName: "app/routes/ui/index.tsx",
            lineNumber: 165,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxText, { style: {
            cursor: "pointer"
          }, lang: LanguageEnum.EN, selectedLang: userContext?.language ?? "", onClick: () => setLang(LanguageEnum.EN), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "English" }, void 0, false, {
            fileName: "app/routes/ui/index.tsx",
            lineNumber: 169,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/ui/index.tsx",
            lineNumber: 166,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/ui/index.tsx",
          lineNumber: 159,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Greeting from Common: ",
          t("greeting")
        ] }, void 0, true, {
          fileName: "app/routes/ui/index.tsx",
          lineNumber: 172,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Title from Home: ",
          t("home:title")
        ] }, void 0, true, {
          fileName: "app/routes/ui/index.tsx",
          lineNumber: 173,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ui/index.tsx",
        lineNumber: 157,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/ui/index.tsx",
        lineNumber: 156,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", border: "1px solid", borderRadius: "5px", gap: "10px", className: "p-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "User context test" }, void 0, false, {
          fileName: "app/routes/ui/index.tsx",
          lineNumber: 179,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: JSON.stringify(userContext) }, void 0, false, {
          fileName: "app/routes/ui/index.tsx",
          lineNumber: 180,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ui/index.tsx",
        lineNumber: 178,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/ui/index.tsx",
        lineNumber: 177,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/ui/index.tsx",
      lineNumber: 131,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", gap: "10px", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { entries: [["1", "test1-1"], ["2", "test2-1"], ["3", "test3-1"], ["4", "test4-1"], ["5", "test5-1"]], values: ["1"], variant: "single", placeholder: "placeholder" }, void 0, false, {
        fileName: "app/routes/ui/index.tsx",
        lineNumber: 186,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { entries: [["1", "test1-1"], ["2", "test2-1"], ["3", "test3-1"], ["4", "test4-1"], ["5", "test5-1"]], values: ["1", "2", "3"], variant: "multi", placeholder: "placeholder" }, void 0, false, {
        fileName: "app/routes/ui/index.tsx",
        lineNumber: 188,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { entries: [["1", "test1-1"], ["2", "test2-1"], ["3", "test3-1"], ["4", "test4-1"], ["5", "test5-1"]], values: ["4", "5"], variant: "search-multi", placeholder: "placeholder" }, void 0, false, {
        fileName: "app/routes/ui/index.tsx",
        lineNumber: 190,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { background: "#D9DBDE", placeholder: "Common", id: "i_firstname" }, void 0, false, {
        fileName: "app/routes/ui/index.tsx",
        lineNumber: 191,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Primary S" }, void 0, false, {
        fileName: "app/routes/ui/index.tsx",
        lineNumber: 194,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/ui/index.tsx",
        lineNumber: 193,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Secondary S" }, void 0, false, {
        fileName: "app/routes/ui/index.tsx",
        lineNumber: 198,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/ui/index.tsx",
        lineNumber: 197,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Small S" }, void 0, false, {
        fileName: "app/routes/ui/index.tsx",
        lineNumber: 202,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/ui/index.tsx",
        lineNumber: 201,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "primary", size: "M", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Primary M" }, void 0, false, {
        fileName: "app/routes/ui/index.tsx",
        lineNumber: 206,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/ui/index.tsx",
        lineNumber: 205,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "secondary", size: "M", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Secondary M" }, void 0, false, {
        fileName: "app/routes/ui/index.tsx",
        lineNumber: 210,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/ui/index.tsx",
        lineNumber: 209,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "chips", size: "M", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Chips M" }, void 0, false, {
        fileName: "app/routes/ui/index.tsx",
        lineNumber: 214,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/ui/index.tsx",
        lineNumber: 213,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "chips", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Chips S" }, void 0, false, {
        fileName: "app/routes/ui/index.tsx",
        lineNumber: 218,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/ui/index.tsx",
        lineNumber: 217,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/ui/index.tsx",
      lineNumber: 185,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs_default, {}, void 0, false, {
      fileName: "app/routes/ui/index.tsx",
      lineNumber: 222,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: companies.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SlideCard_default, { image: item.image, title: item.title, vacancies: item.vacancies, variant: "companies" }, item.id, false, {
      fileName: "app/routes/ui/index.tsx",
      lineNumber: 225,
      columnNumber: 34
    }, this)) }, void 0, false, {
      fileName: "app/routes/ui/index.tsx",
      lineNumber: 224,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { margin: "40px 0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: news.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SlideCard_default, { image: item.image, title: item.title, date: item.date, variant: "articles" }, item.id, false, {
      fileName: "app/routes/ui/index.tsx",
      lineNumber: 230,
      columnNumber: 31
    }, this)) }, void 0, false, {
      fileName: "app/routes/ui/index.tsx",
      lineNumber: 229,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/ui/index.tsx",
      lineNumber: 228,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/ui/index.tsx",
    lineNumber: 130,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/ui/index.tsx",
    lineNumber: 129,
    columnNumber: 10
  }, this);
}

export {
  Index
};
