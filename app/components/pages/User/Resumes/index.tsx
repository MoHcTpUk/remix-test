import { Link, useFetcher } from '@remix-run/react';
import { IconEnum } from 'public/enums/iconEnum';
import { ChangeEvent, memo } from 'react';
import type { EntityCommonDictionary, EntityResume } from 'shared/client/data-contracts';
import styled from 'styled-components';

import { Box } from '~/components/common/Box';
import Button from '~/components/common/Button';
import { Icon } from '~/components/common/Icon';
import { Switcher } from '~/components/common/Switcher';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';
import {
  calculateAge,
  calculateTotalDurationWorkExperience,
  getValueFromDictionaries,
} from '~/utils/helpers';

import { BoxCard } from '../components/Card';
import { Heading } from '../components/Heading';
import { WrapperContainer } from '../components/Wrapper';

export const BoxHeading = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: flex-start;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.user.borderColor};
  img {
    width: 96px;
    height: 96px;
  }
`;

export const HeadingInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
`;

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.user.borderColor};
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const BoxControl = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SwitcherBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.user.borderColor};
`;

export const BoxLabel = styled.div`
  cursor: pointer;
`;

export const BoxButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding-top: 16px;
  justify-content: center;
`;

export const ResumesComponent = memo(
  ({
    resumes,
    dictionaries,
  }: {
    resumes?: EntityResume[] | null;
    dictionaries: {
      genders: EntityCommonDictionary[];
      specializations: EntityCommonDictionary[];
      location: EntityCommonDictionary[];
    };
  }): JSX.Element => {
    const { theme, t, userContext } = useApp();
    console.log(resumes);
    console.log(dictionaries);
    const publishFetcher = useFetcher();

    // const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    //   e.preventDefault();
    // }

    return (
      <WrapperContainer>
        <Heading variant='resumes' title={t('user:my_resumes')} />

        {resumes?.map((resume) => (
          <Link key={resume.id} to={resume?.id || '#'}>
            <BoxCard>
              <BoxHeading>
                <img
                  src={
                    resume.information?.photo
                      ? `https://upjob.com/m/${resume.information?.photo || ''}`
                      : '/images/user/avatarDefault.png'
                  }
                  alt='avatar'
                />

                <HeadingInformation>
                  <Text variant={TextVariantEnum.textHeading2}>{resume.jobPosition?.position}</Text>
                  <Text
                    variant={TextVariantEnum.textBody1medium}
                    color={theme.user.descriptionTextColor}
                  >
                    {getValueFromDictionaries(
                      dictionaries.specializations,
                      resume.jobPosition?.specialization,
                      userContext.language,
                    )}
                  </Text>
                  {resume.jobPosition?.salary?.fixed && (
                    <Text variant={TextVariantEnum.textBody1}>
                      ฿{resume.jobPosition?.salary?.fixed}
                    </Text>
                  )}
                </HeadingInformation>
              </BoxHeading>

              <MainBox>
                <Field>
                  <Text variant={TextVariantEnum.textBody2} color={theme.user.descriptionTextColor}>
                    {t('user:city')}
                  </Text>
                  <Text variant={TextVariantEnum.textBody2medium}>
                    {getValueFromDictionaries(
                      dictionaries.location,
                      resume.location?.city,
                      userContext.language,
                    )}
                  </Text>
                </Field>
                <Field>
                  <Text variant={TextVariantEnum.textBody2} color={theme.user.descriptionTextColor}>
                    {t('user:age')}
                  </Text>
                  <Text variant={TextVariantEnum.textBody2medium}>
                    {calculateAge(resume?.information?.birthday)}
                  </Text>
                </Field>
                <Field>
                  <Text variant={TextVariantEnum.textBody2} color={theme.user.descriptionTextColor}>
                    {t('user:work_experience')}
                  </Text>
                  <Text variant={TextVariantEnum.textBody2medium}>
                    {calculateTotalDurationWorkExperience(resume?.workExperience)}
                  </Text>
                </Field>
              </MainBox>

              <BoxControl>
                <publishFetcher.Form>
                  <SwitcherBox>
                    <Switcher
                      // onChange={handleOnChange}
                      checked={resume?.published}
                      htmlLabel='i_published'
                      name='published'
                    />
                    <BoxLabel
                      style={{ cursor: 'pointer' }}
                      // lang={LanguageEnum.EN}
                      // selectedLang={userContext?.language ?? ''}
                      // onClick={() => setLang(LanguageEnum.EN)}
                    >
                      <Text
                        color={
                          resume?.published
                            ? theme.switcher.backgroundTogglerColor
                            : theme.defaultTextColor
                        }
                      >
                        {t('user:published')}
                      </Text>
                    </BoxLabel>
                  </SwitcherBox>
                  <BoxButtons>
                    <Button className='icon' priority='small' onlyIcon>
                      <Icon name={IconEnum.copy} color={theme.user.iconColor} />
                    </Button>
                    <Button className='icon' priority='small' onlyIcon>
                      <Icon name={IconEnum.pensil} color={theme.user.iconColor} />
                    </Button>
                    <Button className='icon' priority='small' onlyIcon>
                      <Icon name={IconEnum.cart} color={theme.user.iconColor} />
                    </Button>
                  </BoxButtons>
                </publishFetcher.Form>
              </BoxControl>
            </BoxCard>
          </Link>
        ))}
      </WrapperContainer>
    );
  },
);
