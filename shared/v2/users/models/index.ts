/* tslint:disable */
/* eslint-disable */
/**
 *
 * @export
 * @interface GetUsers200Response
 */
export interface GetUsers200Response {
    /**
     *
     * @type {Array<UserInfo>}
     * @memberof GetUsers200Response
     */
    data: Array<UserInfo>;
}
/**
 *
 * @export
 * @interface GetUsersMe200Response
 */
export interface GetUsersMe200Response {
    /**
     *
     * @type {UserInfo}
     * @memberof GetUsersMe200Response
     */
    data: UserInfo;
    /**
     *
     * @type {object}
     * @memberof GetUsersMe200Response
     */
    error?: object;
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
 * @interface Notifications
 */
export interface Notifications {
    /**
     *
     * @type {boolean}
     * @memberof Notifications
     */
    email: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Notifications
     */
    phone: boolean;
}
/**
 *
 * @export
 * @interface PostResendConfirmationRequest
 */
export interface PostResendConfirmationRequest {
    /**
     *
     * @type {Locale}
     * @memberof PostResendConfirmationRequest
     */
    locale?: Locale;
}
/**
 *
 * @export
 * @interface UpdateUserInfo
 */
export interface UpdateUserInfo {
    /**
     *
     * @type {string}
     * @memberof UpdateUserInfo
     */
    photo?: string;
    /**
     *
     * @type {string}
     * @memberof UpdateUserInfo
     */
    first_name?: string;
    /**
     *
     * @type {string}
     * @memberof UpdateUserInfo
     */
    last_name?: string;
    /**
     *
     * @type {string}
     * @memberof UpdateUserInfo
     */
    gender?: string | null;
    /**
     *
     * @type {string}
     * @memberof UpdateUserInfo
     */
    birthday?: string | null;
    /**
     *
     * @type {MultiDateValue}
     * @memberof UpdateUserInfo
     */
    birthday_experimental?: MultiDateValue | null;
    /**
     *
     * @type {string}
     * @memberof UpdateUserInfo
     */
    phone?: string;
    /**
     *
     * @type {string}
     * @memberof UpdateUserInfo
     */
    primary_language?: string | null;
    /**
     *
     * @type {Notifications}
     * @memberof UpdateUserInfo
     */
    notifications?: Notifications;
}
/**
 *
 * @export
 * @interface UserInfo
 */
export interface UserInfo {
    /**
     *
     * @type {string}
     * @memberof UserInfo
     */
    readonly user_id: string;
    /**
     *
     * @type {string}
     * @memberof UserInfo
     */
    photo: string;
    /**
     *
     * @type {string}
     * @memberof UserInfo
     */
    first_name: string;
    /**
     *
     * @type {string}
     * @memberof UserInfo
     */
    last_name: string;
    /**
     *
     * @type {string}
     * @memberof UserInfo
     */
    gender?: string;
    /**
     *
     * @type {MultiDateValue}
     * @memberof UserInfo
     */
    birthday?: MultiDateValue | null;
    /**
     *
     * @type {string}
     * @memberof UserInfo
     */
    readonly email: string;
    /**
     *
     * @type {string}
     * @memberof UserInfo
     */
    phone: string;
    /**
     *
     * @type {string}
     * @memberof UserInfo
     */
    primary_language?: string;
    /**
     *
     * @type {Notifications}
     * @memberof UserInfo
     */
    notifications: Notifications;
    /**
     *
     * @type {boolean}
     * @memberof UserInfo
     */
    email_confirmed: boolean;
}
