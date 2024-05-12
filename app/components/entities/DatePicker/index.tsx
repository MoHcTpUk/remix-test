/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useRef, useState } from 'react';
import type { MultiDateValue } from 'shared/v2/users';

import { Box } from '~/components/common/Box';
import { Icon } from '~/components/common/Icon';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';
import { IconEnum } from '~/types/enums/iconEnum';
import {
  THAI_CALENDAR_OFFSET,
  YEAR_RANGE_END_OFFSET,
  YEAR_RANGE_START_OFFSET,
} from '~/utils/constants';
import { getValueLang } from '~/utils/helpers.client';

import {
  BoxErrors,
  CheckboxContainer,
  CustomSelect,
  PlaceHolder,
  SelectContainer,
  Wrapper,
  WrpperIcon,
} from './styles';

interface DatePickerProps {
  defaultDate?: string; // default date in format yyyy-mm-dd
  name: string; // name of the hidden input to be used in the form
  variant?: 'default' | 'day' | 'month' | 'year' | 'year-month';
  id?: string;
  nameDay?: string;
  nameMonth?: string;
  nameYear?: string;
  defaultDay?: string;
  defaultMonth?: string;
  defaultYear?: string;
  placeholderDay?: string;
  placeholderMonth?: string;
  placeholderYear?: string;
  backgroundColor?: string;
  externalEndYearLimit?: string;
  externalStartDateLimit?: string;
  disabled?: boolean;
  errorText?: string;
  onChange?: (value: string) => void;
}

enum CalendarSystem {
  Gregorian = 'gregorian',
  Thai = 'thai',
}

