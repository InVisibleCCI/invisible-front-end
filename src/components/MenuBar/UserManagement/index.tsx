import { ProfilImageWrapper } from 'pages/Profil/InformationsUser/style';
import React, { useEffect } from 'react';
import { AuthService } from 'services/AuthService';
import { useSessionContext } from 'utils/types/contexts/SessionContext';
import { UserManagementWrapper } from './styles';

const UserManagement: React.FunctionComponent = () => {
    const authService = new AuthService();
    const { currentUser } = useSessionContext();

    useEffect(() => { }, [currentUser])

    const onClickLogout = (event) => {
        event.preventDefault();
        authService.logout()
    }

    return <UserManagementWrapper>
        <div id="user-management">
            {currentUser ? <div>
                <span><a href="/disconnection" onClick={(e) => onClickLogout(e)}> {'Déconnexion'} </a> </span>
                <a id="profil-link" href="/profile">
                    <ProfilImageWrapper
                        url={currentUser.avatar ? currentUser.avatar.src : "https://i.stack.imgur.com/l60Hf.png"}
                        alt={currentUser.avatar ? currentUser.avatar.alt_text : "Avatar par défaut de l'utilisateur"}
                        size="small"
                    />
                </a>
            </div> :
                <div>
                    <span><a href="/register"> {'Inscription'} </a> </span>
                    <span><a href="/connection"> {'Connexion'} </a></span>
                    <span><i className="fa-solid fa-user"></i> </span>
                </div>
            }
        </div>
    </UserManagementWrapper>
}

export default UserManagement