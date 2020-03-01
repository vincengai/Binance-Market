import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import CryptoIndexContainer from './crypto/crypto_index_container';

// 

const COINS = [
        { name: "Bitcoin", symbol: "BTC"}
]

class Splash extends React.Component {
    render() {
        return (
            <div className="splash-page">
                <div className="splash-container">
                    <div className="splash-sent">The World's Most Trustworthy<br/>Cryptocurrency Exchange</div> 
                    <div className="splash-subsent">Trade Bitcoin, BNB, and hundreds of other cryptocurrencies in minutes. </div>
                  
                        <div className="splash-subsent2">I want to spend</div>
                        <div className="splash-subsent3">I want to buy</div>

                    <img src={window.imageUrl.advertise} className="ad-logo"/>
                    <NavLink to="/">
                        <div className="splash-logo"></div>
                    </NavLink>
                
                    <div className="transaction-line">
                        <input type="number" placeholder="Enter amount" className="splash-amount"/>
                        <input type="number" placeholder="Enter amount" className="splash-buy"/>
                        <NavLink className="buy-button" to="/coins/BTC">Buy BTC</NavLink>
                    </div>
                </div>
                <a href="https://www.binance.com/en/support/articles/360038836151"><div className="cur-comp-link">Need help investing? Come checkout Currency Compare</div></a>


                <CryptoIndexContainer />
            </div>

        )}
};

export default Splash; 