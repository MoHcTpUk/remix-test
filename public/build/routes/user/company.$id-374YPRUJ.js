import {
  BoxWebsite,
  CompanyInformationEdit,
  VerificationStatus,
  Wrapper
} from "/build/_shared/chunk-RTDAH7IZ.js";
import "/build/_shared/chunk-JFP3I7KO.js";
import "/build/_shared/chunk-YB7GJSGU.js";
import {
  CompanyCardEnum
} from "/build/_shared/chunk-B4CRX2YS.js";
import "/build/_shared/chunk-Y237PHJ4.js";
import {
  DataField
} from "/build/_shared/chunk-QGLVK6XR.js";
import {
  CardContainer
} from "/build/_shared/chunk-OGIUXGZ2.js";
import {
  require_message
} from "/build/_shared/chunk-RC3SGAVD.js";
import {
  require_request
} from "/build/_shared/chunk-P6GQFH2U.js";
import "/build/_shared/chunk-RHNN4TA5.js";
import {
  BoxCard,
  VariantCardEnum
} from "/build/_shared/chunk-EWP76DBX.js";
import {
  maskTaxId
} from "/build/_shared/chunk-TCMGB6IX.js";
import "/build/_shared/chunk-KYNJZNBK.js";
import {
  Modal
} from "/build/_shared/chunk-ZQ6IGHYP.js";
import "/build/_shared/chunk-EOBF4VPL.js";
import {
  Button_default
} from "/build/_shared/chunk-AF6HCNMF.js";
import {
  Button
} from "/build/_shared/chunk-NPNOAFIQ.js";
import {
  BoxInformationEnum,
  BoxInformation_default
} from "/build/_shared/chunk-D6JIAAYU.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-WTGWCS5L.js";
import {
  VariantModalEnum
} from "/build/_shared/chunk-TSAGNYDI.js";
import {
  motion
} from "/build/_shared/chunk-47YKAHTX.js";
import {
  Box,
  FONT_SIZES_DESC,
  FONT_WEIGHTS_DESC,
  Icon,
  IconEnum,
  LINE_HEIGHTS_DESC,
  Text,
  TextVariantEnum,
  getValueLang,
  styled_components_browser_esm_default,
  useApp
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  Form,
  Link,
  init_esm,
  useActionData,
  useLoaderData
} from "/build/_shared/chunk-IQJCUQRT.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/user/company.$id.tsx
var import_cloudflare = __toESM(require_cloudflare());
init_esm();

// app/components/pages/User/Companies/Company/index.tsx
init_esm();
var import_react6 = __toESM(require_react());

// app/components/pages/User/Companies/Company/components/CompanyInformation/index.tsx
init_esm();
var import_react4 = __toESM(require_react());

// app/components/entities/ModalVerification/index.tsx
init_esm();

// app/components/entities/ModalVerification/styles.tsx
var BoxContainer = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__BoxContainer",
  componentId: "sc-1anlh21-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;width:100%;max-width:100%;@media (min-width:768px){max-width:458px;}@media (min-width:1024px){max-width:558px;}@media (min-width:1280px){max-width:642px;}& button{align-self:center;}"]);
var ContentWrapper = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__ContentWrapper",
  componentId: "sc-1anlh21-1"
})(["display:flex;flex-direction:column;gap:16px;align-items:center;@media (min-width:768px){gap:24px;}"]);
var HeaderWrapper = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__HeaderWrapper",
  componentId: "sc-1anlh21-2"
})(["display:flex;flex-direction:column;gap:16px;align-items:center;text-align:center;& svg{width:43px;height:48px;}@media (min-width:768px){max-width:430px;& svg{width:50px;height:56px;}.title{font-size:", ";font-weight:", ";line-height:", ";}}"], FONT_SIZES_DESC[TextVariantEnum.textHeading3], FONT_WEIGHTS_DESC[TextVariantEnum.textHeading3], LINE_HEIGHTS_DESC[TextVariantEnum.textHeading3]);
var ItemWrapper = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__ItemWrapper",
  componentId: "sc-1anlh21-3"
})(["display:flex;flex-direction:row;gap:8px;background-color:", ";padding:16px;border-radius:4px;& span{margin-top:2px;}@media (min-width:768px){padding:24px;border-radius:8px;gap:12px;& span{font-size:", ";font-weight:", ";line-height:", ";}}"], ({
  theme
}) => theme.\u0441ards.imageBackground, FONT_SIZES_DESC[TextVariantEnum.textBody1medium], FONT_WEIGHTS_DESC[TextVariantEnum.textBody1medium], LINE_HEIGHTS_DESC[TextVariantEnum.textBody1medium]);

