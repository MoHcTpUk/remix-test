import type { EntityCommonDictionary } from 'shared/client/data-contracts';
import type { DictionaryInner } from 'shared/v2/dictionary';

export interface IDictionaries {
  genders?: EntityCommonDictionary[];
  specializations?: EntityCommonDictionary[];
  location?: EntityCommonDictionary[];
  employment?: EntityCommonDictionary[];
  workfeatures?: EntityCommonDictionary[];
  educationLevel?: EntityCommonDictionary[];
  requirementsLevel?: EntityCommonDictionary[];
  yearsOfExperience?: EntityCommonDictionary[];
  languages?: EntityCommonDictionary[];
  emailNotificationsSettings?: EntityCommonDictionary[];
  languageLevel?: EntityCommonDictionary[];
  skills?: EntityCommonDictionary[];
  drivingLicenses?: EntityCommonDictionary[];
  citizenship?: EntityCommonDictionary[];
  relocations?: EntityCommonDictionary[];
  religions?: EntityCommonDictionary[];
  maritalStatuses?: EntityCommonDictionary[];
  payoutPeriods?: EntityCommonDictionary[];
  employeeNumbers?: EntityCommonDictionary[];
  sources?: EntityCommonDictionary[];
  currency?: EntityCommonDictionary[];
  countries?: EntityCommonDictionary[];
  responseCanBeDoneBy?: EntityCommonDictionary[];
  complianceOfRequirements?: EntityCommonDictionary[];
  specializationsForCompany?: EntityCommonDictionary[];
  languagesOfNotify?: DictionaryInner[];
}
