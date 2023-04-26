import type { ActionArgs, LoaderArgs } from '@remix-run/cloudflare';
import { json, redirect } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { motion } from 'framer-motion';
import { NameCardEnum } from 'public/enums/stateCardEnum';
import { useState } from 'react';
import type { EntityResume } from 'shared/client/data-contracts';
import { Resumes } from 'shared/client/Resumes';
import styled from 'styled-components';

import { Box } from '~/components/common/Box';
import { Button } from '~/components/common/Button/styles';
import { CheckBox } from '~/components/common/Checkbox';
import { Input } from '~/components/common/Input';
import { Select } from '~/components/common/Select';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { CommonLayout } from '~/components/layouts/CommonLayout';
import { BoxCard } from '~/components/pages/User/components/Card';
import { DataField } from '~/components/pages/User/components/DataFIeld';
import { WrapperContainer } from '~/components/pages/User/components/Wrapper';
import { ResumesComponent } from '~/components/pages/User/Resumes';
import { useApp } from '~/hooks';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BoxPicture = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const BoxAvatar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  img {
    width: 96px;
    height: 96px;
  }
`;

export const BoxFields = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
`;

export const loader = async ({ params, context }: LoaderArgs) => {
  if (!context.userContext.user.isAuthenticated) {
    return redirect('/', {
      status: 302,
    });
  }

  const resumeId = params.id;

  const [genders, specializations, location] = await Promise.all([
    context.references.gendersMap,
    context.references.specializationsMap,
    context.references.locationMap,
  ]);

  const dictionaries = {
    genders: Array.from(genders),
    specializations: Array.from(specializations),
    location: Array.from(location),
  };

  const client = new Resumes();
  await client.auth(context.session);

  // console.log(await client.resumesDetail(resumeId || ''));

  // const resume = await client.resumesDetail(resumeId || '');
  const resume = {};

  return json({ resume, dictionaries });
};

