/* eslint-disable no-return-await */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Citizenship } from 'shared/client/Citizenship';
import { ComplianceOfRequirements } from 'shared/client/ComplianceOfRequirements';
import { Countries } from 'shared/client/Countries';
import { Currency } from 'shared/client/Currency';
import type { EntityCommonDictionary } from 'shared/client/data-contracts';
import { DictionaryApi } from 'shared/client/Dictionary-v2';
import { DrivingLicenses } from 'shared/client/DrivingLicenses';
import { EducationLevel } from 'shared/client/EducationLevel';
import { EmailNotificationsSettings } from 'shared/client/EmailNotificationsSettings';
import { Employee } from 'shared/client/Employee';
import { Employments } from 'shared/client/Employments';
import { Genders } from 'shared/client/Genders';
import { JobTypes } from 'shared/client/JobTypes';
import { LanguageLevel } from 'shared/client/LanguageLevel';
import { Languages } from 'shared/client/Languages';
import { Location } from 'shared/client/Location';
import { MaritalStatuses } from 'shared/client/MaritalStatuses';
import { PayoutPeriods } from 'shared/client/PayoutPeriods';
import { Religions } from 'shared/client/Religions';
import { Relocations } from 'shared/client/Relocations';
import { RequirementsLevel } from 'shared/client/RequirementsLevel';
import { ResponseCanBeDoneBy } from 'shared/client/ResponseCanBeDoneBy';
import { Skills } from 'shared/client/Skills';
import { SourceOfInformation } from 'shared/client/SourceOfInformation';
import { Specializations } from 'shared/client/Specializations';
import { WorkFeatures } from 'shared/client/WorkFeatures';
import { YearsOfExperience } from 'shared/client/YearsOfExperience';
import type { DictionaryInner } from 'shared/v2/dictionary';

import { BaseReferenceService } from './baseReferenceService';

export default class ReferenceService extends BaseReferenceService {
  // #region Map
  private gendersMapCache: Map<string, EntityCommonDictionary> = new Map();

  private specializationsMapCache: Map<string, EntityCommonDictionary> = new Map();

  private locationMapCache: Map<string, EntityCommonDictionary> = new Map();

  private languagesMapCache: Map<string, EntityCommonDictionary> = new Map();

  private employmentsMapCache: Map<string, EntityCommonDictionary> = new Map();

  private employeeNumbersMapCache: Map<string, EntityCommonDictionary> = new Map();

  private educationLevelMapCache: Map<string, EntityCommonDictionary> = new Map();

  private jobTypesMapCache: Map<string, EntityCommonDictionary> = new Map();

  private currencyMapCache: Map<string, EntityCommonDictionary> = new Map();

  private drivingLicensesMapCache: Map<string, EntityCommonDictionary> = new Map();

  private maritalStatusesMapCache: Map<string, EntityCommonDictionary> = new Map();

  private payoutPeriodsMapCache: Map<string, EntityCommonDictionary> = new Map();

  private religionsMapCache: Map<string, EntityCommonDictionary> = new Map();

  private relocationsMapCache: Map<string, EntityCommonDictionary> = new Map();

  private requirementsLevelMapCache: Map<string, EntityCommonDictionary> = new Map();

  private skillsMapCache: Map<string, EntityCommonDictionary> = new Map();

  private workFeaturesMapCache: Map<string, EntityCommonDictionary> = new Map();

  private yearsOfExperienceMapCache: Map<string, EntityCommonDictionary> = new Map();

  private languageLevelMapCache: Map<string, EntityCommonDictionary> = new Map();

  private citizenshipMapCache: Map<string, EntityCommonDictionary> = new Map();

  private sourceMapCache: Map<string, EntityCommonDictionary> = new Map();

  private emailNotificationsSettingsMapCache: Map<string, EntityCommonDictionary> = new Map();

  private countriesMapCache: Map<string, EntityCommonDictionary> = new Map();

  private complianceOfRequirementsMapCache: Map<string, EntityCommonDictionary> = new Map();

  private responseCanBeDoneByMapCache: Map<string, EntityCommonDictionary> = new Map();

  private specializationForCompanyMapCache: Map<string, EntityCommonDictionary> = new Map();

