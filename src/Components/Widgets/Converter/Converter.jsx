import React from 'react';
import s from './Converter.module.css'

const Converter = ({match}) => {


    let id = match.params.id;

    return (
        <div className={s.converter}>

        </div>
    );
};

export default Converter;