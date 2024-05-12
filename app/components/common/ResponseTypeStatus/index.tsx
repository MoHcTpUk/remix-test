import type { ResponseType } from 'shared/v2/responses';

import { useApp } from '~/hooks';
import { IconEnum } from '~/types/enums/iconEnum';
import { ResponseState } from '~/types/enums/responseState';

import { Icon } from '../Icon';
import { Text } from '../Text';
import { TextVariantEnum } from '../Text/enums';
import { ContainerInfo, Wrapper } from './styles';

export interface BoxInformationProps {
  type?: ResponseType;
  state?: ResponseState | string;
  position?: string;
  onlyContainer?: boolean;
  totalRequest?: number;
  totalInvations?: number;
  newInvations?: number;
  approvedRequest?: number;
}

function ResponseTypeStatus({
  type,
  state,
  position,
  onlyContainer,
  totalRequest,
  totalInvations,
  newInvations,
  approvedRequest,
}: BoxInformationProps) {
  const { t, theme } = useApp();

  return (
    <Wrapper type={type} state={state} position={position} onlyContainer={onlyContainer}>
      <ContainerInfo type={type} state={state}>
        {type === 'INVITATION' && (
          <>
            {state === ResponseState.APPROVED_AND_VIEWED || state === ResponseState.APPROVED ? (
              <Icon name={IconEnum.statusApproved} />
            ) : (
              <Icon name={IconEnum.statusWarning} />
            )}
            {state === ResponseState.VIEWED && (
              <Text
                variant={TextVariantEnum.textBody2medium}
                color={theme.boxInformation.info.borderColor}
              >
                {t('user:invitation_viewed')}
              </Text>
            )}
            {state === ResponseState.NEW && (
              <>
                <Text
                  variant={TextVariantEnum.textBody2medium}
                  color={theme.boxInformation.info.borderColor}
                >
                  {t('user:Invitation')}
                </Text>
                {totalInvations && (
                  <Text
                    variant={TextVariantEnum.textBody2medium}
                    color={theme.boxInformation.info.borderColor}
                  >
                    {totalInvations}
                  </Text>
                )}
                {newInvations && (
                  <Text
                    variant={TextVariantEnum.textBody2medium}
                    color={theme.boxInformation.info.borderColor}
                  >
                    {`(+${newInvations} ${t('user:new')})`}
                  </Text>
                )}
              </>
            )}
            {state === ResponseState.CONTACT_SENT && (
              <Text
                variant={TextVariantEnum.textBody2medium}
                color={theme.boxInformation.info.borderColor}
              >
                {t('user:contacts_sent')}
              </Text>
            )}
            {(state === ResponseState.APPROVED || state === ResponseState.APPROVED_AND_VIEWED) && (
              <Text
                variant={TextVariantEnum.textBody2medium}
                color={theme.boxInformation.success.borderColor}
              >
                {t('user:approved')}
              </Text>
            )}
          </>
        )}
        {type === 'REQUEST' && state === ResponseState.APPROVED && (
          <>
            <Icon name={IconEnum.statusApproved} />
            <Text
              variant={TextVariantEnum.textBody2medium}
              color={theme.boxInformation.success.borderColor}
            >
              {t('user:contacts_sent')}
            </Text>
            <Text
              variant={TextVariantEnum.textBody2medium}
              color={theme.boxInformation.success.borderColor}
            >
              {approvedRequest}
            </Text>
            {approvedRequest && (
              <Text
                variant={TextVariantEnum.textBody2medium}
                color={theme.boxInformation.warning.borderColor}
              >
                {approvedRequest}
              </Text>
            )}
          </>
        )}

        {type === 'REQUEST' && state === ResponseState.NEW && (
          <>
            <Icon name={IconEnum.statusExpectation} />
            <Text
              variant={TextVariantEnum.textBody2medium}
              color={theme.boxInformation.warning.borderColor}
            >
              {t('user:request')}
            </Text>
            {totalRequest && (
              <Text
                variant={TextVariantEnum.textBody2medium}
                color={theme.boxInformation.warning.borderColor}
              >
                {totalRequest}
              </Text>
            )}
          </>
        )}
        {type === 'REQUEST' && state === ResponseState.VIEWED && (
          <>
            <Icon name={IconEnum.statusExpectation} />
            <Text
              variant={TextVariantEnum.textBody2medium}
              color={theme.boxInformation.warning.borderColor}
            >
              {t('user:request_viewed')}
            </Text>
          </>
        )}
        {type === 'REQUEST' && state === ResponseState.CONTACT_SENT && (
          <>
            <Icon name={IconEnum.statusExpectation} />
            <Text
              variant={TextVariantEnum.textBody2medium}
              color={theme.boxInformation.warning.borderColor}
            >
              {t('user:request')}
            </Text>
          </>
        )}
      </ContainerInfo>
    </Wrapper>
  );
}

export default ResponseTypeStatus;
