import {
  Ae,
  styled_components_browser_esm_default
} from "/build/_shared/chunk-FLSKZHT2.js";

// app/components/common/Button/enums.ts
var ButtonSizeEnum = {
  M: "M",
  S: "S"
};
var ButtonColorEnum = {
  blue: "blue",
  white: "white"
};
var ButtonPriorityEnum = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
  chips: "chips"
};

// app/components/common/Button/styles.ts
var Button = styled_components_browser_esm_default.button`
  cursor: pointer;
  white-space: nowrap;
  border-radius: ${({ onlyIcon }) => onlyIcon ? "50%" : "80px"};
  display: flex;
  flex-direction: row;
  gap: ${({ className }) => className === "icon" ? "0" : "8px"};
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  width: ${({ fullwidth, onlyIcon, className }) => {
  if (onlyIcon)
    return "40px";
  if (className === "icon")
    return "40px";
  if (fullwidth || className === "growingButton")
    return "100%";
  return "fit-content";
}};
  height: ${({ onlyIcon }) => onlyIcon ? "40px" : "100%"};
  max-height: 40px;
  transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);
  padding: ${({ size, onlyIcon }) => {
  if (onlyIcon)
    return "10px 18px";
  if (size === ButtonSizeEnum.M)
    return "15px 32px 14px";
  return "11px 16px 9px";
}};
  background-color: ${({ theme, isActive, priority }) => isActive === true && priority === ButtonPriorityEnum.tertiary ? theme.buttons.tertiary.backgroundColor : null};
  span {
    height: fit-content;
    color: ${({ theme, isActive, priority }) => isActive === true && priority === ButtonPriorityEnum.tertiary ? theme.buttons.tertiary.activeSpanColor : theme.buttons.tertiary.spanColor};
  }
  svg {
    transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);
  }
  .goBackIcon {
    display: inline-flex;
  }
  .goBackText {
    display: none;
  }

  @media (min-width: 768px) {
    cursor: pointer;
    max-height: 44px;
    height: 44px;
    width: ${({ fullwidth, onlyIcon, className }) => {
  if (onlyIcon)
    return "44px";
  if (fullwidth || className === "icon")
    return "100%";
  return "fit-content";
}};
    height: ${({ onlyIcon }) => onlyIcon ? "44px" : "100%"};
    padding: ${({ size, iconName, onlyIcon }) => {
  if (onlyIcon)
    return "10px 20px";
  if (size === ButtonSizeEnum.M && iconName)
    return "15px 32px 14px 24px";
  if (size === ButtonSizeEnum.M && !iconName)
    return "15px 32px 14px";
  if (size === ButtonSizeEnum.S && iconName)
    return "12px 24px 10px";
  if (size === ButtonSizeEnum.S && !iconName)
    return "12px 24px 10px";
  return "12px 24px 10px";
}};
    .goBackIcon {
      display: none;
    }
    .goBackText {
      display: inline-flex;
    }
  }

  @media (min-width: 1280px) {
    width: ${({ fullwidth, onlyIcon }) => {
  if (onlyIcon)
    return "44px";
  if (fullwidth)
    return "100%";
  return "fit-content";
}};
  }

  ${({ priority = ButtonPriorityEnum.primary, size = ButtonSizeEnum.M }) => {
  switch (priority) {
    case ButtonPriorityEnum.secondary:
      return Ae`
          background-color: ${({ theme }) => theme.buttons.small.backgroundColor};
          border: 1px solid ${({ theme }) => theme.buttons.small.borderColor};
          span {
            color: ${({ theme }) => theme.buttons.small.textColor};
          }
          svg {
            color: ${({ theme }) => theme.buttons.small.iconColor};
          }
          &:hover {
            background-color: ${({ theme }) => theme.buttons.secondary.focusBackgroundColor};
            border: 1px solid ${({ theme }) => theme.buttons.small.hoverBorderColor};
            span {
              color: ${({ theme }) => theme.buttons.small.textColor};
            }
          }
          &:focus {
            border: 1px solid ${({ theme }) => theme.buttons.small.focusBorderColor};
            background-color: ${({ theme }) => theme.buttons.secondary.focusBackgroundColor};
          }
          &:active {
            background-color: ${({ theme }) => theme.buttons.secondary.activeBackgroundColor};
          }

          @media (min-width: 768px) {
            cursor: pointer;
          }
        `;
    case ButtonPriorityEnum.tertiary:
      return Ae`
          &:hover,
          :focus {
            background-color: ${({ theme }) => theme.buttons.tertiary.focusBackgroundColor};
          }
          &:active {
            background-color: ${({ theme }) => theme.buttons.tertiary.activeBackgroundColor};
          }
          @media (min-width: 1024px) {
            cursor: pointer;
            padding: 11px 16px 9px;
          }
        `;
    case ButtonPriorityEnum.chips:
      return Ae`
          min-height: 32px;
          background-color: ${({ theme }) => theme.buttons.chips.backgroundColor};
          padding: 8px 14px 6px;

          span {
            color: ${({ theme }) => theme.buttons.chips.spanColor};
          }
          &:hover,
          &:focus {
            background-color: ${({ theme }) => theme.buttons.chips.focusBackgroundColor};
            span {
              color: ${({ theme }) => theme.buttons.chips.focusSpanColor};
            }
          }
          &:active {
            background-color: ${({ theme }) => theme.buttons.chips.activeBackgroundColor};
            span {
              color: ${({ theme }) => theme.buttons.chips.focusSpanColor};
            }
          }
          @media (min-width: 768px) {
            max-height: 40px;
            padding: 9px 24px 7px;
          }
        `;
    case ButtonPriorityEnum.primary:
    default:
      return Ae`
          background-color: ${({ theme }) => theme.buttons.primary.backgroundColor};
          span {
            color: ${({ theme }) => theme.buttons.primary.spanColor};
          }
          svg {
            color: ${({ theme }) => theme.buttons.primary.iconColor};
            &:hover,
            &:focus {
              color: ${({ theme }) => theme.buttons.primary.iconColorHover};
            }
          }
          &:hover,
          &:focus {
            background-color: ${({ theme }) => theme.buttons.primary.focusBackgroundColor};
            box-shadow: ${({ theme }) => theme.buttons.primary.shadow};
            transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);
          }
          &:active {
            background-color: ${({ theme }) => theme.buttons.primary.focusBackgroundColor};
            box-shadow: none;
            transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);
          }
          &:disabled,
          [disabled] {
            background-color: ${({ theme }) => theme.buttons.primary.disabledBackgroundColor};
            box-shadow: none;
            cursor: auto;
          }
        `;
  }
}}
`;

export {
  ButtonSizeEnum,
  ButtonColorEnum,
  ButtonPriorityEnum,
  Button
};
