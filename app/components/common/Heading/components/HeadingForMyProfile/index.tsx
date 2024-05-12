import { styled } from 'styled-components';

import { Box } from '~/components/common/Box';
import { Icon } from '~/components/common/Icon';
import ProgressBar from '~/components/common/ProgressBar';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import ButtonCreate from '~/components/entities/ButtonCreate';
import { useApp } from '~/hooks';
import { IconEnum } from '~/types/enums/iconEnum';
import { DEFAULT_USER_AVATAR } from '~/utils/constants';
import { getImageUrl } from '~/utils/helpers.client';

import {
  ButtonsControl,
  DesktopProfile,
  InformationBox,
  LeftBoxProfile,
  MobileBox,
} from '../../styles';

export const AvatarBox = styled.div`
  width: 124px;
  height: 124px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.user.borderAvatar};

  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export function HeadingForMyProfile({
  isId,
  variantCreate,
  setVariantCreate,
  setSelectionCreate,
}: {
  isId: boolean;
  variantCreate: 'vacancy' | 'resume';
  setVariantCreate: (value: 'vacancy' | 'resume') => void;
  setSelectionCreate: (value: boolean) => void;
}) {
  const { theme, t, userContext } = useApp();

  return (
    <Box width='100%'>
      <MobileBox>
        <Text
          className='title'
          variant={TextVariantEnum.textHeading3}
          color={theme.user.headingTextColor}
        >
          {t('user:my_profile')}
        </Text>
        <ButtonsControl>
          <ButtonCreate
            variant='resume'
            setVariantCreate={setVariantCreate}
            setSelectionCreate={setSelectionCreate}
          />

          <ButtonCreate
            variant='vacancy'
            priority='primary'
            setVariantCreate={setVariantCreate}
            setSelectionCreate={setSelectionCreate}
          />
        </ButtonsControl>
      </MobileBox>
      <DesktopProfile>
        <LeftBoxProfile>
          <AvatarBox>
            <img
              style={{}}
              src={
                userContext.user.avatar ? getImageUrl(userContext.user.avatar) : DEFAULT_USER_AVATAR
              }
              alt='avatar'
            />
          </AvatarBox>
          <InformationBox>
            <Text variant={TextVariantEnum.textHeading3} color={theme.user.headingTextColor}>
              {`${userContext.user.firstName || ''} ${userContext.user.lastName || ''}`}
            </Text>
            <Box flexDirection='row' gap='4px' alignItems='center'>
              <Icon
                name={userContext.user.isEmailConfirm ? IconEnum.verifed : IconEnum.notVerifed}
              />
              <Text variant={TextVariantEnum.textBody2medium} color={theme.user.headingTextColor}>
                {userContext.user.email}
              </Text>
            </Box>

            <Box flexDirection='column' width='210px' gap='4px'>
              <Box flexDirection='row' width='100%' justifyContent='space-between'>
                <Text variant={TextVariantEnum.textBody2medium} color={theme.user.headingTextColor}>
                  {t('user:profile_completeness')}
                </Text>
                <Text
                  variant={TextVariantEnum.textBody2medium}
                  color={theme.user.headingTextColor}
                >{`${userContext.user.progressInfo || ''}%`}</Text>
              </Box>
              <ProgressBar percent={userContext.user.progressInfo} />
            </Box>
          </InformationBox>
        </LeftBoxProfile>
        <Box flexDirection='column' justifyContent='space-between' alignItems='flex-end'>
          <Text
            className='title'
            variant={TextVariantEnum.textHeading3}
            color={theme.user.headingTextColor}
          >
            {t('user:my_profile')}
          </Text>
          <ButtonsControl>
            <ButtonCreate
              variant='resume'
              setVariantCreate={setVariantCreate}
              setSelectionCreate={setSelectionCreate}
            />

            <ButtonCreate
              variant='vacancy'
              priority='primary'
              setVariantCreate={setVariantCreate}
              setSelectionCreate={setSelectionCreate}
            />
          </ButtonsControl>
        </Box>
      </DesktopProfile>
    </Box>
  );
}
