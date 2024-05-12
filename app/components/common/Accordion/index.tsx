import { AnimatePresence, motion } from 'framer-motion';
import { type ReactNode, useState } from 'react';

import { Text } from '~/components/common/Text';
import { IconEnum } from '~/types/enums/iconEnum';

import { Box } from '../Box';
import Button from '../Button';
import { Icon } from '../Icon';
import { TextVariantEnum } from '../Text/enums';
import { Container, Description, Emoji, Title, TitleContainer } from './styles';

export type AccordionProps = {
  children: ReactNode;
  title: string | undefined;
};

export function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <TitleContainer open={open}>
        <Title>
          <Emoji>
            <Icon name={IconEnum.emojiFaq} />
          </Emoji>
          <Text variant={TextVariantEnum.textHeading3}>{title}</Text>
        </Title>
        <Button priority='secondary' onlyIcon onClick={() => setOpen(!open)}>
          <Icon name={IconEnum.arrowLeft} />
        </Button>
      </TitleContainer>
      <AnimatePresence initial={false}>
        {open && (
          <Box
            width='100%'
            as={motion.div}
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
            style={{ overflow: 'hidden' }}
          >
            <Description>{children}</Description>
          </Box>
        )}
      </AnimatePresence>
    </Container>
  );
}
