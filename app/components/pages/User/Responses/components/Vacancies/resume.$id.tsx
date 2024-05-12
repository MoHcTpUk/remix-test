import type { LoaderArgs } from '@remix-run/cloudflare';
import { json } from '@remix-run/cloudflare';
import { Outlet, useLoaderData } from '@remix-run/react';
import { ClientFactory } from 'shared/clientFactory';
import { ResponsesApi } from 'shared/v2/responses';
import { ResumesApi } from 'shared/v2/resumes';
import { VacanciesApi } from 'shared/v2/vacancies';

import { Box } from '~/components/common/Box';
import { InnerResponsesVacanciesComponent } from '~/components/pages/User/Responses/components/Resumes/InnerResponsesVacanciesComponent';
import { useScreenWidth } from '~/hooks';

export const loader = async ({ context, request, params }: LoaderArgs) => {
  const clientResponses = ClientFactory.createClient(ResponsesApi, context.session);
  const clientResumes = ClientFactory.createClient(ResumesApi, context.session);
  const clientVacancies = ClientFactory.createClient(VacanciesApi, context.session);

  const resumeId = params.id;

  const url = new URL(request.url);
  const max_page_size = url.searchParams.get('max_page_size');
  const current_token = url.searchParams.get('current_token');
  const current_page = url.searchParams.get('current_page');
  // const max_pages = url.searchParams.get('max_pages');

  // const pages = getPaginationPages(current_page, max_pages);

  const [
    genders,
    specializations,
    location,
    employment,
    workfeatures,
    educationLevel,
    yearsOfExperience,
    responses,
    resume,
  ] = await Promise.all([
    context.references.gendersMap,
    context.references.specializationsMap,
    context.references.locationMap,
    context.references.employmentsMap,
    context.references.workFeaturesMap,
    context.references.educationLevelMap,
    context.references.yearsOfExperienceMap,
    clientResponses.getEntityResponses({
      id: resumeId || '',
      max_page_size: max_page_size ? +max_page_size : 10,
      // pages,
      page_token: current_page && +current_page !== 1 && current_token ? current_token : undefined,
      // entity_type: 'VACANCY',
    }),
    clientResumes.getResume({ id: resumeId || '' }),
  ]);

  const vacancyIds = responses.data
    .map((item) => (item.target_type === 'VACANCY' ? item.target_id : item.shared_id))
    .join(',');

  const vacancies = await clientVacancies
    .getBatchVacancies({ ids: vacancyIds })
    .then((res) => res.data);

  const dictionaries = {
    genders: genders.ToArray(),
    specializations: specializations.ToArray(),
    location: location.ToArray(),
    employment: employment.ToArray(),
    workfeatures: workfeatures.ToArray(),
    educationLevel: educationLevel.ToArray(),
    yearsOfExperience: yearsOfExperience.ToArray(),
  };

  // const paginationRange = getPaginationRange(pages, vacancies?.max_pages, vacancies?.page_tokens);
  // const maxPages = vacancies.max_pages;

  const pagination = {
    max_page_size,
    current_token,
    current_page,
    // paginationRange,
    // maxPages,
  };

  // return json({});

  return json({ vacancies, dictionaries, pagination, resume, responses });
};

export default function ResponseResumeIndex() {
  const request = useLoaderData<typeof loader>();
  const { vacancies, resume, responses } = request;

  const widthScreen = useScreenWidth();
  return (
    <Box flexDirection='row' width='100%' gap={widthScreen < 1280 ? '12px' : '24px'}>
      <InnerResponsesVacanciesComponent
        resume={resume}
        vacancies={vacancies}
        responses={responses.data}
      />

      <Outlet />
    </Box>
  );
}
