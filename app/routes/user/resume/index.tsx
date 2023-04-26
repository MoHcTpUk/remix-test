import type { ActionArgs, LoaderArgs } from '@remix-run/cloudflare';
import { json, redirect } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import type { EntityResume } from 'shared/client/data-contracts';
import { Resumes } from 'shared/client/Resumes';

import { CommonLayout } from '~/components/layouts/CommonLayout';
import { ResumesComponent } from '~/components/pages/User/Resumes';

export const loader = async ({ context }: LoaderArgs) => {
  if (!context.userContext.user.isAuthenticated) {
    return redirect('/', {
      status: 302,
    });
  }

  const [genders, specializations, location] = await Promise.all([
    context.references.gendersMap,
    context.references.specializationsMap,
    context.references.locationMap,
  ]);

  const dictionaries = {
    genders: genders.ToArray(),
    specializations: specializations.ToArray(),
    location: location.ToArray(),
  };

  const client = new Resumes();
  await client.auth(context.session);

  const resumes = await client.resumesList({ only_my: true });

  return json({ resumes, dictionaries });
};

export const action = async ({ request, context }: ActionArgs) => {
  const formData = await request.formData();
  const formName = formData.get('formName');
};

export default function Index() {
  const request = useLoaderData<typeof loader>();
  const resumes: EntityResume[] | undefined = request.resumes.data?.resumes;
  const { dictionaries } = request;

  return (
    <CommonLayout>
      <ResumesComponent resumes={resumes} dictionaries={dictionaries} />
    </CommonLayout>
  );
}
