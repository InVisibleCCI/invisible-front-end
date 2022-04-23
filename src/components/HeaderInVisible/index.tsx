import { GenericButton } from 'components/Generics/GenericButton'
import SearchInput from 'components/SearchInput'
import React from 'react'
import { HeaderInVisibleWrapper } from './style'
import logoWhite from '../Logo/img/logo-blanc.png'

export const HeaderInVisible = () => {
    return <HeaderInVisibleWrapper>
        <header>
            <h1> Avec <span id="logo-title"><img src={logoWhite} alt="logo"></img> </span> Visible</h1>
            <h2> Trouvez une activité à proximité !</h2>
            <SearchInput />
            <div id="more-container">
                <p> Pas d'envie particulière ? Laissez vous guider </p>
                <GenericButton label='Découvrir les offres' type='button' color='black' backgroundColor='white' borderColor='white' backgroundColorHover='white' borderColorHover='white' />
            </div>
        </header>
    </HeaderInVisibleWrapper>
}