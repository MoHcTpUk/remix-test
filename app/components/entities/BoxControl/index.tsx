import { Form, Link, useLocation, useMatches } from '@remix-run/react';
import { useEffect, useState } from 'react';
import type { Company } from 'shared/v2/companies';
import type { ResponseType } from 'shared/v2/responses';
import type { CSSProperties } from 'styled-components';

import Button from '~/components/common/Button';
import { Icon } from '~/components/common/Icon';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { BoxButtons, BoxControl } from '~/components/ui/Card';
import { useApp, useScreenWidth } from '~/hooks';
import type { EntityVariantEnum } from '~/types/enums/entityVariantEnum';
import { IconEnum } from '~/types/enums/iconEnum';
import type { PageVariantEnum } from '~/types/enums/pageVariantEnum';
import { ResponseState } from '~/types/enums/responseState';
import type { SizeCardVariantEnum } from '~/types/enums/sizeCardVariantEnum';
import { CLIENT_BASE_URL } from '~/utils/constants';

import ModalConfirmDelete from '../ModalConfirmDelete';
import ModalProvidingContacts from '../ModalProvidingContacts';
import ModalShare from '../ModalShare';

export function BoxControlContainer({
  id,
  variant,
  stateResponse,
  typeResponse,
  // isRequest,
  typeCard,
  typeEntity,
  handleRequest,
  style,
  responseId,
  responseAction,
  company,
}: {
  id?: string;
  variant?: PageVariantEnum;
  stateResponse?: ResponseState | string;
  typeResponse?: ResponseType;
  // isRequest?: boolean;
  typeCard?: SizeCardVariantEnum;
  typeEntity?: EntityVariantEnum;
  style?: CSSProperties;
  handleRequest?: () => void;
  responseId?: string;
  responseAction?: boolean;
  company?: Company;
}): JSX.Element {
  const { theme, t, userContext } = useApp();
  const widthScreen = useScreenWidth();
  const location = useLocation();

  const [visibleShare, setVisibleShare] = useState(false);
  const [visibleProvidingContactsModal, setVisibleProvidingContactsModal] = useState(false);

  const [linkShare, setLinkShare] = useState('');
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [deleteSelectedId] = useState('');

  const matches = useMatches();
  const searchVacancyMatches = matches.some((m) => m.id === 'routes/search/vacancy');
  const searchResumeMatches = matches.some((m) => m.id === 'routes/search/resume');
  const searchCompanyMatches = matches.some((m) => m.id === 'routes/search/company');

  const handleClickShare = (id?: string) => {
    setLinkShare(id || '');
    setVisibleShare(true);
  };

  const handleProvidingContacts = () => {
    setVisibleProvidingContactsModal(true);
  };

  useEffect(() => {
    if (responseAction === true || responseAction === false) {
      setVisibleProvidingContactsModal(false);
    }
  }, [responseAction]);

  return (
    <BoxControl style={style} sizeVariant={typeCard}>
      <Form
        className={
          widthScreen < 768 ||
          (widthScreen >= 1280 &&
            !userContext?.user?.isAuthenticated &&
            (searchVacancyMatches || searchResumeMatches || searchCompanyMatches) &&
            typeCard === 'full')
            ? 'notAuthenticated'
            : ''
        }
      >
        {variant === 'response' && (
          <BoxButtons>
            {/* {variant !== 'response' && (
            <Button
              className='icon'
              priority='secondary'
              onlyIcon
              onClick={() => handleClickDelete(id)}
            >
              <Icon name={IconEnum.cart} color={theme.user.iconColor} />
            </Button>
          )}

          {variant === 'response' && (
            <Box
              className='icon'
              justifyContent='center'
              alignItems='center'
              padding='10px'
              style={{ cursor: 'pointer' }}
              onClick={() => handleClickDelete(id)}
            >
              <Icon name={IconEnum.cart} color={theme.blackIconColor} />
            </Box>
          )} */}

            <Button
              type='button'
              className='icon'
              priority='secondary'
              onlyIcon
              onClick={() => handleClickShare && handleClickShare(id)}
            >
              <Icon name={IconEnum.share} color={theme.user.iconColor} />
            </Button>
            {/* <Button className='icon' priority='secondary' onlyIcon>
            <Icon name={IconEnum.download} color={theme.user.iconColor} />
          </Button> */}
            <Link key={id} to={`/search/${typeEntity || ''}/${id || ''}`} target='_blank'>
              <Button className='icon' priority='secondary' onlyIcon>
                <Icon name={IconEnum.view} color={theme.user.iconColor} />
              </Button>
            </Link>
            {typeResponse &&
              typeResponse !== 'REQUEST' &&
              (widthScreen < 1280 ? (
                <Button
                  priority='primary'
                  disabled={
                    stateResponse === ResponseState.CONTACT_SENT ||
                    stateResponse === ResponseState.APPROVED_AND_VIEWED ||
                    stateResponse === ResponseState.APPROVED
                  }
                  onClick={handleProvidingContacts}
                >
                  <Text variant={TextVariantEnum.textBody2}>{t('user:send_contacts')}</Text>
                </Button>
              ) : (
                <Button
                  onClick={handleProvidingContacts}
                  priority='primary'
                  disabled={
                    stateResponse === ResponseState.CONTACT_SENT ||
                    stateResponse === ResponseState.APPROVED_AND_VIEWED ||
                    stateResponse === ResponseState.APPROVED
                  }
                >
                  <Text variant={TextVariantEnum.textBody2}>{t('user:send_contacts')}</Text>
                </Button>
              ))}
            <ModalProvidingContacts
              visibility={visibleProvidingContactsModal}
              setVisibility={setVisibleProvidingContactsModal}
              responseId={responseId}
            />
          </BoxButtons>
        )}
        {variant === 'search' && (
          <BoxButtons>
            {/* <Button className='icon' priority='secondary' onlyIcon>
                        <Icon name={IconEnum.download} color={theme.user.iconColor} />
                      </Button> */}
            <Button
              className='icon'
              priority='secondary'
              onlyIcon
              onClick={() => handleClickShare(id || '')}
            >
              <Icon name={IconEnum.share} color={theme.user.iconColor} />
            </Button>
            {typeCard === 'full' &&
              typeEntity !== 'company' &&
              userContext?.user?.isAuthenticated &&
              (widthScreen < 1280 ? (
                <Link
                  // key={`request-${(typeEntity === EntityVariantEnum.resume && EntityVariantEnum.vacancy) ||
                  //   (typeEntity === EntityVariantEnum.vacancy && EntityVariantEnum.resume) ||
                  //   'company'
                  //   }/${id || ''}`}
                  to={`/search/${typeEntity || ''}/${id || ''}/request`}
                >
                  <Button priority='primary' disabled={stateResponse === 'CONTACT_SENT'}>
                    <Text variant={TextVariantEnum.textBody2}>{t('user:send_request')}</Text>
                  </Button>
                </Link>
              ) : (
                <Button
                  onClick={handleRequest}
                  priority='primary'
                  disabled={stateResponse === 'CONTACT_SENT'}
                >
                  <Text variant={TextVariantEnum.textBody2}>{t('user:send_request')}</Text>
                </Button>
              ))}

            {typeCard === 'full' &&
              typeEntity === 'company' &&
              userContext?.user?.isAuthenticated && (
                <Link to={`/search/${typeEntity || ''}/${id || ''}/vacancy`} target='_blank'>
                  <Button priority='primary'>
                    <Text variant={TextVariantEnum.textBody2}>{t('user:show_all_vacancies')}</Text>
                  </Button>
                </Link>
              )}

            {typeCard === 'part' && typeEntity !== 'company' && (
              <>
                <Link key={id} to={`/search/${typeEntity || ''}/${id || ''}`} target='_blank'>
                  <Button className='icon' priority='secondary' onlyIcon>
                    <Icon name={IconEnum.view} color={theme.user.iconColor} />
                  </Button>
                </Link>
                {/* {userContext?.user?.isAuthenticated && (
                  (widthScreen < 1280 ? (
                    <Link to={`/search/${typeEntity || ''}/${id || ''}/request`}>
                      <Button priority='primary' disabled={stateResponse === 'CONTACT_SENT'}>
                        <Text variant={TextVariantEnum.textBody2}>{t('user:send_request')}</Text>
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      onClick={handleRequest}
                      priority='primary'
                      disabled={stateResponse === 'CONTACT_SENT'}
                    >
                      <Text variant={TextVariantEnum.textBody2}>{t('user:send_request')}</Text>
                    </Button>
                  ))
                )} */}
              </>
            )}

            {typeCard === 'part' && typeEntity === 'company' && (
              <>
                <Link to={id || '#'} target='_blank'>
                  <Button className='icon' priority='secondary' onlyIcon>
                    <Icon name={IconEnum.view} color={theme.user.iconColor} />
                  </Button>
                </Link>
                {company?.number_of_vacancies !== 0 && (
                  <Link to={`${company?.id || ''}/vacancy`} target='_blank'>
                    <Button priority='primary'>
                      <Text variant={TextVariantEnum.textBody2}>{t('user:show_vacancies')}</Text>
                    </Button>
                  </Link>
                )}
              </>
            )}
          </BoxButtons>
        )}
      </Form>
      <ModalShare
        link={`${CLIENT_BASE_URL}${location.pathname}/${linkShare}`}
        visibility={visibleShare}
        setVisibility={setVisibleShare}
      />
      <ModalConfirmDelete
        id={deleteSelectedId}
        visibility={visibleDelete}
        setVisibility={setVisibleDelete}
      />
    </BoxControl>
  );
}
