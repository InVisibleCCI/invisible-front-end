import axios from 'axios'
import { User } from 'classes/User'
import { GenericToast } from 'components/Generics/GenericToast'
import Layout from 'components/Layout'
import { ProgressSpinner } from 'primereact/progressspinner'
import React, { useEffect, useState } from 'react'
import Routes from 'routes'
import { AuthService } from 'services/AuthService'
import { GenericApiService } from 'services/GenericApiService'
import { GlobalStyles } from 'utils/styles'
import { IGeolocation, SessionContext } from 'utils/types/contexts/SessionContext'

const App: React.FunctionComponent = () => {
    const [lastSearch, setLastSearch] = useState<string>('');
    const [currentUser, setCurrentUser] = useState<User>();
    const [currentGeolocation, setCurrentGeolocation] = useState<IGeolocation>()

    const authService = new AuthService();

    // Read the doc : https://codinaaranxa.atlassian.net/wiki/spaces/IW/pages/2392065/Faire+des+appels+API#Comment-axios-est-il-configur%C3%A9-?
    const setupAxios = () => {
        axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;
        GenericApiService.setupAxios$.next(true); 
    }

    useEffect(() => {
        setupAxios();
        authService.initUser();
        AuthService.currentUser$.subscribe(user => {
            setCurrentUser(user)
        })
        navigator.geolocation.getCurrentPosition(e => setCurrentGeolocation({ latitude: e.coords.latitude, longitude: e.coords.longitude }));

    }, [])

    return <React.Suspense fallback={< ProgressSpinner />}>
        <SessionContext.Provider value={{
            lastSearch, setLastSearch,
            currentUser, setCurrentUser,
            currentGeolocation, setCurrentGeolocation
        }}>
            <GlobalStyles />
            <Layout>
                <Routes />
            </Layout>
            <GenericToast />
        </SessionContext.Provider>
    </React.Suspense>
}

export default App