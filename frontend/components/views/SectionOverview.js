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
    <div className={classes.section}>
      <div
        className={classes.features5}
        style={{ 
          backgroundImage: "url('data:image/jpeg;base64,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')",
          opacity: "1"
        }}
      >

        <GridItem md={8} className={classNames(classes.mlAuto, classes.mrAuto)}>
          <h1 className={classes.title}>Learning how to invest has gotten that much easier</h1>
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
                title="Simplistic UI"
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
      <div className={classes.sectionTestimonials} style={{paddingBottom: 0}}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              className={classNames(classes.mlAuto, classes.mrAuto)}
            >
              <h2 className={classes.title}>Trusted by 330.000+ People</h2>
              <h5 className={classes.description}>
                The UI Kits, Templates and Dashboards that we{"'"}ve created are
                used by
                <b> 330,000+ web developers</b> in over{" "}
                <b> 576.000 Web Projects</b>. This is what some of them think:
              </h5>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
