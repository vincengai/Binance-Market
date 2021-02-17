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
// import SectionComponents from "./views/SectionComponents.js";
// import SectionCards from "./views/SectionCards.js";
// import SectionContent from "./views/SectionContent.js";
// import SectionSections from "./views/SectionSections.js";
// import SectionExamples from "./views/SectionExamples.js";

// Still have yet to add in the bottom files
import SectionOverview from "./views/SectionOverview.js";
// import SectionPricing from "./views/SectionPricing.js";

import presentationStyle from "../../app/assets/jss/material-kit-pro-react/views/presentationStyle.js";

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
        <Header
          brand="Material Kit PRO React"
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "info"
          }}
        />
        <Parallax
          image={require("../../app/assets/img/bg4.jpg")}
          className={classes.parallax}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1>
                    Material Kit React
                    <span className={classes.proBadge}>PRO</span>
                  </h1>
                  <h3 className={classes.title}>
                    A Badass Material-UI Kit based on Material Design.
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionDescription />
          {/* <SectionComponents />
          <SectionCards />
          <SectionContent />
          <SectionSections />
          <SectionExamples />  */}
          <SectionOverview />
        </div>
        {/* <SectionPricing />  */}
        <Footer
          theme="white"
          content={
            <div>
              <div className={classes.left}>
                <a
                  href="https://www.creative-tim.com/product/material-kit-pro-react?ref=mkpr-presentation"
                  target="_blank"
                  className={classes.footerBrand}
                >
                  Material Kit PRO React
                </a>
              </div>
              <div className={classes.pullCenter}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/?ref=mkpr-presentation"
                      target="_blank"
                      className={classes.block}
                    >
                      Creative Tim
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/presentation?ref=mkpr-presentation"
                      target="_blank"
                      className={classes.block}
                    >
                      About us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a href="//blog.creative-tim.com/" className={classes.block}>
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/license?ref=mkpr-presentation"
                      target="_blank"
                      className={classes.block}
                    >
                      Licenses
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.rightLinks}>
                <ul>
                  <li>
                    <Button
                      href="https://twitter.com/CreativeTim?ref=creativetim"
                      target="_blank"
                      color="twitter"
                      justIcon
                      simple
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      href="https://dribbble.com/creativetim?ref=creativetim"
                      target="_blank"
                      color="dribbble"
                      justIcon
                      simple
                    >
                      <i className="fab fa-dribbble" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      href="https://instagram.com/CreativeTimOfficial?ref=creativetim"
                      target="_blank"
                      color="instagram"
                      justIcon
                      simple
                    >
                      <i className="fab fa-instagram" />
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          }
        />
      </div> 
  )
};
