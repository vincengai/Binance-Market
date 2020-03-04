import React from 'react';

class TransactionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            units: '',
            order_type: 'buy',
            price: '0.00',
            name: name,
            submitted: ''
        };

        this.currentPrice = this.currentPrice.bind(this);
        this.updateType = this.updateType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(e) {
        this.setState({ num_shares: e.target.value });
        this.updateCost(e.target.value);
    }

    updateType(order_type) {
        // being buying / selling 
        this.setState({ order_type });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });

        let { coin, num_shares, order_type, currPrice } = this.state;

        let transaction = {
            coin,
            num_shares: parseInt(num_shares),
            order_type,
            price: currPrice
        };

        this.props.createTransaction(transaction)
            .fail(() => this.setState({ submitted: '' }));
    }


    updateCost(num_shares) {
        if (num_shares === '') {
            num_shares = '0';
            this.setState({ cost: '0.00' });
        } else {
            let cost = Math.round((parseFloat(num_shares) * parseFloat(this.state.currPrice)) * 100) / 100;
            this.setState({ cost });
        }
    }


    currentPrice() {
        let coinArr = Object.values(this.props.coinInfo);

        return (
            coinArr.map((coinObj, i) => {
                return (
                    <div key={i}> {coinObj.USD.PRICE} </div>
                )
            })
        )
    }

    
    
    
    
    
    render() {
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
                        <a className={this.state.order_type === 'buy' ? 'active' : ''} onClick={() => this.updateType('buy')}>Buy {`${coin.ticker}`}</a>
                        {this.renderSellButton()}
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




