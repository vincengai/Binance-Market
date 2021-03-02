import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
// import CryptoIndexContainer from './crypto/crypto_index_container';
import CryptoSplashIndexContainer from './crypto/crypto_splash_index_constainer';
// import PaperTradeAdvert from './advert/papertrading_advert';
/*eslint-disable*/
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components

import GridContainer from "./advert/components/Grid/GridContainer";
import GridItem from "./advert/components/Grid/GridItem.js";
import Button from "./button/Button.js";
import Header from "./Header/Header.js";
import HeaderLinks from "./Header/HeaderLinks";
import Footer from "../components/Footer/Footer";
import Parallax from "./Parallax/Parallax";


import SectionDescription from "./views/SectionDescription.js";
// Everythign below has to be made
// sections for this page
import SectionComponents from "./views/SectionComponents.js";
// import SectionCards from "./views/SectionCards.js";
// import SectionContent from "./views/SectionContent.js";
// import SectionSections from "./views/SectionSections.js";
// import SectionExamples from "./views/SectionExamples.js";

// Still have yet to add in the bottom files
import SectionOverview from "./views/SectionOverview.js";
// import SectionPricing from "./views/SectionPricing.js";

import presentationStyle from "../../app/assets/jss/material-kit-pro-react/views/presentationStyle.js";
import steller from '../../app/assets/images/steller.gif'
const useStyles = makeStyles(presentationStyle);

const COINS = [
        { name: "Bitcoin", symbol: "BTC"}
]

// class Splash extends React.Component {


//     render() {
//         return (
//           <div className="splash-page">
//             <div className="splash-container">
//               <div className="splash-sent">
//                 The World's Most Trustworthy
//                 <br />
//                 Cryptocurrency Exchange
//               </div>
//               <div className="splash-subsent">
//                 Trade Bitcoin, BNB, and hundreds of other cryptocurrencies in
//                 minutes.{" "}
//               </div>

//               <div className="splash-subsent2">I want to spend</div>
//               <div className="splash-subsent3">I want to buy</div>

//               <img src={window.imageUrl.advertise} className="ad-logo" />
//               <NavLink to="/">
//                 <div className="splash-logo"></div>
//               </NavLink>

//               <input
//                 type="number"
//                 placeholder="Enter amount"
//                 className="splash-amount"
//                 minLength='1' maxLength='6'
//               />
//               <input
//                 type="number"
//                 placeholder="Enter amount"
//                 className="splash-buy"
//                 minLength='1' maxLength='6'
//               />
//               <NavLink className="buy-button" to="/coins/BTC">
//                 Buy BTC
//               </NavLink>
//             </div>

//             <a href="https://vincengai.github.io/Currency-Compare/" className="currency-compare">
//               <div className="cur-comp-link">
//                 <img src={window.imageUrl.megaphone} className='megaphone'/>
//                 Need advice investing? Come checkout my project Currency Compare
//               </div>
//             </a>

//             {/* <PaperTradeAdvert /> */}
//             <CryptoSplashIndexContainer />
//           </div>
    
//         );
//     }
// };

// export default Splash; 


export default function Splash() {
  const classes = useStyles();

  return (
      <div>
        <Parallax image={window.imageUrl.stellar}
          className={classes.parallax}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1>
                    Binance-XChange 
                    <span className={classes.proBadge}>2.0</span>
                  </h1>
                  <h3 className={classes.title}>
                    The World's Most Trustworthy Cryptocurrency Paper Trading Platform
                  </h3>
                  <h4>Developed by Vince Ngai</h4>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <CryptoSplashIndexContainer />
          <SectionOverview />
          <SectionDescription />
        </div>


      
      </div> 
  )
};
