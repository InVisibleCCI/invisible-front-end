import { IFieldType } from "components/Generics/GenericForm/interfaces/IFormType";
import { AuthService } from "services/AuthService";

export interface IResetEmailFormValues {
    email: string;
}

export class ResetEmailFormService {
    static labelButton = "Nouveau mot de passe";
    static formName = "ResetEmail"

    static getInitialValue(): IResetEmailFormValues {
        return {
            email: '',
        }
    }

    static validateForm(dataFromForm: IResetEmailFormValues) {
        let errors: any = {};
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(dataFromForm.email)) {
            errors.email = "L'adresse email n'est pas au bon format";
        }
        return errors;

    }

    static builderForm(): IFieldType[] {
        return [
            {
                payloadName: "email",
                type: "inputText",
                label: "Email*"
            }

        ]

    }

    static onSubmit(data) {
        const userApiService = new AuthService();
        userApiService.sendMailToGetNewPassword(data);
    }
}