export function DatePicker({
  defaultDate,
  name,
  variant = 'default',
  id,
  defaultDay,
  defaultMonth,
  defaultYear,
  nameDay = 'day',
  nameMonth = 'month',
  nameYear = 'year',
  placeholderDay,
  placeholderMonth,
  placeholderYear,
  backgroundColor,
  externalEndYearLimit,
  externalStartDateLimit,
  disabled,
  errorText,
  onChange,
}: DatePickerProps) {
  const { userContext, theme } = useApp();
  const [day, setDay] = useState<string>(defaultDay || '');
  const [month, setMonth] = useState<string>(defaultMonth || '');
  const [year, setYear] = useState<string>(defaultYear || '');
  const [yearBirthday, setYearBirthday] = useState<string>('');

  useEffect(() => {
    const yearBirthday = getValueLang(
      userContext.user.birthday as MultiDateValue,
      userContext.language,
    );
    if (yearBirthday) {
      setYearBirthday(yearBirthday.split('-')[0]);
      setBirthday(yearBirthday);
    }
  }, [userContext.language]);

  const currentYear = new Date().getFullYear();
  const start = currentYear - YEAR_RANGE_START_OFFSET;

  const [calendarSystem, setCalendarSystem] = useState<CalendarSystem>(CalendarSystem.Gregorian);

  const hiddenInputRef = useRef<HTMLInputElement>(null);
  const [birthday, setBirthday] = useState(yearBirthday);
  const [startYearLimit, setStartYearLimit] = useState(externalStartDateLimit?.split('-')[0] || '');
  const [startMonthLimit, setStartMonthLimit] = useState(
    externalStartDateLimit?.split('-')[1] || '',
  );

  useEffect(() => {
    if (externalStartDateLimit) {
      const externalStartYearLimit = externalStartDateLimit?.split('-')[0];
      setStartYearLimit(externalStartYearLimit);
      const externalStartMonthLimit = externalStartDateLimit?.split('-')[1];
      setStartMonthLimit(externalStartMonthLimit);
    }
  }, [externalStartDateLimit]);

  // update the hidden input value whenever day, month, or year changes
  const allComponentsFilled = () => {
    if (variant === 'year-month') return year && month;
    if (variant === 'year') return Boolean(year);
    if (variant === 'month') return Boolean(month);
    if (variant === 'day') return Boolean(day);
    return year && month && day;
  };

  // Функция, которая обновляет скрытое поле ввода
  const updateHiddenInput = () => {
    if (hiddenInputRef.current && allComponentsFilled()) {
      let date = '';
      if (variant === 'year') {
        if (year && year !== 'yyyy') {
          date = `${year}`;
        }
      } else if (variant !== 'year-month') {
        if (year && year !== 'yyyy' && month && month !== 'mm' && day && day !== 'dd') {
          date = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
        }
      } else if (year && year !== 'yyyy' && month && month !== 'mm') {
        date = `${year}-${month.padStart(2, '0')}-01`;
      }
      hiddenInputRef.current.value = date;
      if (onChange) onChange(date);
    }
  };

  useEffect(() => {
    setYear(defaultYear || '');
  }, [defaultYear]);

  useEffect(() => {
    if (defaultDate) {
      const parts = defaultDate.split('-');

      let yyyy: string;
      let mm: string;
      let dd: string;
      if (parts.length === 1) {
        [yyyy] = parts;
        mm = '';
        dd = '';
      } else {
        [yyyy, mm, dd] = parts;
      }

      if (dd?.[0] === '0') {
        setDay(dd[1]);
      } else {
        setDay(dd);
      }

      if (mm?.[0] === '0') {
        setMonth(mm[1]);
      } else {
        setMonth(mm);
      }

      setYear(yyyy);
    }
  }, [defaultDate]);

  // update hidden input whenever day, month, or year changes
  useEffect(() => {
    updateHiddenInput();
  }, [day, month, year]);

  // render options for the year select based on the calendar system
  const renderYearOptions = () => {
    if (userContext.language !== 'en') {
      // render Thai calendar years in the range of 100 years ago to 10 years from now (inclusive)
      const currentYear = new Date().getFullYear();
      const startYear = currentYear - YEAR_RANGE_START_OFFSET + THAI_CALENDAR_OFFSET;
      const endYear = currentYear + YEAR_RANGE_END_OFFSET + THAI_CALENDAR_OFFSET;

      return Array.from(Array(endYear - startYear + 1).keys())
        .map((i) => startYear + i)
        .map((year) => (
          <option key={year} value={year === start ? '' : year}>
            {year === startYear ? 'YYYY' : year}
          </option>
        ));
    }

    // If language is 'en', render years in the Gregorian calendar
    const currentYear = new Date().getFullYear();
    const startYear = +startYearLimit || +birthday || currentYear - YEAR_RANGE_START_OFFSET;
    const endYear = currentYear;

    const years = Array.from(Array(endYear - startYear + 1).keys()).map((i) => startYear + i);

    return (
      <>
        <option key='yyyy' value=''>
          YYYY
        </option>
        {years.map((year) => (
          <option key={year} value={year === start ? '' : year}>
            {year}
          </option>
        ))}
      </>
    );
  };

  const renderMonthOptions = () => {
    if (!year || year === startYearLimit) {
      // Если год не выбран или равен startYearLimit,
      // показываем все месяцы
      const months = Array.from(Array(12).keys()).map((i) => i + 1);

      return (
        <>
          <option key='mm' value='mm'>
            MM
          </option>
          {months.map((month) => (
            <option key={month} value={month === start ? '' : month}>
              {month}
            </option>
          ))}
        </>
      );
    }
    // Иначе, показываем месяцы только для выбранного года
    return (
      <>
        <option key='mm' value='mm'>
          MM
        </option>
        {Array.from(Array(12).keys())
          .map((i) => i + 1)
          .map((month) => (
            <option key={month} value={month === start ? '' : month}>
              {month}
            </option>
          ))}
      </>
    );
  };

  // handle change event for the calendar system switch
  const handleCalendarSystemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCalendarSystem = event.target.checked ? CalendarSystem.Thai : CalendarSystem.Gregorian;
    setCalendarSystem(newCalendarSystem);
  };

  const [isOpenDay, setIsOpenDay] = useState(false);
  const [isOpenMonth, setIsOpenMonth] = useState(false);
  const [isOpenYear, setIsOpenYear] = useState(false);

  const handleSelectOpen = (type: string) => {
    if (type === 'day') setIsOpenDay(true);
    if (type === 'month') setIsOpenMonth(true);
    if (type === 'year') setIsOpenYear(true);
  };

  const handleSelectClose = (type: string) => {
    if (type === 'day') setIsOpenDay(false);
    if (type === 'month') setIsOpenMonth(false);
    if (type === 'year') setIsOpenYear(false);
  };

  return (
    <Wrapper
    // ref={dropdownRef}
    >
      <SelectContainer disabled={disabled}>
        {(variant === 'default' || variant === 'day') && (
          <Box width='100%' style={{ position: 'relative' }}>
            <CustomSelect
              value={day}
              name={nameDay}
              onChange={(e) => setDay(e.target.value)}
              onFocus={() => handleSelectOpen('day')}
              onBlur={() => handleSelectClose('day')}
              error={Boolean(errorText)}
              disabled={disabled}
            >
              <option key='placeholder' value={undefined}>
                DD
              </option>

              {Array.from(Array(31).keys())
                .map((i) => i + 1)
                .map((day) => (
                  <option key={day} value={day || 'dd'}>
                    {day || 'dd'}
                  </option>
                ))}
            </CustomSelect>
            {placeholderDay && (
              <PlaceHolder
                className='placeholder'
                backgroundColor={backgroundColor}
                error={Boolean(errorText)}
              >
                {placeholderDay}
              </PlaceHolder>
            )}
            <WrpperIcon isDropdownOpen={isOpenDay}>
              <Icon name={IconEnum.up} />
            </WrpperIcon>
          </Box>
        )}
        {(variant === 'default' || variant === 'month' || variant === 'year-month') && (
          <Box width='100%' style={{ position: 'relative' }}>
            <CustomSelect
              name={nameMonth}
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              onFocus={() => handleSelectOpen('month')}
              onBlur={() => handleSelectClose('month')}
              disabled={disabled}
              error={Boolean(errorText)}
            >
              {renderMonthOptions()}
            </CustomSelect>
            {placeholderMonth && (
              <PlaceHolder
                className='placeholder'
                backgroundColor={backgroundColor}
                error={Boolean(errorText)}
              >
                {placeholderMonth}
              </PlaceHolder>
            )}
            <WrpperIcon isDropdownOpen={isOpenMonth}>
              <Icon name={IconEnum.up} />
            </WrpperIcon>
          </Box>
        )}
        {(variant === 'default' || variant === 'year' || variant === 'year-month') && (
          <Box width='100%' style={{ position: 'relative' }}>
            <CustomSelect
              name={nameYear}
              value={year}
              onChange={(e) => {
                setYear(e.target.value === start.toFixed() ? '' : e.target.value);
              }}
              onFocus={() => handleSelectOpen('year')}
              onBlur={() => handleSelectClose('year')}
              error={Boolean(errorText)}
              disabled={disabled}
            >
              {renderYearOptions()}
            </CustomSelect>
            {placeholderYear && (
              <PlaceHolder
                className='placeholder'
                backgroundColor={backgroundColor}
                error={Boolean(errorText)}
              >
                {placeholderYear}
              </PlaceHolder>
            )}
            <WrpperIcon isDropdownOpen={isOpenYear}>
              <Icon name={IconEnum.up} />
            </WrpperIcon>
          </Box>
        )}
      </SelectContainer>

      <CheckboxContainer>
        <input type='checkbox' id='calendarSwitch' onChange={handleCalendarSystemChange} />
        <label htmlFor='calendarSwitch'>Use Thai Calendar</label>
      </CheckboxContainer>
      <BoxErrors isText={Boolean(errorText)}>
        {Boolean(errorText) && (
          <Text variant={TextVariantEnum.textSmall} color={theme.errorTextColor}>
            {errorText}
          </Text>
        )}
      </BoxErrors>
      <input type='hidden' name={name} ref={hiddenInputRef} disabled={disabled} />
    </Wrapper>
  );
}
