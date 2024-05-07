import {
  BoxErrors
} from "/build/_shared/chunk-LQ4YPZYM.js";
import {
  Box,
  FONT_SIZES_DESC,
  FONT_SIZES_MOB,
  FONT_WEIGHTS_DESC,
  FONT_WEIGHTS_MOB,
  Icon,
  IconEnum,
  LINE_HEIGHTS_DESC,
  LINE_HEIGHTS_MOB,
  Search_default,
  Text,
  TextVariantEnum,
  compareArrays,
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

// app/components/common/Select/index.tsx
var import_react = __toESM(require_react());

// app/components/common/Select/styles.ts
var Container = styled_components_browser_esm_default.div`
  position: relative;
  width: 300px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
var Header = styled_components_browser_esm_default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: ${({ disabled }) => disabled ? "auto" : "pointer"};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: ${({ variant }) => variant === "search-multi" || variant === "multi" ? "center" : "flex-start"};
  width: 100%;
  min-height: 40px;
  background-color: transparent;
  border: ${({ theme, error, isDropdownOpen }) => {
  if (isDropdownOpen)
    return `2px solid ${theme.inputs.borderFocusColor}`;
  if (!error)
    return `1px solid ${theme.inputs.borderColor}`;
  if (error)
    return `2px solid ${theme.errorTextColor}`;
  return `1px solid ${theme.inputs.borderColor}`;
}};
  transition: ${({ isDropdownOpen }) => isDropdownOpen ? "all 0.1s ease" : "all 0.26s ease-in-out 0.2s"};
  border-radius: ${({ isDropdownOpen, filteredEntries, variant, entriesState }) => {
  if (variant === "single" || variant === "multi") {
    if (isDropdownOpen && entriesState?.[0])
      return "22px 22px 0 0";
    return "22px";
  }
  if (variant === "search-multi" || variant === "search-single" || variant === "single-text") {
    if (isDropdownOpen && filteredEntries?.[0])
      return "22px 22px 0 0";
    return "22px";
  }
  return "22px";
}};
  border-bottom: ${({ isDropdownOpen, filteredEntries, variant, entriesState }) => {
  if (variant === "single" || variant === "multi") {
    if (isDropdownOpen && entriesState?.[0])
      return "0";
    return "auto";
  }
  if (variant === "search-multi" || variant === "search-single" || variant === "single-text") {
    if (isDropdownOpen && filteredEntries?.[0])
      return "0";
    return "auto";
  }
  return "auto";
}};
  padding: ${({ variant }) => variant === "multi" || variant === "search-multi" ? "3px 44px 3px 3px" : "7px 16px"};
  font-size: ${FONT_SIZES_MOB.textBody2};
  line-height: 18px;

  ~ .dropdown {
    transform: ${({ isDropdownOpen }) => isDropdownOpen ? "scaleY(1)" : "scaleY(0)"};
  }

  @media (min-width: 768px) {
    font-size: ${FONT_SIZES_DESC.textBody2};
    line-height: 24px;
    min-height: 44px;
  }
`;
var Dropdown = styled_components_browser_esm_default.div`
  position: absolute;
  transform: ${({ isDropdownOpen }) => isDropdownOpen ? "scaleY(1)" : "scaleY(0)"};
  transform-origin: top;
  transition: transform 0.26s ease;
  top: 100%;
  left: 0;
  width: 100%;
  overflow: hidden;
  max-height: 300px;
  z-index: 3;
  flex-direction: column;
  background-color: white ${({ isSelected }) => isSelected ? "white" : "rgba(234, 234, 239, 0.4)"};
  display: ${({ filteredEntries }) => filteredEntries?.[0] ? "flex" : "none"};
  background: ${({ background, theme }) => background || theme.inputs.backgroundDefaultColor};
  border: ${({ theme, error, isDropdownOpen }) => {
  if (isDropdownOpen)
    return `2px solid ${theme.inputs.borderFocusColor}`;
  if (!error)
    return `1px solid ${theme.inputs.borderColor}`;
  if (error)
    return `2px solid ${theme.errorTextColor}`;
  return `1px solid ${theme.inputs.borderColor}`;
}};
  border-top: 0;
  border-radius: 0 0 22px 22px;
`;
var Option = styled_components_browser_esm_default.div`
  padding: 10px 16px;
  display: flex;
  flex-direction: row;
  cursor: ${({ disabled }) => disabled ? "auto" : "pointer"};
  &:hover {
    background-color: #f2f2f2;
  }
  input {
    display: none;
    visibility: none;
  }
`;
var SelectedOptions = styled_components_browser_esm_default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: ${({ variant }) => variant === "single" || variant === "search-single" ? "3px 0 0" : "6px 12px"};
  border: ${({ variant, theme }) => variant === "single" || variant === "search-single" ? "none" : `1px solid ${theme.inputs.borderColor}`};
  border-radius: ${({ variant }) => variant === "single" || variant === "search-single" ? "none" : "22px"};
  position: relative;
  z-index: 2;
  margin-bottom: ${({ variant }) => (variant === "single" || variant === "search-single") && "-6px"};

  @media (min-width: 768px) {
    padding: ${({ variant }) => variant === "single" || variant === "search-single" ? "3px 0 0" : "3px 12px"};
  }
`;
var InnerTextContainer = styled_components_browser_esm_default.span`
  min-height: 18px;
  margin-top: 1px;
  margin-bottom: -1px;

  @media (min-width: 768px) {
    min-height: 24px;
  }
`;
var RemoveButton = styled_components_browser_esm_default.button`
  display: flex;
  background-color: transparent;
  border: none;
  font-size: inherit;
  cursor: ${({ disabled }) => disabled ? "auto" : "pointer"};
  align-self: start;
  &:hover {
    text-decoration: underline;
  }
  & svg {
    width: 18px;
    height: 18px;
  }

  @media (min-width: 768px) {
    padding-top: 3px;
  }
`;
var PlaceHolder = styled_components_browser_esm_default.label`
  display: block;
  line-height: 0;
  position: absolute;
  font-size: ${FONT_SIZES_MOB.textBody2};
  line-height: 18px;
  color: ${({ theme, error, dropdownVisible }) => {
  if (dropdownVisible)
    return theme.accentTextColor;
  if (error)
    return theme.errorTextColor;
  return theme.defaultTextColor;
}};
  transition: all 0.2s cubic-bezier(0.84, -0.03, 0.49, 0.23);
  transform: ${({ selectedValue, dropdownVisible, variant, className }) => {
  if (!selectedValue?.[0] && !dropdownVisible) {
    if (variant === "single" || variant === "search-single") {
      return "translate(0, 3px)";
    }
    return "translate(0, 10px)";
  }
  if (variant === "single-text" || variant === "multi" || variant === "search-multi") {
    return "translate(0, -12px) scale(0.8)";
  }
  if (variant === "single" && className === "vacancyFilter") {
    return "translate(0, -17px) scale(0)";
  }
  return "translate(0, -17px) scale(0.8)";
}};
  transform-origin: center left;
  z-index: ${({ selectedValue, dropdownVisible }) => !selectedValue?.[0] && !dropdownVisible ? "1" : "auto"};
  padding: ${({ selectedValue, dropdownVisible }) => !selectedValue?.[0] && !dropdownVisible ? "0" : "0 4px"};
  margin-left: ${({ variant }) => (variant === "multi" || variant === "search-multi") && "12px"};
  background: ${({ theme, background }) => background || theme.inputs.backgroundDefaultColor};
  top: ${({ variant }) => (variant === "single-text" || variant === "multi" || variant === "search-multi") && "2px"};

  @media (min-width: 768px) {
    font-size: ${FONT_SIZES_DESC.textBody2};
    line-height: 24px;
    padding: ${({ selectedValue, dropdownVisible }) => !selectedValue?.[0] && !dropdownVisible ? "0" : "0 6px"};
    transform: ${({ selectedValue, dropdownVisible, variant, className }) => {
  if (!selectedValue?.[0] && !dropdownVisible) {
    return variant === "single" || variant === "search-single" ? "translate(0, 3px)" : "translate(0, 10px)";
  }
  if (variant === "single-text" || variant === "multi" || variant === "search-multi") {
    return "translate(0, -15px) scale(0.8)";
  }
  if (variant === "single" && className === "vacancyFilter") {
    return "translate(0, -19px) scale(0)";
  }
  return "translate(0, -19px) scale(0.8)";
}};
  }
`;
var SearchInput = styled_components_browser_esm_default.input`
  border: none;
  background-color: transparent;
  font-size: ${FONT_SIZES_MOB.textBody2};
  font-weight: ${FONT_WEIGHTS_MOB.textBody2};
  line-height: ${LINE_HEIGHTS_MOB.textBody2};
  width: 100%;
  margin-top: ${({ variant }) => {
  if (variant === "single-text" || variant === "search-single")
    return "3px";
  if (variant === "search-multi")
    return "7px";
  return "0";
}};
  margin-left: ${({ variant }) => variant === "search-multi" && "13px"};
  margin-bottom: ${({ variant, selectedValue }) => variant === "search-multi" && selectedValue?.[0] && "7px"};
  display: ${({ isDropdownOpen, selectedValue, variant }) => {
  if (!isDropdownOpen && variant !== "single-text" && !selectedValue?.[0])
    return "none";
  if (!isDropdownOpen && variant === "single-text" && selectedValue?.[0])
    return "block";
  if (!isDropdownOpen && variant === "search-multi" && selectedValue?.[0])
    return "none";
  if (!isDropdownOpen && variant === "search-single" && selectedValue?.[0])
    return "none";
  return "block";
}};
  visibility: ${({ isDropdownOpen, selectedValue, variant }) => {
  if (!isDropdownOpen && variant !== "single-text" && !selectedValue?.[0])
    return "hidden";
  if (!isDropdownOpen && variant === "single-text" && selectedValue?.[0])
    return "visible";
  if (!isDropdownOpen && variant === "search-multi" && selectedValue?.[0])
    return "hidden";
  if (!isDropdownOpen && variant === "search-single" && selectedValue?.[0])
    return "hidden";
  return "block";
}};

  ::placeholder {
    visibility: ${({ isDropdownOpen }) => !isDropdownOpen ? "hidden" : "visible"};
  }

  ::-moz-placeholder {
    color: ${({ isDropdownOpen }) => !isDropdownOpen && "transparent"};
  }

  @media (min-width: 768px) {
    font-size: ${FONT_SIZES_DESC.textBody2};
    font-weight: ${FONT_WEIGHTS_DESC.textBody2};
    line-height: ${LINE_HEIGHTS_DESC.textBody2};
    margin-top: ${({ variant, selectedValue }) => {
  if (variant === "single-text" && !selectedValue?.[0])
    return "2px";
  if (variant === "search-single")
    return "3px";
  if (variant === "search-multi")
    return "7px";
  return "0";
}};
  }
`;
var SearchInputWrapper = styled_components_browser_esm_default.div`
  display: ${({ variant, isDropdownOpen }) => variant === "search-multi" && isDropdownOpen === false ? "none" : "flex"};
  flex-direction: row;
  position: ${({ variant }) => variant === "search-multi" ? "inherit" : "absolute"};
  width: 90%;
  top: 8px;
  svg {
    width: 24px;
    height: 24px;
    margin: ${({ variant }) => variant === "search-multi" ? "3px 0 0 10px" : "0 12px 0 0"};
  }
  @media (min-width: 768px) {
    top: 10px;
    svg {
      margin: ${({ variant }) => variant === "search-multi" && "5px 0 0 12px"};
    }
  }
`;
var WrapperIcon = styled_components_browser_esm_default.div`
  position: absolute;
  cursor: ${({ disabled }) => disabled ? "auto" : "pointer"};
  top: 8px;
  right: 10px;
  width: 24px;
  height: 24px;
  transform: ${({ isDropdownOpen }) => isDropdownOpen ? "0" : "rotate(180deg)"};
  transition: all 0.26s ease-in;
  pointer-events: none;

  @media (min-width: 768px) {
    top: 10px;
    right: 12px;
  }
`;
var AttentionErrorIcon = styled_components_browser_esm_default.div`
  position: absolute;
  top: 8px;
  right: 10px;
  svg {
    width: 24px;
    height: 24px;
  }
  @media (min-width: 768px) {
    top: 10px;
    right: 12px;
  }
`;
var ButtonClear = styled_components_browser_esm_default.button`
  cursor: ${({ disabled }) => disabled ? "auto" : "pointer"};
  position: absolute;
  top: 8px;
  right: 10px;
  @media (min-width: 768px) {
    top: 10px;
    right: 12px;
  }
`;
var SelectedArray = styled_components_browser_esm_default.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 8px;

  @media (min-width: 768px) {
    row-gap: 12px;
  }
`;

// app/components/common/Select/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Select({
  dateEntries,
  entries,
  values,
  variant = "single",
  name,
  id,
  placeholder,
  disabled,
  errorText,
  background,
  externalRef,
  setExternalState,
  externalState,
  onChange,
  className
}) {
  const {
    t,
    theme
  } = useApp();
  const [selectedValues, setSelectedValues] = (0, import_react.useState)(values || []);
  const [isDropdownOpen, setIsDropdownOpen] = (0, import_react.useState)(false);
  const [isSearchInputFocused, setSearchInputFocused] = (0, import_react.useState)(false);
  const [entriesState, setEntriesState] = (0, import_react.useState)(entries);
  (0, import_react.useEffect)(() => {
    setEntriesState(entries);
  }, [entries]);
  const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
  const dropdownRef = (0, import_react.useRef)(null);
  const selectRef = (0, import_react.useRef)(null);
  const singleTextRef = (0, import_react.useRef)(null);
  const prevValuesRef = (0, import_react.useRef)(values || []);
  function selectValue() {
    if (selectRef.current) {
      selectRef.current.value = selectedValues.join(",");
    }
    if (variant === "single-text") {
      if (singleTextRef.current) {
        singleTextRef.current.value = selectedValues.join(",");
      }
    }
  }
  (0, import_react.useEffect)(() => {
    if (variant !== "single-text") {
      if (values && !compareArrays(values, prevValuesRef.current)) {
        setSelectedValues(values);
      }
    }
    prevValuesRef.current = values || [];
  }, [values, variant]);
  (0, import_react.useEffect)(() => {
    if (setExternalState && !compareArrays(values, selectedValues) && !compareArrays(externalState, selectedValues)) {
      setExternalState(selectedValues);
    }
    selectValue();
    if (variant === "multi" || variant === "search-multi") {
      setEntriesState(() => entries?.filter((item) => !selectedValues.includes(item[0])));
    }
  }, [selectedValues, setExternalState]);
  (0, import_react.useEffect)(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !isSearchInputFocused) {
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef, isSearchInputFocused]);
  const handleSelect = (event) => {
    const {
      value
    } = event.target;
    if (onChange)
      onChange(value);
    if (variant === "single" || variant === "search-single" || variant === "single-text") {
      setSelectedValues((prevSelectedValues) => {
        if (prevSelectedValues.includes(value)) {
          return [""];
        }
        return [value];
      });
      setIsDropdownOpen(false);
    } else {
      setSelectedValues((prevSelectedValues) => {
        const index = prevSelectedValues.indexOf(value);
        if (index === -1) {
          return [...prevSelectedValues, value];
        }
        return prevSelectedValues;
      });
    }
  };
  const handleDropdownClick = () => {
    if (!disabled) {
      if (!isSearchInputFocused) {
        setIsDropdownOpen(!isDropdownOpen && !isSearchInputFocused);
      }
      if (isSearchInputFocused) {
        setSearchInputFocused(!isSearchInputFocused);
      }
    }
  };
  const handleRemove = (value) => {
    const newValues = selectedValues.filter((val) => val !== value);
    setSelectedValues(newValues);
  };
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setIsDropdownOpen(true);
    if (variant === "single-text") {
      setSelectedValues([event.target.value]);
    }
    if (onChange)
      onChange(event.target.value);
  };
  const filteredEntries = entriesState?.filter((entry) => entry[1].toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1);
  function clearSelect() {
    const {
      current
    } = selectRef;
    if (current) {
      current.value = "";
      setSelectedValues([]);
      setIsDropdownOpen(true);
      setSearchQuery("");
    }
  }
  const handleSearchInputFocus = () => {
    setIsDropdownOpen(true);
    setSearchInputFocused(true);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flexDirection: "column", width: "100%", style: {
    opacity: disabled ? "0.6" : "1",
    position: "relative"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { ref: dropdownRef, children: [
      variant === "search-multi" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { error: Boolean(errorText), onClick: handleDropdownClick, variant, isDropdownOpen, disabled, filteredEntries, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchInputWrapper, { variant: "search-multi", isDropdownOpen, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search_default, { color: theme.search.svgColor }, void 0, false, {
            fileName: "app/components/common/Select/index.tsx",
            lineNumber: 175,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchInput, { type: "text", value: searchQuery, onChange: handleSearchChange, placeholder: t("user:search"), isDropdownOpen, selectedValue: selectedValues, variant, name: "select-search-input", onFocus: handleSearchInputFocus }, void 0, false, {
            fileName: "app/components/common/Select/index.tsx",
            lineNumber: 176,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/common/Select/index.tsx",
          lineNumber: 174,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectedArray, { children: Array.isArray(selectedValues) && selectedValues[0] && selectedValues.length > 0 && selectedValues.map((value) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectedOptions, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InnerTextContainer, { children: entries?.find((entry) => entry[0] === value)?.[1] }, void 0, false, {
            fileName: "app/components/common/Select/index.tsx",
            lineNumber: 180,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemoveButton, { disabled, onClick: () => handleRemove(value), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.closeMd }, void 0, false, {
            fileName: "app/components/common/Select/index.tsx",
            lineNumber: 184,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/components/common/Select/index.tsx",
            lineNumber: 183,
            columnNumber: 21
          }, this)
        ] }, value, true, {
          fileName: "app/components/common/Select/index.tsx",
          lineNumber: 179,
          columnNumber: 127
        }, this)) }, void 0, false, {
          fileName: "app/components/common/Select/index.tsx",
          lineNumber: 178,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlaceHolder, { dropdownVisible: isDropdownOpen, selectedValue: selectedValues, className: "placeholder", background, variant, error: Boolean(errorText), children: placeholder }, void 0, false, {
          fileName: "app/components/common/Select/index.tsx",
          lineNumber: 188,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/common/Select/index.tsx",
        lineNumber: 173,
        columnNumber: 40
      }, this),
      (variant === "multi" || variant === "single") && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { error: Boolean(errorText), onClick: handleDropdownClick, variant, isDropdownOpen, disabled, entriesState, children: [
        variant === "multi" && Array.isArray(selectedValues) && selectedValues.length > 0 && selectedValues[0] ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectedArray, { children: selectedValues.map((value) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectedOptions, { disabled, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InnerTextContainer, { children: entries?.find((entry) => entry[0] === value)?.[1] }, void 0, false, {
            fileName: "app/components/common/Select/index.tsx",
            lineNumber: 196,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemoveButton, { disabled, onClick: () => handleRemove(value), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.closeMd }, void 0, false, {
            fileName: "app/components/common/Select/index.tsx",
            lineNumber: 200,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/components/common/Select/index.tsx",
            lineNumber: 199,
            columnNumber: 21
          }, this)
        ] }, value, true, {
          fileName: "app/components/common/Select/index.tsx",
          lineNumber: 195,
          columnNumber: 46
        }, this)) }, void 0, false, {
          fileName: "app/components/common/Select/index.tsx",
          lineNumber: 194,
          columnNumber: 119
        }, this) : variant === "single" && selectedValues[0] && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectedOptions, { variant, children: entriesState?.find((entry) => entry[0] === selectedValues[0])?.[1] || values?.[0] }, void 0, false, {
          fileName: "app/components/common/Select/index.tsx",
          lineNumber: 203,
          columnNumber: 79
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlaceHolder, { dropdownVisible: isDropdownOpen, selectedValue: selectedValues, className, background, variant, error: Boolean(errorText), children: placeholder }, void 0, false, {
          fileName: "app/components/common/Select/index.tsx",
          lineNumber: 206,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/common/Select/index.tsx",
        lineNumber: 193,
        columnNumber: 59
      }, this),
      variant === "search-single" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { onClick: handleDropdownClick, variant, isDropdownOpen, error: Boolean(errorText), disabled, filteredEntries, children: [
        selectedValues[0] && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectedOptions, { variant, children: entries?.find((entry) => entry[0] === selectedValues[0])?.[1] || values?.[0] }, void 0, false, {
          fileName: "app/components/common/Select/index.tsx",
          lineNumber: 212,
          columnNumber: 35
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlaceHolder, { dropdownVisible: isDropdownOpen, selectedValue: selectedValues, className: "placeholder", background, variant, error: Boolean(errorText), children: placeholder }, void 0, false, {
          fileName: "app/components/common/Select/index.tsx",
          lineNumber: 215,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchInputWrapper, { children: !selectedValues[0] && isDropdownOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search_default, { color: theme.search.svgColor }, void 0, false, {
            fileName: "app/components/common/Select/index.tsx",
            lineNumber: 220,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchInput, { type: "text", value: searchQuery, onChange: handleSearchChange, placeholder: t("user:search"), isDropdownOpen, selectedValue: selectedValues, variant, name: "select-search-input", onFocus: handleSearchInputFocus }, void 0, false, {
            fileName: "app/components/common/Select/index.tsx",
            lineNumber: 221,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/common/Select/index.tsx",
          lineNumber: 219,
          columnNumber: 56
        }, this) }, void 0, false, {
          fileName: "app/components/common/Select/index.tsx",
          lineNumber: 218,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/common/Select/index.tsx",
        lineNumber: 211,
        columnNumber: 41
      }, this),
      variant === "single-text" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { error: Boolean(errorText), onClick: handleDropdownClick, variant, isDropdownOpen, disabled, filteredEntries, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlaceHolder, { dropdownVisible: isDropdownOpen, selectedValue: selectedValues, className: "placeholder", background, variant, error: Boolean(errorText), children: placeholder }, void 0, false, {
          fileName: "app/components/common/Select/index.tsx",
          lineNumber: 227,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchInputWrapper, { children: [
          isDropdownOpen && !selectedValues[0] && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search_default, { color: theme.search.svgColor }, void 0, false, {
            fileName: "app/components/common/Select/index.tsx",
            lineNumber: 231,
            columnNumber: 56
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchInput, { type: "text", ref: singleTextRef, onChange: handleSearchChange, placeholder: t("user:enter_position"), isDropdownOpen, selectedValue: selectedValues, variant, name: "select-search-input", disabled, autoComplete: "off", onFocus: handleSearchInputFocus }, void 0, false, {
            fileName: "app/components/common/Select/index.tsx",
            lineNumber: 232,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/common/Select/index.tsx",
          lineNumber: 230,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/common/Select/index.tsx",
        lineNumber: 226,
        columnNumber: 39
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown, { isDropdownOpen, className: "dropdown", error: Boolean(errorText), filteredEntries, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        overflowY: "auto"
      }, children: filteredEntries?.map((entry) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Option, { onClick: () => !disabled && handleSelect({
        target: {
          value: variant === "single-text" ? entry[1] : entry[0]
        }
      }), isSelected: variant === "multi" && selectedValues.includes(entry[0]), isSingleSelected: selectedValues[0] === entry[0], disabled, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textBody2, style: {
        fontFamily: "MeroThai, Helvetica, Arial, Sans-Serif"
      }, children: entry[1] }, void 0, false, {
        fileName: "app/components/common/Select/index.tsx",
        lineNumber: 244,
        columnNumber: 17
      }, this) }, entry[0], false, {
        fileName: "app/components/common/Select/index.tsx",
        lineNumber: 239,
        columnNumber: 44
      }, this)) }, void 0, false, {
        fileName: "app/components/common/Select/index.tsx",
        lineNumber: 236,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/common/Select/index.tsx",
        lineNumber: 235,
        columnNumber: 9
      }, this),
      errorText && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AttentionErrorIcon, { className: "editPencil", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.attentionError }, void 0, false, {
        fileName: "app/components/common/Select/index.tsx",
        lineNumber: 254,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/common/Select/index.tsx",
        lineNumber: 253,
        columnNumber: 23
      }, this),
      !errorText && (variant === "search-single" || variant === "single-text") && selectedValues[0] && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonClear, { disabled, type: "button", onClick: (e) => {
        clearSelect();
        setIsDropdownOpen(true);
        setSearchInputFocused(false);
        e.stopPropagation();
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.closeMd }, void 0, false, {
        fileName: "app/components/common/Select/index.tsx",
        lineNumber: 263,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/common/Select/index.tsx",
        lineNumber: 257,
        columnNumber: 107
      }, this),
      (!errorText && (variant === "single" || variant === "multi" || variant === "search-multi") || !errorText && !selectedValues[0]) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperIcon, { disabled, onClick: handleDropdownClick, isDropdownOpen, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: IconEnum.up }, void 0, false, {
        fileName: "app/components/common/Select/index.tsx",
        lineNumber: 267,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/common/Select/index.tsx",
        lineNumber: 266,
        columnNumber: 141
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: selectRef, type: "text", style: {
        display: "none"
      }, id, name, defaultValue: values?.join(",") }, void 0, false, {
        fileName: "app/components/common/Select/index.tsx",
        lineNumber: 286,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/Select/index.tsx",
      lineNumber: 172,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoxErrors, { isText: Boolean(errorText), isDropdownOpen, children: Boolean(errorText) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: TextVariantEnum.textSmall, color: theme.errorTextColor, children: errorText }, void 0, false, {
      fileName: "app/components/common/Select/index.tsx",
      lineNumber: 291,
      columnNumber: 32
    }, this) }, void 0, false, {
      fileName: "app/components/common/Select/index.tsx",
      lineNumber: 290,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Select/index.tsx",
    lineNumber: 168,
    columnNumber: 10
  }, this);
}

export {
  Select
};
