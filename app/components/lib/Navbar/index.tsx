import { Link, Outlet } from '@remix-run/react';
import { LanguageEnum } from 'public/enums/languageEnum';
import { memo, useEffect, useState } from 'react';

import { Button } from '~/components/common/Button/styles';
import SvgBell from '~/components/common/Icons/Bell';
import SvgEmail from '~/components/common/Icons/Email';
import SvgLogo from '~/components/common/Icons/Logo';
import SvgMenu from '~/components/common/Icons/Menu';
import { Switcher } from '~/components/common/Switcher';
import { Text } from '~/components/common/Text';
import ForgotPasswordPage from '~/components/pages/Auth/ForgotPassword';
import Login from '~/components/pages/Auth/Login';
import { useApp } from '~/hooks';

import {
  BoxText,
  ContainerHeader,
  IconButton,
  IconButtons,
  LeftContainer,
  LogoWrapper,
  MenuContainer,
  TranslateBox,
  WrapperHeader,
} from './styles';

export * from './NavbarItem';
export * from './types';

export const Navbar = memo((): JSX.Element => {
  const [visibilityLogin, setVisibilityLogin] = useState(false);
  const [visibilityForgotPassword, setVisibilityForgotPassword] = useState(false);

  const { userContext, setUserContext, theme, t, i18n } = useApp();
  function setLang(language: LanguageEnum) {
    setUserContext((prevContext) => ({ ...prevContext, language }));
  }

  const changeLanguage = () =>
    userContext?.language === LanguageEnum.TH
      ? setUserContext((prevContext) => ({ ...prevContext, language: LanguageEnum.EN }))
      : setUserContext((prevContext) => ({ ...prevContext, language: LanguageEnum.TH }));

  useEffect(() => {
    i18n.changeLanguage(userContext?.language);
  }, [i18n, userContext?.language]);

  return (
    <WrapperHeader>
      <ContainerHeader>
        <LeftContainer>
          <Link to='/'>
            <LogoWrapper>
              <SvgLogo color={theme.navbar.logoColor} />
            </LogoWrapper>
          </Link>
          <TranslateBox>
            <BoxText
              style={{ cursor: 'pointer' }}
              lang={LanguageEnum.TH}
              selectedLang={userContext?.language ?? ''}
              onClick={() => setLang(LanguageEnum.TH)}
            >
              <Text
                color={
                  userContext?.language === LanguageEnum.TH
                    ? theme.navbar.textActiveLangColor
                    : theme.navbar.textNoActiveLangColor
                }
              >
                ภาษาไทย
              </Text>
            </BoxText>
            <Switcher
              onChange={changeLanguage}
              checked={userContext?.language === LanguageEnum.EN}
              htmlLabel='lang'
              variant='lang'
            />
            <BoxText
              style={{ cursor: 'pointer' }}
              lang={LanguageEnum.EN}
              selectedLang={userContext?.language ?? ''}
              onClick={() => setLang(LanguageEnum.EN)}
            >
              <Text
                color={
                  userContext?.language === LanguageEnum.EN
                    ? theme.navbar.textActiveLangColor
                    : theme.navbar.textNoActiveLangColor
                }
              >
                English
              </Text>
            </BoxText>
          </TranslateBox>
        </LeftContainer>

        <MenuContainer>
          <IconButtons>
            <IconButton>
              <SvgBell color={theme.navbar.svgColor} />
            </IconButton>
            <IconButton>
              <SvgEmail color={theme.navbar.svgColor} />
            </IconButton>
          </IconButtons>
          <Button onClick={() => setVisibilityLogin(!visibilityLogin)} priority='small'>
            <Text>{t('signIn')}</Text>
          </Button>
          <Outlet />
          <IconButton>
            <SvgMenu color={theme.navbar.svgColor} />
          </IconButton>
        </MenuContainer>
      </ContainerHeader>
      <Login
        visibility={visibilityLogin}
        setVisibility={setVisibilityLogin}
        setVisibilityForgotPassword={setVisibilityForgotPassword}
      />
      <ForgotPasswordPage
        visibility={visibilityForgotPassword}
        setVisibility={setVisibilityForgotPassword}
        setVisibilityLogin={setVisibilityLogin}
      />
    </WrapperHeader>
  );
});
