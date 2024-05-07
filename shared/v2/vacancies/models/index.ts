/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AdditionalSkills
 */
export interface AdditionalSkills {
    /**
     * Skill ids
     * @type {Array<string>}
     * @memberof AdditionalSkills
     */
    skill_ids?: Array<string> | null;
    /**
     * 
     * @type {Array<MultiLingualValue>}
     * @memberof AdditionalSkills
     */
    skill_names?: Array<MultiLingualValue>;
    /**
     * Driver license ids
     * @type {Array<string>}
     * @memberof AdditionalSkills
     */
    driver_license_ids?: Array<string> | null;
    /**
     * 
     * @type {Array<MultiLingualValue>}
     * @memberof AdditionalSkills
     */
    driver_license_names?: Array<MultiLingualValue>;
    /**
     * Other licenses
     * @type {Array<string>}
     * @memberof AdditionalSkills
     */
    other_licenses?: Array<string>;
}
/**
 * 
 * @export
 * @interface Contacts
 */
export interface Contacts {
    /**
     * Company id
     * @type {string}
     * @memberof Contacts
     */
    company_id?: string;
    /**
     * Company name
     * @type {string}
     * @memberof Contacts
     */
    company_name?: string;
    /**
     * Contact phone
     * @type {string}
     * @memberof Contacts
     */
    contact_phone?: string;
    /**
     * Name of contact person
     * @type {string}
     * @memberof Contacts
     */
    first_name?: string;
    /**
     * Last name of contact person
     * @type {string}
     * @memberof Contacts
     */
    last_name?: string;
    /**
     * How did you know about us? (id)
     * @type {string}
     * @memberof Contacts
     */
    source_of_discovery_id?: string | null;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof Contacts
     */
    source_of_discovery_name?: MultiLingualValue;
}
/**
 * 
 * @export
 * @interface Education
 */
export interface Education {
    /**
     * 
     * @type {string}
     * @memberof Education
     */
    education_id?: string | null;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof Education
     */
    education_name?: MultiLingualValue;
    /**
     * Level of education id
     * @type {string}
     * @memberof Education
     */
    level_id?: string | null;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof Education
     */
    level_name?: MultiLingualValue;
    /**
     * 
     * @type {string}
     * @memberof Education
     */
    specialization_id?: string | null;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof Education
     */
    specialization_name?: MultiLingualValue;
}
/**
 * 
 * @export
 * @interface GetBatchVacancies200Response
 */
export interface GetBatchVacancies200Response {
    /**
     * 
     * @type {Array<Vacancy>}
     * @memberof GetBatchVacancies200Response
     */
    data: Array<Vacancy>;
}
/**
 * 
 * @export
 * @interface GetVacancies200Response
 */
export interface GetVacancies200Response {
    /**
     * 
     * @type {Array<Vacancy>}
     * @memberof GetVacancies200Response
     */
    data: Array<Vacancy>;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetVacancies200Response
     */
    page_tokens?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof GetVacancies200Response
     */
    max_pages: number;
}
/**
 * 
 * @export
 * @interface Language
 */
export interface Language {
    /**
     * Language knowledge id
     * @type {string}
     * @memberof Language
     */
    language_knowledge_id?: string | null;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof Language
     */
    language_knowledge_name?: MultiLingualValue;
    /**
     * 
     * @type {string}
     * @memberof Language
     */
    language_id?: string | null;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof Language
     */
    language_name?: MultiLingualValue;
    /**
     * 
     * @type {string}
     * @memberof Language
     */
    level_id?: string | null;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof Language
     */
    level_name?: MultiLingualValue;
}

/**
 * 
 * @export
 */
export const Locale = {
    en: 'en',
    th: 'th'
} as const;
export type Locale = typeof Locale[keyof typeof Locale];

/**
 * 
 * @export
 * @interface Location
 */
