import React, {useEffect} from 'react';
import s from './Converter.module.css'
import * as axios from 'axios';
import Time from "../Time/Time";


const Converter = ({match, valuteDollor}) => {

    useEffect(() => {
        axios.get("https://free.currconv.com/api/v7/convert?&apiKey=91f6ab150da4e3cec50d&compact=ultra&apiKey=91f6ab150da4e3cec50d&q=$BYN_$USD").then(
            res => {
                console.log('res', res)
            }
        )
    }, [])

    //console.log('valuteDollor', valuteDollor)

    return (
        <div className={s.converter}>
        </div>
    );
};

export default Converter;