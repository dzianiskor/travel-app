import Converter from "../Components/Widgets/Converter/Converter";
import {compose} from "redux";
import useEffect from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {setConverter, setConverterEUR, setConverterRUB} from "../redux/reducers/ConverterReducer";

class ConverterContainer extends useEffect.Component {

    componentDidMount() {

        this.props.setConverter(this.props.allArr[this.props.match.params.id].ISO, 'USD')
        this.props.setConverterEUR(this.props.allArr[this.props.match.params.id].ISO, 'EUR')
        this.props.setConverterRUB(this.props.allArr[this.props.match.params.id].ISO, 'RUB')


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
        valuteUSD:state.ConverterReducer.valuteUSD,
        valueEUR:state.ConverterReducer.valueEUR,
        valueRUB:state.ConverterReducer.valueRUB,


    }
};


export default compose(
    connect(mapStateToProps, {
        setConverter,
        setConverterEUR,
        setConverterRUB,

    }),
    withRouter,
)(ConverterContainer);
