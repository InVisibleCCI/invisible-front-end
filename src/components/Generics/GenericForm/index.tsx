import { useFormik } from 'formik';
import { Captcha } from 'primereact/captcha';
import { Checkbox } from 'primereact/checkbox';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { classNames } from 'primereact/utils';
import React, { useState } from 'react';
import { GenericButton } from '../GenericButton';
import { GenericFormWrapper } from './style';

interface Props {
    service: any;
    registerMode?: boolean;
    initialValues?:any
}


export const GenericForm: React.FunctionComponent<Props> = ({ service, registerMode = false, initialValues=null }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState<any>({});
  const [isValidCaptcha, setIsValidCaptcha] = useState<boolean>(false);


  const formik = useFormik({
    initialValues: service.getInitialValue(initialValues),
    validate: (data) => service.validateForm(data),
    onSubmit: (data) => {
      setFormData(data);
      setShowMessage(true);
      if (isValidCaptcha) {
        service.onSubmit(data);
        formik.resetForm();
      }
    }
  });

  const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
  };

  const passwordHeader = <h6>Choisir un mot de passe</h6>;
  const passwordFooter = (
    <React.Fragment>
      <Divider/>
      <p className="mt-2">Suggestions</p>
      <ul className="pl-2 ml-2 mt-0" style={{lineHeight: '1.5'}}>
        <li>Doit contenir une minuscule</li>
        <li>Doit contenir une majuscule</li>
        <li>Doir contenir au moins un chiffre</li>
        <li>Minimum 8 caractères</li>
      </ul>
    </React.Fragment>
  );


  return <GenericFormWrapper>
    <form onSubmit={formik.handleSubmit} className="p-fluid">
      {
        service.builderForm().map(field => {
          return (
            <div key={field.payloadName} className={`${field.type === "checkbox" && "checkbox-invisible"} field`}>
                            <span className="p-float-label">
                                {field.type === "inputText" &&
                                <InputText
                                  id={field.payloadName}
                                  name={field.payloadName}
                                  value={formik.values[field.payloadName]}
                                  onChange={formik.handleChange} autoFocus
                                  className={classNames({'p-invalid': isFormFieldValid(field.payloadName)})}
                                />}

                              {field.type === "password" &&
                              <Password
                                id={field.payloadName}
                                name={field.payloadName}
                                value={formik.values[field.payloadName]}
                                onChange={formik.handleChange}
                                toggleMask
                                className={classNames({'p-invalid': isFormFieldValid(field.payloadName)})}
                                header={(registerMode && field.payloadName !== "new_password_bis") && passwordHeader}
                                footer={(registerMode && field.payloadName !== "new_password_bis") && passwordFooter}
                                feedback={(registerMode && field.payloadName !== "new_password_bis")}
                              />
                              }

                              {
                                field.type === "checkbox" &&
                                <Checkbox
                                  inputId={field.payloadName} name={field.payloadName}
                                  checked={formik.values[field.payloadName]}
                                  onChange={formik.handleChange}
                                  className={classNames({'p-invalid': isFormFieldValid(field.payloadName)})}/>
                              }

                              {
                                field.type === "hidden" &&
                                <input type="hidden" name={field.payloadName}/>
                              }

                              <label htmlFor={field.payloadName}
                                     className={classNames({'p-error': isFormFieldValid(field.payloadName)})}>{field.label}</label>
                            </span>
              {getFormErrorMessage(field.payloadName)}
            </div>
          )
        })
      }
      <div className='captcha-container'>
        <Captcha siteKey={process.env.REACT_APP_CAPTCHA_SITE_KEY}
                 onResponse={() => setIsValidCaptcha(true)}
                 onExpire={() => setIsValidCaptcha(false)}
        />
        {!isValidCaptcha && showMessage &&
        <small className="p-error"> La validation du captcha est obligatoire </small>}
      </div>
      <GenericButton type="submit" label={service.labelButton}/>
    </form>
  </GenericFormWrapper>
}