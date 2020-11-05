import React from "react";
// import PortfolioChart from './portfolio_chart';
// import Watchlist from './watchlist';
// import PortfolioWallets from './portfolio_wallets';
// import Transactions from './transactions';
import { fetchCoinInfo } from '../../util/prices_util';


const SUPPORTED_CURRENCIES = ['BTC', 'ETH', 'BCH', 'BNB', 'LTC', 'TRX', 'XRP', 'XLM', 'DASH']

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPrices: null,
        }

        this.getCurrentPrices = this.getCurrentPrices.bind(this);
    }

    componentDidMount() {
        if (this.state.currentprices == null) {
            this.getCurrentPrices();
        }
    }

    getCurrentPrices() {
        fetchCoinInfo(SUPPORTED_CURRENCIES).then(
            (response) => {
                return this.setState({
                    currentPrices: response.RAW
                })
            }
        )
    }

    render() {
        const userId = this.props.state.session.id; 

        const {
            cash_balance,
            portfolio,
            transaction,
        } = this.props.state.entities.users[userId] || {};

        const currentPrices = this.state.currentPrices || {};

        return (
            <div id="dashboard-container">
                <div id="portfolio-cash-balance-container">
                    <span id="portfolio-cash-balance">Cash Balance: </span>
                    <span id="portfolio-cash-balance-num">${(Number(cash_balance.toFixed(2))).toLocaleString()}</span>
                </div>
            </div>
        )
    }
}

export default Dashboard; 