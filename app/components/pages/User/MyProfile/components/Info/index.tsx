import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';
import { memo, useEffect, useState } from 'react';
import type { MultiDateValue, UserInfo } from 'shared/v2/users';

import { Box } from '~/components/common/Box';
import Button from '~/components/common/Button';
import { BoxCard } from '~/components/common/Card';
import { Input } from '~/components/common/Input';
import { Select } from '~/components/common/Select';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { DataField } from '~/components/entities/DataFIeld';
import { DatePicker } from '~/components/entities/DatePicker';
import { UploadingImageModal } from '~/components/entities/UploadingImageModal';
import { BoxFields } from '~/components/ui/Card';
import { BoxAvatar } from '~/components/ui/Card/BoxAvatar';
import { useApp } from '~/hooks';
import type { StateCard } from '~/types/enums/stateCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IUpdateProfile } from '~/types/interfaces/iForms';
import { DEFAULT_USER_AVATAR } from '~/utils/constants';
import {
  extractTitles,
  extractTitlesNewWay,
  getImageUrl,
  getValueFromDictionaries,
  getValueFromDictionariesNewWay,
  getValueLang,
} from '~/utils/helpers';

import { BoxPicture, BoxUserData, BoxUserEditData, Image } from './styles';

export const GeneralInfo = memo(
  ({
    stateUserInfo,
    setStateUserInfo,
    user,
    dictionaries,
    actionData,
  }: {
    stateUserInfo: StateCard;
    setStateUserInfo?: Dispatch<SetStateAction<StateCard>>;
    user?: UserInfo | null;
    dictionaries: IDictionaries;
    actionData?: IUpdateProfile;
  }): JSX.Element => {
    const { t, userContext, theme } = useApp();
    const [showUploader, setShowUploader] = useState(false);
    const [photo, setPhoto] = useState(
      user?.photo ? getImageUrl(user?.photo) : DEFAULT_USER_AVATAR,
    );
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
        state={stateUserInfo}
        setState={setStateUserInfo}
        withEditButton
        withControl
      >
        {stateUserInfo === 'info' && (
          <BoxUserData
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
          >
            <DataField label={t('user:first_name')} data={user?.first_name || ''} />
            <DataField label={t('user:last_name')} data={user?.last_name || ''} />
            <DataField
              label={t('user:gender')}
              data={
                getValueFromDictionaries(
                  dictionaries.genders,
                  user?.gender,
                  userContext.language,
                ) ||
                getValueFromDictionaries(dictionaries.genders, user?.gender, userContext.language)
              }
            />
            <DataField
              label={t('user:date_of_birth')}
              data={
                user?.birthday
                  ? getValueLang(user?.birthday, userContext.language)
                  : getValueLang(
                      userContext?.user.birthday as MultiDateValue,
                      userContext.language,
                    ) || ''
              }
            />
            <DataField label={t('user:email')} data={user?.email} />
            <DataField label={t('user:phone')} data={user?.phone} />
            <DataField
              label={t('user:language_of_notify')}
              data={getValueFromDictionariesNewWay(
                dictionaries.languagesOfNotify,
                user?.primary_language,
                userContext.language,
              )}
            />
          </BoxUserData>
        )}
        {stateUserInfo === 'edit' && (
          <Box
            width='100%'
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
          >
            <input type='hidden' name='formName' value='general' />
            <BoxUserEditData>
              <BoxPicture>
                <Text variant={TextVariantEnum.textBody1medium}>{t('user:profile_picture')}</Text>
                <BoxAvatar variant='user'>
                  <input type='hidden' name='photo' value={photo} />
                  <Image src={photo || DEFAULT_USER_AVATAR} alt='avatar' />
                  <Button priority='secondary' onClick={() => setShowUploader(!showUploader)}>
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
                  id='i_firstName'
                  name='firstName'
                  value={user?.first_name || ''}
                  errorText={actionData?.fieldErrors?.first_name?.[userContext.language]}
                />
                <Input
                  placeholder={t('user:last_name')}
                  id='i_lastName'
                  name='lastName'
                  value={user?.last_name || ''}
                  errorText={actionData?.fieldErrors?.last_name?.[userContext.language]}
                />
                <Input
                  placeholder={t('user:email')}
                  id='email'
                  name='email'
                  value={user?.email || ''}
                  disabled
                />
                <Select
                  entries={extractTitles(dictionaries?.genders, userContext.language)}
                  placeholder={t('user:gender')}
                  id='gender'
                  name='gender'
                  values={[user?.gender || '']}
                />
                <DatePicker
                  name='birthday'
                  defaultDate={getValueLang(user?.birthday as MultiDateValue, userContext.language)}
                  placeholderDay={t('user:day_of_birth')}
                  placeholderMonth={t('user:month_of_birth')}
                  placeholderYear={t('user:year_of_birth')}
                  errorText={actionData?.fieldErrors?.birthday?.[userContext.language]}
                />
                <Input
                  placeholder={t('user:phone')}
                  id='i_phone'
                  name='phone'
                  value={user?.phone}
                  variant='phone'
                />
                <Select
                  entries={extractTitlesNewWay(
                    dictionaries?.languagesOfNotify,
                    userContext.language,
                  )}
                  placeholder={t('user:language_of_notify')}
                  id='primaryLanguage'
                  name='primary_language'
                  values={[user?.primary_language || '']}
                />
              </BoxFields>
            </BoxUserEditData>
          </Box>
        )}
      </BoxCard>
    );
  },
);
