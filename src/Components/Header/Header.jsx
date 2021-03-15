import React, {useState} from 'react';
import s from './Header.module.css'
import { Input } from 'antd';
import cn from 'classnames';
import {NavLink} from "react-router-dom";

import { Select } from 'antd';
import {languageFunc} from "../../common/functions/functions";

const { Option } = Select;




const Header = ({lang,
                    isAuthenticated,
                    editLang,
                    inputValue,
                    logout,
                    name,
                    i18n, editArr, location, editInputValue, IsSuccess, t}) => {
    const { Search } = Input;

    const [visable, setVisable] = useState(false)
    window.onscroll = () => {
        let scrollTop = document.body.parentElement.scrollTop;
        (scrollTop > 390) ? setVisable(true) : setVisable(false)
    }



    const onSearch = () => window.scrollTo(0, 391);




    function handleChange(value) {
        editLang(value)
    }

    return (
        <div className={cn(s.header,
            {[s.visable]:!!visable && location.pathname === '/'},
            {[s.unvisable]: !visable && location.pathname === '/' })}>
{/*            <select value={lang} onChange={(e) => {
                editLang(e.target.value)

            }}>
                <option>Русский</option>
                <option>English</option>
                <option>Deutsche</option>
            </select>*/}
            <div>{name}</div>
            <div className={s.selected}>
            <Select defaultValue={lang} style={{ width: 60 }} onChange={handleChange}>
                <Option value="Русский">RU</Option>
                <Option value="English">EN</Option>
                <Option value="Deutsche" >DE</Option>
            </Select>
            </div>



            {location.pathname === '/' && <div>
                { !!visable && <Search value={inputValue}
                        autoFocus={true}
                        onSearch={onSearch}
                        onChange={(e) => {
                    editInputValue(e.currentTarget.value)

                }}
                        placeholder={languageFunc(lang,
                            'Введите город или страну',
                            'Enter city or country ',
                            'Stadt oder Land eingeben ')} allowClear  style={{ width: 200 }} />}
            </div>}
            <div>{location.pathname !== '/' && <NavLink to={'/'}><div>Главная</div></NavLink>}</div>
            <div>
                {!isAuthenticated
            && location.pathname !== '/login'
            && <NavLink to={'/login'}>{languageFunc(lang,
                    'Авторизироваться',
                    'Sign',
                    'Anmeldung ')}</NavLink>}
            </div>
            {!!isAuthenticated && <div onClick={() => {
                IsSuccess(null)
                logout()}}>{languageFunc(lang,
                'Выйти',
                'Sign Out',
                'Hinausgehen')}</div>}

            </div>
    );
};

export default Header;