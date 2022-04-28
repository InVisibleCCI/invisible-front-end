
import { IFieldType } from "components/Generics/GenericForm/interfaces/IFormType";
import { BehaviorSubject } from "rxjs";
import { AuthService } from "services/AuthService";

export interface IConnectionFormValues {
    email: string;
    password: string;
    remember_me: boolean
}
export class ConnectionFormService {
    static labelButton = "Se connecter";
    static redirectTo$: BehaviorSubject<any> = new BehaviorSubject<any>(false);

    static getInitialValue(): IConnectionFormValues {
        return {
            email: '',
            password: '',
            remember_me: false,
        }
    }

    static validateForm(dataFromForm: IConnectionFormValues) {
        let errors: any = {};

        if (!dataFromForm.email) {
            errors.email = "L'email est obligatoire";
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(dataFromForm.email)) {
            errors.email = "L'adresse email n'est pas au bon format";
        }

        if (!dataFromForm.password) {
            errors.password = 'Le mot de passe est obligatoire';
        }
        return errors;

    }

    static builderForm(): IFieldType[] {
        return [
            {
                payloadName: "email",
                type: "inputText",
                label: "Email*"
            },
            {

                payloadName: "password",
                type: "password",
                label: "Mot de passe*"
            },
            {

                payloadName: "remember_me",
                type: "checkbox",
                label: "Se souvenir de moi*"
            },

        ]

    }

    static onSubmit(data) {
        const userApiService = new AuthService();
        userApiService.login(data);
        ConnectionFormService.redirectTo$.next(true);
    }
}