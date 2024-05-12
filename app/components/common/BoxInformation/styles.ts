import { styled, css } from 'styled-components';

import { BoxInformationEnum } from '~/types/enums/boxInformationEnum';

export const Wrapper = styled.div<{
  variant?: BoxInformationEnum;
  flexDirection?: string;
  type?: string;
  noShadow?: boolean;
}>`
  display: flex;
  /* width: 100%; */
  width: ${({ type }) => (type === 'popup' ? '343px' : '100%')};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: space-between;
  border-radius: 8px;
  padding: 16px;
  height: fit-content;
  box-shadow: ${({ theme, noShadow }) => !noShadow && theme.сards.shadow};
  ${({ variant = BoxInformationEnum.info }) => {
    switch (variant) {
      case BoxInformationEnum.success:
        return css`
          background-color: ${({ theme }) => theme.boxInformation.success.backgroundColor};
        `;
      case BoxInformationEnum.error:
        return css`
          background-color: ${({ theme }) => theme.boxInformation.error.backgroundColor};
        `;
      case BoxInformationEnum.warning:
        return css`
          background-color: ${({ theme }) => theme.boxInformation.warning.backgroundColor};
        `;
      default:
        return css`
          background-color: ${({ theme }) => theme.boxInformation.info.backgroundColor};
        `;
    }
  }}
  @media (min-width: 768px) {
    width: ${({ type }) => (type === 'popup' ? '606px' : '100%')};
    border-radius: 12px;
    padding: 24px;
  }
  @media (min-width: 1280px) {
    width: ${({ type }) => (type === 'popup' ? '690px' : '100%')};
    position: relative;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: flex-start;
  @media (min-width: 768px) {
    gap: 12px;
  }
`;

export const MessageWrapper = styled.div<{ flexDirection?: string }>`
  width: 100%;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  gap: 8px;
  margin-top: 5px;
  @media (min-width: 768px) {
    margin-top: 2px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 6px;
`;

export const List = styled.ul`
  padding-left: 8px;
  @media (min-width: 768px) {
    padding-left: 10px;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  &::before {
    content: '·';
    font-size: 36px;
    vertical-align: middle;
    padding-right: 10px;
  }
`;
