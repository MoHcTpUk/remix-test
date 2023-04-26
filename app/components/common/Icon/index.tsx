import { IconEnum } from 'public/enums/iconEnum';
import { Box, BoxProps } from '../Box';
import { useApp } from '~/hooks';
import SvgBell from '../Icons/Bell';
import SvgBellPush from '../Icons/BellPush';
import SvgClose from '../Icons/Close';
import SvgDown from '../Icons/Down';
import SvgEmail from '../Icons/Email';
import SvgLeft from '../Icons/Left';
import SvgLeftLine from '../Icons/LeftLine';
import SvgMap from '../Icons/Map';
import SvgMenu from '../Icons/Menu';
import SvgPensil from '../Icons/Pensil';
import SvgRight from '../Icons/Right';
import SvgSearch from '../Icons/Search';
import SvgShow from '../Icons/Show';
import SvgUp from '../Icons/Up';
import SvgGoogle from '../Icons/Google';
import SvgFb from '../Icons/Fb';

export type IconNamedProps = {
  name: IconEnum | string;
  color?: string;
  size?: number;
  className?: string;
};

export type IconProps = IconNamedProps & {
  container?: BoxProps;
};

export function Icon({ name, color, size, container = {}, className }: IconProps): JSX.Element {
  return (
    <Box {...{ display: 'inline-flex', ...container }}>
      <IconNamed name={name} color={color} size={size} className={className} />
    </Box>
  );
}

function IconNamed({ name, color, size = 24, className = '' }: IconNamedProps): JSX.Element {
  const { theme } = useApp();

  const props = {
    width: size,
    height: size,
    color: theme.defaultTextColor,
    className,
  };

  switch (name) {
    case IconEnum.bell:
      return <SvgBell {...props} />;

    case IconEnum.bellPush:
      return <SvgBellPush {...props} />;

    case IconEnum.close:
      return <SvgClose {...props} />;

    case IconEnum.down:
      return <SvgDown {...props} />;

    case IconEnum.email:
      return <SvgEmail {...props} />;

    case IconEnum.emailPush:
      return <SvgEmail {...props} />;

    case IconEnum.left:
      return <SvgLeft {...props} />;

    case IconEnum.leftLine:
      return <SvgLeftLine {...props} />;

    case IconEnum.map:
      return <SvgMap {...props} />;

    case IconEnum.menu:
      return <SvgMenu {...props} />;

    case IconEnum.pensil:
      return <SvgPensil {...props} />;

    case IconEnum.right:
      return <SvgRight {...props} />;

    case IconEnum.rightLine:
      return <SvgRight {...props} />;

    case IconEnum.search:
      return <SvgSearch {...props} />;

    case IconEnum.show:
      return <SvgShow {...props} />;

    case IconEnum.up:
      return <SvgUp {...props} />;

    case IconEnum.up:
      return <SvgUp {...props} />;

    case IconEnum.google:
      return <SvgGoogle {...props} />;

    case IconEnum.fb:
      return <SvgFb {...props} />;

    default:
      return <></>;
  }
}
