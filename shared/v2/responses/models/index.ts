/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface GetEntitiesResponses200Response
 */
export interface GetEntitiesResponses200Response {
    /**
     * 
     * @type {Array<ResponsesGroupedByEntity>}
     * @memberof GetEntitiesResponses200Response
     */
    data: Array<ResponsesGroupedByEntity>;
    /**
     * 
     * @type {string}
     * @memberof GetEntitiesResponses200Response
     */
    next_page_token?: string;
}
/**
 * 
 * @export
 * @interface GetEntityResponses200Response
 */
export interface GetEntityResponses200Response {
    /**
     * 
     * @type {Array<Response>}
     * @memberof GetEntityResponses200Response
     */
    data: Array<Response>;
    /**
     * 
     * @type {string}
     * @memberof GetEntityResponses200Response
     */
    next_page_token?: string;
}
/**
 * 
 * @export
 * @interface Response
 */
export interface Response {
    /**
     * 
     * @type {string}
     * @memberof Response
     */
    readonly id: string;
    /**
     * 
     * @type {string}
     * @memberof Response
     */
    state: string;
    /**
     * 
     * @type {string}
     * @memberof Response
     */
    readonly target_id?: string;
    /**
     * 
     * @type {string}
     * @memberof Response
     */
    readonly target_type?: string;
    /**
     * 
     * @type {string}
     * @memberof Response
     */
    readonly shared_id?: string;
    /**
     * 
     * @type {string}
     * @memberof Response
     */
    readonly shared_type?: string;
}

/**
 * 
 * @export
 */
export const ResponseType = {
    request: 'REQUEST',
    invitation: 'INVITATION'
} as const;
export type ResponseType = typeof ResponseType[keyof typeof ResponseType];

/**
 * 
 * @export
 * @interface ResponsesGroupedByEntity
 */
export interface ResponsesGroupedByEntity {
    /**
     * 
     * @type {string}
     * @memberof ResponsesGroupedByEntity
     */
    readonly entity_id: string;
    /**
     * 
     * @type {string}
     * @memberof ResponsesGroupedByEntity
     */
    readonly entity_type: string;
    /**
     * 
     * @type {Array<Response>}
     * @memberof ResponsesGroupedByEntity
     */
    responses: Array<Response>;
    /**
     * 
     * @type {Statistics}
     * @memberof ResponsesGroupedByEntity
     */
    statistics: Statistics;
}
/**
 * 
 * @export
 * @interface Statistics
 */
export interface Statistics {
    /**
     * 
     * @type {number}
     * @memberof Statistics
     */
    requests_total?: number;
    /**
     * 
     * @type {number}
     * @memberof Statistics
     */
    requests_viewed?: number;
    /**
     * 
     * @type {number}
     * @memberof Statistics
     */
    requests_approved?: number;
    /**
     * 
     * @type {number}
     * @memberof Statistics
     */
    requests_approved_and_viewed?: number;
    /**
     * 
     * @type {number}
     * @memberof Statistics
     */
    invitations_total?: number;
    /**
     * 
     * @type {number}
     * @memberof Statistics
     */
    new_invitations?: number;
}
