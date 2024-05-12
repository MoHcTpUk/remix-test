import type { Dispatch, MouseEvent, RefObject, SetStateAction } from 'react';
import { useEffect, useRef, useState } from 'react';

import { useApp } from '~/hooks';
import { IconEnum } from '~/types/enums/iconEnum';
import { compareArrays } from '~/utils/helpers.client';

import { Box } from '../Box';
import { Icon } from '../Icon';
import SvgSearch from '../Icons/Search';
import { BoxErrors } from '../Input/styles';
import { Text } from '../Text';
import { TextVariantEnum } from '../Text/enums';
import {
  AttentionErrorIcon,
  ButtonClear,
  Container,
  Dropdown,
  Header,
  InnerTextContainer,
  Option,
  PlaceHolder,
  RemoveButton,
  SearchInput,
  SearchInputWrapper,
  SelectedArray,
  SelectedOptions,
  WrapperIcon,
} from './styles';

export interface SelectProps {
  dateEntries?: Array<[index: number, value: number]>;
  entries?: Array<[id: string, value: string]>;
  values?: string[] | null;
  name?: string;
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  variant?: 'single' | 'multi' | 'search-multi' | 'search-single' | 'single-text';
  errorText?: string;
  background?: string;
  externalRef?: RefObject<HTMLInputElement>;
  setExternalState?: Dispatch<SetStateAction<string[]>>;
  externalState?: string[];
  onChange?: (value: string) => void;
  className?: string;
}

