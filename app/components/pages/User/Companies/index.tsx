import { Form, Link, useSubmit } from '@remix-run/react';
import { motion } from 'framer-motion';
import { memo, useState } from 'react';
import type { Company } from 'shared/v2/companies';

import { Box } from '~/components/common/Box';
import BoxInformation from '~/components/common/BoxInformation';
import Button from '~/components/common/Button';
import { Icon } from '~/components/common/Icon';
import SvgAttentionNotVerified from '~/components/common/Icons/AttentionNotVerified';
import SvgAttentionVerified from '~/components/common/Icons/AttentionVerified';
import { Switcher } from '~/components/common/Switcher';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import ButtonCreate from '~/components/entities/ButtonCreate';
import ModalConfirmDelete from '~/components/entities/ModalConfirmDelete';
import ModalConfirmDeleteCompany from '~/components/entities/ModalConfirmDeleteCompany';
import { useApp, useScreenWidth } from '~/hooks';
import { BoxInformationEnum } from '~/types/enums/boxInformationEnum';
import { IconEnum } from '~/types/enums/iconEnum';
import { VariantCardEnum } from '~/types/enums/variantCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { ListCompaniesResponse } from '~/types/interfaces/iForms';
import { DEFAULT_COMPANY_LOGO } from '~/utils/constants';
import { getImageUrl, getValueLang } from '~/utils/helpers';

import { BoxCard } from '../../../common/Card';
import { BoxButtons, BoxControl, BoxHeading, DataBox, Field, HeadingInformation } from './styles';

