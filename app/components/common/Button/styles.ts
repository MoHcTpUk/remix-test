import { ButtonSizeEnum, ButtonColorEnum, ButtonPriorityEnum } from './enums';
import styled, { css } from 'styled-components';
import type { ButtonProps } from './index';
import {
  color_dark_blue_16,
  color_erl_gray,
  color_light_gray,
  color_vasil,
  color_vasil_80,
  color_vasil_dark,
  color_white,
} from 'public/styles/variables';

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  border-radius: 80px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: fit-content;
  transition: all 0.1s ease-in;
  padding: ${({ size }) => (size === ButtonSizeEnum.M ? '12px 28px' : '8px 20px')};
  &:hover {
    transform: scale(0.95);
  }

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
          background-color: ${color_vasil};
          span {
            color: ${color_white};
          }
          &:hover,
          &:focus {
            background-color: ${color_vasil_dark};
          }
        `;
      case ButtonPriorityEnum.small:
        return css`
          background-color: ${color_white};
          border: 1px solid ${color_vasil};
          span {
            color: ${color_vasil};
          }
          &:hover,
          &:focus {
            background-color: ${color_vasil_80};
            border: 1px solid ${color_vasil_80};
            span {
              color: ${color_white};
            }
          }
        `;
      case ButtonPriorityEnum.secondary:
        return css`
          background-color: ${color_white};
          span {
            color: ${color_erl_gray};
          }
          &:hover,
          &:focus {
            background-color: ${color_light_gray};
            span {
              color: ${color_vasil};
            }
          }
        `;
      case ButtonPriorityEnum.chips:
        return css`
          background-color: ${color_light_gray};
          padding: 8px 14px;
          span {
            color: ${color_erl_gray};
          }
          &:hover,
          &:focus {
            background-color: ${color_dark_blue_16};
            span {
              color: ${color_vasil};
              font-weight: 600;
            }
          }
          &:active {
            border: 1px solid ${color_vasil};
          }
          @media (min-width: 768px) {
            padding: 12px 24px;
          }
        `;
    }
  }}
`;
