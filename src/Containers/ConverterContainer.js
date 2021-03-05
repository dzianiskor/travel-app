import Converter from "../Components/Widgets/Converter/Converter";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {useEffect} from "react/cjs/react.production.min";

const ConverterContainer = (props) => {



    return (
        <Converter {...props} />


    )
}
const mapStateToProps = (state) => {
    return {
        lang:state.LangReducer.lang,
        allArr:state.CountryPageReducer.allArr,

    }
};


export default compose(
    connect(mapStateToProps, {
    }),
    withRouter,
) (ConverterContainer);
