import {
  FONT_SIZES_DESC,
  FONT_SIZES_MOB,
  styled_components_browser_esm_default
} from "/build/_shared/chunk-L3EPBPPP.js";

// app/components/common/Input/styles.ts
var Wrapper = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  align-items: 'flex-start';
  width: 100%;
  position: relative;
  opacity: ${({ disabled }) => disabled && "0.5"};
`;
var WrapperInner = styled_components_browser_esm_default.div`
  display: flex;
  width: 100%;
  min-height: ${({ variant }) => variant === "textarea" && "40px"};
  height: ${({ variant }) => variant === "textarea" ? "auto" : "40px"};
  position: relative;
  @media (min-width: 768px) {
    height: ${({ variant }) => variant !== "textarea" && "44px"};
  }
`;
var InputComponent = styled_components_browser_esm_default.input`
  cursor: ${({ disabled }) => disabled && "auto"};
  width: 100%;
  height: 40px;
  border: ${({ theme, error }) => error ? `2px solid ${theme.errorTextColor}` : `1px solid ${theme.inputs.borderColor}`};

  background-color: transparent;
  border-radius: 80px;
  padding: 11px 16px;
  font-size: ${FONT_SIZES_MOB.textBody2};
  line-height: 18px;

  &:focus::-webkit-textfield-decoration-container {
    visibility: hidden;
    pointer-events: none;
    position: absolute;
    border: 2px solid ${({ theme, disabled }) => !disabled && theme.inputs.borderFocusColor};
  }

  &:focus ~ .editPencil {
    display: none;
  }

  @supports (not (-ms-ime-align: auto)) {
    &:focus + .placeholder {
      transform: translate(16px, -50px) scale(0.8);
      transform-origin: center left;
      z-index: 1;
      padding: 0px 4px;
      background: ${({ theme, background }) => background || theme.inputs.backgroundDefaultColor};
      color: ${({ theme }) => theme.inputs.borderFocusColor};
    }
    &:not(:placeholder-shown) ~ .placeholder {
      transform: translate(16px, -50px) scale(0.8);
      transform-origin: center left;
      z-index: 1;
      padding: 0px 4px;
      background: ${({ theme, background }) => background || theme.inputs.backgroundDefaultColor};
    }

    &:focus,
    :active {
      border: ${({ theme, disabled }) => !disabled ? `2px solid ${theme.inputs.borderFocusColor}` : `1px solid ${theme.inputs.borderColor}`};
    }
  }

  @media (min-width: 768px) {
    height: 44px;
    padding: 10px 16px;
    font-size: ${FONT_SIZES_DESC.textBody2};
    line-height: 24px;

    @supports (not (-ms-ime-align: auto)) {
      &:focus + .placeholder {
        transform: translate(16px, -50px) scale(0.8);
        transform-origin: center left;
        padding: 0px 6px;
        color: ${({ theme }) => theme.inputs.borderFocusColor};
      }
      &:not(:placeholder-shown) ~ .placeholder {
        transform: translate(16px, -50px) scale(0.8);
        transform-origin: center left;
        padding: 0px 6px;
        background: ${({ theme, background }) => background || theme.inputs.backgroundDefaultColor};
      }
    }
  }
`;
var TextareaComponent = styled_components_browser_esm_default.textarea`
  display: flex;
  width: 100%;
  min-height: 40px;
  overflow: hidden;
  border: ${({ theme }) => `1px solid ${theme.inputs.borderColor}`};
  background-color: transparent;
  border-radius: 80px;
  padding: 8px 16px;
  font-size: ${FONT_SIZES_MOB.textBody2};
  line-height: 18px;
  resize: none;

  &:focus::-webkit-textfield-decoration-container {
    visibility: hidden;
    pointer-events: none;
    position: absolute;
    outline-color: ${({ theme }) => theme.inputs.borderFocusColor};
    border: 2px solid ${({ theme }) => theme.inputs.borderFocusColor};
  }
  &:focus ~ .editPencil {
    display: none;
  }

  @supports (not (-ms-ime-align: auto)) {
    &:focus + .placeholder {
      transform: translate(-10px, -50px) scale(0.8);
      transform-origin: center left;
      z-index: 1;
      padding: 0px 4px;
      background: ${({ theme, background }) => background || theme.inputs.backgroundDefaultColor};
      color: ${({ theme }) => theme.inputs.borderFocusColor};
    }
    &:not(:placeholder-shown) ~ .placeholder {
      transform: translate(-10px, -50px) scale(0.8);
      transform-origin: center left;
      z-index: 1;
      padding: 0px 4px;
      background: ${({ theme, background }) => background || theme.inputs.backgroundDefaultColor};
    }

    &:focus,
    :active {
      outline-color: ${({ theme }) => theme.inputs.borderFocusColor};
      border: 2px solid ${({ theme, disabled }) => !disabled && theme.inputs.borderFocusColor};
    }
  }

  @media (min-width: 768px) {
    min-height: 44px;
    font-size: ${FONT_SIZES_DESC.textBody2};
    line-height: 24px;
    border-radius: 80px;
    padding: 8px 16px;

    @supports (not (-ms-ime-align: auto)) {
      &:focus + .placeholder {
        transform: translate(-9px, -50px) scale(0.8);
        transform-origin: center left;
        padding: 0px 6px;
      }
      &:not(:placeholder-shown) ~ .placeholder {
        transform: translate(-9px, -50px) scale(0.8);
        transform-origin: center left;
        z-index: 1;
        padding: 0px 6px;
      }
    }
  }
`;
var PlaceHolder = styled_components_browser_esm_default.label`
  display: block;
  line-height: 0;
  color: ${({ theme, error }) => error ? theme.errorTextColor : theme.defaultTextColor};
  position: absolute;
  font-size: ${FONT_SIZES_MOB.textBody2};
  line-height: 18px;
  top: 40px;
  left: ${({ variant }) => variant === "textarea" ? "26px" : null};

  @supports (not (-ms-ime-align: auto)) {
    transform: translate(16px, -28px);
    transition: all 0.2s cubic-bezier(0.84, -0.03, 0.49, 0.23);
  }

  @media (min-width: 768px) {
    top: 39px;
    font-size: ${FONT_SIZES_DESC.textBody2};
    line-height: 24px;
  }
`;
var BoxErrors = styled_components_browser_esm_default.div`
  position: absolute;
  left: 16px;
  top: 38px;
  display: ${({ isDropdownOpen }) => isDropdownOpen && "none"};

  @media (min-width: 768px) {
    top: 42px;
  }
`;
var ButtonClear = styled_components_browser_esm_default.button`
  cursor: ${({ disabled }) => disabled ? "auto" : "pointer"};
  position: absolute;
  top: 8px;
  right: 10px;
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.inputs.backgroundDefaultColor};

  &:hover,
  :focus,
  :active {
    background-color: ${({ theme }) => theme.inputs.backgroundDefaultColor};
  }
  @media (min-width: 768px) {
    top: 10px;
    right: 12px;
  }
`;
var TextareaIcon = styled_components_browser_esm_default.div`
  position: absolute;
  top: 8px;
  left: 10px;
  svg {
    width: 24px;
    height: 24px;
  }
  @media (min-width: 768px) {
    top: 10px;
    left: 12px;
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

export {
  Wrapper,
  WrapperInner,
  InputComponent,
  TextareaComponent,
  PlaceHolder,
  BoxErrors,
  ButtonClear,
  TextareaIcon,
  AttentionErrorIcon
};
//# sourceMappingURL=/build/_shared/chunk-KYNJZNBK.js.map
