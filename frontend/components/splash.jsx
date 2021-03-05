import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import CryptoSplashIndex from './crypto/crypto_splash_index';
/*eslint-disable*/
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components

import GridContainer from "./advert/components/Grid/GridContainer";
import GridItem from "./advert/components/Grid/GridItem.js";
import Parallax from "./Parallax/Parallax";
import SectionDescription from "./views/SectionDescription.js";
import SectionOverview from "./views/SectionOverview.js";

import News from '../components/crypto/news/news';

import presentationStyle from "../../app/assets/jss/material-kit-pro-react/views/presentationStyle.js";
const useStyles = makeStyles(presentationStyle);

const COINS = [
        { name: "Bitcoin", symbol: "BTC"}
]


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
                  {/* <h4>Developed by Vince Ngai</h4> */}
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <CryptoSplashIndex />
          <SectionOverview />
          <SectionDescription />
        </div>


      
      </div> 
  )
};
