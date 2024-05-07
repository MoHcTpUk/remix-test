/* tslint:disable */
/* eslint-disable */
/**
 * Responses API
 * Responses API
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
  UploadResponse,
} from '../models';

export interface PostFilesUploadRequest {
    file_name?: Blob;
}

/**
 * 
 */
export class MediaApi extends runtime.BaseAPI {

    /**
     * Upload files to file storage
     */
    async postFilesUploadRaw(requestParameters: PostFilesUploadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UploadResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.file_name !== undefined) {
            formParams.append('fileName', requestParameters.file_name as any);
        }

        const response = await this.request({
            path: `/api/v2/files/upload`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Upload files to file storage
     */
    async postFilesUpload(requestParameters: PostFilesUploadRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UploadResponse> {
        const response = await this.postFilesUploadRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
