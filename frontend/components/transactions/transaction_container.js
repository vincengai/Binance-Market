import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import TransactionForm from './transaction_form'
import { closeModal } from '../../actions/modal_actions';
import { fetchCoinInfo } from '../../actions/coin_actions';
import { buyCoin, sellCoin } from '../../actions/transaction_actions'
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    // console.log(state.entities.coins.RAW[0], 'hello')
    // console.log(ownProps.location.pathname.slice(7), 'tester')
    // console.log(state.session.id, 'I am logged in!!')
    
    const userId = state.session.id;
    let cashBalance, portfolio;
    console.log(state)
    // console.log(ownProps.transaction)

    if (userId) {   // if userId exists
        cashBalance = state.entities.users[userId].cash_balance || {};
        portfolio = state.entities.users[userId].portfolio || {};
    }

    return ({
        coin: 
        cashBalance,
        portfolio,
        userId
    });
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCoinInfo: (symbol) => dispatch(fetchCoinInfo(symbol)),
        buyCoin: (buyInfo) => dispatch(buyCoin(buyInfo)),
        sellCoin: (sellInfo) => dispatch(sellCoin(sellInfo)),
        closeModal: (modal) => dispatch(closeModal(modal))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TransactionForm));
