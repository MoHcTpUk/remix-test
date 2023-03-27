import React, { ReactNode } from 'react';
import { ButtonPriorityEnum, ButtonColorEnum, ButtonSizeEnum } from './enums';
import { Button } from './styles';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSizeEnum;
  color?: ButtonColorEnum;
  priority?: ButtonPriorityEnum;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
};

const ButtonComponent: React.FC<ButtonProps> = ({
  className,
  size = ButtonSizeEnum.S,
  color = ButtonColorEnum.blue,
  priority = ButtonPriorityEnum.primary,
  children,
  disabled,
  ...other
}) => {
  return (
    <Button
      priority={priority}
      className={className}
      size={size}
      color={color}
      disabled={disabled}
      {...other}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
