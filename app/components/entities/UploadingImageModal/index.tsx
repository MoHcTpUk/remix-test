/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-nested-ternary */

import { Link } from '@remix-run/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import Dropzone from 'react-dropzone';
import Webcam from 'react-webcam';
import routes from 'shared/routing/routes';

import { Box } from '~/components/common/Box';
import Button from '~/components/common/Button';
import { Icon } from '~/components/common/Icon';
import SvgClose from '~/components/common/Icons/Close';
import SvgLogo from '~/components/common/Icons/Logo';
import {
  Background,
  ModalCloseButton,
  ModalContainer,
  ModalInner,
} from '~/components/common/Modal/styles';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { ModalBox } from '~/components/ui/ModalBox';
import { useApp, useRouteChecks } from '~/hooks';
import { IconEnum } from '~/types/enums/iconEnum';
import { VariantModalEnum } from '~/types/enums/variantModalEnum';
import { DEFAULT_COMPANY_LOGO, DEFAULT_USER_AVATAR } from '~/utils/constants';

import {
  ButtonsContainer,
  ContainerUploading,
  DesktopAvatarEditor,
  HeaderWrapper,
  Image,
  LogoWrapper,
  MobileAvatarEditor,
  ModalHeader,
  Scale,
  TextContainer,
  WrapperUploading,
} from './styles';

interface UploadingImageModalProps {
  defaultImage: string;
  setDefaultImage: (image: string) => void;
  visibility: boolean;
  setVisibility: (visibility: boolean) => void;
}

