import React from 'react'
import { GenericForm } from "components/Generics/GenericForm"
import { ResetEmailFormService } from "./ResetEmailFormService"

export const ResetEmailForm = () => {
    return <GenericForm service={ResetEmailFormService} />
}