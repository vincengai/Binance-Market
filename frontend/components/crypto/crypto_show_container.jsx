// import {connect} from 'react-redux';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import CryptoShow from './crypto_show';
// import { fetchCoinInfo } from '../../util/coin_api_util';

// // const SYMBOLS = [
// //     BTC,
// //     ETH,
// //     BCH,
// //     BNB,
// //     LTC,
// //     TRX,
// //     XRP,
// //     XLM,
// //     DASH,
// //     ONT,
// //     NEO,
// // ];

// const mapStateToProps = (state, ownProps) => {
//     return {
//         coin: state.entities.coins[ownProps.match.params.symbol].DISPLAY
//     }
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchCoinInfo: (symbol) => dispatch(fetchCoinInfo(symbol))
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CryptoShow);