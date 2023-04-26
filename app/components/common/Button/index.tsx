import type { ReactNode } from 'react';
import React from 'react';
import SvgPensil from '../Icons/Pensil';
import { ButtonPriorityEnum, ButtonColorEnum, ButtonSizeEnum } from './enums';
import { Button } from './styles';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSizeEnum;
  color?: ButtonColorEnum;
  priority?: ButtonPriorityEnum;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  pensil?: boolean;
};

const ButtonComponent: React.FC<ButtonProps> = ({
  className,
  size = ButtonSizeEnum.S,
  color = ButtonColorEnum.blue,
  priority = ButtonPriorityEnum.primary,
  children,
  disabled,
  pensil,
  ...other
}) => {
  return (
    <Button
      priority={priority}
      className={className}
      size={size}
      color={color}
      disabled={disabled}
      pensil={pensil}
      {...other}
    >
      {pensil && <SvgPensil />}
      {children}
    </Button>
  );
};

export default ButtonComponent;
