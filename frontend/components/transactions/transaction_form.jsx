// import React from 'react';

// class TransactionForm extends React.Component {
//     constructor(props) {
//         super(props);

//         // let symbol = 'BTC';
//         // let name = 'Bitcoin';

//         this.state = {
//             symbol: 'BTC',
//             quantity: "Quantity",
//             price: ''
//         };

//         this.handleBuy = this.handleBuy.bind(this);
//         this.handleSell = this.handleSell.bind(this);
//         this.onChangeSymbol = this.onChangeSymbol.bind(this);
//         this.onChangeQuantity = this.onChangeQuantity.bind(this);
//         this.hasEnoughCash = this.hasEnoughCash.bind(this);
//         this.hasEnoughQuantity = this.hasEnoughQuantity.bind(this);
//         this.price = this.price.bind(this);
//         // this.currentPrice = this.currentPrice.bind(this);
//         this.updateType = this.updateType.bind(this);
//         this.update = this.update.bind(this);
//         // this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     update(e) {
//         // this.setState({ num_shares: e.target.value });
//         // this.updateCost(e.target.value);
//     }

//     updateType(order_type) {
//         // being buying / selling 
//         // this.setState({ order_type });
//     }
    
//     onChangeSymbol(event) {
//         this.setState({
//             symbol: event.taget.value
//         });
//     }
    
//     onChangeQuantity(event) {
//         this.setState({
//             quantity: event.target.value
//         });
//     }
    
//     price() {
//         let coinArr = Object.values(this.props.coinInfo);

//         coinArr.map((coinObj, i) => {
//             this.setState({
//                 price: coinObj.USD.PRICE
//             });
//         })
//     }

//     handleBuy() {
//         const {symbol, quantity, price} = this.state;

//         let {userId} = this.props; 

//         // Need to find PRICE FOOR SYMBOL WOOT WOOT MARCH 10, 6:04PM 
//         // WOOT WOOT CONTINUE FROM HERE 

//         console.log(price, ' this is the preprice')

//         if (isNaN(price)) {   // if price is a string ex. "$ 8,000.00", remove $ and ','
//             price = Number(price.slice(1).split(',').join(''));
//             console.log(price, "this is the price broski")
//         }

//         const purchaseData = {
//             user_id: userId,
//             symbol: symbol,
//             quantity: quantity,
//             price: price
//         };

//         // Display error if quantity is not a number or negative
//         if (isNaN(quantity) || Number(quantity) <= 0) {
//             alert('Please enter a valid quantity');

//         } else if (this.hasEnoughCash()) {                            // Validate that user cash balance is sufficient 
//             this.props.buyCoin(purchaseData);                       // Send POST (create new wallet transaction) to backend
//             alert(`${quantity} ${symbol} was added to your account!`);
//             this.props.toggleModal();                                   // close modal
//         } else {
//             alert('You do not have enough funding!');
//         }
//     }

//     hasEnoughCash() {
//         let { price, cashBalance } = this.props;
//         const quantity = Number(this.state.quantity);

//         if (isNaN(price)) {   // if price is a string ex. "$ 8,000.00", remove $ and ','
//             price = Number(price.slice(1).split(',').join(''));
//         }

//         // Compute total purchase value = price * quantity
//         const totalPurchaseValue = price * quantity;

//         // Check if user has enough cash to cover totalPurchaseValue
//         return (cashBalance >= totalPurchaseValue);
//     }


//     handleSell() {
//         const { symbol, quantity, price } = this.state;
//         let { userId } = this.props;

//         if (isNaN(price)) {   // if price is a string ex. "$ 8,000.00", remove $ and ','
//             price = Number(price.slice(1).split(',').join(''));
//         }
//         // debugger

//         const saleData = {
//             user_id: userId,
//             symbol: symbol,
//             quantity: Number(quantity) * -1.0,
//             price: price
//         };

