import { GenericForm } from 'components/Generics/GenericForm';
import React from 'react';
import { RegisterFormService } from './RegisterFormService';
import { RegisterFormWrapper } from './style';

interface Props {
}

const RegisterForm: React.FunctionComponent<Props> = () => {


    return (
        <RegisterFormWrapper>
            <div className="form-demo">
                <div className="flex justify-content-center">
                    <div className="card">
                        <GenericForm registerMode={true} service={RegisterFormService} />
                    </div>
                </div>
            </div>
        </RegisterFormWrapper>
    );
}

export default RegisterForm; 