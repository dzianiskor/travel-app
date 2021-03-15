import React from 'react';
import s from './CardCountry.module.css'
import {NavLink} from "react-router-dom";
import {languageFunc} from "../../common/functions/functions";

const CardCountry = ({t, lang, country, capital, img, id}) => {

    return (
        <NavLink to={`/country/${id}`}>
            <div className={s.card}>
                <div className={s.country}><h2>{languageFunc(lang,
                    'Страна',
                    'The country',
                    'Das Land ')}
                </h2></div>
                <div className={s.country}><h2>

                    {country}
                </h2></div>

                <div className={s.country}>
                    <span>{languageFunc(lang,
                        'Столица',
                        'Capital',
                        'Hauptstadt')}:</span>
                    {capital}
                </div>
                <img className={s.img}
                     src={img}
                     alt="photo_country"/>
            </div>
        </NavLink>
    );
};

export default CardCountry;