import React from 'react';
import {Route} from 'react-router-dom'
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import {useAuth} from "./hooks/auth.hook";

import HeaderContainer from "./Containers/HeaderContainer";

import { useTranslation } from "react-i18next";
import OwnPageContainer from "./Containers/OwnPageContainer";
import CountryPageContainer from "./Containers/CountryPageContainer";
import LoginPageContainer from "./Containers/LoginPageContainer";
import RegisterPageContainer from "./Containers/RegisterPageContainer";



function App({lang}) {

    const { t, i18n } = useTranslation();

    const {token, login, logout, userId, ava} = useAuth()
    const isAuthenticated = !!token

    console.log('ava', ava)



    return (
        <div className="App">
            <HeaderContainer t={t} i18n={i18n} lang={lang} logout={logout}  isAuthenticated={isAuthenticated} />
            <Route path={'/'} exact render={() => <OwnPageContainer ava={ava} lang={lang} t={t} />} />
            <Route path={'/country/:id'}  render={() => <CountryPageContainer t={t} />} />
            <Route path={'/register'} render={() => <RegisterPageContainer isAuthenticated={isAuthenticated}
                                                                           login={login}/>}/>
            <Route path={'/login'} render={() => <LoginPageContainer isAuthenticated={isAuthenticated}
                                                                     logout={logout}
                                                                     ava={ava}
                                                                     userId={userId}
                                                                     login={login}/>}/>
        </div>
    );
}

export default App;
