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
            <div className="trade-widget">
                <div className="trade-top"> 
                    <div> Sell </div>
                    <div> Buy </div>
                </div>

                <div className="trade-middle">
                    <input type="number" placeholder='0 units' minLength='1' onChange={this.update('units')} />
                </div> 

            </div>        
    )};
}

export default TransactionForm;




