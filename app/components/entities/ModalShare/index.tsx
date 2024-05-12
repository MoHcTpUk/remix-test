import { useEffect, useState } from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';

import { Box } from '~/components/common/Box';
import Button from '~/components/common/Button';
import { Modal } from '~/components/common/Modal';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';
import { VariantModalEnum } from '~/types/enums/variantModalEnum';

import { BoxContainer, BoxIcons, BoxInput, IconsContainer } from './styles';

export default function ModalShare({
  link,
  visibility,
  setVisibility,
}: {
  link: string;
  visibility: boolean;
  setVisibility: (visibility: boolean) => void;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
  };

  const { t } = useApp();

  useEffect(() => {
    if (!visibility) setCopied(false);
  }, [visibility]);

  return (
    <Modal visibility={visibility} setVisibility={setVisibility} variant={VariantModalEnum.share}>
      <BoxContainer>
        <Text variant={TextVariantEnum.textHeading3}>{t('common:share')}</Text>

        <BoxIcons>
          <IconsContainer>
            <FacebookShareButton url={link}>
              <FacebookIcon size={52} round />
            </FacebookShareButton>
            <TwitterShareButton url={link}>
              <TwitterIcon size={52} round />
            </TwitterShareButton>
            <LinkedinShareButton url={link}>
              <LinkedinIcon size={52} round />
            </LinkedinShareButton>
          </IconsContainer>
        </BoxIcons>

        <Box flexDirection='row' gap='12px'>
          <BoxInput>
            <Text className='link' variant={TextVariantEnum.textBody2}>
              {link}
            </Text>
          </BoxInput>
          <Button priority='primary' onClick={handleCopyLink}>
            <Text variant={TextVariantEnum.textBody2}>
              {copied ? t('common:copied') : t('common:copy')}
            </Text>
          </Button>
        </Box>
      </BoxContainer>
    </Modal>
  );
}
