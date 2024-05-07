import {
  CreateEntityCard
} from "/build/_shared/chunk-CRASHVW7.js";
import {
  ModalCompanyCreated
} from "/build/_shared/chunk-BPQEWXLC.js";
import {
  BoxButtons,
  BoxControl,
  BoxHeading,
  DataBox,
  Field,
  HeadingInformation
} from "/build/_shared/chunk-GLFTF767.js";
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
  BoxCard,
  VariantCardEnum
} from "/build/_shared/chunk-6J6FMBZW.js";
import {
  ButtonCreate
} from "/build/_shared/chunk-YIHJ7OEM.js";
import {
  Switcher
} from "/build/_shared/chunk-TPPLNXCO.js";
import {
  Modal
} from "/build/_shared/chunk-T7KDPY4G.js";
import "/build/_shared/chunk-NSEFQYWN.js";
import {
  Button_default
} from "/build/_shared/chunk-QD72PUQI.js";
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
import {
  VariantModalEnum
} from "/build/_shared/chunk-4SQREHPC.js";
import {
  motion
} from "/build/_shared/chunk-NC5IH6SX.js";
import {
  AttentionNotVerified_default,
  AttentionVerified_default,
  Box,
  DEFAULT_COMPANY_LOGO,
  FONT_SIZES_DESC,
  FONT_WEIGHTS_DESC,
  Icon,
  IconEnum,
  LINE_HEIGHTS_DESC,
  Text,
  TextVariantEnum,
  getImageUrl,
  getValueLang,
  require_userContext,
  styled_components_browser_esm_default,
  useApp,
  useModalForParams,
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

// app/routes/user/company.tsx
var import_cloudflare = __toESM(require_cloudflare());
init_esm();
var import_react5 = __toESM(require_react());

// app/components/pages/User/Companies/index.tsx
init_esm();
var import_react3 = __toESM(require_react());

// app/components/entities/ModalConfirmDeleteCompany/index.tsx
init_esm();

// app/components/entities/ModalConfirmDeleteCompany/styles.tsx
var BoxContainer = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__BoxContainer",
  componentId: "sc-1ly1fe4-0"
})(["display:flex;flex-direction:column;width:100%;align-items:start;justify-content:center;gap:24px;max-width:100%;"]);
var ContentWrapper = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__ContentWrapper",
  componentId: "sc-1ly1fe4-1"
})(["display:flex;flex-direction:column;width:100%;align-items:center;justify-content:center;gap:16px;max-width:100%;@media (min-width:768px){gap:24px;}"]);
var IconWrapper = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__IconWrapper",
  componentId: "sc-1ly1fe4-2"
})(["display:flex;align-items:center;justify-content:center;svg{height:48px;width:48px;}@media (min-width:768px){svg{height:56px;width:56px;}}"]);
var TextWrapper = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__TextWrapper",
  componentId: "sc-1ly1fe4-3"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:8px;"]);
var TitleWrapper = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__TitleWrapper",
  componentId: "sc-1ly1fe4-4"
})(["display:flex;align-items:center;justify-content:center;width:100%;@media (min-width:768px){align-items:flex-start;& span{font-size:", ";font-weight:", ";line-height:", ";}}"], FONT_SIZES_DESC[TextVariantEnum.textHeading3], FONT_WEIGHTS_DESC[TextVariantEnum.textHeading3], LINE_HEIGHTS_DESC[TextVariantEnum.textHeading3]);
var ButtonsControl = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__ButtonsControl",
  componentId: "sc-1ly1fe4-5"
})(["display:flex;flex-direction:column;align-items:center;justify-content:flex-end;width:100%;gap:16px;& form{width:100%;}@media (min-width:768px){flex-direction:row;& form{width:fit-content;}}"]);

