import { Merchant } from 'classes/Merchant';
import React from 'react';

interface Props{
    link:string,
    icon:any
}

export const SocialButton = ({link,icon}:Props) => {


    return <a href={link}>{icon}</a>
}