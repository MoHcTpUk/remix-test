import { ButtonSizeEnum, ButtonPriorityEnum } from './enums';
import styled, { css } from 'styled-components';
import type { ButtonProps } from './index';

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  border-radius: 80px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: fit-content;
  transition: all 0.1s ease-in;
  padding: ${({ size }) => (size === ButtonSizeEnum.M ? '12px 28px' : '8px 20px')};
  &:hover,
  &:focus {
    transform: scale(0.95);
  }

  @media (min-width: 768px) {
    padding: ${({ size }) => (size === ButtonSizeEnum.M ? '16px 32px' : '10px 24px')};
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
  }

  ${({ priority = ButtonPriorityEnum.primary, size = ButtonSizeEnum.M }) => {
    switch (priority) {
      case ButtonPriorityEnum.primary:
        return css`
          background-color: ${({ theme }) => theme.buttons.primary.backgroundColor};
          span {
            color: ${({ theme }) => theme.buttons.primary.spanColor};
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
          span {
            color: ${({ theme }) => theme.buttons.small.borderColor};
          }
          &:hover {
            background-color: ${({ theme }) => theme.buttons.small.hoverBackgroundColor};
            border: 1px solid ${({ theme }) => theme.buttons.small.hoverBorderColor};
            span {
              color: ${({ theme }) => theme.buttons.small.hoverBorderSpanColor};
            }
          }
          &:focus {
            border: 1px solid ${({ theme }) => theme.buttons.small.focusBorderColor};
          }
        `;
      case ButtonPriorityEnum.secondary:
        return css`
          background-color: ${({ theme }) => theme.buttons.secondary.backgroundColor};
          span {
            color: ${({ theme }) => theme.buttons.secondary.spanColor};
          }
          &:hover,
          &:focus {
            background-color: ${({ theme }) => theme.buttons.secondary.focusBackgroundColor};
            span {
              color: ${({ theme }) => theme.buttons.secondary.focusSpanColor};
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
              font-weight: 600;
            }
          }
          &:active {
            border: 1px solid ${({ theme }) => theme.buttons.chips.focusSpanColor};
            span {
              color: ${({ theme }) => theme.buttons.chips.focusSpanColor};
            }
          }
          @media (min-width: 768px) {
            padding: 12px 24px;
          }
        `;
    }
  }}
`;
