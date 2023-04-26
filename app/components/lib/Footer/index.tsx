import { Link } from '@remix-run/react';
import { memo } from 'react';

import { Text } from '~/components/common/Text';
import { useApp } from '~/hooks';

import {
  BoxCopiright,
  ContainerFooter,
  IconsWrapper,
  LinkItem,
  LinksWrapper,
  SosialImg,
  WrapperFooter,
} from './styles';

export interface ILink {
  id: string;
  title: string;
  href: string;
}

export interface FooterProps {
  links: ILink[];
}

export const Footer = memo((): JSX.Element => {
  const { theme, t } = useApp();

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
    <WrapperFooter>
      <ContainerFooter>
        <LinksWrapper>
          {navlinks.map(({ href, id, title }) => (
            <Link key={id} to={href}>
              <LinkItem>
                <Text color={theme.footer.linkTextColor}>{title}</Text>
              </LinkItem>
            </Link>
          ))}
        </LinksWrapper>
        <IconsWrapper>
          <Link to='#'>
            <SosialImg>
              <img src='/images/social/ln.jpg' alt='line' />
            </SosialImg>
          </Link>

          <Link to='#'>
            <SosialImg>
              <img src='/images/social/fb.jpg' alt='facebook' />
            </SosialImg>
          </Link>

          <Link to='#'>
            <SosialImg>
              <img src='/images/social/in.jpg' alt='instagram' />
            </SosialImg>
          </Link>
        </IconsWrapper>
        <BoxCopiright>
          <Text color={theme.footer.linkTextColor}>{t('copyright')}</Text>
        </BoxCopiright>
      </ContainerFooter>
    </WrapperFooter>
  );
});
