import React, { useEffect, useState } from "react";
import { AuthService } from "services/AuthService";
import { FavoritesUser } from "./FavoritesUser";
import { InformationsUser } from "./InformationsUser";
import { ProfilWrapper } from "./style";

export const Profil = () => {

    const [activeTab, setActiveTab] = useState('informations');
    const [userEventFavorites, setUserEventFavorites] = useState<Event[]>();

    const authService = new AuthService();

    const onClickTab = (e, tab) => {
        e.preventDefault()
        setActiveTab(tab)
    }

    useEffect(() => {
        authService.getUserFavorites().then(eventFavorites => setUserEventFavorites(eventFavorites))
    }, [])


    return <ProfilWrapper>
        <div className="user-management-container">
            <a href="/information" onClick={(e) => onClickTab(e, 'informations')}> <div className={activeTab === "informations" ? "active" : ""}> Coordonnées </div> </a>
            <a href="/favorites" onClick={(e) => onClickTab(e, 'favorites')}> <div className={activeTab === "favorites" ? "active" : ""}> Favoris </div></a>
        </div>

        {activeTab == "informations" ? <InformationsUser /> :
            <React.Fragment>
                {userEventFavorites && <FavoritesUser favorites={userEventFavorites} />}
            </React.Fragment>
        }

    </ProfilWrapper>
}