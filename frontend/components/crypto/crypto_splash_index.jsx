import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import 'babel-polyfill'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
// @material-ui/core icons
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
// import Remove from "@material-ui/icons/Remove";
// import Add from "@material-ui/icons/Add";
// import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// import Reply from "@material-ui/icons/Reply";
// import Favorite from "@material-ui/icons/Favorite";

// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Table from "../Table/Table.js";

import Button from "../../components/button/Button.js";
// import Media from "../../components/Media/Media.js";
// import CustomInput from "../../components/CustomInput/CustomInput.js";
// import Paginations from "../../components/Pagination/Pagination.js";
import styles from "../../../app/assets/jss/material-kit-pro-react/components/tableStyle.js";


//////
import { fetchCoinsInfo } from "../../util/coin_api_util";
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
  const [coinsData, setCoinsData] = useState([]);
  const [checked, setChecked] = React.useState([1, 3, 5]);

  useEffect( () => {
    const fetchCoinsDataAPI = async () => {
      const initialCoinsData = fetchCoinsInfo();

      setCoinsData(initialCoinsData);
    }

    fetchCoinsDataAPI();
    console.log(coinsData)
  }, [])
  


  // currentPrice() {
  //   let coinsArr = Object.values(this.props.coins);

  //   return coinsArr.map((coinObj, i) => {
  //     return <div key={i}>{coinObj.USD.PRICE} </div>;
  //   });
  // }

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
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <h4>Simple Table</h4>
          </GridItem>
          <GridItem
            xs={12}
            sm={10}
            md={8}
            className={classes.mrAuto + " " + classes.mlAuto}
          >
            <h4>
              <small>Simple With Actions</small>
            </h4>
            <Table
              tableHead={[
                "#",
                "Name",
                "Job Position",
                "Since",
                "Salary",
                "Actions"
              ]}
              tableData={[
                [
                  "1",
                  "Andrew Mike",
                  "Develop",
                  "2013",
                  "€ 99,225",
                  fillButtons
                ],
                ["2", "John Doe", "Design", "2012", "€ 89,241", roundButtons],
                ["3", "Alex Mike", "Design", "2010", "€ 92,144", simpleButtons],
                [
                  "4",
                  "Mike Monday",
                  "Marketing",
                  "2013",
                  "€ 49,990",
                  roundButtons
                ],
                [
                  "5",
                  "Paul Dickens",
                  "Communication",
                  "2015",
                  "€ 69,201",
                  fillButtons
                ]
              ]}
              customCellClasses={[
                classes.textCenter,
                classes.textRight,
                classes.textRight
              ]}
              customClassesForCells={[0, 4, 5]}
              customHeadCellClasses={[
                classes.textCenter,
                classes.textRight,
                classes.textRight
              ]}
              customHeadClassesForCells={[0, 4, 5]}
            />
            <h4>
              <small>Striped With Checkboxes</small>
            </h4>
            <Table
              striped
              tableHead={[
                "#",
                "",
                "Cryptocurrency",
                "Last Price",
                "24h Change",
                "Mkt Cap",
                "Trade"
              ]}
              tableData={[
                [
                  "1",
                  <Checkbox
                    key={81267378}
                    checked={checked.indexOf(1) !== -1}
                    tabIndex={-1}
                    onClick={() => handleToggle(1)}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot
                    }}
                  />,
                  "Moleskine Agenda",
                  "Office",
                  "25",
                  "€ 49",
                  "€ 1,225"
                ],
                [
                  "2",
                  <Checkbox
                    key={81267378}
                    checked={checked.indexOf(2) !== -1}
                    tabIndex={-1}
                    onClick={() => handleToggle(2)}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot
                    }}
                  />,
                  "Stabilo Pen",
                  "Office",
                  "30",
                  "€ 10",
                  "€ 300"
                ],
                [
                  "3",
                  <Checkbox
                    key={564267512}
                    checked={checked.indexOf(3) !== -1}
                    tabIndex={-1}
                    onClick={() => handleToggle(3)}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot
                    }}
                  />,
                  "A4 Paper Pack",
                  "Office",
                  "50",
                  "€ 10.99",
                  "€ 109"
                ],
                [
                  "4",
                  <Checkbox
                    key={5642675122}
                    checked={checked.indexOf(4) !== -1}
                    tabIndex={-1}
                    onClick={() => handleToggle(4)}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot
                    }}
                  />,
                  "Apple iPad",
                  "Communication",
                  "10",
                  "€ 499.00",
                  "€ 4,990"
                ],
                [
                  "5",
                  <Checkbox
                    key={56426751223}
                    checked={checked.indexOf(5) !== -1}
                    tabIndex={-1}
                    onClick={() => handleToggle(5)}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot
                    }}
                  />,
                  "Apple iPhone",
                  "Communication",
                  "10",
                  "€ 599.00",
                  "€ 5,999"
                ],
                {
                  total: true,
                  colspan: "5",
                  amount: (
                    <span>
                      <small>€</small>12,999
                    </span>
                  )
                }
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
