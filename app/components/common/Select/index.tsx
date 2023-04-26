import { IconEnum } from 'public/enums/iconEnum';
import Dropdown from 'rc-dropdown';
import { useEffect, useRef, useState } from 'react';

import { Icon } from '../Icon';
import { Text } from '../Text';
import { TextVariantEnum } from '../Text/enums';
import {
  DropdownOverlayEntry,
  DropdownOverlayEntryItem,
  DropdownSelect,
  DropdownWrapper,
  PlaceHolder,
  WrpperIcon,
} from './styles';

type SelectProps = {
  value?: string;
  name?: string;
  id: string;
  values: string[];
  entries: Array<[id: string, value: string]>;
  placeholder?: string;
  disabled?: boolean;
  variant?: 'inline' | 'input' | 'forTable' | 'search';
  errorText?: string;
  noSort?: boolean;
  background?: string;
};

export function Select({
  id,
  name,
  value,
  values,
  entries,
  placeholder,
  disabled,
  variant,
  errorText,
  noSort = false,
  background,
}: SelectProps): JSX.Element {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [selectedPlaceholder, setSelectedPlaceholder] = useState<string>('');

  let entriesSorted = entries;

  if (!noSort) {
    entriesSorted = entriesSorted.sort((a, b) => (a[1] > b[1] ? 1 : 0));
  }

  const dropdownOverlay = (
    <DropdownOverlayEntry background={background}>
      {entriesSorted.map(([key, value]) => {
        const handleChange = (key: string) => {
          setDropdownVisible(false);
          setSelectedValue(key);
          setSelectedPlaceholder(value);
        };

        return (
          <DropdownOverlayEntryItem key={key} onClick={() => handleChange(key)}>
            <Text
              variant={TextVariantEnum.textBody2}
              style={{ fontFamily: 'MeroThai, Helvetica, Arial, Sans-Serif' }}
            >
              {value}
            </Text>
          </DropdownOverlayEntryItem>
        );
      })}
    </DropdownOverlayEntry>
  );

  const selectRef = useRef<HTMLInputElement>(null);

  function selectValue() {
    if (selectRef.current) {
      selectRef.current.value = selectedValue;
    }
  }

  useEffect(() => {
    selectValue();
  }, [selectedValue, selectedPlaceholder]);

  return (
    <Dropdown
      trigger={['click']}
      onVisibleChange={(value: boolean) => !disabled && setDropdownVisible(value)}
      visible={dropdownVisible}
      overlay={dropdownOverlay}
      animation='slide-up'
    >
      <DropdownWrapper>
        <DropdownSelect
          background={background}
          error={Boolean(errorText)}
          onClick={() => !disabled && setDropdownVisible((prev) => !prev)}
          dropdownVisible={dropdownVisible}
        >
          <PlaceHolder
            dropdownVisible={dropdownVisible}
            selectedValue={selectedValue}
            className='placeholder'
            background={background}
          >
            {placeholder}
          </PlaceHolder>
          {selectedValue && <Text variant={TextVariantEnum.textBody2}>{selectedPlaceholder}</Text>}

          <WrpperIcon dropdownVisible={dropdownVisible}>
            <Icon name={IconEnum.down} />
          </WrpperIcon>
        </DropdownSelect>
        <input
          ref={selectRef}
          type='text'
          disabled
          id={id}
          name={name}
          value={value}
          style={{ display: 'none' }}
        />
        {/* {Boolean(errorText) && <span className={styles.error}>{errorText}</span>} */}
      </DropdownWrapper>
    </Dropdown>
  );
}
