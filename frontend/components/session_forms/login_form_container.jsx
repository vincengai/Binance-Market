import { connect } from 'react-redux';
import React from 'react';
import { signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
    return ({
        errors: state.errors.session,
        formType: 'Log In',
        navLink: <Link to="/login">Log In</Link>,
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        action: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors()),
        demoLogin: (user) => dispatch(signup(user))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)