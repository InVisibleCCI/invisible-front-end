import React from "react"
import { UserManagementTabWrapper } from "./styles"

interface Props {
    activeTab: string
}

export const UserManagementTab: React.FunctionComponent<Props> = ({ activeTab }) => {
    return <UserManagementTabWrapper>
        <div className="user-management-container">
            <a href="/connection"> <div className={activeTab === "connection" ? "active" :""}> Se connecter </div> </a>
            <a href="/register"> <div className={activeTab === "register" ? "active" :""}> Créer un compte </div></a>
        </div>
    </UserManagementTabWrapper>

}