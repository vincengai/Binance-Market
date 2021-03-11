import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { fetchCoinInfo, fetch1DayInfo, fetch1WeekInfo, fetch1MonthInfo, fetch1YearInfo} from '../../../util/coin_api_util';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import { makeStyles, withStyles } from "@material-ui/core/styles";

import TransactionForm from '../../transactions/transactionForm';
import RechartsShowTable from './rechartsShowTable';

import GridContainer from "../../Grid/GridContainer.js";
import GridItem from "../../Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";

import styles from "../../../../app/assets/jss/material-kit-pro-react/components/tableStyle.js";
import presentationStyle from "../../../../app/assets/jss/material-kit-pro-react/views/presentationStyle.js";
import contactsStyle from "../../../../app/assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.js";
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";


const useStyles = makeStyles(styles);
const useStyles2 = makeStyles(contactsStyle);
const useStyles3 = makeStyles(presentationStyle);

const CURRENCYNAMES = {'BTC': 'Bitcoin', 'ETH': 'Ethereum', 'ADA': 'Cardano',
                        'XRP': 'Ripple', 'XLM': 'Stellar' }

class CustomTooltip extends React.Component {

    render() {
        if (!this.props.active || !this.props.payload) return null;
        const { active } = this.props || {};
        if (active) {
            const { payload } = this.props || [{}];

            let date = payload[0].payload.time;						//=> 1564358400
            let day = new Date(date * 1000);						//=> Sun Jul 28 2019 20:00:00 GMT-0400 (Eastern Daylight Time)		DATE OBJECT! NOT STRING

            let time = day.toLocaleTimeString();					//=> '8:00:00 PM'
            let amOrPm = time.slice(-2);							//=> 'PM'

            time = time.slice(0, 4) + ' ' + amOrPm;					//=> '8:00 PM'
            day = day.toString().slice(4, 10);						//=> 'Jul 28'
            let curPrice = payload[0].value;
            let formatPrice = new Intl.NumberFormat('en').format(curPrice)

            return (
                <div className="custom-tooltip" style={{height: '3.5rem'}}>
                    <p className="tooltip-label">{`$ ${formatPrice}`}</p>
                    <p className="tooltip-time">{`${day} ${time}`}</p>
                </div>
            );
        }
    }
}

