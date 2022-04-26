import { Merchant } from "classes/Merchant"
import { ProfilImageWrapper } from "pages/Profil/InformationsUser/style"
import React from "react"
import { Openings } from "../Openings"
import { SocialButton } from "../SocialButton"
import { MerchantInfoCardWrapper } from "./style"

interface Props {
    merchant: Merchant
}

export const MerchantInfoCard = ({ merchant }: Props) => {
    return <MerchantInfoCardWrapper>
        <div className="header-info-merchant">
            <ProfilImageWrapper
                url={merchant.logo ? merchant.logo.src : "https://i.stack.imgur.com/l60Hf.png"}
                alt={merchant.logo ? merchant.logo.alt_text : "Logo par defaut d'un commerçant"}
                size="medium"
            />
            <div className="right-info-merchant">
                <h1> {merchant.name}</h1>
                <div id="icons-social-container">
                    <SocialButton link={merchant.instagram_url} icon={<i className="pi pi-instagram"></i>} />
                    <SocialButton link={merchant.twitter_url} icon={<i className="pi pi-twitter"></i>} />
                    <SocialButton link={merchant.facebook_url} icon={<i className="pi pi-facebook"></i>} />
                </div>
            </div>
        </div>
        <div>
            <p> {merchant.description && merchant.description}</p>

        </div>
        <div className="merchant-bottom-card">
            <div>
                <h4> Horaires : </h4>
                <Openings openings={merchant.regular_openings}/>
            </div>
            <div>
                <h4> Téléphone : </h4>
                <p> {merchant.phone_number}</p>
                <h4> Adresse : </h4>
                <p> {merchant.address.line1}</p>
                <p> {merchant.address.line2 && merchant.address.line2}</p>
                <p> {merchant.address.zipcode} {merchant.address.city} </p>
            </div>
        </div>

    </MerchantInfoCardWrapper>

}