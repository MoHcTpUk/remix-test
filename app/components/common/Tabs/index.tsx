import React, { useState } from 'react';

import { Search } from '~/components/lib/Search';
import { useApp } from '~/hooks';

import { Text } from '../Text';
import { TextVariantEnum } from '../Text/enums';
import { MiddleBorder, TabButton, TabContainer } from './styles';

export interface TabProps {
  id: string;
  label: string;
  content: string;
}

function TabSwitcher() {
  const { theme, t } = useApp();

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
    <>
      <TabContainer>
        {tabs.map((tab, index) => (
          <React.Fragment key={tab.id}>
            <TabButton isActive={activeTab.id === tab.id} onClick={() => handleTabClick(tab)}>
              <Text
                variant={TextVariantEnum.textBody1}
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
    </>
  );
}

export default TabSwitcher;
