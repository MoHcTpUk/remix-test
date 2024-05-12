/* eslint-disable react/display-name */
import { Link, NavLink, useLocation, useNavigate } from '@remix-run/react';
import { memo, useEffect, useState } from 'react';
import routes from 'shared/routing/routes';

import Button from '~/components/common/Button';
import SvgLogo from '~/components/common/Icons/Logo';
import SvgMenu from '~/components/common/Icons/Menu';
import { Switcher } from '~/components/common/Switcher';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import ForgotPasswordPage from '~/components/pages/Auth/ForgotPassword';
import Login from '~/components/pages/Auth/Login';
import { useApp, useRouteChecks } from '~/hooks';
import { LanguageEnum } from '~/types/enums/languageEnum';
import { DEFAULT_USER_AVATAR } from '~/utils/constants';

import MobileNavbar from '../MobileNavbar';
import {
  AvatarContainer,
  BoxText,
  ContainerHeader,
  IconButtonBurger,
  LeftContainer,
  LogoWrapper,
  MenuContainer,
  MenuLinks,
  TranslateBox,
  WrapperHeader,
} from './styles';
import { getImageUrl } from '~/utils/helpers.client';

export const Navbar = memo((): JSX.Element => {
  const [visibilityLogin, setVisibilityLogin] = useState(false);
  const [initialRender, setInitialRender] = useState(false);
  const [visibilityForgotPassword, setVisibilityForgotPassword] = useState(false);
  const [visibleMobileNavbar, setVisibleMobileNavbar] = useState(false);
  const [sticky, setSticky] = useState(false);

  const { isHomePage, isSearchResume, isSearchVacancy, isSearchCompany } = useRouteChecks();
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

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const loginParam = urlParams.get('login');
    if (loginParam === 'true' && !visibilityLogin) {
      setVisibilityLogin(true);
    } else if ((!loginParam || loginParam === 'false') && visibilityLogin) {
      setVisibilityLogin(false);
    }
  }, [location.search]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window?.location?.search);

    if (!initialRender) {
      setInitialRender(true);
    } else if (!visibilityLogin && urlParams.has('login')) {
      urlParams.delete('login');
      if (urlParams.toString() === '') {
        navigate(`${location.pathname}`);
      } else {
        navigate(`${location.pathname}?${urlParams.toString()}`);
      }
    }

    // Set initial render to false after the first render
  }, [visibilityLogin]);

  const handleOpenModal = (visibility: boolean) => {
    const urlParams = new URLSearchParams(window?.location?.search);
    urlParams.set('login', 'true');
    const newUrl = `${location.pathname}?${urlParams.toString()}`;
    window.history.pushState({}, '', newUrl);
    setVisibilityLogin(!visibility);
  };

  useEffect(() => {
    const stickyNavbar = () => {
      const searchHeight = document.getElementById('searchSection');
      const windowHeight = window.scrollY;
      if (window !== undefined && searchHeight) {
        if (windowHeight > searchHeight.offsetHeight) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      }
    };
    window.addEventListener('scroll', stickyNavbar);
    return () => {
      window.removeEventListener('scroll', stickyNavbar);
    };
  }, []);

  return (
    <WrapperHeader sticky={sticky} type={isHomePage ? 'homePage' : ''}>
      <ContainerHeader>
        <LeftContainer>
          <Link to={routes.root}>
            <LogoWrapper>
              <SvgLogo className='transparent' />
            </LogoWrapper>
          </Link>
          <TranslateBox>
            {/* <BoxText
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
            </BoxText> */}
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
              onClick={() => {
                if (userContext.language === 'th') setLang(LanguageEnum.EN);
                if (userContext.language === 'en') setLang(LanguageEnum.TH);
              }}
            >
              <Text
                color={theme.navbar.textActiveLangColor}
                variant={TextVariantEnum.textBody2}
                className='transparent'
              >
                {userContext?.language === 'en' ? 'English' : 'ภาษาไทย'}
              </Text>
            </BoxText>
          </TranslateBox>
          <MenuLinks>
            <NavLink to={routes.root}>
              <Button priority='tertiary' isActive={isHomePage}>
                <Text
                  color={theme.navbar.textLinkColor}
                  variant={TextVariantEnum.textBody2}
                  className='transparent'
                >
                  {t('common:home')}
                </Text>
              </Button>
            </NavLink>
            <NavLink to={`/search/${userContext.search || ''}`}>
              <Button
                priority='tertiary'
                isActive={isSearchResume || isSearchVacancy || isSearchCompany}
              >
                <Text
                  color={theme.navbar.textLinkColor}
                  variant={TextVariantEnum.textBody2}
                  className='transparent'
                >
                  {t('home:search')}
                </Text>
              </Button>
            </NavLink>
          </MenuLinks>
        </LeftContainer>

        <MenuContainer>
          {userContext.user?.isAuthenticated ? (
            <>
              {/* <IconButtons>
                <IconButton>
                  <SvgBell color={theme.navbar.svgColor} className='transparent' />
                </IconButton>
                <IconButton>
                  <SvgEmail color={theme.navbar.svgColor} className='transparent' />
                </IconButton>
              </IconButtons> */}
              <AvatarContainer onClick={() => setVisibleMobileNavbar(!visibleMobileNavbar)}>
                {/* <Link to={routes.user.root}> */}
                <img
                  src={
                    userContext.user.avatar
                      ? getImageUrl(userContext.user.avatar)
                      : DEFAULT_USER_AVATAR
                  }
                  alt='avatar'
                />
                {/* </Link> */}
              </AvatarContainer>
            </>
          ) : (
            <Button
              onClick={() => handleOpenModal(visibilityLogin)}
              priority={!sticky ? 'secondary' : 'primary'}
            >
              <Text variant={TextVariantEnum.textBody2}>{t('signIn')}</Text>
            </Button>
          )}
          <IconButtonBurger onClick={() => setVisibleMobileNavbar(!visibleMobileNavbar)}>
            <SvgMenu color={theme.navbar.svgColor} className='transparent' />
          </IconButtonBurger>
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
      <MobileNavbar
        visibility={visibleMobileNavbar}
        setVisibility={setVisibleMobileNavbar}
        visibilityLogin={visibilityLogin}
        setVisibilityLogin={setVisibilityLogin}
      />
    </WrapperHeader>
  );
});
