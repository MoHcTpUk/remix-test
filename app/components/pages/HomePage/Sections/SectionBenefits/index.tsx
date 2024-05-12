import { Link } from '@remix-run/react';
import { memo } from 'react';
import routes from 'shared/routing/routes';

import { Box } from '~/components/common/Box';
import Button from '~/components/common/Button';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';

import {
  BenefitFrame,
  BenefitHeader,
  BenefitsWrapper,
  BenefitText,
  BoxBenefits,
  ContentWrapper,
  MainBlockWrapper,
  OwnerInfoWrapper,
  OwnerWrapper,
  QuoteWrapper,
  SliderContentWrapper,
  SliderWrapper,
  SloganWrapper,
  TitleContainer,
  WrapperSection,
} from './styles';

interface IBenefits {
  header: string;
  body: string;
}

export const SectionBenefits = memo((): JSX.Element => {
  const { theme, t, userContext } = useApp();

  const benefits: IBenefits[] = [
    {
      header: `${t('home:free_servises_for_all_customers')}`,
      body: `${t('home:in_this_difficult_time_we_decided_to_support_the_employer')}`,
    },
    {
      header: `${t('home:jobs_outside_bangkok_matter')}`,
      body: `${t('home:we_are_working_with_employers_in_all_the_provinces')}`,
    },
    {
      header: `${t('home:safety_to_find_a_job')}`,
      body: `${t('home:find_a_job_without_leaving_your_home')}`,
    },
    {
      header: `${t('home:covid_safety_rules')}`,
      body: `${t('home:remember_to_follow_the_rules')}`,
    },
  ];

  return (
    <Box width='100%' max-width='1200px' flexDirection='column'>
      <WrapperSection>
        <MainBlockWrapper>
          <TitleContainer>
            <Text color={theme.mainPage.titleColor} variant={TextVariantEnum.textHeading1}>
              {t('home:the_best_vacancies_are_only_with_us')}
            </Text>
            <Text variant={TextVariantEnum.textBody2medium} color={theme.mainPage.titleColor}>
              {t('home:efficient_and_fast_service_for_finding_jobs_and_employees')}
            </Text>
          </TitleContainer>

          <ContentWrapper>
            <BoxBenefits>
              <img src='/images/homePage/workerSectionBenefits.png' alt='Worker' />
            </BoxBenefits>
            <SloganWrapper>
              <Text variant={TextVariantEnum.textHeading3} color={theme.mainPage.titleColor}>
                {t('home:starting_with_upjob')}
              </Text>
              <Text variant={TextVariantEnum.textBody2} color={theme.сards.descriptionTextColor}>
                {t('home:efficient_and_fast_service_for_finding_jobs_and_employees')}
              </Text>
            </SloganWrapper>

            <QuoteWrapper>
              <OwnerWrapper>
                <img src='/images/homePage/ownerAvatar.png' alt='Owner' />
                <OwnerInfoWrapper>
                  <Text variant={TextVariantEnum.textBody2medium} color={theme.mainPage.titleColor}>
                    First Name Last Name
                  </Text>
                  <Text
                    variant={TextVariantEnum.textBody2}
                    color={theme.сards.descriptionTextColor}
                  >
                    {t('home:upjob_owner')}
                  </Text>
                </OwnerInfoWrapper>
              </OwnerWrapper>
              <Text variant={TextVariantEnum.textHeading3} color={theme.mainPage.titleColor}>
                Lorem ipsum dolor sit amet consectetur. Sit et eget sed pharetra accumsan non.
              </Text>
            </QuoteWrapper>

            <SliderWrapper>
              <SliderContentWrapper>
                <Text variant={TextVariantEnum.textHeading3} color='#fff'>
                  {t('home:starting_with_upjob_is_easy_and_free')}
                </Text>
                {!userContext.user?.isAuthenticated && (
                  <Link to={routes.auth.register.root}>
                    <Button priority='primary' size='S'>
                      <Text variant={TextVariantEnum.textBody2}>
                        {' '}
                        {t('home:join_upjob_for_free')}
                      </Text>
                    </Button>
                  </Link>
                )}
              </SliderContentWrapper>
            </SliderWrapper>
          </ContentWrapper>
        </MainBlockWrapper>

        <BenefitsWrapper>
          {benefits.map((benefit) => (
            <BenefitFrame key={benefit.body}>
              <BenefitHeader variant={TextVariantEnum.textHeading3}>{benefit.header}</BenefitHeader>
              <BenefitText variant={TextVariantEnum.textBody2}>{benefit.body}</BenefitText>
            </BenefitFrame>
          ))}
        </BenefitsWrapper>
      </WrapperSection>
    </Box>
  );
});
