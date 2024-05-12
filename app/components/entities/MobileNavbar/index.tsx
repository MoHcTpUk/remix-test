import { Form, Link, useLocation, useMatches } from '@remix-run/react';
import { Fragment, useEffect, useState } from 'react';
import routes from 'shared/routing/routes';

import { Box } from '~/components/common/Box';
import Button from '~/components/common/Button/';
import { Icon } from '~/components/common/Icon';
import { Modal } from '~/components/common/Modal';
import ProgressBar from '~/components/common/ProgressBar';
import { Switcher } from '~/components/common/Switcher';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';
import { IconEnum } from '~/types/enums/iconEnum';
import { LanguageEnum } from '~/types/enums/languageEnum';

import ButtonCreate from '../ButtonCreate';
import ModalSelectCreateForm from '../ModalSelectCreateForm';
import { BoxText } from '../Navbar/styles';
import type { NavbarLink } from '../NavLink';
import { NavbarItem } from '../NavLink';
import { BoxContainer, ButtonsGroup, Section, TranslateBox } from './styles';

export default function MobileNavbar({
  visibility,
  setVisibility,
  visibilityLogin,
  setVisibilityLogin,
}: {
  visibility: boolean;
  setVisibility: (visibility: boolean) => void;
  visibilityLogin: boolean;
  setVisibilityLogin: (visibility: boolean) => void;
}) {
  const matches = useMatches();
  const indexMatches = matches.some((m) => m.id === 'routes/index');
  const isUserMatches = matches.some((m) => m.id.includes('user'));
  const userMatches = matches.some((m) => m.id === 'routes/user/myprofile');
  const resumeMatches = matches.some((m) => m.id === 'routes/user/resume');
  const vacancyMatches = matches.some((m) => m.id === 'routes/user/vacancy');
  const companyMatches = matches.some((m) => m.id === 'routes/user/company');
  const responsesMatches = matches.some((m) => m.id === 'routes/user/responses');
  const searchVacancyMatches = matches.some((m) => m.id === 'routes/search/vacancy');
  const searchResumeMatches = matches.some((m) => m.id === 'routes/search/resume');
  const searchCompanyMatches = matches.some((m) => m.id === 'routes/search/company');

  const { userContext, setUserContext, theme, t, i18n } = useApp();
  function setLang(language: LanguageEnum) {
    setUserContext((prevContext) => ({ ...prevContext, language }));
  }

  const changeLanguage = () =>
    userContext?.language === LanguageEnum.TH
      ? setUserContext((prevContext) => ({ ...prevContext, language: LanguageEnum.EN }))
      : setUserContext((prevContext) => ({ ...prevContext, language: LanguageEnum.TH }));

  function setSearch(search: 'vacancy' | 'resume' | 'company') {
    setUserContext((prevContext) => ({ ...prevContext, search }));
  }

  const handleClickSearch = (search?: 'vacancy' | 'resume' | 'company') => {
    if (search) setSearch(search);
  };

  useEffect(() => {
    i18n.changeLanguage(userContext?.language);
  }, [i18n, userContext?.language]);

  const homeLinks: NavbarLink[] = [
    {
      id: 1,
      title: t('common:home_page'),
      href: routes.root,
      isActive: indexMatches,
    },
  ];

  const searchLinks: NavbarLink[] = [
    {
      id: 1,
      title: t('home:find_job'),
      href: routes.search.vacancy.root,
      isActive: searchVacancyMatches,
      search: 'vacancy',
    },
    {
      id: 2,
      title: t('home:find_employer'),
      href: routes.search.resume.root,
      isActive: searchResumeMatches,
      search: 'resume',
    },
    {
      id: 3,
      title: t('home:find_company'),
      href: routes.search.company.root,
      isActive: searchCompanyMatches,
      search: 'company',
    },
  ];

  const userLinks: NavbarLink[] = [
    {
      id: 1,
      title: t('user:my_profile'),
      href: routes.user.root,
      isActive: userMatches,
    },
    {
      id: 2,
      title: t('user:my_resumes'),
      href: routes.user.resume.root,
      isActive: resumeMatches,
    },
    {
      id: 3,
      title: t('user:my_vacancies'),
      href: routes.user.vacancy.root,
      isActive: vacancyMatches,
    },
    {
      id: 4,
      title: t('user:companies'),
      href: routes.user.company.root,
      isActive: companyMatches,
    },
    {
      id: 5,
      title: t('user:responses'),
      href: routes.user.responses.root,
      isActive: responsesMatches,
    },
  ];

  const [visibleSelectionCreate, setSelectionCreate] = useState(false);
  const [variantCreate, setVariantCreate] = useState<'vacancy' | 'resume'>('vacancy');
  const loc = useLocation();

  return (
    <Modal variant='navbar' visibility={visibility} setVisibility={setVisibility}>
      <BoxContainer>
        {userContext.user?.isAuthenticated && isUserMatches && (
          <Box flexDirection='column' gap='8px' style={{ margin: '8px 0 16px' }}>
            <Box flexDirection='row' gap='4px' alignItems='center'>
              <Icon
                name={userContext.user.isEmailConfirm ? IconEnum.verifed : IconEnum.notVerifed}
              />
              <Text variant={TextVariantEnum.textSmallmedium}>{userContext.user?.email}</Text>
            </Box>
            <Box flexDirection='column' gap='8px'>
              <Box flexDirection='row' justifyContent='space-between' alignItems='center'>
                <Text variant='textSmall'>{t('common:profile_completeness')}</Text>
                <Text variant='textSmall'>{`${userContext.user.progressInfo || ''}%`}</Text>
              </Box>
              <ProgressBar percent={userContext.user?.progressInfo} />
            </Box>
          </Box>
        )}
        <Section className='noDesktop'>
          <Text variant={TextVariantEnum.textBody2medium}>{t('common:home')}</Text>
          {homeLinks.map((item) => (
            <Fragment key={item.id}>
              <NavbarItem item={item} handleCloseBar={() => setVisibility(!visibility)} />
            </Fragment>
          ))}
        </Section>

        <Section className='noDesktop'>
          <Text variant={TextVariantEnum.textBody2medium}>{t('common:search')}</Text>

          {searchLinks.map((item) => (
            <Fragment key={item.id}>
              <NavbarItem
                handleClickSearch={handleClickSearch}
                item={item}
                handleCloseBar={() => setVisibility(!visibility)}
              />
            </Fragment>
          ))}
        </Section>

        {userContext.user?.isAuthenticated && (
          <Section>
            <Text variant={TextVariantEnum.textBody2medium}>{t('user:profile')}</Text>
            {userLinks.map((item) => (
              <Fragment key={item.id}>
                <NavbarItem item={item} handleCloseBar={() => setVisibility(!visibility)} />
              </Fragment>
            ))}
          </Section>
        )}

        <TranslateBox>
          <Switcher
            onChange={changeLanguage}
            checked={userContext?.language === LanguageEnum.EN}
            htmlLabel='lang'
            variant='lang'
          />
          <BoxText
            style={{ cursor: 'pointer' }}
            lang={LanguageEnum.EN}
            selectedLang={userContext?.language ?? ''}
            onClick={() => {
              if (userContext.language === 'th') setLang(LanguageEnum.EN);
              if (userContext.language === 'en') setLang(LanguageEnum.TH);
            }}
          >
            <Text color={theme.defaultTextColor} variant={TextVariantEnum.textBody2}>
              {userContext?.language === 'en' ? 'English' : 'ภาษาไทย'}
            </Text>
          </BoxText>
        </TranslateBox>

        <ButtonsGroup>
          <ButtonCreate
            variant='resume'
            fullwidth
            setVariantCreate={setVariantCreate}
            setSelectionCreate={setSelectionCreate}
          />
          <ButtonCreate
            variant='vacancy'
            fullwidth
            setVariantCreate={setVariantCreate}
            setSelectionCreate={setSelectionCreate}
          />
          <Link
            to={
              userContext.user.isAuthenticated
                ? routes.user.company.create
                : `${loc.pathname}${loc.search ? `${loc.search}&login=true` : '?login=true'}`
            }
          >
            <Button priority='secondary' size='S' fullwidth>
              <Text variant={TextVariantEnum.textBody2}> {t('user:create_company')}</Text>
            </Button>
          </Link>
        </ButtonsGroup>
        {!userContext.user?.isAuthenticated ? (
          <Button
            onClick={() => {
              setVisibility(!visibility);
              setVisibilityLogin(!visibilityLogin);
            }}
            priority='primary'
            fullwidth
          >
            <Text>{t('common:log_in')}</Text>
          </Button>
        ) : (
          <Form method='POST' action='/auth/logout'>
            <Button
              onClick={() => {
                setVisibility(!visibility);
                setVisibilityLogin(!visibilityLogin);
              }}
              priority='tertiary'
              fullwidth
              type='submit'
            >
              <Text>{t('common:log_out')}</Text>
            </Button>
          </Form>
        )}
      </BoxContainer>
      <ModalSelectCreateForm
        variant={variantCreate}
        visibility={visibleSelectionCreate}
        setVisibility={setSelectionCreate}
      />
    </Modal>
  );
}
