/* tslint:disable */
/* eslint-disable */
/**
 * Resumes API
 * API for creating, and modifying resume
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
  GetBatchResumes200Response,
  GetResumes200Response,
  RequestAccess,
  Resume,
} from '../models';

export interface DeleteResumeRequest {
    id: string;
    resume?: Resume;
}

export interface GetBatchResumesRequest {
    ids: string;
}

export interface GetResumeRequest {
    id: string;
}

export interface GetResumesRequest {
    max_page_size?: number;
    pages?: Array<number>;
    page_token?: string;
    only_my?: boolean;
    date?: GetResumesDateEnum;
    specializations?: Array<string>;
    salary_from?: number;
    employments?: Array<string>;
    features?: Array<string>;
    educations?: Array<string>;
    experience?: Array<string>;
    q?: string;
    location?: string;
}

export interface PatchResumeRequest {
    id: string;
    resume?: Resume;
}

export interface PostResumeRequest {
    source?: string;
    resume?: Resume;
}

export interface PostResumesAccessRequest {
    id: string;
    request_access?: RequestAccess;
}

/**
 *
 */
export class ResumesApi extends runtime.BaseAPI {

    /**
     * Request to delete resume
     * Delete resume
     */
    async deleteResumeRaw(requestParameters: DeleteResumeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Resume>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteResume.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v2/resumes/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.resume,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Request to delete resume
     * Delete resume
     */
    async deleteResume(requestParameters: DeleteResumeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Resume> {
        const response = await this.deleteResumeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of resumes
     */
    async getBatchResumesRaw(requestParameters: GetBatchResumesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetBatchResumes200Response>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError('ids','Required parameter requestParameters.ids was null or undefined when calling getBatchResumes.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/batch/resumes/{ids}`.replace(`{${"ids"}}`, encodeURIComponent(String(requestParameters.ids))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a list of resumes
     */
    async getBatchResumes(requestParameters: GetBatchResumesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetBatchResumes200Response> {
        const response = await this.getBatchResumesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Request to get resume
     * Get resume
     */
    async getResumeRaw(requestParameters: GetResumeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Resume>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getResume.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/resumes/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Request to get resume
     * Get resume
     */
    async getResume(requestParameters: GetResumeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Resume> {
        const response = await this.getResumeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Request to get resumes
     * Get resumes
     */
    async getResumesRaw(requestParameters: GetResumesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetResumes200Response>> {
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

        if (requestParameters.q !== undefined) {
            queryParameters['q'] = requestParameters.q;
        }

        if (requestParameters.location !== undefined) {
            queryParameters['location'] = requestParameters.location;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/resumes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Request to get resumes
     * Get resumes
     */
    async getResumes(requestParameters: GetResumesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetResumes200Response> {
        const response = await this.getResumesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Request to update resume
     * Update resume
     */
    async patchResumeRaw(requestParameters: PatchResumeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Resume>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling patchResume.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v2/resumes/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.resume,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Request to update resume
     * Update resume
     */
    async patchResume(requestParameters: PatchResumeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Resume> {
        const response = await this.patchResumeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Request to create new resume
     * Create resume
     */
    async postResumeRaw(requestParameters: PostResumeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Resume>> {
        const queryParameters: any = {};

        if (requestParameters.source !== undefined) {
            queryParameters['source'] = requestParameters.source;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v2/resumes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.resume,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Request to create new resume
     * Create resume
     */
    async postResume(requestParameters: PostResumeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Resume> {
        const response = await this.postResumeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Requests access to hidden fields
     * Request Access
     */
    async postResumesAccessRaw(requestParameters: PostResumesAccessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Resume>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling postResumesAccess.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v2/resumes/{id}/access`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
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
    async postResumesAccess(requestParameters: PostResumesAccessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Resume> {
        const response = await this.postResumesAccessRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetResumesDateEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type GetResumesDateEnum = typeof GetResumesDateEnum[keyof typeof GetResumesDateEnum];