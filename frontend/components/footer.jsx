
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem.js";
import Footer from "../components/Footer/Footer.js";


import styles from "../../app/assets/jss/material-kit-pro-react/views/componentsSections/footerStyle.js";


const useStyles = makeStyles(styles);

export default function SectionFooter() {
  const classes = useStyles();

  return (
    <div className={classes.section} style={{paddingBottom: 0, paddingTop: 0}}>
      <div>
        <Footer
          theme="dark"
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a href="https://www.linkedin.com/in/vince-ngai/"
                      className={classes.block}
                    >
                      LinkedIn
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a href="https://github.com/vincengai/Binance-Market"
                      className={classes.block}
                    >
                      Github
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="mailto:vincew.ngai@gmail.com"
                      className={classes.block}
                    >
                      Contact Us
                    </a>
                  </ListItem>
                </List>
              </div>

            </div>
          }
        >
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <h4>About Us</h4>
              <p>
                Binance-XChange is a startup idea that creates the opportunity in learning 
                and testing tools that make investing easier and risk free.{" "}
              </p>
              <p>
                As cryptocurrency is booming more and more people have asked me to
                turn this passion project into a viable tool for them to use. This
                is how Binance-XChange came to be. {" "}
              </p>
            </GridItem>

            <GridItem xs={12} sm={4} md={4}>
              <h4>Why Cryptocurrency?</h4>
              {/* <div className={classes.socialFeed}> */}
                <p>
                    We love the idea of a decentralized exchange. We love the idea of 
                    giving the power back to the people. We give power back to businesses and individuals
                    by showing them that there's a future in cryptocurrency. {" "}
                </p>
                <p>
                    We give the opportunity in playing around and showcasing the benefits of investing 
                    in cryptocurrency. {" "}
                </p>
              {/* </div> */}
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <h4>Developer</h4>
              <div className={classes.galleryFeed}>
                <h4>Vince Ngai</h4>
                <img style={{width: "40%"}}
                  src={window.imageUrl.profilepic}
                  className={classNames(
                    classes.img,
                    classes.imgRaised,
                    classes.imgRounded
                  )}
                  alt="..."
                />
              
              </div>
            </GridItem>
          </GridContainer>
        </Footer>
      </div>
    </div>
  );
}
