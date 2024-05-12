import { Form, Link, useSubmit } from '@remix-run/react';
import { motion } from 'framer-motion';
import { memo, useState } from 'react';
import type { Company } from 'shared/v2/companies';
import type { Vacancy } from 'shared/v2/vacancies';

import { Box } from '~/components/common/Box';
import BoxInformation from '~/components/common/BoxInformation';
import Button from '~/components/common/Button';
import { Icon } from '~/components/common/Icon';
import SvgAttention from '~/components/common/Icons/Attention';
import { Select } from '~/components/common/Select';
import { Switcher } from '~/components/common/Switcher';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import ModalConfirmDelete from '~/components/entities/ModalConfirmDelete';
import { useApp, useCheckIncompleteEntityInList, useScreenWidth } from '~/hooks';
import type { ListVacanciesResponse } from '~/routes/user/vacancy';
import { BoxInformationEnum } from '~/types/enums/boxInformationEnum';
import { IconEnum } from '~/types/enums/iconEnum';
import { VariantCardEnum } from '~/types/enums/variantCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import { DEFAULT_COMPANY_LOGO } from '~/utils/constants';
import {
  checkCompleteness,
  extractCompanyData,
  getImageUrl,
  getSalary,
  getValueLang,
} from '~/utils/helpers';

import { BoxCard } from '../../../common/Card';
import {
  BoxButtons,
  BoxControl,
  BoxHeading,
  DataBox,
  Field,
  FilterContent,
  HeadingInformation,
} from './styles';

