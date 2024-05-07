import {
  motion
} from "/build/_shared/chunk-NC5IH6SX.js";
import {
  Box,
  FONT_SIZES_DESC,
  FONT_SIZES_MOB,
  Icon,
  IconEnum,
  THAI_CALENDAR_OFFSET,
  Text,
  TextVariantEnum,
  YEAR_RANGE_END_OFFSET,
  YEAR_RANGE_START_OFFSET,
  getValueLang,
  styled_components_browser_esm_default,
  useApp
} from "/build/_shared/chunk-FLSKZHT2.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6O7TW4X6.js";
import {
  __toESM
} from "/build/_shared/chunk-RFITDC3A.js";

// app/components/pages/User/MyProfile/components/Info/styles.ts
var BoxUserData = styled_components_browser_esm_default(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 1024px) {
    /* Disable animation */
    animation: none !important;
    transition: none !important;
    transition: none !important;
    animation-duration: none !important;
  }
`;
var BoxUserEditData = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  @media (min-width: 768px) {
    padding-top: 8px;
  }
`;
var BoxPicture = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;
var Image = styled_components_browser_esm_default.img`
  min-width: 96px;
  height: 96px;
  object-fit: cover;
  border-radius: 50%;
  @media (min-width: 768px) {
    width: 136px;
    height: 136px;
  }
`;

// app/components/entities/DatePicker/index.tsx
var import_react = __toESM(require_react());

// app/components/entities/DatePicker/styles.ts
var Wrapper = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  align-items: 'flex-start';
  width: 100%;
  position: relative;
`;
var WrapperInner = styled_components_browser_esm_default.div`
  display: flex;
  width: 100%;
  height: 40px;
  position: relative;
  @media (min-width: 768px) {
    height: 44px;
  }
`;
var SelectContainer = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
  opacity: ${({ disabled }) => disabled && 0.6};

  @media (min-width: 1024px) {
    /* display: flex; */
    flex-direction: row;
    /* width: 100%; */
    justify-content: space-between;
    /* gap: 24px; */
  }
`;
var CustomSelect = styled_components_browser_esm_default.select`
  border-radius: 80px;
  z-index: 2;
  position: relative;
  width: 100%;
  height: 40px;
  border: ${({ theme, error }) => error ? `2px solid ${theme.errorTextColor}` : `1px solid ${theme.inputs.borderColor}`};
  background-color: transparent;
  font-size: ${FONT_SIZES_MOB.textBody2};
  line-height: 18px;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 10px 16px;
  cursor: ${({ disabled }) => !disabled && "pointer"};

  &:focus::-webkit-textfield-decoration-container {
    visibility: hidden;
    pointer-events: none;
    position: absolute;
    border: 1px solid
      ${({ theme, error }) => error ? theme.errorTextColor : theme.inputs.borderFocusColor};
  }

  &:focus-visible {
    border: 1px solid
      ${({ theme, error }) => error ? theme.errorTextColor : theme.inputs.borderFocusColor};
    outline: none;
  }

  @media (min-width: 768px) {
    height: 44px;
    line-height: 24px;
  }
`;
var WrpperIcon = styled_components_browser_esm_default.label`
  position: absolute;
  top: 8px;
  right: 10px;
  width: 24px;
  height: 24px;
  transform: ${({ isDropdownOpen }) => isDropdownOpen ? "0" : "rotate(180deg)"};
  transition: all 0.26s ease-in;
  z-index: 1;
  pointer-events: none;
  @media (min-width: 768px) {
    top: 9px;
    right: 12px;
  }
`;
var CheckboxContainer = styled_components_browser_esm_default.div`
  display: none;
`;
var PlaceHolder = styled_components_browser_esm_default.label`
  z-index: 2;
  display: block;
  line-height: 0;
  color: ${({ theme, error }) => error ? theme.errorTextColor : theme.defaultTextColor};
  position: absolute;
  font-size: ${FONT_SIZES_MOB.textBody2};
  line-height: 18px;
  padding: 0 4px;
  transform: scale(0.8);
  top: -8px;
  left: 8px;
  background: ${({ theme, backgroundColor }) => backgroundColor || theme.inputs.backgroundDefaultColor};
  transition: all 0.2s cubic-bezier(0.84, -0.03, 0.49, 0.23);

  @media (min-width: 1024px) {
    font-size: ${FONT_SIZES_DESC.textBody2};
  }
`;
var BoxErrors = styled_components_browser_esm_default.div`
  position: absolute;
  left: 16px;
  top: 38px;

  @media (min-width: 768px) {
    top: 42px;
  }
`;

