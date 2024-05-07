import {
  CreateEntityCard
} from "/build/_shared/chunk-GCPQUBOD.js";
import {
  ModalConfirmDelete
} from "/build/_shared/chunk-I66SYKBJ.js";
import {
  require_message
} from "/build/_shared/chunk-RC3SGAVD.js";
import {
  require_request
} from "/build/_shared/chunk-P6GQFH2U.js";
import "/build/_shared/chunk-DDNOQBKY.js";
import {
  Pagination
} from "/build/_shared/chunk-BLJ45R5W.js";
import {
  BoxCard,
  VariantCardEnum
} from "/build/_shared/chunk-EWP76DBX.js";
import "/build/_shared/chunk-HGKWYC6I.js";
import {
  Switcher
} from "/build/_shared/chunk-TOIUBYEI.js";
import "/build/_shared/chunk-ZQ6IGHYP.js";
import "/build/_shared/chunk-EOBF4VPL.js";
import {
  Button_default
} from "/build/_shared/chunk-AF6HCNMF.js";
import "/build/_shared/chunk-NPNOAFIQ.js";
import {
  BoxInformationEnum,
  BoxInformation_default
} from "/build/_shared/chunk-D6JIAAYU.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-WTGWCS5L.js";
import "/build/_shared/chunk-TSAGNYDI.js";
import {
  motion
} from "/build/_shared/chunk-47YKAHTX.js";
import {
  Attention_default,
  Box,
  DEFAULT_USER_AVATAR,
  FONT_SIZES_DESC,
  Icon,
  IconEnum,
  LINE_HEIGHTS_DESC,
  Text,
  TextVariantEnum,
  calculateAge,
  calculateTotalDurationWorkExperience,
  checkCompleteness,
  getImageUrl,
  getSalary,
  getValueLang,
  require_userContext,
  styled_components_browser_esm_default,
  useApp,
  useCheckIncompleteEntityInList,
  useScreenWidth
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  Form,
  Link,
  init_esm,
  useActionData,
  useLoaderData,
  useSubmit
} from "/build/_shared/chunk-IQJCUQRT.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/user/resume.tsx
var import_cloudflare = __toESM(require_cloudflare());
init_esm();
var import_react4 = __toESM(require_react());

// app/components/pages/User/Resumes/index.tsx
init_esm();
var import_react2 = __toESM(require_react());

// app/components/pages/User/Resumes/styles.ts
var BoxHeading = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: flex-start;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.user.borderColor};
  position: relative;
  img {
    border-radius: 50%;
    width: 64px;
    height: 64px;
    object-fit: cover;
  }
  svg {
    position: absolute;
    top: 0;
    right: 0;
  }
`;
var HeadingInformation = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;

  @media (min-width: 768px) {
    gap: 8px;
    .title {
      font-size: ${FONT_SIZES_DESC.textHeading3};
      line-height: ${LINE_HEIGHTS_DESC.textHeading3};
    }
  }
`;
var DataBox = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.user.borderColor};
  @media (min-width: 768px) {
    gap: 32px;
  }
`;
var Field = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
var BoxControl = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    form {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  }
`;
var SwitcherBox = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
var BoxLabel = styled_components_browser_esm_default.div`
  cursor: pointer;
`;
var BoxButtons = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding-top: 16px;
  margin-top: 16px;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.user.borderColor};
  @media (min-width: 768px) {
    padding-top: 8px;
    margin: 0;
    border: none;
  }
