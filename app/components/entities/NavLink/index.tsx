import { Link } from '@remix-run/react';
import { memo } from 'react';
import styled from 'styled-components';

import { Box } from '~/components/common/Box';
import { Icon } from '~/components/common/Icon';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';
import { IconEnum } from '~/types/enums/iconEnum';

import { LinkContainer } from './styles';

export type NavbarLink = {
  id: number;
  title: string;
  href: string;
  isActive?: boolean;
  icon?: IconEnum;
  search?: 'company' | 'vacancy' | 'resume';
};

type NavbarItemProps = {
  item: NavbarLink;
  handleCloseBar?: () => void;
  handleClickSearch?: (id?: 'vacancy' | 'resume' | 'company') => void;
};

export const NavbarItem = memo(
  ({ item, handleCloseBar, handleClickSearch }: NavbarItemProps): JSX.Element => {
    const { theme } = useApp();
    return (
      <Link
        to={item.href}
        onClick={() => {
          if (handleCloseBar) {
            handleCloseBar();
          }
          if (handleClickSearch) {
            handleClickSearch(item.search);
          }
        }}
      >
        <LinkContainer isActive={item.isActive}>
          <Box flexDirection='row' alignItems='center' gap='16px'>
            {item.icon && (
              <Icon
                name={item.icon}
                color={item.isActive ? theme.navbar.hoverColor : theme.defaultTextColor}
              />
            )}
            <Text variant={TextVariantEnum.textBody2medium}>{item.title}</Text>
          </Box>
          {!item.isActive && <Icon name={IconEnum.arrowRight} />}
        </LinkContainer>
      </Link>
    );
  },
);