export interface Location {
    /**
     * Country id
     * @type {string}
     * @memberof Location
     */
    country_id?: string;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof Location
     */
    country_name?: MultiLingualValue;
    /**
     * Province/Region id
     * @type {string}
     * @memberof Location
     */
    region_id?: string;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof Location
     */
    region_name?: MultiLingualValue;
    /**
     * City/Town id
     * @type {string}
     * @memberof Location
     */
    city_id?: string;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof Location
     */
    city_name?: MultiLingualValue;
    /**
     * Address
     * @type {string}
     * @memberof Location
     */
    address?: string;
    /**
     * Language of notify id
     * @type {string}
     * @memberof Location
     */
    language_of_notify_id?: string;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof Location
     */
    language_of_notify_name?: MultiLingualValue;
    /**
     * Number of Employees id
     * @type {string}
     * @memberof Location
     */
    number_of_employees_id?: string;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof Location
     */
    number_of_employees_name?: MultiLingualValue;
}
/**
 * 
 * @export
 * @interface MultiDateValue
 */
export interface MultiDateValue {
    /**
     * 
     * @type {string}
     * @memberof MultiDateValue
     */
    en?: string;
    /**
     * 
     * @type {string}
     * @memberof MultiDateValue
     */
    th?: string;
}
/**
 * 
 * @export
 * @interface MultiLingualValue
 */
export interface MultiLingualValue {
    /**
     * 
     * @type {string}
     * @memberof MultiLingualValue
     */
    en?: string;
    /**
     * 
     * @type {string}
     * @memberof MultiLingualValue
     */
    th?: string;
}
/**
 * 
 * @export
 * @interface RequestAccess
 */
export interface RequestAccess {
    /**
     * 
     * @type {string}
     * @memberof RequestAccess
     */
    resume_id?: string;
    /**
     * 
     * @type {Locale}
     * @memberof RequestAccess
     */
    locale?: Locale;
}
/**
 * 
 * @export
 * @interface Requirements
 */
export interface Requirements {
    /**
     * 
     * @type {Array<Education>}
     * @memberof Requirements
     */
    education?: Array<Education>;
    /**
     * 
     * @type {Array<WorkExperience>}
     * @memberof Requirements
     */
    work_experience?: Array<WorkExperience>;
    /**
     * 
     * @type {Array<Language>}
     * @memberof Requirements
     */
    language?: Array<Language>;
}
/**
 * 
 * @export
 * @interface ResponsesVacancy
 */
export interface ResponsesVacancy {
    /**
     * Response can be done by (id)
     * @type {string}
     * @memberof ResponsesVacancy
     */
    response_can_be_done_by_id?: string;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof ResponsesVacancy
     */
    response_can_be_done_by_name?: MultiLingualValue;
    /**
     * Email for the response
     * @type {string}
     * @memberof ResponsesVacancy
     */
    email_for_the_responses?: string;
    /**
     * Get email notifications for (id)
     * @type {string}
     * @memberof ResponsesVacancy
     */
    get_email_notifications_for_id?: string;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof ResponsesVacancy
     */
    get_email_notifications_for_name?: MultiLingualValue;
    /**
     * Compliance of requirements (id)
     * @type {string}
     * @memberof ResponsesVacancy
     */
    compliance_of_requirements_id?: string;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof ResponsesVacancy
     */
    compliance_of_requirements_name?: MultiLingualValue;
    /**
     * Show phone number for verified employees only
     * @type {boolean}
     * @memberof ResponsesVacancy
     */
    show_phone_number?: boolean;
    /**
     * Show email for verified employees only
     * @type {boolean}
     * @memberof ResponsesVacancy
     */
    show_email?: boolean;
}
/**
 * 
 * @export
 * @interface Vacancy
 */
