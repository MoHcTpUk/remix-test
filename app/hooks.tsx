import { useLocation, useMatches, useNavigate } from '@remix-run/react';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Countries } from 'shared/client/Countries';
import type { EntityCommonDictionary, LocationV2 } from 'shared/client/data-contracts';
import { Specializations } from 'shared/client/Specializations';
import type { Resume } from 'shared/v2/resumes';
import type { Vacancy } from 'shared/v2/vacancies';
import { validate as uuidValidate } from 'uuid';

import { UserContext } from './providers/userContextProvider';
import { apiCall, checkCompleteness, extractTitles, getIdFromDictionaries, getValueFromDictionaries } from './utils/helpers.client';
import { getUserTheme } from './utils/themeUtils';

function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context!;
}

function useApp() {
  const userContext = useUserContext();
  const theme = getUserTheme(userContext);
  const { i18n, t } = useTranslation();
  return { userContext, theme, t, i18n };
}

const useRouteChecks = () => {
  const matches = useMatches();
  const [routeChecks, setRouteChecks] = useState({
    isHomePage: true,
    isUserProfile: false,
    isUserResume: false,
    isUserVacancy: false,
    isUserCompany: false,
    isSearchResume: false,
    isSearchVacancy: false,
    isSearchCompany: false,
    isSearchCompanyVacancies: false,
    isMaterialsArticles: false,
    isMaterialsNews: false,
    isFaq: false,
    isAbout: false,
    isPrivacyPolicy: false,
    isId: false,
    isUserResponses: false,
  });

  useEffect(() => {
    setRouteChecks({
      isHomePage: matches.some((m) => m.id.includes('routes/index')),
      isUserProfile: matches.some((m) => m.id.includes('routes/user/myprofile')),
      isUserResume: matches.some((m) => m.id.includes('routes/user/resume')),
      isUserVacancy: matches.some((m) => m.id.includes('routes/user/vacancy')),
      isUserCompany: matches.some((m) => m.id.includes('routes/user/company')),
      isUserResponses: matches.some((m) => m.id.includes('responses')),
      isSearchResume: matches.some((m) => m.id.includes('routes/search/resume')),
      isSearchVacancy: matches.some((m) => m.id.includes('routes/search/vacancy')),
      isSearchCompany: matches.some((m) => m.id.includes('routes/search/company')),
      isSearchCompanyVacancies: matches.some((m) => m.id.includes('company.$id.vacancy')),
      isMaterialsArticles: matches.some((m) => m.id.includes('routes/materials/articles')),
      isMaterialsNews: matches.some((m) => m.id.includes('routes/materials/news')),
      isFaq: matches.some((m) => m.id.includes('routes/faq')),
      isAbout: matches.some((m) => m.id.includes('routes/about')),
      isPrivacyPolicy: matches.some((m) => m.id.includes('routes/privacy_policy')),
      isId: matches.some((m) => m.id.includes('$id')),
    });
  }, [matches]);

  return routeChecks;
};

