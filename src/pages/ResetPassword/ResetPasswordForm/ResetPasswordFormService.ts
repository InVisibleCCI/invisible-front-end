import { IFieldType } from "components/Generics/GenericForm/interfaces/IFormType";
import { AuthService } from "services/AuthService";

export interface IResetPasswordFormValues {
    new_password: string;
    new_password_bis: string;
}
export class ResetPasswordFormService {
    static labelButton = "Modifier mon mot de passe";
    static formName = "ResetPassword"

    static getInitialValue(): IResetPasswordFormValues {
        return {
            new_password: '',
            new_password_bis: '',
        }
    }

    static validateForm(dataFromForm: IResetPasswordFormValues) {
        let errors: any = {};

        if (dataFromForm.new_password !== dataFromForm.new_password_bis) {
            errors.new_password = "Les mots de passe ne correspondent pas";
        }
        if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\w~@#$%^&*+=`|{}:;!.?\"()\[\]-]{8,25}$/i.test(dataFromForm.new_password)){
            errors.password = "Le mot de passe doit contenir une majuscule, une minuscule, un chiffre et minimum 8 caractères"
        }
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
                label: "Répétez le mot de passe*",
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
        userApiService.resetPassword(payload, ResetPasswordFormService.formName)
    }
}