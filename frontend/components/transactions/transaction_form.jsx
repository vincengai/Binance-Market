import React from 'react';

class TransactionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            units: ''
        };
        // this.handleClick = this.handleClick.bind(this);
        // this.update = this.update.bind(this);
    }


    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
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
                    {/* <div className='active' onClick={this.handleOrderClick("buy")}>Buy</div>
                    <div onClick={this.handleOrderClick("sell")}>Sell</div>
                    <div onClick={this.handleOrderClick("convert")}>Convert</div>  */}

                     <div>Sell</div>
                     <div> Buy </div>
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
                    <button type='button'>
                        hello{/* {transaction_type.slice(0, 1).toUpperCase().concat(transaction_type.slice(1))} {this.state.name} */}
                    </button>
                </div>
                <div className='trade-bottom'>
                </div>
            </div>
    )};
}

export default TransactionForm;




