import type { ReactNode } from 'react';
import React from 'react';

import { Icon } from '../Icon';
import { ButtonColorEnum, ButtonPriorityEnum, ButtonSizeEnum } from './enums';
import { Button } from './styles';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSizeEnum;
  color?: ButtonColorEnum;
  priority?: ButtonPriorityEnum;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  iconName?: string;
  iconColor?: string;
  iconSize?: number;
  fullwidth?: boolean;
  onlyIcon?: boolean;
  isActive?: boolean;
  type?: string;
};

function ButtonComponent({
  className,
  type = 'button',
  size = ButtonSizeEnum.S,
  color = ButtonColorEnum.blue,
  priority = ButtonPriorityEnum.primary,
  children,
  disabled,
  iconName,
  iconColor,
  iconSize,
  fullwidth,
  onlyIcon,
  isActive,
  ...other
}: ButtonProps) {
  return (
    <Button
      type={type}
      priority={priority}
      className={className}
      size={size}
      color={color}
      disabled={disabled}
      iconName={iconName}
      fullwidth={fullwidth}
      onlyIcon={onlyIcon}
      isActive={isActive}
      {...other}
    >
      {iconName && <Icon name={iconName} color={iconColor} size={iconSize} />}
      {children}
    </Button>
  );
}

export default ButtonComponent;
