import { UserManagementTab } from 'components/UserManagementTab';
import React from 'react';
import ResetPasswordForm from './ResetPasswordForm';
import { UserFormsWrapper } from './styles';

interface Props {
}

const ResetPassword: React.FunctionComponent<Props> = () => {

    return <UserFormsWrapper>
        <UserManagementTab activeTab='' />
        <section className='user-forms'>
            <p> Créer un nouveau mot de passe </p>
            <ResetPasswordForm />
        </section>
    </UserFormsWrapper>

}


export default ResetPassword;