import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

interface IToastInvisible{
    severity: "info" | "success" | "warn" | "error"; 
    summary:string; 
    detail:string; 
    life:number;
}
export class ToastService{
    static showToast$?: BehaviorSubject<IToastInvisible|null> = new BehaviorSubject<IToastInvisible|null>(null);
    static toastLife : 5000; 

    static displayToast(severity:any,title:string, detail:string){
        ToastService.showToast$?.next({
            severity:severity, 
            summary: title, 
            detail:detail, 
            life: this.toastLife
        })
    }

}