const useScreenWidth = () => {
  const isWindow = typeof window !== 'undefined';
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    if (isWindow) {
      setScreenWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (isWindow) {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [isWindow]);

  return screenWidth;
};

const useGetPositionFromSpecialization = (specialization?: string | null, positions?: string) => {
  const specializationsForJobPositions = new Specializations();
  const { userContext } = useApp();

  const [position, setPosition] = useState<string | undefined>(positions || '');
  const [entriesPositions, setEntriesPositions] = useState<[string, string][]>();
  const [specializationState, setSpecializationState] = useState<string[]>([specialization || '']);

  const getPositionsFromSpec = async () => {
    if (specializationState[0]) {
      const response = await specializationsForJobPositions.jobPositionsDetail(
        specializationState[0] || '',
      );
      const jobPositions = response.data;
      if (uuidValidate(positions || '')) {
        const pos = getValueFromDictionaries(jobPositions, positions, userContext.language);
        setPosition(pos);
      } else {
        setPosition(specializationState[0] === specialization ? positions : '');
      }
      const entries = extractTitles(jobPositions, userContext.language);
      setEntriesPositions(entries);
    } else {
      setEntriesPositions([]);
      setPosition('');
    }
  };

  useEffect(() => {
    if (specializationState[0]) {
      getPositionsFromSpec();
    }
  }, [specializationState]);

  return {
    entriesPositions,
    setSpecializationState,
    position,
    specializationState,
  };
};

const useGetLocation = (
  country?: string,
  region?: string,
  city?: string,
  entrieCity?: EntityCommonDictionary[],
) => {
  const countryClient = new Countries();

  const [newCountry, setNewContry] = useState<string[]>([country || '']);
  const [newRegion, setNewRegion] = useState<string[]>([region || '']);
  const [entriesRegions, setEntriesRegions] = useState<EntityCommonDictionary[]>();
  const [newCity, setNewCity] = useState<string[]>([city || '']);
  const [newEntriesCity, setNewEntriesCity] = useState<EntityCommonDictionary[]>(
    entrieCity as EntityCommonDictionary[],
  );
  const [isInitialRegion, setIsInitialRegion] = useState(region !== '');

  const getRegionFromCountry = async () => {
    const response = await countryClient.regionsDetail(newCountry[0] || '');
    const dataRegion = response.data;
    if (uuidValidate(region || '')) {
      const dataRegionId = getIdFromDictionaries(dataRegion, region);
      setNewRegion([dataRegionId || '']);
    } else {
      setNewRegion(newCountry[0] === country ? [region || ''] : ['']);
    }
    setEntriesRegions(dataRegion);
  };

  const getCityFromRegion = async () => {
    if (newRegion[0]) {
      const response = await countryClient.regionsLocationDetail(newCountry[0], newRegion[0]);
      const dataCity = response.data;

      if (uuidValidate(city || newRegion[0])) {
        const dataCityId = getIdFromDictionaries(dataCity, city);
        if (isInitialRegion) {
          setNewCity([dataCityId || '']);
        }
        setNewEntriesCity(dataCity);
      } else {
        if (isInitialRegion) {
          setNewCity(newRegion[0] === region ? [city || ''] : ['']);
        }
        setNewEntriesCity(dataCity);
      }
    } else {
      setIsInitialRegion(false);
      setNewEntriesCity(entrieCity as EntityCommonDictionary[]);
      setNewCity(['']);
    }
  };

  const getRegionFromCity = async () => {
    if (newCity[0]) {
      const response: LocationV2 = await apiCall(`/locations/${newCity[0]}`, 'GET');
      if (response && response.region_id) {
        setNewRegion([response.region_id]);
      }
    }
  };

  useEffect(() => {
    if (newCountry[0]) getRegionFromCountry();
  }, [newCountry]);

  useEffect(() => {
    if (newRegion[0]) {
      setIsInitialRegion(true);
    } else {
      setIsInitialRegion(false);
    }
    getCityFromRegion();
  }, [newRegion]);

  useEffect(() => {
    if (!newRegion[0] && newCity[0] && newCountry[0]) {
      getRegionFromCity();
    }
  }, [newCity, newCountry]);

  return {
    entriesRegions,
    newRegion,
    setNewRegion,
    newCountry,
    setNewContry,
    newEntriesCity,
    newCity,
    setNewCity,
  };
};

const useCheckIncompleteness = (resume?: Resume | null, vacancy?: Vacancy | null) => {
  const [incompletenessState, setIncompletenessState] = useState<boolean | undefined>(false);

  useEffect(() => {
    if (resume && vacancy) {
      setIncompletenessState(!checkCompleteness(resume, vacancy));
    } else if (resume) {
      setIncompletenessState(!checkCompleteness(resume, null));
    } else if (vacancy) {
      setIncompletenessState(!checkCompleteness(null, vacancy));
    }
  }, [resume, vacancy]);

  return incompletenessState;
};

const useCheckIncompleteEntityInList = (
  resumes?: Resume[] | null,
  vacancies?: Vacancy[] | null,
) => {
  const [hasIncompleteEntity, setHasIncompleteEntity] = useState(false);
  useEffect(() => {
    const result = hasIncompleteEntity;
    if (vacancies) {
      setHasIncompleteEntity(vacancies?.some((vacancy) => !checkCompleteness(null, vacancy)));
    } else if (resumes) {
      setHasIncompleteEntity(resumes?.some((resume) => !checkCompleteness(resume, null)));
    }
    return () => {
      if (result === true) {
        setHasIncompleteEntity(true);
      }
    };
  }, [resumes, vacancies]);

  return hasIncompleteEntity;
};

const useModalForParams = (param: string) => {
  const [visibilityModal, setVisibilityModal] = useState(false);
  const [initialRender, setInitialRender] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const nameParam = urlParams.get(param);
    if (nameParam === 'true' && !visibilityModal) {
      setVisibilityModal(true);
    } else if ((!nameParam || nameParam === 'false') && visibilityModal) {
      setVisibilityModal(false);
    }
  }, [location.search]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window?.location?.search);

    if (!initialRender) {
      setInitialRender(true);
    } else if (!visibilityModal && urlParams.has(param)) {
      urlParams.delete(param);
      if (urlParams.toString() === '') {
        navigate(`${location.pathname}`);
      } else {
        navigate(`${location.pathname}?${urlParams.toString()}`);
      }
    }

    // Set initial render to false after the first render
  }, [visibilityModal]);

  return { visibilityModal, setVisibilityModal };
};

export {
  useApp,
  useCheckIncompleteEntityInList,
  useCheckIncompleteness,
  useGetLocation,
  useGetPositionFromSpecialization,
  useModalForParams,
  useRouteChecks,
  useScreenWidth,
  useUserContext,
};
