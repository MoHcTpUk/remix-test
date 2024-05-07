import {
  VacancyPartCardWidget
} from "/build/_shared/chunk-3A2W4CRF.js";
import {
  VacancySearchCard
} from "/build/_shared/chunk-OWIWWAS4.js";
import {
  BoxSelectedCard
} from "/build/_shared/chunk-2HDVGR3L.js";
import {
  BoxDataFields,
  BoxDataFieldsInner,
  SignInForRequest
} from "/build/_shared/chunk-R2BJLWHH.js";
import {
  BoxControlContainer,
  ModalShare
} from "/build/_shared/chunk-JTDZABLX.js";
import {
  VacancyCardEnum
} from "/build/_shared/chunk-B4CRX2YS.js";
import {
  DataField
} from "/build/_shared/chunk-QGLVK6XR.js";
import {
  CardContainer
} from "/build/_shared/chunk-OGIUXGZ2.js";
import {
  BoxHeading,
  EntityVariantEnum,
  HeadingInformation,
  PageVariantEnum,
  SizeCardVariantEnum
} from "/build/_shared/chunk-5HXZ6U7H.js";
import {
  BoxCard
} from "/build/_shared/chunk-EWP76DBX.js";
import {
  BoxDataChips
} from "/build/_shared/chunk-BKRWDH2A.js";
import {
  BoxInformationEnum,
  BoxInformation_default,
  List,
  ListItem
} from "/build/_shared/chunk-D6JIAAYU.js";
import {
  motion
} from "/build/_shared/chunk-47YKAHTX.js";
import {
  Box,
  CLIENT_BASE_URL,
  DEFAULT_COMPANY_LOGO,
  Text,
  TextVariantEnum,
  getImageUrl,
  getValueLang,
  useApp,
  useRouteChecks,
  useScreenWidth
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  Link,
  init_esm,
  useLocation
} from "/build/_shared/chunk-IQJCUQRT.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/pages/Search/Vacancies/index.tsx
init_esm();
var import_react3 = __toESM(require_react());

// app/components/entities/cardComponents/fullCard/CompanyFullCardAbout/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function CompanyFullCardAbout({
  company
}) {
  const {
    t
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxDataFieldsInner, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, className: "title", children: `${t("common:about")} ${company?.name || ""}` }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/CompanyFullCardAbout/index.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataField, { data: company?.description }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/CompanyFullCardAbout/index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/cardComponents/fullCard/CompanyFullCardAbout/index.tsx",
    lineNumber: 15,
    columnNumber: 10
  }, this);
}

