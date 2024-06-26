/* tslint:disable */
/* eslint-disable */
/**
 * Vacancies API
 * Vacancies API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from './../../runtime';
import type {
  GetBatchVacancies200Response,
  GetVacancies200Response,
  RequestAccess,
  Vacancy,
} from '../models';

export interface DeleteVacancyRequest {
    id: string;
}

export interface GetBatchVacanciesRequest {
    ids: string;
}

export interface GetVacanciesRequest {
    max_page_size?: number;
    pages?: Array<number>;
    page_token?: string;
    only_my?: boolean;
    date?: GetVacanciesDateEnum;
    specializations?: Array<string>;
    salary_from?: number;
    employments?: Array<string>;
    features?: Array<string>;
    educations?: Array<string>;
    experience?: Array<string>;
    company?: string;
    q?: string;
    location?: string;
}

export interface GetVacancyRequest {
    id: string;
}

export interface PatchVacancyRequest {
    id: string;
    vacancy?: Vacancy;
}

export interface PostVacanciesRequest {
    source?: string;
    vacancy?: Vacancy;
}

export interface PostVacanciesAccessRequest {
    id: string;
    request_access?: RequestAccess;
}

/**
 *
 */
export class VacanciesApi extends runtime.BaseAPI {

    /**
     * Request to delete vacancy
     * Delete vacancy
     */
    async deleteVacancyRaw(requestParameters: DeleteVacancyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Vacancy>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteVacancy.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/vacancies/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Request to delete vacancy
     * Delete vacancy
     */
    async deleteVacancy(requestParameters: DeleteVacancyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Vacancy> {
        const response = await this.deleteVacancyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of vacancies
     */
    async getBatchVacanciesRaw(requestParameters: GetBatchVacanciesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetBatchVacancies200Response>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError('ids','Required parameter requestParameters.ids was null or undefined when calling getBatchVacancies.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/batch/vacancies/{ids}`.replace(`{${"ids"}}`, encodeURIComponent(String(requestParameters.ids))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a list of vacancies
     */
    async getBatchVacancies(requestParameters: GetBatchVacanciesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetBatchVacancies200Response> {
        const response = await this.getBatchVacanciesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Request to get vacancies
     * Get vacancies
     */
    async getVacanciesRaw(requestParameters: GetVacanciesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetVacancies200Response>> {
        const queryParameters: any = {};

        if (requestParameters.max_page_size !== undefined) {
            queryParameters['max_page_size'] = requestParameters.max_page_size;
        }

        if (requestParameters.pages) {
            queryParameters['pages'] = requestParameters.pages;
        }

        if (requestParameters.page_token !== undefined) {
            queryParameters['page_token'] = requestParameters.page_token;
        }

        if (requestParameters.only_my !== undefined) {
            queryParameters['only_my'] = requestParameters.only_my;
        }

        if (requestParameters.date !== undefined) {
            queryParameters['date'] = requestParameters.date;
        }

        if (requestParameters.specializations) {
            queryParameters['specializations'] = requestParameters.specializations;
        }

        if (requestParameters.salary_from !== undefined) {
            queryParameters['salary_from'] = requestParameters.salary_from;
        }

        if (requestParameters.employments) {
            queryParameters['employments[]'] = requestParameters.employments;
        }

        if (requestParameters.features) {
            queryParameters['features'] = requestParameters.features;
        }

        if (requestParameters.educations) {
            queryParameters['educations'] = requestParameters.educations;
        }

        if (requestParameters.experience) {
            queryParameters['experience'] = requestParameters.experience;
        }

        if (requestParameters.company !== undefined) {
            queryParameters['company'] = requestParameters.company;
        }

        if (requestParameters.q !== undefined) {
            queryParameters['q'] = requestParameters.q;
        }

        if (requestParameters.location !== undefined) {
            queryParameters['location'] = requestParameters.location;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/vacancies`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Request to get vacancies
     * Get vacancies
     */
    async getVacancies(requestParameters: GetVacanciesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetVacancies200Response> {
        const response = await this.getVacanciesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Request to get vacancy
     * Get vacancy
     */
    async getVacancyRaw(requestParameters: GetVacancyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Vacancy>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getVacancy.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/vacancies/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Request to get vacancy
     * Get vacancy
     */
    async getVacancy(requestParameters: GetVacancyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Vacancy> {
        const response = await this.getVacancyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Request to update vacancy info
     * Update vacancy
     */
    async patchVacancyRaw(requestParameters: PatchVacancyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Vacancy>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling patchVacancy.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v2/vacancies/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.vacancy,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Request to update vacancy info
     * Update vacancy
     */
    async patchVacancy(requestParameters: PatchVacancyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Vacancy> {
        const response = await this.patchVacancyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Request to create new vacancy
     * Create vacancy
     */
    async postVacanciesRaw(requestParameters: PostVacanciesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Vacancy>> {
        const queryParameters: any = {};

        if (requestParameters.source !== undefined) {
            queryParameters['source'] = requestParameters.source;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v2/vacancies`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.vacancy,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Request to create new vacancy
     * Create vacancy
     */
    async postVacancies(requestParameters: PostVacanciesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Vacancy> {
        const response = await this.postVacanciesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Requests access to hidden fields
     * Request Access
     */
    async postVacanciesAccessRaw(requestParameters: PostVacanciesAccessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Vacancy>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling postVacanciesAccess.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v2/vacancies/{id}/access`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.request_access,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Requests access to hidden fields
     * Request Access
     */
    async postVacanciesAccess(requestParameters: PostVacanciesAccessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Vacancy> {
        const response = await this.postVacanciesAccessRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetVacanciesDateEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type GetVacanciesDateEnum = typeof GetVacanciesDateEnum[keyof typeof GetVacanciesDateEnum];
