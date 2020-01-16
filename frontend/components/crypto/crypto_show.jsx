import React from 'react';
import { LineChart, Line } from 'recharts';


// const DATA = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, ...];

class CryptoShow extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        
        this.price = this.price.bind(this);
    };
    
    
    componentDidMount() {
        const symb = this.props.match.params.symbol
        // console.log('componentDidMounttttt')
        this.props.fetchCoinInfo(symb)
    };

    price() {
        let coinArr = Object.values(this.props.coinInfo);

        return (
            coinArr.map( (coinObj, i) => {
                return (
                    <div key={i}> {coinObj.USD.PRICE} </div>
                )
            })
        )
    }

    render() {
        if (this.props.coinInfo === undefined) return null;
        // console.log('RENDER SHOW')

        return (
            <div className="table-container">
                {this.price()}
            </div>
        )
    };
}

export default CryptoShow;