import { AnimatePresence, motion } from 'framer-motion';
import type { ReactNode } from 'react';
import styled from 'styled-components';

import { useApp } from '~/hooks';

import SvgClose from '../Icons/Close';

const Background = styled.div``;

const ModalContainer = styled.div`
  z-index: 999;
`;
const ModalCloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 10px;
`;

const ModalInner = styled(motion.div)`
  position: absolute;
  z-index: 999;
  padding: 64px 16px 32px;
  background-color: ${({ theme }) => theme.modal.backgroundColor};
  width: 95vw;
  max-width: 590px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    padding: 68px 46px 40px;
  }
  @media (min-width: 1280px) {
    padding: 76px 102px 48px;
  }
`;

export function Modal({
  visibility,
  setVisibility,
  children,
}: {
  visibility: boolean;
  setVisibility: (visibility: boolean) => void;
  children: ReactNode;
}) {
  const { theme } = useApp();

  return (
    <AnimatePresence>
      {visibility && (
        <>
          <Background className='fixed inset-0 z-30'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className='absolute inset-0 bg-zinc-700 z-998'
            />
          </Background>
          <ModalContainer className='px-5 fixed h-full w-full flex items-center justify-center top-0 left-0'>
            <ModalInner
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -50,
                opacity: 0,
              }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            >
              <ModalCloseButton onClick={() => setVisibility(!visibility)}>
                <SvgClose color={theme.modal.svgColor} />
              </ModalCloseButton>
              {children}
            </ModalInner>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
              onClick={() => setVisibility(!visibility)}
              className='bg-transparent px-5 fixed h-full w-full flex items-center justify-center top-0 left-0'
              style={{ zIndex: -1 }}
            />
          </ModalContainer>
        </>
      )}
    </AnimatePresence>
  );
}
