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
                    <h1 className="splash-sent">The World's Most Mediocre<br/>Cryptocurrency Exchange</h1> 
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
                <CryptoIndexContainer />
            </div>

        )}
};

export default Splash; 