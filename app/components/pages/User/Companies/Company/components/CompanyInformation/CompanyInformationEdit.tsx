import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import type { Company } from 'shared/v2/companies';

import Button from '~/components/common/Button';
import { BoxCard } from '~/components/common/Card';
import { Input } from '~/components/common/Input';
import { Select } from '~/components/common/Select';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { UploadingImageModal } from '~/components/entities/UploadingImageModal';
import { BoxFields, CardContainer } from '~/components/ui/Card';
import { BoxAvatar } from '~/components/ui/Card/BoxAvatar';
import { useApp } from '~/hooks';
import type { StateCard } from '~/types/enums/stateCardEnum';
import { CompanyCardEnum } from '~/types/enums/stateCardEnum';
import { VariantCardEnum } from '~/types/enums/variantCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IUpdateCompany } from '~/types/interfaces/iForms';
import { DEFAULT_COMPANY_LOGO } from '~/utils/constants';
import { extractTitles, extractTitlesNewWay, getImageUrl } from '~/utils/helpers';

import { BoxPicture, Image } from './styles';

export default function CompanyInformationEdit({
  editCard,
  setEditCard,
  state,
  step,
  company,
  dictionaries,
  actionData,
}: {
  editCard?: CompanyCardEnum;
  setEditCard?: Dispatch<SetStateAction<string>>;
  state?: StateCard;
  step?: number;
  company?: Company | null;
  dictionaries?: IDictionaries;
  actionData?: IUpdateCompany;
}) {
  const { t, userContext, theme } = useApp();
  const [photo, setPhoto] = useState(
    company?.logo_uri ? getImageUrl(company?.logo_uri) : DEFAULT_COMPANY_LOGO,
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
      title={t('user:general_information')}
      withEditButton
      nameCard={CompanyCardEnum.information}
      editCard={editCard}
      setEditCard={setEditCard}
      state={state}
      step={step}
      maxStep={1}
      variant={VariantCardEnum.editCard}
    >
      <CardContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
      >
        <BoxPicture>
          <Text variant={TextVariantEnum.textBody1medium}>{t('user:profile_picture')}</Text>
          <BoxAvatar variant='user'>
            <input type='hidden' name='logo' value={photo} />
            <Image src={photo || DEFAULT_COMPANY_LOGO} alt='avatar' />
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
            placeholder={t('user:company_name')}
            id='name'
            name='name'
            value={company?.name}
            errorText={actionData?.fieldErrors?.name?.[userContext.language]}
            disabled={company?.verified}
          />
          {company?.verified && <input name='name' type='hidden' value={company?.name} />}
          <Select
            entries={extractTitlesNewWay(dictionaries?.specializations, userContext.language)}
            placeholder={t('user:specialization')}
            name='specialization_id'
            values={[company?.specialization_id || '']}
            errorText={actionData?.fieldErrors?.specialization_id?.[userContext.language]}
          />
          <Input
            placeholder={t('user:phone')}
            id='phone'
            name='phone'
            variant='phone'
            value={company?.phone || userContext.user.phone}
            errorText={actionData?.fieldErrors?.phone?.[userContext.language]}
          />
          <Select
            entries={extractTitles(dictionaries?.location, userContext.language)}
            placeholder={t('user:district')}
            name='city'
            values={[company?.city_id || '']}
            errorText={actionData?.fieldErrors?.city_id?.[userContext.language]}
            variant='search-single'
          />
          <Input
            placeholder={t('user:address')}
            id='address'
            name='address'
            value={company?.address}
            errorText={actionData?.fieldErrors?.address?.[userContext.language]}
          />
          <Input
            placeholder={t('user:zip_code')}
            id='zip'
            name='zip_code'
            value={company?.zip_code}
            errorText={actionData?.fieldErrors?.zip_code?.[userContext.language]}
          />
          <Input
            placeholder={t('user:website_or_facebook_page')}
            id='website'
            name='website'
            variant='website'
            value={company?.website}
            errorText={actionData?.fieldErrors?.website?.[userContext.language]}
          />
          <Select
            entries={extractTitles(dictionaries?.employeeNumbers, userContext.language)}
            placeholder={t('user:number_of_employees')}
            id='employee'
            name='employee'
            values={[company?.number_of_employees_id || '']}
            errorText={actionData?.fieldErrors?.number_of_employees_id?.[userContext.language]}
          />
          <Input
            variant='textarea'
            placeholder={t('user:description')}
            id='i_description'
            name='description'
            value={company?.description}
            errorText={actionData?.fieldErrors?.description?.[userContext.language]}
          />

          {/* <Switcher
            checked={Boolean(company?.published)}
            htmlLabel='published'
            name='published'
            variant='default'
            checkedLabel={t('user:published')}
            unCheckedLabel={t('user:published')}
          /> */}
        </BoxFields>
      </CardContainer>
    </BoxCard>
  );
}
