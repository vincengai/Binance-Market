import React from 'react';
import NavBarContainer from './navbars/navbar_container';
import { Route, Switch } from 'react-router-dom';
import SignupFormContainer from './session_forms/signup_form_container';
import LoginFormContainer from './session_forms/login_form_container';


const App = () => (
    <div>
        <header>
        <h1>Binance Market</h1>
        <NavBarContainer />
        </header>
        
        <Switch>
            <Route exact path="/login" component={LoginFormContainer} />
            <Route exact path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;