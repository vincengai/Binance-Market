import React, {useState, useEffect} from 'react';
import {fetchCoinInfo} from '../../util/coin_api_util';
import {buyCoin, sellCoin} from '../../util/transaction_api_util';
import { useHistory} from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
/////////
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Card from "../advert/components/Card/Card.js";
import CardHeader from "../advert/components/Card/CardHeader.js";
import CardBody from "../advert/components/Card/CardBody.js";
import CardFooter from "../advert/components/Card/CardFooter.js";
import CustomInput from "../CustomInput/CustomInput.js";
import Button from "../button/Button.js";

import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

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
//   cosole.log(typeof curValue)

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
    const [quantity, setQuantity] = useState('Quantity');
    const [symbol, setSymbol] = useState('');
    const [price, setPrice] = useState(0);
    const [values, setValues] = React.useState({
        numberformat: '100',
    });

    const classes2 = useStyles2();
    const history = useHistory();
    const classes = useStyles();

  const handleChange = (event) => {
    
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

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

    const setAndFormatPrice = (data) => {
        let coin = history.location.pathname.slice(7);
        let newData = data.DISPLAY[coin].USD.PRICE

        setPrice(newData)
    }

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

                {/* This is the input for Quantity. The onChange should update the state of quantity which should relfec in the change of  */}
                {/* estimated amount value */}
                <CardBody>
                    <GridContainer>
                    <GridItem xs={12} sm={6} md={6}>
                        <CustomInput
                        labelText={quantity}
                        onChange={handleChange}
                        id="quantity"
                        type="number"
                        minLength='1' maxLength='6'
                        />
                    </GridItem>
                    
                    {/* Below will showcase Estimated Amount that will change everytime Quantity changes */}
                    <div className={classes.root}>
                        <TextField
                            label="Est. Amount Total"
                            value={values.numberformat} // set this to a state that'll update wheenver quantity changes this will change
                            name="numberformat"
                            // disabled id="standard-disabled"
                            InputProps={{ 
                            inputComponent: NumberFormatCustom,
                            }}
                        />
                        </div>
                    </GridContainer>

                </CardBody>
                <CardFooter className={classes2.justifyContentBetween}>
                    <Button color="primary" className={classes2.pullRight} style={{width: '40%', backgroundColor:'#003366'}}>
                    Buy
                    </Button>
                    <Button color="primary" className={classes2.pullRight} style={{width: '40%', backgroundColor:'#003366'}}>
                    Sell
                    </Button>
                </CardFooter>
            </Card>
        </GridItem> 
    )
}

