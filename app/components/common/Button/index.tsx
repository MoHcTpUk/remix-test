import type { ReactNode } from 'react';
import React from 'react';
import SvgPensil from '../Icons/Pensil';
import { ButtonPriorityEnum, ButtonColorEnum, ButtonSizeEnum } from './enums';
import { Button } from './styles';
import { Icon } from '../Icon';

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

const ButtonComponent: React.FC<ButtonProps> = ({
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
}) => {
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
};

export default ButtonComponent;