export const VacanciesComponent = memo(
  ({
    vacancies,
    dictionaries,
    companies,
    actionData,
  }: {
    vacancies?: Vacancy[] | null;
    companies?: Company[];
    dictionaries?: IDictionaries;
    actionData?: ListVacanciesResponse;
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
    const [deleteSelectedId, setSelectedId] = useState('');

    const handleClickDelete = (id?: string) => {
      setSelectedId(id || '');
      setVisibleDelete(true);
    };

    const hasIncompleteVacancy = useCheckIncompleteEntityInList(null, vacancies);

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
        {hasIncompleteVacancy && (
          <BoxInformation
            variant={BoxInformationEnum.warning}
            title={t('user:you_have_incomplete_vacancies')}
            flexDirection='column'
          />
        )}

        {vacancies?.map((vacancy) => (
          <BoxCard key={vacancy?.id} variant={VariantCardEnum.userCard}>
            <Link to={vacancy?.id || '#'}>
              <BoxHeading>
                <img
                  src={
                    vacancy?.company_logo_uri
                      ? getImageUrl(vacancy?.company_logo_uri)
                      : DEFAULT_COMPANY_LOGO
                  }
                  alt='company logo'
                />
                {!checkCompleteness(null, vacancy) && <SvgAttention />}

                <HeadingInformation>
                  <Text className='title' variant={TextVariantEnum.textHeading2}>
                    {vacancy.vacancy_page?.position}
                  </Text>
                  <Text
                    variant={TextVariantEnum.textBody1medium}
                    color={theme.user.descriptionTextColor}
                  >
                    {vacancy?.contacts?.company_name}
                  </Text>

                  {(vacancy?.vacancy_page?.salary_fixed ||
                    (vacancy.vacancy_page?.salary_from && vacancy.vacancy_page?.salary_to)) && (
                    <Box>
                      {vacancy.vacancy_page?.salary_from && vacancy.vacancy_page?.salary_to ? (
                        <Text className='price' variant={TextVariantEnum.textHeading3}>
                          {vacancy.vacancy_page?.salary_from} - {vacancy.vacancy_page?.salary_to}
                          &nbsp;
                          {getSalary(
                            vacancy.vacancy_page.currency_name?.en,
                            vacancy.vacancy_page.salary_payout_period_name?.en,
                            userContext.language,
                          )}
                        </Text>
                      ) : (
                        <Text className='price' variant={TextVariantEnum.textHeading3}>
                          {vacancy.vacancy_page?.salary_fixed}&nbsp;
                          {getSalary(
                            vacancy.vacancy_page.currency_name?.en,
                            vacancy.vacancy_page.salary_payout_period_name?.en,
                            userContext.language,
                          )}
                        </Text>
                      )}
                    </Box>
                  )}
                </HeadingInformation>
              </BoxHeading>
            </Link>

            <DataBox>
              <Field>
                <Text variant={TextVariantEnum.textBody2} color={theme.user.descriptionTextColor}>
                  {t('user:district')}
                </Text>
                <Text variant={TextVariantEnum.textBody2medium}>
                  {getValueLang(vacancy.location?.city_name, userContext.language)}
                </Text>
              </Field>
              <Field>
                <Text variant={TextVariantEnum.textBody2} color={theme.user.descriptionTextColor}>
                  {t('user:employment')}
                </Text>
                <Box flexDirection='column' gap='4px' flexWrap='wrap'>
                  {vacancy.vacancy_page?.employment_type_names?.map((employment) => (
                    <Text
                      key={employment[userContext.language]}
                      variant={TextVariantEnum.textBody2medium}
                    >
                      {getValueLang(employment, userContext.language)}
                    </Text>
                  ))}
                </Box>
              </Field>
              <Field>
                <Text variant={TextVariantEnum.textBody2} color={theme.user.descriptionTextColor}>
                  {t('user:work_features')}
                </Text>
                <Box flexDirection='column' gap='4px' flexWrap='wrap'>
                  {vacancy.vacancy_page?.work_feature_names?.map((feature) => (
                    <Text
                      key={feature[userContext.language]}
                      variant={TextVariantEnum.textBody2medium}
                    >
                      {getValueLang(feature, userContext.language)}
                    </Text>
                  ))}
                </Box>
              </Field>
            </DataBox>

            <BoxControl>
              <Form method='PATCH' onChange={(event) => handleChangeForm(event)} preventScrollReset>
                <input type='hidden' name='id' value={vacancy?.id} />
                <input type='hidden' name='action' value='published' />
                <input
                  type='hidden'
                  name='company_verified'
                  value={vacancy?.company_verified?.toString()}
                />
                <input type='hidden' name='publish' value={vacancy?.published ? 'false' : 'true'} />
                <input
                  type='hidden'
                  name='checkFields'
                  value={checkCompleteness(null, vacancy)?.toString()}
                />
                <Switcher
                  checked={Boolean(vacancy?.published)}
                  htmlLabel={vacancy?.id}
                  name='published'
                  variant='default'
                  checkedLabel={t('user:published')}
                  unCheckedLabel={t('user:published')}
                  control
                />
              </Form>

              <BoxButtons>
                <Form method='DELETE' preventScrollReset style={{ width: 'fit-content' }}>
                  <input type='hidden' name='id' value={vacancy?.id} />
                  <Button
                    className='icon'
                    priority='secondary'
                    onlyIcon
                    onClick={() => handleClickDelete(vacancy?.id)}
                  >
                    <Icon name={IconEnum.cart} color={theme.user.iconColor} />
                  </Button>
                </Form>

                <Form method='POST' preventScrollReset style={{ width: 'fit-content' }}>
                  <input type='hidden' name='id' value={vacancy.id} />
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

                <Link key={vacancy.id} to={vacancy?.id || '#'}>
                  <Button className='icon' priority='secondary' onlyIcon>
                    <Icon name={IconEnum.view} color={theme.user.iconColor} />
                  </Button>
                </Link>
              </BoxButtons>
            </BoxControl>
          </BoxCard>
        ))}
        <ModalConfirmDelete
          id={deleteSelectedId}
          visibility={visibleDelete}
          setVisibility={setVisibleDelete}
        />
      </Box>
    );
  },
);
