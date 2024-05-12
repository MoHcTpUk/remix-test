import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const Wrapper = styled(motion.div)`
  z-index: -1;
  padding: 0 5px;
  background-color: transparent;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
`;
