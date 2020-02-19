import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import TransactionForm from './transaction_form'
import { closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {

    return {
        coins: state.entities.coins.RAW[0]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: (modal) => dispatch(closeModal(modal))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);
