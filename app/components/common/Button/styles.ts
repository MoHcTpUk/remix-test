import styled, { css } from 'styled-components';

import { ButtonPriorityEnum, ButtonSizeEnum } from './enums';
import type { ButtonProps } from './index';

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  border-radius: ${({ onlyIcon }) => (onlyIcon ? '50%' : '80px')};
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: ${({ fullwidth, onlyIcon }) =>
    // eslint-disable-next-line no-nested-ternary
    onlyIcon ? '40px' : fullwidth ? '100%' : 'fit-content'};
  height: 40px;
  transition: all 0.1s ease-in;
  padding: ${({ size }) => (size === ButtonSizeEnum.M ? '15px 32px 14px' : '12px 20px 10px')};
  &:hover,
  &:focus {
    transform: scale(0.95);
  }
  svg {
    transition: all 0.1s ease-in;
  }

  span {
    height: fit-content;
  }

  @media (min-width: 768px) {
    padding: ${({ size, iconName }) => {
      if (size === ButtonSizeEnum.M && iconName) return '15px 32px 14px 24px';
      if (size === ButtonSizeEnum.M && !iconName) return '15px 32px 14px';
      if (size === ButtonSizeEnum.S && iconName) return '12px 20px 10px 16px';
      if (size === ButtonSizeEnum.S && !iconName) return '12px 20px 10px';

      return '12px 20px 10px';
    }};
    &:hover {
      transform: scale(1);
    }
    &:active {
      transform: scale(0.95);
      span {
        /* font-weight: 600; */
      }
    }
  }

  @media (min-width: 1024px) {
    cursor: pointer;
    padding: ${({ size, iconName }): string => {
      if (size === ButtonSizeEnum.S && iconName) return '15px 32px 14px 56px';
      if (size === ButtonSizeEnum.S && !iconName) return '15px 32px 14px';

      return '15px 32px 14px';
    }};
  }

  ${({ priority = ButtonPriorityEnum.primary, size = ButtonSizeEnum.M }) => {
    switch (priority) {
      case ButtonPriorityEnum.small:
        return css`
          background-color: ${({ theme }) => theme.buttons.small.backgroundColor};
          border: 1px solid ${({ theme }) => theme.buttons.small.borderColor};
          padding: 10px 20px;
          span {
            color: ${({ theme }) => theme.buttons.small.textColor};
          }
          svg {
            color: ${({ theme }) => theme.buttons.small.iconColor};
          }
          &:hover {
            background-color: ${({ theme }) => theme.buttons.small.hoverBackgroundColor};
            border: 1px solid ${({ theme }) => theme.buttons.small.hoverBorderColor};
            span {
              color: ${({ theme }) => theme.buttons.small.textColor};
            }
            svg {
              color: ${({ theme }) => theme.buttons.small.iconColorHover};
            }
          }
          &:focus {
            border: 1px solid ${({ theme }) => theme.buttons.small.focusBorderColor};
          }
          &:active {
            background-color: ${({ theme }) => theme.buttons.small.pressedBacgroundColor};
          }
          @media (min-width: 1024px) {
            cursor: pointer;
            padding: 12px 20px 10px;
          }
        `;
      case ButtonPriorityEnum.secondary:
        return css`
          background-color: ${({ theme }) => theme.buttons.secondary.backgroundColor};
          span {
            color: ${({ theme }) => theme.buttons.secondary.spanColor};
          }
          svg {
            color: ${({ theme }) => theme.buttons.small.iconColor};
          }
          &:hover,
          &:focus {
            background-color: ${({ theme }) => theme.buttons.secondary.focusBackgroundColor};
            span {
              color: ${({ theme }) => theme.buttons.secondary.focusSpanColor};
            }
            svg {
              color: ${({ theme }) => theme.buttons.small.iconColorHover};
            }
          }
        `;
      case ButtonPriorityEnum.chips:
        return css`
          background-color: ${({ theme }) => theme.buttons.chips.backgroundColor};
          padding: 8px 14px 5px;

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
            border: 1px solid ${({ theme }) => theme.buttons.chips.focusSpanColor};
            span {
              color: ${({ theme }) => theme.buttons.chips.focusSpanColor};
              /* font-weight: 600; */
            }
          }
          @media (min-width: 768px) {
            padding: 12px 20px 8px;
          }
        `;
      case ButtonPriorityEnum.primary:
      default:
        return css`
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
          }
        `;
    }
  }}
`;
