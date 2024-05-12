import { useSubmit } from '@remix-run/react';
import type { MutableRefObject } from 'react';
import { useEffect, useState } from 'react';

import { Box } from '~/components/common/Box';
import Button from '~/components/common/Button';
import { CheckBox } from '~/components/common/Checkbox';
import { Input } from '~/components/common/Input';
import { Select } from '~/components/common/Select';
import { Text } from '~/components/common/Text';
import { TextVariantEnum } from '~/components/common/Text/enums';
import { useApp, useRouteChecks, useScreenWidth } from '~/hooks';
import type { IDictionaries } from '~/types/interfaces/iDictionaries';
import type { IFilter } from '~/types/interfaces/iFilters';
import { compareArrays, extractTitles, extractTitlesNewWay } from '~/utils/helpers.client';

import { BoxContainer, Section } from './styles';

export default function Filter({
  dictionaries,
  filters,
  formRef,
  maxPageSize,
  setMaxPageSize,
  setCurrentPage,
  setCurrentToken,
}: {
  dictionaries: IDictionaries | null;
  filters: IFilter;
  formRef: MutableRefObject<null>;
  maxPageSize?: number;
  setMaxPageSize?: (value: number) => void;
  setCurrentPage?: (value: number) => void;
  setCurrentToken?: (value?: string) => void;
}) {
  const { userContext, theme, t } = useApp();
  const submit = useSubmit();
  const widthScreen = useScreenWidth();

  const [allEducations, setAllEducations] = useState(false);
  const [allFeatures, setAllFeatures] = useState(false);
  const [allExperiences, setAllExperiences] = useState(false);
  const [dateDateOfPost, setDateOfPost] = useState<string[]>([]);
  const [specialization, setSpecialization] = useState<string[]>([]);
  const [numberOfEmployees, setNumberOfEmployees] = useState<string[]>([]);
  const [numberOfVacancies, setNumberOfVacancies] = useState('');
  const [salaryEstimateFrom, setSalaryEstimateFrom] = useState('');
  const [initialRendering, setInitialRendering] = useState(false);

  const { isSearchCompany, isSearchCompanyVacancies } = useRouteChecks();

  const handleResetPagination = () => {
    if (setMaxPageSize) setMaxPageSize(10);
    if (setCurrentPage) setCurrentPage(1);
    if (setCurrentToken) setCurrentToken(undefined);
  };
  useEffect(() => {
    // don't submit form on first render
    if (
      filters.date_of_post ||
      filters.specialization ||
      filters.number_of_employees ||
      filters.number_of_vacancies ||
      filters.salary_estimate_from
    ) {
      setInitialRendering(true);
    }

    if (
      initialRendering ||
      (!initialRendering && filters.specialization && filters.specialization?.[0])
    ) {
      if (filters.specialization && filters.specialization?.[0]) {
        setSpecialization([...filters.specialization]);
      } else {
        setSpecialization([]);
      }

      if (filters.date_of_post) {
        setDateOfPost([filters?.date_of_post || '']);
      } else {
        setDateOfPost([]);
      }

      if (filters.number_of_employees && filters.number_of_employees?.[0]) {
        setNumberOfEmployees([...filters.number_of_employees]);
      } else {
        setNumberOfEmployees([]);
      }

      if (filters.number_of_vacancies) {
        setNumberOfVacancies(filters?.number_of_vacancies);
      } else {
        setNumberOfVacancies('');
      }

      if (filters.salary_estimate_from) {
        setSalaryEstimateFrom(filters.salary_estimate_from);
      } else {
        setSalaryEstimateFrom('');
      }

      handleResetPagination();
    }
  }, [
    filters.date_of_post,
    filters.specialization?.length,
    filters.number_of_employees?.length,
    filters.number_of_vacancies,
    filters.salary_estimate_from,
  ]);

  // submit the form immediately when these fields change
  useEffect(() => {
    if (
      dateDateOfPost !== undefined &&
      dateDateOfPost?.[0] !== undefined &&
      dateDateOfPost?.[0] !== filters?.date_of_post &&
      formRef?.current
    ) {
      if (initialRendering) {
        submit(formRef.current, { preventScrollReset: true });
      } else {
        setInitialRendering(true);
      }
    }
    if (!compareArrays(specialization, filters?.specialization) && formRef?.current) {
      if (initialRendering) {
        submit(formRef.current, { preventScrollReset: true });
      } else {
        setInitialRendering(true);
      }
    }
    if (
      filters?.number_of_employees !== undefined &&
      !compareArrays(numberOfEmployees, filters?.number_of_employees) &&
      formRef?.current
    ) {
      if (initialRendering) {
        submit(formRef.current);
      } else {
        setInitialRendering(true);
      }
    }

    // submit the form when the field is cleared because
    // the form does not respond when the clearInput is clicked,
    // or it responds twice due to two handlers (the second time in the search.tsx file)
    if (
      !numberOfVacancies &&
      filters.number_of_vacancies !== null &&
      filters.number_of_vacancies !== numberOfVacancies
    ) {
      if (initialRendering) {
        submit(formRef.current, { preventScrollReset: true });
      } else {
        setInitialRendering(true);
      }
    }
    if (
      !salaryEstimateFrom &&
      filters.salary_estimate_from !== undefined &&
      filters.salary_estimate_from !== null &&
      filters.salary_estimate_from !== salaryEstimateFrom
    ) {
      if (initialRendering) {
        submit(formRef.current, { preventScrollReset: true });
      } else {
        setInitialRendering(true);
      }
    }
  }, [dateDateOfPost, specialization, numberOfEmployees, numberOfVacancies, salaryEstimateFrom]);

  if (isSearchCompany && !isSearchCompanyVacancies) {
    return (
      <BoxContainer>
        <Box
          gap='24px'
          flexDirection='column'
          style={{
            padding: '16px 0 0',
            borderTop: `1px solid ${theme.user.borderColor}`,
          }}
        >
          <Select
            entries={extractTitlesNewWay(dictionaries?.specializations, userContext.language)}
            variant='search-multi'
            placeholder={t('user:specialization')}
            values={specialization}
            setExternalState={setSpecialization}
            externalState={specialization}
            name='specialization'
            id='specialization'
          />
          <Select
            entries={extractTitles(dictionaries?.employeeNumbers, userContext.language)}
            variant='search-multi'
            placeholder={t('user:number_of_employees')}
            values={numberOfEmployees}
            setExternalState={setNumberOfEmployees}
            name='number_of_employees'
            id='number_of_employees'
          />

          <Input
            placeholder={t('user:number_of_vacancies')}
            id='number_of_vacancies'
            name='number_of_vacancies'
            value={numberOfVacancies}
            onChange={setNumberOfVacancies}
            onlyNumber
          />
        </Box>
      </BoxContainer>
    );
  }

  return (
    <BoxContainer>
      <Section>
        <Box
          gap='24px'
          flexDirection='column'
          padding={widthScreen < 1280 ? '0 0 16px' : '0 0 8px'}
        >
          {isSearchCompanyVacancies && (
            <>
              <Input
                placeholder={t('user:job_title_keywords')}
                id='q'
                name='q'
                value={filters.query}
              />

              <Select
                entries={extractTitles(dictionaries?.location, userContext.language)}
                variant='single-text'
                placeholder={t('user:district')}
                values={[filters?.search_by_city || '']}
                name='search_by_city'
                id='search_by_city'
              />

              <Button type='submit' priority='secondary' fullwidth>
                <Text variant={TextVariantEnum.textBody2}>{t('common:search')}</Text>
              </Button>
            </>
          )}

          <Select
            entries={[
              ['1', t('user:last_24_hours')],
              ['2', t('user:last_5_days')],
              ['3', t('user:last_14_days')],
              ['4', t('user:last_month')],
            ]}
            placeholder={t('common:date')}
            values={dateDateOfPost}
            setExternalState={setDateOfPost}
            name='date_of_post'
            id='date_of_post'
          />

          <Select
            entries={extractTitles(dictionaries?.specializations, userContext.language)}
            variant='search-multi'
            placeholder={t('user:specialization')}
            values={specialization}
            setExternalState={setSpecialization}
            externalState={specialization}
            name='specialization'
            id='specialization'
          />

          <Input
            placeholder={t('user:salary_from_thb')}
            id='salary_estimate_from'
            name='salary_estimate_from'
            value={salaryEstimateFrom}
            onChange={setSalaryEstimateFrom}
            onlyNumber
          />
        </Box>

        <Box
          flexDirection='column'
          padding={widthScreen < 1280 ? '8px 0 12px' : '16px 0'}
          gap='8px'
          style={{ borderBottom: `1px solid ${theme.user.borderColor}` }}
        >
          <Text variant={TextVariantEnum.textBody2medium}>{t('user:employment')}</Text>
          {extractTitles(dictionaries?.employment, userContext.language).map((item) => (
            <CheckBox
              key={item[0]}
              checked={Boolean(filters.employment?.includes(item[0]))}
              id='employment'
              name='employment'
              label={item[1]}
              value={item[0]}
            />
          ))}
        </Box>

        <Box
          flexDirection='column'
          padding={widthScreen < 1280 ? '16px 0 8px' : '16px 0'}
          gap='8px'
          style={{
            padding: '16px 0',
            borderTop: `1px solid ${theme.user.borderColor}`,
            borderBottom: `1px solid ${theme.user.borderColor}`,
          }}
        >
          <Text variant={TextVariantEnum.textBody2medium}>{t('user:features')}</Text>
          {allFeatures
            ? extractTitles(dictionaries?.workfeatures, userContext.language).map((item) => (
                <CheckBox
                  key={item[0]}
                  checked={filters.features?.includes(item[0])}
                  id='features'
                  name='features'
                  label={item[1]}
                  value={item[0]}
                />
              ))
            : extractTitles(dictionaries?.workfeatures, userContext.language)
                .slice(0, 2)
                .map((item) => (
                  <CheckBox
                    key={item[0]}
                    checked={filters.features?.includes(item[0])}
                    id='features'
                    name='features'
                    label={item[1]}
                    value={item[0]}
                  />
                ))}
          <Box
            padding='11px 0'
            style={{ cursor: 'pointer' }}
            onClick={() => setAllFeatures((prev) => !prev)}
          >
            <Text color={theme.accentTextColor} variant={TextVariantEnum.textBody2medium}>
              {allFeatures ? `- ${t('user:hide')}` : `+ ${t('user:view_all')}`}
            </Text>
          </Box>
        </Box>

        <Box
          flexDirection='column'
          padding={widthScreen < 1280 ? '16px 0 8px' : '16px 0'}
          gap='8px'
          style={{
            borderBottom: `1px solid ${theme.user.borderColor}`,
          }}
        >
          <Text variant={TextVariantEnum.textBody2medium}>{t('user:education')}</Text>
          {allEducations
            ? extractTitles(dictionaries?.educationLevel, userContext.language).map((item) => (
                <CheckBox
                  key={item[0]}
                  checked={filters.education_level?.includes(item[0])}
                  id='education_level'
                  name='education_level'
                  label={item[1]}
                  value={item[0]}
                />
              ))
            : extractTitles(dictionaries?.educationLevel, userContext.language)
                .slice(0, 3)
                .map((item) => (
                  <CheckBox
                    key={item[0]}
                    checked={filters.education_level?.includes(item[0])}
                    id='education_level'
                    name='education_level'
                    label={item[1]}
                    value={item[0]}
                  />
                ))}
          <Box
            padding='11px 0'
            style={{ cursor: 'pointer' }}
            onClick={() => setAllEducations((prev) => !prev)}
          >
            <Text color={theme.accentTextColor} variant={TextVariantEnum.textBody2medium}>
              {allEducations ? `- ${t('user:hide')}` : `+ ${t('user:view_all')}`}
            </Text>
          </Box>
        </Box>

        <Box flexDirection='column' gap='8px' padding='16px 0 0'>
          <Text variant={TextVariantEnum.textBody2medium}>{t('user:experience')}</Text>
          {allExperiences
            ? extractTitles(dictionaries?.yearsOfExperience, userContext.language).map((item) => (
                <CheckBox
                  key={item[0]}
                  id='work_experience'
                  name='work_experience'
                  label={item[1]}
                  value={item[0]}
                  checked={filters.work_experience?.includes(item[0])}
                />
              ))
            : extractTitles(dictionaries?.yearsOfExperience, userContext.language)
                .slice(0, 3)
                .map((item) => (
                  <CheckBox
                    key={item[0]}
                    id='work_experience'
                    name='work_experience'
                    label={item[1]}
                    value={item[0]}
                    checked={filters.work_experience?.includes(item[0])}
                  />
                ))}
          <Box
            padding='11px 0'
            style={{ cursor: 'pointer' }}
            onClick={() => setAllExperiences((prev) => !prev)}
          >
            <Text color={theme.accentTextColor} variant={TextVariantEnum.textBody2medium}>
              {allExperiences ? `- ${t('user:hide')}` : `+ ${t('user:view_all')}`}
            </Text>
          </Box>
        </Box>
      </Section>
    </BoxContainer>
  );
}
