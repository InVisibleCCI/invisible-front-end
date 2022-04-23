import React from "react"
import Logoipsum1 from '../../../components/Logo/img/logoipsum_1.png'
import Logoipsum2 from '../../../components/Logo/img/logoipsum_2.png'
import Logoipsum3 from '../../../components/Logo/img/logoipsum_3.png'
import Logoipsum4 from '../../../components/Logo/img/logoipsum_4.png'
import { PartnersWrapper } from "./style"


export const Partners = () => {
    return <PartnersWrapper className="container">
        <h3> Nos Partenaires </h3>
        <div id="partners-container">
            <div className="logo-container">
                <img src={Logoipsum4} alt="logoipsum4" />
            </div>
            <div className="logo-container">
                <img src={Logoipsum3} alt="logoipsum3" />
            </div>
            <div className="logo-container">
                <img src={Logoipsum2} alt="logoipsum2" />
            </div>
            <div className="logo-container">
                <img src={Logoipsum1} alt="logoipsum1" />
            </div>
        </div>
    </PartnersWrapper>
}