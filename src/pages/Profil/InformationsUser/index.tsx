import { GenericButton } from "components/Generics/GenericButton";
import { GenericForm } from "components/Generics/GenericForm";
import { GenericFormService } from "components/Generics/GenericForm/GenericFormService";
import { GenericModal } from "components/Generics/GenericModal";
import moment from "moment";
import { MapDivider } from "pages/Search/components/DesktopResult/styles";
import React, { useEffect, useState } from "react";
import { useSessionContext } from "utils/types/contexts/SessionContext";
import { ChangePasswordFormService } from "./ChangePasswordFormService";
import { EditProfileFormService } from "./EditProfileFormService";
import { InformationsUserWrapper, ProfilImageWrapper } from "./style";

export const InformationsUser = () => {

    const { currentUser } = useSessionContext();

    const [changePassword,setChangePassword] = useState<boolean>(false);
    const [updateProfile,setUpdateProfile] = useState<boolean>(false); 

    useEffect(() => {
        GenericFormService.onSubmit$.subscribe(form => {
            if(form){
                if(form.formServiceName === "ChangePassword"){
                    setChangePassword(false)
                }
                if(form.formServiceName === "EditProfile"){
                    setUpdateProfile(false)
                }
            }
        })
    }, [])


    return <InformationsUserWrapper>
        {currentUser && <React.Fragment>
            <ProfilImageWrapper 
                url={currentUser.avatar ? currentUser.avatar.src : "https://i.stack.imgur.com/l60Hf.png"}
                alt={currentUser.avatar ? currentUser.avatar.alt_text : "Avatar par défaut de l'utilisateur"}
                size="large"
                />
            
                <p> <b> Votre nom : </b> {currentUser.first_name} {currentUser.last_name} </p>
                <p> <b> Membre depuis : </b> {moment(currentUser.date_joined).format("DD/MM/YYYY")} </p>            
        </React.Fragment>
        }

       
        <GenericButton onClick={() => setChangePassword(true)} className="button-profile" type="button" label="Changer mon mot de passe" />
        <GenericButton className="button-profile" onClick={() => setUpdateProfile(true)} type="button" label="Editer mon profil" />

        <GenericModal header="Changer mon nouveau mot de passe" isVisible={changePassword} footer={null} onHide={() => setChangePassword(false)} content={<GenericForm service={ChangePasswordFormService}/>}/>
        <GenericModal header="Editer mon profil" isVisible={updateProfile} footer={null} onHide={() => setUpdateProfile(false)} content={<GenericForm initialValues={currentUser} service={EditProfileFormService}/>} />
    </InformationsUserWrapper>
}