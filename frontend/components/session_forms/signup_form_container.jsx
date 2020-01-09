import { connect } from 'react-redux';
import React from 'react';
import { signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return ({
        errors: state.errors.session,
        formType: 'Sign Up',
        navLink: <Link to="/signup">Register</Link>,
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        action: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors()),
        demoLogin: (user) => dispatch(login(user))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)