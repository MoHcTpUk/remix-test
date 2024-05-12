import styled from 'styled-components';

import { FONT_SIZES_DESC, FONT_SIZES_MOB } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import type { TabProps } from '~/types/interfaces/iTabsSearch';

export const TabContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.tabs.tabContainer.backgroundColor};
  border-radius: 8px 8px 0 0;
  width: 100%;
  a {
    width: 100%;
    white-space: nowrap;
    min-width: fit-content;
  }
  @media (min-width: 768px) {
    height: 64px;
    border-radius: 12px 12px 0 0;
    a {
      max-width: fit-content;
    }
  }
`;

export const TabButton = styled.button<{ isActive: boolean }>`
  cursor: pointer;
  width: 100%;
  min-width: fit-content;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.tabs.tabButton.activeBackgroundColor : theme.tabs.tabButton.backgroundColor};
  padding: 12px 14px;
  border-radius: 8px 8px 0 0;
  transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);
  span {
    font-size: ${FONT_SIZES_MOB[TextVariantEnum.textBody2]};
    transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);
  }
  &:hover {
    background-color: ${({ isActive, theme }) =>
      isActive ? theme.tabs.tabButton.activeBackgroundColor : theme.tabs.tabButton.backgroundColor};
    span {
      color: ${({ theme }) => theme.tabs.tabButton.focusSpanActiveBackgroundColor};
    }
  }
  &:active,
  :focus {
    background-color: ${({ isActive, theme }) =>
      isActive
        ? theme.tabs.tabButton.focusBackgroundColor
        : theme.tabs.tabButton.focusActiveBackgroundColor};
    span {
      color: ${({ theme }) => theme.tabs.tabButton.focusSpanActiveBackgroundColor};
    }
  }

  @media (min-width: 768px) {
    max-width: fit-content;
    padding: 21px 40px 19px;
    border-radius: 12px 12px 0 0;
    span {
      font-size: ${FONT_SIZES_DESC[TextVariantEnum.textBody2]};
    }
  }

  @media (min-width: 1024px) {
    max-width: fit-content;
    padding: 21px 48px 19px;
  }

  @media (max-width: 340px) {
    span {
      font-size: 12px;
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
  @media (min-width: 768px) {
    height: 44px;
  }
`;

export const TabContent = styled.div`
  padding: 16px;
  border: 2px solid lightblue;
  margin-top: 16px;
`;
