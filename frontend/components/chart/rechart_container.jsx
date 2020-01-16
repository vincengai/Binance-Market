import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import GraphRechart from './rechart';
import { fetch30DayInfo } from '../../actions/coin_actions'

const mapStateToProps = (state, ownProps) => ({
    // graphInfo: state.entities.coins.DATA.DATA
});

const mapDispatchToProps = (dispatch) => ({
    fetch30DayInfo: (symbol) => dispatch(fetch30DayInfo(symbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(GraphRechart);