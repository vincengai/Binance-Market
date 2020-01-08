import React from 'react';

class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {									
            email: "",
            password: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    };

    demoLogin() {
        e.preventDefault();
        let demoUser = {
            email: 'demo_user@gmail.com',
            password: '12345678'
        };
        this.props.demoLogin(demoUser); 					
    }

   handleSubmit(e) {
       e.preventDefault();
       this.props.action(this.state)
   };

   update(field) {
       return e => this.setState({ [field]: e.currentTarget.value })
   };


    render() {
       const { action } = this.props;

       return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">

                    <div className="login-form">
                            <br />
                        <label>Username:
                                <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                                 />
                        </label>
                            <br />
                        <label>Password:
                                 <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                />
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                   <button className="demo-login" onClick={this.demoLogin}>Demo</button>

                </form>
            </div>
        );
    }
};

export default LoginForm; 