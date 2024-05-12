import { Link } from '@remix-run/react';
import React from 'react';
import type { EntityCommonDictionary } from 'shared/client/data-contracts';

import { Search } from '~/components/entities/Search';
import { useApp } from '~/hooks';
import type { TabProps } from '~/types/interfaces/iTabsSearch';

import { Text } from '../Text';
import { TextVariantEnum } from '../Text/enums';
import { TabButton, TabContainer } from './styles';

function TabSwitcher({
  query,
  search_by_city,
  tabs,
  activeTab,
  handleTabClick,
  isSearch,
  location,
}: {
  query?: string;
  search_by_city?: string;
  tabs?: TabProps[];
  activeTab?: TabProps;
  handleTabClick?: (tab: TabProps) => void;
  isSearch?: boolean;
  location?: EntityCommonDictionary[];
}) {
  const { theme, t } = useApp();
  return (
    <>
      <TabContainer>
        {tabs?.map((tab, index) => (
          <React.Fragment key={tab.id}>
            {isSearch ? (
              <Link to={`/search/${tab?.id || ''}`}>
                <TabButton
                  type='button'
                  isActive={activeTab?.id === tab.id}
                  onClick={() => handleTabClick && handleTabClick(tab)}
                >
                  <Text
                    variant={TextVariantEnum.textBody2}
                    color={
                      activeTab?.id === tab.id
                        ? theme.tabs.activeTabColor
                        : theme.tabs.disabledTabColor
                    }
                  >
                    {tab.label}
                    {activeTab?.id === tab.id}
                  </Text>
                </TabButton>
              </Link>
            ) : (
              <TabButton
                type='button'
                isActive={activeTab?.id === tab.id}
                onClick={() => handleTabClick && handleTabClick(tab)}
              >
                <Text
                  variant={TextVariantEnum.textBody2}
                  color={
                    activeTab?.id === tab.id
                      ? theme.tabs.activeTabColor
                      : theme.tabs.disabledTabColor
                  }
                >
                  {tab.label}
                  {activeTab?.id === tab.id}
                </Text>
              </TabButton>
            )}
          </React.Fragment>
        ))}
      </TabContainer>
      <Search query={query} search_by_city={search_by_city} location={location} />
    </>
  );
}

export default TabSwitcher;
