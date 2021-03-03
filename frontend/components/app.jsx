import React from 'react';
import NavBarContainer from './navbars/navbar_container';
import { Route, Switch } from 'react-router-dom';
import SignupFormContainer from './session_forms/signup_form_container';
import LoginFormContainer from './session_forms/login_form_container';
// import CryptoIndexContainer from './crypto/crypto_index_container';
import DashboardContainer from './dashboard/dashboard_container';
import CryptoShowContainer from './crypto/crypto_show_container';
import Splash from './splash';
import Footer from './footer';
import Modal from '../components/crypto/modal';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <Modal />
        <header>
            <NavBarContainer />
        </header>
        
        <Switch>
            <Route exact path="/login" component={LoginFormContainer} />
            <Route exact path="/signup" component={SignupFormContainer} />
            {/* <Route exact path="/coins" component={CryptoIndexContainer} /> */}
            <Route exact path="/coins/:symbol" component={CryptoShowContainer} />
            <Route exact path='/dashboard' component={DashboardContainer} />
            {/* <Route exact path="/wallet" component={CryptoDashboardContainer} /> */}
            
            <Route exact path="/" component={Splash} />
        </Switch>

        <footer>
            <Footer/>
        </footer>
    </div>
);

export default App;