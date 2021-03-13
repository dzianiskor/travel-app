import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {IsSuccess, LoginAuthThunk} from "../redux/reducers/AuthReducer";
import {withRouter} from "react-router-dom";
import RegisterPage from "../pages/RegisterPage/RegisterPage";


const RegisterPageContainer = (props) => {


    return <RegisterPage {...props} />
};

const mapStateToProps = (state) => {
    return {
        isFetching:state.AuthReducer.isFetching,
        isError:state.AuthReducer.isError,
        isSuccess:state.AuthReducer.isSuccess,
    }
};

export default compose(
    connect(mapStateToProps, {
        LoginAuthThunk,
        IsSuccess,
    }),
    withRouter,
) (RegisterPageContainer);

