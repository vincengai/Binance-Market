import React from 'react';

class TransactionForm extends React.Component {
    constructor(props) {
        super(props);

        // let symbol = 'BTC';
        // let name = 'Bitcoin';

        this.state = {
            symbol: this.props.coin,
            quantity: "Quantity",
            price: ''
        };

        this.handleBuy = this.handleBuy.bind(this);
        this.handleSell = this.handleSell.bind(this);
        this.onChangeSymbol = this.onChangeSymbol.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.hasEnoughCash = this.hasEnoughCash.bind(this);
        this.hasEnoughQuantity = this.hasEnoughQuantity.bind(this);
        this.price = this.price.bind(this);
        // this.currentPrice = this.currentPrice.bind(this);
        this.updateType = this.updateType.bind(this);
        this.update = this.update.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(e) {
        // this.setState({ num_shares: e.target.value });
        // this.updateCost(e.target.value);
    }

    updateType(order_type) {
        // being buying / selling 
        // this.setState({ order_type });
    }
    
    onChangeSymbol(event) {
        this.setState({
            symbol: event.taget.value
        });
    }
    
    onChangeQuantity(event) {
        this.setState({
            quantity: event.target.value
        });
    }
    
    price() {
        let coinArr = Object.values(this.props.coinInfo);

        coinArr.map((coinObj, i) => {
            this.setState({
                price: coinObj.USD.PRICE
            });
        })
    }

    handleBuy() {
        const {symbol, quantity, price} = this.state;

        let {userId} = this.props; 

        // Need to find PRICE FOOR SYMBOL WOOT WOOT MARCH 10, 6:04PM 
        // WOOT WOOT CONTINUE FROM HERE 

        if (isNaN(price)) {   // if price is a string ex. "$ 8,000.00", remove $ and ','
            price = Number(price.slice(1).split(',').join(''));
        }

        const purchaseData = {
            user_id: userId,
            symbol: symbol,
            quantity: quantity,
            price: price
        };

        // Display error if quantity is not a number or negative
        if (isNaN(quantity) || Number(quantity) <= 0) {
            alert('Please enter a valid quantity');

        } else if (this.hasEnoughCash()) {                            // Validate that user cash balance is sufficient 
            this.props.buyCurrency(purchaseData);                       // Send POST (create new wallet transaction) to backend
            alert(`${quantity} ${symbol} was added to your account!`);
            this.props.toggleModal();                                   // close modal
        } else {
            alert('You do not have enough buying power!');
        }
    }

    hasEnoughCash() {
        let { price, cashBalance } = this.props;
        const quantity = Number(this.state.quantity);

        if (isNaN(price)) {   // if price is a string ex. "$ 8,000.00", remove $ and ','
            price = Number(price.slice(1).split(',').join(''));
        }

        // Compute total purchase value = price * quantity
        const totalPurchaseValue = price * quantity;
        // debugger

        // Check if user has enough cash to cover totalPurchaseValue
        return (cashBalance >= totalPurchaseValue);
    }


    handleSell() {
        const { symbol, quantity, price } = this.state;
        let { userId } = this.props;

        if (isNaN(price)) {   // if price is a string ex. "$ 8,000.00", remove $ and ','
            price = Number(price.slice(1).split(',').join(''));
        }
        // debugger

        const saleData = {
            user_id: userId,
            symbol: symbol,
            quantity: Number(quantity) * -1.0,
            price: price
        };

        if (isNaN(quantity) || Number(quantity) <= 0) {
            alert('Please enter a valid quantity');
            // debugger
        } else if (this.hasEnoughQuantity()) {                            // Validate that user has enough crypto to sell
            this.props.sellCurrency(saleData);                              // Send POST (create new wallet transaction) to backend
            alert(`${quantity} ${symbol} was sold from your account!`);
            this.props.toggleModal();                                       // close modal
        } else {
            alert('You do not have enough to sell!');
        }
    }

    hasEnoughQuantity() {
        const { symbol, portfolio } = this.props;
        const quantity = Number(this.state.quantity);
        // debugger

        // check if user has enough quantity to sell
        return Number(portfolio[symbol]) >= quantity;
    }


    render() {
        let coin = this.props.match.params.symbol

        return (
            // <div className="trade-widget">
            //     <div className="trade-top"> 
            //         <div> Sell </div>
            //         <div> Buy </div>
            //     </div>

            //     <div className="trade-middle">
            //         <input type="number" placeholder='0 units' minLength='1' onChange={this.update('units')} />
            //     </div> 

            // </div>        

            <div className='widget-trade'>
                <div className='trade-top'>
                    <h3>
                        <a className={this.state.order_type === 'buy' ? 'active' : ''} onClick={() => this.updateType('buy')}>Buy {`${coin}`}</a>
                        {/* {this.renderSellButton()} */}
                    </h3>
                </div>
                <div className='trade-middle'>
                    <input type="number" placeholder='0 units' minLength='1' onChange={this.update('units')} />
                    <div>
                        {/* {errors go here} */}
                    </div>


                    <div className='trade-crypto-selector'>
                        <p>
                            Buy
                        </p>
                        <div>
                            <div>
                                {/* <img src={imageSource} /> */}
                            </div>
                        </div>
                    </div>

                    <div className='button'>
                        hello{/* {transaction_type.slice(0, 1).toUpperCase().concat(transaction_type.slice(1))} {this.state.name} */}
                    </div>
                </div>
                <div className='trade-bottom'> 
                    {this.currentPrice}
                </div>
            </div>
    )};
}

export default TransactionForm;




