import {
  Wrapper
} from "/build/_shared/chunk-GLFTF767.js";
import {
  BoxPicture,
  BoxUserData,
  BoxUserEditData,
  DatePicker,
  Image
} from "/build/_shared/chunk-HVI57Z7R.js";
import {
  UploadingImageModal
} from "/build/_shared/chunk-N4QY3NH2.js";
import {
  BoxFields
} from "/build/_shared/chunk-O6PFKXUU.js";
import {
  BoxAvatar
} from "/build/_shared/chunk-SETLP5G4.js";
import {
  DataField
} from "/build/_shared/chunk-5HZIPPOH.js";
import {
  CardContainer
} from "/build/_shared/chunk-LEK3IZDX.js";
import {
  require_message
} from "/build/_shared/chunk-ULBVCC7P.js";
import {
  require_lib
} from "/build/_shared/chunk-VYIZRLIF.js";
import {
  require_request
} from "/build/_shared/chunk-EISN5MP4.js";
import {
  CheckBox
} from "/build/_shared/chunk-5B64Q63W.js";
import {
  Select
} from "/build/_shared/chunk-BXFA34ZG.js";
import {
  BoxCard
} from "/build/_shared/chunk-6J6FMBZW.js";
import {
  Input
} from "/build/_shared/chunk-MPISASBV.js";
import "/build/_shared/chunk-LQ4YPZYM.js";
import {
  Modal
} from "/build/_shared/chunk-T7KDPY4G.js";
import "/build/_shared/chunk-NSEFQYWN.js";
import {
  Button_default
} from "/build/_shared/chunk-QD72PUQI.js";
import {
  Button
} from "/build/_shared/chunk-GEH4KW55.js";
import {
  BoxInformationEnum,
  BoxInformation_default
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
  Box,
  DEFAULT_USER_AVATAR,
  Text,
  TextVariantEnum,
  extractTitles,
  extractTitlesNewWay,
  getImageUrl,
  getValueFromDictionaries,
  getValueFromDictionariesNewWay,
  getValueLang,
  require_session,
  require_userContext,
  styled_components_browser_esm_default,
  useApp
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  Form,
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

// app/routes/user/myprofile.tsx
var import_cloudflare = __toESM(require_cloudflare());
init_esm();
var import_qs = __toESM(require_lib());

// app/components/pages/User/MyProfile/index.tsx
init_esm();
var import_react5 = __toESM(require_react());

// app/components/entities/ModalConfirmEmail/styles.tsx
var BoxContainer = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__BoxContainer",
  componentId: "sc-1dgee7i-0"
})(["display:flex;flex-direction:column;width:100%;align-items:center;justify-content:center;gap:24px;width:460px;max-width:100%;height:160px;@media (min-width:1024px){gap:32px;}"]);
var BoxInput = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__BoxInput",
  componentId: "sc-1dgee7i-1"
})(["width:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:center;border-radius:8px;border:1px solid ", ";padding:12px;.link{overflow:hidden;white-space:nowrap;}"], ({
  theme
}) => theme.user.borderCustomFieldData);
var BoxIcons = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__BoxIcons",
  componentId: "sc-1dgee7i-2"
})(["overflow:auto;"]);
var IconsContainer = styled_components_browser_esm_default.div.withConfig({
  displayName: "styles__IconsContainer",
  componentId: "sc-1dgee7i-3"
})(["display:flex;flex-direction:row;overflow:visible;min-width:max-content;gap:8px;"]);

