import { ResponseType } from 'shared/v2/responses';
import { styled, css } from 'styled-components';

import { ResponseState } from '~/types/enums/responseState';

export const Wrapper = styled.div<{
  type?: ResponseType;
  state?: ResponseState | string;
  position?: string;
  onlyContainer?: boolean;
}>`
  display: flex;
  width: 100%;
  padding: 16px 24px;
  position: ${({ position }) => (position === 'relative' ? 'relative' : 'absolute')};
  padding: ${({ onlyContainer }) => (onlyContainer ? '0px' : '16px 24px')};
  top: 0;
  left: 0;
  border-radius: 8px 8px 0 0;
  ${({ type, state }) => {
    if (state === ResponseState.APPROVED) {
      return css`
        background-color: ${({ theme }) => theme.boxInformation.success.backgroundColor};
      `;
    }
    if (type === ResponseType.invitation) {
      return css`
        background-color: ${({ theme }) => theme.boxInformation.info.backgroundColor};
      `;
    }
    return css`
      background-color: ${({ theme }) => theme.boxInformation.warning.backgroundColor};
    `;
  }}

  @media (min-width: 768px) {
    border-radius: 12px 12px 0 0;
  }
`;

export const ContainerInfo = styled.div<{
  type?: ResponseType;
  state?: ResponseState | string;
}>`
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
  border-radius: 80px;
  padding: 1px 12px 1px 5px;
  ${({ type, state }) => {
    if (type === ResponseType.request && state === ResponseState.APPROVED) {
      return css`
        border: ${({ theme }) => `1px solid ${theme.boxInformation.success.borderColor}`};
      `;
    }
    if (type === ResponseType.invitation) {
      return css`
        border: ${({ theme }) => `1px solid ${theme.boxInformation.info.borderColor}`};
      `;
    }
    return css`
      border: ${({ theme }) => `1px solid ${theme.boxInformation.warning.borderColor}`};
    `;
  }};
`;
