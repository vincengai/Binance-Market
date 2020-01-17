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
                <h1 className='footer-sent'> Start Trading Now</h1> 
                
                <NavLink className="footer-submit" to="/coins">Trade Now</NavLink>
            </div>
        )
    }
};

export default Foot; 