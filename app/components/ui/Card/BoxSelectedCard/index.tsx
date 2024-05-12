import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

import { Wrapper } from './styles';

type Props = {
  children: ReactNode;
};

export function BoxSelectedCard({ children }: Props) {
  return (
    <Wrapper
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </Wrapper>
  );
}
