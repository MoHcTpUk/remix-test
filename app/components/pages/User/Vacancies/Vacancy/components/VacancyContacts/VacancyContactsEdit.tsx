import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';
import routes from 'shared/routing/routes';
import type { Company } from 'shared/v2/companies';
import type { Vacancy } from 'shared/v2/vacancies';

import Button from '~/components/common/Button';
import { BoxCard } from '~/components/common/Card';
import { Input } from '~/components/common/Input';
import { Select } from '~/components/common/Select';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { BoxFields, CardContainer } from '~/components/ui/Card';
import { useApp } from '~/hooks';
import type { StateCard } from '~/types/enums/stateCardEnum';
import { VacancyCardEnum } from '~/types/enums/stateCardEnum';
import { VariantCardEnum } from '~/types/enums/variantCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IUpdateVacancy } from '~/types/interfaces/iForms';
import { extractCompanyData, extractTitles } from '~/utils/helpers.client';

export default function VacancyContactsEdit({
  editCard,
  setEditCard,
  state,
  step,
  vacancy,
  dictionaries,
  companies,
  actionData,
}: {
  vacancy?: Vacancy | null;
  dictionaries?: IDictionaries;
  editCard?: VacancyCardEnum;
  setEditCard?: Dispatch<SetStateAction<string>>;
  state?: StateCard;
  step?: number;
  companies?: Company[];
  actionData?: IUpdateVacancy;
}) {
  const { t, userContext } = useApp();

  return (
    <BoxCard
      title={t('user:vacancy_contacts')}
      withEditButton
      nameCard={VacancyCardEnum.employer}
      editCard={editCard}
      setEditCard={setEditCard}
      state={state}
      step={step}
      maxStep={6}
      variant={VariantCardEnum.editCard}
    >
      <CardContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
      >
        <BoxFields>
          <input name='nameCard' type='hidden' value='contacts' />

          {state !== 'create' && (
            <Select
              entries={extractCompanyData(companies)}
              placeholder={t('user:company_name')}
              id='company_id'
              name='company_id'
              values={[vacancy?.contacts?.company_id || '']}
              errorText={actionData?.fieldErrors?.company_id?.[userContext.language]}
            />
          )}

          {state === 'create' && (
            <>
              <Select
                entries={extractCompanyData(companies)}
                placeholder={t('user:choose_company')}
                name='company_id'
                id='company_id'
                values={[vacancy?.contacts?.company_id || '']}
                errorText={actionData?.fieldErrors?.company_id?.[userContext.language]}
              />

              <Link to={`${routes.user.company.create}?forvacancy=true`}>
                <Button name='create-company' priority='secondary' fullwidth>
                  <Text variant={TextVariantEnum.textBody2}>
                    {t('user:create_another_company')}
                  </Text>
                </Button>
              </Link>
            </>
          )}

          <Input
            placeholder={t('user:contact_phone')}
            id='contact_phone'
            name='contact_phone'
            variant='phone'
            value={vacancy?.contacts?.contact_phone || userContext.user.phone}
            errorText={actionData?.fieldErrors?.contact_phone?.[userContext.language]}
          />
          <Input
            placeholder={t('user:first_name')}
            id='first_name'
            name='first_name'
            value={vacancy?.contacts?.first_name || userContext.user.firstName}
            errorText={actionData?.fieldErrors?.first_name?.[userContext.language]}
          />
          <Input
            placeholder={t('user:last_name')}
            id='last_name'
            name='last_name'
            value={vacancy?.contacts?.last_name || userContext.user.lastName}
            errorText={actionData?.fieldErrors?.last_name?.[userContext.language]}
          />

          <Select
            entries={extractTitles(dictionaries?.sources, userContext.language)}
            placeholder={t('user:how_did_you_know_about_us')}
            id='source'
            name='source'
            values={[vacancy?.contacts?.source_of_discovery_id || '']}
            errorText={actionData?.fieldErrors?.source_of_discovery_id?.[userContext.language]}
          />
        </BoxFields>
      </CardContainer>
    </BoxCard>
  );
}
