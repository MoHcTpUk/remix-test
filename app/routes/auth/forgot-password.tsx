import type { ActionArgs } from '@remix-run/cloudflare';
import { json } from '@remix-run/cloudflare';
import type { EntityForgotPasswordRequest } from 'shared/client/data-contracts';
import { UserService } from 'shared/client/UserService';

import { badRequest } from '~/utils/request.server';
import { validateEmail } from '~/utils/validations';

export interface IForgotPasswordResponse {
  fields: EntityForgotPasswordRequest;
  formError: null | string;
  fieldErrors: {
    email: string | undefined;
  };
  status?: number;
}

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const email = formData.get('email')?.toString();

  const fields: EntityForgotPasswordRequest = { email };

  const fieldErrors = {
    email: validateEmail(email),
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields, formError: null });
  }

  try {
    const client = new UserService();
    await client.forgotPasswordCreate(fields);

    return json({ status: 200 });
  } catch (error) {
    return badRequest({
      fieldErrors: null,
      formError: `Form not submitted correctly.`,
      fields,
    });
  }
};
