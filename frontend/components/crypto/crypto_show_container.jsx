import {connect} from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import CryptoShow from './crypto_show';
import { 
    fetchCoinInfo,
    fetch1DayInfo,
    fetch1WeekInfo,
    fetch1MonthInfo,
    fetch1YearInfo
 } from '../../actions/coin_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        coin: ownProps.match.params.symbol,
        coinInfo: state.entities.coins.DISPLAY
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCoinInfo: (symbol) => dispatch(fetchCoinInfo(symbol)),
        fetch1DayInfo: (symbol) => dispatch(fetch1DayInfo(symbol)),
        fetch1WeekInfo: (symbol) => dispatch(fetch1WeekInfo(symbol)),
        fetch1MonthInfo: (symbol) => dispatch(fetch1MonthInfo(symbol)),
        fetch1YearInfo: (symbol) => dispatch(fetch1YearInfo(symbol)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CryptoShow);