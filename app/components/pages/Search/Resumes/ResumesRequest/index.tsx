import { motion } from 'framer-motion';
import { memo, useEffect, useState } from 'react';
import type { EntityMessage } from 'shared/client/data-contracts';
import type { Resume } from 'shared/v2/resumes';

import { Box } from '~/components/common/Box';
import BoxInformation from '~/components/common/BoxInformation';
import ModalRequestConfirm from '~/components/entities/ModalRequestConfirm';
import { useApp, useScreenWidth } from '~/hooks';
import { BoxInformationEnum } from '~/types/enums/boxInformationEnum';
import { EntityVariantEnum } from '~/types/enums/entityVariantEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';

import { ResumeRequest } from './ResumeRequest';

export const ResumesRequest = memo(
  ({
    resumes,
    dictionaries,
    actionRequest,
    message,
  }: {
    resumes?: Resume[] | null;
    dictionaries?: IDictionaries;
    actionRequest?: boolean;
    message?: EntityMessage;
  }): JSX.Element => {
    const { t, userContext } = useApp();

    const widthScreen = useScreenWidth();

    const [confirmResume, setConfirmResume] = useState(false);
    const [selectedResume, setSelectedResume] = useState('');

    const [publishedResumes, setPublishedResumes] = useState<Resume[]>();

    useEffect(() => {
      if (resumes) {
        const newResume = resumes.filter((resume) => resume.published);
        setPublishedResumes(newResume);
      }
    }, [resumes]);

    useEffect(() => {
      if (actionRequest) {
        setConfirmResume(false);
      }
    }, [actionRequest]);

    const handleConfirm = (id?: string) => {
      if (id) setSelectedResume(id);

      setConfirmResume(!confirmResume);
    };

    return (
      <Box
        flexDirection='column'
        width='100%'
        gap={widthScreen > 1024 ? '24px' : '16px'}
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {actionRequest === undefined && (
          <BoxInformation
            variant={BoxInformationEnum.info}
            title={t('user:select_vacancy_to_send')}
          />
        )}

        {actionRequest === false && message && (
          <BoxInformation
            variant={BoxInformationEnum.error}
            title={message[userContext.language]}
          />
        )}

        {actionRequest === true && (
          <BoxInformation
            variant={BoxInformationEnum.success}
            title={t('user:your_request_has_been_sent')}
          />
        )}
        {publishedResumes?.map((resume) => (
          <Box
            width='100%'
            style={{ cursor: 'pointer' }}
            key={resume.id}
            onClick={() => handleConfirm(resume?.id)}
          >
            <ResumeRequest resume={resume} dictionaries={dictionaries} />
          </Box>
        ))}
        <ModalRequestConfirm
          id={selectedResume}
          variant={EntityVariantEnum.resume}
          visibility={confirmResume}
          setVisibility={setConfirmResume}
        />
      </Box>
    );
  },
);
