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
// import Person from "@material-ui/icons/Person";
// import Edit from "@material-ui/icons/Edit";
// import Close from "@material-ui/icons/Close";
// import Check from "@material-ui/icons/Check";

// core components
// import GridContainer from "../Grid/GridContainer.js";
// import GridItem from "../Grid/GridItem.js";
// import Table from "../Table/Table.js";

// import Button from "../../components/button/Button.js";
import styles from "../../../app/assets/jss/material-kit-pro-react/components/tableStyle.js";



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
export default CryptoShow;