// app/components/entities/ModalVerification/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ModalVerification({
  visibility,
  setVisibility
}) {
  const {
    t,
    theme
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal, { visibility, setVisibility, variant: VariantModalEnum.verification, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContentWrapper, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderWrapper, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.emojiShield }, void 0, false, {
          fileName: "app/components/entities/ModalVerification/index.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { display: "flex", flexDirection: "column", gap: "8px", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textHeading2, className: "title", children: t("user:application_for_verification") }, void 0, false, {
            fileName: "app/components/entities/ModalVerification/index.tsx",
            lineNumber: 29,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: t("user:for_security_reasons_we_need_you_to_confirm_your_connection_with_the_company") }, void 0, false, {
            fileName: "app/components/entities/ModalVerification/index.tsx",
            lineNumber: 32,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/entities/ModalVerification/index.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/entities/ModalVerification/index.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { display: "flex", flexDirection: "column", gap: "16px", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemWrapper, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.blackCamera }, void 0, false, {
            fileName: "app/components/entities/ModalVerification/index.tsx",
            lineNumber: 40,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: t("user:take_a_photo_or_scan_of_your_documents_with_tax_id") }, void 0, false, {
            fileName: "app/components/entities/ModalVerification/index.tsx",
            lineNumber: 41,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/entities/ModalVerification/index.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemWrapper, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.blackWarning }, void 0, false, {
            fileName: "app/components/entities/ModalVerification/index.tsx",
            lineNumber: 46,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: t("user:make_sure_that_in_the_resulting_photo_the_text_and_the_tax_id") }, void 0, false, {
            fileName: "app/components/entities/ModalVerification/index.tsx",
            lineNumber: 47,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/entities/ModalVerification/index.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemWrapper, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.blackMail }, void 0, false, {
            fileName: "app/components/entities/ModalVerification/index.tsx",
            lineNumber: 52,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { display: "flex", flexDirection: "column", gap: "14px", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: [
              t("user:send_a_photo_or_scan_to"),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", onClick: () => {
                window.location.href = "mailto:support@upjob.com?subject=Company Verification";
              }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, color: theme.accentTextColor, style: {
                textDecoration: "underline"
              }, children: "support@upjob.com" }, void 0, false, {
                fileName: "app/components/entities/ModalVerification/index.tsx",
                lineNumber: 59,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/components/entities/ModalVerification/index.tsx",
                lineNumber: 56,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/entities/ModalVerification/index.tsx",
              lineNumber: 54,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, style: {
              fontWeight: "200"
            }, children: t("user:after_you_sent_a_letter_with_documents_to_us_our_moderator_will_check_the_company") }, void 0, false, {
              fileName: "app/components/entities/ModalVerification/index.tsx",
              lineNumber: 66,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/entities/ModalVerification/index.tsx",
            lineNumber: 53,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/entities/ModalVerification/index.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/entities/ModalVerification/index.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/ModalVerification/index.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "secondary", onClick: () => setVisibility(false), className: "growingButton", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: [
      t("common:cancel"),
      " "
    ] }, void 0, true, {
      fileName: "app/components/entities/ModalVerification/index.tsx",
      lineNumber: 77,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/entities/ModalVerification/index.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/ModalVerification/index.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/entities/ModalVerification/index.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationData.tsx
init_esm();
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function CompanyInformationData({
  editCard,
  setEditCard,
  company,
  dictionaries
}) {
  const {
    t,
    theme,
    userContext
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxCard, { title: t("user:general_information"), withEditButton: true, nameCard: CompanyCardEnum.information, editCard, setEditCard, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardContainer, { as: motion.div, initial: {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataField, { label: t("user:company_name"), data: company?.name }, void 0, false, {
      fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationData.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataField, { label: t("user:specialization"), data: getValueLang(company?.specialization_name, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationData.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataField, { label: t("user:phone"), data: company?.phone }, void 0, false, {
      fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationData.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataField, { label: t("user:district"), data: getValueLang(company?.city_name, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationData.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataField, { label: t("user:address"), data: company?.address }, void 0, false, {
      fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationData.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataField, { label: t("user:zip_code"), data: company?.zip_code }, void 0, false, {
      fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationData.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this),
    company?.website && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxWebsite, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataField, { variant: "custom", label: t("user:website_or_facebook_page"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: company?.website || "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { color: theme.accentTextColor, children: company?.website }, void 0, false, {
      fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationData.tsx",
      lineNumber: 52,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationData.tsx",
      lineNumber: 51,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationData.tsx",
      lineNumber: 50,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationData.tsx",
      lineNumber: 49,
      columnNumber: 30
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataField, { label: t("user:number_of_employees"), data: getValueLang(company?.number_of_employees_name, userContext.language) }, void 0, false, {
      fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationData.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataField, { label: t("user:description"), data: company?.description }, void 0, false, {
      fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationData.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationData.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationData.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Companies/Company/components/CompanyInformation/index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function CompanyInformation({
  editCard,
  setEditCard,
  company,
  dictionaries,
  actionData
}) {
  const {
    t,
    theme
  } = useApp();
  const [visibleVerification, setVisibleVerification] = (0, import_react4.useState)(false);
  const handleClickVerification = (e) => {
    e.preventDefault();
    setVisibleVerification(true);
  };
  const buttonShowVacancies = () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: `/user/vacancy?company_id=${company?.id || ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { priority: "secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("common:show") }, void 0, false, {
    fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/index.tsx",
    lineNumber: 51,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/index.tsx",
    lineNumber: 50,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/index.tsx",
    lineNumber: 49,
    columnNumber: 37
  }, this);
  const verificationCard = (company2) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BoxCard, { variant: VariantCardEnum.userCard, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardContainer, { as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, transition: {
    type: "spring",
    bounce: 0,
    duration: 0.4
  }, style: {
    gap: "16px"
  }, withGrowingBtn: true, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { display: "flex", flexDirection: "column", gap: "12px", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(VerificationStatus, { verified: company2?.verified, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Icon, { name: company2?.verified ? IconEnum.attentionVerified : IconEnum.attentionNotVerified }, void 0, false, {
          fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/index.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: company2?.verified ? t("user:company_is_verified") : t("user:verification_is_required") }, void 0, false, {
          fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/index.tsx",
          lineNumber: 71,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/index.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      company2?.verified ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:your_companys_vacancies_can_be_visible_to_other_users") }, void 0, false, {
        fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/index.tsx",
        lineNumber: 76,
        columnNumber: 32
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { display: "flex", flexDirection: "column", gap: "8px", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textHeading3, children: [
          t("user:why_is_verification_needed"),
          " "
        ] }, void 0, true, {
          fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/index.tsx",
          lineNumber: 79,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:we_value_the_safety_of_our_users") }, void 0, false, {
          fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/index.tsx",
          lineNumber: 82,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:after_verification_you_will_be_able_to_post_vacancies") }, void 0, false, {
          fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/index.tsx",
          lineNumber: 85,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/index.tsx",
        lineNumber: 78,
        columnNumber: 23
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/index.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { display: "flex", flexDirection: "column", gap: "8px", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:tax_id") }, void 0, false, {
        fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/index.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DataField, { data: company2?.verified ? maskTaxId(company2?.tax_id) : t("user:company_verification_is_required"), color: theme.backgroundColor }, void 0, false, {
        fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/index.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/index.tsx",
      lineNumber: 91,
      columnNumber: 9
    }, this),
    !company2?.verified && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { priority: "primary", className: "growingButton", onClick: (e) => handleClickVerification(e), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:how_to_verify_a_company") }, void 0, false, {
      fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/index.tsx",
      lineNumber: 97,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/index.tsx",
      lineNumber: 96,
      columnNumber: 32
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/index.tsx",
    lineNumber: 55,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/index.tsx",
    lineNumber: 54,
    columnNumber: 58
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    verificationCard(company),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BoxInformation_default, { variant: BoxInformationEnum.info, title: company?.number_of_vacancies && company?.number_of_vacancies > 0 ? t("user:vacancies_in_this_company") : t("user:this_company_has_no_vacancies_yet"), button: company?.number_of_vacancies && company?.number_of_vacancies > 0 ? () => buttonShowVacancies() : null, flexDirection: "column" }, void 0, false, {
      fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/index.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    editCard === CompanyCardEnum.all && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CompanyInformationData, { editCard, setEditCard, company, dictionaries }, void 0, false, {
      fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/index.tsx",
      lineNumber: 107,
      columnNumber: 44
    }, this),
    editCard === CompanyCardEnum.information && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CompanyInformationEdit, { editCard, setEditCard, company, dictionaries, actionData }, void 0, false, {
      fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/index.tsx",
      lineNumber: 109,
      columnNumber: 52
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ModalVerification, { visibility: visibleVerification, setVisibility: setVisibleVerification }, void 0, false, {
      fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/index.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/index.tsx",
    lineNumber: 101,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Companies/Company/index.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function CompanyComponent({
  company,
  dictionaries,
  actionData
}) {
  const [editCard, setEditCard] = (0, import_react6.useState)(CompanyCardEnum.all);
  (0, import_react6.useEffect)(() => {
    if (actionData?.success)
      setEditCard(CompanyCardEnum.all);
  }, [company]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form, { method: "POST", style: {
    width: "100%"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Wrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CompanyInformation, { company, dictionaries, editCard, setEditCard, actionData }, void 0, false, {
    fileName: "app/components/pages/User/Companies/Company/index.tsx",
    lineNumber: 26,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Companies/Company/index.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Companies/Company/index.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}

// app/routes/user/company.$id.tsx
var import_message = __toESM(require_message());
var import_request = __toESM(require_request());
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function Index() {
  const request = useLoaderData();
  const actionData = useActionData();
  const {
    company
  } = request;
  const {
    dictionaries
  } = request;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CompanyComponent, { company, dictionaries, actionData }, void 0, false, {
    fileName: "app/routes/user/company.$id.tsx",
    lineNumber: 168,
    columnNumber: 10
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/user/company.$id-374YPRUJ.js.map
