import type { Resume } from 'shared/v2/resumes';

import { Box } from '~/components/common/Box';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { BoxHeading, HeadingInformation } from '~/components/ui/Card';
import { DataBox } from '~/components/ui/DataBox';
import { useApp, useScreenWidth } from '~/hooks';
import { PageVariantEnum } from '~/types/enums/pageVariantEnum';
import { ResponseCardVariantEnum } from '~/types/enums/responseCardVariantEnum';
import { getImageUrl, getSalary, getValueLang } from '~/utils/helpers';

export function ResumePartCardHeading({
  resume,
  variant,
  variantResponseCard,
}: {
  resume?: Resume;
  variant?: PageVariantEnum;
  variantResponseCard?: ResponseCardVariantEnum;
}): JSX.Element {
  const { theme, userContext } = useApp();
  const widthScreen = useScreenWidth();

  return (
    <>
      <BoxHeading pageVariant={variant} variantResponseCard={variantResponseCard}>
        {(variant !== 'response' ||
          (widthScreen < 768 && variantResponseCard === ResponseCardVariantEnum.main)) && (
          <img src={getImageUrl(resume?.general_information?.photo_uri)} alt='avatar' />
        )}
        <HeadingInformation variantResponseCard={variantResponseCard}>
          <Box flexDirection='column' gap={widthScreen < 768 ? '4px' : '8px'}>
            <Text className='title' variant={TextVariantEnum.textHeading2}>
              {resume?.job_position?.position}
            </Text>
            <Text variant={TextVariantEnum.textBody1medium} color={theme.user.descriptionTextColor}>
              {getValueLang(resume?.job_position?.specialization_name, userContext.language)}
            </Text>
          </Box>
          {widthScreen >= 768 &&
            (resume?.job_position?.salary_fixed ||
              (resume?.job_position?.salary_from && resume?.job_position?.salary_to)) && (
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
      {widthScreen < 768 &&
        (resume?.job_position?.salary_fixed ||
          (resume?.job_position?.salary_from && resume?.job_position?.salary_to)) && (
          <DataBox
            borderTop={variantResponseCard !== ResponseCardVariantEnum.heading}
            pageVariant={variant}
            borderBottom={
              widthScreen < 768 &&
              variant === PageVariantEnum.response &&
              variantResponseCard !== ResponseCardVariantEnum.heading
            }
          >
            <Box>
              {resume?.job_position?.salary_from && resume?.job_position?.salary_to ? (
                <Text className='price' variant={TextVariantEnum.textHeading3}>
                  {resume?.job_position?.salary_from} - {resume?.job_position?.salary_to}
                  &nbsp;
                  {getSalary(
                    resume?.job_position?.currency_name?.en,
                    resume?.job_position?.salary_payout_period_name?.en,
                    userContext.language,
                  )}
                </Text>
              ) : (
                <Text className='price' variant={TextVariantEnum.textHeading3}>
                  {resume?.job_position?.salary_fixed}&nbsp;
                  {getSalary(
                    resume?.job_position?.currency_name?.en,
                    resume?.job_position?.salary_payout_period_name?.en,
                    userContext.language,
                  )}
                </Text>
              )}
            </Box>
          </DataBox>
        )}
    </>
  );
}
