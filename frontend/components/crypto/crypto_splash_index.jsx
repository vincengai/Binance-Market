import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoinsInfo } from "../../util/coin_api_util";

import 'babel-polyfill'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/core icons
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";

// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Table from "../Table/Table.js";

import Button from "../../components/button/Button.js";
import styles from "../../../app/assets/jss/material-kit-pro-react/components/tableStyle.js";


///////
const useStyles = makeStyles(styles);

  const fillButtons = [
    { color: "info", icon: Person },
    { color: "success", icon: Edit },
    { color: "danger", icon: Close }
  ].map((prop, key) => {
    return (
      <Button justIcon size="sm" color={prop.color} key={key}>
        <prop.icon />
      </Button>
    );
  });
  const roundButtons = [
    { color: "info", icon: Person },
    { color: "success", icon: Edit },
    { color: "danger", icon: Close }
  ].map((prop, key) => {
    return (
      <Button round justIcon size="sm" color={prop.color} key={key}>
        <prop.icon />
      </Button>
    );
  });
  ////////
  const simpleButtons = [
    { color: "info", icon: Person },
    { color: "success", icon: Edit },
    { color: "danger", icon: Close }
  ].map((prop, key) => {
    return (
      <Button simple justIcon size="sm" color={prop.color} key={key}>
        <prop.icon />
      </Button>
    );
  });

const symbols = ['BTC', 'ETH', 'ADA', 'BCH', 'LTC'];