export function Select({
  dateEntries,
  entries,
  values,
  variant = 'single',
  name,
  id,
  placeholder,
  disabled,
  errorText,
  background,
  externalRef,
  setExternalState,
  externalState,
  onChange,
  className,
}: SelectProps) {
  const { t, theme } = useApp();
  const [selectedValues, setSelectedValues] = useState<string[]>(values || []);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isSearchInputFocused, setSearchInputFocused] = useState(false);
  const [entriesState, setEntriesState] = useState(entries);

  useEffect(() => {
    setEntriesState(entries);
  }, [entries]);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLInputElement | null>(null);
  const singleTextRef = useRef<HTMLInputElement | null>(null);
  const prevValuesRef = useRef<string[]>(values || []);

  function selectValue() {
    if (selectRef.current) {
      selectRef.current.value = selectedValues.join(',');
    }
    if (variant === 'single-text') {
      if (singleTextRef.current) {
        singleTextRef.current.value = selectedValues.join(',');
      }
    }
  }

  useEffect(() => {
    if (variant !== 'single-text') {
      if (values && !compareArrays(values, prevValuesRef.current)) {
        setSelectedValues(values);
        // setSearchQuery('');
      }
      // } else if (singleTextRef.current && values) {
      //   setSelectedValues(values);
      //   singleTextRef.current.value = values.join(',');
      //   setSearchQuery('');
    }

    prevValuesRef.current = values || []; // Update the previous values
  }, [values, variant]);

  useEffect(() => {
    if (
      setExternalState &&
      !compareArrays(values, selectedValues) &&
      !compareArrays(externalState, selectedValues)
    ) {
      setExternalState(selectedValues);
    }
    selectValue();

    if (variant === 'multi' || variant === 'search-multi') {
      setEntriesState(() => entries?.filter((item) => !selectedValues.includes(item[0])));
    }
  }, [selectedValues, setExternalState]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !isSearchInputFocused // Check if SearchInput is not focused
      ) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener(
      'click',
      handleClickOutside as () => MouseEvent<HTMLDivElement, MouseEvent>,
    );

    return () => {
      window.removeEventListener(
        'click',
        handleClickOutside as () => MouseEvent<HTMLDivElement, MouseEvent>,
      );
    };
  }, [dropdownRef, isSearchInputFocused]);

  const handleSelect = (
    event: React.ChangeEvent<HTMLSelectElement> | MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const { value } = event.target as HTMLSelectElement;
    if (onChange) onChange(value);

    if (variant === 'single' || variant === 'search-single' || variant === 'single-text') {
      setSelectedValues((prevSelectedValues) => {
        if (prevSelectedValues.includes(value)) {
          return [''];
        }
        return [value];
      });
      setIsDropdownOpen(false);
    } else {
      setSelectedValues((prevSelectedValues) => {
        const index = prevSelectedValues.indexOf(value);
        if (index === -1) {
          return [...prevSelectedValues, value];
        }
        return prevSelectedValues;
      });
    }
  };

  const handleDropdownClick = () => {
    if (!disabled) {
      if (!isSearchInputFocused) {
        setIsDropdownOpen(!isDropdownOpen && !isSearchInputFocused);
      }
      if (isSearchInputFocused) {
        setSearchInputFocused(!isSearchInputFocused);
      }
    }
  };

  const handleRemove = (value: string) => {
    const newValues = selectedValues.filter((val) => val !== value);
    setSelectedValues(newValues);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setIsDropdownOpen(true);
    if (variant === 'single-text') {
      setSelectedValues([event.target.value]);
    }
    if (onChange) onChange(event.target.value);
  };

  const filteredEntries = entriesState?.filter(
    (entry) => entry[1].toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1,
  );

  function clearSelect() {
    const { current } = selectRef;
    if (current) {
      current.value = '';
      setSelectedValues([]);
      setIsDropdownOpen(true);
      setSearchQuery('');
    }
  }

  const handleSearchInputFocus = () => {
    setIsDropdownOpen(true);
    setSearchInputFocused(true);
  };

  return (
    <Box
      flexDirection='column'
      width='100%'
      style={{ opacity: disabled ? '0.6' : '1', position: 'relative' }}
    >
      <Container ref={dropdownRef}>
        {variant === 'search-multi' && (
          <Header
            error={Boolean(errorText)}
            onClick={handleDropdownClick}
            variant={variant}
            isDropdownOpen={isDropdownOpen}
            disabled={disabled}
            filteredEntries={filteredEntries}
          >
            <SearchInputWrapper variant='search-multi' isDropdownOpen={isDropdownOpen}>
              <SvgSearch color={theme.search.svgColor} />
              <SearchInput
                type='text'
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder={t('user:search')}
                isDropdownOpen={isDropdownOpen}
                selectedValue={selectedValues}
                variant={variant}
                name='select-search-input'
                onFocus={handleSearchInputFocus}
              />
            </SearchInputWrapper>
            <SelectedArray>
              {Array.isArray(selectedValues) &&
                selectedValues[0] &&
                selectedValues.length > 0 &&
                selectedValues.map((value) => (
                  <SelectedOptions key={value}>
                    <InnerTextContainer>
                      {entries?.find((entry) => entry[0] === value)?.[1]}
                    </InnerTextContainer>
                    <RemoveButton disabled={disabled} onClick={() => handleRemove(value)}>
                      <Icon name={IconEnum.closeMd} />
                    </RemoveButton>
                  </SelectedOptions>
                ))}
            </SelectedArray>
            <PlaceHolder
              dropdownVisible={isDropdownOpen}
              selectedValue={selectedValues}
              className='placeholder'
              background={background}
              variant={variant}
              error={Boolean(errorText)}
            >
              {placeholder}
            </PlaceHolder>
          </Header>
        )}

        {(variant === 'multi' || variant === 'single') && (
          <Header
            error={Boolean(errorText)}
            onClick={handleDropdownClick}
            variant={variant}
            isDropdownOpen={isDropdownOpen}
            disabled={disabled}
            entriesState={entriesState}
          >
            {variant === 'multi' &&
            Array.isArray(selectedValues) &&
            selectedValues.length > 0 &&
            selectedValues[0] ? (
              <SelectedArray>
                {selectedValues.map((value) => (
                  <SelectedOptions key={value} disabled={disabled}>
                    <InnerTextContainer>
                      {entries?.find((entry) => entry[0] === value)?.[1]}
                    </InnerTextContainer>
                    <RemoveButton disabled={disabled} onClick={() => handleRemove(value)}>
                      <Icon name={IconEnum.closeMd} />
                    </RemoveButton>
                  </SelectedOptions>
                ))}
              </SelectedArray>
            ) : (
              variant === 'single' &&
              selectedValues[0] && (
                <SelectedOptions variant={variant}>
                  {entriesState?.find((entry) => entry[0] === selectedValues[0])?.[1] ||
                    values?.[0]}
                </SelectedOptions>
              )
            )}
            <PlaceHolder
              dropdownVisible={isDropdownOpen}
              selectedValue={selectedValues}
              className={className}
              background={background}
              variant={variant}
              error={Boolean(errorText)}
            >
              {placeholder}
            </PlaceHolder>
          </Header>
        )}

        {variant === 'search-single' && (
          <Header
            onClick={handleDropdownClick}
            variant={variant}
            isDropdownOpen={isDropdownOpen}
            error={Boolean(errorText)}
            disabled={disabled}
            filteredEntries={filteredEntries}
          >
            {selectedValues[0] && (
              <SelectedOptions variant={variant}>
                {entries?.find((entry) => entry[0] === selectedValues[0])?.[1] || values?.[0]}
              </SelectedOptions>
            )}
            <PlaceHolder
              dropdownVisible={isDropdownOpen}
              selectedValue={selectedValues}
              className='placeholder'
              background={background}
              variant={variant}
              error={Boolean(errorText)}
            >
              {placeholder}
            </PlaceHolder>
            <SearchInputWrapper>
              {!selectedValues[0] && isDropdownOpen && (
                <>
                  <SvgSearch color={theme.search.svgColor} />
                  <SearchInput
                    type='text'
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder={t('user:search')}
                    isDropdownOpen={isDropdownOpen}
                    selectedValue={selectedValues}
                    variant={variant}
                    name='select-search-input'
                    onFocus={handleSearchInputFocus}
                  />
                </>
              )}
            </SearchInputWrapper>
          </Header>
        )}

        {variant === 'single-text' && (
          <Header
            error={Boolean(errorText)}
            onClick={handleDropdownClick}
            variant={variant}
            isDropdownOpen={isDropdownOpen}
            disabled={disabled}
            filteredEntries={filteredEntries}
          >
            <PlaceHolder
              dropdownVisible={isDropdownOpen}
              selectedValue={selectedValues}
              className='placeholder'
              background={background}
              variant={variant}
              error={Boolean(errorText)}
            >
              {placeholder}
            </PlaceHolder>
            <SearchInputWrapper>
              {isDropdownOpen && !selectedValues[0] && <SvgSearch color={theme.search.svgColor} />}
              <SearchInput
                type='text'
                ref={singleTextRef}
                onChange={handleSearchChange}
                placeholder={t('user:enter_position')}
                isDropdownOpen={isDropdownOpen}
                selectedValue={selectedValues}
                variant={variant}
                name='select-search-input'
                disabled={disabled}
                autoComplete='off'
                onFocus={handleSearchInputFocus}
              />
            </SearchInputWrapper>
          </Header>
        )}
        <Dropdown
          isDropdownOpen={isDropdownOpen}
          className='dropdown'
          error={Boolean(errorText)}
          filteredEntries={filteredEntries}
        >
          <div style={{ overflowY: 'auto' }}>
            {filteredEntries?.map((entry) => (
              <Option
                key={entry[0]}
                onClick={() =>
                  !disabled &&
                  handleSelect({
                    target: { value: variant === 'single-text' ? entry[1] : entry[0] },
                  } as React.ChangeEvent<HTMLSelectElement>)
                }
                isSelected={variant === 'multi' && selectedValues.includes(entry[0])}
                isSingleSelected={selectedValues[0] === entry[0]}
                disabled={disabled}
              >
                <Text
                  variant={TextVariantEnum.textBody2}
                  style={{ fontFamily: 'MeroThai, Helvetica, Arial, Sans-Serif' }}
                >
                  {entry[1]}
                </Text>
              </Option>
            ))}
          </div>
        </Dropdown>

        {errorText && (
          <AttentionErrorIcon className='editPencil'>
            <Icon name={IconEnum.attentionError} />
          </AttentionErrorIcon>
        )}

        {!errorText &&
          (variant === 'search-single' || variant === 'single-text') &&
          selectedValues[0] && (
            <ButtonClear
              disabled={disabled}
              type='button'
              onClick={(e) => {
                clearSelect();
                setIsDropdownOpen(true);
                setSearchInputFocused(false);
                e.stopPropagation();
              }}
            >
              <Icon name={IconEnum.closeMd} />
            </ButtonClear>
          )}

        {((!errorText &&
          (variant === 'single' || variant === 'multi' || variant === 'search-multi')) ||
          (!errorText && !selectedValues[0])) && (
          <WrapperIcon
            disabled={disabled}
            onClick={handleDropdownClick}
            isDropdownOpen={isDropdownOpen}
          >
            <Icon name={IconEnum.up} />
          </WrapperIcon>
        )}
        {/* 
        {((!errorText &&
          (variant === 'single' && className === 'filterVacancy')) && selectedValues[0]) && (
            <ButtonClear
              disabled={disabled}
              type='button'
              onClick={(e) => {
                clearSelect();
                setIsDropdownOpen(true);
                setSearchInputFocused(false);
                e.stopPropagation();
              }}
            >
              <Icon name={IconEnum.closeMd} />
            </ButtonClear>
          )} */}

        <input
          ref={selectRef}
          type='text'
          style={{ display: 'none' }}
          id={id}
          name={name}
          defaultValue={values?.join(',')}
        />
      </Container>
      <BoxErrors isText={Boolean(errorText)} isDropdownOpen={isDropdownOpen}>
        {Boolean(errorText) && (
          <Text variant={TextVariantEnum.textSmall} color={theme.errorTextColor}>
            {errorText}
          </Text>
        )}
      </BoxErrors>
    </Box>
  );
}
