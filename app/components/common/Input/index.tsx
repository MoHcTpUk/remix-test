import { IconEnum } from 'public/enums/iconEnum';
import type { RefObject } from 'react';
import { useRef } from 'react';

import { useApp } from '~/hooks';

import { Icon } from '../Icon';
import { Text } from '../Text';
import { TextVariantEnum } from '../Text/enums';
import {
  BoxErrors,
  ButtonClear,
  InputComponent,
  PlaceHolder,
  Wrapper,
  WrapperInner,
} from './styles';

export type InputProps = {
  value?: string;
  id: string;
  placeholder?: string;
  errorText?: string;
  disabled?: boolean;
  htmlType?: HTMLInputElement['type'];
  variant?: 'default' | 'password' | 'search';
  background?: string;
  name?: string;
  textHelper?: string;
};

export function Input({
  id,
  value,
  placeholder,
  errorText,
  disabled,
  name,
  htmlType = 'text',
  variant,
  background,
  textHelper,
}: InputProps) {
  // const [type, setType] = useState(htmlType);

  const { theme } = useApp();

  // // скрыть/показать пароль
  // const handlePassword = () => {
  //   if (type === 'password') {
  //     setType(() => 'text');
  //   } else {
  //     setType(() => 'password');
  //   }
  // };

  const inputRef = useRef<HTMLInputElement>(null);

  function clearInput() {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }

  return (
    <Wrapper>
      <WrapperInner>
        <InputComponent
          ref={inputRef}
          backgrond={background}
          // type={type}
          placeholder=' '
          disabled={disabled}
          id={id}
          name={name}
          value={value}
          error={Boolean(errorText)}
        />
        {placeholder && variant !== 'search' && (
          <PlaceHolder htmlFor={id} className='placeholder'>
            {placeholder}
          </PlaceHolder>
        )}
        <ButtonClear onClick={() => clearInput()}>
          <Icon name={IconEnum.close} />
        </ButtonClear>
      </WrapperInner>
      <BoxErrors isText={Boolean(errorText) || Boolean(textHelper)}>
        {Boolean(errorText) && (
          <Text variant={TextVariantEnum.textSmall} color={theme.errorTextColor}>
            {errorText}
          </Text>
        )}
        {!errorText && Boolean(textHelper) && (
          <Text variant={TextVariantEnum.textSmall}>{textHelper}</Text>
        )}
      </BoxErrors>
    </Wrapper>
  );
}
