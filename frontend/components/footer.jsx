import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';


class Foot extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.action(user)
            .then(() => this.props.history.push("/coins"))

    };

    render() {
        return (
            <div className="footer-container">
                <h1 className='footer-sent'> Start Trading Now</h1> 

                {/* <form action=""></form>
                <input className="footer-submit" type="submit" value='Trade Now' /> */}
            </div>
        )
    }
};

export default Foot; 