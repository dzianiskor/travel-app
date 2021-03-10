import React, {useEffect} from 'react';
import Gallery from "../Gallery/Gallery";


import s from './CountryPage.module.css'
import WeatherContainer from "../../Containers/WeatherContainer";
import ConverterContainer from "../../Containers/ConverterContainer";
import Mappp from "../Map/Map";
import Time from "../Widgets/Time/Time";

const CountryPage = ({match, allArr, lang, t}) => {





    let id = match.params.id;




    return (
        <div className={s.countrypage}>
            <h1>
                {lang === 'Русский' && allArr[id].nameCountry.ru}
                {lang === 'English' && allArr[id].nameCountry.eng}
                {lang === 'Deutsche' && allArr[id].nameCountry.gr}
            </h1>
            <img className={s.imgCountry} src={allArr[id].imgCountry} alt={'Беларусь'}/>
            <div>{t("countryCard.capital")}: <>
                {lang === 'Русский' && allArr[id].capital.ru}
                {lang === 'English' && allArr[id].capital.eng}
                {lang === 'Deutsche' && allArr[id].capital.gr}
            </>></div>
            <div>
                <p>{lang === 'Русский' && allArr[id].descriptionAboutCountry.ru}
                    {lang === 'English' && allArr[id].descriptionAboutCountry.eng}
                    {lang === 'Deutsche' && allArr[id].descriptionAboutCountry.gr}</p>
            </div>

            <WeatherContainer city={allArr[id].capital.ru} />
            <ConverterContainer />
            <div>
                <Time utc={allArr[id].utc} />
            </div>
            <Gallery id={id} allArr={allArr} lang={lang}  />


{/*
            <ReactPlayer onPlay={() => alert('Валера')}   url='https://www.youtube.com/watch?v=eOFQCDAA9ok' />
*/}


            <Mappp country={allArr[id].countryISO}
                   lang={lang}
                   zoom={allArr[id].zoom}
                   coordCapital={allArr[id].coordCapital}
                   coordCountry={allArr[id].coordCountry} />

            {/*<LeafeMap />*/}



        </div>
    );
};

export default CountryPage;