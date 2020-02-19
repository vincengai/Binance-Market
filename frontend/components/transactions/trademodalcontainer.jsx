import { connect } from 'react-redux';
import TradeModal from './trademodal';
import { buyCoin, sellCoin } from '../../actions/transaction_actions';


const mapStateToProps = (state, ownProps) => {
    // debugger
    const userId = state.session.id;
    let cashBalance, portfolio;

    if (userId) {   // if userId exists
        cashBalance = state.entities.users[userId].cash_balance || {};
        portfolio = state.entities.users[userId].portfolio || {};
        symbol = ownProps.match.params.symbol
    }

    let

    return ({
        symbol,
        cashBalance,
        portfolio,
        userId
    });
};


const mapDispatchToProps = (dispatch) => {
    return ({
        buyCoin: (buyInfo) => dispatch(buyCurrency(buyInfo)),
        sellCoin: (sellInfo) => dispatch(sellCurrency(sellInfo))
    });
};


export default connect(mapStateToProps, mapDispatchToProps)(TradeModal);
