import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { DefaultTheme } from 'styled-components';
import { Text } from '~/components/common/Text';

export interface ILink {
  id: string;
  title: string;
  href: string;
}

export interface FooterProps {
  links: ILink[];
}

export const WrapperHeader = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.footer.wrapperHeaderBackgroundColor};
  display: flex;
  justify-content: center;
`;

export const ContainerHeader = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  padding: 38px 16px 16px;
  width: 100%;
  max-width: 1232px;
  gap: 36px;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 36px;
  row-gap: 18px;

  @media (min-width: 768px) {
    justify-content: flex-start;
    span {
      font-size: 18px;
      line-height: 27px;
    }
  }
`;

export const Link = styled.a`
  cursor: pointer;
  span:hover {
    color: ${({ theme }) => theme.footer.linkSpanColor};
  }
  @media (min-width: 1024px) {
    span {
      color: ${({ theme }) => theme.footer.linkSpanColorMedia1024};
    }
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 36px;

  img {
    width: 20px;
    transition: all 0.15s ease-in;
  }

  @media (min-width: 768px) {
    justify-content: flex-start;
    gap: 48px;
  }

  @media (min-width: 1024px) {
    position: absolute;
    right: 0;
    margin-top: 4px;
  }
`;

export const SosialImg = styled.a`
  cursor: pointer;

  img:hover {
    transform: scale(1.05);
  }
`;

export const BoxCopiright = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
  @media (min-width: 1024) {
    justify-content: flex-start;
    span {
      font-size: 16px;
      color: ${({ theme }) => theme.footer.boxCopirightSpanColorMedia1024};
    }
  }
`;

export const Footer = memo(function FooterMemoized({
  theme,
}: {
  theme: DefaultTheme;
}): JSX.Element {
  let { t } = useTranslation();

  const navlinks: ILink[] = [
    {
      id: '1',
      title: `${t('menu.about')}`,
      href: '#',
    },
    {
      id: '2',
      title: `${t('menu.privacy_policy')}`,
      href: '#',
    },
    {
      id: '3',
      title: `${t('menu.articles')}`,
      href: '#',
    },
    {
      id: '4',
      title: `${t('menu.faq')}`,
      href: '#',
    },
    {
      id: '5',
      title: `${t('menu.news')}`,
      href: '#',
    },
    {
      id: '6',
      title: `${t('menu.help')}`,
      href: '#',
    },
  ];

  return (
    <WrapperHeader>
      <ContainerHeader>
        <LinksWrapper>
          {navlinks.map(({ href, id, title }) => (
            <Link key={id} href={href}>
              <Text color={theme.footer.linkTextColor}>{title}</Text>
            </Link>
          ))}
        </LinksWrapper>
        <IconsWrapper>
          <SosialImg href='#'>
            <img src='images/social/ln.jpg' alt='line' />
          </SosialImg>
          <SosialImg href='#'>
            <img src='images/social/fb.jpg' alt='facebook' />
          </SosialImg>
          <SosialImg href='#'>
            <img src='images/social/in.jpg' alt='instagram' />
          </SosialImg>
        </IconsWrapper>
        <BoxCopiright>
          <Text color={theme.footer.linkTextColor}>{t('copyright')}</Text>
        </BoxCopiright>
      </ContainerHeader>
    </WrapperHeader>
  );
});
