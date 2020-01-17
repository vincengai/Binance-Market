import React from 'react';

class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {									
            username: "",
            password: "",
        };

        this.totalTimer = 0;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    };

    demoLogin() {
        const demoUser = {
            username: 'demo@login.com',
            password: '123456'
        };

        this.state = demoUser;
        const intervalLength = 75;
        const timer = demoUser.username.length * intervalLength;
        this.totalTimer = timer + (demoUser.password.length * intervalLength) + 1000;

        this.typeInputInfo("username", demoUser.username, intervalLength);
        setTimeout(() => this.typeInputInfo("password", demoUser.password, intervalLength), timer)
    }

    typeInputInfo(field, value, intervalLength) {
        let incrementedValue = "";
        setInterval(() => {
            if (value.length > 0) {
                incrementedValue += value.slice(0, 1);
                value = value.slice(1);
                this.setState({ [field]: incrementedValue });
            } else {
                clearInterval();
            }
        }, intervalLength);
    }    
    // demoLogin(e) {
    //     e.preventDefault();
    //     const demoUser = Object.assign({}, this.demoUser)
    //     this.props.action(demoUser)
    //         .then( this.props.history.push("/")) 					
    // };

   handleSubmit(e) {
       e.preventDefault();
       const user = Object.assign({}, this.state);

       setTimeout( () => 
                        this.props.action(user)
                            .then( () => this.props.history.push("/")), this.totalTimer)
   };

   update(field) {
       return e => this.setState({ [field]: e.currentTarget.value })
   };

    renderErrors() {
        let errors = this.props.errors.join('.');
        
        // window.setTimeout(() => this.props.clearErrors(), 5000);

        if (errors.length === 0) return null; 
            return (
                <p className="sign-in-error">
                    <a className="close" onClick={() => this.props.clearErrors()}></a>
                    {errors}
                </p>
            );
    }

    render() {

       return (
            <div className="login-form-container">
                <div className="login-form-box">
                    <h2 className='login-title'>{this.props.formType}</h2>
                   <h1 className='login-title'>{this.renderErrors()}</h1>

                    <form onSubmit={this.handleSubmit}>
                            <label>
                                    <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="login-input"
                                    placeholder="Username"
                                    />
                            </label>
                            <label>
                                    <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                    placeholder="Password"
                                    />
                            </label>
                            <br />
                            <input className="session-submit" type="submit" value={this.props.formType} />
                      <button className="demo-login" onClick={this.demoLogin}>Demo</button>
                    </form>
                </div>
            </div>
        );
    }
};

export default LoginForm; 
