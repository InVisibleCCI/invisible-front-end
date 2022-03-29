import { GenericForm } from 'components/Generics/GenericForm';
import React from 'react';
import { RegisterFormService } from './RegisterFormService';

interface Props {
}

const RegisterForm: React.FunctionComponent<Props> = () => {


    return (
        <div className="form-demo">
            <div className="flex justify-content-center">
                <div className="card">
                    <GenericForm service={RegisterFormService} />
                </div>
            </div>
        </div>
    );
}

export default RegisterForm; 