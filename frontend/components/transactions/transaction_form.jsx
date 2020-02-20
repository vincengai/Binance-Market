import React from 'react';

class TransactionForm extends React.Component {
    constructor(props) {
        super(props);

    };

    this.handleClick = this.handleClick.bind(this);

    render() {
        return (
            <div className="widget-trade"> 
                <div> Sell </div>
                <div> Buy</div>
                {/* <div onClick={this.props.handleClick("sell")}> Sell </div>
                <div onClick={this.props.handleClick("buy")}> Buy</div> */}
            </div>
        )

        // let { transaction_type } = this.state;
        // let imageSource = window[this.state.symbol];


        // return (
        //     <div className='widget-trade'>
        //         <div className='trade-top'>
        //             <div className='active' onClick={this.handleOrderClick("buy")}>Buy</div>
        //             <div onClick={this.props.sellCoin()}>Sell</div>
        //             <div onClick={this.props.buyCoin()}>Buy</div>
        //         </div>


        //         <div className='trade-middle'>
        //             <input type="number" placeholder='0 units' minLength='1' onChange={this.update('units')
        //                 // onKeyPress={evt => evt.key === 'e' && evt.preventDefault()}
        //             } />
        //             <div>
        //                 {/* {errors go here} */}
        //             </div>
        //             <div className='trade-crypto-selector' onClick={this.openSelectModal}>
        //                 <p>
        //                     Buy
        //                 </p>
        //                 <div>
        //                     <div>
        //                         <img src={imageSource} />
        //                     </div>
        //                     <p>
        //                         {translateName[this.state.name]}
        //                     </p>
        //                 </div>
        //             </div>
        //             <button type='button' onClick={this.handleClick}>
        //                 {transaction_type.slice(0, 1).toUpperCase().concat(transaction_type.slice(1))} {this.state.name}
        //             </button>
        //         </div>
        //         <div className='trade-bottom'>
        //         </div>
        //     </div>
        // );
    }
}



export default TransactionForm;