  private languagesOfNotifyMapCache: Map<string, DictionaryInner> = new Map();

  private gendersClient = new Genders();

  private specializationsClient = new Specializations();

  private locationClient = new Location();

  private languagesClient = new Languages();

  private employmentsClient = new Employments();

  private employeeNumbersClient = new Employee();

  private educationLevelClient = new EducationLevel();

  private jobTypesClient = new JobTypes();

  private currencyClient = new Currency();

  private drivingLicensesClient = new DrivingLicenses();

  private maritalStatusesClient = new MaritalStatuses();

  private payoutPeriodsClient = new PayoutPeriods();

  private religionsClient = new Religions();

  private relocationsClient = new Relocations();

  private requirementsLevelClient = new RequirementsLevel();

  private skillsClient = new Skills();

  private workFeaturesClient = new WorkFeatures();

  private yearsOfExperienceClient = new YearsOfExperience();

  private languageLevelClient = new LanguageLevel();

  private citizenshipClient = new Citizenship();

  private sourceClient = new SourceOfInformation();

  private emailNotificationsSettingsClient = new EmailNotificationsSettings();

  private countriesClient = new Countries();

  private complianceOfRequirementsClient = new ComplianceOfRequirements();

  private responseCanBeDoneByClient = new ResponseCanBeDoneBy();

  private dictionaryClient = new DictionaryApi();

  public get gendersMap(): Promise<Map<string, EntityCommonDictionary>> {
    return (async () =>
      await this.fetchItems(
        this.gendersMapCache,
        async () => await this.gendersClient.gendersList(),
      ))();
  }

  public get specializationsMap(): Promise<Map<string, EntityCommonDictionary>> {
    return (async () =>
      await this.fetchItems(
        this.specializationsMapCache,
        async () => await this.specializationsClient.specializationsList(),
      ))();
  }

  public get locationMap(): Promise<Map<string, EntityCommonDictionary>> {
    return (async () =>
      await this.fetchItems(
        this.locationMapCache,
        async () => await this.locationClient.locationList(),
      ))();
  }

  public get languagesMap(): Promise<Map<string, EntityCommonDictionary>> {
    return (async () =>
      await this.fetchItems(
        this.languagesMapCache,
        async () => await this.languagesClient.languagesList(),
      ))();
  }

  public get employmentsMap(): Promise<Map<string, EntityCommonDictionary>> {
    return (async () =>
      await this.fetchItems(
        this.employmentsMapCache,
        async () => await this.employmentsClient.employmentsList(),
      ))();
  }

  public get employeeNumbersMap(): Promise<Map<string, EntityCommonDictionary>> {
    return (async () =>
      await this.fetchItems(
        this.employeeNumbersMapCache,
        async () => await this.employeeNumbersClient.numbersList(),
      ))();
  }

  public get educationLevelMap(): Promise<Map<string, EntityCommonDictionary>> {
    return (async () =>
      await this.fetchItems(
        this.educationLevelMapCache,
        async () => await this.educationLevelClient.educationLevelList(),
      ))();
  }

  public get jobTypesMap(): Promise<Map<string, EntityCommonDictionary>> {
    return (async () =>
      await this.fetchItems(
        this.jobTypesMapCache,
        async () => await this.jobTypesClient.jobTypesList(),
      ))();
  }

  public get currencyMap(): Promise<Map<string, EntityCommonDictionary>> {
    return (async () =>
      await this.fetchItems(
        this.currencyMapCache,
        async () => await this.currencyClient.currencyList(),
      ))();
  }

  public get drivingLicensesMap(): Promise<Map<string, EntityCommonDictionary>> {
    return (async () =>
      await this.fetchItems(
        this.drivingLicensesMapCache,
        async () => await this.drivingLicensesClient.drivingLicensesList(),
      ))();
  }

  public get maritalStatusesMap(): Promise<Map<string, EntityCommonDictionary>> {
    return (async () =>
      await this.fetchItems(
        this.maritalStatusesMapCache,
        async () => await this.maritalStatusesClient.maritalStatusesList(),
      ))();
  }

