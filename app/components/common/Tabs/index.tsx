import React, { useState } from 'react';
import { Text } from '../Text';
import { MiddleBorder, TabButton, TabContainer } from './styles';
import type { DefaultTheme } from 'styled-components';
import { Search } from '~/components/lib/Search';
import { useTranslation } from 'react-i18next';

export interface TabProps {
  id: string;
  label: string;
  content: string;
}

export interface TabSwitcherProps {
  theme: DefaultTheme;
}

const TabSwitcher: React.FC<TabSwitcherProps> = ({ theme }) => {
  let { t } = useTranslation();

  const tabs: TabProps[] = [
    {
      id: '1',
      label: `${t('home:find_job')}`,
      content: `${t('home:find_job')}`,
    },
    {
      id: '2',
      label: `${t('home:find_employer')}`,
      content: `${t('home:find_employer')}`,
    },
    {
      id: '3',
      label: `${t('home:companies')}`,
      content: `${t('home:companies')}`,
    },
  ];

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
                color={
                  activeTab.id === tab.id ? theme.tabs.activeTabColor : theme.tabs.disabledTabColor
                }
              >
                {tab.label}
                {activeTab.id === tab.id}
              </Text>
            </TabButton>
            <MiddleBorder index={index} tabs={tabs} activeTab={activeTab} />
          </React.Fragment>
        ))}
      </TabContainer>
      <Search theme={theme} />
    </div>
  );
};

export default TabSwitcher;
