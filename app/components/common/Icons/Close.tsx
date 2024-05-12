import { useApp, useScreenWidth } from '~/hooks';

import SvgCloseMd from './CloseMD';
import SvgCloseSm from './CloseSM';

function SvgClose({ color }: { color?: string }) {
  const { theme } = useApp();
  const widthScreen = useScreenWidth();
  return widthScreen > 768 ? (
    <SvgCloseMd color={theme.modal.svgColor} />
  ) : (
    <SvgCloseSm color={theme.modal.svgColor} />
  );
}
export default SvgClose;
