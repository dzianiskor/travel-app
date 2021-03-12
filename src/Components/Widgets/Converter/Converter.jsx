import React, {useEffect} from 'react';
import s from './Converter.module.css'





const Converter = ({match, youIso, valuteUSD, allArr, valueEUR, valueRUB}) => {



    return (
        <div className={s.converter}>
            <div>1 {youIso} = {valuteUSD} USD </div>
            <div>1 {youIso} = {valueEUR} EUR </div>
            <div>1 {youIso} = {valueRUB} RUB </div>
        </div>
    );
};

export default Converter;