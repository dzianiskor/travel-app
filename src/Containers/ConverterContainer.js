import Converter from "../Components/Widgets/Converter/Converter";
import {compose} from "redux";
import useEffect from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {setConverter} from "../redux/reducers/ConverterReducer";

class ConverterContainer extends useEffect.Component {

    componentDidMount() {
        //this.props.setConverter(this.props.allArr[this.props.match.params.id].ISO, 'USD')
    }

    render() {




        return (
            <Converter {...this.props} />


        )
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.LangReducer.lang,
        allArr: state.CountryPageReducer.allArr,
        valuteDollor:state.ConverterReducer.valuteDollor,

    }
};


export default compose(
    connect(mapStateToProps, {
        setConverter,
    }),
    withRouter,
)(ConverterContainer);
