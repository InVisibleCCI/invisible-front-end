import { GenericFormService } from 'components/Generics/GenericForm/GenericFormService';
import { GenericModal } from 'components/Generics/GenericModal';
import { GenericToast } from 'components/Generics/GenericToast';
import { UserManagementTab } from 'components/UserManagementTab';
import React, { useEffect, useState } from 'react';
import ConnectionForm from './ConnectionForm';
import { ResetEmailForm } from './ResetEmailForm';
import { UserFormsWrapper } from './styles';

interface Props {
}

const Connection: React.FunctionComponent<Props> = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false); 

    const onClickResetPassword = (e) => {
        e.preventDefault()
        setIsVisible(true)
    }

    useEffect(() => {
        GenericFormService.onSubmit$.subscribe(event => {
            if(event?.formServiceName == "ResetEmail" && event.IsSubmitted){
                setIsVisible(false)
            }
        })
    })

    return <UserFormsWrapper>
        <UserManagementTab activeTab='connection' />
        <section className='user-forms'>
            <ConnectionForm />      
            <a href="reset-password" onClick={e => onClickResetPassword(e)}> J'ai oublié mon mot de passe </a>      
        </section>
        <GenericModal header="Demander un nouveau mot de passe" isVisible={isVisible} footer={null} onHide={() => setIsVisible(false)} content={<ResetEmailForm/>}/> 
    </UserFormsWrapper>

}


export default Connection;