import type { Resume } from 'shared/v2/resumes';

import { Box } from '~/components/common/Box';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { BoxHeading, HeadingInformation } from '~/components/ui/Card';
import { BoxAvatar } from '~/components/ui/Card/BoxAvatar';
import { DataBox } from '~/components/ui/DataBox';
import { useApp, useScreenWidth } from '~/hooks';
import { EntityVariantEnum } from '~/types/enums/entityVariantEnum';
import { SizeCardVariantEnum } from '~/types/enums/sizeCardVariantEnum';
import { DEFAULT_USER_AVATAR } from '~/utils/constants';
import { getSalary, getImageUrl } from '~/utils/helpers.client';

export function ResumeFullCardHeading({ resume }: { resume?: Resume }): JSX.Element {
  const { theme, userContext } = useApp();
  const widthScreen = useScreenWidth();

  return (
    <>
      <BoxHeading
        variant={EntityVariantEnum.resume}
        className='fullCard'
        sizeVariant={SizeCardVariantEnum.full}
      >
        <BoxAvatar variant='search'>
          <img
            src={
              resume?.general_information?.photo_uri
                ? getImageUrl(resume?.general_information?.photo_uri)
                : DEFAULT_USER_AVATAR
            }
            alt='company logo'
          />
        </BoxAvatar>

        <HeadingInformation variant={EntityVariantEnum.resume}>
          <Text variant={TextVariantEnum.textHeading2} className='title'>
            {`${resume?.general_information?.first_name || ''} ${
              resume?.general_information?.last_name || ''
            }`}
          </Text>

          <Text variant={TextVariantEnum.textBody1medium} color={theme.user.descriptionTextColor}>
            {resume?.job_position?.position}
          </Text>

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
          <DataBox variantSize={SizeCardVariantEnum.full} borderBottom={widthScreen < 768}>
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