const CryptoIndex = (props) => {
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);
  const [dayChange, setDayChange] = useState([]);
  const [dayPercentageChange, setDayPercentageChange] = useState([]);
  const [mktCap, setMktCapChange] = useState([]);
  
  const classes = useStyles();

  
  useEffect( () => {
    const fetchCoinsDataAPI = async () => {
      const initialCoinsData = await fetchCoinsInfo(symbols);      

      setAndFormatName(initialCoinsData);
      setAndFormatPrice(initialCoinsData);
      setAndFormat24hChange(initialCoinsData);
      setAndFormat24hPercentChange(initialCoinsData);
      setAndFormatMktCap(initialCoinsData);
    };

    fetchCoinsDataAPI();
  }, [])
  
  const setAndFormatName = (data) => {
    let names = Object.keys(data.DISPLAY)
    setName(names)
  }

  const setAndFormatPrice = (data) => {
    let coinsArr = Object.values(data.DISPLAY);
    let tempArr = [];

    coinsArr.map( (coinObj, i) => {
      tempArr.push(coinObj.USD.PRICE)
    })
    setPrice(tempArr)
  }

  const setAndFormat24hChange = (data) => {
    let coinsArr = Object.values(data.RAW);
    let tempArr = [];

    coinsArr.map( (coinObj, i) => {
      let num = coinObj.USD.CHANGEDAY
      let formattedNumber = num.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
      })      

      tempArr.push(formattedNumber)
    })
    setDayChange(tempArr)
  }

  const setAndFormat24hPercentChange = (data) => {
    let coinsArr = Object.values(data.RAW);
    let tempArr = [];

    coinsArr.map( (coinObj, i) => {
      let num = coinObj.USD.CHANGEPCTDAY
      let formattedNumber = num.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
      })      

      tempArr.push(formattedNumber)
    })
    setDayPercentageChange(tempArr)
  }

  const setAndFormatMktCap = (data) => {
    let coinsArr = Object.values(data.DISPLAY);
    let tempArr = [];

    coinsArr.map( (coinObj, i) => {
      tempArr.push(coinObj.USD.MKTCAP)
    })
    setMktCapChange(tempArr)
  }

  const formatColorPctData = (data) => {

    if (data) {
      data = data.slice(0,6)

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
  }
  const formatColorDayData = (data) => {
    if (Math.sign(data) === -1) {
        return (
          <div className="negativepct">
              {data}{" "}$
          </div>
        );
      } else {
        return (
          <div className="positivepct">
            {"  "}+ {data}{" "}$
          </div>
        );
      }
  }

  return (

    <GridContainer style={{paddingBottom: "50px", paddingTop: "50px", justifyContent: "center"}}>
      <GridItem
        xs={12}
        sm={10}
        md={8}
        className={classes.mrAuto + " " + classes.mlAuto}

        style={{flexGrow: "1"}}
      >

        {/* Return Index, Name, Last Price, 24h CHange, Mkt Cap, Trade */}
        <Table 
          striped
          tableHead={[
            "#",
            "",
            "Cryptocurrency",
            "Last Price",
            "24h Change",
            "% Change",
            "Mkt Cap",
            " "
          ]}
          tableData={
          [
            [
              "1",
              <img style={{width: "2.5em"}}
                src={window.imageUrl.BTC}
                alt="..."
                className={classes.imgRoundedCircle + " " + classes.imgFluid}
              />,
              "BTC", //Name
              price[0], // Price
              formatColorDayData(dayChange[0]), // $ Change  
              formatColorPctData(dayPercentageChange[0]),     // 24h Change
              mktCap[0], // Mkt Cap or Volume,
              <Link to="/coins/BTC" className="flex-table-trade-button">TRADE</Link> // Trade
            ],
            [
              "2",
              <img style={{width: "2.5em"}}
                src={window.imageUrl.ETH}
                alt="..."
                className={classes.imgRoundedCircle + " " + classes.imgFluid}
              />,
              "ETH",
              price[1], // Price
              formatColorDayData(dayChange[1]), // $ Change  
              formatColorPctData(dayPercentageChange[1]),     // 24h Change
              mktCap[1], // Mkt Cap or Volume,
              <Link to="/coins/ETH" className="flex-table-trade-button">TRADE</Link> // Trade
            ],
            [
              "3",
              <img style={{width: "2.5em"}}
                src={window.imageUrl.ADA}
                alt="..."
                className={classes.imgRoundedCircle + " " + classes.imgFluid}
              />,
              "ADA",
              price[2], // Price
              formatColorDayData(dayChange[2]), // $ Change  
              formatColorPctData(dayPercentageChange[2]),     // 24h Change
              mktCap[2], // Mkt Cap or Volume,
              <Link to="/coins/ADA" className="flex-table-trade-button">TRADE</Link> // Trade
            ],
            [
              "4",
              <img style={{width: "2.5em"}}
                src={window.imageUrl.XRP}
                alt="..."
                className={classes.imgRoundedCircle + " " + classes.imgFluid}
              />,
              "XRP",
              price[3], // Price
              formatColorDayData(dayChange[3]), // $ Change  
              formatColorPctData(dayPercentageChange[3]),     // 24h Change
              mktCap[3], // Mkt Cap or Volume,
              <Link to="/coins/XRP" className="flex-table-trade-button">TRADE</Link> // Trade
            ],
            [
              "5",
              <img style={{width: "2.5em"}}
                src={window.imageUrl.XLM}
                alt="..."
                className={classes.imgRoundedCircle + " " + classes.imgFluid}
              />,
              "XLM",
              price[4], // Price
              formatColorDayData(dayChange[4]), // $ Change  
              formatColorPctData(dayPercentageChange[4]),     // 24h Change
              mktCap[4], // Mkt Cap or Volume,
              <Link to="/coins/XLM" className="flex-table-trade-button">TRADE</Link> // Trade
            ]
          ]}
          customCellClasses={[
            classes.textCenter,
            classes.padding0,
            classes.textRight,
            classes.textRight
          ]}
          customClassesForCells={[0, 1, 5, 6]}
          customHeadCellClasses={[
            classes.textCenter,
            classes.textRight,
            classes.textRight
          ]}
          customHeadClassesForCells={[0, 5, 6]}
        />
      </GridItem>
    </GridContainer>

  );
}


export default CryptoIndex;