import { GenericFormService } from 'components/Generics/GenericForm/GenericFormService';
import { IFieldType } from 'components/Generics/GenericForm/interfaces/IFormType';
import { ToastService } from 'components/Generics/GenericToast/ToastService';
import { ReviewApiService } from '../../../../services/ReviewApiService';

export interface IAddCommentFormValues {
  title: string;
  description: string;
  mark: number;
}

/** Handle form logic
 *
 */
export class AddCommentFormService {
  static labelButton = "Ajouter un avis";
  static formServiceName = "addComment"

  static getInitialValue(): IAddCommentFormValues {
    return {
      title: '',
      description: '',
      mark: 5,
    }
  }

  static validateForm(dataFromForm: IAddCommentFormValues) {
    let errors: any = {};
    if ((dataFromForm.title).length >= 40) {
      errors.title = "Le titre est trop long";
    }
    if ((dataFromForm.description).length <= 15) {
      errors.description = "La description est trop ccourte";
    }
    if (dataFromForm.mark < 0) {
      errors.mark = "la note minimale est 0";
    }
    if (dataFromForm.mark > 5) {
      errors.mark = "la note maximale est 5";
    }
    return errors;
  }

  static builderForm(): IFieldType[] {
    return [
      {
        payloadName: "title",
        type: "inputText",
        label: "Titre*"
      },
      {
        payloadName: "description",
        type: "inputText",
        label: "Description*"
      },
      {
        payloadName: "mark",
        type: "rating",
        label: "Note*"
      },

    ]

  }

  static onSubmit(data) {
    const currentUrlParams = window.location.pathname.split('/');
    data.event_id = currentUrlParams[2]
    const reviewsApiService = new ReviewApiService();
    reviewsApiService.create(data).then(() => {
      ToastService.displayToast("success", "Avis posté", "Votre avis a bien été pris en compte")
      GenericFormService.onSubmit$.next({
        formServiceName:AddCommentFormService.formServiceName, 
        IsSubmitted:true
      })
    }).catch(error => {
      ToastService.displayToast("error", "Une erreur est survenue", "")});
  }
}