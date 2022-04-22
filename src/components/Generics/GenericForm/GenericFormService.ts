import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

interface IGenericFormInvisible{
    formServiceName: string; 
    IsSubmitted: boolean|undefined
}

export class GenericFormService{
    static onSubmit$: BehaviorSubject<IGenericFormInvisible|null> = new BehaviorSubject<IGenericFormInvisible|null>(null);
} 