import { memo } from 'react';
import type { Resume } from 'shared/v2/resumes';

import { Box } from '~/components/common/Box';
import { BoxCard } from '~/components/common/Card';
import {
  ResumePartCardHeading,
  ResumePartCardInfo,
} from '~/components/entities/cardComponents/partCard';
import { useApp } from '~/hooks';
import { PageVariantEnum } from '~/types/enums/pageVariantEnum';
import { VariantCardEnum } from '~/types/enums/variantCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';

export const ResumeRequest = memo(
  ({
    resume,
    dictionaries,
  }: {
    resume?: Resume | null;
    dictionaries?: IDictionaries;
  }): JSX.Element => {
    const { theme, t, userContext } = useApp();

    // const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    //   e.preventDefault();
    // }

    return (
      <BoxCard variant={VariantCardEnum.userCard}>
        <Box flexDirection='column' width='100%'>
          {resume && (
            <>
              <ResumePartCardHeading resume={resume} />
              <Box borderTop={`1px solid ${theme.user.borderColor}`}>
                <ResumePartCardInfo resume={resume} variant={PageVariantEnum.response} />
              </Box>
            </>
          )}
        </Box>
      </BoxCard>
    );
  },
);