const Rechart = () => {
    const history = useHistory();
    const classes = useStyles();
    const classes2 = useStyles2();
    const classes3 = useStyles3();

    const [symbol, setSymbol] = useState('');
    const [name, setName] = useState([]);
    const [price, setPrice] = useState([]);
    const [dayChange, setDayChange] = useState([]);
    const [dayPercentageChange, setDayPercentageChange] = useState([]);
    const [mktCap, setMktCapChange] = useState([]);
    
    // Methods for ReChart Info
    const [data, setData] = useState([]);

    useEffect( () => {
        // setSymbol(coin);

        const fetchDayData = async () => {
            let coin = history.location.pathname.slice(7);
            const response = await fetch1DayInfo(coin)
            const res = await fetchCoinInfo(coin);

            setSymbol(coin)
            setAndFormatData(response)
            setPrice(res.DISPLAY[coin].USD.PRICE)

        }

        fetchDayData();
    }, [])

    // All methods below will be for recharts chart data 
    const handle1DayChange = async () => {
        let coin = history.location.pathname.slice(7);

        const response =  await fetch1DayInfo(coin)

        setAndFormatData(response)
    }

    const handle1WeekChange = async () => {
        let coin = history.location.pathname.slice(7);

        const response =  await fetch1WeekInfo(coin)

        setAndFormatData(response)
    }

    const handle1MonthChange = async () => {
        let coin = history.location.pathname.slice(7);

        const response =  await fetch1MonthInfo(coin)

        setAndFormatData(response)
    }

    
    const handle1YearChange = async () => {
        let coin = history.location.pathname.slice(7);

        const response =  await fetch1YearInfo(coin)

        setAndFormatData(response)
    }

    const setAndFormatData = (data) => {
        setData(data.Data.Data)
    }


// All methods below will be in regards to display data 
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
             -{data}{" "}
          </div>
        );
      } else {
        return (
          <div className="positivepct">
            {"  "}+{data}{" "}
          </div>
        );
      }
  }


    if (symbol === '') return null;

    return (
            <div className="linechart-news">
                
                <div className={classes2.contacts + " " + classes2.section}
                    style={{ width: "100%", display: 'flex', flexDirection: 'column', alignItems: 'center', padding: "15px 0" }}
                >
                    <div className={classes3.container} style={{zIndex: '2', display: 'flex', justifyContent: 'center', maxWidth: '75%', margin: 'auto'}}>
                        <GridContainer style={{width: '100%'}}>
                        <GridItem>
                            <div className={classes3.brand} style={{marginBottom: '0.5rem'}}>
                            <h1 style={{fontSize: "2rem", color: 'rgb(240, 185, 11)'}}>
                                {CURRENCYNAMES[`${symbol}`]}  ({symbol})
                            </h1>
                            {/* <h2 className={classes3.title} style={{fontSize: "1.5rem", marginTop: "10px", color: '#E8E8E8'}}>
                                {price}
                            </h2> */}
                            </div>
      
                            <RechartsShowTable style={{maxWidth: '80%'}}/>

                        </GridItem>
                        </GridContainer>
                    </div>

                    <ResponsiveContainer width="80%" height={400} className="recharts-wrapper">
                        <LineChart width={570} height={255} data={data} margin={{ top: 10, right: 0, left: 30, bottom: 0 }} cursor="crosshair">
                            <Tooltip content={<CustomTooltip />}  offset={-65} animationDuration={100} />

                            <XAxis dataKey="name" stroke="white"/>
                            <YAxis type="number" domain={['dataMin - (dataMin / 2)', 'dataMax + (dataMax / 2)']} tick={{ fill: 'white' }} />
                            <Line
                                type="monotone"
                                dataKey="close"
                                dot={false}
                                stroke="#003366"
                                activeDot={{ r: 5 }}
                                strokeWidth={1}
                            />
                            <Line
                                type="monotone"
                                dataKey="close"
                                stroke="#f0f0f0"
                                activeDot={{ r: 5 }}
                                strokeWidth={1.7}
                                dot={false}
                                activeDot={false}
                                name="$"
                            />
                        </LineChart>
                    </ResponsiveContainer>

                    <div className="timeframe" style={{paddingBottom: "50px"}}>
                        <li className="timeframe-list" onClick={ () => handle1DayChange(symbol)}> 1D </li>
                        <li className="timeframe-list" onClick={ () => handle1WeekChange(symbol)}> 1W </li>
                        <li className="timeframe-list" onClick={ () => handle1MonthChange(symbol)}> 1M </li>
                        <li className="timeframe-list" onClick={ () => handle1YearChange(symbol)}> 1Y </li>
                    </div>
            
                    <div className={classes2.container}>
                        <GridContainer>
                            <GridItem xs={12} sm={5} md={5}>
                            <h2 className={classes2.title}>Transaction Form is Currently being Reworked...</h2>
                            <h5 className={classes2.description}>
                                You need more information? Check what other persons are saying
                                about our product. They are very happy with their purchase.
                            </h5>
                            <InfoArea
                                className={classes2.infoArea}
                                title="Find us at the office"
                                description={
                                <span>
                                    Bld Mihail Kogalniceanu, nr. 8,
                                    <br /> 7652 Bucharest,
                                    <br /> Romania
                                </span>
                                }
                                icon={PinDrop}
                            />
                            <InfoArea
                                className={classes2.infoArea}
                                title="Give us a ring"
                                description={
                                <span>
                                    Michael Jordan
                                    <br /> +40 762 321 762
                                    <br /> Mon - Fri, 8:00-22:00
                                </span>
                                }
                                icon={Phone}
                            />
                            </GridItem>
                            <TransactionForm />
                        </GridContainer>
                    </div>
                </div>

                
               
            </div>
    )
}

export default Rechart;