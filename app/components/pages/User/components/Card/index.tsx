import { IconEnum } from 'public/enums/iconEnum';
import type { NameCardEnum, StateCard } from 'public/enums/stateCardEnum';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { memo } from 'react';

import { Button } from '~/components/common/Button/styles';
import { Icon } from '~/components/common/Icon';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';

import { BoxCardHeading, BoxCotrol, Card } from './styles';

export const BoxCard = memo(
  ({
    title,
    state,
    setState,
    editCard,
    setEditCard,
    nameCard,
    withEditButton,
    withControl,
    children,
  }: {
    title?: string;
    state?: StateCard;
    setState?: Dispatch<SetStateAction<StateCard>>;
    editCard?: NameCardEnum;
    setEditCard?: Dispatch<SetStateAction<NameCardEnum>>;
    nameCard?: NameCardEnum;
    withEditButton?: boolean;
    withControl?: boolean;
    children: ReactNode;
  }): JSX.Element => {
    const { theme, t } = useApp();

    return (
      <Card title={title}>
        {title && (
          <BoxCardHeading>
            {title && <Text variant={TextVariantEnum.textHeading2}>{title}</Text>}
            {((withEditButton && state === 'info') || editCard === 'all') && (
              <Button
                priority='small'
                onClick={() => {
                  if (setState) setState('edit');
                  if (setEditCard && nameCard) setEditCard(nameCard);
                }}
              >
                <Text> {t('common:edit')}</Text>
              </Button>
            )}
          </BoxCardHeading>
        )}

        {children}

        {((withControl && state === 'edit') || (editCard && editCard === nameCard)) && (
          <BoxCotrol>
            <Button
              onClick={() => {
                if (setState) setState('info');
                if (setEditCard) setEditCard('all');
              }}
              className='icon'
              priority='small'
            >
              <Icon name={IconEnum.arrowLeft} color={theme.user.iconColor} />
            </Button>
            <Button priority='primary' fullwidth>
              <Text> {t('common:edit')}</Text>
            </Button>
          </BoxCotrol>
        )}
      </Card>
    );
  },
);
