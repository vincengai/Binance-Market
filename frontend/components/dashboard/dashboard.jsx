import React from "react";
import PortfolioChart from './portfolio_chart';
import PortfolioWallets from './portfolio_wallet';
import Transactions from './transactions';
import { fetchCurrencyInfo } from '../../util/coin_api_util';


const SUPPORTED_CURRENCIES = ['BTC', 'ETH', 'BCH', 'BNB', 'LTC', 'TRX', 'XRP', 'XLM', 'DASH']

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPrices: null,		// { BTC: 8000, ETH: 162... }
            currentTransactions: null
        }

        this.getCurrentPrices = this.getCurrentPrices.bind(this);
    }

//
    componentDidMount() {
        const userId = this.props.state.session.id;
        const {
            transactions
        } = this.props.state.entities.users[userId]
        let upToDateTransactions = transactions.reverse().splice(0,10)


        fetchCurrencyInfo(SUPPORTED_CURRENCIES).then(
            (response) => {
                // response.RAW == {BTC: {USD: 7649.32, MKTCAP...}, ETH: {USD: 162.16, MKTCAP... }, ... }

                return this.setState({
                    currentPrices: response.RAW,
                    currentTransactions: upToDateTransactions
                });
            }
        )

    }

    formatTransactions () {
        const userId = this.props.state.session.id;
         const {
            transactions
        } = this.props.state.entities.users[userId]

        let upToDateTransactions = transactions.reverse().splice(0,10)
        return upToDateTransactions
    }

    getCurrentPrices() {
        fetchCurrencyInfo(SUPPORTED_CURRENCIES).then(
            (response) => {
                // response.RAW == {BTC: {USD: 7649.32, MKTCAP...}, ETH: {USD: 162.16, MKTCAP... }, ... }

                return this.setState({
                    currentPrices: response.RAW
                });
            }
        )
    }

    render() {
        
        const userId = this.props.state.session.id;
        const {
            cash_balance,
            portfolio,
            transactions,
        } = this.props.state.entities.users[userId] || {};

        const currentPrices = this.state.currentPrices || {};

        return (
            <div id="dashboard-container">
                <div id="portfolio-cash-balance-container">
                    <span id="portfolio-cash-balance">Cash Balance: </span>
                    <span id="portfolio-cash-balance-num">${(Number(cash_balance.toFixed(2))).toLocaleString()}</span>
                </div>

                <PortfolioChart
                    cashBalance={cash_balance}
                    portfolio={portfolio}
                    currentPrices={currentPrices}
                    transactions={transactions}
                />

                <div id="wallets-transactions-container">
                    <PortfolioWallets
                        cashBalance={cash_balance}
                        portfolio={portfolio}
                        currentPrices={currentPrices}
                    />
                    <Transactions
                        transactions={this.state.currentTransactions}
                    /> 
                </div>
            </div>
        );
    }
}

export default Dashboard;