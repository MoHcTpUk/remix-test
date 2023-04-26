import { Link } from '@remix-run/react';
import { memo } from 'react';

import type { NavbarLink } from './types';

type NavbarItemProps = {
  item: NavbarLink;
};

export const NavbarItem = memo(
  ({ item }: NavbarItemProps): JSX.Element => <Link to={item.href}>{item.title}</Link>,
);
