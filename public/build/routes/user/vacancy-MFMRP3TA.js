import {
  CreateEntityCard
} from "/build/_shared/chunk-CRASHVW7.js";
import {
  BoxButtons,
  BoxControl,
  BoxHeading,
  DataBox,
  Field,
  HeadingInformation
} from "/build/_shared/chunk-XQMFZUMJ.js";
import {
  ModalConfirmDelete
} from "/build/_shared/chunk-RCGFGPYD.js";
import {
  require_message
} from "/build/_shared/chunk-ULBVCC7P.js";
import {
  require_request
} from "/build/_shared/chunk-EISN5MP4.js";
import "/build/_shared/chunk-XQTDVHWG.js";
import {
  Pagination
} from "/build/_shared/chunk-BWZCXOOY.js";
import {
  Select
} from "/build/_shared/chunk-BXFA34ZG.js";
import {
  BoxCard,
  VariantCardEnum
} from "/build/_shared/chunk-6J6FMBZW.js";
import "/build/_shared/chunk-YIHJ7OEM.js";
import {
  Switcher
} from "/build/_shared/chunk-TPPLNXCO.js";
import "/build/_shared/chunk-LQ4YPZYM.js";
import "/build/_shared/chunk-T7KDPY4G.js";
import "/build/_shared/chunk-NSEFQYWN.js";
import {
  Button_default
} from "/build/_shared/chunk-QD72PUQI.js";
import "/build/_shared/chunk-GEH4KW55.js";
import {
  BoxInformationEnum,
  BoxInformation_default
} from "/build/_shared/chunk-MYIBCQY6.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-ASV7D43C.js";
import "/build/_shared/chunk-4SQREHPC.js";
import {
  motion
} from "/build/_shared/chunk-NC5IH6SX.js";
import {
  Attention_default,
  Box,
  DEFAULT_COMPANY_LOGO,
  Icon,
  IconEnum,
  Text,
  TextVariantEnum,
  checkCompleteness,
  extractCompanyData,
  getImageUrl,
  getSalary,
  getValueLang,
  require_userContext,
  styled_components_browser_esm_default,
  useApp,
  useCheckIncompleteEntityInList,
  useScreenWidth
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  Form,
  Link,
  init_esm,
  useActionData,
  useLoaderData,
  useSubmit
} from "/build/_shared/chunk-JX76WC46.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6O7TW4X6.js";
import {
  __toESM
} from "/build/_shared/chunk-RFITDC3A.js";

// app/routes/user/vacancy.tsx
var import_cloudflare = __toESM(require_cloudflare());
init_esm();
var import_react4 = __toESM(require_react());

