import React from "react";
import { Merchant } from "classes/Merchant";

interface Props{
    merchant:Merchant; 
}
export const MapAndEventsMerchant = ({merchant}:Props) => {
    return <section>
        <p> Map anbd event</p>
    </section>
}