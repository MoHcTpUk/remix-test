import { Link, useLocation } from '@remix-run/react';
import { memo } from 'react';
import type { ResponseType } from 'shared/v2/responses';
import type { Resume } from 'shared/v2/resumes';

import { Box } from '~/components/common/Box';
import { BoxCard } from '~/components/common/Card';
import ResponseTypeHeading from '~/components/common/ResponseTypeStatus';
import { BoxControlContainer } from '~/components/entities/BoxControl';
import {
  ResumePartCardHeading,
  ResumePartCardInfo,
} from '~/components/entities/cardComponents/partCard';
import { MediaBox } from '~/components/ui/Card';
import { useApp, useScreenWidth } from '~/hooks';
import { EntityVariantEnum } from '~/types/enums/entityVariantEnum';
import { PageVariantEnum } from '~/types/enums/pageVariantEnum';
import type { ResponseState } from '~/types/enums/responseState';
import { SizeCardVariantEnum } from '~/types/enums/sizeCardVariantEnum';
import { VariantCardEnum } from '~/types/enums/variantCardEnum';
import { updateSearchString } from '~/utils/helpers.client';

export const ResumePartCardWidget = memo(
  ({
    resume,
    state,
    type,
    selectedResume,
    variant,
    responseId,
    responseAction,
    handleRequest,
  }: {
    resume?: Resume;
    selectedResume?: string;
    variant?: PageVariantEnum;
    type?: ResponseType;
    state?: ResponseState | string;
    responseId?: string;
    responseAction?: boolean;
    handleRequest?: () => void;
  }): JSX.Element => {
    const { theme } = useApp();
    const location = useLocation();
    const widthScreen = useScreenWidth();

    const boxHeading = (resume?: Resume) => (
      <Box flexDirection='column' width='100%'>
        {variant === 'response' && <ResponseTypeHeading state={state} type={type} />}
        <ResumePartCardHeading resume={resume} variant={variant} />
        <ResumePartCardInfo resume={resume} variant={variant} />
      </Box>
    );

    return (
      <Box
        width='100%'
        style={{
          cursor: 'pointer',
          position: 'relative',
          borderRadius: '12px',
          transition: 'all 0.2s cubic-bezier(0.2, 0, 0, 1)',
          border:
            widthScreen >= 1280 && resume?.id === selectedResume
              ? `2px solid ${theme.modal.borderCardsColor}`
              : '',
        }}
      >
        <BoxCard key={resume?.id} variant={VariantCardEnum.userCard}>
          <MediaBox variant='mobile'>
            <Link
              to={responseId || resume?.id || '#'}
              style={{
                paddingTop: variant === PageVariantEnum.response ? '62px' : '',
              }}
            >
              {boxHeading(resume)}
            </Link>
          </MediaBox>
          <MediaBox variant='desktop'>
            <Link
              to={
                variant === 'search'
                  ? `/search/resume${updateSearchString(location.search, resume?.id)}`
                  : `${resume?.id || ''}?responseId=${responseId || ''}`
              }
              preventScrollReset
              style={{
                paddingTop: variant === PageVariantEnum.response ? '62px' : '',
              }}
            >
              {boxHeading(resume)}
            </Link>
          </MediaBox>
          <BoxControlContainer
            id={resume?.id}
            responseId={responseId}
            variant={variant}
            stateResponse={state}
            typeResponse={type}
            typeEntity={EntityVariantEnum.resume}
            typeCard={SizeCardVariantEnum.part}
            style={{ marginTop: variant === PageVariantEnum.response ? '-16px' : '' }}
            responseAction={responseAction}
            handleRequest={handleRequest}
          />
        </BoxCard>
      </Box>
    );
  },
);
