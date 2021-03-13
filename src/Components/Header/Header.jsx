import React, {useState} from 'react';
import s from './Header.module.css'
import { Input } from 'antd';
import {editInputValue} from "../../redux/reducers/CountryCardsReducer";
import {NavLink} from "react-router-dom";
import {useAuth} from "../../hooks/auth.hook";


const Header = ({lang,
                    isAuthenticated,
                    editLang,
                    inputValue,
                    logout,
                    i18n, editArr, location, editInputValue, IsSuccess, t}) => {
    const { Search } = Input;
    //const onSearch = value => console.log(value);
    return (
        <div className={s.header}>
            <select value={lang} onChange={(e) => {
                editLang(e.target.value)

            }}>
                <option>Русский</option>
                <option>English</option>
                <option>Deutsche</option>
            </select>
            {location.pathname === '/' && <div>
                <Search value={inputValue}
                        autoFocus={true}
                        onChange={(e) => {
                    editInputValue(e.currentTarget.value)

                }}
                        placeholder="input search text" allowClear  style={{ width: 200 }} />
            </div>}
            <div>{location.pathname !== '/' && <NavLink to={'/'}><div>Главная</div></NavLink>}</div>
{/*
            <div>
                {!isAuthenticated
            && location.pathname !== '/register'
            && <NavLink to={'/register'}>Регистрация</NavLink>}
            </div>
*/}
            <div>
                {!isAuthenticated
            && location.pathname !== '/login'
            && <NavLink to={'/login'}>Sign</NavLink>}
            </div>
            {!!isAuthenticated && <div onClick={() => {
                IsSuccess(null)
                logout()}}>logout</div>}

            </div>
    );
};

export default Header;