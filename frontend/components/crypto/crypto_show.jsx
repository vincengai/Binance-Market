import React from 'react';
import RechartContainer from '../chart/rechart_container'

class CryptoShow extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        
        this.price = this.price.bind(this);
        this.volume = this.volume.bind(this);
        this.marketCap = this.marketCap.bind(this);
        this.supply = this.supply.bind(this);
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

    supply() {
        let coinArr = Object.values(this.props.coinInfo);

        return (
            coinArr.map((coinObj, i) => {
                return (
                    <div key={i}> {coinObj.USD.SUPPLY} </div>
                )
            })
        )
    }

    volume() {
        let coinArr = Object.values(this.props.coinInfo);
        
        return (
            coinArr.map((coinObj, i) => {
                return (
                    <div key={i}>{coinObj.USD.TOPTIERVOLUME24HOUR} ({coinObj.USD.TOPTIERVOLUME24HOURTO})</div>
                )
            })
        )
    }
    marketCap() {
        let coinArr = Object.values(this.props.coinInfo);

        return (
            coinArr.map((coinObj, i) => {
                return (
                    <div key={i}>{coinObj.USD.MKTCAP}</div>
                )
            })
        )
    }

    openPrice() {
        let coinArr = Object.values(this.props.coinInfo);

        return (
            coinArr.map((coinObj, i) => {
                return (
                    <div key={i}>{coinObj.USD.OPENDAY}</div>
                )
            })
        )
    }

    
    render() {
        if (this.props.coinInfo === undefined) return null;
        let { coin } = this.props;
        let obj = window.imageUrl;
        let path = obj[coin];
        
        return (    
            <div className='show-page'>
                <div className="show-header">
                    <div className='head-name'><img src={path} id='h-icon'/>{this.props.coin}</div>
                    <div>{this.price()}</div>
                </div>

                <div className="table-container">
                    <div className="flex-table-header">
                        <div className="flex-row"> Market Cap
                            <div id='show-text'>
                                {this.marketCap()}
                            </div>
                        </div>
                        
                        <div className="flex-row">24h Vol(Global)
                            <div id='show-text'>
                                {this.volume()}
                            </div>
                        </div>

                        <div className="flex-row">Circulating Supply
                            <div id='show-text'>
                                {this.supply()}
                            </div>
                        </div>
                        <div className="flex-row">Issue Date
                            <div id='show-text'>
                                2008-10-31
                            </div>
                        </div>

                        <div className="flex-row">Issue Price
                            <div id='show-text'>
                                {this.openPrice()}
                            </div>
                        </div>
                    </div> 
                </div>

                <div className='FAKE-graph'>
                    
                </div>
            </div>
        )
    }


}
export default CryptoShow;