//         if (isNaN(quantity) || Number(quantity) <= 0) {
//             alert('Please enter a valid quantity');
//             // debugger
//         } else if (this.hasEnoughQuantity()) {                            // Validate that user has enough crypto to sell
//             this.props.sellCurrency(saleData);                              // Send POST (create new wallet transaction) to backend
//             alert(`${quantity} ${symbol} was sold from your account!`);
//             this.props.toggleModal();                                       // close modal
//         } else {
//             alert('You do not have enough to sell!');
//         }
//     }

//     hasEnoughQuantity() {
//         const { symbol, portfolio } = this.props;
//         const quantity = Number(this.state.quantity);
//         // debugger

//         // check if user has enough quantity to sell
//         return Number(portfolio[symbol]) >= quantity;
//     }


//     render() {
//         // let {coin} = this.props
//         let obj = window.imageUrl;
//         let path = obj[this.state.symbol];

//         return (
  
//             <div className='widget-trade'>
//                     <div className='head-name'><img src={path} id='h-icon' /></div>
//                 <div className='trade-top'>
//                     <h3>
//                         <a className={this.state.order_type === 'buy' ? 'active' : ''} onClick={() => this.updateType('buy')}>Buy {`${this.state.symbol}`}</a>
//                         {/* {this.renderSellButton()} */}
//                     </h3>
//                 </div>
//                 <div className='trade-middle'>
//                     <input type="text" placeholder={this.state.quantity} minLength='1' onChange={this.onChangeQuantity} />
//                 <div>
//                         {/* {errors go here} */}
//                     </div>


//                     <div className='trade-crypto-selector'>
//                         <p>
//                             Buy
//                         </p>
//                         <div>
//                             <div>
//                                 <img src={path} />
//                             </div>
//                         </div>
//                     </div>

//                     <div className='modal-button'>
//                         <button className='button' onClick={this.handleBuy}>BUY</button>
//                         <button className='button' onClick={this.handleSell}>SELL</button>
//                     </div>
//                 </div>
//                 <div className='trade-bottom'> 
//                     {this.currentPrice}
//                 </div>
//             </div>
//     )};
// }

// export default TransactionForm;




///
import React from 'react';

class TransactionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            symbol: this.props.symbol,
            quantity: "Quantity",
            price: "0"
        };

        this.handleBuy = this.handleBuy.bind(this);
        this.handleSell = this.handleSell.bind(this);
        this.onChangeSymbol = this.onChangeSymbol.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.hasEnoughCash = this.hasEnoughCash.bind(this);
        this.hasEnoughQuantity = this.hasEnoughQuantity.bind(this);
    }

    componentDidMount() {
        // console.log(this.state.symbol)
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

        // Need to find PRICE FOOR SYMBOL WOOT WOOT MARCH 10, 6:04PM 
        // WOOT WOOT CONTINUE FROM HERE 

        // console.log(price, ' this is the pricee')

        if (isNaN(price) && price !== undefined) {   // if price is a string ex. "$ 8,000.00", remove $ and ','
        debugger
            this.setState({
                price: Number(price.slice(1).split(',').join(''))
            })

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
            this.props.buyCoin(purchaseData);                       // Send POST (create new wallet transaction) to backend
            alert(`${quantity} ${symbol} was added to your account!`);
            this.props.toggleModal();                                   // close modal
        } else {
            alert('You do not have enough funding!');
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
                    <div className='head-name'><img src={path} id='h-icon' /></div>
                <div className='trade-top'>
                    <h3>
                        <a className={this.state.order_type === 'buy' ? 'active' : ''} onClick={() => this.updateType('buy')}>Buy {`${this.state.symbol}`}</a>
                        {/* {this.renderSellButton()} */}
                    </h3>
                </div>
                <div className='trade-middle'>
                    <input type="text" placeholder={this.state.quantity} minLength='1' onChange={this.onChangeQuantity} />
                <div>
                        {/* {errors go here} */}
                    </div>


                    <div className='trade-crypto-selector'>
                        <p>
                            Buy
                        </p>
                        <div>
                            <div>
                                <img src={path} />
                            </div>
                        </div>
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




