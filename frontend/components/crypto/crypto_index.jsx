import React from 'react'

class CryptoIndex extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        this.coinPrice = this.coinPrice.bind(this);
    };

    componentDidMount() {
        // debugger
        this.props.fetchCoinsInfo();
    }

    coinPrice() {
        let coinsArr = Object.values(this.props.coins);

        let priceArray = coinsArr.map( (coinObj, i) => {
            return coinObj.USD.PRICE;
        });
            
        return priceArray;
    }
   
    render() {
        // const { symbols } = this.props;
        // debugger
        if (this.props.coins === undefined) return null;

        return (
            
            <table className="index-currencies">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Last Price</th>
                        <th scope="col">24h Change</th>
                        <th scope="col">Markets</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        this.coinPrice()
                    }

                </tbody>
            </table>
        )
    }
}

export default CryptoIndex; 