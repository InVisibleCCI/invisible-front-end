import { User } from "classes/User";
import { GenericFormService } from "components/Generics/GenericForm/GenericFormService";
import { IFieldType } from "components/Generics/GenericForm/interfaces/IFormType";
import { ToastService } from "components/Generics/GenericToast/ToastService";
import _ from "lodash";
import { AuthService } from "services/AuthService";

export interface EditProfileFormValues {
    id:number; 
    first_name: string;
    last_name: string;
    avatar_url: string | null; 
}
export class EditProfileFormService {
    static labelButton = "Editer mon profil";
    static formName = "EditProfile"

    static getInitialValue(values:User): EditProfileFormValues {
        return {
            id:values.id, 
            first_name: values.first_name,
            last_name: values.last_name,
            avatar_url: values.avatar ? values.avatar.src : null
        }
    }

    static validateForm(dataFromForm: EditProfileFormValues) {
        let errors: any = {};
        return errors;
    }

    static builderForm(): IFieldType[] {
        return [
            {

                payloadName: "first_name",
                type: "inputText",
                label: "Prénom"
            },
            {

                payloadName: "last_name",
                type: "inputText",
                label: "Nom"
            },
            {

                payloadName: "avatar_url",
                type: "inputText",
                label: "Url de l'avatar"
            }, 
            {

                payloadName: "id",
                type: "hidden",
                label: ""
            }
        ]

    }

    static onSubmit(data) {
        const {id} = data

        const userApiService = new AuthService();
        userApiService.update(id, data).then(() => {
            ToastService.displayToast("success", "Informations mises à jour", "Vos informations ont bien été mises à jour")
            GenericFormService.onSubmit$.next({
                formServiceName: EditProfileFormService.formName, 
                IsSubmitted: true
            })
            userApiService.me().then(user => AuthService.currentUser$.next(user))
        }).catch(error => {
            ToastService.displayToast("error", `Erreur ${error.response.status}`, 'Une erreur interne est survenue')
        })
    }
}