// app/components/pages/User/Vacancies/index.tsx
init_esm();
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var VacanciesComponent = (0, import_react2.memo)(({
  vacancies,
  dictionaries,
  companies,
  actionData
}) => {
  const {
    theme,
    t,
    userContext
  } = useApp();
  const widthScreen = useScreenWidth();
  const submit = useSubmit();
  const handleChangeForm = (event) => {
    event.preventDefault();
    const action = event.target.name;
    const formElement = event.currentTarget;
    if (action === "published") {
      submit(formElement, {
        preventScrollReset: true
      });
    }
  };
  const [visibleDelete, setVisibleDelete] = (0, import_react2.useState)(false);
  const [deleteSelectedId, setSelectedId] = (0, import_react2.useState)("");
  const handleClickDelete = (id) => {
    setSelectedId(id || "");
    setVisibleDelete(true);
  };
  const hasIncompleteVacancy = useCheckIncompleteEntityInList(null, vacancies);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", width: "100%", gap: widthScreen > 1024 ? "24px" : "16px", as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, children: [
    hasIncompleteVacancy && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxInformation_default, { variant: BoxInformationEnum.warning, title: t("user:you_have_incomplete_vacancies"), flexDirection: "column" }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/index.tsx",
      lineNumber: 68,
      columnNumber: 34
    }, this),
    vacancies?.map((vacancy) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxCard, { variant: VariantCardEnum.userCard, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: vacancy?.id || "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxHeading, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: vacancy?.company_logo_uri ? getImageUrl(vacancy?.company_logo_uri) : DEFAULT_COMPANY_LOGO, alt: "company logo" }, void 0, false, {
          fileName: "app/components/pages/User/Vacancies/index.tsx",
          lineNumber: 73,
          columnNumber: 17
        }, this),
        !checkCompleteness(null, vacancy) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Attention_default, {}, void 0, false, {
          fileName: "app/components/pages/User/Vacancies/index.tsx",
          lineNumber: 74,
          columnNumber: 55
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadingInformation, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "title", variant: TextVariantEnum.textHeading2, children: vacancy.vacancy_page?.position }, void 0, false, {
            fileName: "app/components/pages/User/Vacancies/index.tsx",
            lineNumber: 77,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, color: theme.user.descriptionTextColor, children: vacancy?.contacts?.company_name }, void 0, false, {
            fileName: "app/components/pages/User/Vacancies/index.tsx",
            lineNumber: 80,
            columnNumber: 19
          }, this),
          (vacancy?.vacancy_page?.salary_fixed || vacancy.vacancy_page?.salary_from && vacancy.vacancy_page?.salary_to) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: vacancy.vacancy_page?.salary_from && vacancy.vacancy_page?.salary_to ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "price", variant: TextVariantEnum.textHeading3, children: [
            vacancy.vacancy_page?.salary_from,
            " - ",
            vacancy.vacancy_page?.salary_to,
            "\xA0",
            getSalary(vacancy.vacancy_page.currency_name?.en, vacancy.vacancy_page.salary_payout_period_name?.en, userContext.language)
          ] }, void 0, true, {
            fileName: "app/components/pages/User/Vacancies/index.tsx",
            lineNumber: 85,
            columnNumber: 95
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "price", variant: TextVariantEnum.textHeading3, children: [
            vacancy.vacancy_page?.salary_fixed,
            "\xA0",
            getSalary(vacancy.vacancy_page.currency_name?.en, vacancy.vacancy_page.salary_payout_period_name?.en, userContext.language)
          ] }, void 0, true, {
            fileName: "app/components/pages/User/Vacancies/index.tsx",
            lineNumber: 89,
            columnNumber: 35
          }, this) }, void 0, false, {
            fileName: "app/components/pages/User/Vacancies/index.tsx",
            lineNumber: 84,
            columnNumber: 133
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/User/Vacancies/index.tsx",
          lineNumber: 76,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/User/Vacancies/index.tsx",
        lineNumber: 72,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/pages/User/Vacancies/index.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataBox, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, color: theme.user.descriptionTextColor, children: t("user:district") }, void 0, false, {
            fileName: "app/components/pages/User/Vacancies/index.tsx",
            lineNumber: 100,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: getValueLang(vacancy.location?.city_name, userContext.language) }, void 0, false, {
            fileName: "app/components/pages/User/Vacancies/index.tsx",
            lineNumber: 103,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/User/Vacancies/index.tsx",
          lineNumber: 99,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, color: theme.user.descriptionTextColor, children: t("user:employment") }, void 0, false, {
            fileName: "app/components/pages/User/Vacancies/index.tsx",
            lineNumber: 108,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", gap: "4px", flexWrap: "wrap", children: vacancy.vacancy_page?.employment_type_names?.map((employment) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: getValueLang(employment, userContext.language) }, employment[userContext.language], false, {
            fileName: "app/components/pages/User/Vacancies/index.tsx",
            lineNumber: 112,
            columnNumber: 83
          }, this)) }, void 0, false, {
            fileName: "app/components/pages/User/Vacancies/index.tsx",
            lineNumber: 111,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/User/Vacancies/index.tsx",
          lineNumber: 107,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, color: theme.user.descriptionTextColor, children: t("user:work_features") }, void 0, false, {
            fileName: "app/components/pages/User/Vacancies/index.tsx",
            lineNumber: 118,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", gap: "4px", flexWrap: "wrap", children: vacancy.vacancy_page?.work_feature_names?.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: getValueLang(feature, userContext.language) }, feature[userContext.language], false, {
            fileName: "app/components/pages/User/Vacancies/index.tsx",
            lineNumber: 122,
            columnNumber: 77
          }, this)) }, void 0, false, {
            fileName: "app/components/pages/User/Vacancies/index.tsx",
            lineNumber: 121,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/User/Vacancies/index.tsx",
          lineNumber: 117,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/User/Vacancies/index.tsx",
        lineNumber: 98,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxControl, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "PATCH", onChange: (event) => handleChangeForm(event), preventScrollReset: true, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", value: vacancy?.id }, void 0, false, {
            fileName: "app/components/pages/User/Vacancies/index.tsx",
            lineNumber: 131,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "action", value: "published" }, void 0, false, {
            fileName: "app/components/pages/User/Vacancies/index.tsx",
            lineNumber: 132,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "company_verified", value: vacancy?.company_verified?.toString() }, void 0, false, {
            fileName: "app/components/pages/User/Vacancies/index.tsx",
            lineNumber: 133,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "publish", value: vacancy?.published ? "false" : "true" }, void 0, false, {
            fileName: "app/components/pages/User/Vacancies/index.tsx",
            lineNumber: 134,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "checkFields", value: checkCompleteness(null, vacancy)?.toString() }, void 0, false, {
            fileName: "app/components/pages/User/Vacancies/index.tsx",
            lineNumber: 135,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switcher, { checked: Boolean(vacancy?.published), htmlLabel: vacancy?.id, name: "published", variant: "default", checkedLabel: t("user:published"), unCheckedLabel: t("user:published"), control: true }, void 0, false, {
            fileName: "app/components/pages/User/Vacancies/index.tsx",
            lineNumber: 136,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/User/Vacancies/index.tsx",
          lineNumber: 130,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxButtons, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "DELETE", preventScrollReset: true, style: {
            width: "fit-content"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", value: vacancy?.id }, void 0, false, {
              fileName: "app/components/pages/User/Vacancies/index.tsx",
              lineNumber: 143,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: "icon", priority: "secondary", onlyIcon: true, onClick: () => handleClickDelete(vacancy?.id), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.cart, color: theme.user.iconColor }, void 0, false, {
              fileName: "app/components/pages/User/Vacancies/index.tsx",
              lineNumber: 145,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/pages/User/Vacancies/index.tsx",
              lineNumber: 144,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/User/Vacancies/index.tsx",
            lineNumber: 140,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", preventScrollReset: true, style: {
            width: "fit-content"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", value: vacancy.id }, void 0, false, {
              fileName: "app/components/pages/User/Vacancies/index.tsx",
              lineNumber: 152,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "submit", className: "icon", priority: "secondary", onlyIcon: true, value: "copy", name: "action", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.copy, color: theme.user.iconColor }, void 0, false, {
              fileName: "app/components/pages/User/Vacancies/index.tsx",
              lineNumber: 154,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/pages/User/Vacancies/index.tsx",
              lineNumber: 153,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/User/Vacancies/index.tsx",
            lineNumber: 149,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: vacancy?.id || "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: "icon", priority: "secondary", onlyIcon: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.view, color: theme.user.iconColor }, void 0, false, {
            fileName: "app/components/pages/User/Vacancies/index.tsx",
            lineNumber: 160,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/pages/User/Vacancies/index.tsx",
            lineNumber: 159,
            columnNumber: 19
          }, this) }, vacancy.id, false, {
            fileName: "app/components/pages/User/Vacancies/index.tsx",
            lineNumber: 158,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/User/Vacancies/index.tsx",
          lineNumber: 139,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/User/Vacancies/index.tsx",
        lineNumber: 129,
        columnNumber: 13
      }, this)
    ] }, vacancy?.id, true, {
      fileName: "app/components/pages/User/Vacancies/index.tsx",
      lineNumber: 70,
      columnNumber: 36
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalConfirmDelete, { id: deleteSelectedId, visibility: visibleDelete, setVisibility: setVisibleDelete }, void 0, false, {
      fileName: "app/components/pages/User/Vacancies/index.tsx",
      lineNumber: 166,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Vacancies/index.tsx",
    lineNumber: 61,
    columnNumber: 10
  }, this);
});

