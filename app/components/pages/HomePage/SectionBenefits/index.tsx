import { memo } from 'react';

import { Box } from '~/components/common/Box';
import SvgLogo from '~/components/common/Icons/Logo';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp } from '~/hooks';

import {
  BenefitFrame,
  BenefitHeader,
  BenefitsWrapper,
  BenefitText,
  TextContainer,
  WrapperBanner,
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
      header: 'Free servises for all customers',
      body: 'In this difficult time we decided to support the employer and the employee and will not charge for any using services',
    },
    {
      header: 'Jobs outside Bangkok matter',
      body: 'We are working with employers in all the provinces so the people living outside Bangkok have an opportunity to know about new vacancies in their city',
    },
    {
      header: 'Safety to find a job',
      body: 'Find a job without leaving your home. Take care of your health and the health of your family',
    },
    {
      header: 'Covid safety rules',
      body: "Remember to follow the rules. Wear a mask, wash your hands, don't leave the house unnecessarily",
    },
  ];

  return (
    <Box width='100%' flexDirection='column'>
      <WrapperBanner lang={userContext?.language} />
      <WrapperSection>
        <TextContainer>
          <SvgLogo color={theme.navbar.logoColor} />
          <Text
            variant={TextVariantEnum.textHeading1}
            color={theme.mainPage.benefitHeadingMobileColor}
          >
            {t('home:the_best_vacancies_are_only_with_us')}
          </Text>
          <Text
            variant={TextVariantEnum.textBody2medium}
            style={{ marginTop: '8px', marginBottom: '32px' }}
          >
            {t('home:convenient_service_for_finding_a_job')}
          </Text>
        </TextContainer>
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
