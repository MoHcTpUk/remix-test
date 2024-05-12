import type { ForwardRefComponent, HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';
import React from 'react';

import { Wrapper } from './styles';

type Props = {
  children: ReactNode;
  as?: ForwardRefComponent<HTMLDivElement, HTMLMotionProps<'div'>>;
  id?: string;
  initial?: {
    opacity: number;
  };
  animate?: {
    opacity: number;
  };
  exit?: {
    opacity: number;
  };
  transition?: {
    type: string;
    bounce: number;
    duration: number;
  };
  style?: {
    alignItems?: string;
    justifyContent?: string;
    gap?: string;
  };
  withGrowingBtn?: boolean;
};

export function CardContainer({
  children,
  as,
  id,
  initial,
  animate,
  exit,
  transition,
  style,
  withGrowingBtn,
}: Props) {
  return (
    <Wrapper
      as={as}
      id={id}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      style={style}
      withGrowingBtn={withGrowingBtn}
    >
      {children}
    </Wrapper>
  );
}
