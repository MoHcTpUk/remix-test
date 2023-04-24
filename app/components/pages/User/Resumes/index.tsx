import { useFetcher } from '@remix-run/react';
import type { StateCard } from 'public/enums/stateCardEnum';
import { memo, useState } from 'react';
import type {
  EntityGetResumesResponse,
  EntityGetUserInfoResponse,
} from 'shared/client/data-contracts';
import Routes from 'shared/routing/routes';

import { useApp } from '~/hooks';

import { Heading } from '../components/Heading';
import { WrapperContainer } from '../components/Wrapper';

export const ResumesComponent = memo(
  ({ resumes }: { resumes?: EntityGetResumesResponse | null }): JSX.Element => {
    const { t } = useApp();

    return (
      <WrapperContainer>
        <Heading title={t('user:my_resumes')} />
      </WrapperContainer>
    );
  },
);
