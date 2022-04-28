import axios from "axios";
import { User } from "classes/User";
import { GenericFormService } from "components/Generics/GenericForm/GenericFormService";
import { ToastService } from "components/Generics/GenericToast/ToastService";
import _ from "lodash";
import { IConnectionFormValues } from "pages/Connection/ConnectionForm/ConnectionFormService";
import { ResetEmailFormService } from "pages/Connection/ResetEmailForm/ResetEmailFormService";
import { BehaviorSubject } from 'rxjs';
import { GenericApiService } from "./GenericApiService";

export class AuthService extends GenericApiService {
    static currentUser$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor() {
        super('users')
    }

    // Get user from backend
    me(): Promise<User> {
        const url = `${this.baseUrl}/me/`;
        return axios.get(url).then(r => r.data)
    }

    // This method uses credentials values (get by connection form) to get token and refresh token. If user wants "remember me", refresh token will be stored in local storage
    // We uses "currentUser" behavior subject to pass user through the application
    login(credentials: IConnectionFormValues): Promise<any> {
        const url = "token/"
        return axios.post(url, _.omit(credentials, 'remember_me')).then(result => {
            if (credentials.remember_me) {
                localStorage.setItem('refreshToken', result.data.refresh);
            } else {
                sessionStorage.setItem('refreshToken', result.data.refresh);
            }
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + result.data.access;
            this.me().then(user => {
                ToastService.displayToast("success", "Connexion réussie", `Bonjour ${user.first_name}`)
                AuthService.currentUser$.next(user)
            })
        }).catch(error => {
            if (error.response.status === 401) {
                ToastService.displayToast("error", "Impossible de vous connecter", error.response.data.detail)
            } else {
                ToastService.displayToast("error", `Erreur ${error.response.status}`, 'Une erreur interne est survenue')
            }
        }
        )
    }

    // This method get refresh token in local storage. If we have it we try to get token to authentify user. After we set up axios authorization header with new token
    initUser() {
        const refreshToken = sessionStorage.getItem('refreshToken') ?
            sessionStorage.getItem('refreshToken') : localStorage.getItem('refreshToken');
        if (refreshToken) {
            axios.post('token/refresh/', { refresh: refreshToken }).then(result => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + result.data.access;
                this.me().then(user => AuthService.currentUser$.next(user))
            }).catch(error => ToastService.displayToast("error", `Erreur ${error.response.status}`, 'Une erreur interne est survenue'))
        }
    }

    logout() {
        axios.defaults.headers.common['Authorization'] = "";
        localStorage.removeItem('refreshToken');
        sessionStorage.removeItem('refreshToken');
        AuthService.currentUser$.next(null);
        window.location.pathname="/"
    }

    resetPassword(payload, formName) {
        const url = `${this.baseUrl}/change-password/`;
        axios.post(url, payload).then(res => {
            if(window.location.pathname.includes("reset")){
                window.location.pathname = "/connection"
            }
            ToastService.displayToast("success", "Changement de mot de passe réussi", `Votre mot de passe a bien été modifié`)
            GenericFormService.onSubmit$.next({
                formServiceName:formName, 
                IsSubmitted:true
            })
        }
        ).catch(
            error => ToastService.displayToast("error", "Une erreur est survenue", error.response)
        )
    }

    sendMailToGetNewPassword(payload) {
        const url = `${this.baseUrl}/send-reset-password-mail/`;
        axios.post(url, payload).then(res => {
            ToastService.displayToast("success", "Demande de nouveau mot de passe", `Un email vous a été envoyé afin de renouveller votre mot de passe`)
            GenericFormService.onSubmit$.next({formServiceName:ResetEmailFormService.formName, IsSubmitted:true})
        }
        ).catch(
            error => ToastService.displayToast("error", "Une erreur est survenue", "")
        )
    }

    getUserFavorites(): Promise<Event[]> {
        const url = `${this.baseUrl}/favorites/`;
        return axios.get(url).then(r=>r.data)
    }
}