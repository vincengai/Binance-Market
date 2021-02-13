import React from 'react'

import Extension from "@material-ui/icons/Extension";
import ChildFriendly from "@material-ui/icons/ChildFriendly";
import WatchLater from "@material-ui/icons/WatchLater";
// core components
// import GridContainer from "../Grid/GridItem.js";
// import GridItem from "../Grid/GridItem.js";
// import InfoArea from "../InfoArea/InfoArea.js";
import featuresStyle from "../../../app/assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.js";
const useStyles = makeStyles(featuresStyle);

// import iphone from "../../../app/assets/img/sections/iphone.png";


const PaperTradeAdvert = () => {
  const classes = useStyles();

    return (
    <div className={classes.features3}>
            <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                <div className={classes.phoneContainer}>
                    <img src={iphone} alt="..." />
                </div>
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                <h2 className={classes.title}>Your life will be much easier</h2>
                <InfoArea
                    className={classes.infoArea}
                    icon={Extension}
                    title="Hundreds of Components"
                    description="The moment you use Material Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before."
                    iconColor="primary"
                />
                <InfoArea
                    className={classes.infoArea}
                    icon={ChildFriendly}
                    title="Easy to Use"
                    description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                    iconColor="primary"
                />
                <InfoArea
                    className={classes.infoArea}
                    icon={WatchLater}
                    title="Fast Prototyping"
                    description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                    iconColor="primary"
                />
                </GridItem>
            </GridContainer>
            </div>
    )
}

export default PaperTradeAdvert