export default function Index() {
  const request = useLoaderData<typeof loader>();
  // const resume = request.resume
  const { dictionaries } = request;
  const { t, userContext } = useApp();

  const [editCard, setEditCard] = useState(NameCardEnum.all);

  return (
    <CommonLayout>
      <WrapperContainer>
        <Box width='100%' flexDirection='column'>
          {editCard === NameCardEnum.all && (
            <BoxCard
              title={t('user:personal_information')}
              withEditButton
              nameCard={NameCardEnum.information}
              editCard={editCard}
              setEditCard={setEditCard}
            >
              <CardContainer
                as={motion.div}
                initial={{ x: '100%' }}
                animate={{
                  x: 0,
                }}
                exit={{
                  x: '100%',
                }}
                transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              >
                <DataField label={t('user:first_name')} />
                <DataField label={t('user:last_name')} />
                <DataField label={t('user:gender')} />
                <DataField label={t('user:date_of_birth')} />
                <DataField label={t('user:email')} />
                <DataField label={t('user:phone')} />
                <DataField label={t('user:language_of_notify')} />
              </CardContainer>
            </BoxCard>
          )}

          {editCard === NameCardEnum.information && (
            <BoxCard
              title={t('user:personal_information')}
              withEditButton
              nameCard={NameCardEnum.information}
              editCard={editCard}
              setEditCard={setEditCard}
            >
              <CardContainer
                as={motion.div}
                initial={{ x: '100%' }}
                animate={{
                  x: 0,
                }}
                exit={{
                  x: '100%',
                }}
                transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              >
                <BoxPicture>
                  <Text variant={TextVariantEnum.textBody1medium}>{t('user:profile_picture')}</Text>
                  <BoxAvatar>
                    <img src='/images/user/avatarDefault.png' alt='avatar' />
                    <Button priority='small' fullwidth>
                      <Text> {t('user:edit_photo')}</Text>
                    </Button>
                  </BoxAvatar>
                </BoxPicture>
                <BoxFields>
                  <Input placeholder={t('user:first_name')} id='i_firstName' name='firstName' />
                  <Input placeholder={t('user:last_name')} id='i_lastName' name='lastName' />
                  <Select
                    values={['test', 'test1', 'test2', 'test3', 'test4', 'test5']}
                    entries={[
                      ['1', 'test1-1'],
                      ['2', 'test2-1'],
                      ['3', 'test3-1'],
                      ['4', 'test4-1'],
                      ['5', 'test5-1'],
                    ]}
                    placeholder={t('user:gender')}
                    id='i_gender'
                    name='gender'
                  />
                  <Select
                    values={['test', 'test1', 'test2', 'test3', 'test4', 'test5']}
                    entries={[
                      ['1', 'test1-1'],
                      ['2', 'test2-1'],
                      ['3', 'test3-1'],
                      ['4', 'test4-1'],
                      ['5', 'test5-1'],
                    ]}
                    placeholder={t('user:date_of_birth')}
                    id='i_dateOfBirth'
                    name='birthday'
                  />
                  <Input placeholder={t('user:email')} id='i_email' name='email' />
                  <Input placeholder={t('user:phone')} id='i_phone' name='phone' />
                  <Select
                    values={['test', 'test1', 'test2', 'test3', 'test4', 'test5']}
                    entries={[
                      ['1', 'test1-1'],
                      ['2', 'test2-1'],
                      ['3', 'test3-1'],
                      ['4', 'test4-1'],
                      ['5', 'test5-1'],
                    ]}
                    placeholder={t('user:language_of_notify')}
                    id='i_languageOfNotify'
                    name='primaryLanguage'
                  />
                </BoxFields>
              </CardContainer>
            </BoxCard>
          )}

          {editCard === NameCardEnum.all && (
            <BoxCard
              title={t('user:location')}
              withEditButton
              nameCard={NameCardEnum.location}
              editCard={editCard}
              setEditCard={setEditCard}
            >
              <CardContainer
                as={motion.div}
                initial={{ x: '100%' }}
                animate={{
                  x: 0,
                }}
                exit={{
                  x: '100%',
                }}
                transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              >
                <DataField label={t('user:city')} />
                <DataField label={t('user:address')} />
                <DataField label={t('user:source')} />
                <DataField label={t('user:relocation')} />
                <CheckBox
                  name='business_trips'
                  label={t('user:business_trips')}
                  checked
                  onChange={() => null}
                />
              </CardContainer>
            </BoxCard>
          )}

          {editCard === NameCardEnum.location && (
            <BoxCard
              title={t('user:location')}
              withEditButton
              nameCard={NameCardEnum.location}
              editCard={editCard}
              setEditCard={setEditCard}
            >
              <CardContainer
                as={motion.div}
                initial={{ x: '100%' }}
                animate={{
                  x: 0,
                }}
                exit={{
                  x: '100%',
                }}
                transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              >
                <BoxPicture>
                  <Text variant={TextVariantEnum.textBody1medium}>{t('user:profile_picture')}</Text>
                  <BoxAvatar>
                    <img src='/images/user/avatarDefault.png' alt='avatar' />
                    <Button priority='small' fullwidth>
                      <Text> {t('user:edit_photo')}</Text>
                    </Button>
                  </BoxAvatar>
                </BoxPicture>
                <BoxFields>
                  <Input placeholder={t('user:first_name')} id='i_firstName' name='firstName' />
                  <Input placeholder={t('user:last_name')} id='i_lastName' name='lastName' />
                  <Select
                    values={['test', 'test1', 'test2', 'test3', 'test4', 'test5']}
                    entries={[
                      ['1', 'test1-1'],
                      ['2', 'test2-1'],
                      ['3', 'test3-1'],
                      ['4', 'test4-1'],
                      ['5', 'test5-1'],
                    ]}
                    placeholder={t('user:gender')}
                    id='i_gender'
                    name='gender'
                  />
                  <Select
                    values={['test', 'test1', 'test2', 'test3', 'test4', 'test5']}
                    entries={[
                      ['1', 'test1-1'],
                      ['2', 'test2-1'],
                      ['3', 'test3-1'],
                      ['4', 'test4-1'],
                      ['5', 'test5-1'],
                    ]}
                    placeholder={t('user:date_of_birth')}
                    id='i_dateOfBirth'
                    name='birthday'
                  />
                  <Input placeholder={t('user:email')} id='i_email' name='email' />
                  <Input placeholder={t('user:phone')} id='i_phone' name='phone' />
                  <Select
                    values={['test', 'test1', 'test2', 'test3', 'test4', 'test5']}
                    entries={[
                      ['1', 'test1-1'],
                      ['2', 'test2-1'],
                      ['3', 'test3-1'],
                      ['4', 'test4-1'],
                      ['5', 'test5-1'],
                    ]}
                    placeholder={t('user:language_of_notify')}
                    id='i_languageOfNotify'
                    name='primaryLanguage'
                  />
                </BoxFields>
              </CardContainer>
            </BoxCard>
          )}

          {editCard === NameCardEnum.all && (
            <BoxCard
              title={t('user:location')}
              withEditButton
              nameCard={NameCardEnum.jobPosition}
              editCard={editCard}
              setEditCard={setEditCard}
            >
              <CardContainer
                as={motion.div}
                initial={{ x: '100%' }}
                animate={{
                  x: 0,
                }}
                exit={{
                  x: '100%',
                }}
                transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              >
                <DataField label={t('user:specialization')} />
                <DataField label={t('user:position')} />
                <DataField label={t('user:source')} />
                <DataField label={t('user:relocation')} />
                <CheckBox
                  name='business_trips'
                  label={t('user:business_trips')}
                  checked
                  onChange={() => null}
                />
              </CardContainer>
            </BoxCard>
          )}

          {editCard === NameCardEnum.jobPosition && (
            <BoxCard
              title={t('user:jobPosition')}
              withEditButton
              nameCard={NameCardEnum.jobPosition}
              editCard={editCard}
              setEditCard={setEditCard}
            >
              <CardContainer
                as={motion.div}
                initial={{ x: '100%' }}
                animate={{
                  x: 0,
                }}
                exit={{
                  x: '100%',
                }}
                transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              >
                <BoxPicture>
                  <Text variant={TextVariantEnum.textBody1medium}>{t('user:profile_picture')}</Text>
                  <BoxAvatar>
                    <img src='/images/user/avatarDefault.png' alt='avatar' />
                    <Button priority='small' fullwidth>
                      <Text> {t('user:edit_photo')}</Text>
                    </Button>
                  </BoxAvatar>
                </BoxPicture>
                <BoxFields>
                  <Input placeholder={t('user:first_name')} id='i_firstName' name='firstName' />
                  <Input placeholder={t('user:last_name')} id='i_lastName' name='lastName' />
                  <Select
                    values={['test', 'test1', 'test2', 'test3', 'test4', 'test5']}
                    entries={[
                      ['1', 'test1-1'],
                      ['2', 'test2-1'],
                      ['3', 'test3-1'],
                      ['4', 'test4-1'],
                      ['5', 'test5-1'],
                    ]}
                    placeholder={t('user:gender')}
                    id='i_gender'
                    name='gender'
                  />
                  <Select
                    values={['test', 'test1', 'test2', 'test3', 'test4', 'test5']}
                    entries={[
                      ['1', 'test1-1'],
                      ['2', 'test2-1'],
                      ['3', 'test3-1'],
                      ['4', 'test4-1'],
                      ['5', 'test5-1'],
                    ]}
                    placeholder={t('user:date_of_birth')}
                    id='i_dateOfBirth'
                    name='birthday'
                  />
                  <Input placeholder={t('user:email')} id='i_email' name='email' />
                  <Input placeholder={t('user:phone')} id='i_phone' name='phone' />
                  <Select
                    values={['test', 'test1', 'test2', 'test3', 'test4', 'test5']}
                    entries={[
                      ['1', 'test1-1'],
                      ['2', 'test2-1'],
                      ['3', 'test3-1'],
                      ['4', 'test4-1'],
                      ['5', 'test5-1'],
                    ]}
                    placeholder={t('user:language_of_notify')}
                    id='i_languageOfNotify'
                    name='primaryLanguage'
                  />
                </BoxFields>
              </CardContainer>
            </BoxCard>
          )}

          {editCard === NameCardEnum.all && (
            <BoxCard
              title={t('user:education')}
              withEditButton
              nameCard={NameCardEnum.education}
              editCard={editCard}
              setEditCard={setEditCard}
            >
              <CardContainer
                as={motion.div}
                initial={{ x: '100%' }}
                animate={{
                  x: 0,
                }}
                exit={{
                  x: '100%',
                }}
                transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              >
                <DataField label={t('user:city')} />
                <DataField label={t('user:address')} />
                <DataField label={t('user:source')} />
                <DataField label={t('user:relocation')} />
                <CheckBox
                  name='business_trips'
                  label={t('user:business_trips')}
                  checked
                  onChange={() => null}
                />
              </CardContainer>
            </BoxCard>
          )}

          {editCard === NameCardEnum.education && (
            <BoxCard
              title={t('user:education')}
              withEditButton
              nameCard={NameCardEnum.education}
              editCard={editCard}
              setEditCard={setEditCard}
            >
              <CardContainer
                as={motion.div}
                initial={{ x: '100%' }}
                animate={{
                  x: 0,
                }}
                exit={{
                  x: '100%',
                }}
                transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              >
                <BoxPicture>
                  <Text variant={TextVariantEnum.textBody1medium}>{t('user:profile_picture')}</Text>
                  <BoxAvatar>
                    <img src='/images/user/avatarDefault.png' alt='avatar' />
                    <Button priority='small' fullwidth>
                      <Text> {t('user:edit_photo')}</Text>
                    </Button>
                  </BoxAvatar>
                </BoxPicture>
                <BoxFields>
                  <Input placeholder={t('user:first_name')} id='i_firstName' name='firstName' />
                  <Input placeholder={t('user:last_name')} id='i_lastName' name='lastName' />
                  <Select
                    values={['test', 'test1', 'test2', 'test3', 'test4', 'test5']}
                    entries={[
                      ['1', 'test1-1'],
                      ['2', 'test2-1'],
                      ['3', 'test3-1'],
                      ['4', 'test4-1'],
                      ['5', 'test5-1'],
                    ]}
                    placeholder={t('user:gender')}
                    id='i_gender'
                    name='gender'
                  />
                  <Select
                    values={['test', 'test1', 'test2', 'test3', 'test4', 'test5']}
                    entries={[
                      ['1', 'test1-1'],
                      ['2', 'test2-1'],
                      ['3', 'test3-1'],
                      ['4', 'test4-1'],
                      ['5', 'test5-1'],
                    ]}
                    placeholder={t('user:date_of_birth')}
                    id='i_dateOfBirth'
                    name='birthday'
                  />
                  <Input placeholder={t('user:email')} id='i_email' name='email' />
                  <Input placeholder={t('user:phone')} id='i_phone' name='phone' />
                  <Select
                    values={['test', 'test1', 'test2', 'test3', 'test4', 'test5']}
                    entries={[
                      ['1', 'test1-1'],
                      ['2', 'test2-1'],
                      ['3', 'test3-1'],
                      ['4', 'test4-1'],
                      ['5', 'test5-1'],
                    ]}
                    placeholder={t('user:language_of_notify')}
                    id='i_languageOfNotify'
                    name='primaryLanguage'
                  />
                </BoxFields>
              </CardContainer>
            </BoxCard>
          )}
        </Box>
      </WrapperContainer>
    </CommonLayout>
  );
}
