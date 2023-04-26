/* eslint-disable @typescript-eslint/no-redeclare */
import type { ValueOf } from 'shared/utils';

export const IconEnum = {
  bell: 'bell',
  bellPush: 'bellPush',
  close: 'close',
  down: 'down',
  email: 'email',
  emailPush: 'emailPush',
  left: 'left',
  leftLine: 'leftLine',
  logo: 'logo',
  map: 'map',
  menu: 'menu',
  pensil: 'pensil',
  right: 'right',
  rightLine: 'rightLine',
  search: 'search',
  show: 'show',
  up: 'up',
  google: 'google',
  fb: 'fb',
  arrowLeft: 'arrowLeft',
  cart: 'cart',
  copy: 'copy',
} as const;

export type IconEnum = ValueOf<typeof IconEnum>;
