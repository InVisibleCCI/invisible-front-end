import { UserManagementTab } from 'components/UserManagementTab';
import { UserFormsWrapper } from 'pages/Connection/styles';
import React from 'react';
import RegisterForm from './components/RegisterForm';

interface Props {
}

const Register: React.FunctionComponent<Props> = () => {


    return <UserFormsWrapper>
        <UserManagementTab activeTab='register'/>
        <section className='user-forms'>
            <RegisterForm />
        </section>
    </UserFormsWrapper>


}


export default Register;