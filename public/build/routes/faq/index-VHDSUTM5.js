import {
  BoxFields
} from "/build/_shared/chunk-YB7GJSGU.js";
import {
  require_lib
} from "/build/_shared/chunk-IZY6H3OZ.js";
import {
  require_request
} from "/build/_shared/chunk-P6GQFH2U.js";
import {
  BoxCard,
  BoxControl,
  VariantCardEnum
} from "/build/_shared/chunk-EWP76DBX.js";
import {
  Input
} from "/build/_shared/chunk-TCMGB6IX.js";
import "/build/_shared/chunk-KYNJZNBK.js";
import {
  Button_default
} from "/build/_shared/chunk-AF6HCNMF.js";
import "/build/_shared/chunk-NPNOAFIQ.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-WTGWCS5L.js";
import {
  AnimatePresence,
  motion
} from "/build/_shared/chunk-47YKAHTX.js";
import {
  Box,
  Icon,
  IconEnum,
  Text,
  TextVariantEnum,
  lng,
  styled_components_browser_esm_default,
  useApp,
  useScreenWidth,
  v4_default
} from "/build/_shared/chunk-L3EPBPPP.js";
import {
  Form,
  init_esm,
  useActionData,
  useLoaderData,
  useNavigation
} from "/build/_shared/chunk-IQJCUQRT.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6QEUYBK6.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/faq/index.tsx
var import_cloudflare = __toESM(require_cloudflare());
init_esm();
var import_qs = __toESM(require_lib());

// app/components/pages/Faq/index.tsx
init_esm();
var import_react3 = __toESM(require_react());

// app/components/common/Accordion/index.tsx
var import_react = __toESM(require_react());

// app/components/common/Accordion/styles.ts
var Container = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
`;
var TitleContainer = styled_components_browser_esm_default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & button {
    transform: ${({ open }) => open ? "rotate(90deg)" : "rotate(180deg)"};
    transition: all 0.6s cubic-bezier(0.2, 0, 0, 1);
  }
`;
var Title = styled_components_browser_esm_default.div`
  display: flex;
  gap: 12px;
  align-items: center;

  @media (min-width: 768px) {
    gap: 16px;
  }
`;
var Description = styled_components_browser_esm_default.div`
  padding-top: 16px;
  margin-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.user.borderColor};
`;
var Emoji = styled_components_browser_esm_default.span`
  display: flex;
  margin-top: -3px;
`;

// app/components/common/Accordion/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Accordion({
  title,
  children
}) {
  const [open, setOpen] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TitleContainer, { open, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Emoji, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.emojiFaq }, void 0, false, {
          fileName: "app/components/common/Accordion/index.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/common/Accordion/index.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textHeading3, children: title }, void 0, false, {
          fileName: "app/components/common/Accordion/index.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/common/Accordion/index.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "secondary", onlyIcon: true, onClick: () => setOpen(!open), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.arrowLeft }, void 0, false, {
        fileName: "app/components/common/Accordion/index.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/common/Accordion/index.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/Accordion/index.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatePresence, { initial: false, children: open && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { width: "100%", as: motion.div, initial: {
      height: 0
    }, animate: {
      height: "auto"
    }, exit: {
      height: 0
    }, transition: {
      type: "spring",
      duration: 0.4,
      bounce: 0
    }, style: {
      overflow: "hidden"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Description, { children }, void 0, false, {
      fileName: "app/components/common/Accordion/index.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/common/Accordion/index.tsx",
      lineNumber: 32,
      columnNumber: 18
    }, this) }, void 0, false, {
      fileName: "app/components/common/Accordion/index.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Accordion/index.tsx",
    lineNumber: 19,
    columnNumber: 10
  }, this);
}

// app/components/pages/Faq/styles.ts
var SubText = styled_components_browser_esm_default.div`
  padding-top: 16px;
  margin-top: 8px;
  border-top: 1px solid ${({ theme }) => theme.user.borderColor};

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;
var Answer = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (min-width: 768px) {
    gap: 24px;
  }
`;
var FieldWithDesc = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
var Description2 = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
var List = styled_components_browser_esm_default.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ index }) => index === 1 ? "18px" : "16px"};
  padding-left: 24px;
  letter-spacing: -0.364px;

  @media (min-width: 768px) {
    gap: ${({ index }) => index === 1 ? "24px" : "18px"};
  }
