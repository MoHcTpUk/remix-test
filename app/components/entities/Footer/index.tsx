import { Link } from '@remix-run/react';
import { memo } from 'react';
import routes from 'shared/routing/routes';

import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';

import {
  BoxCopiright,
  ContainerFooter,
  IconsWrapper,
  LinkItem,
  LinksWrapper,
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
      href: routes.about,
    },
    {
      id: '2',
      title: `${t('menu.privacy_policy')}`,
      href: routes.privacyPolicy.root,
    },
    // {
    //   id: '3',
    //   title: `${t('menu.articles')}`,
    //   href: `${routes.materials.articles.root}`,
    // },
    {
      id: '3',
      title: `${t('menu.faq')}`,
      href: `${routes.faq}`,
    },
    {
      id: '4',
      title: `${t('menu.news')}`,
      href: `${routes.materials.news.root}`,
    },
  ];

  return (
    <WrapperFooter>
      <ContainerFooter>
        <LinksWrapper>
          {navlinks.map(({ href, id, title }) => (
            <Link key={id} to={href}>
              <LinkItem>
                <Text color={theme.footer.linkTextColor} variant={TextVariantEnum.textBody2}>
                  {title}
                </Text>
              </LinkItem>
            </Link>
          ))}
        </LinksWrapper>
        <IconsWrapper>
          {/* <Link to='#'>
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
          </Link> */}
        </IconsWrapper>
        <BoxCopiright>
          <Text color={theme.footer.linkTextColor} variant={TextVariantEnum.textSmall}>
            {t('common:copyright')}
          </Text>
        </BoxCopiright>
      </ContainerFooter>
    </WrapperFooter>
  );
});
