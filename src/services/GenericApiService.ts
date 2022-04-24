import axios from 'axios';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

// Read the doc : https://codinaaranxa.atlassian.net/wiki/spaces/IW/pages/2392065/Faire+des+appels+API
export interface IApiService{
    read(id: string): Promise<any>;
    list(pagination: any, filters: any, sorter: any): Promise<any>;
    create(data: any): Promise<any>;
    update(id: string, data: any): Promise<any>;
    delete(id: string): Promise<any>;
}

export class GenericApiService implements IApiService {
    static setupAxios$: BehaviorSubject<any> = new BehaviorSubject<any>(false);
    
    constructor(protected baseUrl: string) {

    }

    listBase(url: any, pagination: any, filters: any, sorter: any) {
        return axios.get(url).then(r => r.data)
    }

    read(id: string): Promise<any> {
        return axios.get(`${this.baseUrl}/${id}`).then(r => r.data);
    }

    list(pagination: any = null, filters: any = null, sorter: any = null): Promise<any> {
        return this.listBase(`${this.baseUrl}`, pagination, filters, sorter);
    }

    create(data: any): Promise<any> {
        return axios.post(`${this.baseUrl}`, data).then(r => r.data);
    }
    update(id: string, data: any): Promise<any> {
        return axios.patch(`${this.baseUrl}/${id}`, data).then(r => r.data);
    }
    delete(id: string): Promise<any> {
        return axios.delete(`${this.baseUrl}/${id}`).then(r => r.data);
    }
}
