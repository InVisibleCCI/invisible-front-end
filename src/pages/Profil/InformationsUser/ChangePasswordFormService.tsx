import { IFieldType } from "components/Generics/GenericForm/interfaces/IFormType";
import _ from "lodash";
import { AuthService } from "services/AuthService";

export interface IResetPasswordFormValues {
    new_password: string;
    new_password_bis: string;
}
export class ChangePasswordFormService {
    static labelButton = "Modifier mon mot de passe";
    static formName = "ChangePassword"

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
        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i.test(dataFromForm.new_password)){
            errors.password = "Le mot de passe doit contenir une majuscule, une minuscule, un chiffre et minimum 8 caractères"
        }
        return errors;

    }

    static builderForm(): IFieldType[] {
        return [
            {

                payloadName: "old_password",
                type: "password",
                label: "Ancien mot de passe*"
            },
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
        const userApiService = new AuthService();
        userApiService.resetPassword(_.omit(data,'new_password_bis'), ChangePasswordFormService.formName)
    }
}