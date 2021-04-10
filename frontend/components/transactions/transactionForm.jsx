import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory} from "react-router-dom";

import {fetchCoinInfo} from '../../util/coin_api_util';
import {buyCoin, sellCoin} from '../../actions/transaction_actions';

import { makeStyles } from "@material-ui/core/styles";
/////////
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Card from "../advert/components/Card/Card.js";
import CardHeader from "../advert/components/Card/CardHeader.js";
import CardBody from "../advert/components/Card/CardBody.js";
import CardFooter from "../advert/components/Card/CardFooter.js";
import Button from "../button/Button.js";

import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';

import contactsStyle from "../../../app/assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.js";
const useStyles2 = makeStyles(contactsStyle);

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;
    console.log(inputRef, 'this is input ref. i believe this should be console loggin per input')
  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;
  let curValue = props.value;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function TransactionForm() {
    const [quantity, setQuantity] = useState(0);
    const [symbol, setSymbol] = useState('');
    const [price, setPrice] = useState(0);
    const [rawPrice, setRawPrice] = useState(0);
    const [amountTotal, setAmountTotal] = useState(0);
    // const [values, setValues] = useState({ numberformat: '100'})
    const [values, setValues] = React.useState({
        numberformat: '100',
    });

    const dispatch = useDispatch();
    const classes2 = useStyles2();
    const history = useHistory();
    const classes = useStyles();

   
    

    const userId = useSelector( (state) => {
      return state.session.id
    });
    
    const cash_balance = useSelector( (state) => {
      // if (loggedIn) {
        return state.entities.users[state.session.id].cash_balance
      // } else {
      //   return null;
      // }
    });
    
    const loggedIn = useSelector( (state) => {
      if (state.entities.users) {
        return true
      } else {
        return false
      }
    })

    useEffect( () => {
        let coin = history.location.pathname.slice(7);
        
        const fetchCoinDataAPI = async () => {
            let coin = history.location.pathname.slice(7);
            const initialCoinData = await fetchCoinInfo(coin);  

            setSymbol(coin);
            setAndFormatPrice(initialCoinData);
    };

    fetchCoinDataAPI();
    }, [])


  const handleBuy = () => {
    const buyData = {
      user_id: userId,
      symbol: symbol,
      quantity: quantity ,
      price: rawPrice
    };

    if (loggedIn) {
      if (hasEnoughCash()) {
        dispatch(buyCoin(buyData));
        alert(`${quantity} ${symbol} was added to your account!`);
        history.push('/dashboard')
      } else if (!userId) {
        alert('You must be signed in to trade');
        history.push('/login');
    } else {
        alert('You do not have enough funding!');
    }}
  }

  const handleSell = () => {
    const sellData = {
      user_id: userId,
      symbol: symbol,
      quantity: quantity * -1.0 ,
      price: rawPrice
    }
    if (loggedIn) {
      dispatch(sellCoin(sellData));
      alert(`${quantity} ${symbol} was sold from your account!`);
      history.push('/dashboard');
    } else if (!userId) {
      alert('You must be signed in to trade');
      history.push('/login') 
    } else {
        alert('You do not have enough to sell!');
        history.push('/dashboard');
    }
  }
  
  const hasEnoughCash = () => {
    return (parseFloat(amountTotal) <= cash_balance)
  }

  const setAndFormatPrice = (data) => {
      let coin = history.location.pathname.slice(7);
      let newData = data.DISPLAY[coin].USD.PRICE
      let rawData = data.RAW[coin].USD.PRICE
      setPrice(newData)
      setRawPrice(rawData)
  }



    const userCashBalance = () => {
      if (loggedIn) {
        return (
          <div className={classes.root}>
            <TextField
                label="Current Cash Balance"
                value={cash_balance.toFixed(2)} 
                name="numberformat"
                disabled id="standard-disabled"
                InputProps={{ 
                inputComponent: NumberFormatCustom,
                }}
            /> 
          </div>
        )
      }
    }

    const update = (field) => {
        return (e) => {
            const val = e.currentTarget.value;
            var total_amount_int = parseFloat(
              val.replace(/,/g, ".")
            ).toFixed(5);

            let tempQuantity = total_amount_int;
            let tempTotal = tempQuantity * rawPrice;
            let formatTempTotal = tempTotal.toFixed(2);

            switch (field) {
                case 'quantity':
                    setQuantity(val);
                    setAmountTotal(formatTempTotal);
                    break;
                default:
                    return;
            }
        };
	};

    return(    
        <GridItem xs={12} sm={5} md={5} className={classes2.mlAuto} style={{zIndex: 2}}>
            <Card className={classes2.card1}>
                <CardHeader
                    contact
                    color="primary"
                    className={classes2.textCenter}
                    style={{background: "#F0B90B"}}
                >
                    <h4 className={classes2.cardTitle} style={{textDecoration: "underline"}}> Limit Order </h4>
                </CardHeader>

                <CardBody>
                    <GridContainer>
                    <GridItem xs={12} sm={6} md={6}>
                        <TextField
                        label="Quantity"
                        onChange={update('quantity')}
                        value={quantity}
                        id="quantity"
                        type="number"
                        minLength='1' maxLength='6'
                        />
                    </GridItem>
                    {/*  */}

                    <div className={classes.root}>
                        <TextField
                            label="Est. Amount Total"
                            value={amountTotal} 
                            name="numberformat"
                            disabled id="standard-disabled"
                            InputProps={{ 
                            inputComponent: NumberFormatCustom,
                            }}
                        /> 
                    </div>

                    {userCashBalance()}
                    </GridContainer>

                </CardBody>
                <CardFooter className={classes2.justifyContentBetween}>
                    <Button color="primary" onClick={handleBuy} className={classes2.pullRight} style={{width: '40%', backgroundColor:'#003366'}}>
                    Buy
                    </Button>
                    <Button color="primary" onClick={handleSell} className={classes2.pullRight} style={{width: '40%', backgroundColor:'#003366'}}>
                    Sell
                    </Button>
                </CardFooter>
            </Card>
        </GridItem> 
    )
}

