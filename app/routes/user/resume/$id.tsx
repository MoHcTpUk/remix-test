import type { ActionArgs, LoaderArgs } from '@remix-run/cloudflare';
import { json, redirect } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import type { EntityResume } from 'shared/client/data-contracts';
import { Resumes } from 'shared/client/Resumes';

import { CommonLayout } from '~/components/layouts/CommonLayout';
import { ResumesComponent } from '~/components/pages/User/Resumes';

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

  const resume = await client.resumesDetail(resumeId || '');

  return json({ resume, dictionaries });
};

export default function Index() {
  const request = useLoaderData<typeof loader>();
  // const resume = request.resume
  const { dictionaries } = request;

  console.log(request);

  return (
    <h1>HEY</h1>
    // <CommonLayout>
    //   {/* <ResumesComponent resumes={resumes} dictionaries={dictionaries} /> */}
    // </CommonLayout>
  );
}
