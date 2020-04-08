import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import CryptoSplashIndex from './crypto_splash_index';
import { fetchCoinsInfo } from '../../actions/coin_actions'


const mapStateToProps = (state) => {
    return {
        coins: state.entities.coins.DISPLAY
    }
};
 
const mapDispatchToProps = (dispatch) => {
    // Map thru SYMBOLS and return in the dispatched method?
    return {
        fetchCoinsInfo: () => dispatch(fetchCoinsInfo())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CryptoSplashIndex);