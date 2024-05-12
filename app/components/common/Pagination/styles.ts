import { styled } from 'styled-components';

export const BoxPagination = styled.div`
  width: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  max-width: 920px;
  margin-bottom: 16px;
  flex-direction: row;
  gap: 16px;

  @media (min-width: 1024px) {
    margin-bottom: 24px;
    gap: 24px;
  }
  @media (min-width: 1280px) {
    max-width: 100%;
  }

  .pagination__arrow {
    background-color: ${({ theme }) => theme.pagination.backgroundArrowColor};
  }
`;

export const PageButton = styled.button<{ active: boolean }>`
  cursor: ${({ active }) => (active ? 'auto' : 'pointer')};
  transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);
  display: flex;
  width: 32px;
  height: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid
    ${({ theme, active }) =>
      active ? theme.pagination.activeBorderColor : theme.pagination.borderColor};
  background-color: ${({ theme, active }) => active && theme.pagination.backgroundActiveColor};

  span {
    color: ${({ active }) => active && '#FFF'};
    margin-top: 2px;
    margin-right: 1px;
  }

  &:hover {
    border: 1px solid
      ${({ theme, active }) =>
        active ? theme.pagination.activeBorderColor : theme.pagination.borderColor};
    background-color: ${({ theme, active }) =>
      active ? theme.pagination.backgroundActiveColor : theme.pagination.backgroundHoverColor};
  }
`;
