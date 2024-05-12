import { Link, useMatches } from '@remix-run/react';
import { AnimatePresence, motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import routes from 'shared/routing/routes';
import { v1 as uuidv1 } from 'uuid';

import { ModalBox } from '~/components/ui/ModalBox';
import { useApp, useScreenWidth } from '~/hooks';
import { VariantModalEnum } from '~/types/enums/variantModalEnum';
import { DEFAULT_USER_AVATAR } from '~/utils/constants';
import { getImageUrl } from '~/utils/helpers';

import { Box } from '../Box';
import SvgClose from '../Icons/Close';
import SvgLogo from '../Icons/Logo';
import { Text } from '../Text';
import { TextVariantEnum } from '../Text/enums';
import {
  AvatarContainer,
  Background,
  LogoWrapper,
  ModalCloseButton,
  ModalContainer,
  ModalHeader,
  ModalInner,
  UserBox,
} from './styles';

type ModalTypeProps = {
  visibility: boolean;
  variant?: VariantModalEnum;
  setVisibility: (visibility: boolean) => void;
  children: ReactNode;
};

export function Modal({ visibility, setVisibility, variant, children }: ModalTypeProps) {
  const { theme, userContext, t } = useApp();
  const modalId = uuidv1();
  const widthScreen = useScreenWidth();
  const matches = useMatches();
  const indexMatches = matches.some((m) => m.id === 'routes/index');

  useEffect(() => {
    document.body.classList.toggle('has-modal', visibility);

    return () => {
      document.body.classList.toggle('has-modal', false);
    };
  }, [visibility]);

  return (
    <AnimatePresence>
      {visibility && (
        <>
          <Background
            className={
              variant === VariantModalEnum.navbar && indexMatches && widthScreen > 1280
                ? 'navBackground'
                : ''
            }
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgb(63 63 70)',
                zIndex: 998,
              }}
            />
          </Background>
          <ModalContainer
            // eslint-disable-next-line jsx-a11y/aria-role
            role='dialog'
            aria-labelledby={modalId}
            aria-modal='true'
            variant={variant}
          >
            <ModalInner
              initial={{ x: '50%', y: '-50%', opacity: 0, scale: 0 }}
              animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              exit={{
                x: '50%',
                y: '-50%',
                opacity: 0,
                transition: {
                  ease: [0.3, 0, 0.8, 0.15],
                  duration: 0.2,
                },
                scale: 0,
              }}
              transition={{
                ease: [0.05, 0.7, 0.1, 1],
                duration: 0.5,
              }}
              variant={variant}
              id={modalId}
              className={
                variant === VariantModalEnum.navbar && indexMatches && widthScreen > 1280
                  ? 'homePageNavbar'
                  : ''
              }
            >
              {variant === VariantModalEnum.navbar && (
                <ModalHeader>
                  {userContext?.user?.isAuthenticated ? (
                    <UserBox>
                      <AvatarContainer>
                        <Link to={routes.user.root}>
                          <img
                            src={
                              userContext.user.avatar
                                ? getImageUrl(userContext.user.avatar)
                                : DEFAULT_USER_AVATAR
                            }
                            alt=''
                          />
                        </Link>
                      </AvatarContainer>
                      <Box flexDirection='column'>
                        <Text variant={TextVariantEnum.textBody1medium}>
                          {userContext.user.firstName}
                        </Text>
                        <Text variant={TextVariantEnum.textBody1medium}>
                          {userContext.user.lastName}
                        </Text>
                      </Box>
                    </UserBox>
                  ) : (
                    <Link to={routes.root}>
                      <LogoWrapper>
                        <SvgLogo color={theme.navbar.logoColor} />
                      </LogoWrapper>
                    </Link>
                  )}
                  <ModalCloseButton
                    type='button'
                    onClick={() => setVisibility(!visibility)}
                    variant='withHeader'
                    className={indexMatches && widthScreen > 1280 ? 'hidden' : ''}
                  >
                    <SvgClose color={theme.modal.svgColor} />
                  </ModalCloseButton>
                </ModalHeader>
              )}
              {variant === VariantModalEnum.filter && (
                <ModalHeader>
                  <UserBox>
                    <Text variant={TextVariantEnum.textHeading2}>{t('common:search_filters')}</Text>
                  </UserBox>
                  <ModalCloseButton
                    type='button'
                    onClick={() => setVisibility(!visibility)}
                    variant='withHeader'
                  >
                    <SvgClose color={theme.modal.svgColor} />
                  </ModalCloseButton>
                </ModalHeader>
              )}
              {variant !== VariantModalEnum.navbar &&
                variant !== VariantModalEnum.filter &&
                variant !== VariantModalEnum.confirmDelete &&
                variant !== VariantModalEnum.confirmDeleteCompany &&
                variant !== VariantModalEnum.providingContacts &&
                variant !== VariantModalEnum.uploading &&
                variant !== VariantModalEnum.companyCreated &&
                variant !== VariantModalEnum.verification && (
                  <ModalCloseButton type='button' onClick={() => setVisibility(!visibility)}>
                    <SvgClose color={theme.modal.svgColor} />
                  </ModalCloseButton>
                )}
              {children}
            </ModalInner>
            <ModalBox onClick={() => setVisibility(!visibility)} />
          </ModalContainer>
        </>
      )}
    </AnimatePresence>
  );
}
