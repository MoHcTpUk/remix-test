import { useApp } from '~/hooks';
import { IconEnum } from '~/types/enums/iconEnum';

import type { BoxProps } from '../Box';
import { Box } from '../Box';
import SvgArrowLeft from '../Icons/ArrowLeft';
import SvgArrowRight from '../Icons/ArrowRight';
import SvgAttention from '../Icons/Attention';
import SvgAttentionError from '../Icons/AttentionError';
import SvgAttentionInfo from '../Icons/AttentionInfo';
import SvgAttentionNotVerified from '../Icons/AttentionNotVerified';
import SvgAttentionStop from '../Icons/AttentionStop';
import SvgAttentionSuccess from '../Icons/AttentionSuccess';
import SvgAttentionVerified from '../Icons/AttentionVerified';
import SvgBell from '../Icons/Bell';
import SvgBellPush from '../Icons/BellPush';
import SvgBlackCamera from '../Icons/BlackCamera';
import SvgBlackMail from '../Icons/BlackMail';
import SvgBlackWarning from '../Icons/BlackWarning';
import SvgCart from '../Icons/Cart';
import SvgChat from '../Icons/Chat';
import SvgCloseMd from '../Icons/CloseMD';
import SvgCloseSm from '../Icons/CloseSM';
import SvgCopy from '../Icons/Copy';
import SvgDown from '../Icons/Down';
import SvgDownload from '../Icons/Download';
import SvgEditPencilLine from '../Icons/EditPencilLine';
import SvgEmail from '../Icons/Email';
import SvgEmojiBriefcase from '../Icons/EmojiBriefcase';
import SvgEmojiDocument from '../Icons/EmojiDocument';
import SvgEmojiFaq from '../Icons/EmojiFaq';
import SvgEmojiShield from '../Icons/EmojiShield';
import SvgEmojiStar from '../Icons/EmojiStar';
import SvgEmojiStar2 from '../Icons/EmojiStar2';
import SvgEmojiZzz from '../Icons/EmojiZzz';
import SvgFb from '../Icons/Fb';
import SvgFilter from '../Icons/Filter';
import SvgGoogle from '../Icons/Google';
import SvgLeft from '../Icons/Left';
import SvgLeftLine from '../Icons/LeftLine';
import SvgMap from '../Icons/Map';
import SvgMenu from '../Icons/Menu';
import SvgNavi from '../Icons/Navi';
import SvgNoteEdit from '../Icons/NoteEdit';
import SvgNoteSearch from '../Icons/NoteSearch';
import SvgNotVerifed from '../Icons/NotVerifed';
import SvgPensil from '../Icons/Pensil';
import SvgRight from '../Icons/Right';
import SvgSearch from '../Icons/Search';
import SvgShare from '../Icons/Share';
import SvgShow from '../Icons/Show';
import SvgStatusApproved from '../Icons/StatusApproved';
import SvgStatusExpectation from '../Icons/StatusExpectation';
import SvgStatusWarning from '../Icons/StatusWarning';
import SvgStroke from '../Icons/Stroke';
import SvgUp from '../Icons/Up';
import SvgUser from '../Icons/User';
import SvgVerifed from '../Icons/Verifed';
import SvgView from '../Icons/View';
import SvgViewHide from '../Icons/ViewHide';
import SvgWarning from '../Icons/Warning';

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
    color: color || theme.defaultTextColor,
    className,
  };

  switch (name) {
    case IconEnum.bell:
      return <SvgBell {...props} />;

    case IconEnum.bellPush:
      return <SvgBellPush {...props} />;

    case IconEnum.closeSm:
      return <SvgCloseSm {...props} />;

    case IconEnum.closeMd:
      return <SvgCloseMd {...props} />;

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

    case IconEnum.google:
      return <SvgGoogle {...props} />;

    case IconEnum.fb:
      return <SvgFb {...props} />;

    case IconEnum.arrowLeft:
      return <SvgArrowLeft {...props} />;

    case IconEnum.arrowRight:
      return <SvgArrowRight {...props} />;

    case IconEnum.cart:
      return <SvgCart {...props} />;

    case IconEnum.copy:
      return <SvgCopy {...props} />;

    case IconEnum.verifed:
      return <SvgVerifed {...props} />;

    case IconEnum.user:
      return <SvgUser {...props} />;

    case IconEnum.noteEdit:
      return <SvgNoteEdit {...props} />;

    case IconEnum.noteSearch:
      return <SvgNoteSearch {...props} />;

    case IconEnum.navi:
      return <SvgNavi {...props} />;

    case IconEnum.chat:
      return <SvgChat {...props} />;

    case IconEnum.view:
      return <SvgView {...props} />;

    case IconEnum.viewHide:
      return <SvgViewHide {...props} />;

    case IconEnum.filter:
      return <SvgFilter {...props} />;

    case IconEnum.download:
      return <SvgDownload {...props} />;

    case IconEnum.share:
      return <SvgShare {...props} />;

    case IconEnum.attention:
      return <SvgAttention {...props} />;

    case IconEnum.attentionInfo:
      return <SvgAttentionInfo {...props} />;

    case IconEnum.attentionError:
      return <SvgAttentionError {...props} />;

    case IconEnum.attentionStop:
      return <SvgAttentionStop {...props} />;

    case IconEnum.attentionSuccess:
      return <SvgAttentionSuccess {...props} />;

    case IconEnum.attentionNotVerified:
      return <SvgAttentionNotVerified {...props} />;

    case IconEnum.attentionVerified:
      return <SvgAttentionVerified {...props} />;

    case IconEnum.stroke:
      return <SvgStroke {...props} />;

    case IconEnum.editPencilLine:
      return <SvgEditPencilLine {...props} />;

    case IconEnum.notVerifed:
      return <SvgNotVerifed {...props} />;

    case IconEnum.statusApproved:
      return <SvgStatusApproved {...props} />;

    case IconEnum.statusExpectation:
      return <SvgStatusExpectation {...props} />;

    case IconEnum.statusWarning:
      return <SvgStatusWarning {...props} />;

    case IconEnum.blackCamera:
      return <SvgBlackCamera {...props} />;

    case IconEnum.blackMail:
      return <SvgBlackMail {...props} />;

    case IconEnum.blackWarning:
      return <SvgBlackWarning {...props} />;

    case IconEnum.emojiBriefcase:
      return <SvgEmojiBriefcase {...props} />;

    case IconEnum.emojiDocument:
      return <SvgEmojiDocument {...props} />;

    case IconEnum.emojiFaq:
      return <SvgEmojiFaq {...props} />;

    case IconEnum.emojiShield:
      return <SvgEmojiShield {...props} />;

    case IconEnum.emojiStar:
      return <SvgEmojiStar {...props} />;

    case IconEnum.emojiStar2:
      return <SvgEmojiStar2 {...props} />;

    case IconEnum.emojiZzz:
      return <SvgEmojiZzz {...props} />;

    case IconEnum.warning:
      return <SvgWarning {...props} />;

    default:
      // eslint-disable-next-line react/jsx-no-useless-fragment
      return <></>;
  }
}
