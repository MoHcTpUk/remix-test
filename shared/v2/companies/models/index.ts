/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface Company
 */
export interface Company {
    /**
     * Company id
     * @type {string}
     * @memberof Company
     */
    readonly id: string;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    logo_uri?: string;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    specialization_id?: string;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof Company
     */
    specialization_name?: MultiLingualValue;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    phone?: string;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    city_id?: string;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof Company
     */
    city_name?: MultiLingualValue;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    address?: string;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    zip_code?: string;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    website?: string;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    number_of_employees_id?: string;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof Company
     */
    number_of_employees_name?: MultiLingualValue;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    description?: string;
    /**
     * Publication flag
     * @type {boolean}
     * @memberof Company
     */
    published?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Company
     */
    readonly number_of_vacancies?: number;
    /**
     * Deletion flag
     * @type {boolean}
     * @memberof Company
     */
    readonly deleted?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Company
     */
    readonly verified: boolean;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    readonly created_by?: string;
    /**
     * 
     * @type {number}
     * @memberof Company
     */
    readonly tax_id?: number;
}
/**
 * 
 * @export
 * @interface GetCompanies200Response
 */
export interface GetCompanies200Response {
    /**
     * 
     * @type {Array<Company>}
     * @memberof GetCompanies200Response
     */
    data: Array<Company>;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetCompanies200Response
     */
    page_tokens?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof GetCompanies200Response
     */
    max_pages: number;
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
 * @interface PostResendVerificationRequest
 */
export interface PostResendVerificationRequest {
    /**
     * 
     * @type {Locale}
     * @memberof PostResendVerificationRequest
     */
    locale?: Locale;
}
