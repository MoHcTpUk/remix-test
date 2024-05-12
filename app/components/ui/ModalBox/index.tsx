import { motion } from 'framer-motion';

import { Wrapper } from './styles';

type Props = {
  id?: string;
  onClick: () => void;
};

export function ModalBox({ id, onClick }: Props) {
  return (
    <Wrapper
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
      id={id}
      onClick={onClick}
    />
  );
}
