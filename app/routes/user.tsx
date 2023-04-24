import type { ActionArgs, LoaderArgs } from '@remix-run/cloudflare';
import { json, redirect } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import type {
  EntityGetUserInfoResponse,
  EntityUpdateUserInfoRequest,
} from 'shared/client/data-contracts';
import { UserService } from 'shared/client/UserService';

import { CommonLayout } from '~/components/layouts/CommonLayout';
import { UserInfo } from '~/components/pages/User/MyProfile';

export const loader = async ({ context }: LoaderArgs) => {
  console.warn(
    '>>>>>>>>',
    (await context.references.gendersMap).get('ccac9dea-5a03-4ce6-9ef5-a26090544f3e'),
  );

  if (!context.userContext.user.isAuthenticated) {
    return redirect('/', {
      status: 302,
    });
  }

  const client = new UserService();
  await client.auth(context.session);

  const userInfo = await client.infoList();
  return json(userInfo);
};

export const action = async ({ request, context }: ActionArgs) => {
  const formData = await request.formData();
  const formName = formData.get('formName');

  const client = new UserService();
  await client.auth(context.session);

  switch (formName) {
    case 'email_notify': {
      const email = formData.get('email_notify');
      if (email) {
        await client.infoUpdate({
          notifications: {
            email: Boolean(email),
          },
        });
      }
      break;
    }
    case 'phone_notify': {
      const email = formData.get('phone_notify');
      if (email) {
        await client.infoUpdate({
          notifications: {
            phone: Boolean(email),
          },
        });
      }
      break;
    }
    default: {
      const firstName = formData.get('firstName')?.toString();
      const lastName = formData.get('lastName')?.toString();
      const gender = formData.get('gender')?.toString();
      const birthday = formData.get('birthday')?.toString();
      const phone = formData.get('phone')?.toString();
      const primaryLanguage = formData.get('primaryLanguage')?.toString();

      const fields: EntityUpdateUserInfoRequest = {
        firstName,
        lastName,
        gender,
        birthday,
        phone,
        primaryLanguage,
      };

      await client.infoUpdate(fields);
    }
  }

  const updateUserInfo = await client.infoList();
  return json(updateUserInfo.data);
};

export default function Index() {
  const request = useLoaderData<typeof loader>();
  const user: EntityGetUserInfoResponse | null = request.data;

  return (
    <CommonLayout>
      <UserInfo user={user} />
    </CommonLayout>
  );
}
