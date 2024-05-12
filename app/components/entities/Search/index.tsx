import type { ChangeEvent } from 'react';
import { memo, useRef, useState } from 'react';
import type { EntityCommonDictionary } from 'shared/client/data-contracts';

import SvgMap from '~/components/common/Icons/Map';
import SvgSearch from '~/components/common/Icons/Search';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';

import {
  DropDownCities,
  DropDownOption,
  MainInputSearch,
  MiddleBorder,
  PlaceInputSearch,
  SearchContainer,
  SvgWrapper,
  WrapperInput,
} from './styles';

export const Search = memo(
  ({
    query,
    search_by_city,
    location,
  }: {
    query?: string;
    search_by_city?: string;
    location?: EntityCommonDictionary[];
  }) => {
    const { t, userContext, theme } = useApp();

    const searchRef = useRef<HTMLInputElement>(null);
    const [city, setCity] = useState(search_by_city);
    const [dropDownCities, setDropDownCities] = useState(false);
    const [selectedCity, setSelectedCity] = useState('');

    const handleChangeCity = (e: ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      setCity(inputValue);
      setSelectedCity(inputValue);
      setDropDownCities(!!inputValue);
    };

    const handleSelectCity = (city?: string) => {
      if (city) {
        setSelectedCity(city);
        setCity(city);
        setDropDownCities(false);
      }
    };

    const filteredLocations = location?.filter((loc) =>
      loc[userContext.language]?.title?.toLowerCase()?.includes(city?.toLowerCase() || ''),
    );

    const handleBlur = () => {
      if (!selectedCity) {
        setCity('');
        setDropDownCities(false);
      }
    };

    return (
      <SearchContainer>
        <WrapperInput>
          <MainInputSearch
            name='q'
            placeholder={t('home:job_title_keywords_or_company')}
            type='text'
            ref={searchRef}
            defaultValue={query}
            autoComplete='off'
          />
          <SvgWrapper search>
            <SvgSearch color={theme.search.svgColor} />
          </SvgWrapper>
        </WrapperInput>

        <MiddleBorder />

        <WrapperInput>
          <PlaceInputSearch
            placeholder={t('home:location')}
            type='text'
            name='search_by_city'
            value={city}
            onChange={(e) => handleChangeCity(e)}
            onBlur={handleBlur}
            autoComplete='off'
          />
          <SvgWrapper>
            <SvgMap color={theme.search.svgColor} />
          </SvgWrapper>
          {dropDownCities && (
            <DropDownCities>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  overflow: 'auto',
                  padding: filteredLocations?.[0] ? '12px 0 10px 0' : '0px',
                }}
              >
                {filteredLocations?.map((loc) => (
                  <DropDownOption
                    key={loc.id}
                    onClick={() => handleSelectCity(loc[userContext.language]?.title)}
                  >
                    <Text
                      variant={TextVariantEnum.textBody2}
                      color={theme.search.variantSearchCities}
                    >
                      {loc[userContext.language]?.title}
                    </Text>
                  </DropDownOption>
                ))}
              </div>
            </DropDownCities>
          )}
        </WrapperInput>
      </SearchContainer>
    );
  },
);
