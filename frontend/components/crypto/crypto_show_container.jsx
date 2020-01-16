import {connect} from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import CryptoShow from './crypto_show';
import { fetchCoinInfo } from '../../actions/coin_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        coin: ownProps.match.params.symbol,
        coinInfo: state.entities.coins.DISPLAY
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCoinInfo: (symbol) => dispatch(fetchCoinInfo(symbol))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CryptoShow);