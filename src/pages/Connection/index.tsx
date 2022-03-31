import { GenericToast } from 'components/Generics/GenericToast';
import { UserManagementTab } from 'components/UserManagementTab';
import React from 'react';
import ConnectionForm from './ConnectionForm';
import { UserFormsWrapper } from './styles';

interface Props {
}

const Connection: React.FunctionComponent<Props> = () => {

    return <UserFormsWrapper>
        <UserManagementTab activeTab='connection' />
        <section className='user-forms'>
            <ConnectionForm />
        </section>
    </UserFormsWrapper>

}


export default Connection;