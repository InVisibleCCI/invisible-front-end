import axios from "axios";
import { User } from "classes/User";
import { BehaviorSubject } from 'rxjs';
import _ from "lodash";
import { IConnectionFormValues } from "pages/Connection/ConnectionForm/ConnectionFormService";
import { GenericApiService } from "./GenericApiService";

export class AuthService extends GenericApiService {
    static currentUser$: BehaviorSubject<any> = new BehaviorSubject<any>(null); 

    constructor() {
        super('users/')
    }

    me(): Promise<User> {
        const url = `${this.baseUrl}me/`;
        return axios.get(url).then(r => r.data)
    }

    login(credentials: IConnectionFormValues): Promise<any> {
        const url = "token/"
        return axios.post(url, _.omit(credentials, 'remember_me')).then(result => {
            if (credentials.remember_me) {
                localStorage.setItem('refreshToken', result.data.refresh);
            } else {
                sessionStorage.setItem('refreshToken', result.data.refresh);
            }
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + result.data.access;
            this.me().then(user => AuthService.currentUser$.next(user))
        }).catch(error => {
            console.log(error)
        }
        )
    }

    initUser() {
        const refreshToken = sessionStorage.getItem('refreshToken') ?
            sessionStorage.getItem('refreshToken') : localStorage.getItem('refreshToken');
        if (refreshToken) {
            axios.post('token/refresh/', { refresh: refreshToken }).then(result => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + result.data.access;
                this.me().then(user => AuthService.currentUser$.next(user))
            }).catch(error => console.log(error))
        }
    }

    logout() {
        axios.defaults.headers.common['Authorization'] = "";
        localStorage.removeItem('refreshToken');
        sessionStorage.removeItem('refreshToken');
        AuthService.currentUser$.next(null);
    }
}