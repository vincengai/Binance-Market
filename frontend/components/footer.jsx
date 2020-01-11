import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';


class Foot extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <h1 className='footer-sent'> Start Trading Now</h1> 
                <input className="footer-submit" type="submit" value='Trade Now' />
            </div>
        )
    }
};

export default Foot; 