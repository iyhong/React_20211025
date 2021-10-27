
import React, { Component } from 'react'

export class A08LifeCycle extends Component {

    constructor() {
        super();

        this.state = {
            color: 'green'
        };
        console.log('1. Constructor');
    }

    changeColor = () => {
        this.setState({color: 'orange'})
    }

    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps');

        if(props.isChecked) {
            state = {
                ...state,
                color: 'red',
                name: 'NolBu'
            }
        }
        console.log(state)

        return state;
    };

    componentDidMount() {
        console.log('4 Dom 생성 후 작업');
        // Ajax 요청.. DOM에 데이터 반영
    };

    shouldComponentUpdate(props, state) {
        console.log('5. DOM이 Update 후 실행');
        return true;        // => 가상돔에서 실행된 결과를 브라우저에 반영
    }

    render() {
        console.log('3. render()')
        return (
            <div>
                <h3>A07 Life Cycle</h3>

                color: {this.props.color} / {this.state.color} / {this.state.name}
                <br />
                
                <button onClick={this.changeColor}>Click</button>
            </div>
        )
    }
}

export default A08LifeCycle
