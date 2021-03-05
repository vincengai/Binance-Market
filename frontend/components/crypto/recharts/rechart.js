import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { fetchCurrentPrice, fetchCurrencyInfo, fetch1DayInfo} from '../../../util/coin_api_util';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

// const CustomTooltip = () => {

//     if (!this.props.active || !this.props.payload) return null;
//     const { active } = this.props || {};
//     if (active) {
//         const { payload } = this.props || [{}];

//         let date = payload[0].payload.time;						//=> 1564358400
//         let day = new Date(date * 1000);						//=> Sun Jul 28 2019 20:00:00 GMT-0400 (Eastern Daylight Time)		DATE OBJECT! NOT STRING

//         let time = day.toLocaleTimeString();					//=> '8:00:00 PM'
//         let amOrPm = time.slice(-2);							//=> 'PM'

//         time = time.slice(0, 4) + ' ' + amOrPm;					//=> '8:00 PM'
//         day = day.toString().slice(4, 10);						//=> 'Jul 28'

//         return (
//             <div className="custom-tooltip">
//                 <p className="tooltip-label">{`$ ${payload[0].value}`}</p>
//                 <p className="tooltip-time">{`${day} ${time}`}</p>
//             </div>
//         );
//     }
    
// }


const Rechart = () => {
    const history = useHistory();

    const [symbol, setSymbol] = useState('');
    // Methods for ReChart Info
    const [data, setData] = useState([]);

    useEffect( () => {
        // setSymbol(coin);

        const fetchDayData = async () => {
            let coin = history.location.pathname.slice(7);
            const response = await fetch1DayInfo(coin)

            setSymbol(coin)
            setAndFormatDayData(response)
        }

        fetchDayData();
    }, [])


    const setAndFormatDayData = (data) => {
        console.log(data, 'data for recahrts x 2')
        // setData(data)

        // setData(data.Data.Data)


        // fetch1DayInfo(ticker).then((response) => {
        //     return this.setState({
        //         ["1D"]: response.data.Data.Data,
        //         data: response.data.Data.Data,
        //         "timePeriodActive": "day"
        //     });
        // });
    }
    const calculateData = () => {
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




    const get1WeekPrices = (ticker) => {
        let { fetch1WeekInfo } = this.props;

        fetch1WeekInfo(ticker).then((response) => {
            return this.setState({
                ["1W"]: response.data.Data.Data,
                data: response.data.Data.Data, 
                "timePeriodActive": "week"
            });
        });
    }

    const get1MonthPrices = (ticker) => {
        let { fetch1MonthInfo } = this.props;

        fetch1MonthInfo(ticker).then((response) => {
            return this.setState({
                ["1M"]: response.data.Data.Data,
                data: response.data.Data.Data, 
                "timePeriodActive": "month"
            });
        });
    }

    const get1YearPrices = (ticker) => {
        let { fetch1YearInfo } = this.props;

        fetch1YearInfo(ticker).then((response) => {
            return this.setState({
                ["1Y"]: response.data.Data.Data,
                data: response.data.Data.Data, 
                "timePeriodActive": "year"
            });
        });
    }


    return (
            <div className="linechart-news">
                <div className="linechart">
                    <LineChart width={570} height={305} data={data} margin={{ top: 0, right: 0, left: 20, bottom: 0 }} cursor="crosshair">
                        {/* <Tooltip content={<CustomTooltip />} offset={-65} animationDuration={100} /> */}

                        <XAxis dataKey="name" />
                        <YAxis type="number" domain={['dataMin - 5', 'dataMax + 5']} />
                        <Line
                            type="monotone"
                            dataKey="close"
                            dot={false}
                            activeDot={{ r: 5 }}
                        />

                        <Line
                            type="monotone"
                            dataKey="close"
                            stroke="#8884d8"
                            activeDot={{ r: 5 }}
                            strokeWidth={1.7}
                            dot={false}
                            activeDot={false}
                            name="$"
                        />

                    </LineChart>
                </div>
            </div>
    )
}

export default Rechart;