export interface Vacancy {
    /**
     * Vacancy id
     * @type {string}
     * @memberof Vacancy
     */
    readonly id: string;
    /**
     * 
     * @type {string}
     * @memberof Vacancy
     */
    readonly company_logo_uri?: string;
    /**
     * Vacancy editable for current user
     * @type {boolean}
     * @memberof Vacancy
     */
    readonly can_edit?: boolean;
    /**
     * 
     * @type {VacancyPage}
     * @memberof Vacancy
     */
    vacancy_page?: VacancyPage;
    /**
     * 
     * @type {Contacts}
     * @memberof Vacancy
     */
    contacts?: Contacts;
    /**
     * 
     * @type {Location}
     * @memberof Vacancy
     */
    location?: Location;
    /**
     * 
     * @type {Requirements}
     * @memberof Vacancy
     */
    requirements?: Requirements;
    /**
     * 
     * @type {ResponsesVacancy}
     * @memberof Vacancy
     */
    responses_vacancy?: ResponsesVacancy;
    /**
     * 
     * @type {AdditionalSkills}
     * @memberof Vacancy
     */
    additional_skills?: AdditionalSkills;
    /**
     * Publication flag
     * @type {boolean}
     * @memberof Vacancy
     */
    published?: boolean;
    /**
     * Indicates if an access request has been made
     * @type {boolean}
     * @memberof Vacancy
     */
    access_requested?: boolean;
    /**
     * Deletion flag
     * @type {boolean}
     * @memberof Vacancy
     */
    readonly deleted?: boolean;
    /**
     * 
     * @type {MultiDateValue}
     * @memberof Vacancy
     */
    created_at?: MultiDateValue;
    /**
     * 
     * @type {string}
     * @memberof Vacancy
     */
    readonly created_by?: string;
    /**
     * Indicates that the company that published the vacancy has been verified
     * @type {boolean}
     * @memberof Vacancy
     */
    readonly company_verified?: boolean;
}
/**
 * 
 * @export
 * @interface VacancyPage
 */
export interface VacancyPage {
    /**
     * 
     * @type {string}
     * @memberof VacancyPage
     */
    specialization_id?: string | null;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof VacancyPage
     */
    specialization_name?: MultiLingualValue;
    /**
     * Position
     * @type {string}
     * @memberof VacancyPage
     */
    position?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof VacancyPage
     */
    employment_type_ids?: Array<string>;
    /**
     * 
     * @type {Array<MultiLingualValue>}
     * @memberof VacancyPage
     */
    employment_type_names?: Array<MultiLingualValue>;
    /**
     * 
     * @type {Array<string>}
     * @memberof VacancyPage
     */
    work_feature_ids?: Array<string>;
    /**
     * 
     * @type {Array<MultiLingualValue>}
     * @memberof VacancyPage
     */
    work_feature_names?: Array<MultiLingualValue>;
    /**
     * Salary payout period id
     * @type {string}
     * @memberof VacancyPage
     */
    salary_payout_period_id?: string;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof VacancyPage
     */
    salary_payout_period_name?: MultiLingualValue;
    /**
     * Salary fixed
     * @type {number}
     * @memberof VacancyPage
     */
    salary_fixed?: number;
    /**
     * 
     * @type {number}
     * @memberof VacancyPage
     */
    salary_from?: number;
    /**
     * Salary to
     * @type {number}
     * @memberof VacancyPage
     */
    salary_to?: number;
    /**
     * Currency id
     * @type {string}
     * @memberof VacancyPage
     */
    currency_id?: string;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof VacancyPage
     */
    currency_name?: MultiLingualValue;
    /**
     * Description
     * @type {string}
     * @memberof VacancyPage
     */
    description?: string;
}
/**
 * 
 * @export
 * @interface WorkExperience
 */
export interface WorkExperience {
    /**
     * Work experience id
     * @type {string}
     * @memberof WorkExperience
     */
    work_experience_id?: string | null;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof WorkExperience
     */
    work_experience_name?: MultiLingualValue;
    /**
     * 
     * @type {string}
     * @memberof WorkExperience
     */
    period_of_work_id?: string | null;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof WorkExperience
     */
    period_of_work_name?: MultiLingualValue;
    /**
     * 
     * @type {string}
     * @memberof WorkExperience
     */
    specialization_id?: string | null;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof WorkExperience
     */
    specialization_name?: MultiLingualValue;
}
