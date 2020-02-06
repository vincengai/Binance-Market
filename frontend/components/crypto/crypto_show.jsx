import React from 'react';
import { fetch1DayInfo } from '../../util/coin_api_util';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
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
            fade: false 
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

    };
    
    componentDidMount() {
        const symbol = this.props.match.params.symbol

        this.props.fetchCoinInfo(symbol)

        // Make sure to Add in parts in Regards to the Rechart 
        // if ( this.state.dataPeriod === '' ) {
            // this.get1DayPrices(symbol);
            // this.get1WeekPrices(symbol);
            // this.get1MonthPrices(symbol);
            // this.get1YearPrices(symbol);
        // }
        
        
    };

    // componentDidUnmount() {
        // Remove Ajax Fetches when we click outside of the price page, preventing from max API Calls
    // };

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

    calculateData(data) {
        
    };

    get1DayPrices(symbol) {
        let {fetch1DayInfo}  = this.props;

        this.setState({
            dataPeriod: "1D",
            dataActive: 'day-active'
        });

        fetch1DayInfo(symbol).then ( (response) => {
            
            return this.setState({
                data: response.data.Data.Data,
                "timePeriodActive": "day"
                // ["1D"]: response.data.Data.Data, // Might need to go in one more level 
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
                "timePeriodActive": "weel"
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
            return this.setState({
                data: response.data.Data.Data, // Might need to go in one more level
                // ["1Y"]: response.data.Data.Data,
                "timePeriodActive": "year"
            });
        });
    }

    // handleClick() {
    //     switch (this.state.timePeriodActive) {
    //         case "day":
    //             this.setState({
    //                 dataPeriod: "1D",
    //                 dataActive: 'day-active'
    //             });
    //             break;

    //         case "week":
    //             this.setState({
    //                 dataPeriod: "1W",
    //                 dataActive: 'week-active'
    //             });
    //             break;

    //         case "month":
    //             this.setState({
    //                 dataPeriod: "1M",
    //                 dataActive: 'month-active'
    //             });
    //             break;

    //         case "year":
    //             this.setState({
    //                 dataPeriod: "1Y",
    //                 dataActive: 'year-active'
    //             });
    //             break;
    //     }
    // }
    
    render() {
        if (this.props.coinInfo === undefined) return null;
        let { coin } = this.props;
        let obj = window.imageUrl;
        let path = obj[coin];

        
        let symbol = this.props.match.params.symbol

        return (    
            <div>
                <LineChart width={570} height={245} data={this.state.data}>
                    {/* <Tooltip content={<CustomTooltip payload={payload} />} offset={-65} animationDuration={100} /> */}

                    <XAxis dataKey="name" />
                    <YAxis type="number" domain={['dataMin - 5', 'dataMax + 5']} />
                    <Line
                        type="monotone"
                        dataKey="close"
                        stroke="#8884d8"
                        dot={false}
                        activeDot={{ r: 5 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="open"
                        stroke="82ca9d"
                        dot={false}
                        activeDot={{ r: 5 }}
                    />
                </LineChart> 
  
                <div id="timeframe">
                    <ul id="time-periods">
                        <li className={this.state.dataActive} onClick={() => this.get1DayPrices(symbol)}> 1D </li>
                        <li className={this.state.dataActive} onClick={() => this.get1WeekPrices(symbol)}> 1W </li>
                        <li className={this.state.dataActive} onClick={() => this.get1MonthPrices(symbol)}> 1M </li>
                        <li className={this.state.dataActive} onClick={() => this.get1YearPrices(symbol)}> 1Y </li>
                    </ul>
                </div>
                <div className='show-page'>
                    <div className="show-header">
                        <div className='head-name'><img src={path} id='h-icon'/>{this.props.coin}</div>
                        <div>{this.price()}</div>
                    </div>

                    <div className="table-container">
                        <div className="flex-table-header">
                            <div className="flex-row"> Market Cap
                                <div id='show-text'>
                                    {this.marketCap()}
                                </div>
                            </div>
                            
                            <div className="flex-row">24h Vol(Global)
                                <div id='show-text'>
                                    {this.volume()}
                                </div>
                            </div>

                            <div className="flex-row">Circulating Supply
                                <div id='show-text'>
                                    {this.supply()}
                                </div>
                            </div>
                            <div className="flex-row">Issue Date
                                <div id='show-text'>
                                    2008-10-31
                                </div>
                            </div>

                            <div className="flex-row">Issue Price
                                <div id='show-text'>
                                    {this.price()}
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }


}
export default CryptoShow;
