import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, Tooltip
} from 'recharts';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
// import RechartContainer from '../chart/rechart_container'

class CustomTooltip extends React.Component {

    render() {
        const { active } = this.props || {};
        if (active) {
            const { payload } = this.props || [{}];

            let date = payload[0].payload.time;						//=> 1564358400
            let day = new Date(date * 1000);						//=> Sun Jul 28 2019 20:00:00 GMT-0400 (Eastern Daylight Time)		DATE OBJECT! NOT STRING

            let time = day.toLocaleTimeString();					//=> '8:00:00 PM'
            let amOrPm = time.slice(-2);							//=> 'PM'

            time = time.slice(0, 4) + ' ' + amOrPm;					//=> '8:00 PM'
            day = day.toString().slice(4, 10);						//=> 'Jul 28'

            return (
                <div className="custom-tooltip">
                    <p className="tooltip-label">{`$ ${payload[0].value}`}</p>
                    <p className="tooltip-time">{`${day} ${time}`}</p>
                </div>
            );
        }
        return null;
    }
}

class CryptoShow extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentPrice: '',
            // "1D": [],
            // "1W": [],
            // "1M": [],
            // "1Y": [],
            "timePeriodActive": '',
            "data": [],
            "dataPeriod": '',
            "dataActive": '',
            modalOn: false,
            fade: false,
            news: []   
        }

        // All for the Top Container
        this.price = this.price.bind(this);
        this.volume = this.volume.bind(this);
        this.marketCap = this.marketCap.bind(this);
        this.supply = this.supply.bind(this);

        // All for the ReChart Info 
        this.get1DayPrices = this.get1DayPrices.bind(this);
        this.get1WeekPrices = this.get1WeekPrices.bind(this);
        this.get1MonthPrices = this.get1MonthPrices.bind(this);
        this.get1YearPrices = this.get1YearPrices.bind(this);

        // News
        this.getNews = this.getNews.bind(this);

        //Modal
        this.openSelectModal = this.openSelectModal.bind(this);

    };
    
    componentDidMount() {
        const symbol = this.props.match.params.symbol;
        // console.log(this.props, 'checking for props')
        // this.props.fetchNewsInfo(symbol)
        // this.props.fetchCoinsInfo(symbol)

        if ( this.state.dataPeriod === '' ) {
            this.props.fetchCoinInfo(symbol);
            this.get1YearPrices(symbol);
            this.getNews(symbol);
            // this.get1WeekPrices(symbol);
            // this.get1MonthPrices(symbol);
            // this.get1DayPrices(symbol);

        }   
    };

    // componentDidUnmount() {
    //     Remove Ajax Fetches when we click outside of the price page, preventing from max API Calls
    // };


    componentWillUnmount() {
        this.props.fetchCoinInfo(symbol);
        this.get1YearPrices(symbol);
        this.getNews(symbol);
    }
    
    openSelectModal() {
        this.props.openModal('buy');
    }

    // Methods used for Top Bar Container
    price() {
        let coinArr = Object.values(this.props.coinInfo);

        return (
            coinArr.map( (coinObj, i) => {
                return (
                    <div key={i}> {coinObj.USD.PRICE} </div>
                )
            })
        )
    }

    supply() {
        let coinArr = Object.values(this.props.coinInfo);

        return (
            coinArr.map((coinObj, i) => {
                return (
                    <div key={i}> {coinObj.USD.SUPPLY} </div>
                )
            })
        )
    }

    volume() {
        let coinArr = Object.values(this.props.coinInfo);
        
        return (
            coinArr.map((coinObj, i) => {
                return (
                    <div key={i}>{coinObj.USD.TOPTIERVOLUME24HOUR} ({coinObj.USD.TOPTIERVOLUME24HOURTO})</div>
                )
            })
        )
    }

    marketCap() {
        let coinArr = Object.values(this.props.coinInfo);

        return (
            coinArr.map((coinObj, i) => {
                return (
                    <div key={i}>{coinObj.USD.MKTCAP}</div>
                )
            })
        )
    }

    // Methods for ReChart Info

    calculateData() {
        let data = this.state.data;
        const prices = [];

        for (let i = 0; i < data.length; i++) {
            prices.push(parseFloat(data[i].close))
        }

        const min = Math.min(...prices);
        const max = Math.max(...prices);
        
        return {
            min,
            max,
        }
    };

    getNews(symbol) {
        let { fetchNewsInfo } = this.props;

        
        fetchNewsInfo(symbol).then( (response) => {
            // debugger
            if (response.data) {
                return this.setState({
                    news: response.data.slice(0, 4) // Slide up til 5 to grab 5 top articles 
                });
            }
        });
    }

    get1DayPrices(symbol) {
        let {fetch1DayInfo}  = this.props;

        this.setState({
            dataPeriod: "1D",
            dataActive: 'day-active'
        });

        // console.log(response, 'thisisthenews')
        fetch1DayInfo(symbol).then ( (response) => {
            

            return this.setState({
                data: response.data.Data.Data,
                "timePeriodActive": "day"
            });
        });
    }

    get1WeekPrices(symbol) {
        let {fetch1WeekInfo}  = this.props;

        this.setState({
            dataPeriod: "1W",
            dataActive: 'week-active'
        });

        fetch1WeekInfo(symbol).then ( (response) => {
            return this.setState({
                data: response.data.Data.Data, // Might need to go in one more level
                // ["1W"]: response.data.Data.Data, // Might need to go in one more level 
                "timePeriodActive": "week"
            });
        });
    }

    get1MonthPrices(symbol) {
        let { fetch1MonthInfo } = this.props;

        this.setState({
            dataPeriod: "1M",
            dataActive: 'month-active'
        });

        fetch1MonthInfo(symbol).then ( (response) => {
            return this.setState({
                data: response.data.Data.Data, // Might need to go in one more level
                // ["1M"]: response.data.Data.Data,
                "timePeriodActive": "month"
            });
        });
    }

    get1YearPrices(symbol) {
        let { fetch1YearInfo } = this.props; 

        this.setState({
            dataPeriod: "1Y",
            dataActive: 'year-active'
        });

        fetch1YearInfo(symbol).then ( (response) => {
            console.log(response)
            return this.setState({
                data: response.data.Data.Data, // Might need to go in one more level
                // ["1Y"]: response.data.Data.Data,
                "timePeriodActive": "year"
            });
        });
    }



    render() {
        
        // News Articles to be rendered, code Snippet taken from Coin-space
        // console.log(this.state.news)
        const newsArticles = this.state.news.map((article, idx) => {		// loop over array of 4 article objects, return an array of <li>'s

            let date = new Date(article.published_on * 1000);		//=> Sun Jan 18 1970 21:48:07 GMT-0500 (Eastern Standard Time)		date object!
            date = date.toString().slice(4, 10);								//=> 'Jan 18'
            let body = article.body.slice(0, 130) + '...';
            let { source, title, imageurl, guid } = article;

            return (
                <li key={idx} className="news-li">
                    <a href={guid}><h4 key={title} className="news-title">{title}</h4></a>
                    <div key={idx + 1} className="news-item">

                        <div key={idx + 2} className="news-left">
                            <a href={guid}><p key={idx + 3} className="news-body">{body}</p></a>
                            <p key={idx + 4} className="news-source">{source}</p>
                            <p key={idx + 5} className="news-date">{date}</p>
                            <p key={idx + 6} className="news-symbol">{symbol}</p>
                        </div>
                        <div key={idx + 7} className="news-right">
                            <a href={guid}><img key={imageurl} src={imageurl} alt="article-image" className="news-image" /></a>
                        </div>
                    </div>
                </li>
            );
        });

        //////////////
        // if (this.props.fetchNewsInfo === undefined) return null;
        if (this.props.coinInfo === undefined) return null;
        if (this.state.news.length === 0) return null; 
        // if (this.props.openModal === undefined) return null;
        ///////////////

        let { coin } = this.props;
        let obj = window.imageUrl;
        let path = obj[coin];

        let symbol = this.props.match.params.symbol
        let { min, max } = this.calculateData(); 


        return (    
            <div>

                   <div className="show-header">
                        <div className='head-name'><img src={path} id='h-icon'/></div>
                        <div>{this.props.coin}</div>
                        <div>{this.price()}</div>

                    </div>

                <div className="outter-most-show">
                 

                    <div className="show-table-container">
                        <div className="flex-table-header">
                            <div className="flex-row"> Market Cap
                                <div className='show-text'>
                                    {this.marketCap()}
                                </div>
                            </div>
                            
                            <div className="flex-row">24h Vol(Global)
                                <div className='show-text'>
                                    {this.volume()}
                                </div>
                            </div>

                            <div className="flex-row">Circulating Supply
                                <div className='show-text'>
                                    {this.supply()}
                                </div>
                            </div>
                            <div className="flex-row">Issue Date
                                <div className='show-text'>
                                    2008-10-31
                                </div>
                            </div>

                            <div className="flex-row">Issue Price
                                <div className='show-text'>
                                    {this.price()}
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div className="timeframe">
                            <li className="timeframe-list" onClick={() => this.get1DayPrices(symbol)}> 1D </li>
                            <li className="timeframe-list" onClick={() => this.get1WeekPrices(symbol)}> 1W </li>
                            <li className="timeframe-list" onClick={() => this.get1MonthPrices(symbol)}> 1M </li>
                            <li className="timeframe-list" onClick={() => this.get1YearPrices(symbol)}> 1Y </li>
                    </div>

                    
                    <button onClick={this.openSelectModal} className="trans-button"> Transaction</button>
                                        

                    <div className="linechart-news">    
                        <div className="linechart">
                            <LineChart width={550} height={405} data={this.state.data} margin={{top: 0, right: 0, left: 0, bottom: 0}} cursor="crosshair">
                                {/* <Tooltip content={<CustomTooltip />} offset={-50} animationDuration={100} />  */}

                                <XAxis
                                    hide={true}
                                    tickLine={false} />
                                <YAxis
                                    hide={true}
                                    domain={[dataMin => (dataMin * 0.80), dataMax => (dataMax * 1.05)]} />
                                <Tooltip
                                    cursor={false}
                                    labelStyle={{ display: 'none' }}
                                />

                                <Line
                                    type="monotone"
                                    dataKey="close"
                                    stroke="#8884d8"
                                    activeDot={{ r:5 }}
                                    strokeWidth={1.7}
                                    dot={false}
                                    activeDot={false}
                                    name="$"
                                />

                            </LineChart>
                        </div>

                        <div className="news-container">
                            <div className="news-header">Top Stories</div>
                            <ul className="news">
                                {newsArticles}
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        )
    }


}
export default CryptoShow;