export const CompaniesComponent = memo(
  ({
    dictionaries,
    companies,
    actionData,
  }: {
    companies?: Company[] | null;
    dictionaries?: IDictionaries;
    actionData?: ListCompaniesResponse;
  }): JSX.Element => {
    const { theme, t, userContext } = useApp();
    const widthScreen = useScreenWidth();

    const submit = useSubmit();

    const handleChangeForm = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const action = (event.target as HTMLInputElement).name;

      const formElement = event.currentTarget as HTMLFormElement;

      if (action === 'published') {
        submit(formElement, { preventScrollReset: true });
      }
    };

    const [visibleDelete, setVisibleDelete] = useState(false);
    const [visibleDeleteSecondStep, setVisibleDeleteSecondStep] = useState(false);

    const [deleteSelectedId, setSelectedId] = useState('');
    const [isVerifiedCompany, setIsVerifiedCompany] = useState(false);

    const handleClickDelete = (id?: string, verified?: boolean) => {
      setSelectedId(id || '');
      setVisibleDelete(true);
      if (verified) {
        setIsVerifiedCompany(verified);
      }
    };

    const hasNotVerifiedCompanies = companies?.some((company) => company?.verified === false);

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
        {hasNotVerifiedCompanies && (
          <BoxInformation
            variant={BoxInformationEnum.warning}
            title={t('user:you_have_unverified_companies')}
            flexDirection='column'
          />
        )}

        {companies?.map((company) => (
          <BoxCard key={company?.id} variant={VariantCardEnum.userCard}>
            <Link to={company?.id || '#'}>
              <BoxHeading>
                <img
                  src={company?.logo_uri ? getImageUrl(company?.logo_uri) : DEFAULT_COMPANY_LOGO}
                  alt='company logo'
                />

                {company?.verified ? <SvgAttentionVerified /> : <SvgAttentionNotVerified />}

                <HeadingInformation>
                  <Text className='title' variant={TextVariantEnum.textHeading2}>
                    {company.name}
                  </Text>
                  <Text
                    variant={TextVariantEnum.textBody1medium}
                    color={theme.user.descriptionTextColor}
                  >
                    {getValueLang(company?.specialization_name, userContext.language)}
                  </Text>
                </HeadingInformation>
              </BoxHeading>
            </Link>

            <DataBox>
              <Field>
                <Text variant={TextVariantEnum.textBody2} color={theme.user.descriptionTextColor}>
                  {t('user:vacancies')}
                </Text>
                <Text variant={TextVariantEnum.textBody2medium}>{company.number_of_vacancies}</Text>
              </Field>
              <Field>
                <Text variant={TextVariantEnum.textBody2} color={theme.user.descriptionTextColor}>
                  {t('user:opened_vacancies')}
                </Text>
                <Text variant={TextVariantEnum.textBody2medium}>{company.number_of_vacancies}</Text>
              </Field>
              <Field>
                <Text variant={TextVariantEnum.textBody2} color={theme.user.descriptionTextColor}>
                  {t('user:users')}
                </Text>
                <Text variant={TextVariantEnum.textBody2medium}>
                  {getValueLang(company?.number_of_employees_name, userContext.language)}
                </Text>
              </Field>
            </DataBox>

            <BoxControl>
              <Form method='PATCH' onChange={handleChangeForm} preventScrollReset>
                <input type='hidden' name='id' value={company?.id} />
                <input type='hidden' name='action' value='published' />
                <input type='hidden' name='publish' value={company?.published ? 'false' : 'true'} />
                <input type='hidden' name='verified' value={company?.verified.toString()} />

                <Switcher
                  checked={Boolean(company?.published)}
                  htmlLabel={company?.id}
                  name='published'
                  variant='default'
                  checkedLabel={t('user:published')}
                  unCheckedLabel={t('user:published')}
                  control
                />
              </Form>

              <BoxButtons>
                <Button
                  className='icon'
                  priority='secondary'
                  onlyIcon
                  onClick={() => handleClickDelete(company?.id, company?.verified)}
                >
                  <Icon name={IconEnum.cart} color={theme.user.iconColor} />
                </Button>

                <Form method='POST' preventScrollReset>
                  <input type='hidden' name='id' value={company.id} />
                  <Button
                    type='submit'
                    className='icon'
                    priority='secondary'
                    onlyIcon
                    value='copy'
                    name='action'
                  >
                    <Icon name={IconEnum.copy} color={theme.user.iconColor} />
                  </Button>
                </Form>

                <Link to={company?.id || '#'}>
                  <Button className='icon' priority='secondary' onlyIcon>
                    <Icon name={IconEnum.view} color={theme.user.iconColor} />
                  </Button>
                </Link>

                {company && company?.number_of_vacancies === 0 ? (
                  <ButtonCreate
                    variant='vacancy'
                    priority='primary'
                    //  setVariantCreate={setVariantCreate}
                    //  setSelectionCreate={setSelectionCreate}
                  />
                ) : (
                  <Link to={company?.id || '#'}>
                    <Button priority='primary'>
                      <Text style={{ whiteSpace: 'nowrap' }} variant={TextVariantEnum.textBody2}>
                        {t('user:show_vacancies')}
                      </Text>
                    </Button>
                  </Link>
                )}
              </BoxButtons>
            </BoxControl>
            {actionData?.id === company.id && actionData?.formError?.[userContext.language] && (
              <Text variant={TextVariantEnum.textBody2} color={theme.errorTextColor}>
                {actionData?.formError?.[userContext.language]}
              </Text>
            )}
          </BoxCard>
        ))}
        <ModalConfirmDelete
          id={deleteSelectedId}
          visibility={visibleDeleteSecondStep}
          setVisibility={setVisibleDeleteSecondStep}
        />
        <ModalConfirmDeleteCompany
          id={deleteSelectedId}
          visibility={visibleDelete}
          setVisibility={setVisibleDelete}
          isVerifiedCompany={isVerifiedCompany}
          setIsVerifiedCompany={setIsVerifiedCompany}
          visibleDeleteSecondStep={visibleDeleteSecondStep}
          setVisibleDeleteSecondStep={setVisibleDeleteSecondStep}
        />
      </Box>
    );
  },
);
