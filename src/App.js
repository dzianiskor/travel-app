import React from 'react';
import {Route} from 'react-router-dom'
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import {useAuth} from "./hooks/auth.hook";

import HeaderContainer from "./Containers/HeaderContainer";

import { useTranslation } from "react-i18next";
import OwnPageContainer from "./Containers/OwnPageContainer";
import CountryPageContainer from "./Containers/CountryPageContainer";



function App({lang}) {

    const { t, i18n } = useTranslation();


    const {token, login, logout, userId} = useAuth()
    const isAuthenticated = !!token



    return (
        <div className="App">
            <HeaderContainer t={t} i18n={i18n} lang={lang}  />

            <Route path={'/'} exact render={() => <OwnPageContainer lang={lang} t={t} />} />
            <Route path={'/country/:id'}  render={() => <CountryPageContainer t={t} />} />
            <Route path={'/register'} render={() => <RegisterPage login={login}/>}/>
            <Route path={'/login'} render={() => <LoginPage login={login}/>}/>
        </div>
    );
}

export default App;