// app/components/entities/ModalConfirmDeleteCompany/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ModalConfirmDeleteCompany({
  visibility,
  setVisibility,
  id,
  isVerifiedCompany,
  setIsVerifiedCompany,
  visibleDeleteSecondStep,
  setVisibleDeleteSecondStep
}) {
  const {
    t
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal, { visibility, setVisibility, variant: VariantModalEnum.confirmDeleteCompany, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContentWrapper, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconWrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.warning }, void 0, false, {
        fileName: "app/components/entities/ModalConfirmDeleteCompany/index.tsx",
        lineNumber: 38,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/entities/ModalConfirmDeleteCompany/index.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextWrapper, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleWrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, children: t("user:delete_company") }, void 0, false, {
          fileName: "app/components/entities/ModalConfirmDeleteCompany/index.tsx",
          lineNumber: 43,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/entities/ModalConfirmDeleteCompany/index.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: !isVerifiedCompany ? t("user:are_you_sure_you_want_to_delete_this_company") : t("user:are_you_sure_you_want_to_delete_this_verified_company") }, void 0, false, {
          fileName: "app/components/entities/ModalConfirmDeleteCompany/index.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/entities/ModalConfirmDeleteCompany/index.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxInformation_default, { variant: BoxInformationEnum.warning, title: t("user:read_this_before_you_take_action"), information: !isVerifiedCompany ? t("user:when_you_delete_a_company_all_vacancies_associated_with_it_will_also_be_deleted_and_cannot_be_restored") : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListItem, { children: t("user:when_you_delete_a_company_all_vacancies_associated_with_it_will_also_be_deleted_and_cannot_be_restored") }, void 0, false, {
          fileName: "app/components/entities/ModalConfirmDeleteCompany/index.tsx",
          lineNumber: 52,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/components/entities/ModalConfirmDeleteCompany/index.tsx",
          lineNumber: 55,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListItem, { children: t("user:this_company_is_verified_and_if_you_delete_it_you_will_have_to_go_through_verification_again") }, void 0, false, {
          fileName: "app/components/entities/ModalConfirmDeleteCompany/index.tsx",
          lineNumber: 56,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/entities/ModalConfirmDeleteCompany/index.tsx",
        lineNumber: 51,
        columnNumber: 264
      }, this), noShadow: true }, void 0, false, {
        fileName: "app/components/entities/ModalConfirmDeleteCompany/index.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/ModalConfirmDeleteCompany/index.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonsControl, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "DELETE", preventScrollReset: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", value: id }, void 0, false, {
          fileName: "app/components/entities/ModalConfirmDeleteCompany/index.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "secondary", value: "delete", name: "action", className: "growingButton", type: "submit", onClick: (event) => {
          setVisibility(false);
          if (isVerifiedCompany === true) {
            event?.preventDefault();
            setVisibleDeleteSecondStep(true);
          }
          setIsVerifiedCompany(false);
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:i_understand_lets_delete_company") }, void 0, false, {
          fileName: "app/components/entities/ModalConfirmDeleteCompany/index.tsx",
          lineNumber: 73,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/entities/ModalConfirmDeleteCompany/index.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/entities/ModalConfirmDeleteCompany/index.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "primary", onClick: () => {
        setVisibility(false);
        setIsVerifiedCompany(false);
      }, className: "growingButton", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("common:cancel") }, void 0, false, {
        fileName: "app/components/entities/ModalConfirmDeleteCompany/index.tsx",
        lineNumber: 83,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/entities/ModalConfirmDeleteCompany/index.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/ModalConfirmDeleteCompany/index.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/ModalConfirmDeleteCompany/index.tsx",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/entities/ModalConfirmDeleteCompany/index.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Companies/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var CompaniesComponent = (0, import_react3.memo)(({
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
  const [visibleDelete, setVisibleDelete] = (0, import_react3.useState)(false);
  const [visibleDeleteSecondStep, setVisibleDeleteSecondStep] = (0, import_react3.useState)(false);
  const [deleteSelectedId, setSelectedId] = (0, import_react3.useState)("");
  const [isVerifiedCompany, setIsVerifiedCompany] = (0, import_react3.useState)(false);
  const handleClickDelete = (id, verified) => {
    setSelectedId(id || "");
    setVisibleDelete(true);
    if (verified) {
      setIsVerifiedCompany(verified);
    }
  };
  const hasNotVerifiedCompanies = companies?.some((company) => company?.verified === false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { flexDirection: "column", width: "100%", gap: widthScreen > 1024 ? "24px" : "16px", as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, children: [
    hasNotVerifiedCompanies && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxInformation_default, { variant: BoxInformationEnum.warning, title: t("user:you_have_unverified_companies"), flexDirection: "column" }, void 0, false, {
      fileName: "app/components/pages/User/Companies/index.tsx",
      lineNumber: 72,
      columnNumber: 37
    }, this),
    companies?.map((company) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxCard, { variant: VariantCardEnum.userCard, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: company?.id || "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxHeading, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: company?.logo_uri ? getImageUrl(company?.logo_uri) : DEFAULT_COMPANY_LOGO, alt: "company logo" }, void 0, false, {
          fileName: "app/components/pages/User/Companies/index.tsx",
          lineNumber: 77,
          columnNumber: 17
        }, this),
        company?.verified ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AttentionVerified_default, {}, void 0, false, {
          fileName: "app/components/pages/User/Companies/index.tsx",
          lineNumber: 79,
          columnNumber: 38
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AttentionNotVerified_default, {}, void 0, false, {
          fileName: "app/components/pages/User/Companies/index.tsx",
          lineNumber: 79,
          columnNumber: 65
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HeadingInformation, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { className: "title", variant: TextVariantEnum.textHeading2, children: company.name }, void 0, false, {
            fileName: "app/components/pages/User/Companies/index.tsx",
            lineNumber: 82,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, color: theme.user.descriptionTextColor, children: getValueLang(company?.specialization_name, userContext.language) }, void 0, false, {
            fileName: "app/components/pages/User/Companies/index.tsx",
            lineNumber: 85,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/User/Companies/index.tsx",
          lineNumber: 81,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/User/Companies/index.tsx",
        lineNumber: 76,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/pages/User/Companies/index.tsx",
        lineNumber: 75,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataBox, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Field, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, color: theme.user.descriptionTextColor, children: t("user:vacancies") }, void 0, false, {
            fileName: "app/components/pages/User/Companies/index.tsx",
            lineNumber: 94,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: company.number_of_vacancies }, void 0, false, {
            fileName: "app/components/pages/User/Companies/index.tsx",
            lineNumber: 97,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/User/Companies/index.tsx",
          lineNumber: 93,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Field, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, color: theme.user.descriptionTextColor, children: t("user:opened_vacancies") }, void 0, false, {
            fileName: "app/components/pages/User/Companies/index.tsx",
            lineNumber: 100,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: company.number_of_vacancies }, void 0, false, {
            fileName: "app/components/pages/User/Companies/index.tsx",
            lineNumber: 103,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/User/Companies/index.tsx",
          lineNumber: 99,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Field, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, color: theme.user.descriptionTextColor, children: t("user:users") }, void 0, false, {
            fileName: "app/components/pages/User/Companies/index.tsx",
            lineNumber: 106,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: getValueLang(company?.number_of_employees_name, userContext.language) }, void 0, false, {
            fileName: "app/components/pages/User/Companies/index.tsx",
            lineNumber: 109,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/User/Companies/index.tsx",
          lineNumber: 105,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/User/Companies/index.tsx",
        lineNumber: 92,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxControl, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "PATCH", onChange: handleChangeForm, preventScrollReset: true, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "id", value: company?.id }, void 0, false, {
            fileName: "app/components/pages/User/Companies/index.tsx",
            lineNumber: 117,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "action", value: "published" }, void 0, false, {
            fileName: "app/components/pages/User/Companies/index.tsx",
            lineNumber: 118,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "publish", value: company?.published ? "false" : "true" }, void 0, false, {
            fileName: "app/components/pages/User/Companies/index.tsx",
            lineNumber: 119,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "verified", value: company?.verified.toString() }, void 0, false, {
            fileName: "app/components/pages/User/Companies/index.tsx",
            lineNumber: 120,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Switcher, { checked: Boolean(company?.published), htmlLabel: company?.id, name: "published", variant: "default", checkedLabel: t("user:published"), unCheckedLabel: t("user:published"), control: true }, void 0, false, {
            fileName: "app/components/pages/User/Companies/index.tsx",
            lineNumber: 122,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/User/Companies/index.tsx",
          lineNumber: 116,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxButtons, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { className: "icon", priority: "secondary", onlyIcon: true, onClick: () => handleClickDelete(company?.id, company?.verified), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { name: IconEnum.cart, color: theme.user.iconColor }, void 0, false, {
            fileName: "app/components/pages/User/Companies/index.tsx",
            lineNumber: 127,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/pages/User/Companies/index.tsx",
            lineNumber: 126,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "POST", preventScrollReset: true, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "id", value: company.id }, void 0, false, {
              fileName: "app/components/pages/User/Companies/index.tsx",
              lineNumber: 131,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { type: "submit", className: "icon", priority: "secondary", onlyIcon: true, value: "copy", name: "action", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { name: IconEnum.copy, color: theme.user.iconColor }, void 0, false, {
              fileName: "app/components/pages/User/Companies/index.tsx",
              lineNumber: 133,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/pages/User/Companies/index.tsx",
              lineNumber: 132,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/User/Companies/index.tsx",
            lineNumber: 130,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: company?.id || "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { className: "icon", priority: "secondary", onlyIcon: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { name: IconEnum.view, color: theme.user.iconColor }, void 0, false, {
            fileName: "app/components/pages/User/Companies/index.tsx",
            lineNumber: 139,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/pages/User/Companies/index.tsx",
            lineNumber: 138,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/pages/User/Companies/index.tsx",
            lineNumber: 137,
            columnNumber: 17
          }, this),
          company && company?.number_of_vacancies === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            ButtonCreate,
            {
              variant: "vacancy",
              priority: "primary"
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/User/Companies/index.tsx",
              lineNumber: 143,
              columnNumber: 66
            },
            this
          ) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: company?.id || "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { priority: "primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { style: {
            whiteSpace: "nowrap"
          }, variant: TextVariantEnum.textBody2, children: t("user:show_vacancies") }, void 0, false, {
            fileName: "app/components/pages/User/Companies/index.tsx",
            lineNumber: 148,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/components/pages/User/Companies/index.tsx",
            lineNumber: 147,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/pages/User/Companies/index.tsx",
            lineNumber: 146,
            columnNumber: 16
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/User/Companies/index.tsx",
          lineNumber: 125,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/User/Companies/index.tsx",
        lineNumber: 115,
        columnNumber: 13
      }, this),
      actionData?.id === company.id && actionData?.formError?.[userContext.language] && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, color: theme.errorTextColor, children: actionData?.formError?.[userContext.language] }, void 0, false, {
        fileName: "app/components/pages/User/Companies/index.tsx",
        lineNumber: 157,
        columnNumber: 96
      }, this)
    ] }, company?.id, true, {
      fileName: "app/components/pages/User/Companies/index.tsx",
      lineNumber: 74,
      columnNumber: 36
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ModalConfirmDelete, { id: deleteSelectedId, visibility: visibleDeleteSecondStep, setVisibility: setVisibleDeleteSecondStep }, void 0, false, {
      fileName: "app/components/pages/User/Companies/index.tsx",
      lineNumber: 161,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ModalConfirmDeleteCompany, { id: deleteSelectedId, visibility: visibleDelete, setVisibility: setVisibleDelete, isVerifiedCompany, setIsVerifiedCompany, visibleDeleteSecondStep, setVisibleDeleteSecondStep }, void 0, false, {
      fileName: "app/components/pages/User/Companies/index.tsx",
      lineNumber: 162,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Companies/index.tsx",
    lineNumber: 65,
    columnNumber: 10
  }, this);
});

// app/routes/user/company.tsx
var import_message = __toESM(require_message());
var import_userContext = __toESM(require_userContext());
var import_request = __toESM(require_request());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var BoxPagination = styled_components_browser_esm_default.div.withConfig({
  displayName: "company__BoxPagination",
  componentId: "sc-sn2dwc-0"
})(["width:100%;display:flex;justify-content:center;max-width:920px;margin:16px 0;flex-direction:row;gap:16px;@media (min-width:1024px){margin:24px 0;gap:24px;}@media (min-width:1280px){max-width:100%;}"]);
function Index() {
  const request = useLoaderData();
  const actionData = useActionData();
  const widthScreen = useScreenWidth();
  const submit = useSubmit();
  const formRef = (0, import_react5.useRef)(null);
  const {
    dictionaries,
    pagination
  } = request;
  const [maxPageSize, setMaxPageSize] = (0, import_react5.useState)(+pagination?.max_page_size || 10);
  const [currentPage, setCurrentPage] = (0, import_react5.useState)(+pagination?.current_page || 1);
  const [currentToken, setCurrentToken] = (0, import_react5.useState)(pagination?.current_token || void 0);
  const handleSubmit = () => {
    submit(formRef.current, {
      preventScrollReset: true
    });
  };
  const {
    visibilityModal,
    setVisibilityModal
  } = useModalForParams("create");
  return request.companies?.data.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { flexDirection: "column", width: "100%", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CompaniesComponent, { actionData, companies: request.companies?.data, dictionaries }, void 0, false, {
      fileName: "app/routes/user/company.tsx",
      lineNumber: 257,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ModalCompanyCreated, { visibility: visibilityModal, setVisibility: setVisibilityModal, company: request.companies?.data[0]?.id }, void 0, false, {
      fileName: "app/routes/user/company.tsx",
      lineNumber: 259,
      columnNumber: 7
    }, this),
    pagination?.maxPages && pagination?.maxPages > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form, { method: "GET", style: {
      width: "100%",
      margin: widthScreen > 1280 ? "24px 0" : "16px 0"
    }, onChange: handleSubmit, ref: formRef, preventScrollReset: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Pagination, { currentPage, setCurrentPage, setCurrentToken, paginationRange: pagination?.paginationRange, maxPages: pagination.maxPages, maxPageSize, setMaxPageSize, handleSubmit, widthScreen }, void 0, false, {
        fileName: "app/routes/user/company.tsx",
        lineNumber: 265,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "current_page", value: currentPage }, void 0, false, {
        fileName: "app/routes/user/company.tsx",
        lineNumber: 266,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "current_token", value: currentToken }, void 0, false, {
        fileName: "app/routes/user/company.tsx",
        lineNumber: 267,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "max_pages", value: pagination?.maxPages }, void 0, false, {
        fileName: "app/routes/user/company.tsx",
        lineNumber: 268,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user/company.tsx",
      lineNumber: 261,
      columnNumber: 60
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user/company.tsx",
    lineNumber: 256,
    columnNumber: 47
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CreateEntityCard, {}, void 0, false, {
    fileName: "app/routes/user/company.tsx",
    lineNumber: 270,
    columnNumber: 14
  }, this);
}
export {
  Index as default
};
