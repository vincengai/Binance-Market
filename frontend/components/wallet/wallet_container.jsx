import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import WalletForm from './wallet_form';
import { receiveCurrentPrice } from '../app/'


const SYMBOLS = [
        'BTC',
        'ETH',
        'BNB',
        'BCH',
        'LTC',
        'EOS',
        'LINK',
        'XLM',
        'XTZ',
        'DASH',
        'ETC',
        'USDC',
        'ZEC',
        'BAT',
        'ZRX',
        'REP',
        'DAI'
];
  
const NAMES = [
        'Bitcoin',
        'Ethereum',
        'BNB',
        'Bitcoin Cash',
        'Litecoin',
        'EOS',
        'Chainlink',
        'Stellar Lumens',
        'Tezos',
        'Dash',
        'Ethereum Classic',
        'USD Coin',
        'Zcash',
        'Basic Attention Token',
        '0x',
        'Augur',
        'Dai'
];

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