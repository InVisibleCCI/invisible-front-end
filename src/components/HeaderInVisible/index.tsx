import { GenericButton } from 'components/Generics/GenericButton'
import SearchInput from 'components/SearchInput'
import React from 'react'
import logoWhite from '../Logo/img/logo-blanc.png'
import { HeaderInVisibleWrapper } from './style'

export const HeaderInVisible = () => {
    return <HeaderInVisibleWrapper>
            <h1> Avec <span id="logo-title"><img src={logoWhite} alt="logo"></img> </span> Visible</h1>
            <h2> Trouvez une activité à proximité !</h2>
            <SearchInput />
            <div id="more-container">
                <p> Pas d'envie particulière ? Laissez vous guider </p>
                <a href="#section-tags-container">
                    <GenericButton label='Découvrir les offres' type='button' color='black' backgroundColor='white' borderColor='white' backgroundColorHover='white' borderColorHover='white' />
                </a>
            </div>
    </HeaderInVisibleWrapper>
}