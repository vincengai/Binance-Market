import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import TransactionContainer from '../transactions/transaction_container';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal.modalType) {
        case 'buy':
            component = <TransactionContainer />;
            break;
        case 'sell':
            component = <TransactionContainer />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapState = state => {
    return {
        modal: state.ui.modal
    };

};

const mapDispatch = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapState, mapDispatch)(Modal);