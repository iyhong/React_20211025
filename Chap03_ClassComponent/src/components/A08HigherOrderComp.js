
import React, { Component } from 'react'
import A08WithComp from './A08WithComp'

export class A09HigherOrderComp extends Component {
    render() {
        console.log('2. Higher Order render')
        
        return (
            <div>
                <h3>A08 Higher Order Component</h3>
                props.name: {this.props.name}<br />
                props.age: {this.props.age}<br />
                <button onClick={this.props.changeName}>Name</button>
            </div>
        )
    }
}

export default A08WithComp(A09HigherOrderComp, 'Seoul')
