import { memo } from 'react';
import { Box } from '~/components/common/Box';
import { Text } from '~/components/common/Text';

type Props = {};

export const Footer = memo(function FooterMemoized({}: Props): JSX.Element {
  return (
    <Box width='100%' padding='24px'>
      <Text>Footer</Text>
    </Box>
  );
});
