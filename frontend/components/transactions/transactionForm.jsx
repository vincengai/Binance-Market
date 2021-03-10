

import React from 'react';
import {fetchCoinInfo} from '../../util/coin_api_util';
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Card from "../advert/components/Card/Card.js";
import CardHeader from "../advert/components/Card/CardHeader.js";
import CardBody from "../advert/components/Card/CardBody.js";
import CardFooter from "../advert/components/Card/CardFooter.js";
import CustomInput from "../CustomInput/CustomInput.js";

import Button from "../button/Button.js";

import contactsStyle from "../../../app/assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.js";
const useStyles2 = makeStyles(contactsStyle);


const TransactionForm = () => {
    const classes2 = useStyles2();

    return(
        <GridItem xs={12} sm={5} md={5} className={classes2.mlAuto}>
            <Card className={classes2.card1}>
                <form>
                <CardHeader
                    contact
                    color="primary"
                    className={classes2.textCenter}
                    style={{background: "#F0B90B"}}
                >
                    <h4 className={classes2.cardTitle} style={{textDecoration: "underline"}}> Limit Order </h4>
                </CardHeader>
                <CardBody>
                    {/* <GridContainer>
                    <GridItem xs={12} sm={6} md={6}>
                        <CustomInput
                        labelText="Site under Construction"
                        id="first"
                        formControlProps={{
                            fullWidth: true
                        }}
                        />
                    </GridItem>
                    </GridContainer> */}
                    <CustomInput
                    labelText="Site under Construction"
                    id="email-address"
                    formControlProps={{
                        fullWidth: true
                    }}
                    />
                   
{/*  */}
                </CardBody>
                <CardFooter className={classes2.justifyContentBetween}>
                    <Button color="primary" className={classes2.pullRight} style={{width: '40%', backgroundColor:'#003366'}}>
                    Buy
                    </Button>
                    <Button color="primary" className={classes2.pullRight} style={{width: '40%', backgroundColor:'#003366'}}>
                    Sell
                    </Button>
                </CardFooter>
                </form>
            </Card>
        </GridItem> 
    )
}

export default TransactionForm;