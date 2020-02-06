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
            <div>
            <div className="splash-page">
                <div className="splash-container">
                    <h1 className="splash-sent">The World's Most Trustworthy<br/>Cryptocurrency Exchange</h1> 
                    <h3 className="splash-subsent">Trade Bitcoin, BNB, and hundreds of other cryptocurrencies in minutes. </h3>
                    <h3 className="splash-subsent2">I want to spend</h3>
                    <h3 className="splash-subsent3">I want to buy</h3>
                    

                    <img src={window.imageUrl.advertise} className="ad-logo"/>
                    <NavLink to="/">
                        <div className="splash-logo"></div>
                    </NavLink>

                    <input type="number" placeholder="Enter amount" className="splash-amount"/>
                    <input type="number" placeholder="Enter amount" className="splash-buy"/>
                </div>
        
             {/* <a href="https://www.binance.com/en/support/articles/360038836151"> <h3>Binance Instant Buy One Month Fee Discount 01-15</h3></a> */}
                </div>
                <CryptoIndexContainer />
            </div>

        )}
};

export default Splash; 