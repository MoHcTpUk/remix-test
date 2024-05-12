import { Link, useLocation } from '@remix-run/react';
import { motion } from 'framer-motion';
import routes from 'shared/routing/routes';

import { Box } from '~/components/common/Box';
import Button from '~/components/common/Button';
import { BoxCard } from '~/components/common/Card';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { CardContainer } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import { EntityVariantEnum } from '~/types/enums/entityVariantEnum';
import { VariantCardEnum } from '~/types/enums/variantCardEnum';

import { HeaderWrapper } from './styles';

export default function SignInForRequest({ variant }: { variant: 'vacancy' | 'resume' }) {
  const { t } = useApp();

  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  urlParams.set('login', 'true');
  const newUrl = `${location.pathname}?${urlParams.toString()}`;

  return (
    <BoxCard variant={VariantCardEnum.request}>
      <CardContainer
        style={{ alignItems: 'center', justifyContent: 'center' }}
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
      >
        <Box flexDirection='column' gap='24px' maxWidth='400px'>
          <Box flexDirection='column' gap='8px' alignItems='center' textAlign='center'>
            <HeaderWrapper>
              <Text variant={TextVariantEnum.textHeading2}>{t('user:your_request')}</Text>
            </HeaderWrapper>
            <Text variant={TextVariantEnum.textBody1medium}>
              {variant === EntityVariantEnum.resume
                ? t('user:only_registered_users_can_apply_for_resumes')
                : t('user:only_registered_users_can_apply_for_vacancies')}
            </Text>
          </Box>

          <Box flexDirection='column' gap='16px'>
            <Link to={routes.auth.register.root} style={{ width: '100%' }}>
              <Button priority='secondary' fullwidth>
                <Text variant={TextVariantEnum.textBody2}>{t('auth:registration')}</Text>
              </Button>
            </Link>
            <Link to={newUrl} preventScrollReset style={{ width: '100%' }}>
              <Button priority='primary' fullwidth>
                <Text variant={TextVariantEnum.textBody2}>{t('common:signIn')}</Text>
              </Button>
            </Link>
          </Box>
        </Box>
      </CardContainer>
    </BoxCard>
  );
}