`;

// app/components/pages/Faq/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function mapMaterialsToViewModel(material, language) {
  return {
    title: lng(material.en?.title, material.th?.title, language),
    text: {
      subtitle: lng(material.en?.text.subtitle, material.th?.text.subtitle, language),
      steps: lng(material.en?.text.steps, material.th?.text.steps, language)
    }
  };
}
var FaqComponent = (0, import_react3.memo)(({
  actionData,
  faq
}) => {
  const widthScreen = useScreenWidth();
  const {
    t,
    userContext
  } = useApp();
  const faqItems = faq?.map((item) => mapMaterialsToViewModel(item, userContext.language));
  const navigation = useNavigation();
  const isAdding = navigation.state === "submitting";
  const formRef = (0, import_react3.useRef)(null);
  const handleCancel = () => {
    formRef.current?.reset();
  };
  const [inputValue, setInputValue] = (0, import_react3.useState)({
    nameValue: "",
    emailValue: "",
    subjectValue: "",
    messageValue: ""
  });
  const {
    nameValue,
    emailValue,
    subjectValue,
    messageValue
  } = inputValue;
  const emptyFields = !nameValue || !emailValue || !subjectValue || !messageValue;
  (0, import_react3.useEffect)(() => {
    if (!isAdding) {
      formRef.current?.reset();
      setInputValue({
        nameValue: "",
        emailValue: "",
        subjectValue: "",
        messageValue: ""
      });
    }
  }, [isAdding]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { flexDirection: "column", width: "100%", gap: widthScreen > 1024 ? "24px" : "16px", as: motion.div, initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxCard, { variant: VariantCardEnum.materials, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textHeading3, children: t("home:here_you_can_find_answers_to_frequently_asked_questions_or_send_a_message_to_our_support_team") }, void 0, false, {
        fileName: "app/components/pages/Faq/index.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SubText, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("home:for_registered_users_who_need_help_please_contact_us_and_we_will_get_back_to_you_in_about_1_hour") }, void 0, false, {
        fileName: "app/components/pages/Faq/index.tsx",
        lineNumber: 85,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Faq/index.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Faq/index.tsx",
      lineNumber: 80,
      columnNumber: 9
    }, this),
    faqItems?.map((faqItem, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxCard, { variant: VariantCardEnum.materials, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Accordion, { title: faqItem?.title, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Answer, { children: [
      faqItem?.text?.subtitle,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(List, { index, style: {
        listStyle: "inside",
        listStyleType: "auto"
      }, children: faqItem?.text?.steps.map((stepItem) => {
        const key = v4_default();
        return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { style: {
          listStyle: "outside",
          listStyleType: "auto"
        }, children: stepItem }, key, false, {
          fileName: "app/components/pages/Faq/index.tsx",
          lineNumber: 101,
          columnNumber: 22
        }, this);
      }) }, void 0, false, {
        fileName: "app/components/pages/Faq/index.tsx",
        lineNumber: 95,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Faq/index.tsx",
      lineNumber: 93,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/pages/Faq/index.tsx",
      lineNumber: 92,
      columnNumber: 13
    }, this) }, faqItem?.title, false, {
      fileName: "app/components/pages/Faq/index.tsx",
      lineNumber: 91,
      columnNumber: 44
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "POST", style: {
      width: "100%"
    }, ref: formRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxCard, { variant: VariantCardEnum.materials, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textHeading3, children: t("home:we_are_here_to_help_send_us_a_message_to_get_help") }, void 0, false, {
        fileName: "app/components/pages/Faq/index.tsx",
        lineNumber: 117,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SubText, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, children: t("home:please_fill_in_all_the_fields_they_are_required_so_that_we_can_help_you_as_efficiently_and_quickly_as_possible") }, void 0, false, {
        fileName: "app/components/pages/Faq/index.tsx",
        lineNumber: 121,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/pages/Faq/index.tsx",
        lineNumber: 120,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxFields, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { placeholder: t("user:your_name"), id: "i_name", name: "name", value: nameValue, onChange: (event) => setInputValue((prevState) => ({
          ...prevState,
          nameValue: event
        })) }, void 0, false, {
          fileName: "app/components/pages/Faq/index.tsx",
          lineNumber: 127,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FieldWithDesc, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Description2, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, children: t("home:what_is_your_email_address") }, void 0, false, {
              fileName: "app/components/pages/Faq/index.tsx",
              lineNumber: 133,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("home:please_enter_an_email_address_where_we_can_contact_you") }, void 0, false, {
              fileName: "app/components/pages/Faq/index.tsx",
              lineNumber: 136,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/Faq/index.tsx",
            lineNumber: 132,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { placeholder: t("user:email"), id: "i_email", name: "email", value: emailValue, "aria-invalid": actionData?.fieldErrors?.email?.[userContext.language] ? true : void 0, errorText: actionData?.fieldErrors?.email?.[userContext.language], onChange: (event) => setInputValue((prevState) => ({
            ...prevState,
            emailValue: event
          })) }, void 0, false, {
            fileName: "app/components/pages/Faq/index.tsx",
            lineNumber: 140,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/Faq/index.tsx",
          lineNumber: 131,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FieldWithDesc, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Description2, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, children: t("home:what_do_you_need_help_with") }, void 0, false, {
              fileName: "app/components/pages/Faq/index.tsx",
              lineNumber: 148,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("home:this_helps_make_sure_you_get_the_right_answer_fast") }, void 0, false, {
              fileName: "app/components/pages/Faq/index.tsx",
              lineNumber: 151,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/Faq/index.tsx",
            lineNumber: 147,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { placeholder: t("user:subject"), id: "i_subject", name: "subject", value: subjectValue, onChange: (event) => setInputValue((prevState) => ({
            ...prevState,
            subjectValue: event
          })) }, void 0, false, {
            fileName: "app/components/pages/Faq/index.tsx",
            lineNumber: 155,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/Faq/index.tsx",
          lineNumber: 146,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FieldWithDesc, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Description2, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, children: t("home:what_is_your_question_comment_or_issue") }, void 0, false, {
              fileName: "app/components/pages/Faq/index.tsx",
              lineNumber: 163,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("home:the_more_we_know_the_better_we_can_help_you_share_all_the_details") }, void 0, false, {
              fileName: "app/components/pages/Faq/index.tsx",
              lineNumber: 166,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/Faq/index.tsx",
            lineNumber: 162,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { placeholder: t("user:message"), id: "i_text", name: "text", value: messageValue, onChange: (event) => setInputValue((prevState) => ({
            ...prevState,
            messageValue: event
          })) }, void 0, false, {
            fileName: "app/components/pages/Faq/index.tsx",
            lineNumber: 170,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/Faq/index.tsx",
          lineNumber: 161,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/Faq/index.tsx",
        lineNumber: 126,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxControl, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { priority: "secondary", fullwidth: true, onClick: () => handleCancel(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("common:cancel") }, void 0, false, {
          fileName: "app/components/pages/Faq/index.tsx",
          lineNumber: 179,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/pages/Faq/index.tsx",
          lineNumber: 178,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { priority: "primary", fullwidth: true, type: "submit", disabled: emptyFields || isAdding, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: [
          " ",
          t("common:send")
        ] }, void 0, true, {
          fileName: "app/components/pages/Faq/index.tsx",
          lineNumber: 183,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/pages/Faq/index.tsx",
          lineNumber: 182,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/Faq/index.tsx",
        lineNumber: 177,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/Faq/index.tsx",
      lineNumber: 116,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/pages/Faq/index.tsx",
      lineNumber: 113,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/Faq/index.tsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
});

// app/routes/faq/index.tsx
var import_request = __toESM(require_request());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Index() {
  const actionData = useActionData();
  const data = useLoaderData();
  const faq = data.faq.data;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(FaqComponent, { actionData, faq }, void 0, false, {
    fileName: "app/routes/faq/index.tsx",
    lineNumber: 72,
    columnNumber: 10
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/faq/index-VHDSUTM5.js.map
