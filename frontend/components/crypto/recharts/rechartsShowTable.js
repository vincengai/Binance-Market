import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

import { fetchCoinInfo } from "../../../util/coin_api_util";


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import GridContainer from "../../Grid/GridContainer.js";
import GridItem from "../../Grid/GridItem.js";
import Card from "../../advert/components/Card/Card.js";
import CardHeader from "../../advert/components/Card/CardHeader.js";
import CardBody from "../../advert/components/Card/CardBody.js";
import CardFooter from "../../advert/components/Card/CardFooter.js";
import CustomInput from "../../CustomInput/CustomInput.js";


import contactsStyle from "../../../../app/assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.js";
const useStyles2 = makeStyles(contactsStyle);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#F0B90B',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    backgroundColor: '#E0E0E0'
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),

];
const useStyleForShowData = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const useStyles = makeStyles({
  table: {
    minWidth: '100%'
  },
  row: {
      lineHeight: '1rem !important'
  },
  body: {
      lineHeight: '1rem !important'
  },
  text: {
    fontSize: '16px'
  },
  textBody: {
    fontSize: '17px'
  }
});


export default function CustomizedTables() {
    const [symbol, setSymbol] = useState('');
    const [price, setPrice] = useState('');
    const [dayChange, setDayChange] = useState('');
    const [dayPercentageChange, setDayPercentageChange] = useState('');
    const [volume, setVolumeChange] = useState('');
    
    const classes = useStyles();
    const history = useHistory();
    const classes2 = useStyles2();
    const classes3 = useStyleForShowData();
  
  useEffect( () => {
    const fetchCoinDataAPI = async () => {
        let coin = history.location.pathname.slice(7);
        const initialCoinData = await fetchCoinInfo(coin);      

        setAndFormatPrice(initialCoinData);
        setAndFormat24hChange(initialCoinData);
        setAndFormat24hPercentChange(initialCoinData);
        setAndFormatVolume(initialCoinData);
    };

    fetchCoinDataAPI();
  }, [])
  

  const setAndFormatPrice = (data) => {
    let coin = history.location.pathname.slice(7);
    let newData = data.DISPLAY[coin].USD.PRICE

    setPrice(newData)
  }

  const setAndFormat24hChange = (data) => {
    let coin = history.location.pathname.slice(7);
    let newData = data.RAW[coin].USD.CHANGEDAY;
    
    let formattedNumber = newData.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
    })      

    setDayChange(formattedNumber);
  }

  const setAndFormat24hPercentChange = (data) => {
    let coin = history.location.pathname.slice(7);
    let newData = data.RAW[coin].USD.CHANGEPCTDAY

    let formattedNumber = newData.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
    })      

    setDayPercentageChange(formattedNumber)
  }

  const setAndFormatVolume = (data) => {
    let coin = history.location.pathname.slice(7);
    let newData = data.DISPLAY[coin].USD.VOLUMEDAY

    setVolumeChange(newData)
  }

  const formatColorPctData = (data) => {
    if (Math.sign(data) === -1) {
        return (
          <div className="negativepct">
             {data}%{" "}
          </div>
        );
      } else {
        return (
          <div className="positivepct">
            {"  "}+{data}%{" "}
          </div>
        );
      }
  }
  const formatColorDayData = (data) => {
    if (Math.sign(data) === -1) {
        return (
          <div className="negativepct">
              {data} ${" "}
          </div>
        );
      } else {
        return (
          <div className="positivepct">
            {"  "}+ {data} ${" "}
          </div>
        );
      }
  }

  return (
    <GridItem xs={12} sm={5} md={5} className={classes2.mlAuto} style={{zIndex: 2, margin: 'auto'}}>
            <Card className={classes2.card1}>
                <CardHeader
                    contact
                    color="primary"
                    className={classes2.textCenter}
                    style={{background: "#F0B90B"}}
                >
                    <h4 className={classes2.cardTitle} style={{textDecoration: "underline"}}> Info Table </h4>
                </CardHeader>

                <CardBody>  
                  <Typography className={classes3.title} style={{paddingTop: "1rem"}} color="textSecondary" gutterBottom>
                    Price
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {price}
                  </Typography>
                  <Typography className={classes3.title} style={{paddingTop: "1rem"}} color="textSecondary" gutterBottom>
                    24h Change
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {formatColorDayData(dayChange)}
                  </Typography>
                  <Typography className={classes3.title} style={{paddingTop: "1rem"}} color="textSecondary" gutterBottom>
                    % Change
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {formatColorPctData(dayPercentageChange)}
                  </Typography>
                  <Typography className={classes3.title} style={{paddingTop: "1rem"}} color="textSecondary" gutterBottom>
                    Volume
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {volume}
                  </Typography>
                </CardBody>

                <CardFooter className={classes2.justifyContentBetween}>
                  <Typography className={classes3.title} style={{paddingTop: "1rem"}} color="textSecondary" gutterBottom>
                    Data gathered from CryptoCompare API
                  </Typography>
                </CardFooter>
            </Card>
        </GridItem> 
  );
}