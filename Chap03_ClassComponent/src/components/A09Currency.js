
import React, { Component } from 'react'

export class A10Currency extends Component {

    state = {
        qty: 3,
        cost: 5,
        inCurr: 'USD',
        currencies: ['USD', 'EUR', 'CNY'],
        rate: { USD: 1, EUR: 1.35, CNY: 6.87 }
    }
    changeNumber = evt => {
        let value = evt.target.value;
        if(isNaN(value)) value = 0;
        this.setState( {[evt.target.name]: value} )
    }
    
    render() {
        return (
            <div>
                <h3>A09 Currency</h3>

                Qty: <input type="text" name="qty" className="form-control" 
                    value={this.state.qty} onChange={this.changeNumber} />
                Cost: <input type="text" name="cost" className="form-control"
                    value={this.state.cost} onChange={this.changeNumber} />
                Country: 
                    <select className="form-control" name="inCurr" >
                        
                    </select>
                <br/>

                <div>Total: {this.state.cost * this.state.qty} </div>
                <div>Total: <span></span></div>
            </div>
        )
    }
}

export default A10Currency
