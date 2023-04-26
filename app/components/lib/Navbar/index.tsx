import { LanguageEnum } from 'public/enums/languageEnum';
import { memo, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '~/components/common/Button/styles';
import SvgBell from '~/components/common/Icons/Bell';
import SvgEmail from '~/components/common/Icons/Email';
import SvgLogo from '~/components/common/Icons/Logo';
import SvgMenu from '~/components/common/Icons/Menu';
import { Switcher } from '~/components/common/Switcher';
import { Text } from '~/components/common/Text';
import { useApp } from '~/hooks';

export * from './NavbarItem';
export * from './types';

export const WrapperHeader = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.navbar.wrapperHeaderBackgroundColor};
  display: flex;
  justify-content: center;
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 22px 20px;
  width: 100%;
`;

const LogoWrapper = styled.a`
  cursor: pointer;
  svg {
    max-width: 99px;
    height: 40px;
    transition: all 0.15s ease-in;
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.navbar.hoverColor};
    }
  }
`;

export const BoxText = styled.div<{ lang: string; selectedLang: string }>`
  cursor: pointer;
  span:hover {
    color: ${({ lang, selectedLang, theme }) =>
    lang !== selectedLang ? theme.navbar.hoverColor : theme.navbar.noHoverColor};
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;

export const TranslateBox = styled.div`
  flex-direction: row;
  align-items: center;
  gap: 16px;
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const IconButton = styled.button`
  cursor: pointer;
  transition: all 0.15s ease-in;
  &:hover {
    svg {
      color: ${({ theme }) => theme.navbar.hoverColor};
    }
  }
`;

export const IconButtons = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    gap: 38px;
  }
`;

export const Navbar = memo(function NavbarMemoized(): JSX.Element {
  const { userContext, setUserContext, theme, t, i18n } = useApp();

  function setLang(language: LanguageEnum) {
    setUserContext((prevContext) => ({ ...prevContext!, language: language }))
  }

  const changeLanguage = () => {
    userContext?.language === LanguageEnum.TH ?
      setUserContext((prevContext) => ({ ...prevContext!, language: LanguageEnum.EN })) :
      setUserContext((prevContext) => ({ ...prevContext!, language: LanguageEnum.TH }));
  };

  useEffect(() => {
    i18n.changeLanguage(userContext?.language);
  }, [i18n, userContext?.language]);

  return (
    <WrapperHeader>
      <ContainerHeader>
        <LeftContainer>
          <LogoWrapper href='#'>
            <SvgLogo color={theme.navbar.logoColor} />
          </LogoWrapper>
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
            <IconButton>{<SvgBell color={theme.navbar.svgColor} />}</IconButton>
            <IconButton>{<SvgEmail color={theme.navbar.svgColor} />}</IconButton>
          </IconButtons>
          <Button priority='small'>
            <Text>{t('signIn')}</Text>
          </Button>
          <IconButton>{<SvgMenu color={theme.navbar.svgColor} />}</IconButton>
        </MenuContainer>
      </ContainerHeader>
    </WrapperHeader>
  );
});
