import React from "react";
const SUPPORTED_CURRENCIES = ['BTC', 'ETH', 'BCH', 'BNB', 'LTC', 'TRX', 'XRP', 'XLM', 'DASH']

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentprices: null,
        }

        this.getCurrentPrices = this.getCurrentPrices.bind(this);
    }



}