import React, {useEffect} from 'react';
import s from './Converter.module.css'
import PointLoader from "../../preloaders/PointLoader/PointLoader";





const Converter = ({match, youIso, valuteUSD, allArr, valueEUR, valueRUB, isFetching}) => {



    return (
        <div className={s.converter}>
            {!!isFetching && <PointLoader />}
            {!isFetching && <>
                <div>1 {youIso} = {valuteUSD} USD </div>
                <div>1 {youIso} = {valueEUR} EUR </div>
                <div>1 {youIso} = {valueRUB} RUB </div>
            </>}
        </div>
    );
};

export default Converter;