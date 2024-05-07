import {
  CompanySearchCard
} from "/build/_shared/chunk-AR3PLFJV.js";
import "/build/_shared/chunk-V5MNZ2Y5.js";
import "/build/_shared/chunk-7FNYKDMW.js";
import "/build/_shared/chunk-S736XJXX.js";
import "/build/_shared/chunk-E4EPAWHT.js";
import {
  BoxSelectedCard
} from "/build/_shared/chunk-GDKTSAJ4.js";
import {
  MediaBox
} from "/build/_shared/chunk-4ELEE4BM.js";
import "/build/_shared/chunk-KNWWVEW6.js";
import "/build/_shared/chunk-MFOM2GJG.js";
import "/build/_shared/chunk-NYZBDFE7.js";
import {
  BoxControlContainer,
  ModalShare
} from "/build/_shared/chunk-6Q4I67JY.js";
import "/build/_shared/chunk-RCGFGPYD.js";
import "/build/_shared/chunk-DUOL7BQP.js";
import "/build/_shared/chunk-SETLP5G4.js";
import "/build/_shared/chunk-5HZIPPOH.js";
import "/build/_shared/chunk-LEK3IZDX.js";
import "/build/_shared/chunk-G7LBNXS2.js";
import "/build/_shared/chunk-ZGBGIZVF.js";
import "/build/_shared/chunk-P4RFN3QO.js";
import "/build/_shared/chunk-4O6GBBTS.js";
import "/build/_shared/chunk-DECE5T37.js";
import "/build/_shared/chunk-IYT3SP4K.js";
import "/build/_shared/chunk-P5TLLZSL.js";
import {
  Field
} from "/build/_shared/chunk-FMAU5EOD.js";
import {
  BoxHeading,
  DataBox,
  EntityVariantEnum,
  HeadingInformation,
  PageVariantEnum,
  SizeCardVariantEnum
} from "/build/_shared/chunk-SWZFRHVX.js";
import {
  BoxCard,
  VariantCardEnum
} from "/build/_shared/chunk-6J6FMBZW.js";
import "/build/_shared/chunk-XPTAWHVK.js";
import "/build/_shared/chunk-T7KDPY4G.js";
import "/build/_shared/chunk-NSEFQYWN.js";
import "/build/_shared/chunk-QD72PUQI.js";
import "/build/_shared/chunk-GEH4KW55.js";
import {
  BoxInformationEnum,
  BoxInformation_default,
  List,
  ListItem
} from "/build/_shared/chunk-MYIBCQY6.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-ASV7D43C.js";
import "/build/_shared/chunk-4SQREHPC.js";
import {
  motion
} from "/build/_shared/chunk-NC5IH6SX.js";
import {
  Box,
  CLIENT_BASE_URL,
  DEFAULT_COMPANY_LOGO,
  Text,
  TextVariantEnum,
  getImageUrl,
  getValueFromDictionaries,
  getValueLang,
  updateSearchString,
  useApp,
  useScreenWidth
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  Link,
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

// app/routes/search/company.tsx
var import_cloudflare = __toESM(require_cloudflare());
init_esm();

// app/components/pages/Search/Companies/index.tsx
init_esm();
var import_react3 = __toESM(require_react());

// app/components/entities/cardWidgets/CompanyPartCard/index.tsx
init_esm();

// app/components/entities/cardComponents/partCard/CompanyPartCardHeading/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function CompanyPartCardHeading({
  company
}) {
  const {
    theme,
    userContext
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxHeading, { variant: EntityVariantEnum.company, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: company?.logo_uri ? getImageUrl(company?.logo_uri) : DEFAULT_COMPANY_LOGO, alt: "company logo" }, void 0, false, {
      fileName: "app/components/entities/cardComponents/partCard/CompanyPartCardHeading/index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadingInformation, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "title", variant: TextVariantEnum.textHeading2, children: company?.name }, void 0, false, {
        fileName: "app/components/entities/cardComponents/partCard/CompanyPartCardHeading/index.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, color: theme.user.descriptionTextColor, children: getValueLang(company?.specialization_name, userContext.language) }, void 0, false, {
        fileName: "app/components/entities/cardComponents/partCard/CompanyPartCardHeading/index.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/cardComponents/partCard/CompanyPartCardHeading/index.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/cardComponents/partCard/CompanyPartCardHeading/index.tsx",
    lineNumber: 18,
    columnNumber: 10
  }, this);
}

