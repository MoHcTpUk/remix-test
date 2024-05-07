/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AdditionalInformation
 */
export interface AdditionalInformation {
    /**
     * 
     * @type {Array<Language>}
     * @memberof AdditionalInformation
     */
    languages?: Array<Language>;
    /**
     * 
     * @type {Array<string>}
     * @memberof AdditionalInformation
     */
    skill_ids?: Array<string> | null;
    /**
     * 
     * @type {Array<MultiLingualValue>}
     * @memberof AdditionalInformation
     */
    skill_names?: Array<MultiLingualValue>;
    /**
     * 
     * @type {Array<string>}
     * @memberof AdditionalInformation
     */
    driver_license_ids?: Array<string> | null;
    /**
     * 
     * @type {Array<MultiLingualValue>}
     * @memberof AdditionalInformation
     */
    driver_license_names?: Array<MultiLingualValue>;
    /**
     * 
     * @type {string}
     * @memberof AdditionalInformation
     */
    other_license?: string;
    /**
     * 
     * @type {string}
     * @memberof AdditionalInformation
     */
    religion_id?: string | null;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof AdditionalInformation
     */
    religion_name?: MultiLingualValue;
    /**
     * 
     * @type {string}
     * @memberof AdditionalInformation
     */
    marital_status_id?: string | null;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof AdditionalInformation
     */
    marital_status_name?: MultiLingualValue;
    /**
     * 
     * @type {string}
     * @memberof AdditionalInformation
     */
    citizenship_id?: string | null;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof AdditionalInformation
     */
    citizenship_name?: MultiLingualValue;
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
    education_level_id?: string | null;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof Education
     */
    education_level_name?: MultiLingualValue;
    /**
     * 
     * @type {string}
     * @memberof Education
     */
    institution?: string;
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
    /**
     * Position
     * @type {string}
     * @memberof Education
     */
    position?: string;
    /**
     * 
     * @type {MultiYearValue}
     * @memberof Education
     */
    start_year?: MultiYearValue;
    /**
     * 
     * @type {MultiYearValue}
     * @memberof Education
     */
    end_year?: MultiYearValue;
}
/**
 * 
 * @export
 * @interface GeneralInformation
 */
export interface GeneralInformation {
    /**
     * Job seeker photo
     * @type {string}
     * @memberof GeneralInformation
     */
    photo_uri?: string;
    /**
     * First name
     * @type {string}
     * @memberof GeneralInformation
     */
    first_name?: string;
    /**
     * Last name
     * @type {string}
     * @memberof GeneralInformation
     */
    last_name?: string;
    /**
     * Gender id
     * @type {string}
     * @memberof GeneralInformation
     */
    gender_id?: string;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof GeneralInformation
     */
    gender_name?: MultiLingualValue;
    /**
     * 
     * @type {MultiDateValue}
     * @memberof GeneralInformation
     */
    birthdate?: MultiDateValue;
    /**
     * 
     * @type {string}
     * @memberof GeneralInformation
     */
    email?: string;
    /**
     * Phone
     * @type {string}
     * @memberof GeneralInformation
     */
    phone?: string;
    /**
     * Language of notify id
     * @type {string}
     * @memberof GeneralInformation
     */
    language_of_notify_id?: string;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof GeneralInformation
     */
    language_of_notify_name?: MultiLingualValue;
}
/**
 * 
 * @export
 * @interface GetBatchResumes200Response
 */
export interface GetBatchResumes200Response {
    /**
     * 
     * @type {Array<Resume>}
     * @memberof GetBatchResumes200Response
     */
    data: Array<Resume>;
}
/**
 * 
 * @export
 * @interface GetResumes200Response
 */
export interface GetResumes200Response {
    /**
     * 
     * @type {Array<Resume>}
     * @memberof GetResumes200Response
     */
    data: Array<Resume>;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetResumes200Response
     */
    page_tokens?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof GetResumes200Response
     */
    max_pages: number;
}
/**
 * 
 * @export
 * @interface JobPosition
 */
export interface JobPosition {
    /**
     * 
     * @type {string}
     * @memberof JobPosition
     */
    specialization_id?: string | null;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof JobPosition
     */
    specialization_name?: MultiLingualValue;
    /**
     * Position
     * @type {string}
     * @memberof JobPosition
     */
    position?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof JobPosition
     */
    employment_type_ids?: Array<string>;
    /**
     * 
     * @type {Array<MultiLingualValue>}
     * @memberof JobPosition
     */
    employment_type_names?: Array<MultiLingualValue>;
    /**
     * 
     * @type {Array<string>}
     * @memberof JobPosition
     */
    work_feature_ids?: Array<string> | null;
    /**
     * 
     * @type {Array<MultiLingualValue>}
     * @memberof JobPosition
     */
    work_feature_names?: Array<MultiLingualValue>;
    /**
     * 
     * @type {string}
     * @memberof JobPosition
     */
    salary_payout_period_id?: string | null;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof JobPosition
     */
    salary_payout_period_name?: MultiLingualValue;
    /**
     * Salary fixed
     * @type {number}
     * @memberof JobPosition
     */
    salary_fixed?: number;
    /**
     * 
     * @type {number}
     * @memberof JobPosition
     */
    salary_from?: number;
    /**
     * Salary to
     * @type {number}
     * @memberof JobPosition
     */
    salary_to?: number;
    /**
     * 
     * @type {string}
     * @memberof JobPosition
     */
    currency_id?: string | null;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof JobPosition
     */
    currency_name?: MultiLingualValue;
    /**
     * Description
     * @type {string}
     * @memberof JobPosition
     */
    description?: string;
}
/**
 * 
 * @export
 * @interface Language
 */
