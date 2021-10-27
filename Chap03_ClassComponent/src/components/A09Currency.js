
import React, { Component } from 'react'

export class A10Currency extends Component {
    constructor() {
        super();
        this.currencies = ['USD', 'EUR', 'CNY'];
        this.rate = { USD: 1, EUR: 1.35, CNY: 6.87 };

        this.state = {
            qty: 3,
            cost: 5,
            inCurr: 'USD',
        }
    }

    changeNumber = evt => {
        let value = evt.target.value;
        if(isNaN(value)) value = 0;
        this.setState( {[evt.target.name]: value} )
    };
    changeString = evt => this.setState( {[evt.target.name]: evt.target.value} );
    onTotal = () => {
        return this.currencies.map( item => {
            const value = (this.state.qty * this.state.cost * this.rate[this.state.inCurr] / this.rate[item]).toFixed(2)
            return <span key={item}>{item}: {value}{' '}</span>
        })
    }
    
    render() {
        return (
            <div>
                <h3>A09 Currency</h3>

                Qty: <input type="text" name="qty" className="form-control" 
                    value={this.state.qty} onChange={this.changeNumber} />
                Cost: <input type="text" name="cost" className="form-control"
                    value={this.state.cost} onChange={this.changeNumber} />
                Country: {this.state.inCurr}
                    <select className="form-control" name="inCurr" onChange={this.changeString} >
                        { this.currencies.map( item => (
                            <option key={item} value={item}>{item}</option>) 
                        )}
                    </select>
                <br/>

                <div>Total: {this.state.cost * this.state.qty} </div>
                <div>Total: {this.onTotal()} </div>
            </div>
        )
    }
}

export default A10Currency
