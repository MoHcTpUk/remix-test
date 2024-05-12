import { useMatches, useSearchParams } from '@remix-run/react';
import { useState } from 'react';
import type { Company } from 'shared/v2/companies';
import type { Resume } from 'shared/v2/resumes';
import type { Vacancy } from 'shared/v2/vacancies';

import ModalSelectCreateForm from '~/components/entities/ModalSelectCreateForm';
import { useRouteChecks, useScreenWidth } from '~/hooks';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import { useMatchesData } from '~/utils/helpers.client';

import {
  HeadingForArticles,
  HeadingForCompany,
  HeadingForFaq,
  HeadingForMyProfile,
  HeadingForNews,
  HeadingForResponses,
  HeadingForResume,
  HeadingForSearchCompany,
  HeadingForVacancy,
} from './components';
import { BoxHeading } from './styles';

export function Heading(): JSX.Element {
  const matchesFromCompnyVacancies = useMatchesData('routes/search/company.$id.vacancy');

  const matches = useMatches();

  const resumes = matches[2]?.data.resumes?.data as Resume[];
  const vacancies = matches[2]?.data.vacancies?.data as Vacancy[];
  const companies = matches[2]?.data.companies?.data as Company[];

  const company: Company = matchesFromCompnyVacancies?.company;
  const dictionaries: IDictionaries = matchesFromCompnyVacancies?.dictionaries;

  const [searchParams] = useSearchParams();
  const step = Number(searchParams.get('step') ?? '1');

  const {
    isUserProfile,
    isUserResume,
    isUserVacancy,
    isUserCompany,
    isUserResponses,
    isSearchResume,
    isSearchVacancy,
    isSearchCompany,
    isSearchCompanyVacancies,
    isMaterialsArticles,
    isMaterialsNews,
    isFaq,
    isId,
  } = useRouteChecks();

  const [visibleSelectionCreate, setSelectionCreate] = useState(false);
  const [variantCreate, setVariantCreate] = useState<'vacancy' | 'resume'>('resume');
  const widthScreen = useScreenWidth();

  return (
    <>
      {isSearchCompanyVacancies && widthScreen >= 1280 ? (
        <HeadingForSearchCompany company={company} dictionaries={dictionaries} />
      ) : (
        <BoxHeading style={{ maxWidth: isSearchCompanyVacancies ? '920px' : 'auto' }}>
          {isUserProfile && (
            <HeadingForMyProfile
              isId={isId}
              variantCreate={variantCreate}
              setVariantCreate={setVariantCreate}
              setSelectionCreate={setSelectionCreate}
            />
          )}
          {isUserResume && (
            <HeadingForResume
              isId={isId}
              variantCreate={variantCreate}
              setVariantCreate={setVariantCreate}
              setSelectionCreate={setSelectionCreate}
              resumes={resumes}
              step={step}
            />
          )}
          {isUserVacancy && (
            <HeadingForVacancy
              isId={isId}
              variantCreate={variantCreate}
              setVariantCreate={setVariantCreate}
              setSelectionCreate={setSelectionCreate}
              vacancies={vacancies}
              step={step}
            />
          )}
          {isUserCompany && <HeadingForCompany isId={isId} companies={companies} />}
          {isUserResponses && <HeadingForResponses />}

          {isSearchResume && (
            <HeadingForResume
              title='Find employee'
              isId={isId}
              variantCreate={variantCreate}
              setVariantCreate={setVariantCreate}
              setSelectionCreate={setSelectionCreate}
            />
          )}
          {isSearchVacancy && (
            <HeadingForVacancy
              title='Find Job'
              isId={isId}
              variantCreate={variantCreate}
              setVariantCreate={setVariantCreate}
              setSelectionCreate={setSelectionCreate}
            />
          )}
          {isSearchCompany && <HeadingForCompany title='Companies' isId={isId} />}

          {isMaterialsArticles && <HeadingForArticles isId={isId} variant='materials' />}
          {isMaterialsNews && <HeadingForNews isId={isId} variant='materials' />}
          {isFaq && <HeadingForFaq variant='materials' />}
        </BoxHeading>
      )}

      <ModalSelectCreateForm
        visibility={visibleSelectionCreate}
        setVisibility={setSelectionCreate}
        variant={variantCreate}
      />
    </>
  );
}
