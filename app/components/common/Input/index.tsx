import styled, { CSSProperties } from 'styled-components';
import { useState } from 'react';
import { Text } from '../Text';
import { InputComponent, PlaceHolder, WrapperInput } from './styles';

export type InputProps = {
  value?: string;
  id: string;
  // onChange?: (nextValue: string) => void;
  placeholder?: string;
  className?: string;
  errorText?: string;
  inputClass?: string;
  placeholderClass?: string;
  textariaClass?: string;
  style?: CSSProperties;
  disabled?: boolean;
  htmlType?: HTMLInputElement['type'];
  variant?: 'default' | 'password' | 'search';
  background?: string;
  name?: string;
};

export const Input = ({
  id,
  value,
  // onChange,
  placeholder,
  className,
  errorText,
  style,
  disabled,
  inputClass,
  placeholderClass,
  textariaClass,
  name,
  htmlType = 'text',
  variant,
  background,
}: InputProps) => {
  const [type, setType] = useState(htmlType);

  // const custom = {
  //   onChange: (ev: React.ChangeEvent<HTMLInputElement>) => {
  //     if (onChange) {
  //       onChange(ev.target.value);
  //     } else {
  //       // eslint-disable-next-line no-console
  //       console.log(ev.target.value);
  //     }
  //   },
  //   value,
  // };

  // скрыть/показать пароль
  const handlePassword = () => {
    if (type === 'password') {
      setType(() => 'text');
    } else {
      setType(() => 'password');
    }
  };

  return (
    <WrapperInput>
      <InputComponent
        backgrond={background}
        type={type}
        placeholder=' '
        disabled={disabled}
        id={id}
        name={name}
        value={value}
      ></InputComponent>
      {placeholder && variant !== 'search' && (
        <PlaceHolder htmlFor={id} className='placeholder'>
          {placeholder}
        </PlaceHolder>
      )}
      {Boolean(errorText) && <Text>{errorText}</Text>}
    </WrapperInput>
  );
};
