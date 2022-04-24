import { Toast } from "primereact/toast";
import React, { MutableRefObject, useEffect, useRef } from "react";
import { ToastService } from "./ToastService";

export const GenericToast = () => {
    const toast = useRef() as MutableRefObject<Toast>;

    useEffect(() => {
        ToastService.showToast$?.subscribe(newToast => {
            if (newToast !== null) {
                toast.current.show(newToast)
                setTimeout(() => toast.current.clear(), ToastService.toastLife);
            }
        })
    }, [])

    return <Toast ref={toast} />
}