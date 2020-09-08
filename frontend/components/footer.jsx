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

                <div className="footer-section" >
                    <ul>
                        <li>
                            <a href="mailto:vincew.ngai@gmail.com"
                                target="_blank" className="nav-word">Email </a>
                        </li>
                        <li>
                            <a href="https://github.com/vincengai/Binance-Market"
                                target="_blank" className="nav-word">Github </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/vince-ngai/"
                                target="_blank" className="nav-word">LinkedIn </a>
                        </li>
                        <li>
                            <a href="https://vincengai.github.io/portfolio/"
                                target="_blank" className="nav-word">Portfolio</a>
                        </li>
                    </ul>
                </div>
                {/* <a href="https://vincengai.github.io/portfolio/" className="footer-submit">Portfolio</a> */}
            </div>
        )
    }
};

export default Foot; 