import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';


class Splash extends React.Component {
    render() {
        return (
            <div className="splash-container">
                <h1 className="splash-sent">The World's Most Mediocre <br/> Cryptocurrency Exchange</h1> 
                <NavLink to="/">
                    <div className="splash-logo"></div>
                </NavLink>
            </div>
        )}
};

export default Splash; 