// app/components/entities/cardComponents/fullCard/CompanyFullCardHeading/index.tsx
init_esm();
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function CompanyFullCardHeading({
  company
}) {
  const {
    theme,
    userContext
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxHeading, { variant: EntityVariantEnum.company, className: "fullCard", sizeVariant: SizeCardVariantEnum.full, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: company?.logo_uri ? getImageUrl(company?.logo_uri) : DEFAULT_COMPANY_LOGO, alt: "company logo" }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/CompanyFullCardHeading/index.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HeadingInformation, { variant: "company", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { className: "title", variant: TextVariantEnum.textHeading2, children: company?.name }, void 0, false, {
        fileName: "app/components/entities/cardComponents/fullCard/CompanyFullCardHeading/index.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, color: theme.user.descriptionTextColor, children: getValueLang(company?.specialization_name, userContext.language) }, void 0, false, {
        fileName: "app/components/entities/cardComponents/fullCard/CompanyFullCardHeading/index.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: company?.website || "", style: {
        width: "100%",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, color: theme.accentTextColor, children: company?.website }, void 0, false, {
        fileName: "app/components/entities/cardComponents/fullCard/CompanyFullCardHeading/index.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/entities/cardComponents/fullCard/CompanyFullCardHeading/index.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/cardComponents/fullCard/CompanyFullCardHeading/index.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/cardComponents/fullCard/CompanyFullCardHeading/index.tsx",
    lineNumber: 20,
    columnNumber: 10
  }, this);
}

// app/components/entities/cardComponents/fullCard/CompanyFullCardInfo/index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function CompanyFullCardInfo({
  company
}) {
  const {
    t,
    userContext
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BoxDataFieldsInner, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, className: "title", children: t("user:company_information") }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/CompanyFullCardInfo/index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DataField, { variant: "custom", label: t("user:opened_vacancies"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BoxDataChips, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: company?.number_of_vacancies?.toFixed() }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/CompanyFullCardInfo/index.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/CompanyFullCardInfo/index.tsx",
      lineNumber: 24,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/CompanyFullCardInfo/index.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/CompanyFullCardInfo/index.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DataField, { label: t("user:district"), data: getValueLang(company?.city_name, userContext.language) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/CompanyFullCardInfo/index.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DataField, { label: t("user:address"), data: company?.address }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/CompanyFullCardInfo/index.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DataField, { label: t("user:zip_code"), data: company?.zip_code }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/CompanyFullCardInfo/index.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DataField, { label: t("user:phone"), data: company?.phone }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/CompanyFullCardInfo/index.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DataField, { label: t("user:number_of_employees"), data: getValueLang(company?.number_of_employees_name, userContext.language) }, void 0, false, {
      fileName: "app/components/entities/cardComponents/fullCard/CompanyFullCardInfo/index.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/cardComponents/fullCard/CompanyFullCardInfo/index.tsx",
    lineNumber: 18,
    columnNumber: 10
  }, this);
}

// app/components/entities/cardWidgets/CompanyFullCard/index.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function CompanyFullCardWidget({
  company,
  variant
}) {
  const {
    userContext
  } = useApp();
  const widthScreen = useScreenWidth();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BoxCard, { nameCard: VacancyCardEnum.vacancy, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardContainer, { as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, transition: {
    type: "spring",
    bounce: 0,
    duration: 0.4
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CompanyFullCardHeading, { company }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/CompanyFullCard/index.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BoxDataFields, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CompanyFullCardInfo, { company }, void 0, false, {
        fileName: "app/components/entities/cardWidgets/CompanyFullCard/index.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      company?.description && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CompanyFullCardAbout, { company }, void 0, false, {
        fileName: "app/components/entities/cardWidgets/CompanyFullCard/index.tsx",
        lineNumber: 40,
        columnNumber: 36
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/cardWidgets/CompanyFullCard/index.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BoxControlContainer, { variant, typeEntity: EntityVariantEnum.company, id: company?.id, typeCard: SizeCardVariantEnum.full }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/CompanyFullCard/index.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    !userContext?.user?.isAuthenticated && widthScreen >= 1280 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SignInForRequest, { variant: "vacancy" }, void 0, false, {
      fileName: "app/components/entities/cardWidgets/CompanyFullCard/index.tsx",
      lineNumber: 45,
      columnNumber: 72
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/cardWidgets/CompanyFullCard/index.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/entities/cardWidgets/CompanyFullCard/index.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}

// app/components/pages/Search/Vacancies/index.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var SearchVacanciesComponent = (0, import_react3.memo)(({
  vacancies,
  vacancy,
  dictionaries,
  companies,
  company,
  myResumes
}) => {
  const {
    t
  } = useApp();
  const [visibleShare, setVisibleShare] = (0, import_react3.useState)(false);
  const location = useLocation();
  const {
    isSearchCompanyVacancies
  } = useRouteChecks();
  const widthScreen = useScreenWidth();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Box, { gap: "24px", flexDirection: "column", width: "100%", children: [
    isSearchCompanyVacancies && !vacancies?.[0] && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BoxInformation_default, { variant: BoxInformationEnum.info, title: `${t("user:there_are_currently_no_open_positions_at")} ${company?.name || "company"}` }, void 0, false, {
      fileName: "app/components/pages/Search/Vacancies/index.tsx",
      lineNumber: 44,
      columnNumber: 57
    }, this),
    isSearchCompanyVacancies && vacancies?.[0] && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BoxInformation_default, { variant: BoxInformationEnum.info, title: `${t("user:all_open_vacancies_at")} ${company?.name || "company"}` }, void 0, false, {
      fileName: "app/components/pages/Search/Vacancies/index.tsx",
      lineNumber: 45,
      columnNumber: 56
    }, this),
    isSearchCompanyVacancies && widthScreen < 1280 && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CompanyFullCardWidget, { company, variant: PageVariantEnum.search }, void 0, false, {
      fileName: "app/components/pages/Search/Vacancies/index.tsx",
      lineNumber: 47,
      columnNumber: 60
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Box, { flexDirection: "row", gap: "24px", width: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Box, { flexDirection: "row", alignItems: "flex-start", justifyContent: "center", width: "100%", gap: "24px", as: motion.div, initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Box, { flexDirection: "column", width: "100%", gap: widthScreen > 1024 ? "24px" : "16px", style: {
        flex: "1"
      }, children: [
        vacancies?.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(VacancyPartCardWidget, { vacancy: item, selectedVacancy: vacancy?.id, variant: PageVariantEnum.search }, item?.id, false, {
          fileName: "app/components/pages/Search/Vacancies/index.tsx",
          lineNumber: 60,
          columnNumber: 39
        }, this)),
        !isSearchCompanyVacancies && !vacancies?.[0] && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BoxInformation_default, { variant: BoxInformationEnum.info, title: t("user:the_search_has_not_given_any_results_try_changing_your_search_terms"), information: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(List, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ListItem, { children: t("user:try_more_general_keywords") }, void 0, false, {
            fileName: "app/components/pages/Search/Vacancies/index.tsx",
            lineNumber: 63,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ListItem, { children: t("user:try_changing_the_value_of_one_of_the_filters") }, void 0, false, {
            fileName: "app/components/pages/Search/Vacancies/index.tsx",
            lineNumber: 64,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ListItem, { children: t("user:check_your_spelling") }, void 0, false, {
            fileName: "app/components/pages/Search/Vacancies/index.tsx",
            lineNumber: 65,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/Search/Vacancies/index.tsx",
          lineNumber: 62,
          columnNumber: 213
        }, this), flexDirection: "column" }, void 0, false, {
          fileName: "app/components/pages/Search/Vacancies/index.tsx",
          lineNumber: 62,
          columnNumber: 64
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ModalShare, { link: `${CLIENT_BASE_URL}${location.pathname}/${vacancy?.id || ""}`, visibility: visibleShare, setVisibility: setVisibleShare }, void 0, false, {
          fileName: "app/components/pages/Search/Vacancies/index.tsx",
          lineNumber: 68,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/Search/Vacancies/index.tsx",
        lineNumber: 57,
        columnNumber: 13
      }, this),
      vacancy && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BoxSelectedCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(VacancySearchCard, { vacancy, myResumes }, void 0, false, {
        fileName: "app/components/pages/Search/Vacancies/index.tsx",
        lineNumber: 72,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Search/Vacancies/index.tsx",
        lineNumber: 71,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Search/Vacancies/index.tsx",
      lineNumber: 50,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/pages/Search/Vacancies/index.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Search/Vacancies/index.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
});

export {
  CompanyFullCardWidget,
  SearchVacanciesComponent
};
//# sourceMappingURL=/build/_shared/chunk-ETKNO2ES.js.map
