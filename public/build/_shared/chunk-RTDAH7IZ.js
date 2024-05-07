import {
  UploadingImageModal
} from "/build/_shared/chunk-JFP3I7KO.js";
import {
  BoxFields
} from "/build/_shared/chunk-YB7GJSGU.js";
import {
  CompanyCardEnum
} from "/build/_shared/chunk-B4CRX2YS.js";
import {
  BoxAvatar
} from "/build/_shared/chunk-Y237PHJ4.js";
import {
  CardContainer
} from "/build/_shared/chunk-OGIUXGZ2.js";
import {
  Select
} from "/build/_shared/chunk-RHNN4TA5.js";
import {
  BoxCard,
  VariantCardEnum
} from "/build/_shared/chunk-EWP76DBX.js";
import {
  Input
} from "/build/_shared/chunk-TCMGB6IX.js";
import {
  Button_default
} from "/build/_shared/chunk-AF6HCNMF.js";
import {
  motion
} from "/build/_shared/chunk-47YKAHTX.js";
import {
  DEFAULT_COMPANY_LOGO,
  Text,
  TextVariantEnum,
  extractTitles,
  extractTitlesNewWay,
  getImageUrl,
  styled_components_browser_esm_default,
  useApp
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationEdit.tsx
var import_react = __toESM(require_react());

// app/components/pages/User/Companies/Company/components/CompanyInformation/styles.ts
var BoxPicture = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;
var Image = styled_components_browser_esm_default.img`
  width: 96px;
  height: 96px;
  object-fit: cover;
  border-radius: 50%;
  @media (min-width: 768px) {
    width: 136px;
    height: 136px;
  }
`;
var BoxWebsite = styled_components_browser_esm_default.div`
  padding: 8px 0;
`;
var VerificationStatus = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;

  & > span {
    margin-top: 3px;
    color: ${({ theme, verified }) => verified ? theme.accentTextColor : theme.boxInformation.warning.borderColor};
  }
`;

// app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationEdit.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function CompanyInformationEdit({
  editCard,
  setEditCard,
  state,
  step,
  company,
  dictionaries,
  actionData
}) {
  const {
    t,
    userContext,
    theme
  } = useApp();
  const [photo, setPhoto] = (0, import_react.useState)(company?.logo_uri ? getImageUrl(company?.logo_uri) : DEFAULT_COMPANY_LOGO);
  const [showUploader, setShowUploader] = (0, import_react.useState)(false);
  const [errorTextForImage, setErrorTextForImage] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    if (!photo?.startsWith("data:image/jpg") && !photo?.startsWith("data:image/jpeg") && !photo?.startsWith("https://api.test.upjob.com/m") && !photo?.startsWith("/images/user") && photo) {
      setErrorTextForImage(true);
    } else {
      setErrorTextForImage(false);
    }
  }, [photo]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxCard, { title: t("user:general_information"), withEditButton: true, nameCard: CompanyCardEnum.information, editCard, setEditCard, state, step, maxStep: 1, variant: VariantCardEnum.editCard, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContainer, { as: motion.div, initial: {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxPicture, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, children: t("user:profile_picture") }, void 0, false, {
        fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationEdit.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxAvatar, { variant: "user", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "logo", value: photo }, void 0, false, {
          fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationEdit.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { src: photo || DEFAULT_COMPANY_LOGO, alt: "avatar" }, void 0, false, {
          fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationEdit.tsx",
          lineNumber: 71,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "secondary", onClick: () => setShowUploader(!showUploader), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: [
          " ",
          t("user:edit_photo")
        ] }, void 0, true, {
          fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationEdit.tsx",
          lineNumber: 73,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationEdit.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationEdit.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      errorTextForImage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textSmall, color: theme.errorTextColor, children: t("user:image_type_must_be_jpeg") }, void 0, false, {
        fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationEdit.tsx",
        lineNumber: 76,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UploadingImageModal, { visibility: showUploader, setVisibility: setShowUploader, defaultImage: photo, setDefaultImage: setPhoto }, void 0, false, {
        fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationEdit.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationEdit.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxFields, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { placeholder: t("user:company_name"), id: "name", name: "name", value: company?.name, errorText: actionData?.fieldErrors?.name?.[userContext.language], disabled: company?.verified }, void 0, false, {
        fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationEdit.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this),
      company?.verified && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "name", type: "hidden", value: company?.name }, void 0, false, {
        fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationEdit.tsx",
        lineNumber: 83,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { entries: extractTitlesNewWay(dictionaries?.specializations, userContext.language), placeholder: t("user:specialization"), name: "specialization_id", values: [company?.specialization_id || ""], errorText: actionData?.fieldErrors?.specialization_id?.[userContext.language] }, void 0, false, {
        fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationEdit.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { placeholder: t("user:phone"), id: "phone", name: "phone", variant: "phone", value: company?.phone || userContext.user.phone, errorText: actionData?.fieldErrors?.phone?.[userContext.language] }, void 0, false, {
        fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationEdit.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { entries: extractTitles(dictionaries?.location, userContext.language), placeholder: t("user:district"), name: "city", values: [company?.city_id || ""], errorText: actionData?.fieldErrors?.city_id?.[userContext.language], variant: "search-single" }, void 0, false, {
        fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationEdit.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { placeholder: t("user:address"), id: "address", name: "address", value: company?.address, errorText: actionData?.fieldErrors?.address?.[userContext.language] }, void 0, false, {
        fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationEdit.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { placeholder: t("user:zip_code"), id: "zip", name: "zip_code", value: company?.zip_code, errorText: actionData?.fieldErrors?.zip_code?.[userContext.language] }, void 0, false, {
        fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationEdit.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { placeholder: t("user:website_or_facebook_page"), id: "website", name: "website", variant: "website", value: company?.website, errorText: actionData?.fieldErrors?.website?.[userContext.language] }, void 0, false, {
        fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationEdit.tsx",
        lineNumber: 89,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { entries: extractTitles(dictionaries?.employeeNumbers, userContext.language), placeholder: t("user:number_of_employees"), id: "employee", name: "employee", values: [company?.number_of_employees_id || ""], errorText: actionData?.fieldErrors?.number_of_employees_id?.[userContext.language] }, void 0, false, {
        fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationEdit.tsx",
        lineNumber: 90,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { variant: "textarea", placeholder: t("user:description"), id: "i_description", name: "description", value: company?.description, errorText: actionData?.fieldErrors?.description?.[userContext.language] }, void 0, false, {
        fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationEdit.tsx",
        lineNumber: 91,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationEdit.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationEdit.tsx",
    lineNumber: 56,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/User/Companies/Company/components/CompanyInformation/CompanyInformationEdit.tsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/Companies/Company/styles.ts
var BoxCustomData = styled_components_browser_esm_default.div`
  padding: 8px 12px;
  border-radius: 80px;
  border: 1px solid ${({ theme }) => theme.user.borderColor};
  height: 40px;
  @media (min-width: 1024px) {
    height: 44px;
  }
`;
var Wrapper = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  @media (min-width: 1024px) {
    gap: 24px;
  }
`;

export {
  BoxWebsite,
  VerificationStatus,
  CompanyInformationEdit,
  Wrapper
};
//# sourceMappingURL=/build/_shared/chunk-RTDAH7IZ.js.map
