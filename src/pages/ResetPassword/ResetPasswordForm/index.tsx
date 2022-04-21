import { GenericForm } from 'components/Generics/GenericForm';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ResetPasswordFormService } from './ResetPasswordFormService';
import { ResetPasswordFormWrapper } from './styles';

interface Props {
}

const ResetPasswordForm: React.FunctionComponent<Props> = () => {

    let {temporaryPassword, securityMailToken} = useParams(); 
    
    useEffect(() => {
        console.log(window.location.pathname.split('/')[3])
    }, [])
    return (
        <ResetPasswordFormWrapper>
            <div className="form-demo">
                <div className="flex justify-content-center">
                    <div className="card">
                        <GenericForm service={ResetPasswordFormService} />
                    </div>
                </div>
            </div>
        </ResetPasswordFormWrapper>
    );
}

export default ResetPasswordForm; 