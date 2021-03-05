import React, {useEffect} from 'react';
import {withRouter} from "react-router-dom";

import {compose} from "redux";
import {connect} from "react-redux";


import CountryPage from "../Components/CountryPage/CountryPage";


const CountryPageContainer = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <CountryPage {...props} />
    );
};


const mapStateToProps = (state) => {
    return {
        allArr:state.CountryPageReducer.allArr,
        lang:state.LangReducer.lang,

    }
};


export default compose(
    connect(mapStateToProps, {

    }),
    withRouter,
) (CountryPageContainer);