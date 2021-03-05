import OwnPage from "../Components/OwnPage/OwnPage";
import {compose} from "redux";
import {connect} from "react-redux";
import {SearchFunction} from "../common/functions/functions";


const OwnPageContainer = (props) => {


    return (
        <OwnPage SearchArr={SearchFunction(props.lang, props.countrysForCard, props.inputValue)} {...props} />
    )
}

const mapStateToProps = (state) => {
    return {
        countrysForCard:state.CountryCardsReducer.countrysForCard,
        inputValue:state.CountryCardsReducer.inputValue,
        countryAfterInput:state.CountryCardsReducer.countryAfterInput,
    }
};

export default compose(
    connect(mapStateToProps, {

    })
) (OwnPageContainer);