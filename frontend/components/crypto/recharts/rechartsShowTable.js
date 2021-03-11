import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

import { fetchCoinInfo } from "../../../util/coin_api_util";


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#F0B90B',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    backgroundColor: '#E0E0E0'
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),

];

const useStyles = makeStyles({
  table: {
    minWidth: '100%'
  },
  row: {
      lineHeight: '1rem !important'
  },
  body: {
      lineHeight: '1rem !important'
  },
  text: {
    fontSize: '16px'
  },
  textBody: {
    fontSize: '17px'
  }
});

export default function CustomizedTables() {
    const [price, setPrice] = useState('');
    const [dayChange, setDayChange] = useState('');
    const [dayPercentageChange, setDayPercentageChange] = useState('');
    const [volume, setVolumeChange] = useState('');
    
    const classes = useStyles();
    const history = useHistory();

  
  useEffect( () => {
    const fetchCoinDataAPI = async () => {
        let coin = history.location.pathname.slice(7);
        const initialCoinData = await fetchCoinInfo(coin);      

        setAndFormatPrice(initialCoinData);
        setAndFormat24hChange(initialCoinData);
        setAndFormat24hPercentChange(initialCoinData);
        setAndFormatVolume(initialCoinData);
    };

    fetchCoinDataAPI();
  }, [])
  

  const setAndFormatPrice = (data) => {
    let coin = history.location.pathname.slice(7);
    let newData = data.DISPLAY[coin].USD.PRICE

    setPrice(newData)
  }

  const setAndFormat24hChange = (data) => {
    let coin = history.location.pathname.slice(7);
    let newData = data.RAW[coin].USD.CHANGEDAY;
    
    let formattedNumber = newData.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
    })      

    setDayChange(formattedNumber);
  }

  const setAndFormat24hPercentChange = (data) => {
    let coin = history.location.pathname.slice(7);
    let newData = data.RAW[coin].USD.CHANGEPCTDAY

    let formattedNumber = newData.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
    })      

    setDayPercentageChange(formattedNumber)
  }

  const setAndFormatVolume = (data) => {
    let coin = history.location.pathname.slice(7);
    let newData = data.DISPLAY[coin].USD.VOLUMEDAY

    setVolumeChange(newData)
  }

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
              {data} ${" "}
          </div>
        );
      } else {
        return (
          <div className="positivepct">
            {"  "}+ {data} ${" "}
          </div>
        );
      }
  }

  return (
    <TableContainer component={Paper} style={{zIndex: 2, margin: 'auto', marginBottom: '20px', width: '62%'}}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead className={classes.row}>
          <TableRow>
            <StyledTableCell className={classes.text}>Price</StyledTableCell>
            <StyledTableCell className={classes.text}>24h Change</StyledTableCell>
            <StyledTableCell className={classes.text}>% Change</StyledTableCell>
            <StyledTableCell className={classes.text}>Volume</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.row}>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" className={classes.textBody}>
                {price}
              </StyledTableCell>
              <StyledTableCell className={classes.textBody}>{formatColorDayData(dayChange)}</StyledTableCell>
              <StyledTableCell className={classes.textBody}>{formatColorPctData(dayPercentageChange)}</StyledTableCell>
              <StyledTableCell className={classes.textBody}>{volume}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}