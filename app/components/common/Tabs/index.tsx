import { color_erl_gray, color_erl_gray_70 } from 'public/styles/variables';
import React, { useState } from 'react';
import { Text } from '../Text';
import { MiddleBorder, TabButton, TabContainer, TabContent } from './styles';

export interface TabProps {
  id: string;
  label: string;
  content: string;
}

export interface TabSwitcherProps {
  tabs: TabProps[];
}

const TabSwitcher: React.FC<TabSwitcherProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab: TabProps) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <TabContainer>
        {tabs.map((tab, index) => (
          <React.Fragment key={tab.id}>
            <TabButton isActive={activeTab.id === tab.id} onClick={() => handleTabClick(tab)}>
              <Text
                variant='textBody1'
                color={activeTab.id === tab.id ? color_erl_gray : color_erl_gray_70}
              >
                {tab.label}
                {activeTab.id === tab.id}
              </Text>
            </TabButton>
            <MiddleBorder index={index} tabs={tabs} activeTab={activeTab} />
          </React.Fragment>
        ))}
      </TabContainer>
      <TabContent>{activeTab.content} content goes here</TabContent>
    </div>
  );
};

export default TabSwitcher;
