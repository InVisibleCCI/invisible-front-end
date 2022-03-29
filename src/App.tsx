import axios from 'axios'
import { User } from 'classes/User'
import Layout from 'components/Layout'
import { ProgressSpinner } from 'primereact/progressspinner'
import React, { useEffect, useState } from 'react'
import Routes from 'routes'
import { AuthService } from 'services/AuthService'
import { GlobalStyles } from 'utils/styles'
import { SessionContext } from 'utils/types/contexts/SessionContext'

const App: React.FunctionComponent = () => {
    const [lastSearch, setLastSearch] = useState<string>('');
    const [currentUser, setCurrentUser] = useState<User>();
    const authService = new AuthService();

    const setupAxios = () => {
        axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;
    }

    useEffect(() => {
        setupAxios();
        authService.initUser();
        AuthService.currentUser$.subscribe(user => {
            setCurrentUser(user)
        })
    }, [])

    return <React.Suspense fallback={< ProgressSpinner />}>
        <SessionContext.Provider value={{ lastSearch, setLastSearch, currentUser, setCurrentUser }}>
            <GlobalStyles />
            <Layout>
                <Routes />
            </Layout>
        </SessionContext.Provider>
    </React.Suspense>
}

export default App