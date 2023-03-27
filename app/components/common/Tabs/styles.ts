import styled from 'styled-components';
import {
  color_erl_gray,
  color_lavender,
  color_light_gray,
  color_vasil,
  color_white,
} from 'public/styles/variables';
import { TabProps } from '.';

export const TabContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${color_lavender};
  border-radius: 16px 16px 0 0;
`;

export const TabButton = styled.button<{ isActive: boolean }>`
  cursor: pointer;
  width: 100%;
  min-width: fit-content;
  background-color: ${({ isActive }) => (isActive ? color_white : color_lavender)};
  padding: 12px 18px;
  border-radius: 16px 16px 0 0;
  transition: all 0.15s ease-in;
  &:hover,
  &:focus {
    background-color: ${({ isActive }) => (isActive ? color_white : color_light_gray)};
    span {
      color: ${({ isActive }) => (isActive ? color_erl_gray : color_vasil)};
      font-weight: ${({ isActive }) => (isActive ? 400 : 500)};
    }
  }

  @media (min-width: 768px) {
    &:hover,
    &:focus {
      background-color: ${({ isActive }) => (isActive ? color_white : color_light_gray)};
      span {
        color: ${({ isActive }) => (isActive ? color_erl_gray : color_vasil)};
        font-weight: 400;
      }
    }
    &:active {
      background-color: ${({ isActive }) => (isActive ? color_white : color_light_gray)};
      span {
        color: ${({ isActive }) => (isActive ? color_erl_gray : color_vasil)};
        font-weight: ${({ isActive }) => (isActive ? 400 : 600)};
      }
    }
  }

  @media (min-width: 1025px) {
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
  background-color: ${color_vasil};
  visibility: ${({ index, activeTab, tabs }) =>
    index !== tabs.length - 1 &&
    activeTab.id !== tabs[index]?.id &&
    activeTab.id !== tabs[index + 1]?.id
      ? 'visible'
      : 'hidden'};
  @media (min-width: 1024px) {
    height: 40px;
  }
`;

export const TabContent = styled.div`
  padding: 16px;
  border: 2px solid lightblue;
  margin-top: 16px;
`;
