import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class CryptoIndex extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        this.currentPrice = this.currentPrice.bind(this);
        this.day24Change = this.day24Change.bind(this);
        this.directShow = this.directShow.bind(this);

        // this.interval = false; 
    };

    componentDidMount() {
        this.props.fetchCoinsInfo();

        // TRIED TO SET INTERVAL, BUT DOESNT WORK . NANI TF 
        // this.interval = window.setInterval( () => this.currentPrice(), 1000);
    }
    
    // componentWillUnmount() {
    //     if (this.interval) window.clearInterval(this.interval);
    // }

    currentPrice() {
        let coinsArr = Object.values(this.props.coins);
        return (
            coinsArr.map( (coinObj, i) => {
                return (
                        <div key={i}>{coinObj.USD.PRICE} </div>
                )
            })
        )
    }
   
    day24Change() {
        let coinsArr = Object.values(this.props.coins);
        return (
            coinsArr.map((coinObj, i) => {
                if ( Math.sign(coinObj.USD.CHANGEPCTHOUR) === -1 ) {
                    return (
                            <div className="negativepct" key={i}>{coinObj.USD.CHANGEPCTHOUR}% </div>
                    )
                } else {
                    return (
                        <div className="positivepct" key={i}> {coinObj.USD.CHANGEPCTHOUR}% </div>
                    )
                }
            })
        )
    }

    directShow(symbol) {
        this.props.history.push(`/coins/${symbol}`)
    }

    render() {
        if (this.props.coins === undefined) return null;

        return (
            <div className="table-container">
                <div className="flex-table-header">
                    <div className="flex-row-first">Name</div>
                    <div className="flex-row">Last Price</div>
                    <div className="flex-row">24h Change</div>
                    <div className="flex-row">Markets</div>
                </div> 


                <div className='table-column'>
                    <div className="flex-table-name">
                        <div id='btc-div'><img src={window.imageUrl.BTC} id='c-icon' /><Link to="/coins/BTC" className="flex-name">BTC</Link></div>
                        <div id='btc-div'><img src={window.imageUrl.ETH} id='c-icon3' /><Link to="/coins/ETH" className="flex-name">ETH</Link></div>
                        <div id='btc-div'><img src={window.imageUrl.BCH} id='c-icon3'/><Link to="/coins/BCH" className="flex-name">BCH</Link></div>
                        <div id='btc-div'><img src={window.imageUrl.BNB} id='c-icon2' /><Link to="/coins/BNB" className="flex-name">BNB</Link></div>
                        <div id='btc-div'><img src={window.imageUrl.LTC} id='c-icon3'/><Link to="/coins/LTC" className="flex-name">LTC</Link></div>
                        <div id='btc-div'><img src={window.imageUrl.TRX} id='c-icon3'/><Link to="/coins/TRX" className="flex-name">TRX</Link></div>
                        <div id='btc-div'><img src={window.imageUrl.XRP} id='c-icon3'/><Link to="/coins/XRP" className="flex-name">XRP</Link></div>
                        <div id='btc-div'><img src={window.imageUrl.XLM} id='c-icon3'/><Link to="/coins/XLM" className="flex-name">XLM</Link></div>
                        <div id='btc-div'><img src={window.imageUrl.DASH} id='c-icon3'/><Link to="/coins/DASH" className="flex-name">DASH</Link></div>
                        <div id='btc-div'><img src={window.imageUrl.ONT} id='c-icon3'/><Link to="/coins/ONT" className="flex-name">ONT</Link></div>
                        <div id='btc-div'><img src={window.imageUrl.NEO} id='c-icon3'/><Link to="/coins/NEO" className="flex-name">NEO</Link></div>
                    </div> 

                    <div className="flex-table-price"> 
                            {this.currentPrice()} 
                    </div>

                    <div className="flex-table-24hChange">
                            {this.day24Change()}
                    </div>

                    <div className="flex-table-markets">
                        <div><img src={window.imageUrl.graphA} className='c-graph' /></div>
                        <div><img src={window.imageUrl.graphB} className='c-graph' /></div>
                        <div><img src={window.imageUrl.graphC} className='c-graph' /></div>
                        <div><img src={window.imageUrl.graphA} className='c-graph' /></div>
                        <div><img src={window.imageUrl.graphB} className='c-graph' /></div>
                        <div><img src={window.imageUrl.graphC} className='c-graph' /></div>
                        <div><img src={window.imageUrl.graphA} className='c-graph' /></div>
                        <div><img src={window.imageUrl.graphB} className='c-graph' /></div>
                        <div><img src={window.imageUrl.graphC} className='c-graph' /></div>
                        <div><img src={window.imageUrl.graphA} className='c-graph' /></div>
                        <div><img src={window.imageUrl.graphC} className='c-graph' /></div>
                    </div>
                </div>
            </div>
        
        )
    }
}

export default CryptoIndex; 
