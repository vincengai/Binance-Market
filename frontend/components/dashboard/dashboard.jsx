import React from "react";
import PortfolioChart from './portfolio_chart';
// import Watchlist from './watchlist';
// import PortfolioWallets from './portfolio_wallets';
import Transactions from './transactions';
import { fetchCurrencyInfo } from '../../util/coin_api_util';


const SUPPORTED_CURRENCIES = ['BTC', 'ETH', 'BCH', 'BNB', 'LTC', 'TRX', 'XRP', 'XLM', 'DASH']

// class Dashboard extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             currentPrices: null,
//         }

//         this.getCurrentPrices = this.getCurrentPrices.bind(this);
//     }

//     componentDidMount() {
//         if (this.state.currentPrices == null) {
//             this.getCurrentPrices();
//         }
//     }

//     getCurrentPrices() {
//         fetchCurrencyInfo(SUPPORTED_CURRENCIES).then(
//             (response) => {
//                 return this.setState({
//                     currentPrices: response.RAW
//                 })
//             }
//         )
//     }

//     render() {
//         const userId = this.props.state.session.id; 
//         console.log(this.props.state.entities)
//         const {
//             cash_balance,
//             portfolio,
//             transactions,
//         } = this.props.state.entities.users[userId] || {};

//         const currentPrices = this.state.currentPrices || {};

//         return (
//             <div id="dashboard-container">
//                 <div id="portfolio-cash-balance-container">
//                     <span id="portfolio-cash-balance">Cash Balance: </span>
//                     <span id="portfolio-cash-balance-num">${(Number(cash_balance.toFixed(2))).toLocaleString()}</span>
//                 </div>

//                 <PortfolioChart
//                     cashBalance={cash_balance}
//                     portfolio={portfolio}
//                     currentPrices={currentPrices}
//                     transactions={transactions}
//                 />
//             </div>
//         )
//     }
// }

// export default Dashboard; 

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPrices: null,		// { BTC: 8000, ETH: 162... }
        }

        this.getCurrentPrices = this.getCurrentPrices.bind(this);
    }


    componentDidMount() {
        if (this.state.currentPrices == null) {
            this.getCurrentPrices();
        }
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
                <Transactions
                    transactions={transactions}
                /> 
                {/* <Watchlist />

                <div id="wallets-transactions-container">
                    <PortfolioWallets
                        cashBalance={cash_balance}
                        portfolio={portfolio}
                        currentPrices={currentPrices}
                    />

                </div> */}
            </div>
        );
    }
}

export default Dashboard;