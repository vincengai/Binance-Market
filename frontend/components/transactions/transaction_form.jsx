import React from 'react';

class TransactionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            symbol: this.props.symbol,
            quantity: "Quantity",
            price: 0
        };

        this.handleBuy = this.handleBuy.bind(this);
        this.handleSell = this.handleSell.bind(this);
        this.onChangeSymbol = this.onChangeSymbol.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.hasEnoughCash = this.hasEnoughCash.bind(this);
        this.hasEnoughQuantity = this.hasEnoughQuantity.bind(this);
    }

    componentDidMount() {
        this.props.fetchCoinInfo(this.state.symbol).then( (result) => {
            let display = result.data.DISPLAY
            let coin = display[this.state.symbol]

            this.setState({
                price:  coin.USD.PRICE
            })
        })
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

    // price() {
    //     let coinArr = Object.values(this.props.coinInfo);

    //     coinArr.map((coinObj, i) => {
    //         this.setState({
    //             price: coinObj.USD.PRICE
    //         });
    //     })
    // }

    handleBuy() {
        const {symbol, quantity, price} = this.state;

        let {userId} = this.props; 
        let intPrice = price; 

        if (isNaN(price) && price !== undefined) {   // if price is a string ex. "$ 8,000.00", remove $ and ','
            intPrice = Number(price.slice(1).split(',').join(''))

            this.setState({
                price: intPrice
        })}

        const purchaseData = {
            user_id: userId,
            symbol: symbol,
            quantity: quantity,
            price: intPrice      
        };
    
            // Display error if quantity is not a number or negative
        if (isNaN(quantity) || Number(quantity) <= 0) {
            alert('Please enter a valid quantity');

        } else if (this.hasEnoughCash(intPrice)) {                            // Validate that user cash balance is sufficient 
            this.props.buyCoin(purchaseData);                       // Send POST (create new wallet transaction) to backend
            alert(`${quantity} ${symbol} was added to your account!`);
            this.props.closeModal();                                  
        } else if (!userId) {
            alert('You must be signed in to trade');
            this.props.closeModal();                                  
            this.props.history.push('/login');

        } else {
            alert('You do not have enough funding!');
        }
    }
        

    hasEnoughCash(intPrice) {
        let { cashBalance } = this.props;
        const quantity = Number(this.state.quantity);

        // if (isNaN(intPrice)) {   // if price is a string ex. "$ 8,000.00", remove $ and ','
        //     intPrice = Number(intPrice.slice(1).split(',').join(''));
        // }

        // Compute total purchase value = price * quantity
        const totalPurchaseValue = intPrice * quantity;

        // Check if user has enough cash to cover totalPurchaseValue
        return (cashBalance >= totalPurchaseValue);
    }


    handleSell() {
        const { symbol, quantity, price } = this.state;
        let { userId } = this.props;

        if (isNaN(price) && price !== undefined) {   // if price is a string ex. "$ 8,000.00", remove $ and ','
            this.setState({
                price: Number(price.slice(1).split(',').join(''))
            })
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
            this.props.sellCoin(saleData);                              // Send POST (create new wallet transaction) to backend
            alert(`${quantity} ${symbol} was sold from your account!`);
            this.props.closeModal();     
        } else if (!userId) {
            alert('Please sign in first')
        } else {
            alert('You do not have enough to sell!');
        }
    }

    hasEnoughQuantity() {
        const { portfolio } = this.props;
        const { symbol } = this.state; 
        const quantity = Number(this.state.quantity);
        // debugger

        // check if user has enough quantity to sell
        return Number(portfolio[symbol]) >= quantity;
    }


    render() {
        // let {coin} = this.props
        let obj = window.imageUrl;
        let path = obj[this.state.symbol];

        return (

            <div className='widget-trade'>
                <div className='trade-top'>
                    <div>
                        <a className={this.state.order_type === 'buy' ? 'active' : ''} onClick={() => this.updateType('buy')}>Trade {`${this.state.symbol}`}</a>
                    </div>
                </div>
                <div className='trade-middle'>
                    <input type="number" placeholder={this.state.quantity} minLength='1' maxLength='6' onChange={this.onChangeQuantity} />
                <div>
                    </div>

                    <div className='modal-button'>
                        <button className='button' onClick={this.handleBuy}>BUY</button>
                        <button className='button' onClick={this.handleSell}>SELL</button>
                    </div>
                </div>
                <div className='trade-bottom'> 
                    {this.currentPrice}
                </div>
            </div>
    )};
}

export default TransactionForm;