// app/components/entities/DatePicker/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function DatePicker({
  defaultDate,
  name,
  variant = "default",
  id,
  defaultDay,
  defaultMonth,
  defaultYear,
  nameDay = "day",
  nameMonth = "month",
  nameYear = "year",
  placeholderDay,
  placeholderMonth,
  placeholderYear,
  backgroundColor,
  externalEndYearLimit,
  externalStartDateLimit,
  disabled,
  errorText,
  onChange
}) {
  const {
    userContext,
    theme
  } = useApp();
  const [day, setDay] = (0, import_react.useState)(defaultDay || "");
  const [month, setMonth] = (0, import_react.useState)(defaultMonth || "");
  const [year, setYear] = (0, import_react.useState)(defaultYear || "");
  const [yearBirthday, setYearBirthday] = (0, import_react.useState)("");
  (0, import_react.useEffect)(() => {
    const yearBirthday2 = getValueLang(userContext.user.birthday, userContext.language);
    if (yearBirthday2) {
      setYearBirthday(yearBirthday2.split("-")[0]);
      setBirthday(yearBirthday2);
    }
  }, [userContext.language]);
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const start = currentYear - YEAR_RANGE_START_OFFSET;
  const [calendarSystem, setCalendarSystem] = (0, import_react.useState)("gregorian" /* Gregorian */);
  const hiddenInputRef = (0, import_react.useRef)(null);
  const [birthday, setBirthday] = (0, import_react.useState)(yearBirthday);
  const [startYearLimit, setStartYearLimit] = (0, import_react.useState)(externalStartDateLimit?.split("-")[0] || "");
  const [startMonthLimit, setStartMonthLimit] = (0, import_react.useState)(externalStartDateLimit?.split("-")[1] || "");
  (0, import_react.useEffect)(() => {
    if (externalStartDateLimit) {
      const externalStartYearLimit = externalStartDateLimit?.split("-")[0];
      setStartYearLimit(externalStartYearLimit);
      const externalStartMonthLimit = externalStartDateLimit?.split("-")[1];
      setStartMonthLimit(externalStartMonthLimit);
    }
  }, [externalStartDateLimit]);
  const allComponentsFilled = () => {
    if (variant === "year-month")
      return year && month;
    if (variant === "year")
      return Boolean(year);
    if (variant === "month")
      return Boolean(month);
    if (variant === "day")
      return Boolean(day);
    return year && month && day;
  };
  const updateHiddenInput = () => {
    if (hiddenInputRef.current && allComponentsFilled()) {
      let date = "";
      if (variant === "year") {
        if (year && year !== "yyyy") {
          date = `${year}`;
        }
      } else if (variant !== "year-month") {
        if (year && year !== "yyyy" && month && month !== "mm" && day && day !== "dd") {
          date = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
        }
      } else if (year && year !== "yyyy" && month && month !== "mm") {
        date = `${year}-${month.padStart(2, "0")}-01`;
      }
      hiddenInputRef.current.value = date;
      if (onChange)
        onChange(date);
    }
  };
  (0, import_react.useEffect)(() => {
    setYear(defaultYear || "");
  }, [defaultYear]);
  (0, import_react.useEffect)(() => {
    if (defaultDate) {
      const parts = defaultDate.split("-");
      let yyyy;
      let mm;
      let dd;
      if (parts.length === 1) {
        [yyyy] = parts;
        mm = "";
        dd = "";
      } else {
        [yyyy, mm, dd] = parts;
      }
      if (dd?.[0] === "0") {
        setDay(dd[1]);
      } else {
        setDay(dd);
      }
      if (mm?.[0] === "0") {
        setMonth(mm[1]);
      } else {
        setMonth(mm);
      }
      setYear(yyyy);
    }
  }, [defaultDate]);
  (0, import_react.useEffect)(() => {
    updateHiddenInput();
  }, [day, month, year]);
  const renderYearOptions = () => {
    if (userContext.language !== "en") {
      const currentYear3 = (/* @__PURE__ */ new Date()).getFullYear();
      const startYear2 = currentYear3 - YEAR_RANGE_START_OFFSET + THAI_CALENDAR_OFFSET;
      const endYear2 = currentYear3 + YEAR_RANGE_END_OFFSET + THAI_CALENDAR_OFFSET;
      return Array.from(Array(endYear2 - startYear2 + 1).keys()).map((i) => startYear2 + i).map((year2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: year2 === start ? "" : year2, children: year2 === startYear2 ? "YYYY" : year2 }, year2, false, {
        fileName: "app/components/entities/DatePicker/index.tsx",
        lineNumber: 160,
        columnNumber: 100
      }, this));
    }
    const currentYear2 = (/* @__PURE__ */ new Date()).getFullYear();
    const startYear = +startYearLimit || +birthday || currentYear2 - YEAR_RANGE_START_OFFSET;
    const endYear = currentYear2;
    const years = Array.from(Array(endYear - startYear + 1).keys()).map((i) => startYear + i);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "YYYY" }, "yyyy", false, {
        fileName: "app/components/entities/DatePicker/index.tsx",
        lineNumber: 171,
        columnNumber: 9
      }, this),
      years.map((year2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: year2 === start ? "" : year2, children: year2 }, year2, false, {
        fileName: "app/components/entities/DatePicker/index.tsx",
        lineNumber: 174,
        columnNumber: 28
      }, this))
    ] }, void 0, true, {
      fileName: "app/components/entities/DatePicker/index.tsx",
      lineNumber: 170,
      columnNumber: 12
    }, this);
  };
  const renderMonthOptions = () => {
    if (!year || year === startYearLimit) {
      const months = Array.from(Array(12).keys()).map((i) => i + 1);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "mm", children: "MM" }, "mm", false, {
          fileName: "app/components/entities/DatePicker/index.tsx",
          lineNumber: 185,
          columnNumber: 11
        }, this),
        months.map((month2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: month2 === start ? "" : month2, children: month2 }, month2, false, {
          fileName: "app/components/entities/DatePicker/index.tsx",
          lineNumber: 188,
          columnNumber: 32
        }, this))
      ] }, void 0, true, {
        fileName: "app/components/entities/DatePicker/index.tsx",
        lineNumber: 184,
        columnNumber: 14
      }, this);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "mm", children: "MM" }, "mm", false, {
        fileName: "app/components/entities/DatePicker/index.tsx",
        lineNumber: 195,
        columnNumber: 9
      }, this),
      Array.from(Array(12).keys()).map((i) => i + 1).map((month2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: month2 === start ? "" : month2, children: month2 }, month2, false, {
        fileName: "app/components/entities/DatePicker/index.tsx",
        lineNumber: 198,
        columnNumber: 68
      }, this))
    ] }, void 0, true, {
      fileName: "app/components/entities/DatePicker/index.tsx",
      lineNumber: 194,
      columnNumber: 12
    }, this);
  };
  const handleCalendarSystemChange = (event) => {
    const newCalendarSystem = event.target.checked ? "thai" /* Thai */ : "gregorian" /* Gregorian */;
    setCalendarSystem(newCalendarSystem);
  };
  const [isOpenDay, setIsOpenDay] = (0, import_react.useState)(false);
  const [isOpenMonth, setIsOpenMonth] = (0, import_react.useState)(false);
  const [isOpenYear, setIsOpenYear] = (0, import_react.useState)(false);
  const handleSelectOpen = (type) => {
    if (type === "day")
      setIsOpenDay(true);
    if (type === "month")
      setIsOpenMonth(true);
    if (type === "year")
      setIsOpenYear(true);
  };
  const handleSelectClose = (type) => {
    if (type === "day")
      setIsOpenDay(false);
    if (type === "month")
      setIsOpenMonth(false);
    if (type === "year")
      setIsOpenYear(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Wrapper,
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContainer, { disabled, children: [
          (variant === "default" || variant === "day") && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { width: "100%", style: {
            position: "relative"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomSelect, { value: day, name: nameDay, onChange: (e) => setDay(e.target.value), onFocus: () => handleSelectOpen("day"), onBlur: () => handleSelectClose("day"), error: Boolean(errorText), disabled, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: void 0, children: "DD" }, "placeholder", false, {
                fileName: "app/components/entities/DatePicker/index.tsx",
                lineNumber: 230,
                columnNumber: 15
              }, this),
              Array.from(Array(31).keys()).map((i) => i + 1).map((day2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: day2 || "dd", children: day2 || "dd" }, day2, false, {
                fileName: "app/components/entities/DatePicker/index.tsx",
                lineNumber: 234,
                columnNumber: 72
              }, this))
            ] }, void 0, true, {
              fileName: "app/components/entities/DatePicker/index.tsx",
              lineNumber: 229,
              columnNumber: 13
            }, this),
            placeholderDay && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlaceHolder, { className: "placeholder", backgroundColor, error: Boolean(errorText), children: placeholderDay }, void 0, false, {
              fileName: "app/components/entities/DatePicker/index.tsx",
              lineNumber: 238,
              columnNumber: 32
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrpperIcon, { isDropdownOpen: isOpenDay, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.up }, void 0, false, {
              fileName: "app/components/entities/DatePicker/index.tsx",
              lineNumber: 242,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/components/entities/DatePicker/index.tsx",
              lineNumber: 241,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/entities/DatePicker/index.tsx",
            lineNumber: 226,
            columnNumber: 58
          }, this),
          (variant === "default" || variant === "month" || variant === "year-month") && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { width: "100%", style: {
            position: "relative"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomSelect, { name: nameMonth, value: month, onChange: (e) => setMonth(e.target.value), onFocus: () => handleSelectOpen("month"), onBlur: () => handleSelectClose("month"), disabled, error: Boolean(errorText), children: renderMonthOptions() }, void 0, false, {
              fileName: "app/components/entities/DatePicker/index.tsx",
              lineNumber: 248,
              columnNumber: 13
            }, this),
            placeholderMonth && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlaceHolder, { className: "placeholder", backgroundColor, error: Boolean(errorText), children: placeholderMonth }, void 0, false, {
              fileName: "app/components/entities/DatePicker/index.tsx",
              lineNumber: 251,
              columnNumber: 34
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrpperIcon, { isDropdownOpen: isOpenMonth, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.up }, void 0, false, {
              fileName: "app/components/entities/DatePicker/index.tsx",
              lineNumber: 255,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/components/entities/DatePicker/index.tsx",
              lineNumber: 254,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/entities/DatePicker/index.tsx",
            lineNumber: 245,
            columnNumber: 88
          }, this),
          (variant === "default" || variant === "year" || variant === "year-month") && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { width: "100%", style: {
            position: "relative"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomSelect, { name: nameYear, value: year, onChange: (e) => {
              setYear(e.target.value === start.toFixed() ? "" : e.target.value);
            }, onFocus: () => handleSelectOpen("year"), onBlur: () => handleSelectClose("year"), error: Boolean(errorText), disabled, children: renderYearOptions() }, void 0, false, {
              fileName: "app/components/entities/DatePicker/index.tsx",
              lineNumber: 261,
              columnNumber: 13
            }, this),
            placeholderYear && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlaceHolder, { className: "placeholder", backgroundColor, error: Boolean(errorText), children: placeholderYear }, void 0, false, {
              fileName: "app/components/entities/DatePicker/index.tsx",
              lineNumber: 266,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrpperIcon, { isDropdownOpen: isOpenYear, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.up }, void 0, false, {
              fileName: "app/components/entities/DatePicker/index.tsx",
              lineNumber: 270,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "app/components/entities/DatePicker/index.tsx",
              lineNumber: 269,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/entities/DatePicker/index.tsx",
            lineNumber: 258,
            columnNumber: 87
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/entities/DatePicker/index.tsx",
          lineNumber: 225,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxContainer, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", id: "calendarSwitch", onChange: handleCalendarSystemChange }, void 0, false, {
            fileName: "app/components/entities/DatePicker/index.tsx",
            lineNumber: 276,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "calendarSwitch", children: "Use Thai Calendar" }, void 0, false, {
            fileName: "app/components/entities/DatePicker/index.tsx",
            lineNumber: 277,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/entities/DatePicker/index.tsx",
          lineNumber: 275,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxErrors, { isText: Boolean(errorText), children: Boolean(errorText) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textSmall, color: theme.errorTextColor, children: errorText }, void 0, false, {
          fileName: "app/components/entities/DatePicker/index.tsx",
          lineNumber: 280,
          columnNumber: 32
        }, this) }, void 0, false, {
          fileName: "app/components/entities/DatePicker/index.tsx",
          lineNumber: 279,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name, ref: hiddenInputRef, disabled }, void 0, false, {
          fileName: "app/components/entities/DatePicker/index.tsx",
          lineNumber: 284,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/entities/DatePicker/index.tsx",
      lineNumber: 222,
      columnNumber: 10
    },
    this
  );
}

export {
  BoxUserData,
  BoxUserEditData,
  BoxPicture,
  Image,
  DatePicker
};
