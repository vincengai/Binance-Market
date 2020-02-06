// import React from 'react';
// import { connect } from 'react-redux';
// import {
//     fetchCoinInfo,
//     fetch1DayInfo,
//     fetch1WeekInfo,
//     fetch1MonthInfo,
//     fetch1YearInfo,
//     fetchCurrencyInfo
// } from '../../util/coin_api_util';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';


// const mapStateToProps = (state, ownProps) => {
//     // const { sym, high, site, paper } = CURRENCYNAMES[currencyName];

//     return ({
//         coin: ownProps.match.params.symbol,
//         userId: state.session.id,							// will be null if no one logged in
//         symbol: sym,
//         high: high,
//         site: site,
//         paper: paper,
//     });
// }


// class ToolTip extends React.Component {

//     render() {
//         const { active } = this.props || {};
//         if (active) {
//             const { payload } = this.props || [{}];

//             let date = payload[0].payload.time;						//=> 1564358400
//             let day = new Date(date * 1000);						//=> Sun Jul 28 2019 20:00:00 GMT-0400 (Eastern Daylight Time)		DATE OBJECT! NOT STRING

//             let time = day.toLocaleTimeString();					//=> '8:00:00 PM'
//             let amOrPm = time.slice(-2);							//=> 'PM'

//             time = time.slice(0, 4) + ' ' + amOrPm;					//=> '8:00 PM'
//             day = day.toString().slice(4, 10);						//=> 'Jul 28'

//             return (
//                 <div className="custom-tooltip">
//                     <p className="tooltip-label">{`$ ${payload[0].value}`}</p>
//                     <p className="tooltip-time">{`${day} ${time}`}</p>
//                 </div>
//             );
//         }
//         return null;
//     }
// }



// class DetailsPage extends React.Component {
//     constructor(props) {
//         super(props);
//         // debugger
//         this.state = {
//             currentPrice: '',
//             "1D": [],
//             "1W": [],
//             "1M": [],
//             "1Y": [],
//             "description": '',
//             "timePeriodActive": '',
//             marketCap: '',
//             volume24HRS: '',
//             supply: '',
//             news: [],			// array of news objects (keep latest 4 only)
//             modalOn: false,
//             fading: false,
//         }
//         // debugger

//         this.interval = false;

//         this.getCurrentPrice = this.getCurrentPrice.bind(this);
//         this.get1YearPrices = this.get1YearPrices.bind(this);
//         this.get1MonthPrices = this.get1MonthPrices.bind(this);
//         this.get1WeekPrices = this.get1WeekPrices.bind(this);
//         this.get1DayPrices = this.get1DayPrices.bind(this);
//         this.updateDescription = this.updateDescription.bind(this);
//         this.updateCurrencyInfo = this.updateCurrencyInfo.bind(this);
//         this.updateCurrencyNews = this.updateCurrencyNews.bind(this);
//         this.triggerModal = this.triggerModal.bind(this);
//         this.renderModal = this.renderModal.bind(this);
//         this.hideModal = this.hideModal.bind(this);
//     }


//     componentDidUpdate(prevProps) {
//         const { symbol } = this.props;
//         // debugger
//         if (prevProps.symbol !== symbol) {
//             // debugger
//             this.get1MonthPrices(symbol);
//             this.updateDescription(symbol);
//             this.updateCurrencyInfo(symbol);
//             this.getCurrentPrice(symbol);
//         }
//     }


//     componentDidMount() {
//         // debugger
//         const { symbol } = this.props;

//         if (this.state.timePeriodActive != "month") {
//             // debugger
//             this.get1MonthPrices(symbol);
//             this.updateDescription(symbol);
//             this.updateCurrencyInfo(symbol);
//             this.updateCurrencyNews(symbol);
//             this.getCurrentPrice(symbol);

//             // Get new price every 10 seconds
//             this.interval = window.setInterval(() => this.getCurrentPrice(symbol), 10000);
//         }
//     }


//     // remove ajax fetches when we click out of prices page, so we dont' max API calls
//     componentWillUnmount() {
//         if (this.interval) window.clearInterval(this.interval);
//     }


//     getCurrentPrice(symbol) {
//         // debugger
//         fetchCurrentPrice(symbol).then(
//             (response) => {
//                 // debugger
//                 // console.log('Fetched Current Price: ' + `${response.USD}`)						// for testing
//                 setTimeout(() => this.setState({ fading: false }), 500);

