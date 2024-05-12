import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import type { Dispatch, MouseEvent, SetStateAction } from 'react';
import { useState } from 'react';
import type { Company } from 'shared/v2/companies';

import { Box } from '~/components/common/Box';
import BoxInformation from '~/components/common/BoxInformation';
import { Button } from '~/components/common/Button/styles';
import { BoxCard } from '~/components/common/Card';
import { Icon } from '~/components/common/Icon';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { DataField } from '~/components/entities/DataFIeld';
import ModalVerification from '~/components/entities/ModalVerification';
import { CardContainer } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import { BoxInformationEnum } from '~/types/enums/boxInformationEnum';
import { IconEnum } from '~/types/enums/iconEnum';
import { CompanyCardEnum } from '~/types/enums/stateCardEnum';
import { VariantCardEnum } from '~/types/enums/variantCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IUpdateCompany } from '~/types/interfaces/iForms';
import { maskTaxId } from '~/utils/masks';

import CompanyInformationData from './CompanyInformationData';
import CompanyInformationEdit from './CompanyInformationEdit';
import { VerificationStatus } from './styles';

export default function CompanyInformation({
  editCard,
  setEditCard,
  company,
  dictionaries,
  actionData,
}: {
  editCard: CompanyCardEnum;
  setEditCard: Dispatch<SetStateAction<string>>;
  company?: Company | null;
  dictionaries?: IDictionaries;
  actionData?: IUpdateCompany;
}) {
  const { t, theme } = useApp();
  const [visibleVerification, setVisibleVerification] = useState(false);
  const handleClickVerification = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    setVisibleVerification(true);
  };

  const buttonShowVacancies = () => (
    <Link to={`/user/vacancy?company_id=${company?.id || ''}`}>
      <Button priority='secondary'>
        <Text variant={TextVariantEnum.textBody2}>{t('common:show')}</Text>
      </Button>
    </Link>
  );

  const verificationCard = (company?: Company | null) => (
    <BoxCard variant={VariantCardEnum.userCard}>
      <CardContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
        style={{ gap: '16px' }}
        withGrowingBtn
      >
        <Box display='flex' flexDirection='column' gap='12px'>
          <VerificationStatus verified={company?.verified}>
            <Icon
              name={company?.verified ? IconEnum.attentionVerified : IconEnum.attentionNotVerified}
            />
            <Text variant={TextVariantEnum.textBody2medium}>
              {company?.verified
                ? t('user:company_is_verified')
                : t('user:verification_is_required')}
            </Text>
          </VerificationStatus>

          {company?.verified ? (
            <Text variant={TextVariantEnum.textBody2}>
              {t('user:your_companys_vacancies_can_be_visible_to_other_users')}
            </Text>
          ) : (
            <Box display='flex' flexDirection='column' gap='8px'>
              <Text variant={TextVariantEnum.textHeading3}>
                {t('user:why_is_verification_needed')}{' '}
              </Text>
              <Text variant={TextVariantEnum.textBody2}>
                {t('user:we_value_the_safety_of_our_users')}
              </Text>
              <Text variant={TextVariantEnum.textBody2}>
                {t('user:after_verification_you_will_be_able_to_post_vacancies')}
              </Text>
            </Box>
          )}
        </Box>

        <Box display='flex' flexDirection='column' gap='8px'>
          <Text variant={TextVariantEnum.textBody2}>{t('user:tax_id')}</Text>
          <DataField
            data={
              company?.verified
                ? maskTaxId(company?.tax_id)
                : t('user:company_verification_is_required')
            }
            color={theme.backgroundColor}
          />
        </Box>

        {!company?.verified && (
          <Button
            priority='primary'
            className='growingButton'
            onClick={(e) => handleClickVerification(e)}
          >
            <Text variant={TextVariantEnum.textBody2}>{t('user:how_to_verify_a_company')}</Text>
          </Button>
        )}
      </CardContainer>
    </BoxCard>
  );

  return (
    <>
      {verificationCard(company)}

      <BoxInformation
        variant={BoxInformationEnum.info}
        title={
          company?.number_of_vacancies && company?.number_of_vacancies > 0 // TODO: fix on all vacancies
            ? t('user:vacancies_in_this_company')
            : t('user:this_company_has_no_vacancies_yet')
        }
        button={
          company?.number_of_vacancies && company?.number_of_vacancies > 0
            ? () => buttonShowVacancies()
            : null
        }
        flexDirection='column'
      />

      {editCard === CompanyCardEnum.all && (
        <CompanyInformationData
          editCard={editCard}
          setEditCard={setEditCard}
          company={company}
          dictionaries={dictionaries}
        />
      )}

      {editCard === CompanyCardEnum.information && (
        <CompanyInformationEdit
          editCard={editCard}
          setEditCard={setEditCard}
          company={company}
          dictionaries={dictionaries}
          actionData={actionData}
        />
      )}

      <ModalVerification visibility={visibleVerification} setVisibility={setVisibleVerification} />
    </>
  );
}
