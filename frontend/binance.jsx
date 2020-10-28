import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import * as Crypto from './actions/coin_actions';
import ReactGA from 'react-ga';

function initializeReactGA() {
    ReactGA.initialize("G-RF73WL6GWF");
    ReactGA.pageview("/#");
}

document.addEventListener("DOMContentLoaded", () => {
    // const store = configureStore();
    // window.fetchCoinsInfo = Crypto.fetchCoinsInfo;
    window.fetchCoinsInfo = Crypto.fetchCoinsInfo; 
    initializeReactGA()
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
                
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});