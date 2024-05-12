import { styled } from 'styled-components';

export const LinkContainer = styled.div<{ isActive?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.navLinks.borderColor};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.navLinks.backgroundActiveColor : theme.navLinks.backgroundColor};
  border-radius: 80px;
  height: 40px;
  padding: 8px 16px;
  transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);

  &:hover,
  &:focus {
    background-color: ${({ theme, isActive }) =>
      isActive ? theme.navLinks.backgroundActiveColor : theme.navLinks.hoverBackgroundColor};
  }
  &:active {
    background-color: ${({ theme, isActive }) =>
      isActive ? theme.navLinks.backgroundActiveColor : theme.navLinks.pressedBackgroundColor};
  }

  @media (min-width: 768px) {
    height: 44px;
    padding: 10px 16px;
  }
`;
