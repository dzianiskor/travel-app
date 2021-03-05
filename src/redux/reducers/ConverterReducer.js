import {weatherApi} from "../../API/apiWeather";
import {convertApi} from "../../API/apiConverter";

const SET_VALUE = 'SET_VALUE/ConverterReducer';
const SET_IS_FETCHING = 'SET_IS_FETCHING/ConverterReducer';

const initialState = {
    valute: '',
    isFetching: null,
}

const ConverterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VALUE: {
            return {
                ...state,
                value:action.val
            }
        }
        case SET_IS_FETCHING: {
            return {
                ...state,
                isFetching:action.bool
            }
        }

        default: return state
    }
}

const IsFetching = (bool) => ({type:SET_IS_FETCHING, bool})
const setValue = (val) => ({type:val})

export const setConverter = (you, out) => async (dispatch) => {
    try {
        dispatch(IsFetching(true))
        let response = await convertApi.convert(you, out)
        if (response.status === 200) {
            dispatch(setValue(response))
        }
        dispatch(IsFetching(false))
    } catch (err) {
        dispatch(IsFetching(false))
        alert('ошибка')
    }



}


export default ConverterReducer;
