import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import InfoArea from "../InfoArea/InfoArea.js";
import Card from "../advert/components/Card/Card";
import CardHeader from "../advert/components/Card/CardHeader.js";
import CardBody from "../advert/components/Card/CardBody.js";
// @material-ui icons
import Grid from "@material-ui/icons/GridOn";
import PhoneLink from "@material-ui/icons/Phonelink";
import AccessTime from "@material-ui/icons/AccessTime";
import AttachMoney from "@material-ui/icons/AttachMoney";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// images
import overviewStyle from "../../../app/assets/jss/material-kit-pro-react/views/presentationSections/overviewStyle.js";
const useStyles = makeStyles(overviewStyle);
//
export default function SectionOverview() {
  const classes = useStyles();
  return (
    <div className={classes.section} style={{padding: "0"}}>
      <div
        className={classes.features5}
        style={{ 
          backgroundImage: "url('https://images.hdqwalls.com/download/purple-night-sky-5k-65-1600x1200.jpg')",
          opacity: "2"
        }}
      >
        <GridItem md={8} className={classNames(classes.mlAuto, classes.mrAuto)} style={{padding: "5 0"}}>
          <div className={classes.title} style={{fontSize: "2rem"}}>Let{"'"}s talk investing</div>
          <h4 className={classes.title} style={{color: "white"}}>
            This platform is solely dedicated for testing strategies and indicators without the monetary risk.{" "} <br></br>
            Every account is provided with $100,000 to start off with. 
            <br></br> Have fun investing!
          </h4>
        </GridItem>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem sm={3} className={classes.featuresShow}>
              <InfoArea
                title="Save Money"
                description={
                  <p>
                    Binance-XChange paper trading app that allows users to trade against
                    the market using CryptoCompare's API for live data.
                  </p>
                }
                icon={AttachMoney}
                iconColor="gray"
                vertical={true}
              />
            </GridItem>
            <GridItem sm={3} className={classes.featuresShow}>
              <InfoArea
                title="Risk Free"
                description={
                  <p>
                    We allot $100,000 to every new user. Giving you the freedom in 
                    how you want to approach your investments. Whether it be swinging
                    or day trading.
                  </p>
                }
                icon={Grid}
                iconColor="gray"
                vertical={true}
              />
            </GridItem>
            <GridItem sm={3} className={classes.featuresShow}>
              <InfoArea
                title="Fully Responsive"
                description={
                  <p>
                    Trade on the go or at home. Binance-XChange's platform is not limited
                    to any device. 
                  </p>
                }
                icon={PhoneLink}
                iconColor="gray"
                vertical={true}
              />
            </GridItem>
            <GridItem sm={3} className={classes.featuresShow}>
              <InfoArea
                title="Save Time"
                description={
                  <p>
                    Forget looking around for other payed platforms. Binance-XChange's
                    free and simple UI is the one stop learning platform for you. 
                  </p>
                }
                icon={AccessTime}
                iconColor="gray"
                vertical={true}
              />
            </GridItem>
 
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
