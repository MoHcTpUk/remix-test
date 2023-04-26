import styled from 'styled-components';
import type { TabProps } from '.';

export const TabContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.tabs.tabContainer.backgroundColor};
  border-radius: 16px 16px 0 0;
  width: 100%;
`;

export const TabButton = styled.button<{ isActive: boolean }>`
  cursor: pointer;
  width: 100%;
  min-width: fit-content;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.tabs.tabButton.activeBackgroundColor : theme.tabs.tabButton.backgroundColor};
  padding: 12px 17px;
  border-radius: 16px 16px 0 0;
  transition: all 0.15s ease-in;
  &:hover,
  &:focus {
    background-color: ${({ isActive, theme }) =>
      isActive
        ? theme.tabs.tabButton.focusBackgroundColor
        : theme.tabs.tabButton.focusActiveBackgroundColor};
    span {
      color: ${({ isActive, theme }) =>
        isActive
          ? theme.tabs.tabButton.focusSpanActiveBackgroundColor
          : theme.tabs.tabButton.focusSpanBackgroundColor};
      font-weight: 400;
    }
  }
  &:active {
    span {
      font-weight: ${({ isActive }) => (isActive ? 400 : 500)};
    }
  }

  @media (min-width: 768px) {
    padding: 18px 40px;
    &:hover,
    &:focus {
      background-color: ${({ isActive, theme }) =>
        isActive
          ? theme.tabs.tabButton.focusBackgroundColor
          : theme.tabs.tabButton.focusActiveBackgroundColor};
      span {
        color: ${({ isActive, theme }) =>
          isActive
            ? theme.tabs.tabButton.focusSpanActiveBackgroundColor
            : theme.tabs.tabButton.focusSpanBackgroundColor};
        font-weight: 400;
      }
    }
    &:active {
      background-color: ${({ isActive, theme }) =>
        isActive
          ? theme.tabs.tabButton.focusBackgroundColor
          : theme.tabs.tabButton.focusActiveBackgroundColor};
      span {
        color: ${({ isActive, theme }) =>
          isActive
            ? theme.tabs.tabButton.focusSpanActiveBackgroundColor
            : theme.tabs.tabButton.focusSpanBackgroundColor};
        font-weight: ${({ isActive }) => (isActive ? 400 : 600)};
      }
    }
  }

  @media (min-width: 940px) {
    max-width: fit-content;
    padding: 24px 44px;
  }

  @media (min-width: 1280px) {
    max-width: fit-content;
    padding: 24px 40px;
  }

  @media (max-width: 768px) {
    span {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

export const MiddleBorder = styled.div<{ index: number; activeTab: TabProps; tabs: TabProps[] }>`
  min-width: 1px;
  height: 26px;
  transition: all 0.15s ease-in;
  background-color: ${({ theme }) => theme.tabs.middleBorder.backgroundColor};
  visibility: ${({ index, activeTab, tabs }) =>
    index !== tabs.length - 1 &&
    activeTab.id !== tabs[index]?.id &&
    activeTab.id !== tabs[index + 1]?.id
      ? 'visible'
      : 'hidden'};
  @media (min-width: 940px) {
    height: 44px;
  }
`;

export const TabContent = styled.div`
  padding: 16px;
  border: 2px solid lightblue;
  margin-top: 16px;
`;
