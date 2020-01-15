import React from 'react'

class CryptoIndex extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        this.currentPrice = this.currentPrice.bind(this);
        this.day24Change = this.day24Change.bind(this);
    };

    componentDidMount() {
        // debugger
        this.props.fetchCoinsInfo();
    }
    
    // coin24hChange() {
    //     let coinsArr = Object.values(this.props.coins);
        
    //     let change24hArray = coinsArr.map((coinObj, i) => {
    //         return coinObj.USD.CHANGE24HOUR;
    //     });

    //     return change24hArray;
    // }

    currentPrice() {
        let coinsArr = Object.values(this.props.coins);
        return (
            coinsArr.map( (coinObj, i) => {
                return (
                        <div key={i}>
                            <div>{coinObj.USD.PRICE} </div>
                            {/* <div>{coinObj.USD.CHANGEPCTHOUR} </div> */}
                        </div>
                )
            })
        )
    }
   
    day24Change() {
        let coinsArr = Object.values(this.props.coins);
        return (
            coinsArr.map((coinObj, i) => {
                return (
                    <div key={i}>
                        <div>{coinObj.USD.CHANGEPCTHOUR} </div>
                    </div>
                )
            })
        )
    }
    
    render() {
        // const { symbols } = this.props;
        // debugger
        if (this.props.coins === undefined) return null;

        return (
            <div className="table-container">
                <div className="flex-table-header" role="rowgroup">
                    <div className="flex-row-first" role="columnheader">Name</div>
                    <div className="flex-row" role="columnheader">Last Price</div>
                    <div className="flex-row" role="columnheader">24h Change</div>
                    <div className="flex-row" role="columnheader">Markets</div>
                </div> 

                <div className='table-column' >
                    <div className="flex-table-name">
                        <div>BTC</div>
                        <div>ETH</div>
                        <div>BCH</div>
                        <div>BNB</div>
                        <div>LTC</div>
                        <div>TRX</div>
                        <div>XRP</div>
                        <div>XLM</div>
                        <div>DASH</div>
                        <div>ONT</div>
                        <div>NEO</div>
                    </div> 

                    <div className="flex-table-price"> 
                        {this.currentPrice()} 
                    </div>

                    <div className="flex-table-24hChange">
                        {this.day24Change()}
                    </div>

                    <div className="flex-table-markets">
                        ERRO
                    </div>
                </div>

            </div>
        
        )
    }
}

export default CryptoIndex; 
