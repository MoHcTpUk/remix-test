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
`;

export const SubBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BoxPicture = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const BoxAvatar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  img {
    width: 96px;
    height: 96px;
  }
`;

export const BoxFields = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
`;
