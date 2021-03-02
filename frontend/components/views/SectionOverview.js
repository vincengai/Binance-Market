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
import Vodafone from "../../../app/assets/img/assets-for-demo/ourClients/vodafone.jpg";
import Microsoft from "../../../app/assets/img/assets-for-demo/ourClients/microsoft.jpg";
import Harvard from "../../../app/assets/img/assets-for-demo/ourClients/harvard.jpg";
import Standford from "../../../app/assets/img/assets-for-demo/ourClients/stanford.jpg";
import profilePic1 from "../../../app/assets/img/assets-for-demo/test4.jpg";
import test1 from '../../../app/assets/images/test1.jpg';
import profilePic2 from "../../../app/assets/img/assets-for-demo/test2.jpg";

import profilePic3 from "../../../app/assets/img/assets-for-demo/test3.jpg";
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
                    Come test out your theories, strategies or 
                    indicators against the market. We are a paper trading app 
                    that allows users to buy/sell Crypto without using your REAL 
                    money.
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
                    Enjoy the fluid grid system based on 12 columns. Material
                    Kit PRO is built over Bootstrap and has all the benefits
                    that the framework comes with.
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
                    This Material UI kit is built mobile-first and looks amazing
                    on any device. Regardless of the screen size, the website
                    content will naturally fit the given resolution.
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
                    Using the Material Kit PRO will save you large amount of
                    time. You don{"'"}t have to worry about customising the
                    basic Bootstrap design or generating new components.
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
