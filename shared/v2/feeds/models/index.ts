/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface Article
 */
export interface Article {
    /**
     * 
     * @type {string}
     * @memberof Article
     */
    image_uri: string;
    /**
     * 
     * @type {string}
     * @memberof Article
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Article
     */
    title_en: string;
    /**
     * 
     * @type {string}
     * @memberof Article
     */
    title_th: string;
    /**
     * 
     * @type {string}
     * @memberof Article
     */
    published_at: string;
}
/**
 * 
 * @export
 * @interface Data
 */
export interface Data {
    /**
     * 
     * @type {Array<PopularCompany>}
     * @memberof Data
     */
    popular_companies: Array<PopularCompany>;
    /**
     * 
     * @type {Array<News>}
     * @memberof Data
     */
    news: Array<News>;
    /**
     * 
     * @type {Array<Article>}
     * @memberof Data
     */
    articles: Array<Article>;
}
/**
 * 
 * @export
 * @interface Faq
 */
export interface Faq {
    /**
     * 
     * @type {FaqContent}
     * @memberof Faq
     */
    en: FaqContent;
    /**
     * 
     * @type {FaqContent}
     * @memberof Faq
     */
    th: FaqContent;
}
/**
 * 
 * @export
 * @interface FaqContent
 */
export interface FaqContent {
    /**
     * 
     * @type {string}
     * @memberof FaqContent
     */
    title: string;
    /**
     * 
     * @type {FaqContentText}
     * @memberof FaqContent
     */
    text: FaqContentText;
}
/**
 * 
 * @export
 * @interface FaqContentText
 */
export interface FaqContentText {
    /**
     * 
     * @type {string}
     * @memberof FaqContentText
     */
    subtitle?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FaqContentText
     */
    steps: Array<string>;
}
/**
 * 
 * @export
 * @interface GetFaq200Response
 */
export interface GetFaq200Response {
    /**
     * 
     * @type {Array<Faq>}
     * @memberof GetFaq200Response
     */
    data: Array<Faq>;
}
/**
 * 
 * @export
 * @interface GetFeedsResponse
 */
export interface GetFeedsResponse {
    /**
     * 
     * @type {Data}
     * @memberof GetFeedsResponse
     */
    data?: Data;
    /**
     * 
     * @type {object}
     * @memberof GetFeedsResponse
     */
    error?: object;
}
/**
 * 
 * @export
 * @interface News
 */
export interface News {
    /**
     * 
     * @type {string}
     * @memberof News
     */
    image_uri: string;
    /**
     * 
     * @type {string}
     * @memberof News
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof News
     */
    title_en: string;
    /**
     * 
     * @type {string}
     * @memberof News
     */
    title_th: string;
    /**
     * 
     * @type {string}
     * @memberof News
     */
    published_at: string;
}
/**
 * 
 * @export
 * @interface PopularCompany
 */
export interface PopularCompany {
    /**
     * 
     * @type {string}
     * @memberof PopularCompany
     */
    icon_uri: string;
    /**
     * 
     * @type {string}
     * @memberof PopularCompany
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof PopularCompany
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof PopularCompany
     */
    vacancies_count: number;
}
