import { Form, Link, useSubmit } from '@remix-run/react';
import { motion } from 'framer-motion';
import { memo, useState } from 'react';
import type { Resume } from 'shared/v2/resumes';

import { Box } from '~/components/common/Box';
import BoxInformation from '~/components/common/BoxInformation';
import Button from '~/components/common/Button';
import { Icon } from '~/components/common/Icon';
import SvgAttention from '~/components/common/Icons/Attention';
import { Switcher } from '~/components/common/Switcher';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import ModalConfirmDelete from '~/components/entities/ModalConfirmDelete';
import { useApp, useCheckIncompleteEntityInList, useScreenWidth } from '~/hooks';
import { BoxInformationEnum } from '~/types/enums/boxInformationEnum';
import { IconEnum } from '~/types/enums/iconEnum';
import { VariantCardEnum } from '~/types/enums/variantCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { ListResumeResponse } from '~/types/interfaces/iForms';
import { DEFAULT_USER_AVATAR } from '~/utils/constants';
import {
  calculateAge,
  calculateTotalDurationWorkExperience,
  checkCompleteness,
  getImageUrl,
  getSalary,
  getValueLang,
} from '~/utils/helpers';

import { BoxCard } from '../../../common/Card';
import { BoxButtons, BoxControl, BoxHeading, DataBox, Field, HeadingInformation } from './styles';

export const ResumesComponent = memo(
  ({
    resumes,
    dictionaries,
    actionData,
  }: {
    resumes?: Resume[] | null;
    dictionaries?: IDictionaries;
    actionData?: ListResumeResponse;
  }): JSX.Element => {
    const { theme, t, userContext } = useApp();
    const widthScreen = useScreenWidth();

    const submit = useSubmit();

    const handleChangeForm = (event: React.FormEvent<HTMLFormElement>, resumeId?: string) => {
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

    const hasIncompleteResume = useCheckIncompleteEntityInList(resumes);

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
        {/* <Heading variant='resumes' title={t('user:my_resumes')} /> */}

        {hasIncompleteResume && (
          <BoxInformation
            variant={BoxInformationEnum.warning}
            title={t('user:you_have_incomplete_resumes')}
            flexDirection='column'
          />
        )}

        {resumes?.map((resume) => (
          <BoxCard variant={VariantCardEnum.userCard} key={resume.id}>
            <Link key={resume.id} to={resume?.id || '#'}>
              <BoxHeading>
                <img
                  src={
                    resume?.general_information?.photo_uri
                      ? getImageUrl(resume?.general_information?.photo_uri)
                      : DEFAULT_USER_AVATAR
                  }
                  alt='avatar'
                />
                {!checkCompleteness(resume, null) && <SvgAttention />}

                <HeadingInformation>
                  <Text className='title' variant={TextVariantEnum.textHeading2}>
                    {resume.job_position?.position}
                  </Text>
                  <Text
                    variant={TextVariantEnum.textBody1medium}
                    color={theme.user.descriptionTextColor}
                  >
                    {getValueLang(resume.job_position?.specialization_name, userContext.language)}
                  </Text>

                  {(resume.job_position?.salary_fixed ||
                    (resume.job_position?.salary_from && resume.job_position?.salary_to)) && (
                    <Box>
                      {resume.job_position?.salary_from && resume.job_position?.salary_to ? (
                        <Text className='price' variant={TextVariantEnum.textHeading3}>
                          {resume.job_position?.salary_from} - {resume.job_position?.salary_to}
                          &nbsp;
                          {getSalary(
                            resume.job_position.currency_name?.en,
                            resume.job_position.salary_payout_period_name?.en,
                            userContext.language,
                          )}
                        </Text>
                      ) : (
                        <Text className='price' variant={TextVariantEnum.textHeading3}>
                          {resume.job_position?.salary_fixed}&nbsp;
                          {getSalary(
                            resume.job_position.currency_name?.en,
                            resume.job_position.salary_payout_period_name?.en,
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
                  {getValueLang(resume.location?.city_name, userContext.language)}
                </Text>
              </Field>
              <Field>
                <Text variant={TextVariantEnum.textBody2} color={theme.user.descriptionTextColor}>
                  {t('user:age')}
                </Text>
                <Text variant={TextVariantEnum.textBody2medium}>
                  {calculateAge(resume?.general_information?.birthdate?.en)}
                </Text>
              </Field>
              <Field>
                <Text variant={TextVariantEnum.textBody2} color={theme.user.descriptionTextColor}>
                  {t('user:work_experience')}
                </Text>
                <Text variant={TextVariantEnum.textBody2medium}>
                  {calculateTotalDurationWorkExperience(
                    resume?.total_work_experience_in_months,
                    userContext.language,
                  )}{' '}
                </Text>
              </Field>
            </DataBox>

            <BoxControl>
              <Form
                method='PATCH'
                onChange={(event) => handleChangeForm(event, resume?.id)} // Pass resumeId to handleChangeForm
                preventScrollReset
              >
                <input type='hidden' name='id' value={resume?.id} />
                <input type='hidden' name='action' value='published' />
                <input type='hidden' name='publish' value={resume?.published ? 'false' : 'true'} />
                <input
                  type='hidden'
                  name='checkFields'
                  value={checkCompleteness(resume)?.toString()}
                />

                <Switcher
                  checked={Boolean(resume?.published)}
                  htmlLabel={resume?.id}
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
                  onClick={() => handleClickDelete(resume?.id)}
                >
                  <Icon name={IconEnum.cart} color={theme.user.iconColor} />
                </Button>

                <Form method='POST' preventScrollReset style={{ width: 'fit-content' }}>
                  <input type='hidden' name='id' value={resume?.id} />
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

                <Link key={resume?.id} to={resume?.id || '#'}>
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
