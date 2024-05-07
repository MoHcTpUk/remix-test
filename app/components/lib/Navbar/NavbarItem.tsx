import { Link } from '@remix-run/react';
import { memo } from 'react';

import type { NavbarLink } from './types';

type NavbarItemProps = {
  item: NavbarLink;
};

export const NavbarItem = memo(function NavbarItemMemoized({ item }: NavbarItemProps): JSX.Element {
  return <Link to={item.href}>{item.title}</Link>;
});
