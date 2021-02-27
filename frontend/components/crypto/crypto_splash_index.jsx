import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoinsInfo } from "../../util/coin_api_util";

import classNames from "classnames";

import 'babel-polyfill'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
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


const CryptoIndex = (props) => {
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);
  const [dayChange, setDayChange] = useState([]);
  const [mktCap, setMktCap] = useState([]);
  const [checked, setChecked] = React.useState([1, 3, 5]);

  

  useEffect( () => {
    const fetchCoinsDataAPI = async () => {
      const initialCoinsData = await fetchCoinsInfo();
      console.log(initialCoinsData)
      
      // setAndFormatPrice(initialCoinsData);
      // setAndFormatName();

    };

    fetchCoinsDataAPI();
    console.log(name)
  }, [])
  
  const coins = ['BTC','ETH','BCH','BNB','LTC','TRX','XRP','XLM','DASH']

  // const fillRows = () => {
  //   return coins.map((ele, i) => {
  //     return [
  //             i,
  //             <img style={{width: "2.5em"}}
  //               src={window.imageUrl.ele}
  //               alt="..."
  //               className={classes.imgRoundedCircle + " " + classes.imgFluid}
  //             />,
  //             ele, //Name
  //             price[i], // Price
  //             dayChange[i],     // 24h Change
  //             mktCap[i],   // Mkt Cap or Volume
  //             "€ 1,225" // Trade
  //           ]
  //   });
  // }

  const currentPrice = () => {
    let coinsArr = Object.values(price);

    return price.map((ele, i) => {
      return <div key={i}>{ele} </div>;
    });
  }

  // day24Change() {
  //   let coinsArr = Object.values(this.props.coins);
  //   let counter = 0; 

  //   return coinsArr.map((coinObj, i) => {
  //     if (Math.sign(coinObj.USD.CHANGEPCTHOUR) === -1) {
  //       return (
  //         <div className="negativepct" key={i}>
  //           {coinObj.USD.CHANGEPCTHOUR}%{" "}
  //         </div>
  //       );
  //     } else {
  //       return (
  //         <div className="positivepct" key={i}>
  //           {" "}
  //           {coinObj.USD.CHANGEPCTHOUR}%{" "}
  //         </div>
  //       );
  //     }
  //   });
  // }

  // directShow(symbol) {
  //   this.props.history.push(`/coins/${symbol}`);
  // }


  const classes = useStyles();

  // if (this.props.coins === undefined) return null;

    return (
        <GridContainer style={{paddingBottom: "50px"}}>
          <GridItem xs={12} sm={12} md={12}>
          </GridItem>
          <GridItem
            xs={12}
            sm={10}
            md={8}
            className={classes.mrAuto + " " + classes.mlAuto}
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
                "Mkt Cap",
                " "
              ]}
              tableData={[ 
                
                [
                  "1",
                  <img style={{width: "2.5em"}}
                    src={window.imageUrl.BTC}
                    alt="..."
                    className={classes.imgRoundedCircle + " " + classes.imgFluid}
                  />,
                  "BTC", //Name
                  "Office", // Price
                  "25",     // 24h Change
                  "€ 49",   // Mkt Cap or Volume
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
                  "Office",
                  "30",
                  "€ 10",
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
                  "Office",
                  "50",
                  "€ 10.99",
                  <Link to="/coins/ADA" className="flex-table-trade-button">TRADE</Link> // Trade
                ],
                [
                  "4",
                  <img style={{width: "2.5em"}}
                    src={window.imageUrl.BNB}
                    alt="..."
                    className={classes.imgRoundedCircle + " " + classes.imgFluid}
                  />,
                  "BNB",
                  "Communication",
                  "10",
                  "€ 499.00",
                  <Link to="/coins/BNB" className="flex-table-trade-button">TRADE</Link> // Trade
                ],
                [
                  "5",
                  <img style={{width: "2.5em"}}
                    src={window.imageUrl.LTC}
                    alt="..."
                    className={classes.imgRoundedCircle + " " + classes.imgFluid}
                  />,
                  "LTC",
                  "Communication",
                  "10",
                  "€ 599.00",
                  <Link to="/coins/LTC" className="flex-table-trade-button">TRADE</Link> // Trade
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
      // <div className="table-container">
      //   <div className="flex-table-header">
      //     <div className="flex-row-first">Name</div>
      //     <div className="flex-row">Last Price</div>
      //     <div className="flex-row">24h Change</div>
      //     <div className="flex-row">Chart</div>
      //     <div className="flex-row">Trade</div>
      //   </div>

      //   <div className="table-column">
      //     <div className="flex-table-name">
      //       <div id="btc-div">
      //         <img src={window.imageUrl.BTC} id="c-icon" />
      //         <Link to="/coins/BTC" className="flex-name">
      //           BTC
      //         </Link>
      //       </div>
      //       <div id="btc-div">
      //         <img src={window.imageUrl.ETH} id="c-icon3" />
      //         <Link to="/coins/ETH" className="flex-name">
      //           ETH
      //         </Link>
      //       </div>
      //       <div id="btc-div">
      //         <img src={window.imageUrl.BCH} id="c-icon3" />
      //         <Link to="/coins/BCH" className="flex-name">
      //           BCH
      //         </Link>
      //       </div>
      //       <div id="btc-div">
      //         <img src={window.imageUrl.BNB} id="c-icon2" />
      //         <Link to="/coins/BNB" className="flex-name">
      //           BNB
      //         </Link>
      //       </div>
      //       <div id="btc-div">
      //         <img src={window.imageUrl.LTC} id="c-icon3" />
      //         <Link to="/coins/LTC" className="flex-name">
      //           LTC
      //         </Link>
      //       </div>
      //       <div id="btc-div">
      //         <img src={window.imageUrl.TRX} id="c-icon3" />
      //         <Link to="/coins/TRX" className="flex-name">
      //           TRX
      //         </Link>
      //       </div>
      //       <div id="btc-div">
      //         <img src={window.imageUrl.XRP} id="c-icon3" />
      //         <Link to="/coins/XRP" className="flex-name">
      //           XRP
      //         </Link>
      //       </div>
      //       <div id="btc-div">
      //         <img src={window.imageUrl.XLM} id="c-icon3" />
      //         <Link to="/coins/XRP" className="flex-name">
      //           XLM
      //         </Link>
      //       </div>
      //        <div id="btc-div">
      //         <img src={window.imageUrl.DASH} id="c-icon3" />
      //         <Link to="/coins/DASH" className="flex-name">
      //           DASH
      //         </Link>
      //       </div>
      //       {/* // <div id="btc-div">
      //       //   <img src={window.imageUrl.ONT} id="c-icon3" />
      //       //   <Link to="/coins/ONT" className="flex-name">
      //       //     ONT
      //       //   </Link>
      //       // </div>
      //       // <div id="btc-div">
      //       //   <img src={window.imageUrl.NEO} id="c-icon3" />
      //       //   <Link to="/coins/NEO" className="flex-name">
      //       //     NEO
      //       //   </Link>
      //       // </div> */} 
      //     </div>

      //     <div className="flex-table-price">{this.currentPrice()}</div>

      //     <div className="flex-table-24hChange">{this.day24Change()}</div>

      //     <div className="flex-table-markets">
      //       <div><img src={window.imageUrl.graphA} className="c-graph" /></div>
      //       <div><img src={window.imageUrl.graphB} className="c-graph" /></div>
      //       <div><img src={window.imageUrl.graphC} className="c-graph" /></div>
      //       <div><img src={window.imageUrl.graphA} className="c-graph" /></div>
      //       <div><img src={window.imageUrl.graphB} className="c-graph" /></div>
      //       <div><img src={window.imageUrl.graphC} className="c-graph" /></div>
      //       <div><img src={window.imageUrl.graphA} className="c-graph" /></div>
      //       <div><img src={window.imageUrl.graphB} className="c-graph" /></div>
      //       <div><img src={window.imageUrl.graphC} className="c-graph" /></div>
      //       {/* <div> <img src={window.imageUrl.graphA} className="c-graph" /></div>
      //       <div><img src={window.imageUrl.graphB} className="c-graph" /></div> */}
      //     </div>

      //     <div className='flex-table-trade'>
      //         <div><Link to="/coins/BTC" className="flex-table-trade-button">TRADE</Link></div>
      //         <div><Link to="/coins/ETH" className="flex-table-trade-button">TRADE</Link></div>
      //         <div><Link to="/coins/BCH" className="flex-table-trade-button">TRADE</Link></div>
      //         <div><Link to="/coins/BNB" className="flex-table-trade-button">TRADE</Link></div>
      //         <div><Link to="/coins/LTC" className="flex-table-trade-button">TRADE</Link></div>
      //         <div><Link to="/coins/TRX" className="flex-table-trade-button">TRADE</Link></div>
      //         <div><Link to="/coins/XRP" className="flex-table-trade-button">TRADE</Link></div>
      //         <div><Link to="/coins/XLM" className="flex-table-trade-button">TRADE</Link></div>
      //         <div><Link to="/coins/DASH" className="flex-table-trade-button">TRADE</Link></div>
      //         {/* <div><Link to="/coins/ONT" className="flex-table-trade-button">TRADE</Link></div>
      //         <div><Link to="/coins/NEO" className="flex-table-trade-button">TRADE</Link></div> */}
      //     </div>

      //   </div>
      // </div>
    );
  }


export default CryptoIndex;
