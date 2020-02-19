import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import TransactionForm from './transaction_form'
import { closeModal } from '../../actions/modal_actions';
import { buyCoin, sellCoin } from '../../actions/transaction_actions'
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    // console.log(state.entities.coins.RAW[0], 'hello')
    // console.log(ownProps.location.pathname.slice(7), 'tester')

    return {
        coin: ownProps.location.pathname.slice(7)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCoin: (buyInfo) => dispatch(buyCoin(buyInfo)),
        sellCoin: (sellInfo) => dispatch(sellCoin(sellInfo)),
        closeModal: (modal) => dispatch(closeModal(modal))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TransactionForm));
