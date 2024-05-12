import { Form, useNavigation } from '@remix-run/react';
import { motion } from 'framer-motion';
import { memo, useEffect, useRef, useState } from 'react';
import { lng } from 'shared/utils';
import type { Faq, FaqContent } from 'shared/v2/feeds';
import { v4 as uuidv4 } from 'uuid';

import { Accordion } from '~/components/common/Accordion';
import { Box } from '~/components/common/Box';
import Button from '~/components/common/Button';
import { BoxCard } from '~/components/common/Card';
import { BoxControl } from '~/components/common/Card/styles';
import { Input } from '~/components/common/Input';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { BoxFields } from '~/components/ui/Card';
import { useApp, useScreenWidth } from '~/hooks';
import type { LanguageEnum } from '~/types/enums/languageEnum';
import { VariantCardEnum } from '~/types/enums/variantCardEnum';
import type { IFeedback } from '~/types/interfaces/iForms';

import { Answer, Description, FieldWithDesc, List, SubText } from './styles';

function mapMaterialsToViewModel(material: Faq, language: LanguageEnum): FaqContent {
  return {
    title: lng(material.en?.title, material.th?.title, language),
    text: {
      subtitle: lng(material.en?.text.subtitle, material.th?.text.subtitle, language),
      steps: lng(material.en?.text.steps, material.th?.text.steps, language),
    },
  } as FaqContent;
}

export const FaqComponent = memo(
  ({ actionData, faq }: { actionData?: IFeedback; faq: Faq[] }): JSX.Element => {
    const widthScreen = useScreenWidth();
    const { t, userContext } = useApp();

    const faqItems = faq?.map((item) => mapMaterialsToViewModel(item, userContext.language));

    const navigation = useNavigation();
    const isAdding = navigation.state === 'submitting';
    const formRef = useRef<HTMLFormElement>(null);

    const handleCancel = () => {
      formRef.current?.reset();
    };

    const [inputValue, setInputValue] = useState({
      nameValue: '',
      emailValue: '',
      subjectValue: '',
      messageValue: '',
    });
    const { nameValue, emailValue, subjectValue, messageValue } = inputValue;

    const emptyFields = !nameValue || !emailValue || !subjectValue || !messageValue;

    useEffect(() => {
      if (!isAdding) {
        formRef.current?.reset();
        setInputValue({ nameValue: '', emailValue: '', subjectValue: '', messageValue: '' });
      }
    }, [isAdding]);

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
        <BoxCard variant={VariantCardEnum.materials}>
          <Text variant={TextVariantEnum.textHeading3}>
            {t(
              'home:here_you_can_find_answers_to_frequently_asked_questions_or_send_a_message_to_our_support_team',
            )}
          </Text>
          <SubText>
            <Text variant={TextVariantEnum.textBody2}>
              {t(
                'home:for_registered_users_who_need_help_please_contact_us_and_we_will_get_back_to_you_in_about_1_hour',
              )}
            </Text>
          </SubText>
        </BoxCard>

        {faqItems?.map((faqItem, index) => (
          <BoxCard key={faqItem?.title} variant={VariantCardEnum.materials}>
            <Accordion title={faqItem?.title}>
              <Answer>
                {faqItem?.text?.subtitle}
                <List index={index} style={{ listStyle: 'inside', listStyleType: 'auto' }}>
                  {faqItem?.text?.steps.map((stepItem) => {
                    const key = uuidv4();
                    return (
                      <li style={{ listStyle: 'outside', listStyleType: 'auto' }} key={key}>
                        {stepItem}
                      </li>
                    );
                  })}
                </List>
              </Answer>
            </Accordion>
          </BoxCard>
        ))}

        <Form method='POST' style={{ width: '100%' }} ref={formRef}>
          <BoxCard variant={VariantCardEnum.materials}>
            <Text variant={TextVariantEnum.textHeading3}>
              {t('home:we_are_here_to_help_send_us_a_message_to_get_help')}
            </Text>
            <SubText>
              <Text variant={TextVariantEnum.textBody1medium}>
                {t(
                  'home:please_fill_in_all_the_fields_they_are_required_so_that_we_can_help_you_as_efficiently_and_quickly_as_possible',
                )}
              </Text>
            </SubText>

            <BoxFields>
              <Input
                placeholder={t('user:your_name')}
                id='i_name'
                name='name'
                value={nameValue}
                onChange={(event) =>
                  setInputValue((prevState) => ({ ...prevState, nameValue: event }))
                }
              />
              <FieldWithDesc>
                <Description>
                  <Text variant={TextVariantEnum.textBody1medium}>
                    {t('home:what_is_your_email_address')}
                  </Text>
                  <Text variant={TextVariantEnum.textBody2}>
                    {t('home:please_enter_an_email_address_where_we_can_contact_you')}
                  </Text>
                </Description>
                <Input
                  placeholder={t('user:email')}
                  id='i_email'
                  name='email'
                  value={emailValue}
                  aria-invalid={
                    actionData?.fieldErrors?.email?.[userContext.language] ? true : undefined
                  }
                  errorText={actionData?.fieldErrors?.email?.[userContext.language]}
                  onChange={(event) =>
                    setInputValue((prevState) => ({ ...prevState, emailValue: event }))
                  }
                />
              </FieldWithDesc>

              <FieldWithDesc>
                <Description>
                  <Text variant={TextVariantEnum.textBody1medium}>
                    {t('home:what_do_you_need_help_with')}
                  </Text>
                  <Text variant={TextVariantEnum.textBody2}>
                    {t('home:this_helps_make_sure_you_get_the_right_answer_fast')}
                  </Text>
                </Description>
                <Input
                  placeholder={t('user:subject')}
                  id='i_subject'
                  name='subject'
                  value={subjectValue}
                  onChange={(event) =>
                    setInputValue((prevState) => ({ ...prevState, subjectValue: event }))
                  }
                />
              </FieldWithDesc>

              <FieldWithDesc>
                <Description>
                  <Text variant={TextVariantEnum.textBody1medium}>
                    {t('home:what_is_your_question_comment_or_issue')}
                  </Text>
                  <Text variant={TextVariantEnum.textBody2}>
                    {t('home:the_more_we_know_the_better_we_can_help_you_share_all_the_details')}
                  </Text>
                </Description>
                <Input
                  placeholder={t('user:message')}
                  id='i_text'
                  name='text'
                  value={messageValue}
                  onChange={(event) =>
                    setInputValue((prevState) => ({ ...prevState, messageValue: event }))
                  }
                />
              </FieldWithDesc>
            </BoxFields>

            <BoxControl>
              <Button priority='secondary' fullwidth onClick={() => handleCancel()}>
                <Text variant={TextVariantEnum.textBody2}>{t('common:cancel')}</Text>
              </Button>

              <Button priority='primary' fullwidth type='submit' disabled={emptyFields || isAdding}>
                <Text variant={TextVariantEnum.textBody2}> {t('common:send')}</Text>
              </Button>
            </BoxControl>
          </BoxCard>
        </Form>
      </Box>
    );
  },
);
