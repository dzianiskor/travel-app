import React from 'react';
import Gallery from "../Gallery/Gallery";
import ReactPlayer from 'react-player/youtube';


import s from './CountryPage.module.css'
import WeatherContainer from "../../Containers/WeatherContainer";
import ConverterContainer from "../../Containers/ConverterContainer";
import Mappp from "../Map/Map";

import Time from "../Widgets/Time/Time";
import CirklePreloader from "../preloaders/CirklePreloader/CirklePreloader";

const CountryPage = ({match, allArr, lang, t, countryInfo, isFetching}) => {



    return (
        <div className={s.countrypage}>
            {!!isFetching && <CirklePreloader />}
            {!isFetching && <>
                <h1>{countryInfo.name}</h1>

                <img className={s.imgCountry} src={countryInfo.img} alt={'IMG_COUNTRY'}/>
                <div>{t("countryCard.capital")}: {countryInfo.capital}</div>
                <div>
                    <p>
                        {countryInfo.description}
                    </p>
                </div>
                <WeatherContainer city={countryInfo.capital} />
                <ConverterContainer youIso={countryInfo.iso}/>
                <div>
                    <Time utc={countryInfo.utc} lang={lang} />
                </div>
                <Gallery allArr={countryInfo.galleries} lang={lang}  />

                <div   className={s.bor}>
                    <ReactPlayer   controls={true}  url={countryInfo.video}

                    />
                </div>
                <Mappp country={countryInfo.countryIso}
                       lang={lang}
                       zoom={countryInfo.zoom}
                       coordCapital={countryInfo.coordCapital}
                       coordCountry={countryInfo.coordCountry} />

            </>}
            {/*<h1>
                {lang === 'Русский' && allArr[id].nameCountry.ru}
                {lang === 'English' && allArr[id].nameCountry.eng}
                {lang === 'Deutsche' && allArr[id].nameCountry.gr}
            </h1>
            <img className={s.imgCountry} src={allArr[id].imgCountry} alt={'IMG_COUNTRY'}/>
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
                <Time utc={allArr[id].utc} lang={lang} />
            </div>
            <Gallery id={id} allArr={allArr} lang={lang}  />


<div   className={s.bor}>
    <ReactPlayer   controls={true}  url={allArr[id].video}

    />
</div>




            <Mappp country={allArr[id].countryISO}
                   lang={lang}
                   zoom={allArr[id].zoom}
                   coordCapital={allArr[id].coordCapital}
                   coordCountry={allArr[id].coordCountry} />



*/}
        </div>
    );
};

export default CountryPage;