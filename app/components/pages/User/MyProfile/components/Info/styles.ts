import { motion } from 'framer-motion';
import styled from 'styled-components';

export const BoxUserData = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 1024px) {
    /* Disable animation */
    animation: none !important;
    transition: none !important;
    transition: none !important;
    animation-duration: none !important;
  }
`;

export const BoxUserEditData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  @media (min-width: 768px) {
    padding-top: 8px;
  }
`;

export const BoxPicture = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const Image = styled.img`
  min-width: 96px;
  height: 96px;
  object-fit: cover;
  border-radius: 50%;
  @media (min-width: 768px) {
    width: 136px;
    height: 136px;
  }
`;
