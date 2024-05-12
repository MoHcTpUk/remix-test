import { styled } from 'styled-components';

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 460px;
  max-width: 100%;
  height: 160px;

  @media (min-width: 1024px) {
    gap: 32px;
  }
`;

export const BoxInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.user.borderCustomFieldData};
  padding: 12px;

  .link {
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const BoxIcons = styled.div`
  overflow: auto;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: visible;
  min-width: max-content;
  gap: 8px;
`;
