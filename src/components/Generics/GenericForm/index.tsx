import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { GenericButton } from '../GenericButton';

interface Props {
    service : any
}


export const GenericForm: React.FunctionComponent<Props> = ({service}) => {
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState<any>({});

    const formik = useFormik({
        initialValues: service.getInitialValue(),
        validate: (data) => service.validateForm(data),
        onSubmit: (data) => {
            setFormData(data);
            setShowMessage(true);
            service.onSubmit(data); 
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    const passwordHeader = <h6>Pick a password</h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );

    
    return  <form onSubmit={formik.handleSubmit} className="p-fluid">
    {
        service.builderForm().map(field => {
            return (
                <div key={field.payloadName} className="field">
                    <span className="p-float-label">
                        {field.type === "inputText" &&
                            <InputText
                                id={field.payloadName}
                                name={field.payloadName}
                                value={formik.values[field.payloadName]}
                                onChange={formik.handleChange} autoFocus
                                className={classNames({ 'p-invalid': isFormFieldValid(field.payloadName) })}
                            />}

                        {field.type === "password" &&
                            <Password 
                            id={field.payloadName}
                            name={field.payloadName}
                            value={formik.values[field.payloadName]} 
                            onChange={formik.handleChange} 
                            toggleMask
                            className={classNames({ 'p-invalid': isFormFieldValid(field.payloadName) })} 
                            header={passwordHeader} footer={passwordFooter} />
                        }

                        {
                            field.type === "checkbox" &&
                            <Checkbox 
                            inputId={field.payloadName} name={field.payloadName} checked={formik.values[field.payloadName]} 
                            onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid(field.payloadName) })} />
                        }

                        <label htmlFor={field.payloadName} className={classNames({ 'p-error': isFormFieldValid(field.payloadName) })}>{field.label}</label>
                    </span>
                    {getFormErrorMessage(field.payloadName)}
                </div>
            )
        })
    }
    <GenericButton type="submit" label={service.labelButton}/>
</form>
}