//                 return this.setState({
//                     // currentPrice: response.RAW.PRICE			// old for API that gets average price from multiple exchanges
//                     currentPrice: response.USD,
//                     fading: true,
//                 });
//             }
//         );
//     }

//     get1DayPrices(symbol) {
//         // debugger
//         fetch1DayPrices(symbol).then(
//             (response) => {
//                 // debugger
//                 return this.setState({
//                     ["1D"]: response.Data,
//                     "timePeriodActive": "day",
//                     fading: !this.state.fading
//                 });
//             }
//         );
//     }

//     get1WeekPrices(symbol) {
//         fetch1WeekPrices(symbol).then(
//             (response) => {
//                 // debugger
//                 return this.setState({
//                     ["1W"]: response.Data,
//                     "timePeriodActive": "week"
//                 });
//             }
//         );
//     }

//     get1MonthPrices(symbol) {
//         fetch1MonthPrices(symbol).then(
//             (response) => {
//                 return this.setState({
//                     ["1M"]: response.Data,
//                     "timePeriodActive": "month"
//                 });
//             }
//         );
//     }

//     get1YearPrices(symbol) {
//         fetch1YearPrices(symbol).then(
//             (response) => {
//                 return this.setState({
//                     ["1Y"]: response.Data,
//                     "timePeriodActive": "year"
//                 });
//             }
//         );
//     }

//     updateDescription(symbol) {
//         fetchDescription(symbol).then(
//             (response) => {
//                 // debugger
//                 return this.setState({
//                     description: response.description
//                 });
//             }
//         );
//     }

//     updateCurrencyInfo(symbol) {
//         fetchCurrencyInfo(symbol).then(
//             (response) => {
//                 // debugger
//                 return this.setState({
//                     marketCap: response.DISPLAY[symbol].USD.MKTCAP,
//                     volume24HRS: response.DISPLAY[symbol].USD.TOTALVOLUME24HTO,
//                     supply: response.DISPLAY[symbol].USD.SUPPLY,
//                 });
//             }
//         );
//     }

//     updateCurrencyNews(symbol) {
//         fetchCurrencyNews(symbol).then(
//             (response) => {
//                 // debugger
//                 return this.setState({
//                     news: response.Data.slice(0, 4)				// get only 4 news articles
//                 });
//             }
//         )
//     }


//     triggerModal() {
//         const state = getState();

//         // If user is NOT logged in, redirect to Sign Up Page
//         if (state.session.id == null) {
//             alert('You must be signed in to trade');
//             this.props.history.push('/signup');
//         } else {																						// If user IS logged in, 
//             // Toggle local state of modal to true
//             this.setState({
//                 modalOn: true,
//                 symbolClicked: symbol,
//                 priceClicked: price
//             });
//         }
//     }

//     // renderModal() {
//     // 	const symbol = this.props.symbol;
//     // 	const price = this.state.currentPrice;

//     // 	if (this.state.modalOn) {
//     // 		return <TradeModal symbol={symbol} toggleModal={this.hideModal} price={price} />
//     // 	} else {
//     // 		return null;
//     // 	}
//     // }

//     // hideModal() {
//     // 	this.setState({
//     // 		modalOn: false
//     // 	});
//     // }






//     render() {
//         const { symbol, high, site, paper } = this.props;
//         const {
//             currentPrice,
//             timePeriodActive,
//             marketCap,
//             volume24HRS,
//             news,
//             fading,
//         } = this.state;
//         let dataPeriod, dayActive, weekActive, monthActive, yearActive;
//         let supply = this.state.supply.slice(1);

//         switch (timePeriodActive) {
//             case "day":
//                 dataPeriod = "1D";
//                 dayActive = 'day-active';
//                 break;								// NEED BREAK STATEMENTS OR ELSE dataPeriod gets overwritten!!

//             case "week":
//                 dataPeriod = "1W";
//                 weekActive = 'week-active';
//                 break;

//             case "month":
//                 dataPeriod = "1M";
//                 monthActive = 'month-active';
//                 break;

//             case "year":
//                 dataPeriod = "1Y";
//                 yearActive = 'year-active';
//                 break;
//         }

