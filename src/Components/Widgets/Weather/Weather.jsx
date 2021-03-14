import React, {useEffect} from 'react';
import s from './Weather.module.css';

import cloudy from './../../../common/img/cloudy-day.svg';
import clear from './../../../common/img/day.svg';
import snowy from './../../../common/img/snowy.svg';
import rainy from './../../../common/img/rainy.svg';
import PointLoader from "../../preloaders/PointLoader/PointLoader";

const Weather = React.memo(({SetWeatherThunk, weather, city, isFetching, language}) => {


    useEffect(() => {
        SetWeatherThunk(city, language)
    }, [language])

    return (
        <div className={s.weather}>
            {!!isFetching && <PointLoader />}

            { !isFetching &&!!weather.data && <div><div className={s.temp}>
                {(weather.data.weather[0].main === "Clouds") && <div><img src={cloudy} alt="cloudy"/></div>}
                {(weather.data.weather[0].main === "Clear") && <div><img src={clear} alt="clear"/></div>}
                {(weather.data.weather[0].main === "Snow") && <div><img src={snowy} alt="snowy"/></div>}
                {(weather.data.weather[0].main === "Mist") && <div><img src={clear} alt="clear"/></div>}
                {(weather.data.weather[0].main === "Rain") && <div><img src={rainy} alt="rain"/></div>}
                <div className={s.temperatura}>{Math.round(weather.data.main.temp)} °C</div>
            </div>
                <div>{weather.data.weather[0].description}</div>
            </div>
            }

        </div>
    );
})

export default Weather;