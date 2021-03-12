import React, {useState} from 'react';
import s from './Header.module.css'
import { Input } from 'antd';
import {editInputValue} from "../../redux/reducers/CountryCardsReducer";
import {NavLink} from "react-router-dom";


const Header = ({lang, editLang, inputValue, i18n, editArr, location, editInputValue, t}) => {


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
            {location.pathname !== '/' && <NavLink to={'/'}><div>{t("header.main")}</div></NavLink>}
        </div>
    );
};

export default Header;