  public get payoutPeriodsMap(): Promise<Map<string, EntityCommonDictionary>> {
    return (async () =>
      await this.fetchItems(
        this.payoutPeriodsMapCache,
        async () => await this.payoutPeriodsClient.payoutPeriodsList(),
      ))();
  }

  public get religionsMap(): Promise<Map<string, EntityCommonDictionary>> {
    return (async () =>
      await this.fetchItems(
        this.religionsMapCache,
        async () => await this.religionsClient.religionsList(),
      ))();
  }

  public get relocationsMap(): Promise<Map<string, EntityCommonDictionary>> {
    return (async () =>
      await this.fetchItems(
        this.relocationsMapCache,
        async () => await this.relocationsClient.relocationsList(),
      ))();
  }

  public get requirementsLevelMap(): Promise<Map<string, EntityCommonDictionary>> {
    return (async () =>
      await this.fetchItems(
        this.requirementsLevelMapCache,
        async () => await this.requirementsLevelClient.requirementsLevelList(),
      ))();
  }

  public get skillsMap(): Promise<Map<string, EntityCommonDictionary>> {
    return (async () =>
      await this.fetchItems(
        this.skillsMapCache,
        async () => await this.skillsClient.skillsList(),
      ))();
  }

  public get workFeaturesMap(): Promise<Map<string, EntityCommonDictionary>> {
    return (async () =>
      await this.fetchItems(
        this.workFeaturesMapCache,
        async () => await this.workFeaturesClient.workFeaturesList(),
      ))();
  }

  public get yearsOfExperienceMap(): Promise<Map<string, EntityCommonDictionary>> {
    return (async () =>
      await this.fetchItems(
        this.yearsOfExperienceMapCache,
        async () => await this.yearsOfExperienceClient.yearsOfExperienceList(),
      ))();
  }

  public get languageLevelMap(): Promise<Map<string, EntityCommonDictionary>> {
    return (async () =>
      await this.fetchItems(
        this.languageLevelMapCache,
        async () => await this.languageLevelClient.languageLevelList(),
      ))();
  }

  public get citizenshipMap(): Promise<Map<string, EntityCommonDictionary>> {
    return (async () =>
      await this.fetchItems(
        this.citizenshipMapCache,
        async () => await this.citizenshipClient.citizenshipList(),
      ))();
  }

  public get sourceMap(): Promise<Map<string, EntityCommonDictionary>> {
    return (async () =>
      await this.fetchItems(
        this.sourceMapCache,
        async () => await this.sourceClient.sourceOfInformationList(),
      ))();
  }

  public get emailNotificationsSettingsMap(): Promise<Map<string, EntityCommonDictionary>> {
    return (async () =>
      await this.fetchItems(
        this.emailNotificationsSettingsMapCache,
        async () => await this.emailNotificationsSettingsClient.emailNotificationsSettingsList(),
      ))();
  }

  public get countriesMap(): Promise<Map<string, EntityCommonDictionary>> {
    return (async () =>
      await this.fetchItems(
        this.countriesMapCache,
        async () => await this.countriesClient.countriesList(),
      ))();
  }

  public get complianceOfRequirementsMap(): Promise<Map<string, EntityCommonDictionary>> {
    return (async () =>
      await this.fetchItems(
        this.complianceOfRequirementsMapCache,
        async () => await this.complianceOfRequirementsClient.complianceOfRequirementsList(),
      ))();
  }

  public get responseCanBeDoneByMap(): Promise<Map<string, EntityCommonDictionary>> {
    return (async () =>
      await this.fetchItems(
        this.responseCanBeDoneByMapCache,
        async () => await this.responseCanBeDoneByClient.responseCanBeDoneByList(),
      ))();
  }

  public get specializationForCompany(): Promise<Map<string, EntityCommonDictionary>> {
    return (async () =>
      await this.fetchItems(
        this.specializationForCompanyMapCache,
        async () => await this.dictionaryClient.getCompanySpecializations(),
      ))();
  }

  public get languagesOfNotify(): Promise<Map<string, DictionaryInner>> {
    return (async () =>
      await this.fetchItems(
        this.languagesOfNotifyMapCache,
        async () => await this.dictionaryClient.getLanguagesOfNotify(),
      ))();
  }
}