// app/routes/user/vacancy.tsx
var import_message = __toESM(require_message());
var import_userContext = __toESM(require_userContext());
var import_request = __toESM(require_request());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var BoxPagination = styled_components_browser_esm_default.div.withConfig({
  displayName: "vacancy__BoxPagination",
  componentId: "sc-1wvbola-0"
})(["width:100%;display:flex;justify-content:center;max-width:920px;margin:16px 0;flex-direction:row;gap:16px;@media (min-width:1024px){margin:24px 0;gap:24px;}@media (min-width:1280px){max-width:100%;}"]);
var FilterContent2 = styled_components_browser_esm_default.div.withConfig({
  displayName: "vacancy__FilterContent",
  componentId: "sc-1wvbola-1"
})(["display:flex;flex-direction:column;gap:16px;"]);
function Index() {
  const request = useLoaderData();
  const actionData = useActionData();
  const {
    theme,
    t
  } = useApp();
  const widthScreen = useScreenWidth();
  const submit = useSubmit();
  const formRef = (0, import_react4.useRef)(null);
  const formFilterVacanciesRef = (0, import_react4.useRef)(null);
  const {
    dictionaries,
    pagination,
    filters
  } = request;
  const [maxPageSize, setMaxPageSize] = (0, import_react4.useState)(+pagination?.max_page_size || 10);
  const [currentPage, setCurrentPage] = (0, import_react4.useState)(+pagination?.current_page || 1);
  const [currentToken, setCurrentToken] = (0, import_react4.useState)(pagination?.current_token || void 0);
  const handleSubmit = () => {
    submit(formRef.current, {
      preventScrollReset: true
    });
    submit(formFilterVacanciesRef.current, {
      preventScrollReset: true
    });
  };
  const [initialRendering, setInitialRendering] = (0, import_react4.useState)(false);
  const [filteredVacancies, setFilteredVacancies] = (0, import_react4.useState)([]);
  (0, import_react4.useEffect)(() => {
    if (!filters.by_company) {
      setInitialRendering(true);
    }
    if (initialRendering || !initialRendering && filters.by_company) {
      if (filters.by_company) {
        setFilteredVacancies([filters?.by_company]);
      } else {
        setFilteredVacancies([]);
      }
    }
  }, [filters.by_company]);
  (0, import_react4.useEffect)(() => {
    if (filteredVacancies !== void 0 && filteredVacancies?.[0] !== void 0 && filteredVacancies?.[0] !== filters?.by_company && formFilterVacanciesRef?.current) {
      if (initialRendering) {
        handleSubmit();
      } else {
        setInitialRendering(true);
      }
    }
  }, [filteredVacancies]);
  function getFilterEntriesOfVacancies(data) {
    const companiesWithVacancies = data?.filter((item) => item.number_of_vacancies && item.number_of_vacancies > 0);
    const allVacanciesFilter = ["", t("user:all_vacancies")];
    const result = [allVacanciesFilter, ...extractCompanyData(companiesWithVacancies)];
    return result;
  }
  const filterEntries = getFilterEntriesOfVacancies(request.companies.data);
  return request.vacancies.data.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { flexDirection: "column", width: "100%", gap: widthScreen < 1024 ? "16px" : "24px", children: [
    filterEntries[1] && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxCard, { variant: VariantCardEnum.editCard, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FilterContent2, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textHeading3, color: theme.defaultTextColor, children: t("common:filters") }, void 0, false, {
        fileName: "app/routes/user/vacancy.tsx",
        lineNumber: 356,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "GET", style: {
        width: "100%"
      }, onChange: handleSubmit, ref: formFilterVacanciesRef, preventScrollReset: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Select, { entries: filterEntries, placeholder: t("user:all_vacancies"), values: filteredVacancies, setExternalState: setFilteredVacancies, id: "company_id", name: "company_id", className: "vacancyFilter" }, void 0, false, {
        fileName: "app/routes/user/vacancy.tsx",
        lineNumber: 362,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/user/vacancy.tsx",
        lineNumber: 359,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user/vacancy.tsx",
      lineNumber: 355,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/user/vacancy.tsx",
      lineNumber: 354,
      columnNumber: 28
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(VacanciesComponent, { actionData, vacancies: request.vacancies.data, companies: request.companies.data, dictionaries }, void 0, false, {
      fileName: "app/routes/user/vacancy.tsx",
      lineNumber: 367,
      columnNumber: 7
    }, this),
    pagination?.maxPages && pagination?.maxPages > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "GET", style: {
      width: "100%",
      margin: widthScreen > 1280 ? "24px 0" : "16px 0"
    }, onChange: handleSubmit, ref: formRef, preventScrollReset: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Pagination, { currentPage, setCurrentPage, setCurrentToken, paginationRange: pagination?.paginationRange, maxPages: pagination.maxPages, maxPageSize, setMaxPageSize, handleSubmit, widthScreen }, void 0, false, {
        fileName: "app/routes/user/vacancy.tsx",
        lineNumber: 373,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "current_page", value: currentPage }, void 0, false, {
        fileName: "app/routes/user/vacancy.tsx",
        lineNumber: 374,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "current_token", value: currentToken }, void 0, false, {
        fileName: "app/routes/user/vacancy.tsx",
        lineNumber: 375,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "max_pages", value: pagination?.maxPages }, void 0, false, {
        fileName: "app/routes/user/vacancy.tsx",
        lineNumber: 376,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user/vacancy.tsx",
      lineNumber: 369,
      columnNumber: 60
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user/vacancy.tsx",
    lineNumber: 353,
    columnNumber: 46
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CreateEntityCard, {}, void 0, false, {
    fileName: "app/routes/user/vacancy.tsx",
    lineNumber: 378,
    columnNumber: 14
  }, this);
}
export {
  Index as default
};
