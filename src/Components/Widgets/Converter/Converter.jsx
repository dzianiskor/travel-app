import React, {useEffect} from 'react';
import s from './Converter.module.css'





const Converter = ({match, valuteDollor, valuteUSD, allArr, valueEUR, valueRUB}) => {



    return (
        <div className={s.converter}>
            <div>1 {allArr[match.params.id].ISO} = {valuteUSD} USD </div>
            <div>1 {allArr[match.params.id].ISO} = {valueEUR} EUR </div>
            <div>1 {allArr[match.params.id].ISO} = {valueRUB} RUB </div>
        </div>
    );
};

export default Converter;