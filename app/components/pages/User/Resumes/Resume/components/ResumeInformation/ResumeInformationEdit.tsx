import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import type { Resume } from 'shared/v2/resumes';
import type { MultiDateValue } from 'shared/v2/users';

import Button from '~/components/common/Button';
import { BoxCard } from '~/components/common/Card';
import { Input } from '~/components/common/Input';
import { Select } from '~/components/common/Select';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { DatePicker } from '~/components/entities/DatePicker';
import { UploadingImageModal } from '~/components/entities/UploadingImageModal';
import { BoxUserEditData } from '~/components/pages/User/MyProfile/components/Info/styles';
import { BoxFields, CardContainer } from '~/components/ui/Card';
import { BoxAvatar } from '~/components/ui/Card/BoxAvatar';
import { useApp } from '~/hooks';
import type { StateCard } from '~/types/enums/stateCardEnum';
import { ResumeCardEnum } from '~/types/enums/stateCardEnum';
import { VariantCardEnum } from '~/types/enums/variantCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IUpdateResume } from '~/types/interfaces/iForms';
import { DEFAULT_USER_AVATAR } from '~/utils/constants';
import { extractTitles, extractTitlesNewWay, getImageUrl, getValueLang } from '~/utils/helpers';

import { BoxPicture, Image } from './styles';

export default function ResumeInformationEdit({
  editCard,
  setEditCard,
  state,
  step,
  resume,
  dictionaries,
  actionData,
}: {
  resume?: Resume | null;
  dictionaries?: IDictionaries;
  editCard?: ResumeCardEnum;
  setEditCard?: Dispatch<SetStateAction<string>>;
  state?: StateCard;
  step?: number;
  actionData?: IUpdateResume;
}) {
  const { t, userContext, theme } = useApp();
  const [photo, setPhoto] = useState(
    resume?.general_information?.photo_uri
      ? getImageUrl(resume?.general_information?.photo_uri)
      : DEFAULT_USER_AVATAR,
  );
  const [showUploader, setShowUploader] = useState(false);
  const [errorTextForImage, setErrorTextForImage] = useState(false);

  useEffect(() => {
    if (
      !photo?.startsWith('data:image/jpg') &&
      !photo?.startsWith('data:image/jpeg') &&
      !photo?.startsWith('https://api.test.upjob.com/m') &&
      !photo?.startsWith('/images/user') &&
      photo
    ) {
      setErrorTextForImage(true);
    } else {
      setErrorTextForImage(false);
    }
  }, [photo]);

  return (
    <BoxCard
      title={t('user:personal_information')}
      withEditButton
      nameCard={ResumeCardEnum.information}
      editCard={editCard}
      setEditCard={setEditCard}
      state={state}
      step={step}
      maxStep={7}
      variant={VariantCardEnum.editCard}
    >
      <CardContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
      >
        <input name='formName' type='hidden' value='general' />
        <BoxUserEditData>
          <input name='nameCard' type='hidden' value='general_information' />
          <BoxPicture>
            <Text variant={TextVariantEnum.textBody1medium}>{t('user:profile_picture')}</Text>
            <BoxAvatar variant='user'>
              <input type='hidden' name='logo' value={photo} />
              <Image src={photo || DEFAULT_USER_AVATAR} alt='avatar' />
              <Button
                type='button'
                priority='secondary'
                onClick={() => setShowUploader(!showUploader)}
              >
                <Text variant={TextVariantEnum.textBody2}> {t('user:edit_photo')}</Text>
              </Button>
            </BoxAvatar>
            {errorTextForImage && (
              <Text variant={TextVariantEnum.textSmall} color={theme.errorTextColor}>
                {t('user:image_type_must_be_jpeg')}
              </Text>
            )}
            <UploadingImageModal
              visibility={showUploader}
              setVisibility={setShowUploader}
              defaultImage={photo}
              setDefaultImage={setPhoto}
            />
          </BoxPicture>
          <BoxFields>
            <Input
              placeholder={t('user:first_name')}
              id='firstName'
              name='first_name'
              value={resume?.general_information?.first_name || userContext.user.firstName}
              errorText={actionData?.fieldErrors?.first_name?.[userContext.language]}
            />
            <Input
              placeholder={t('user:last_name')}
              id='lastName'
              name='last_name'
              value={resume?.general_information?.last_name || userContext.user.lastName}
              errorText={actionData?.fieldErrors?.last_name?.[userContext.language]}
            />
            <Select
              entries={extractTitles(dictionaries?.genders, userContext.language)}
              placeholder={t('user:gender')}
              id='gender'
              name='gender_id'
              values={[resume?.general_information?.gender_id || userContext.user.gender || '']}
              errorText={actionData?.fieldErrors?.gender_id?.[userContext.language]}
            />

            <DatePicker
              name='birthdate'
              defaultDate={
                getValueLang(resume?.general_information?.birthdate, userContext.language) ??
                getValueLang(userContext.user.birthday, userContext.language)
              }
              placeholderDay={t('user:day_of_birth')}
              placeholderMonth={t('user:month_of_birth')}
              placeholderYear={t('user:year_of_birth')}
            />
            <Input
              placeholder={t('user:email')}
              id='email'
              name='email'
              value={resume?.general_information?.email || userContext.user.email}
              errorText={actionData?.fieldErrors?.email?.[userContext.language]}
            />
            <Input
              placeholder={t('user:phone')}
              id='phone'
              name='phone'
              variant='phone'
              value={resume?.general_information?.phone || userContext.user.phone}
              errorText={actionData?.fieldErrors?.phone?.[userContext.language]}
            />
            <Select
              entries={extractTitlesNewWay(dictionaries?.languagesOfNotify, userContext.language)}
              placeholder={t('user:language_of_notify')}
              id='primaryLanguage'
              name='language_of_notify_id'
              values={[resume?.general_information?.language_of_notify_id || '']}
              errorText={actionData?.fieldErrors?.language_of_notify_id?.[userContext.language]}
            />
          </BoxFields>
        </BoxUserEditData>
      </CardContainer>
    </BoxCard>
  );
}
