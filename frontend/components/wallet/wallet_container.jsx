import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import WalletForm from './wallet_form';
import { receiveCurrentPrice } from '../app/'


const CRYPTOCURRENCIES = {
    // ...
}

const mapStateToProps = (state) => {
    return ({
        // errors: state.errors.session

    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        receiveCurrentPrice: (data) => dispatch(receiveCurrentPrice(data))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);