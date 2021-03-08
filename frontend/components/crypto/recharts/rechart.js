import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

import { fetchCurrentPrice, fetchCurrencyInfo, fetch1DayInfo} from '../../../util/coin_api_util';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "../../Grid/GridContainer.js";
import GridItem from "../../Grid/GridItem.js";
import Table from "../../Table/Table.js";
import Parallax from "../../../components/Parallax/Parallax.js";

import InfoArea from "../../../components/InfoArea/InfoArea.js";
import Card from "../../../components/advert/components/Card/Card.js";
import CardHeader from "../../../components/advert/components/Card/CardHeader.js";
import CardBody from "../../../components/advert/components/Card/CardBody.js";
import CardFooter from "../../../components/advert/components/Card/CardFooter.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";

import Button from "../../../components/button/Button.js";
import styles from "../../../../app/assets/jss/material-kit-pro-react/components/tableStyle.js";
import contactsStyle from "../../../../app/assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.js";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import Check from "@material-ui/icons/Check";

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles(contactsStyle);

const CustomTooltip = () => {

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

        return (
            <div className="custom-tooltip">
                <p className="tooltip-label">{`$ ${payload[0].value}`}</p>
                <p className="tooltip-time">{`${day} ${time}`}</p>
            </div>
        );
    }
    
}


const Rechart = ({ticker}) => {
    const history = useHistory();
    const classes = useStyles();
    const classes2 = useStyles2();

    const [symbol, setSymbol] = useState('');
    const [displayData, setDisplaydata] = useState([]);
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
    const setAndFormatDayData = (data) => {
        setData(data.Data.Data)

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

    if (ticker === '') return null;
    console.log('loading.. 2 ')
    return (
            <div className="linechart-news">
                 


                <div
                    className={classes2.contacts + " " + classes2.section}
                    style={{ backgroundImage: `${window.imageUrl.bannerShow}`, width: "100%" }}
                >
                    <ResponsiveContainer width="85%" height={400}>
                    <LineChart width={570} height={305} data={data} margin={{ top: 10, right: 0, left: 20, bottom: 0 }} cursor="crosshair">
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
                </ResponsiveContainer>

                <div className="timeframe">
                    <li className="timeframe-list" onClick={() => this.get1DayPrices(symbol)}> 1D </li>
                    <li className="timeframe-list" onClick={() => this.get1WeekPrices(symbol)}> 1W </li>
                    <li className="timeframe-list" onClick={() => this.get1MonthPrices(symbol)}> 1M </li>
                    <li className="timeframe-list" onClick={() => this.get1YearPrices(symbol)}> 1Y </li>
                </div>

                    <div className={classes2.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={5} md={5}>
                        <h2 className={classes2.title}>Get in Touch</h2>
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
                        <GridItem xs={12} sm={5} md={5} className={classes2.mlAuto}>
                        <Card className={classes2.card1}>
                            <form>
                            <CardHeader
                                contact
                                color="primary"
                                className={classes2.textCenter}
                            >
                                <h4 className={classes2.cardTitle}>Contact Us</h4>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                <GridItem xs={12} sm={6} md={6}>
                                    <CustomInput
                                    labelText="First Name"
                                    id="first"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6} md={6}>
                                    <CustomInput
                                    labelText="Last Name"
                                    id="last"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    />
                                </GridItem>
                                </GridContainer>
                                <CustomInput
                                labelText="Email Address"
                                id="email-address"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                />
                                <CustomInput
                                labelText="Your Message"
                                id="message"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputProps={{
                                    multiline: true,
                                    rows: 5
                                }}
                                />
                            </CardBody>
                            <CardFooter className={classes2.justifyContentBetween}>
                                <FormControlLabel
                                control={
                                    <Checkbox
                                    tabIndex={-1}
                                    onClick={() => handleToggle(1)}
                                    checkedIcon={
                                        <Check className={classes2.checkedIcon} />
                                    }
                                    icon={<Check className={classes2.uncheckedIcon} />}
                                    classes={{
                                        checked: classes2.checked,
                                        root: classes2.checkRoot
                                    }}
                                    />
                                }
                                classes={{ label: classes2.label }}
                                label="I'm not a robot"
                                />
                                <Button color="primary" className={classes2.pullRight}>
                                Send Message
                                </Button>
                            </CardFooter>
                            </form>
                        </Card>
                        </GridItem>
                    </GridContainer>
                    </div>
                </div>

                
               
            </div>
    )
}

export default Rechart;