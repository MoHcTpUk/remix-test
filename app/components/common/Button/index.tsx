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
};

function ButtonComponent({
  className,
  size = ButtonSizeEnum.S,
  color = ButtonColorEnum.blue,
  priority = ButtonPriorityEnum.primary,
  children,
  disabled,
  iconName,
  iconColor,
  iconSize,
  fullwidth,
  ...other
}: ButtonProps) {
  return (
    <Button
      priority={priority}
      className={className}
      size={size}
      color={color}
      disabled={disabled}
      iconName={iconName}
      fullwidth={fullwidth}
      {...other}
    >
      {iconName && <Icon name={iconName} color={iconColor} size={iconSize} />}
      {children}
    </Button>
  );
}

export default ButtonComponent;
