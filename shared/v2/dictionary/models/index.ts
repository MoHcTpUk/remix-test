/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface DictionaryInner
 */
export interface DictionaryInner {
    /**
     * 
     * @type {string}
     * @memberof DictionaryInner
     */
    readonly id: string;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof DictionaryInner
     */
    value: MultiLingualValue;
}
/**
 * 
 * @export
 * @interface Location
 */
export interface Location {
    /**
     * Location id
     * @type {string}
     * @memberof Location
     */
    readonly id: string;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof Location
     */
    name: MultiLingualValue;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    region_id: string;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof Location
     */
    region_name: MultiLingualValue;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    country_id: string;
    /**
     * 
     * @type {MultiLingualValue}
     * @memberof Location
     */
    country_name: MultiLingualValue;
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
    en: string;
    /**
     * 
     * @type {string}
     * @memberof MultiLingualValue
     */
    th: string;
}
