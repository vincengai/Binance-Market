import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import CryptoIndex from './crypto_index';
import { fetchCoinsInfo } from '../../actions/coin_actions'
// import fetchCurrentPrice from '../../util/coin_api_util';

const SYMBOLS = [
        'BTC',
        'ETH',
        'BNB',
        'XRP',
        'BCH',
        'LTC',
];

const NAME = [
    'Bitcoin',
    'Ethereum',
    'BNB',
    'Ripple',
    'Bitcoin Cash',
    'Litecoin'
];

const mapStateToProps = (state) => {
    // debugger
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

export default connect(mapStateToProps, mapDispatchToProps)(CryptoIndex);