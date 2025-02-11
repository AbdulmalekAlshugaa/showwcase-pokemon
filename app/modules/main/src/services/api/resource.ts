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

    async getById<T = unknown>(id: string | number, params: {} | undefined, config?: AxiosRequestConfig) {
        const response = await this.api.apisauce.get<BasicResponse<T>>(`${this.endpoint}/${id}`, params, config);
        return this.api.transformResponse(response);
    }

    async getByParameters<T = unknown>(params: {} | undefined, config?: AxiosRequestConfig) {
        const response = await this.api.apisauce.get<BasicResponse<T>>(`${this.endpoint}`, params, config);

        return this.api.transformResponse(response);
    }

    async post<T = unknown, U = unknown>(payload?: U, config?: AxiosRequestConfig) {
        const response = await this.api.apisauce.post<BasicResponse<T>>(`${this.endpoint}`, payload, config);
        return this.api.transformResponse(response);
    }

    async postById<T = unknown, U = unknown>(id: string | number, payload: U, config?: AxiosRequestConfig) {
        const response = await this.api.apisauce.post<BasicResponse<T>>(`${this.endpoint}/${id}`, payload, config);
        return this.api.transformResponse(response);
    }

    async deleteById(id: string | number, config?: AxiosRequestConfig) {
        const response = await this.api.apisauce.delete<BasicResponse>(`${this.endpoint}/${id}`, config);
        return this.api.transformResponse(response);
    }

    async deleteByParameters<T = unknown, U = unknown>(payload: U, config?: AxiosRequestConfig) {
        const response = await this.api.apisauce.delete<BasicResponse<T>>(this.endpoint, payload, config);
        return this.api.transformResponse(response);
    }

    async patch<T = unknown, U = unknown>(payload: U, config?: AxiosRequestConfig) {
        const response = await this.api.apisauce.patch<BasicResponse<T>>(this.endpoint, payload, config);
        return this.api.transformResponse(response);
    }
}
