import { Form } from '@remix-run/react';
import { useEffect, useState } from 'react';
import type { Company } from 'shared/v2/companies';

import { CompanyCardEnum } from '~/types/enums/stateCardEnum';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IUpdateCompany } from '~/types/interfaces/iForms';

import CompanyInformation from './components/CompanyInformation';
import { Wrapper } from './styles';

export function CompanyComponent({
  company,
  dictionaries,
  actionData,
}: {
  company?: Company | null;
  dictionaries?: IDictionaries;
  actionData?: IUpdateCompany;
}) {
  const [editCard, setEditCard] = useState(CompanyCardEnum.all);

  useEffect(() => {
    if (actionData?.success) setEditCard(CompanyCardEnum.all);
  }, [company]);

  return (
    <Form method='POST' style={{ width: '100%' }}>
      <Wrapper>
        <CompanyInformation
          company={company}
          dictionaries={dictionaries}
          editCard={editCard}
          setEditCard={setEditCard}
          actionData={actionData}
        />
      </Wrapper>
    </Form>
  );
}
