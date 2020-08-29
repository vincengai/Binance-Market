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
                
                <a href="https://vincengai.github.io/portfolio/" className="footer-submit">Portfolio</a>
            </div>
        )
    }
};

export default Foot; 