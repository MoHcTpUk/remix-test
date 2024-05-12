import { useMatches } from '@remix-run/react';
import { Fragment, memo } from 'react';
import routes from 'shared/routing/routes';

import { BoxCard } from '~/components/common/Card';
import { useApp } from '~/hooks';
import { IconEnum } from '~/types/enums/iconEnum';
import { VariantCardEnum } from '~/types/enums/variantCardEnum';

import type { NavbarLink } from '../NavLink';
import { NavbarItem } from '../NavLink';
import { Wrapper } from './styles';

export const Sidebar = memo((): JSX.Element => {
  const { t } = useApp();

  const matches = useMatches();
  const userMatches = matches.some((m) => m.id.includes('routes/user/myprofile'));
  const resumeMatches = matches.some((m) => m.id.includes('routes/user/resume'));
  const vacancyMatches = matches.some((m) => m.id.includes('routes/user/vacancy'));
  const companyMatches = matches.some((m) => m.id.includes('routes/user/company'));
  const responsesMatches = matches.some((m) => m.id === 'routes/user/responses');

  const userLinks: NavbarLink[] = [
    {
      id: 1,
      title: t('user:my_profile'),
      href: routes.user.root,
      isActive: userMatches,
      icon: IconEnum.user,
    },
    {
      id: 2,
      title: t('user:my_resumes'),
      href: routes.user.resume.root,
      isActive: resumeMatches,
      icon: IconEnum.noteEdit,
    },
    {
      id: 3,
      title: t('user:my_vacancies'),
      href: routes.user.vacancy.root,
      isActive: vacancyMatches,
      icon: IconEnum.noteSearch,
    },
    {
      id: 4,
      title: t('user:companies'),
      href: routes.user.company.root,
      isActive: companyMatches,
      icon: IconEnum.navi,
    },
    {
      id: 5,
      title: t('user:responses'),
      href: routes.user.responses.root,
      isActive: responsesMatches,
      icon: IconEnum.chat,
    },
  ];
  return (
    <Wrapper>
      <BoxCard variant={VariantCardEnum.sidebar}>
        {userLinks.map((item) => (
          <Fragment key={item.id}>
            <NavbarItem item={item} />
          </Fragment>
        ))}
      </BoxCard>
    </Wrapper>
  );
});
