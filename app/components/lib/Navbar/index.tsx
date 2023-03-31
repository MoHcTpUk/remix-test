import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { DefaultTheme } from 'styled-components';
import { Button } from '~/components/common/Button/styles';
import SvgBell from '~/components/common/Icons/Bell';
import SvgEmail from '~/components/common/Icons/Email';
import SvgLogo from '~/components/common/Icons/Logo';
import SvgMenu from '~/components/common/Icons/Menu';
import { Switcher } from '~/components/common/Switcher';
import { Text } from '~/components/common/Text';

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
  max-width: 1232px;
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

export const Navbar = memo(function NavbarMemoized({
  theme,
}: {
  theme: DefaultTheme;
}): JSX.Element {
  let { i18n, t } = useTranslation();

  const changeLanguage = () => {
    lang === 'th' ? setLang('en') : setLang('th');
  };
  const [lang, setLang] = useState('en');
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [i18n, lang]);

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
              lang={'th'}
              selectedLang={lang}
              onClick={() => setLang('th')}
            >
              <Text
                color={
                  lang === 'th'
                    ? theme.navbar.textActiveLangColor
                    : theme.navbar.textNoActiveLangColor
                }
              >
                ภาษาไทย
              </Text>
            </BoxText>
            <Switcher onChange={changeLanguage} checked={lang === 'en'} htmlLabel='lang' />
            <BoxText
              style={{ cursor: 'pointer' }}
              lang={'en'}
              selectedLang={lang}
              onClick={() => setLang('en')}
            >
              <Text
                color={
                  lang === 'en'
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
