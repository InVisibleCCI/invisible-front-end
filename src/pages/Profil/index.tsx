import React, { useState } from "react"
import { useSessionContext } from "utils/types/contexts/SessionContext"
import { FavoritesUser } from "./FavoritesUser";
import { InformationsUser } from "./InformationsUser";
import { ProfilWrapper } from "./style"

export const Profil = () => {

    const [activeTab, setActiveTab] = useState('informations');

    const onClickTab = (e, tab) => {
        e.preventDefault()
        setActiveTab(tab)
    }


    return <ProfilWrapper>
        <div className="user-management-container">
            <a href="/information" onClick={(e) => onClickTab(e,'informations')}> <div className={activeTab === "informations" ? "active" : ""}> Coordonnées </div> </a>
            <a href="/favorites" onClick={(e) => onClickTab(e,'favorites')}> <div className={activeTab === "favorites" ? "active" : ""}> Favoris </div></a>
        </div>

        {activeTab == "informations" ? <InformationsUser/> : <FavoritesUser/>}

    </ProfilWrapper>
}