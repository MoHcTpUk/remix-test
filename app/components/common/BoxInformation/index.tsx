import type { ReactI18NextChild } from 'react-i18next';
import type { CSSProperties } from 'styled-components';

import { useApp } from '~/hooks';
import type { BoxInformationEnum } from '~/types/enums/boxInformationEnum';

import { Box } from '../Box';
import { Icon } from '../Icon';
import SvgClose from '../Icons/Close';
import { ModalCloseButton } from '../Modal/styles';
import { Text } from '../Text';
import { TextVariantEnum } from '../Text/enums';
import { ButtonWrapper, ContentWrapper, MessageWrapper, Wrapper } from './styles';

export interface BoxInformationProps {
  variant: BoxInformationEnum;
  title?: string;
  button?: (() => JSX.Element) | null;
  information?: string | ReactI18NextChild | Iterable<ReactI18NextChild>;
  flexDirection?: CSSProperties['flexDirection'];
  type?: string;
  noShadow?: boolean;
  onClose?: () => void;
}

function BoxInformation({
  variant,
  button,
  title,
  information,
  flexDirection = 'row',
  type,
  noShadow,
  onClose,
}: BoxInformationProps) {
  const { theme } = useApp();

  return (
    <Wrapper variant={variant} type={type} noShadow={noShadow}>
      <ContentWrapper>
        <Box>
          <Icon name={variant} />
        </Box>
        <MessageWrapper flexDirection={flexDirection}>
          <Box flexDirection='column' gap='8px'>
            <Text variant={TextVariantEnum.textBody2medium}>{title}</Text>
            {information && <Text variant={TextVariantEnum.textBody2}>{information}</Text>}
          </Box>
          {button && <ButtonWrapper>{button()}</ButtonWrapper>}
        </MessageWrapper>
      </ContentWrapper>
      {onClose && (
        <ModalCloseButton style={{ position: 'absolute', top: '10px' }} onClick={onClose}>
          <SvgClose color={theme.modal.svgColor} />
        </ModalCloseButton>
      )}
    </Wrapper>
  );
}

export default BoxInformation;
