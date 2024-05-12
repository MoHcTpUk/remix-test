// import InputMask from 'react-input-mask'
// Импортируем библиотеку для масок
import type { KeyboardEvent, RefObject } from 'react';
import { useEffect, useRef, useState } from 'react';

import { useApp } from '~/hooks';
import { IconEnum } from '~/types/enums/iconEnum';
import { maskPhone, maskWebsite } from '~/utils/masks';

import { Icon } from '../Icon';
import { Text } from '../Text';
import { TextVariantEnum } from '../Text/enums';
import {
  AttentionErrorIcon,
  BoxErrors,
  ButtonClear,
  InputComponent,
  PlaceHolder,
  TextareaComponent,
  TextareaIcon,
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
  variant?: 'default' | 'password' | 'search' | 'phone' | 'email' | 'website' | 'textarea';
  background?: string;
  name?: string;
  textHelper?: string;
  onlyNumber?: boolean;
  onChange?: (value: string) => void;
};

export function Input({
  id,
  value = '',
  placeholder,
  errorText,
  disabled,
  name,
  htmlType = 'text',
  variant = 'default',
  background,
  textHelper,
  onlyNumber,
  onChange,
}: InputProps) {
  const { theme } = useApp();
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e.target.value);
      // if (variant === 'password') {
      //   setPassword(e.target.value)
      // }
    }
  };

  useEffect(() => {
    const { current } = inputRef;
    if (current) {
      current.value = value;
      setTextAreaValue(current.value);
      if (current.scrollHeight > 45) {
        current.style.borderRadius = `8px`;
        current.style.height = `${current.scrollHeight}px`;
      } else {
        current.style.borderRadius = `80px`;
      }
      if (onChange) {
        onChange(value);
      }
    }
  }, [value]);

  function clearInput() {
    const { current } = inputRef;
    if (current) {
      current.value = '';
      const event = new Event('input' || 'textarea', { bubbles: true });
      // reset textarea
      current.dispatchEvent(event);
      current.style.height = 'auto';
      current.style.borderRadius = `80px`;
      setTextAreaValue('');
      if (onChange) onChange('');
    }
  }

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (onlyNumber) {
      const keyCode = event.keyCode || event.which;
      const keyValue = String.fromCharCode(keyCode);

      // Allow only numbers (0-9) and the backspace key
      if (!/^[0-9\b]+$/.test(keyValue)) {
        event.preventDefault();
      }
    }
  };

  const adjustTechAreaHeight = () => {
    const { current } = inputRef;
    if (current) {
      setTextAreaValue(current.value);
      current.style.height = 'auto';
      current.style.height = `${current.scrollHeight}px`;

      if (current.scrollHeight > 44) {
        current.style.borderRadius = `8px`;
      } else {
        current.style.borderRadius = `80px`;
      }
    }
  };

  const [textAreaValue, setTextAreaValue] = useState('');
  const isEmptyTextArea = inputRef?.current?.value === '' || textAreaValue.length < 1;

  // let inputElement;

  // switch (variant) {
  //   case 'phone':
  //     inputElement = (
  //       <InputMask
  //         mask='+99 999 999 9999'
  //         maskChar=' '
  //         // ref={maskRef}
  //         placeholder=' '
  //         disabled={disabled}
  //         id={id}
  //         name={name}
  //         // error={Boolean(errorText)}
  //         onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
  //           if (onChange) onChange(e.target.value);
  //         }}
  //       >
  //           {(inputProps: React.InputHTMLAttributes<HTMLInputElement>) => (
  //             <InputComponent
  //               ref={inputRef as React.Ref<HTMLInputElement>}
  //               {...inputProps}
  //               onKeyPress={(e) => {
  //                 if (!/^[0-9\b]+$/.test(e.key)) {
  //                   e.preventDefault();
  //                 }
  //               }}
  //               error={Boolean(errorText)}
  //             />
  //           )}
  //       </InputMask>
  //     );
  //     break;
  //   case 'email':
  //     inputElement = (
  //       <InputMask
  //         // ref={inputRef}
  //         mask='*'
  //         placeholder=' '
  //         disabled={disabled}
  //         id={id}
  //         name={name}
  //         // error={Boolean(errorText)}
  //         onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
  //           if (onChange) onChange(e.target.value);
  //         }}
  //       >
  //           {(inputProps: React.InputHTMLAttributes<HTMLInputElement>) => (
  //             <InputComponent
  //               {...inputProps}
  //               onKeyPress={(e) => {
  //                 const allowedChars = /^[A-Za-z0-9_.-@]+$/;
  //                 if (!allowedChars.test(e.key)) {
  //                   e.preventDefault();
  //                 }
  //               }}
  //               error={Boolean(errorText)}
  //               ref={inputRef as React.Ref<HTMLInputElement>}
  //             />
  //           )}
  //       </InputMask>
  //     );
  //     break;
  //   case 'website':
  //     inputElement = (
  //       <InputMask
  //         // ref={inputRef}
  //         mask='https://*'
  //         placeholder=' '
  //         disabled={disabled}
  //         id={id}
  //         name={name}
  //         // error={Boolean(errorText)}
  //         onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
  //           if (onChange) onChange(e.target.value);
  //         }}
  //       >
  //           {(inputProps: React.InputHTMLAttributes<HTMLInputElement>) => (
  //             <InputComponent {...inputProps} error={Boolean(errorText)} ref={inputRef as React.Ref<HTMLInputElement>} />
  //           )}
  //       </InputMask>
  //     );
  //     break;
  //   default:
  //     inputElement = (
  //       <InputComponent
  //         ref={inputRef as React.Ref<HTMLInputElement>}
  //         background={background}
  //         // type={htmlType}
  //         placeholder=' '
  //         disabled={disabled}
  //         id={id}
  //         name={name}
  //         error={Boolean(errorText)}
  //         onKeyPress={(e) => {
  //           if (onlyNumber) handleKeyPress(e);
  //         }}
  //         onChange={(e) => {
  //           if (onChange) onChange(e.target.value);
  //         }}
  //       />
  //     );
  // }

  return (
    <Wrapper disabled={disabled}>
      <WrapperInner variant={variant} tabIndex={-1}>
        {variant === 'textarea' ? (
          <TextareaComponent
            rows={1}
            ref={inputRef as RefObject<HTMLTextAreaElement>}
            background={background}
            placeholder=' '
            id={id}
            name={name}
            onChange={adjustTechAreaHeight}
          />
        ) : (
          <InputComponent
            ref={inputRef as RefObject<HTMLInputElement>}
            background={background}
            // type={htmlType}
            placeholder=' '
            disabled={disabled}
            id={id}
            name={name}
            error={Boolean(errorText)}
            onKeyPress={(e) => {
              if (onlyNumber) handleKeyPress(e);
            }}
            type={variant === 'password' && hidePassword ? 'password' : 'text'}
            onChange={(e) => {
              if (variant === 'password') setPassword(e.target.value);
              if (variant === 'phone') handleChange(maskPhone(e));
              if (variant === 'website') handleChange(maskWebsite(e));
              return handleChange(e);
            }}
            autoComplete={variant === 'password' ? 'off' : 'on'}
          />
        )}
        {placeholder && variant !== 'search' && (
          <PlaceHolder
            htmlFor={id}
            className='placeholder'
            error={Boolean(errorText)}
            variant={variant}
          >
            {placeholder}
          </PlaceHolder>
        )}
        {variant === 'textarea' &&
          (isEmptyTextArea ? (
            <TextareaIcon className='editPencil'>
              <Icon name={IconEnum.editPencilLine} />
            </TextareaIcon>
          ) : (
            <ButtonClear disabled={disabled} type='button' onClick={() => clearInput()}>
              <Icon name={IconEnum.closeMd} />
            </ButtonClear>
          ))}
        {variant !== 'textarea' && errorText && (
          <AttentionErrorIcon className='editPencil'>
            <Icon name={IconEnum.attentionError} />
          </AttentionErrorIcon>
        )}
        {variant !== 'textarea' &&
          !errorText &&
          (variant === 'password' ? (
            <ButtonClear
              disabled={disabled}
              type='button'
              onClick={() => setHidePassword(!hidePassword)}
            >
              {hidePassword ? (
                <Icon name={IconEnum.view} color={theme.buttons.secondary.iconColor} />
              ) : (
                <Icon name={IconEnum.viewHide} />
              )}
            </ButtonClear>
          ) : (
            <ButtonClear disabled={disabled} type='button' onClick={() => clearInput()}>
              <Icon name={IconEnum.closeMd} />
            </ButtonClear>
          ))}
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
