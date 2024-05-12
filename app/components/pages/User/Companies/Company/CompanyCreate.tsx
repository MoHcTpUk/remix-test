import { Form } from '@remix-run/react';
import { memo } from 'react';
import type { Company } from 'shared/v2/companies';

import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IUpdateCompany } from '~/types/interfaces/iForms';

import CompanyInformationEdit from './components/CompanyInformation/CompanyInformationEdit';
import { Wrapper } from './styles';

export const CompanyCreate = memo(
  ({
    step,
    company,
    dictionaries,
    actionData,
  }: {
    step?: number;
    company?: Company;
    dictionaries?: IDictionaries;
    actionData?: IUpdateCompany;
  }): JSX.Element => (
    <Form method='POST' style={{ width: '100%' }}>
      <Wrapper>
        <input name='step' type='hidden' value={step} />
        {step === 1 && (
          <CompanyInformationEdit
            state='create'
            company={company}
            step={step}
            dictionaries={dictionaries}
            actionData={actionData}
          />
        )}
      </Wrapper>
    </Form>
  ),
);
