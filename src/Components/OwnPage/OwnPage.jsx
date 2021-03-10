import React from 'react';
import CardCountry from "../CardCountry/CardCountry";
import s from './OwnPage.module.css'

const OwnPage = ({t, countrysForCard, lang, inputValue, SearchArr}) => {


    return (
        <div className={s.ownPage}>
            {inputValue && SearchArr.map(card => <CardCountry
                t={t} key={card.id}
                id={card.id}
                lang={lang}
                country={card.country}
                capital={card.capital}
                img={card.img}
            />)}
            {!inputValue && countrysForCard.map(card => <CardCountry
                t={t} key={card.id}
                id={card.id}
                lang={lang}
                country={card.country}
                capital={card.capital}
                img={card.img}
            />)}
        </div>
    );
};

export default OwnPage;