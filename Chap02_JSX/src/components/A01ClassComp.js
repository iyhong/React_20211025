// A01ClassComp.js
import React from 'react'
class A01ClassComp extends React.Component {
    constructor() {
        super();
        // 내장 변수. 반응형, 수정 가능한 변수를 정의(mutable)
        this.state = {
            name: 'NolBu',
            age: 30
        }
        this.address = 'Seoul';
    }

    // 수정
    changeValue = () => {
        // state 변수를 수정하는 메서드는 내장 => setState()
        this.setState(...this.state, {name: 'HungBu'});
    }
    changeAddress = () => {
        this.address = 'Busan'
    }

    // 이 함수의 리턴 값이 반환되는 JSX DOM
    render() {
        return (
            <div>
                <h3>A01 Class Component</h3>
                <div>
                    This is Class Component<br />
                    Name: {this.state.name} <br />
                    Age: {this.state.age}<br />
                    Address: {this.address}<br />
                    <button onClick={this.changeValue}>Name</button>
                    <button onClick={this.changeAddress}>Address</button>
                </div>
            </div>
        )
    }
}
export default A01ClassComp;