// app/components/entities/cardComponents/partCard/CompanyPartCardInfo/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function CompanyPartCardInfo({
  company,
  dictionaries
}) {
  const {
    theme,
    t,
    userContext
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { flexDirection: "column", gap: "8px", width: "100%", padding: "16px 0", style: {
    borderTop: `1px solid ${theme.user.borderColor}`,
    borderBottom: `1px solid ${theme.user.borderColor}`
  }, children: [
    company.description && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Field, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, color: theme.user.descriptionTextColor, children: t("user:about_company") }, void 0, false, {
        fileName: "app/components/entities/cardComponents/partCard/CompanyPartCardInfo/index.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, className: "shortDescription", children: company.description }, void 0, false, {
        fileName: "app/components/entities/cardComponents/partCard/CompanyPartCardInfo/index.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/cardComponents/partCard/CompanyPartCardInfo/index.tsx",
      lineNumber: 27,
      columnNumber: 31
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataBox, { variant: EntityVariantEnum.company, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Field, { className: "field", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, color: theme.user.descriptionTextColor, children: t("user:number_of_employees") }, void 0, false, {
          fileName: "app/components/entities/cardComponents/partCard/CompanyPartCardInfo/index.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: getValueFromDictionaries(dictionaries?.employeeNumbers, company.number_of_employees_id, userContext.language) }, void 0, false, {
          fileName: "app/components/entities/cardComponents/partCard/CompanyPartCardInfo/index.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/entities/cardComponents/partCard/CompanyPartCardInfo/index.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Field, { className: "field", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, color: theme.user.descriptionTextColor, children: t("user:opened_vacancies") }, void 0, false, {
          fileName: "app/components/entities/cardComponents/partCard/CompanyPartCardInfo/index.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { flexDirection: "column", gap: "4px", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: company.number_of_vacancies }, void 0, false, {
          fileName: "app/components/entities/cardComponents/partCard/CompanyPartCardInfo/index.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/entities/cardComponents/partCard/CompanyPartCardInfo/index.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/entities/cardComponents/partCard/CompanyPartCardInfo/index.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/cardComponents/partCard/CompanyPartCardInfo/index.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/cardComponents/partCard/CompanyPartCardInfo/index.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}

// app/components/entities/cardWidgets/CompanyPartCard/index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function CompanyPartCardWidget({
  company,
  dictionaries,
  variant,
  selectedCompany
}) {
  const {
    theme,
    t
  } = useApp();
  const location = useLocation();
  const widthScreen = useScreenWidth();
  const boxHeading = (company2) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CompanyPartCardHeading, { company: company2 }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/CompanyPartCard/index.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CompanyPartCardInfo, { company: company2, dictionaries }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/CompanyPartCard/index.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/cardWidgets/CompanyPartCard/index.tsx",
    lineNumber: 32,
    columnNumber: 44
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { width: "100%", style: {
    cursor: "pointer",
    borderRadius: "12px",
    transition: "all 0.2s cubic-bezier(0.2, 0, 0, 1)",
    border: widthScreen >= 1280 && company.id === selectedCompany ? `2px solid ${theme.modal.borderCardsColor}` : ""
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BoxCard, { variant: VariantCardEnum.userCard, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MediaBox, { variant: "mobile", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: company?.id || "#", children: boxHeading(company) }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/CompanyPartCard/index.tsx",
      lineNumber: 44,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/CompanyPartCard/index.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MediaBox, { variant: "desktop", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: `/search/company${updateSearchString(location.search, company?.id)}`, preventScrollReset: true, children: boxHeading(company) }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/CompanyPartCard/index.tsx",
      lineNumber: 48,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/CompanyPartCard/index.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BoxControlContainer, { company, id: company?.id, variant, typeEntity: EntityVariantEnum.company, typeCard: SizeCardVariantEnum.part }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/CompanyPartCard/index.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this)
  ] }, company?.id, true, {
    fileName: "app/components/entities/cardWidgets/CompanyPartCard/index.tsx",
    lineNumber: 42,
    columnNumber: 7
  }, this) }, company?.id, false, {
    fileName: "app/components/entities/cardWidgets/CompanyPartCard/index.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}

// app/components/pages/Search/Companies/index.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var SearchCompaniesComponent = (0, import_react3.memo)(({
  company,
  dictionaries,
  companies
}) => {
  const {
    t
  } = useApp();
  const [visibleShare, setVisibleShare] = (0, import_react3.useState)(false);
  const location = useLocation();
  const widthScreen = useScreenWidth();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { flexDirection: "row", alignItems: "flex-start", width: "100%", gap: "24px", as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { flexDirection: "column", width: "100%", gap: widthScreen > 1024 ? "24px" : "16px", style: {
      flex: "1"
    }, children: [
      companies?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CompanyPartCardWidget, { company: item, selectedCompany: company?.id, dictionaries, variant: PageVariantEnum.search }, item?.id, false, {
        fileName: "app/components/pages/Search/Companies/index.tsx",
        lineNumber: 42,
        columnNumber: 35
      }, this)),
      !companies?.[0] && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BoxInformation_default, { variant: BoxInformationEnum.info, title: t("user:the_search_has_not_given_any_results_try_changing_your_search_terms"), information: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(List, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ListItem, { children: t("user:try_more_general_keywords") }, void 0, false, {
          fileName: "app/components/pages/Search/Companies/index.tsx",
          lineNumber: 44,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ListItem, { children: t("user:try_changing_the_value_of_one_of_the_filters") }, void 0, false, {
          fileName: "app/components/pages/Search/Companies/index.tsx",
          lineNumber: 45,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ListItem, { children: t("user:check_your_spelling") }, void 0, false, {
          fileName: "app/components/pages/Search/Companies/index.tsx",
          lineNumber: 46,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/Search/Companies/index.tsx",
        lineNumber: 43,
        columnNumber: 180
      }, this), flexDirection: "column" }, void 0, false, {
        fileName: "app/components/pages/Search/Companies/index.tsx",
        lineNumber: 43,
        columnNumber: 31
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ModalShare, { link: `${CLIENT_BASE_URL}${location.pathname}/${company?.id || ""}`, visibility: visibleShare, setVisibility: setVisibleShare }, void 0, false, {
        fileName: "app/components/pages/Search/Companies/index.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Search/Companies/index.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    company && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BoxSelectedCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CompanySearchCard, { company, dictionaries }, void 0, false, {
      fileName: "app/components/pages/Search/Companies/index.tsx",
      lineNumber: 51,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/pages/Search/Companies/index.tsx",
      lineNumber: 50,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Search/Companies/index.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
});

// app/routes/search/company.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function Search() {
  const request = useLoaderData();
  const companies = request?.companies.data;
  const company = request.company ? request.company : companies?.[0];
  const {
    dictionaries
  } = request;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SearchCompaniesComponent, { companies, dictionaries, company }, void 0, false, {
    fileName: "app/routes/search/company.tsx",
    lineNumber: 69,
    columnNumber: 10
  }, this);
}
export {
  Search as default
};
