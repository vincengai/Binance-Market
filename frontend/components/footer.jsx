import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';


class Foot extends React.Component {
    constructor(props) {
        super(props);

        this.changePage = this.changePage.bind(this);
    };

    changePage(){
         this.props.history.push("/coins")
    };

    render() {
        return (
            <div className="footer-container">
                <h1 className='footer-sent'> Vince Ngai</h1> 
                
                <NavLink className="footer-submit" to="/coins">Portfolio (in the works)</NavLink>
            </div>
        )
    }
};

export default Foot; 