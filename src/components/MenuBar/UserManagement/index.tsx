import React, { useEffect } from 'react';
import { AuthService } from 'services/AuthService';
import { useSessionContext } from 'utils/types/contexts/SessionContext';
import { UserManagementWrapper } from './styles';

const UserManagement: React.FunctionComponent = () => {
    const authService = new AuthService();
    const { currentUser } = useSessionContext();

    useEffect(() => { }, [currentUser])

    return <UserManagementWrapper>
        <div className='test'>
            {currentUser ? <div>
                <a onClick={() => authService.logout()}> Deconnexion </a>
                <p> {currentUser.first_name} </p>
            </div> :
                <div>
                    <a href="/register"> Inscription </a>
                    <a href="/connection"> Connexion </a>

                </div>
            }

        </div>
    </UserManagementWrapper>
}

export default UserManagement