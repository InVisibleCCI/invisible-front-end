import { GenericForm } from 'components/Generics/GenericForm';
import React from 'react';
import { ResetPasswordFormService } from './ResetPasswordFormService';
import { ResetPasswordFormWrapper } from './styles';

interface Props {
}

const ResetPasswordForm: React.FunctionComponent<Props> = () => {
    return (
        <ResetPasswordFormWrapper>
            <div className="form-demo">
                <div className="flex justify-content-center">
                    <div className="card">
                        <GenericForm service={ResetPasswordFormService} registerMode={true} />
                    </div>
                </div>
            </div>
        </ResetPasswordFormWrapper>
    );
}

export default ResetPasswordForm; 