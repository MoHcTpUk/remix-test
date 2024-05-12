import { useNavigate } from '@remix-run/react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { memo } from 'react';

import { Button } from '~/components/common/Button/styles';
import { Icon } from '~/components/common/Icon';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';
import { IconEnum } from '~/types/enums/iconEnum';
import type {
  CompanyCardEnum,
  ResumeCardEnum,
  StateCard,
  VacancyCardEnum,
} from '~/types/enums/stateCardEnum';
import type { VariantCardEnum } from '~/types/enums/variantCardEnum';

import { BoxCardContent, BoxCardHeading, BoxControl, Card } from './styles';

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
    step,
    maxStep,
    variant,
  }: {
    title?: string;
    state?: StateCard;
    setState?: Dispatch<SetStateAction<StateCard>>;
    editCard?: ResumeCardEnum | VacancyCardEnum | CompanyCardEnum;
    setEditCard?: Dispatch<SetStateAction<ResumeCardEnum | VacancyCardEnum | CompanyCardEnum>>;
    nameCard?: ResumeCardEnum | VacancyCardEnum | CompanyCardEnum;
    withEditButton?: boolean;
    withControl?: boolean;
    children: ReactNode;
    step?: number;
    maxStep?: number;
    variant?: VariantCardEnum;
  }): JSX.Element => {
    const { theme, t } = useApp();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
      <Card title={title} variant={variant}>
        {title && (
          <BoxCardHeading>
            {title && <Text>{title}</Text>}
            {((withEditButton && state === 'info') ||
              (withEditButton && state !== 'create' && editCard !== nameCard)) && (
              <Button
                priority='secondary'
                onClick={() => {
                  if (setState) setState('edit');
                  if (setEditCard && nameCard) setEditCard(nameCard);
                }}
              >
                <Text variant={TextVariantEnum.textBody2}> {t('common:edit')}</Text>
              </Button>
            )}
          </BoxCardHeading>
        )}
        <BoxCardContent className={title && 'borderLine'} variant={variant}>
          {children}
        </BoxCardContent>

        {((withControl && state === 'edit') || (editCard && editCard === nameCard)) && (
          <BoxControl>
            <Button
              onClick={() => {
                if (setState) setState('info');
                if (setEditCard) setEditCard('all');
              }}
              fullwidth
              priority='secondary'
              className='icon'
            >
              <Icon name={IconEnum.arrowLeft} color={theme.user.iconColor} className='goBackIcon' />
              <Text variant={TextVariantEnum.textBody2} className='goBackText'>
                {' '}
                {t('common:cancel')}
              </Text>
            </Button>
            <Button priority='primary' fullwidth>
              <Text variant={TextVariantEnum.textBody2}> {t('common:save')}</Text>
            </Button>
          </BoxControl>
        )}

        {state === 'create' && (
          <BoxControl>
            {step && step === 1 && (
              <Button type='button' onClick={goBack} className='icon' priority='secondary'>
                <Icon
                  name={IconEnum.arrowLeft}
                  color={theme.user.iconColor}
                  className='goBackIcon'
                />
                <Text variant={TextVariantEnum.textBody2} className='goBackText'>
                  {' '}
                  {t('common:cancel')}
                </Text>
              </Button>
            )}

            {step && step > 1 && (
              <Button
                onClick={() => {
                  if (setState) setState('info');
                  if (setEditCard) setEditCard('all');
                }}
                className='icon'
                priority='secondary'
                name='action'
                value='previous'
              >
                <Icon
                  name={IconEnum.arrowLeft}
                  color={theme.user.iconColor}
                  className='goBackIcon'
                />
                <Text variant={TextVariantEnum.textBody2} className='goBackText'>
                  {' '}
                  {t('common:back')}
                </Text>
              </Button>
            )}

            {step && maxStep && step < maxStep && (
              <Button type='submit' priority='primary' fullwidth name='action' value='next'>
                <Text variant={TextVariantEnum.textBody2}> {t('common:next')}</Text>
              </Button>
            )}

            {step && maxStep && step === maxStep && (
              <Button type='submit' priority='primary' fullwidth name='action' value='complete'>
                <Text variant={TextVariantEnum.textBody2}> {t('common:complete')}</Text>
              </Button>
            )}
          </BoxControl>
        )}
      </Card>
    );
  },
);
