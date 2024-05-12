import { motion } from 'framer-motion';
import type { ResponseType } from 'shared/v2/responses';
import type { Resume } from 'shared/v2/resumes';

import { Box } from '~/components/common/Box';
import { BoxCard } from '~/components/common/Card';
import { BoxControlContainer } from '~/components/entities/BoxControl';
import {
  ResumeFullCardAboutEmployee,
  ResumeFullCardAdditional,
  ResumeFullCardEducation,
  ResumeFullCardHeading,
  ResumeFullCardInformation,
  ResumeFullCardSkills,
  ResumeFullCardWorkExperience,
} from '~/components/entities/cardComponents/fullCard';
import SignInForRequest from '~/components/pages/Search/SignInForRequest';
import { BoxDataFields, CardContainer } from '~/components/ui/Card';
import { useApp, useScreenWidth } from '~/hooks';
import { EntityVariantEnum } from '~/types/enums/entityVariantEnum';
import type { PageVariantEnum } from '~/types/enums/pageVariantEnum';
import type { ResponseState } from '~/types/enums/responseState';
import { ResumeCardEnum } from '~/types/enums/stateCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';

export function ResumeFullCardWidget({
  resume,
  dictionaries,
  handleRequest,
  stateResponse,
  typeResponse,
  variant,
  status,
  responseId,
  responseAction,
}: {
  resume?: Resume;
  dictionaries?: IDictionaries;
  handleRequest?: () => void;
  stateResponse?: ResponseState | string;
  typeResponse?: ResponseType;
  variant?: PageVariantEnum;
  status?: JSX.Element;
  responseId?: string;
  responseAction?: boolean;
}): JSX.Element {
  const { userContext } = useApp();
  const widthScreen = useScreenWidth();

  return (
    <BoxCard nameCard={ResumeCardEnum.information}>
      <CardContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
      >
        <ResumeFullCardHeading resume={resume} />
        {status && (
          <Box padding='16px 0 0' width='fit-content'>
            {status}
          </Box>
        )}
        <BoxDataFields>
          <ResumeFullCardAboutEmployee resume={resume} dictionaries={dictionaries} />
          <ResumeFullCardInformation resume={resume} dictionaries={dictionaries} />
          {resume?.work_experience?.length && resume?.work_experience[0]?.from && (
            <ResumeFullCardWorkExperience resume={resume} />
          )}
          {resume?.education?.length && resume?.education[0]?.institution && (
            <ResumeFullCardEducation resume={resume} dictionaries={dictionaries} />
          )}
          {resume?.additional_information?.skill_ids?.[0] && (
            <ResumeFullCardSkills resume={resume} />
          )}
          {(resume?.additional_information?.citizenship_name ||
            resume?.location?.relocation_name ||
            resume?.additional_information?.religion_name ||
            resume?.additional_information?.marital_status_name ||
            resume?.additional_information?.driver_license_names?.length ||
            resume?.additional_information?.other_license?.length) && (
            <ResumeFullCardAdditional resume={resume} />
          )}
        </BoxDataFields>
        <BoxControlContainer
          variant={variant}
          id={resume?.id}
          responseId={responseId}
          typeCard='full'
          handleRequest={handleRequest}
          stateResponse={stateResponse}
          typeResponse={typeResponse}
          typeEntity={EntityVariantEnum.resume}
          responseAction={responseAction}
        />
        {!userContext?.user?.isAuthenticated && widthScreen >= 1280 && (
          <SignInForRequest variant={EntityVariantEnum.resume} />
        )}
      </CardContainer>
    </BoxCard>
  );
}
