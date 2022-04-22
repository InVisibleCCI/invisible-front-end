import { AuthService } from "services/AuthService";

export interface IResetPasswordFormValues {
    new_password: string;
    new_password_bis: string;
}

export interface IFieldType {
    payloadName: string;
    type: string;
    label: string;
}


export class ResetPasswordFormService {
    static labelButton = "Modifier mon mot de passe";

    static getInitialValue(): IResetPasswordFormValues {
        return {
            new_password: '',
            new_password_bis: '',
        }
    }

    static validateForm(dataFromForm: IResetPasswordFormValues) {
        let errors: any = {};


        return errors;

    }

    static builderForm(): IFieldType[] {
        return [
            {

                payloadName: "new_password",
                type: "password",
                label: "Nouveau mot de passe*"
            },
            {

                payloadName: "new_password_bis",
                type: "password",
                label: "Répétez le mot de passe*"
            },

        ]

    }

    static onSubmit(data) {
        const currentUrlParams = window.location.pathname.split('/');
        const temporaryPassword = currentUrlParams[2];
        const securityMailPassword = currentUrlParams[3];
        const userApiService = new AuthService();
        let payload = {
            old_password: temporaryPassword,
            security_email_token: securityMailPassword,
            new_password: data.new_password
        }
        userApiService.resetPassword(payload)
        window.location.pathname = "/connection"
    }
}