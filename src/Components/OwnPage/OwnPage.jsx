import React from 'react';
import CardCountry from "../CardCountry/CardCountry";
import s from './OwnPage.module.css';
import CirklePreloader from "../preloaders/CirklePreloader/CirklePreloader";


const OwnPage = ({t, countrysForCard, lang, inputValue, SearchArr, isFetching, ava}) => {



    return (
        <div className={s.ownPage}>
            <img src={ava} alt=""/>
            {!!isFetching && <CirklePreloader />}
            {inputValue && SearchArr.map(card => <CardCountry
                t={t} key={card._id}
                id={card._id}
                lang={lang}
                country={card.name}
                capital={card.capital}
                img={card.img}
            />)}
            {!inputValue && !isFetching && countrysForCard.map(card => <CardCountry
                t={t}
                key={card._id}
                id={card._id}
                lang={lang}
                country={card.name}
                capital={card.capital}
                img={card.img}
            />)}
        </div>
    );
};

export default OwnPage;