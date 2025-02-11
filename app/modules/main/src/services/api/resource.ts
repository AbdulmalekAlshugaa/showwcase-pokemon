import { AxiosRequestConfig } from 'axios';
import { Api } from './api';
import { BasicResponse } from './api.types';

export default class ResourceApi {
    api: Api;
    endpoint: string;
    entity?: string;
    plural?: string;

    constructor({ endpoint, entity, plural }: { endpoint: string; entity?: string; plural?: string }) {
        this.api = new Api();
        this.endpoint = endpoint || plural || `${entity}s`;
        this.entity = entity;
        this.plural = plural || `${entity}s`;
    }

    async get<T = unknown>(config?: AxiosRequestConfig) {
        const response = await this.api.apisauce.get<BasicResponse<T>>(`${this.endpoint}`, config);
        return this.api.transformResponse(response);
    }

    async post<T = unknown, U = unknown>(payload?: U, config?: AxiosRequestConfig) {
        const response = await this.api.apisauce.post<BasicResponse<T>>(`${this.endpoint}`, payload, config);
        return this.api.transformResponse(response);
    }

    async patch<T = unknown, U = unknown>(payload: U, config?: AxiosRequestConfig) {
        const response = await this.api.apisauce.patch<BasicResponse<T>>(this.endpoint, payload, config);
        return this.api.transformResponse(response);
    }

    async put<T = unknown, U = unknown>(payload: U, config?: AxiosRequestConfig) {
        const response = await this.api.apisauce.put<BasicResponse<T>>(this.endpoint, payload, config);
        return this.api.transformResponse(response);
    }

    async delete<T = unknown>(config?: AxiosRequestConfig) {
        const response = await this.api.apisauce.delete<BasicResponse<T>>(this.endpoint, config);
        return this.api.transformResponse(response);
    }
}
