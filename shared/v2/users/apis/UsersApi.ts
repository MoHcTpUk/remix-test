/* tslint:disable */
/* eslint-disable */
/**
 * Users API
 * Users API
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
  GetUsers200Response,
  PostResendConfirmationRequest,
} from '../models';

export interface PostResendConfirmationOperationRequest {
    id: string;
    post_resend_confirmation_request?: PostResendConfirmationRequest;
}

export interface PostUsersSignInRequest {
    id: string;
    body?: object;
}

/**
 * 
 */
export class UsersApi extends runtime.BaseAPI {

    /**
     * Returns a list of users
     */
    async getUsersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetUsers200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a list of users
     */
    async getUsers(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetUsers200Response> {
        const response = await this.getUsersRaw(initOverrides);
        return await response.value();
    }

    /**
     * Request to resend email confirmation
     * Resend email confirmation
     */
    async postResendConfirmationRaw(requestParameters: PostResendConfirmationOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling postResendConfirmation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v2/users/{id}/resend-confirmation`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.post_resend_confirmation_request,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Request to resend email confirmation
     * Resend email confirmation
     */
    async postResendConfirmation(requestParameters: PostResendConfirmationOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postResendConfirmationRaw(requestParameters, initOverrides);
    }

    /**
     * Sign in as root admin
     */
    async postUsersSignInRaw(requestParameters: PostUsersSignInRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling postUsersSignIn.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v2/users/{id}/sign-in`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Sign in as root admin
     */
    async postUsersSignIn(requestParameters: PostUsersSignInRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postUsersSignInRaw(requestParameters, initOverrides);
    }

}