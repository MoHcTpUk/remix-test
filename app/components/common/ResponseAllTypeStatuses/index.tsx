import type { Statistics } from 'shared/v2/responses';
import { ResponseType } from 'shared/v2/responses';

import ResponseTypeHeading from '~/components/common/ResponseTypeStatus';
import { ResponseState } from '~/types/enums/responseState';

import { Box } from '../Box';

export interface Props {
  statistics?: Statistics;
}

function ResponseAllTypeStatuses({ statistics }: Props) {
  return (
    <Box flexDirection='row' gap='8px' flexWrap='wrap'>
      {statistics?.requests_approved && (
        <Box style={{ position: 'relative' }}>
          <ResponseTypeHeading
            type={ResponseType.request}
            state={ResponseState.APPROVED}
            position='relative'
            onlyContainer
            totalInvations={statistics.requests_approved}
          />
        </Box>
      )}
      {statistics?.invitations_total && (
        <Box style={{ position: 'relative' }}>
          <ResponseTypeHeading
            type={ResponseType.invitation}
            state={ResponseState.NEW}
            position='relative'
            onlyContainer
            totalInvations={statistics.invitations_total}
            newInvations={statistics.new_invitations}
          />
        </Box>
      )}
      {statistics?.requests_total && (
        <Box style={{ position: 'relative' }}>
          <ResponseTypeHeading
            type={ResponseType.request}
            state={ResponseState.NEW}
            position='relative'
            onlyContainer
            totalRequest={statistics.requests_total}
          />
        </Box>
      )}
    </Box>
  );
}

export default ResponseAllTypeStatuses;
