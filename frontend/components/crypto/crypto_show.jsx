import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import ReChartSection from '../crypto/recharts/rechart';
import NewsSection from '../crypto/news/news';
// import {
//     LineChart, Line, XAxis, YAxis, Tooltip
// } from 'recharts';
import { fetchCurrentPrice, fetchCurrencyInfo} from '../../util/coin_api_util';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
// import RechartContainer from '../chart/rechart_container'
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



const CryptoShow = () => {
    const [ticker, setTicker] = useState('');
    const [day, setDay] = useState([]);
    const [week, setWeek] = useState([]);
    const [month, setMonth] = useState([]);
    const [year, setYear] = useState([]);
    const [name, setName] = useState([]);
    const [price, setPrice] = useState([]);
    const [dayChange, setDayChange] = useState([]);
    const [dayPercentageChange, setDayPercentageChange] = useState([]);
    const [mktCap, setMktCapChange] = useState([]);

    const history = useHistory();
    let coin = '';

    useEffect ( () => {
        
        coin = history.location.pathname.slice(7);
        setTicker(coin);

        const setCoin = async () => {
            let coin = history.location.pathname.slice(7);
            setTicker(coin);
        }

        setCoin();
    }, []);



    return (
        <div>
            <ReChartSection price={price}/>
            <NewsSection ticker={ticker}/>
        </div>
    )
}
// class CryptoShow extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             currentPrice: '',
//             "1D": [],
//             "1W": [],
//             "1M": [],
//             "1Y": [],
//             marketCap: '',
//             volume24HRS: '',
//             supply: '',
//             coin: this.props.coin,
//             "timePeriodActive": '',
//             "data": [],
//             "dataPeriod": '',
//             "dataActive": '',
//             modalOn: false,
//             fade: false,
//             news: [],
//             readyToRender: false
//         }

//         // All for the Top Container
//         this.updateCurrencyInfo = this.updateCurrencyInfo.bind(this);

//         // All for the ReChart Info 
//         this.get1DayPrices = this.get1DayPrices.bind(this);
//         this.get1WeekPrices = this.get1WeekPrices.bind(this);
//         this.get1MonthPrices = this.get1MonthPrices.bind(this);
//         this.get1YearPrices = this.get1YearPrices.bind(this);

//         // News
//         this.getNews = this.getNews.bind(this);

//         //Modal
//         this.openSelectModal = this.openSelectModal.bind(this);
//     };

//    componentDidUpdate(prevProps) {
//         let {coin} = this.props;
//         if (prevProps.coin !== coin) {
//             this.getCurrentprice();
//             this.updateCurrencyInfo();
//             this.get1MonthPrices(coin);

//         }
//     }

//     componentDidMount() {
//         let { coin } = this.props;

//         if (this.state.timePeriodActive != "month") {
//             this.getCurrentprice()
//             this.get1MonthPrices(coin); 
//             this.updateCurrencyInfo();
//             this.getNews();
//         }
//     }
    

//     openSelectModal() {
//         this.props.openModal({symbol: this.state.coin, modalType: 'buy'});
//     }

//     // Methods used for Top Bar Container

//     getCurrentprice() {
//        let {coin} = this.props;
       
//         fetchCurrentPrice(coin).then(
//             (response) => {
//                 return this.setState({
//                     currentPrice: response.USD			// old for API that gets average price from multiple exchanges
//                 });
//             }
//         );
//     }

//     updateCurrencyInfo() {
//         let { coin } = this.props;


//         fetchCurrencyInfo(coin).then(
//             (response) => {
//                 return this.setState({
//                     currentPrice: response.DISPLAY[coin].USD.PRICE,
//                     marketCap: response.DISPLAY[coin].USD.MKTCAP,
//                     volume24HRS: response.DISPLAY[coin].USD.TOTALVOLUME24HTO,
//                     supply: response.DISPLAY[coin].USD.SUPPLY
//                 });
//             }
//         );
//     }





//     render() {


//         });
//         ;

//         //////////////
//         // if (this.props.fetchNewsInfo === undefined) return null;
//         // if (!this.state.readyToRender) return null;
//         ///////////////

//         let { coin } = this.props;
//         let obj = window.imageUrl;
//         let path = obj[coin];

//         let symbol = this.props.match.params.symbol
//         let { min, max } = this.calculateData();


//         return (
//             <div>

//                 <div className="show-header">
//                     <div className='head-name'><img src={path} id='h-icon' /></div>
//                     <div className="head-prices">{this.props.coin} </div> 
//                     <div className="head-price"> {this.state.currentPrice}</div>
//                     <button onClick={this.openSelectModal} className="trans-button">Trade</button>
//                 </div>

//                 <div className="outter-most-show">
//                     {/* <div className="right-column">
//                         <button onClick={this.openSelectModal} className="trans-button">Transaction</button>
//                     </div> */}

//                     <div className="linechart-news">
//                         <div className="linechart">
//                             <LineChart width={570} height={305} data={this.state.data} margin={{ top: 0, right: 0, left: 20, bottom: 0 }} cursor="crosshair">
//                                 <Tooltip content={<CustomTooltip />} offset={-65} animationDuration={100} />

//                                 <XAxis dataKey="name" />
//                                 <YAxis type="number" domain={['dataMin - 5', 'dataMax + 5']} />
//                                 <Line
//                                     type="monotone"
//                                     dataKey="close"
//                                     dot={false}
//                                     activeDot={{ r: 5 }}
//                                 />

//                                 <Line
//                                     type="monotone"
//                                     dataKey="close"
//                                     stroke="#8884d8"
//                                     activeDot={{ r: 5 }}
//                                     strokeWidth={1.7}
//                                     dot={false}
//                                     activeDot={false}
//                                     name="$"
//                                 />

//                             </LineChart>
//                         </div>

//                         <div className="timeframe">
//                             <li className="timeframe-list" onClick={() => this.get1DayPrices(symbol)}> 1D </li>
//                             <li className="timeframe-list" onClick={() => this.get1WeekPrices(symbol)}> 1W </li>
//                             <li className="timeframe-list" onClick={() => this.get1MonthPrices(symbol)}> 1M </li>
//                             <li className="timeframe-list" onClick={() => this.get1YearPrices(symbol)}> 1Y </li>
//                         </div>

//                         <div className="show-table-container">
//                             <div className="flex-table-header">
//                                 <div className="flex-row"> Market Cap
//                                 <div className='show-text'>
//                                         {this.state.marketCap}
//                                     </div>
//                                 </div>

//                                 <div className="flex-row">Volume (24h)
//                                 <div className='show-text'>
//                                         {this.state.volume24HRS}
//                                     </div>
//                                 </div>

//                                 <div className="flex-row">Circulating Supply
//                                 <div className='show-text'>
//                                         {this.state.supply}
//                                     </div>
//                                 </div>
//                                 <div className="flex-row">Issue Date
//                                 <div className='show-text'>
//                                         2008-10-31
//                                 </div>
//                                 </div>

//                                 <div className="flex-row">Issue Price
//                                 <div className='show-text'>
//                                         {this.state.currentPrice}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="news-container">
//                             <div className="news-header">Top News</div>
//                             <ul className="news">
//                                 {newsArticles}
//                             </ul>
//                         </div>
//                     </div>

//                 </div>

//             </div>
//         )
//     }


// }
export default CryptoShow;
