import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';


class Splash extends React.Component {
    render() {
        return (
            <div className="splash-container">
                <h1 className="splash-sent">The World's Most Mediocre<br/>Cryptocurrency Exchange</h1> 
                <h3 className="splash-subsent">Trade Bitcoin, BNB, and hundreds of other cryptocurrencies in minutes. </h3>
                <h3 className="splash-subsent2">I want to spend</h3>
                <h3 className="splash-subsent3">I want to buy</h3>

                <NavLink to="/">
                    <div className="splash-logo"></div>
                </NavLink>

                <input type="number" placeholder="Enter amount" className="splash-amount"/>
                
            </div>
        )}
};

export default Splash; 