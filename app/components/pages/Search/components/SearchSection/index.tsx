import { Form, Link, useLocation, useMatches } from '@remix-run/react';
import type { MutableRefObject } from 'react';
import { memo, useEffect, useState } from 'react';
import type { EntityCommonDictionary } from 'shared/client/data-contracts';
import routes from 'shared/routing/routes';

import { Box } from '~/components/common/Box';
import Button from '~/components/common/Button';
import { Icon } from '~/components/common/Icon';
import TabSwitcher from '~/components/common/Tabs';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import ButtonCreate from '~/components/entities/ButtonCreate';
import Filter from '~/components/entities/Filter';
import FilterModal from '~/components/entities/FilterModal';
import ModalSelectCreateForm from '~/components/entities/ModalSelectCreateForm';
import { useApp, useRouteChecks } from '~/hooks';
import { IconEnum } from '~/types/enums/iconEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IFilter } from '~/types/interfaces/iFilters';
import type { TabProps } from '~/types/interfaces/iTabsSearch';

import {
  ButtonContainer,
  ButtonFilterDesktop,
  ButtonFilterMobile,
  ButtonFilterTablet,
  WrapperSection,
} from './styles';

export const SearchSection = memo(
  ({
    query,
    dictionaries,
    filters,
    formRef,
    handleChangeForm,
    maxPageSize,
    locations,
    setMaxPageSize,
    setCurrentPage,
    setCurrentToken,
  }: {
    query?: string;
    filters: IFilter;
    dictionaries: IDictionaries | null;
    formRef: MutableRefObject<null>;
    maxPageSize?: number;
    locations?: EntityCommonDictionary[];
    handleChangeForm: (event: React.ChangeEvent<HTMLFormElement>) => void;
    setMaxPageSize?: (value: number) => void;
    setCurrentPage?: (value: number) => void;
    setCurrentToken?: (value?: string) => void;
  }): JSX.Element => {
    const { theme, t, setUserContext, userContext } = useApp();

    const location = useLocation();
    const matches = useMatches();

    const [visibleFilter, setVisibleFilter] = useState(false);

    function setSearch(search: 'vacancy' | 'resume' | 'company') {
      setUserContext((prevContext) => ({ ...prevContext, search }));
    }

    const loc = useLocation();

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

    const initialTab = tabs.find((tab) => tab.id === location.pathname.split('/')[2]);

    useEffect(() => {
      const newActiveTab = tabs.find((tab) => tab.id === location.pathname.split('/')[2]);
      setActiveTab(newActiveTab);
    }, [location.pathname]);

    const [activeTab, setActiveTab] = useState(initialTab);

    const handleTabClick = (tab: TabProps) => {
      setActiveTab(tab);
      setSearch(tab.id);
    };

    // useEffect(() => {
    //   const initialTab = tabs.find((tab) => tab.id === userContext.search);
    //   setActiveTab(initialTab)
    // }, [userContext.search])

    const isSearch = matches.some((m) => m.id === 'routes/search');
    const { isSearchCompany, isSearchVacancy, isSearchResume } = useRouteChecks();

    const [visibleSelectionCreate, setSelectionCreate] = useState(false);
    const [variantCreate, setVariantCreate] = useState<'vacancy' | 'resume'>('vacancy');

    return (
      <>
        <Form
          method='GET'
          style={{ width: '100%', height: '100%' }}
          onChange={handleChangeForm}
          action={`${location.pathname}`}
          ref={formRef}
          preventScrollReset
        >
          <WrapperSection>
            <Box width='100%' maxWidth='920px' flexDirection='column'>
              <TabSwitcher
                query={query}
                activeTab={activeTab}
                handleTabClick={handleTabClick}
                tabs={tabs}
                isSearch={isSearch}
                location={locations}
                search_by_city={filters.search_by_city}
              />
            </Box>
            <ButtonContainer>
              <ButtonFilterMobile>
                <Button
                  priority='secondary'
                  onlyIcon
                  onClick={() => setVisibleFilter((prev) => !prev)}
                >
                  <Icon name={IconEnum.filter} />
                </Button>
              </ButtonFilterMobile>
              <ButtonFilterTablet>
                <Button
                  priority='secondary'
                  fullwidth
                  onClick={() => setVisibleFilter((prev) => !prev)}
                >
                  <Icon name={IconEnum.filter} />
                  <Text variant={TextVariantEnum.textBody2}> {t('common:filters')}</Text>
                </Button>
              </ButtonFilterTablet>

              <ButtonFilterDesktop>
                {isSearchVacancy && (
                  <ButtonCreate
                    variant='resume'
                    setVariantCreate={setVariantCreate}
                    setSelectionCreate={setSelectionCreate}
                  />
                )}

                {isSearchResume && (
                  <ButtonCreate
                    variant='vacancy'
                    setVariantCreate={setVariantCreate}
                    setSelectionCreate={setSelectionCreate}
                  />
                )}

                {isSearchCompany && (
                  <Link
                    to={
                      userContext.user.isAuthenticated
                        ? routes.user.company.create
                        : `${loc.pathname}${
                            loc.search ? `${loc.search}&login=true` : '?login=true'
                          }`
                    }
                  >
                    <Button priority='secondary' size='S'>
                      <Text variant={TextVariantEnum.textBody2}> {t('user:create_company')}</Text>
                    </Button>
                  </Link>
                )}
              </ButtonFilterDesktop>

              <Button type='submit' priority='primary' fullwidth>
                <Text variant={TextVariantEnum.textBody2}> {t('home:search')}</Text>
              </Button>
            </ButtonContainer>
          </WrapperSection>
          {visibleFilter ? (
            <>
              <FilterModal
                formRef={formRef}
                dictionaries={dictionaries}
                visibility={visibleFilter}
                setVisibility={setVisibleFilter}
                filters={filters}
                setMaxPageSize={setMaxPageSize}
                setCurrentPage={setCurrentPage}
                setCurrentToken={setCurrentToken}
              />
              <input type='hidden' name='max_page_size' value={maxPageSize} />
            </>
          ) : (
            <Box style={{ display: 'none' }}>
              {/* <input type='hidden' name='q' value={filters.id} /> */}
              {/* <input type='hidden' name='search_by_city' value={filters.search_by_city} /> */}
              <input type='hidden' name='max_page_size' value={maxPageSize} />
              <input type='hidden' name='id' value={filters.id} />
              <Filter
                formRef={formRef}
                dictionaries={dictionaries}
                filters={filters}
                setMaxPageSize={setMaxPageSize}
                setCurrentPage={setCurrentPage}
                setCurrentToken={setCurrentToken}
              />
            </Box>
          )}
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
