import { ButtonSizeEnum, ButtonPriorityEnum } from './enums';
import styled, { css } from 'styled-components';
import type { ButtonProps } from './index';

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  border-radius: 80px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: flex-start;
  width: fit-content;
  transition: all 0.1s ease-in;
  padding: ${({ size }) => (size === ButtonSizeEnum.M ? '16px 32px' : '10px 24px')};
  &:hover,
  &:focus {
    transform: scale(0.95);
  }
  svg {
    transition: all 0.1s ease-in;
  }

  @media (min-width: 768px) {
    padding: ${({ size, pensil }) => {
      if (size === ButtonSizeEnum.M && pensil) return '16px 32px 16px 24px';
      if (size === ButtonSizeEnum.M && !pensil) return '16px 32px';
      if (size === ButtonSizeEnum.S && pensil) return '10px 24px 10px 16px';
      if (size === ButtonSizeEnum.S && !pensil) return '10px 24px';
    }};
    &:hover {
      transform: scale(1);
    }
    &:active {
      transform: scale(0.95);
      span {
        font-weight: 600;
      }
    }
  }

  @media (min-width: 1024px) {
    cursor: pointer;
    padding: ${({ size, pensil }) => {
      if (size === ButtonSizeEnum.S && pensil) return '16px 32px 16px 56px';
      if (size === ButtonSizeEnum.S && !pensil) return '16px 32px';
    }};
  }

  ${({ priority = ButtonPriorityEnum.primary, size = ButtonSizeEnum.M }) => {
    switch (priority) {
      case ButtonPriorityEnum.primary:
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
      case ButtonPriorityEnum.small:
        return css`
          background-color: ${({ theme }) => theme.buttons.small.backgroundColor};
          border: 1px solid ${({ theme }) => theme.buttons.small.borderColor};
          padding: 10px 24px;
          span {
            color: ${({ theme }) => theme.buttons.small.borderColor};
          }
          svg {
            color: ${({ theme }) => theme.buttons.small.iconColor};
          }
          &:hover {
            background-color: ${({ theme }) => theme.buttons.small.hoverBackgroundColor};
            border: 1px solid ${({ theme }) => theme.buttons.small.hoverBorderColor};
            span {
              color: ${({ theme }) => theme.buttons.small.hoverBorderSpanColor};
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
            padding: 10px 24px;
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
          padding: 8px 14px;

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
              font-weight: 600;
            }
          }
          @media (min-width: 768px) {
            padding: 12px 24px;
          }
        `;
    }
  }}
`;
