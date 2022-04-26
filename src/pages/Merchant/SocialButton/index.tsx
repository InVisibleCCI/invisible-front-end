import { Merchant } from 'classes/Merchant';
import React from 'react';
import { SocialButtonWrapper } from './styles';

interface Props{
    link:string,
    icon:any
}

export const SocialButton = ({link,icon}:Props) => {


    return <SocialButtonWrapper active={link ? true: false}>
        <a href={link}>{icon}</a>
    </SocialButtonWrapper>
    
    
}