export function UploadingImageModal({
  defaultImage,
  setDefaultImage,
  visibility,
  setVisibility,
}: UploadingImageModalProps) {
  const [originalImage, setOriginalImage] = useState<string>(defaultImage);
  const [image, setImage] = useState<string>(defaultImage);
  const [editor, setEditor] = useState<AvatarEditor | Webcam | null>(null);
  const [showCamera, setShowCamera] = useState<boolean>(false);
  const [showEditor, setShowEditor] = useState<boolean>(false);
  const [rotation, setRotation] = useState<number>(0);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState<boolean>(false);
  const [zoom, setZoom] = useState<number>(1);
  const { isUserCompany } = useRouteChecks();

  const onSave = (image: string) => {
    setImage(image);
    setDefaultImage(image);
    setVisibility(false);
  };

  const handleDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setOriginalImage(reader.result as string);
      setImage(reader.result as string);
      setShowEditor(true);
    };
  };

  const handleDelete = () => {
    setShowDeleteConfirmation(true);
    setDefaultImage(defaultImage);
  };

  const handleConfirmDelete = () => {
    setOriginalImage('');
    setImage('');
    onSave('');
    setShowEditor(false);
    setRotation(0);
    setShowDeleteConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  const handleLoadFromGallery = () => {
    // Implement loading from gallery logic here
    setRotation(0);
  };

  const handleTakePhoto = () => {
    setShowCamera(true);
  };

  const handleCancelCamera = () => {
    setShowCamera(false);
  };

  const handleSavePhoto = () => {
    const screenshot = (editor as Webcam)?.getScreenshot();
    setOriginalImage(screenshot || '');
    setImage(screenshot || '');
    setShowCamera(false);
    setShowEditor(true);
  };

  // const handleRotateLeft = () => {
  //   setRotation(rotation - 90);
  // };

  const handleRotateRight = () => {
    setRotation(rotation + 90);
  };

  const handleSave = () => {
    const canvasScaled = (editor as AvatarEditor).getImageScaledToCanvas();
    const newImage = canvasScaled.toDataURL('image/jpeg');
    onSave(newImage);
    setShowEditor(false);
  };

  const handleBack = () => {
    setImage(defaultImage);
    setShowEditor(false);
    setRotation(0);
  };

  const imageStyle = {
    transform: `rotate(${rotation}deg)`,
  };

  const { theme, t } = useApp();

  useEffect(() => {
    document.body.classList.toggle('has-modal', visibility);
  }, [visibility]);

  return (
    <AnimatePresence>
      {visibility && (
        <>
          <Background>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgb(63 63 70)',
                zIndex: 998,
              }}
            />
          </Background>
          <ModalContainer variant={VariantModalEnum.uploading}>
            <ModalInner
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              variant={VariantModalEnum.uploading}
            >
              {showDeleteConfirmation && (
                <>
                  <ModalHeader>
                    <HeaderWrapper>
                      <Box onClick={handleCancelDelete} style={{ cursor: 'pointer' }}>
                        <Icon name={IconEnum.arrowLeft} />
                      </Box>
                      <Link to={routes.root}>
                        <LogoWrapper>
                          <SvgLogo color={theme.navbar.logoColor} />
                        </LogoWrapper>
                      </Link>
                      <ModalCloseButton
                        type='button'
                        onClick={() => setVisibility(!visibility)}
                        variant='withHeader'
                        style={{ position: 'static' }}
                      >
                        <SvgClose color={theme.modal.svgColor} />
                      </ModalCloseButton>
                    </HeaderWrapper>
                  </ModalHeader>
                  <WrapperUploading>
                    <ContainerUploading>
                      <TextContainer>
                        <Text variant={TextVariantEnum.textHeading2}>
                          {t('user:delete_picture')}
                        </Text>
                        <Text variant={TextVariantEnum.textBody1medium}>
                          {t(
                            'user:if_you_delete_the_picture_it_will_be_replaced_with_the_default_picture',
                          )}
                        </Text>
                      </TextContainer>
                      <Image src={image} alt='Delete' />
                      <ButtonsContainer>
                        <Button priority='secondary' onClick={handleCancelDelete} fullwidth>
                          <Text variant={TextVariantEnum.textBody2}>{t('common:cancel')}</Text>
                        </Button>
                        <Button priority='primary' onClick={handleConfirmDelete} fullwidth>
                          <Text variant={TextVariantEnum.textBody2}>{t('common:delete')}</Text>
                        </Button>
                      </ButtonsContainer>
                    </ContainerUploading>
                  </WrapperUploading>
                </>
              )}

              {showCamera && (
                <>
                  <ModalHeader>
                    <HeaderWrapper>
                      <Box onClick={handleCancelCamera} style={{ cursor: 'pointer' }}>
                        <Icon name={IconEnum.arrowLeft} />
                      </Box>
                      <Link to={routes.root}>
                        <LogoWrapper>
                          <SvgLogo color={theme.navbar.logoColor} />
                        </LogoWrapper>
                      </Link>
                      <ModalCloseButton
                        type='button'
                        onClick={() => setVisibility(!visibility)}
                        variant='withHeader'
                        style={{ position: 'static' }}
                      >
                        <SvgClose color={theme.modal.svgColor} />
                      </ModalCloseButton>
                    </HeaderWrapper>
                  </ModalHeader>
                  <WrapperUploading>
                    <ContainerUploading>
                      <TextContainer>
                        <Text variant={TextVariantEnum.textHeading2}>{t('user:new_picture')}</Text>
                      </TextContainer>
                      <Webcam
                        audio={false}
                        screenshotFormat='image/jpeg'
                        width={640}
                        height={480}
                        ref={(webcam) => setEditor(webcam)}
                      />
                      <ButtonsContainer>
                        <Button priority='primary' onClick={handleSavePhoto} fullwidth>
                          <Text variant={TextVariantEnum.textBody2}>{t('user:take_photo')}</Text>
                        </Button>
                        <Button priority='secondary' onClick={handleCancelCamera} fullwidth>
                          <Text variant={TextVariantEnum.textBody2}>{t('common:cancel')}</Text>
                        </Button>
                      </ButtonsContainer>
                    </ContainerUploading>
                  </WrapperUploading>
                </>
              )}

              {showEditor && (
                <>
                  <ModalHeader>
                    <HeaderWrapper>
                      <Box onClick={handleBack} style={{ cursor: 'pointer', padding: '10px' }}>
                        <Icon name={IconEnum.arrowLeft} />
                      </Box>
                      <Link to={routes.root}>
                        <LogoWrapper>
                          <SvgLogo color={theme.navbar.logoColor} />
                        </LogoWrapper>
                      </Link>
                      <ModalCloseButton
                        type='button'
                        onClick={() => setVisibility(!visibility)}
                        variant='withHeader'
                        style={{ position: 'static' }}
                      >
                        <SvgClose color={theme.modal.svgColor} />
                      </ModalCloseButton>
                    </HeaderWrapper>
                  </ModalHeader>
                  <WrapperUploading>
                    <ContainerUploading>
                      <TextContainer>
                        <Text variant={TextVariantEnum.textHeading2}>{t('user:new_picture')}</Text>
                        <Text variant={TextVariantEnum.textBody1medium}>
                          {t('user:you_can_adjust_the_picture_zoom_crop_or_rotate')}
                        </Text>
                      </TextContainer>
                      <MobileAvatarEditor>
                        <AvatarEditor
                          image={image}
                          width={224}
                          height={224}
                          border={50}
                          color={[255, 255, 255, 0.6]} // RGBA
                          rotate={rotation}
                          scale={zoom}
                          borderRadius={112}
                          ref={(editor) => setEditor(editor)}
                        />
                        <Scale
                          name='scale'
                          type='range'
                          min={1}
                          max={3}
                          step={0.01}
                          value={zoom}
                          onChange={(e) => setZoom(parseFloat(e.target.value))}
                        />
                      </MobileAvatarEditor>
                      <DesktopAvatarEditor>
                        <AvatarEditor
                          image={image}
                          width={280}
                          height={280}
                          border={50}
                          color={[255, 255, 255, 0.6]} // RGBA
                          rotate={rotation}
                          scale={zoom}
                          borderRadius={140}
                          ref={(editor) => setEditor(editor)}
                        />
                        <Scale
                          name='scale'
                          type='range'
                          min={1}
                          max={3}
                          step={0.01}
                          value={zoom}
                          onChange={(e) => setZoom(parseFloat(e.target.value))}
                        />
                      </DesktopAvatarEditor>
                      {/* <Image src={image} alt='Delete' width='150' height='150' /> */}

                      {/* <div style={imageStyle}>
                        <button onClick={handleRotateLeft}>Rotate left</button>
                        <button onClick={handleRotateRight}>Rotate right</button>
                      </div> */}
                      <ButtonsContainer>
                        <Button priority='secondary' onClick={handleRotateRight} fullwidth>
                          <Text variant={TextVariantEnum.textBody2}>
                            {t('user:rotate_picture')}
                          </Text>
                        </Button>
                        <Button priority='primary' onClick={handleSave} fullwidth>
                          <Text variant={TextVariantEnum.textBody2}>
                            {t('user:save_as_picture')}
                          </Text>
                        </Button>
                      </ButtonsContainer>
                    </ContainerUploading>
                  </WrapperUploading>
                </>
              )}

              {!showDeleteConfirmation && !showCamera && !showEditor && (
                <>
                  <ModalHeader>
                    <Link to={routes.root}>
                      <LogoWrapper>
                        <SvgLogo color={theme.navbar.logoColor} />
                      </LogoWrapper>
                    </Link>
                    <ModalCloseButton type='button' onClick={() => setVisibility(!visibility)}>
                      <SvgClose color={theme.modal.svgColor} />
                    </ModalCloseButton>
                  </ModalHeader>
                  <WrapperUploading>
                    <ContainerUploading>
                      <TextContainer>
                        <Text variant={TextVariantEnum.textHeading2}>{t('user:edit_picture')}</Text>
                        <Text variant={TextVariantEnum.textBody1medium}>
                          {t('user:choose_a_photo_from_the_album_or_use_the_camera')}
                        </Text>
                      </TextContainer>
                      <Image
                        src={image || (isUserCompany ? DEFAULT_COMPANY_LOGO : DEFAULT_USER_AVATAR)}
                        alt='Delete'
                      />
                      <ButtonsContainer>
                        {originalImage !== DEFAULT_USER_AVATAR &&
                          originalImage !== DEFAULT_COMPANY_LOGO && (
                            <Button priority='secondary' onClick={handleDelete} fullwidth>
                              <Text variant={TextVariantEnum.textBody2}>{t('common:delete')}</Text>
                            </Button>
                          )}
                        <Button priority='primary' onClick={handleTakePhoto} fullwidth>
                          <Text variant={TextVariantEnum.textBody2}>
                            {t('user:take_photo_with_camera')}
                          </Text>
                        </Button>
                        <Dropzone onDrop={handleDrop}>
                          {({ getRootProps, getInputProps }) => (
                            <div {...getRootProps()} style={{ width: '100%' }}>
                              <input {...getInputProps()} name='file' />
                              <Button priority='primary' onClick={handleLoadFromGallery} fullwidth>
                                <Text variant={TextVariantEnum.textBody2}>
                                  {t('user:photo_library')}
                                </Text>
                              </Button>
                            </div>
                          )}
                        </Dropzone>
                      </ButtonsContainer>
                    </ContainerUploading>
                  </WrapperUploading>
                </>
              )}
            </ModalInner>
            <ModalBox onClick={() => setVisibility(!visibility)} />
          </ModalContainer>
        </>
      )}
    </AnimatePresence>
  );
}
