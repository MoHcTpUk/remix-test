import { Link, useLocation } from '@remix-run/react';
import routes from 'shared/routing/routes';

import Button from '~/components/common/Button';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';

export default function ButtonCreate({
  variant,
  priority = 'secondary',
  setSelectionCreate,
  setVariantCreate,
  fullwidth = false,
}: {
  variant: 'resume' | 'vacancy';
  priority?: 'primary' | 'secondary';
  setSelectionCreate?: (value: boolean) => void;
  setVariantCreate?: (value: 'resume' | 'vacancy') => void;
  fullwidth?: boolean;
}) {
  const { t, userContext } = useApp();
  const loc = useLocation();

  return (
    <>
      {variant === 'resume' &&
        (userContext.user.isAuthenticated ? (
          <>
            {userContext.forms?.resume && (
              <Button
                priority={priority}
                size='S'
                fullwidth={fullwidth}
                onClick={() => {
                  setVariantCreate?.('resume');
                  setSelectionCreate?.(true);
                }}
              >
                <Text variant={TextVariantEnum.textBody2}> {t('user:create_resume')}</Text>
              </Button>
            )}

            {!userContext.forms?.resume && (
              <Link to={routes.user.resume.create}>
                <Button priority={priority} size='S' fullwidth={fullwidth}>
                  <Text variant={TextVariantEnum.textBody2}>{t('user:create_resume')}</Text>
                </Button>
              </Link>
            )}
          </>
        ) : (
          <Link to={`${loc.pathname}${loc.search ? `${loc.search}&login=true` : '?login=true'}`}>
            <Button priority={priority} size='S' fullwidth={fullwidth}>
              <Text variant={TextVariantEnum.textBody2}> {t('user:create_resume')}</Text>
            </Button>
          </Link>
        ))}

      {variant === 'vacancy' &&
        (userContext.user.isAuthenticated ? (
          <>
            {userContext.forms?.vacancy && (
              <Button
                priority={priority}
                size='S'
                fullwidth={fullwidth}
                onClick={() => {
                  setVariantCreate?.('vacancy');
                  setSelectionCreate?.(true);
                }}
              >
                <Text variant={TextVariantEnum.textBody2}> {t('user:create_vacancy')}</Text>
              </Button>
            )}

            {!userContext.forms?.vacancy && (
              <Link to={routes.user.vacancy.create}>
                <Button priority={priority} size='S' fullwidth={fullwidth}>
                  <Text variant={TextVariantEnum.textBody2}>{t('user:create_vacancy')}</Text>
                </Button>
              </Link>
            )}
          </>
        ) : (
          <Link to={`${loc.pathname}${loc.search ? `${loc.search}&login=true` : '?login=true'}`}>
            <Button priority={priority} size='S' fullwidth={fullwidth}>
              <Text variant={TextVariantEnum.textBody2}> {t('user:create_vacancy')}</Text>
            </Button>
          </Link>
        ))}
    </>
  );
}
