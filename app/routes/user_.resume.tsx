import type { ActionArgs, LoaderArgs } from '@remix-run/cloudflare';
import { json, redirect } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import type {
  EntityGetResumesResponse,
  EntityGetUserInfoResponse,
  EntityUpdateUserInfoRequest,
} from 'shared/client/data-contracts';
import { Resumes } from 'shared/client/Resumes';
import { UserService } from 'shared/client/UserService';

import { CommonLayout } from '~/components/layouts/CommonLayout';
import { ResumesComponent } from '~/components/pages/User/Resumes';

export const loader = async ({ context }: LoaderArgs) => {
  if (!context.userContext.user.isAuthenticated) {
    return redirect('/', {
      status: 302,
    });
  }

  const client = new Resumes();
  await client.auth(context.session);

  const resumes = await client.resumesList({ only_my: true });
  return json(resumes);
};

export default function Index() {
  const request = useLoaderData<typeof loader>();
  const resumes: EntityGetResumesResponse = request.data;
  console.log(resumes);

  return (
    <CommonLayout>
      <ResumesComponent resumes={resumes} />
    </CommonLayout>
  );
}
