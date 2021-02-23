import React from "react";
import { Link, NavLink, Route } from 'react-router-dom';

// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "../../../app/assets/jss/material-kit-pro-react/views/aboutUsSections/descriptionStyle.js";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h4 className={classes.description}>
                 Trade Bitcoin, Ethereum, and dozens of other cryptocurrencies in
                 minutes! <br></br> This platform is solely dedicated for testing indicators and strategies without the monetary risk.{" "} <br></br>
                 Every account is provided with $100,000 to start off with. 
                 <br></br> Have fun investing!
          </h4>

        </GridItem>
      </GridContainer>
    </div>
  );
}