export interface Language {
    /**
     * 
     * @type {string}
     * @memberof Language
     */
    language_id?: string;
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
    proficiency_level_id?: string;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof Language
     */
    proficiency_level_name?: MultiLingualValue;
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
     * 
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
     * 
     * @type {string}
     * @memberof Location
     */
    source_id?: string | null;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof Location
     */
    source_name?: MultiLingualValue;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    relocation_id?: string;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof Location
     */
    relocation_name?: MultiLingualValue;
    /**
     * 
     * @type {boolean}
     * @memberof Location
     */
    business_trips?: boolean;
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
 * @interface MultiYearValue
 */
export interface MultiYearValue {
    /**
     * 
     * @type {string}
     * @memberof MultiYearValue
     */
    en?: string;
    /**
     * 
     * @type {string}
     * @memberof MultiYearValue
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
    vacancy_id?: string;
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
 * @interface Resume
 */
export interface Resume {
    /**
     * Resume id
     * @type {string}
     * @memberof Resume
     */
    readonly id: string;
    /**
     * 
     * @type {GeneralInformation}
     * @memberof Resume
     */
    general_information?: GeneralInformation;
    /**
     * 
     * @type {Location}
     * @memberof Resume
     */
    location?: Location;
    /**
     * 
     * @type {JobPosition}
     * @memberof Resume
     */
    job_position?: JobPosition;
    /**
     * 
     * @type {Array<Education>}
     * @memberof Resume
     */
    education?: Array<Education>;
    /**
     * 
     * @type {Array<WorkExperience>}
     * @memberof Resume
     */
    work_experience?: Array<WorkExperience>;
    /**
     * 
     * @type {AdditionalInformation}
     * @memberof Resume
     */
    additional_information?: AdditionalInformation;
    /**
     * 
     * @type {Settings}
     * @memberof Resume
     */
    settings?: Settings;
    /**
     * Publication flag
     * @type {boolean}
     * @memberof Resume
     */
    published?: boolean;
    /**
     * Indicates if an access request has been made
     * @type {boolean}
     * @memberof Resume
     */
    access_requested?: boolean;
    /**
     * Deletion flag
     * @type {boolean}
     * @memberof Resume
     */
    readonly deleted?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Resume
     */
    readonly total_work_experience_in_months?: number;
    /**
     * 
     * @type {string}
     * @memberof Resume
     */
    readonly created_by?: string;
}
/**
 * 
 * @export
 * @interface Settings
 */
export interface Settings {
    /**
     * 
     * @type {string}
     * @memberof Settings
     */
    show_resume_to?: SettingsShowResumeToEnum;
    /**
     * 
     * @type {string}
     * @memberof Settings
     */
    show_phone_number_to?: SettingsShowPhoneNumberToEnum;
    /**
     * 
     * @type {string}
     * @memberof Settings
     */
    show_email_to?: SettingsShowEmailToEnum;
    /**
     * 
     * @type {string}
     * @memberof Settings
     */
    email_notifications?: SettingsEmailNotificationsEnum;
}


/**
 * @export
 */
export const SettingsShowResumeToEnum = {
    nobody: 'nobody',
    anyone: 'anyone'
} as const;
export type SettingsShowResumeToEnum = typeof SettingsShowResumeToEnum[keyof typeof SettingsShowResumeToEnum];

/**
 * @export
 */
export const SettingsShowPhoneNumberToEnum = {
    nobody: 'nobody',
    anyone: 'anyone'
} as const;
export type SettingsShowPhoneNumberToEnum = typeof SettingsShowPhoneNumberToEnum[keyof typeof SettingsShowPhoneNumberToEnum];

/**
 * @export
 */
export const SettingsShowEmailToEnum = {
    nobody: 'nobody',
    anyone: 'anyone'
} as const;
export type SettingsShowEmailToEnum = typeof SettingsShowEmailToEnum[keyof typeof SettingsShowEmailToEnum];

/**
 * @export
 */
export const SettingsEmailNotificationsEnum = {
    response: 'response',
    never: 'never'
} as const;
export type SettingsEmailNotificationsEnum = typeof SettingsEmailNotificationsEnum[keyof typeof SettingsEmailNotificationsEnum];

/**
 * 
 * @export
 * @interface WorkExperience
 */
export interface WorkExperience {
    /**
     * Specialization id
     * @type {string}
     * @memberof WorkExperience
     */
    specialization_id?: string;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof WorkExperience
     */
    specialization_name?: MultiLingualValue;
    /**
     * Position
     * @type {string}
     * @memberof WorkExperience
     */
    position?: string;
    /**
     * Company name
     * @type {string}
     * @memberof WorkExperience
     */
    company?: string;
    /**
     * 
     * @type {MultiDateValue}
     * @memberof WorkExperience
     */
    from?: MultiDateValue;
    /**
     * 
     * @type {MultiDateValue}
     * @memberof WorkExperience
     */
    to?: MultiDateValue;
    /**
     * Description
     * @type {string}
     * @memberof WorkExperience
     */
    description?: string;
}
