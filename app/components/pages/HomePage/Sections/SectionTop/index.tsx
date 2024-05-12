import { Form, Link, useLocation } from '@remix-run/react';
import { memo, useEffect, useState } from 'react';
import type { EntityCommonDictionary } from 'shared/client/data-contracts';
import routes from 'shared/routing/routes';

import { Box } from '~/components/common/Box';
import Button from '~/components/common/Button';
import TabSwitcher from '~/components/common/Tabs';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import ButtonCreate from '~/components/entities/ButtonCreate';
import ModalSelectCreateForm from '~/components/entities/ModalSelectCreateForm';
import { useApp } from '~/hooks';
import type { TabProps } from '~/types/interfaces/iTabsSearch';

import { ButtonContainer, WrapperSection } from './styles';

export const SectionTop = memo(
  ({ location }: { location: EntityCommonDictionary[] }): JSX.Element => {
    const { setUserContext, theme, t, userContext } = useApp();
    const loc = useLocation();

    function setSearch(search: 'vacancy' | 'resume' | 'company') {
      setUserContext((prevContext) => ({ ...prevContext, search }));
    }

    const tabs: TabProps[] = [
      {
        id: 'vacancy',
        label: `${t('home:find_job')}`,
        content: `${t('home:find_job')}`,
      },
      {
        id: 'resume',
        label: `${t('home:find_employer')}`,
        content: `${t('home:find_employer')}`,
      },
      {
        id: 'company',
        label: `${t('home:companies')}`,
        content: `${t('home:companies')}`,
      },
    ];

    const [activeTab, setActiveTab] = useState(
      tabs.find((item) => item.id === userContext.search) || tabs[0],
    );

    const handleTabClick = (tab: TabProps) => {
      setActiveTab(tab);
      setSearch(tab.id);
    };

    const [visibleSelectionCreate, setSelectionCreate] = useState(false);
    const [variantCreate, setVariantCreate] = useState<'vacancy' | 'resume'>('vacancy');

    useEffect(() => {
      if (userContext.search === 'resume') {
        setVariantCreate('vacancy');
      } else if (userContext.search === 'vacancy') {
        setVariantCreate('resume');
      }
    }, [userContext.search]);

    return (
      <>
        <Form
          action={`/search/${activeTab.id}`}
          method='GET'
          style={{ width: '100%' }}
          id='searchSection'
        >
          <WrapperSection>
            <Text
              variant={TextVariantEnum.textHeading1}
              color={theme.mainPage.headingColor}
              className='title'
            >
              {t('home:title')}
            </Text>
            <Box width='100%' maxWidth='920px' flexDirection='column'>
              <TabSwitcher
                location={location}
                tabs={tabs}
                activeTab={activeTab}
                handleTabClick={handleTabClick}
              />
            </Box>
            <ButtonContainer>
              {userContext.search === 'vacancy' && (
                <ButtonCreate
                  variant='resume'
                  setVariantCreate={setVariantCreate}
                  setSelectionCreate={setSelectionCreate}
                />
              )}

              {userContext.search === 'resume' && (
                <ButtonCreate
                  variant='vacancy'
                  setVariantCreate={setVariantCreate}
                  setSelectionCreate={setSelectionCreate}
                />
              )}

              {userContext.search === 'company' && (
                <Link
                  to={
                    userContext.user.isAuthenticated
                      ? routes.user.company.create
                      : `${loc.pathname}${loc.search ? `${loc.search}&login=true` : '?login=true'}`
                  }
                >
                  <Button priority='secondary' size='S'>
                    <Text variant={TextVariantEnum.textBody2}> {t('user:create_company')}</Text>
                  </Button>
                </Link>
              )}

              <Button type='submit' priority='primary' size='S'>
                <Text variant={TextVariantEnum.textBody2}> {t('home:search')}</Text>
              </Button>
            </ButtonContainer>
          </WrapperSection>
        </Form>

        <ModalSelectCreateForm
          variant={variantCreate}
          visibility={visibleSelectionCreate}
          setVisibility={setSelectionCreate}
        />
      </>
    );
  },
);