`;

// app/components/pages/User/Resumes/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ResumesComponent = (0, import_react2.memo)(({
  resumes,
  dictionaries,
  actionData
}) => {
  const {
    theme,
    t,
    userContext
  } = useApp();
  const widthScreen = useScreenWidth();
  const submit = useSubmit();
  const handleChangeForm = (event, resumeId) => {
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
  const hasIncompleteResume = useCheckIncompleteEntityInList(resumes);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", width: "100%", gap: widthScreen > 1024 ? "24px" : "16px", as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, children: [
    hasIncompleteResume && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxInformation_default, { variant: BoxInformationEnum.warning, title: t("user:you_have_incomplete_resumes"), flexDirection: "column" }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/index.tsx",
      lineNumber: 66,
      columnNumber: 33
    }, this),
    resumes?.map((resume) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxCard, { variant: VariantCardEnum.userCard, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: resume?.id || "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxHeading, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: resume?.general_information?.photo_uri ? getImageUrl(resume?.general_information?.photo_uri) : DEFAULT_USER_AVATAR, alt: "avatar" }, void 0, false, {
          fileName: "app/components/pages/User/Resumes/index.tsx",
          lineNumber: 71,
          columnNumber: 17
        }, this),
        !checkCompleteness(resume, null) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Attention_default, {}, void 0, false, {
          fileName: "app/components/pages/User/Resumes/index.tsx",
          lineNumber: 72,
          columnNumber: 54
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadingInformation, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "title", variant: TextVariantEnum.textHeading2, children: resume.job_position?.position }, void 0, false, {
            fileName: "app/components/pages/User/Resumes/index.tsx",
            lineNumber: 75,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, color: theme.user.descriptionTextColor, children: getValueLang(resume.job_position?.specialization_name, userContext.language) }, void 0, false, {
            fileName: "app/components/pages/User/Resumes/index.tsx",
            lineNumber: 78,
            columnNumber: 19
          }, this),
          (resume.job_position?.salary_fixed || resume.job_position?.salary_from && resume.job_position?.salary_to) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: resume.job_position?.salary_from && resume.job_position?.salary_to ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "price", variant: TextVariantEnum.textHeading3, children: [
            resume.job_position?.salary_from,
            " - ",
            resume.job_position?.salary_to,
            "\xA0",
            getSalary(resume.job_position.currency_name?.en, resume.job_position.salary_payout_period_name?.en, userContext.language)
          ] }, void 0, true, {
            fileName: "app/components/pages/User/Resumes/index.tsx",
            lineNumber: 83,
            columnNumber: 93
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "price", variant: TextVariantEnum.textHeading3, children: [
            resume.job_position?.salary_fixed,
            "\xA0",
            getSalary(resume.job_position.currency_name?.en, resume.job_position.salary_payout_period_name?.en, userContext.language)
          ] }, void 0, true, {
            fileName: "app/components/pages/User/Resumes/index.tsx",
            lineNumber: 87,
            columnNumber: 35
          }, this) }, void 0, false, {
            fileName: "app/components/pages/User/Resumes/index.tsx",
            lineNumber: 82,
            columnNumber: 129
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/User/Resumes/index.tsx",
          lineNumber: 74,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/User/Resumes/index.tsx",
        lineNumber: 70,
        columnNumber: 15
      }, this) }, resume.id, false, {
        fileName: "app/components/pages/User/Resumes/index.tsx",
        lineNumber: 69,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataBox, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, color: theme.user.descriptionTextColor, children: t("user:district") }, void 0, false, {
            fileName: "app/components/pages/User/Resumes/index.tsx",
            lineNumber: 98,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: getValueLang(resume.location?.city_name, userContext.language) }, void 0, false, {
            fileName: "app/components/pages/User/Resumes/index.tsx",
            lineNumber: 101,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/User/Resumes/index.tsx",
          lineNumber: 97,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, color: theme.user.descriptionTextColor, children: t("user:age") }, void 0, false, {
            fileName: "app/components/pages/User/Resumes/index.tsx",
            lineNumber: 106,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: calculateAge(resume?.general_information?.birthdate?.en) }, void 0, false, {
            fileName: "app/components/pages/User/Resumes/index.tsx",
            lineNumber: 109,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/User/Resumes/index.tsx",
          lineNumber: 105,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, color: theme.user.descriptionTextColor, children: t("user:work_experience") }, void 0, false, {
            fileName: "app/components/pages/User/Resumes/index.tsx",
            lineNumber: 114,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2medium, children: [
            calculateTotalDurationWorkExperience(resume?.total_work_experience_in_months, userContext.language),
            " "
          ] }, void 0, true, {
            fileName: "app/components/pages/User/Resumes/index.tsx",
            lineNumber: 117,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/User/Resumes/index.tsx",
          lineNumber: 113,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/User/Resumes/index.tsx",
        lineNumber: 96,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxControl, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Form,
          {
            method: "PATCH",
            onChange: (event) => handleChangeForm(event, resume?.id),
            preventScrollReset: true,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", value: resume?.id }, void 0, false, {
                fileName: "app/components/pages/User/Resumes/index.tsx",
                lineNumber: 126,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "action", value: "published" }, void 0, false, {
                fileName: "app/components/pages/User/Resumes/index.tsx",
                lineNumber: 127,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "publish", value: resume?.published ? "false" : "true" }, void 0, false, {
                fileName: "app/components/pages/User/Resumes/index.tsx",
                lineNumber: 128,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "checkFields", value: checkCompleteness(resume)?.toString() }, void 0, false, {
                fileName: "app/components/pages/User/Resumes/index.tsx",
                lineNumber: 129,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switcher, { checked: Boolean(resume?.published), htmlLabel: resume?.id, name: "published", variant: "default", checkedLabel: t("user:published"), unCheckedLabel: t("user:published"), control: true }, void 0, false, {
                fileName: "app/components/pages/User/Resumes/index.tsx",
                lineNumber: 131,
                columnNumber: 17
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/pages/User/Resumes/index.tsx",
            lineNumber: 124,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxButtons, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: "icon", priority: "secondary", onlyIcon: true, onClick: () => handleClickDelete(resume?.id), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.cart, color: theme.user.iconColor }, void 0, false, {
            fileName: "app/components/pages/User/Resumes/index.tsx",
            lineNumber: 136,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/pages/User/Resumes/index.tsx",
            lineNumber: 135,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", preventScrollReset: true, style: {
            width: "fit-content"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", value: resume?.id }, void 0, false, {
              fileName: "app/components/pages/User/Resumes/index.tsx",
              lineNumber: 142,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "submit", className: "icon", priority: "secondary", onlyIcon: true, value: "copy", name: "action", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.copy, color: theme.user.iconColor }, void 0, false, {
              fileName: "app/components/pages/User/Resumes/index.tsx",
              lineNumber: 144,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/pages/User/Resumes/index.tsx",
              lineNumber: 143,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/User/Resumes/index.tsx",
            lineNumber: 139,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: resume?.id || "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: "icon", priority: "secondary", onlyIcon: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.view, color: theme.user.iconColor }, void 0, false, {
            fileName: "app/components/pages/User/Resumes/index.tsx",
            lineNumber: 150,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/pages/User/Resumes/index.tsx",
            lineNumber: 149,
            columnNumber: 19
          }, this) }, resume?.id, false, {
            fileName: "app/components/pages/User/Resumes/index.tsx",
            lineNumber: 148,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/User/Resumes/index.tsx",
          lineNumber: 134,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/User/Resumes/index.tsx",
        lineNumber: 123,
        columnNumber: 13
      }, this)
    ] }, resume.id, true, {
      fileName: "app/components/pages/User/Resumes/index.tsx",
      lineNumber: 68,
      columnNumber: 33
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModalConfirmDelete, { id: deleteSelectedId, visibility: visibleDelete, setVisibility: setVisibleDelete }, void 0, false, {
      fileName: "app/components/pages/User/Resumes/index.tsx",
      lineNumber: 156,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/Resumes/index.tsx",
    lineNumber: 57,
    columnNumber: 10
  }, this);
});

// app/routes/user/resume.tsx
var import_message = __toESM(require_message());
var import_userContext = __toESM(require_userContext());
var import_request = __toESM(require_request());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var BoxPagination = styled_components_browser_esm_default.div.withConfig({
  displayName: "resume__BoxPagination",
  componentId: "sc-85sew1-0"
})(["width:100%;display:flex;justify-content:center;max-width:920px;margin:16px 0;flex-direction:row;gap:16px;@media (min-width:1024px){margin:24px 0;gap:24px;}@media (min-width:1280px){max-width:100%;}"]);
function Index() {
  const request = useLoaderData();
  const actionData = useActionData();
  const widthScreen = useScreenWidth();
  const submit = useSubmit();
  const formRef = (0, import_react4.useRef)(null);
  const {
    dictionaries,
    pagination
  } = request;
  const [maxPageSize, setMaxPageSize] = (0, import_react4.useState)(+pagination?.max_page_size || 10);
  const [currentPage, setCurrentPage] = (0, import_react4.useState)(+pagination?.current_page || 1);
  const [currentToken, setCurrentToken] = (0, import_react4.useState)(pagination?.current_token || void 0);
  const handleSubmit = () => {
    submit(formRef.current, {
      preventScrollReset: true
    });
  };
  return request.resumes.data.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { flexDirection: "column", width: "100%", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ResumesComponent, { actionData, resumes: request.resumes.data, dictionaries }, void 0, false, {
      fileName: "app/routes/user/resume.tsx",
      lineNumber: 256,
      columnNumber: 7
    }, this),
    pagination?.maxPages && pagination?.maxPages > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "GET", style: {
      width: "100%",
      margin: widthScreen > 1280 ? "24px 0" : "16px 0"
    }, onChange: handleSubmit, ref: formRef, preventScrollReset: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Pagination, { currentPage, setCurrentPage, setCurrentToken, paginationRange: pagination?.paginationRange, maxPages: pagination?.maxPages, maxPageSize, setMaxPageSize, handleSubmit, widthScreen }, void 0, false, {
        fileName: "app/routes/user/resume.tsx",
        lineNumber: 262,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "current_page", value: currentPage }, void 0, false, {
        fileName: "app/routes/user/resume.tsx",
        lineNumber: 263,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "current_token", value: currentToken }, void 0, false, {
        fileName: "app/routes/user/resume.tsx",
        lineNumber: 264,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "max_pages", value: pagination?.maxPages }, void 0, false, {
        fileName: "app/routes/user/resume.tsx",
        lineNumber: 265,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user/resume.tsx",
      lineNumber: 258,
      columnNumber: 60
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user/resume.tsx",
    lineNumber: 255,
    columnNumber: 44
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CreateEntityCard, {}, void 0, false, {
    fileName: "app/routes/user/resume.tsx",
    lineNumber: 267,
    columnNumber: 14
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/user/resume-KE55NIFT.js.map
