import { IFieldType } from "components/Generics/GenericForm/interfaces/IFormType";
import { ToastService } from "components/Generics/GenericToast/ToastService";
import _ from "lodash";
import { AuthService } from "services/AuthService";

export interface IRegisterFormValues {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    accept: boolean;
}

export class RegisterFormService {
    static labelButton = "S'inscrire";

    static getInitialValue(): IRegisterFormValues {
        return {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            accept: false
        }
    }

    static validateForm(dataFromForm: IRegisterFormValues) {
        let errors: any = {};

        if (!dataFromForm.first_name) {
            errors.first_name = 'Le prénom est requis';
        }

        if (!dataFromForm.last_name) {
            errors.last_name = 'Le nom de famille est requis';
        }

        if (!dataFromForm.email) {
            errors.email = "L'email est obligatoire";
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(dataFromForm.email)) {
            errors.email = "L'adresse email n'est pas au bon format";
        }

        if (!dataFromForm.password) {
            errors.password = 'Le mot de passe est obligatoire';
        }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i.test(dataFromForm.password)){
            errors.password = "Le mot de passe doit contenir une majuscule, une minuscule, un chiffre et minimum 8 caractères"
        }

        if (!dataFromForm.accept) {
            errors.accept = "Vous devez accepter les conditions générales d'utilisation";
        }

        return errors;

    }

    static builderForm(): IFieldType[] {
        return [
            {
                payloadName: "first_name",
                type: "inputText",
                label: "Prenom*", 
            },
            {

                payloadName: "last_name",
                type: "inputText",
                label: "Nom*"
            },
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
                payloadName: "accept",
                type: "checkbox",
                label: "J'accepte les conditions générales d'utilisation*"
            },

        ]

    }

    static onSubmit(data) {
        const userApiService = new AuthService();
        userApiService.create(_.omit(data, 'accept')).then(res => {
            ToastService.displayToast("success", "Compte créé", "Vous avez bien créé votre compte")
        }
        ).catch(error => {
            if (error.response.status === 409) {
                ToastService.displayToast("error", "Impossible de vous inscrire", error.response.data)
            } else {
                ToastService.displayToast("error", `Erreur ${error.response.status}`, 'Une erreur interne est surdqdvenue')
            }
        }
        )
    }
}