//         const newsArticles = news.map((article, idx) => {		// loop over array of 4 article objects, return an array of <li>'s
//             // 1565287425 * 1000	// ? what kind of time format?
//             let date = new Date(article.published_on * 1000);		//=> Sun Jan 18 1970 21:48:07 GMT-0500 (Eastern Standard Time)		date object!
//             date = date.toString().slice(4, 10);								//=> 'Jan 18'
//             let body = article.body.slice(0, 130) + '...';
//             let { source, title, imageurl, guid } = article;

//             return (
//                 <li key={idx} className="news-li">
//                     <a href={guid}><h4 key={title} className="news-title">{title}</h4></a>
//                     <div key={idx + 1} className="news-item">

//                         <div key={idx + 2} className="news-left">
//                             <a href={guid}><p key={idx + 3} className="news-body">{body}</p></a>
//                             <p key={idx + 4} className="news-source">{source}</p>
//                             <p key={idx + 5} className="news-date">{date}</p>
//                             <p key={idx + 6} className="news-symbol">{symbol}</p>
//                         </div>
//                         <div key={idx + 7} className="news-right">
//                             <a href={guid}><img key={imageurl} src={imageurl} alt="article-image" className="news-image" /></a>
//                         </div>
//                     </div>
//                 </li>
//             );
//         });


//         return (
//             <>
//                 <div id="detail-wrapper">
//                     <section id="left-detail">
//                         <div className="chart-container">
//                             <h1 className="chart-title">{this.props.currencyName} <p className="sym-title">({symbol})</p></h1>
//                             <div id="chart">
//                                 <h3 className="current-price">
//                                     <span className={`${fading ? 'fade-out-in' : ''}`}>
//                                         ${currentPrice}
//                                     </span>
//                                 </h3>
//                                 {/* <LineChart width={500} height={500} data={this.state["1M"]}> */}
//                                 <LineChart width={570} height={245} data={this.state[dataPeriod]}>
//                                     <Tooltip content={<ToolTip />} offset={-65} animationDuration={100} />

//                                     <XAxis dataKey="name" />
//                                     <YAxis type="number" domain={['dataMin - 5', 'dataMax + 5']} />
//                                     <Line
//                                         type="monotone"
//                                         dataKey="close"
//                                         dot={false}
//                                         activeDot={{ r: 5 }}
//                                     />
//                                 </LineChart>
//                                 <div id="timeframe">
//                                     <ul id="time-periods">
//                                         <li className={dayActive} onClick={() => this.get1DayPrices(symbol)}>1D</li>
//                                         <li className={weekActive} onClick={() => this.get1WeekPrices(symbol)}>1W</li>
//                                         <li className={monthActive} onClick={() => this.get1MonthPrices(symbol)}>1M</li>
//                                         <li className={yearActive} onClick={() => this.get1YearPrices(symbol)}>1Y</li>
//                                     </ul>
//                                 </div>
//                             </div>

//                             <div id="currency-info-container">
//                                 <ul id="currency-info">
//                                     <li>
//                                         <div className="currency-detail-title">Market Cap</div>
//                                         <h3 className="currency-detail">{marketCap}</h3>
//                                     </li>
//                                     <li>
//                                         <div className="currency-detail-title">Volume (24 hours)</div>
//                                         <h3 className="currency-detail">{volume24HRS}</h3>
//                                     </li>
//                                     <li>
//                                         <div className="currency-detail-title">Circulating Supply</div>
//                                         <h3 className="currency-detail">{supply}</h3>
//                                     </li>
//                                     <li>
//                                         <div className="currency-detail-title">All-time high</div>
//                                         <h3 className="currency-detail">{high}</h3>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>

//                         {this.renderModal()}

//                         <div id="description-container">
//                             <h2 id="title">About {this.props.currencyName}</h2>
//                             <p id="description">
//                                 {this.state.description}
//                             </p>

//                             <h3 id="resources">RESOURCES</h3>
//                             <li className="resources-link"><a target="_blank" href={site}>Offcial website</a></li>
//                             <li className="resources-link"><a target="_blank" href={paper}>Whitepaper</a></li>
//                         </div>

//                         <div id="news-container">
//                             <h2 id="news-header">Top Stories</h2>
//                             <ul className="news">
//                                 {newsArticles}
//                             </ul>
//                         </div>
//                     </section>

//                     <section id="right-detail">
//                         <div id="detail-trade">
//                             <button className="detail-trade" onClick={this.triggerModal}>
//                                 TRADE
// 							</button>
//                         </div>
//                     </section>

//                 </div>

//             </>
//         );
//     }
// }

// export default connect(mapStateToProps, null)(DetailsPage)