// app/components/entities/ModalConfirmEmail/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ModalConfirmEmail({
  visibility,
  setVisibility
}) {
  const {
    t,
    userContext,
    theme
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal, { visibility, setVisibility, variant: VariantModalEnum.confirmEmail, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { style: {
      position: "absolute",
      top: "24px",
      left: "24px"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textHeading3, children: t("user:email_confirmation") }, void 0, false, {
      fileName: "app/components/entities/ModalConfirmEmail/index.tsx",
      lineNumber: 28,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/entities/ModalConfirmEmail/index.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { width: "90%", flexDirection: "column", gap: "24px", style: {
      position: "absolute",
      left: "24px",
      marginTop: "54px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: [
        `${t("user:open_the_email_sent_to")} `,
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
          color: theme.accentTextColor
        }, children: userContext.user.email }, void 0, false, {
          fileName: "app/components/entities/ModalConfirmEmail/index.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        " ",
        `${t("user:and_click_the_link_in_the_email_to_complete_the_verification_process")}`
      ] }, void 0, true, {
        fileName: "app/components/entities/ModalConfirmEmail/index.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { width: "100%", justifyContent: "flex-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { priority: "secondary", onClick: () => setVisibility(!visibility), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("common:close") }, void 0, false, {
        fileName: "app/components/entities/ModalConfirmEmail/index.tsx",
        lineNumber: 46,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/entities/ModalConfirmEmail/index.tsx",
        lineNumber: 45,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/entities/ModalConfirmEmail/index.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/entities/ModalConfirmEmail/index.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/entities/ModalConfirmEmail/index.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/entities/ModalConfirmEmail/index.tsx",
    lineNumber: 21,
    columnNumber: 10
  }, this);
}

// app/components/pages/User/MyProfile/components/Info/index.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var GeneralInfo = (0, import_react.memo)(({
  stateUserInfo,
  setStateUserInfo,
  user,
  dictionaries,
  actionData
}) => {
  const {
    t,
    userContext,
    theme
  } = useApp();
  const [showUploader, setShowUploader] = (0, import_react.useState)(false);
  const [photo, setPhoto] = (0, import_react.useState)(user?.photo ? getImageUrl(user?.photo) : DEFAULT_USER_AVATAR);
  const [errorTextForImage, setErrorTextForImage] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    if (!photo?.startsWith("data:image/jpg") && !photo?.startsWith("data:image/jpeg") && !photo?.startsWith("https://api.test.upjob.com/m") && !photo?.startsWith("/images/user") && photo) {
      setErrorTextForImage(true);
    } else {
      setErrorTextForImage(false);
    }
  }, [photo]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxCard, { title: t("user:personal_information"), state: stateUserInfo, setState: setStateUserInfo, withEditButton: true, withControl: true, children: [
    stateUserInfo === "info" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxUserData, { initial: {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataField, { label: t("user:first_name"), data: user?.first_name || "" }, void 0, false, {
        fileName: "app/components/pages/User/MyProfile/components/Info/index.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataField, { label: t("user:last_name"), data: user?.last_name || "" }, void 0, false, {
        fileName: "app/components/pages/User/MyProfile/components/Info/index.tsx",
        lineNumber: 65,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataField, { label: t("user:gender"), data: getValueFromDictionaries(dictionaries.genders, user?.gender, userContext.language) || getValueFromDictionaries(dictionaries.genders, user?.gender, userContext.language) }, void 0, false, {
        fileName: "app/components/pages/User/MyProfile/components/Info/index.tsx",
        lineNumber: 66,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataField, { label: t("user:date_of_birth"), data: user?.birthday ? getValueLang(user?.birthday, userContext.language) : getValueLang(userContext?.user.birthday, userContext.language) || "" }, void 0, false, {
        fileName: "app/components/pages/User/MyProfile/components/Info/index.tsx",
        lineNumber: 67,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataField, { label: t("user:email"), data: user?.email }, void 0, false, {
        fileName: "app/components/pages/User/MyProfile/components/Info/index.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataField, { label: t("user:phone"), data: user?.phone }, void 0, false, {
        fileName: "app/components/pages/User/MyProfile/components/Info/index.tsx",
        lineNumber: 69,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataField, { label: t("user:language_of_notify"), data: getValueFromDictionariesNewWay(dictionaries.languagesOfNotify, user?.primary_language, userContext.language) }, void 0, false, {
        fileName: "app/components/pages/User/MyProfile/components/Info/index.tsx",
        lineNumber: 70,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/MyProfile/components/Info/index.tsx",
      lineNumber: 53,
      columnNumber: 38
    }, this),
    stateUserInfo === "edit" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { width: "100%", as: motion.div, initial: {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "formName", value: "general" }, void 0, false, {
        fileName: "app/components/pages/User/MyProfile/components/Info/index.tsx",
        lineNumber: 83,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxUserEditData, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxPicture, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, children: t("user:profile_picture") }, void 0, false, {
            fileName: "app/components/pages/User/MyProfile/components/Info/index.tsx",
            lineNumber: 86,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxAvatar, { variant: "user", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "photo", value: photo }, void 0, false, {
              fileName: "app/components/pages/User/MyProfile/components/Info/index.tsx",
              lineNumber: 88,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Image, { src: photo || DEFAULT_USER_AVATAR, alt: "avatar" }, void 0, false, {
              fileName: "app/components/pages/User/MyProfile/components/Info/index.tsx",
              lineNumber: 89,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { priority: "secondary", onClick: () => setShowUploader(!showUploader), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: [
              " ",
              t("user:edit_photo")
            ] }, void 0, true, {
              fileName: "app/components/pages/User/MyProfile/components/Info/index.tsx",
              lineNumber: 91,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/pages/User/MyProfile/components/Info/index.tsx",
              lineNumber: 90,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/User/MyProfile/components/Info/index.tsx",
            lineNumber: 87,
            columnNumber: 17
          }, this),
          errorTextForImage && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: TextVariantEnum.textSmall, color: theme.errorTextColor, children: t("user:image_type_must_be_jpeg") }, void 0, false, {
            fileName: "app/components/pages/User/MyProfile/components/Info/index.tsx",
            lineNumber: 94,
            columnNumber: 39
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(UploadingImageModal, { visibility: showUploader, setVisibility: setShowUploader, defaultImage: photo, setDefaultImage: setPhoto }, void 0, false, {
            fileName: "app/components/pages/User/MyProfile/components/Info/index.tsx",
            lineNumber: 97,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/User/MyProfile/components/Info/index.tsx",
          lineNumber: 85,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BoxFields, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { placeholder: t("user:first_name"), id: "i_firstName", name: "firstName", value: user?.first_name || "", errorText: actionData?.fieldErrors?.first_name?.[userContext.language] }, void 0, false, {
            fileName: "app/components/pages/User/MyProfile/components/Info/index.tsx",
            lineNumber: 100,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { placeholder: t("user:last_name"), id: "i_lastName", name: "lastName", value: user?.last_name || "", errorText: actionData?.fieldErrors?.last_name?.[userContext.language] }, void 0, false, {
            fileName: "app/components/pages/User/MyProfile/components/Info/index.tsx",
            lineNumber: 101,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { placeholder: t("user:email"), id: "email", name: "email", value: user?.email || "", disabled: true }, void 0, false, {
            fileName: "app/components/pages/User/MyProfile/components/Info/index.tsx",
            lineNumber: 102,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Select, { entries: extractTitles(dictionaries?.genders, userContext.language), placeholder: t("user:gender"), id: "gender", name: "gender", values: [user?.gender || ""] }, void 0, false, {
            fileName: "app/components/pages/User/MyProfile/components/Info/index.tsx",
            lineNumber: 103,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DatePicker, { name: "birthday", defaultDate: getValueLang(user?.birthday, userContext.language), placeholderDay: t("user:day_of_birth"), placeholderMonth: t("user:month_of_birth"), placeholderYear: t("user:year_of_birth"), errorText: actionData?.fieldErrors?.birthday?.[userContext.language] }, void 0, false, {
            fileName: "app/components/pages/User/MyProfile/components/Info/index.tsx",
            lineNumber: 104,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { placeholder: t("user:phone"), id: "i_phone", name: "phone", value: user?.phone, variant: "phone" }, void 0, false, {
            fileName: "app/components/pages/User/MyProfile/components/Info/index.tsx",
            lineNumber: 105,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Select, { entries: extractTitlesNewWay(dictionaries?.languagesOfNotify, userContext.language), placeholder: t("user:language_of_notify"), id: "primaryLanguage", name: "primary_language", values: [user?.primary_language || ""] }, void 0, false, {
            fileName: "app/components/pages/User/MyProfile/components/Info/index.tsx",
            lineNumber: 106,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/User/MyProfile/components/Info/index.tsx",
          lineNumber: 99,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/User/MyProfile/components/Info/index.tsx",
        lineNumber: 84,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/MyProfile/components/Info/index.tsx",
      lineNumber: 72,
      columnNumber: 38
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/MyProfile/components/Info/index.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
});

// app/components/pages/User/MyProfile/components/NotifySettings/index.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var NotifySettings = (0, import_react2.memo)(({
  user,
  formRef
}) => {
  const {
    theme,
    t
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BoxCard, { title: t("user:notifications"), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardContainer, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        CheckBox,
        {
          name: "notify_phone",
          label: t("user:phone_notifications"),
          checked: user?.notifications?.phone ?? false,
          value: user?.notifications?.phone?.toString(),
          id: "phone_notifications"
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/User/MyProfile/components/NotifySettings/index.tsx",
          lineNumber: 23,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, color: theme.user.descriptionTextColor, children: t("user:by_submitting_the_form_and_checking_this_box_i_hereby_agree_to_receive_calls_sms_and_or_Line_messages_from_UPJOB_company_and_employers_who_use_UPJOB_including_through_automated_dialing_systems_and_recorded_calls_to_the_above_phone_number") }, void 0, false, {
        fileName: "app/components/pages/User/MyProfile/components/NotifySettings/index.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/MyProfile/components/NotifySettings/index.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CardContainer, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        CheckBox,
        {
          name: "notify_email",
          label: t("user:email_notifications"),
          checked: user?.notifications?.email,
          value: user?.notifications?.email?.toString(),
          id: "email_notifications"
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/User/MyProfile/components/NotifySettings/index.tsx",
          lineNumber: 32,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, color: theme.user.descriptionTextColor, children: t("user:by_submitting_the_form_and_checking_this_box_i_hereby_agree_to_receive_email_from_UPJOB_company_and_employers_who_use_UPJOB_including_automated_notifications_by_email") }, void 0, false, {
        fileName: "app/components/pages/User/MyProfile/components/NotifySettings/index.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/MyProfile/components/NotifySettings/index.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/MyProfile/components/NotifySettings/index.tsx",
    lineNumber: 21,
    columnNumber: 10
  }, this);
});

// app/components/pages/User/MyProfile/components/PasswordSettings/index.tsx
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var PasswordSettings = (0, import_react3.memo)(({
  stateUserPassword,
  setStateUserPassword,
  actionData
}) => {
  const {
    theme,
    t,
    userContext
  } = useApp();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BoxCard, { title: t("user:security_settings"), state: stateUserPassword, setState: setStateUserPassword, withControl: true, children: [
    stateUserPassword === "info" && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardContainer, { as: motion.div, initial: {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { display: "flex", flexDirection: "column", gap: "8px", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, children: t("user:benefits_of_changing_your_password_regularly") }, void 0, false, {
          fileName: "app/components/pages/User/MyProfile/components/PasswordSettings/index.tsx",
          lineNumber: 43,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, color: theme.user.descriptionTextColor, children: t("user:it_limits_breaches_to_multiple_users") }, void 0, false, {
          fileName: "app/components/pages/User/MyProfile/components/PasswordSettings/index.tsx",
          lineNumber: 46,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/User/MyProfile/components/PasswordSettings/index.tsx",
        lineNumber: 42,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { priority: "secondary", className: "growingButton", onClick: () => setStateUserPassword("edit"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: [
        " ",
        t("user:change_password")
      ] }, void 0, true, {
        fileName: "app/components/pages/User/MyProfile/components/PasswordSettings/index.tsx",
        lineNumber: 51,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/pages/User/MyProfile/components/PasswordSettings/index.tsx",
        lineNumber: 50,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/MyProfile/components/PasswordSettings/index.tsx",
      lineNumber: 29,
      columnNumber: 42
    }, this),
    stateUserPassword === "edit" && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardContainer, { as: motion.div, initial: {
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
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "formName", value: "password" }, void 0, false, {
        fileName: "app/components/pages/User/MyProfile/components/PasswordSettings/index.tsx",
        lineNumber: 67,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { variant: TextVariantEnum.textBody1medium, children: t("user:create_a_new_password_use_a_minimum_of_characters_including_uppercase_letters_lowercase_letters_and_numbers") }, void 0, false, {
        fileName: "app/components/pages/User/MyProfile/components/PasswordSettings/index.tsx",
        lineNumber: 69,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BoxFields, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Input, { placeholder: t("auth:enter_password"), id: "i_password", name: "password", variant: "password", errorText: actionData?.fieldErrors?.password?.[userContext.language] }, void 0, false, {
          fileName: "app/components/pages/User/MyProfile/components/PasswordSettings/index.tsx",
          lineNumber: 73,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Input, { placeholder: t("auth:password_confirmation"), id: "i_passwordConfirmation", name: "password_confirmation", variant: "password", errorText: actionData?.fieldErrors?.passwordConfirm?.[userContext.language] }, void 0, false, {
          fileName: "app/components/pages/User/MyProfile/components/PasswordSettings/index.tsx",
          lineNumber: 74,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/User/MyProfile/components/PasswordSettings/index.tsx",
        lineNumber: 72,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/MyProfile/components/PasswordSettings/index.tsx",
      lineNumber: 54,
      columnNumber: 42
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/MyProfile/components/PasswordSettings/index.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
});

// app/components/pages/User/MyProfile/index.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var UserInfoComponent = (0, import_react5.memo)(({
  user,
  dictionaries,
  actionData
}) => {
  const [stateUserInfo, setStateUserInfo] = (0, import_react5.useState)("info");
  const [stateUserPassword, setStateUserPassword] = (0, import_react5.useState)("info");
  const {
    userContext,
    t
  } = useApp();
  (0, import_react5.useEffect)(() => {
    if (actionData?.success) {
      if (stateUserInfo !== "info")
        setStateUserInfo("info");
      if (stateUserPassword !== "info")
        setStateUserPassword("info");
    }
    if (actionData?.emailConfirmed) {
      setVisibleConfirmEmail(true);
    }
  }, [user]);
  const formRef = (0, import_react5.useRef)(null);
  const submit = useSubmit();
  const handleChangeForm = (event) => {
    event.preventDefault();
    const formData = new FormData();
    const field = event.target.name;
    if (field === "notify_email") {
      formData.append("notify_phone", user?.notifications?.phone?.toString() || "");
      formData.append("notify_email", (!user?.notifications?.email)?.toString() || "");
      formData.append("birthday", user?.birthday?.toString() || "");
      submit(formData, {
        method: "POST",
        preventScrollReset: true
      });
    } else if (field === "notify_phone") {
      formData.append("notify_phone", (!user?.notifications?.phone)?.toString() || "");
      formData.append("notify_email", user?.notifications?.email?.toString() || "");
      formData.append("birthday", user?.birthday?.toString() || "");
      submit(formData, {
        method: "POST",
        preventScrollReset: true
      });
    }
  };
  const [visibleConfirmEmail, setVisibleConfirmEmail] = (0, import_react5.useState)(false);
  const buttonConfirmEmail = () => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { type: "submit", priority: "secondary", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, children: t("user:confirm_email") }, void 0, false, {
      fileName: "app/components/pages/User/MyProfile/index.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "formName", value: "confirm_email" }, void 0, false, {
      fileName: "app/components/pages/User/MyProfile/index.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/MyProfile/index.tsx",
    lineNumber: 68,
    columnNumber: 36
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Wrapper, { children: [
    !userContext.user.isEmailConfirm && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form, { method: "POST", style: {
      width: "100%"
    }, preventScrollReset: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BoxInformation_default, { variant: BoxInformationEnum.warning, title: t("user:email_is_not_confirmed"), information: t("user:you_will_not_be_able_to_post_your_resumes_vacancies_and_companies_until_your_email_confirmation"), button: () => buttonConfirmEmail(), flexDirection: "column" }, void 0, false, {
      fileName: "app/components/pages/User/MyProfile/index.tsx",
      lineNumber: 76,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/MyProfile/index.tsx",
      lineNumber: 73,
      columnNumber: 46
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form, { method: "POST", style: {
      width: "100%"
    }, ref: formRef, preventScrollReset: true, onChange: handleChangeForm, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Wrapper, { as: motion.div, initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ModalConfirmEmail, { visibility: visibleConfirmEmail, setVisibility: setVisibleConfirmEmail }, void 0, false, {
        fileName: "app/components/pages/User/MyProfile/index.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(GeneralInfo, { user, stateUserInfo, setStateUserInfo, dictionaries, actionData }, void 0, false, {
        fileName: "app/components/pages/User/MyProfile/index.tsx",
        lineNumber: 91,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PasswordSettings, { stateUserPassword, setStateUserPassword, actionData }, void 0, false, {
        fileName: "app/components/pages/User/MyProfile/index.tsx",
        lineNumber: 93,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(NotifySettings, { user }, void 0, false, {
        fileName: "app/components/pages/User/MyProfile/index.tsx",
        lineNumber: 95,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/User/MyProfile/index.tsx",
      lineNumber: 82,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/pages/User/MyProfile/index.tsx",
      lineNumber: 79,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/User/MyProfile/index.tsx",
    lineNumber: 72,
    columnNumber: 10
  }, this);
});

// app/routes/user/myprofile.tsx
var import_message = __toESM(require_message());
var import_session = __toESM(require_session());
var import_userContext = __toESM(require_userContext());
var import_request = __toESM(require_request());
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function Index() {
  const request = useLoaderData();
  const actionData = useActionData();
  const user = request.userInfo;
  const {
    dictionaries
  } = request;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(UserInfoComponent, { user, dictionaries, actionData }, void 0, false, {
    fileName: "app/routes/user/myprofile.tsx",
    lineNumber: 227,
    columnNumber: 10
  }, this);
}
export {
  Index as default
};
