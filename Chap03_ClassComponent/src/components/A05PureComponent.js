
import React, { PureComponent } from 'react'

export class A06PureComponent extends PureComponent {
    
    constructor(props){
        super(props);

        this.state = {
            name: 'NolBu',
            ary: ['React', 'Angular', 'Vue']
        }
    }

    changeName = () => {
        this.setState({name: 'NolBu'});
    }
    changeObject = () => {
        this.setState({ary: ['React', 'Angular', 'Vue']})
    }

    // update될때마다 값을 비교해서 리 렌더링을 할 것인가를 결정. true => 리 렌더링.
    // PureComponent는 이 메서드가 이미 구현되어 있어서 사용 불가
    /*
    shouldComponentUpdate(props, state) {
        console.log(state, this.state);
        if(this.state.name === state.name) return false;
        else return true;
    }
    */

    render() {
        console.log("---------- render() Method ----------")
        return (
            <div>
                <h3>A05 PureComponent</h3>

                <div>
                    Name: {this.state.name} <br />
                    Ary: {this.state.ary[0]}<br />

                    <button className="btn btn-primary btn-sm" onClick={this.changeName}>Name</button>
                    <button className="btn btn-danger btn-sm" onClick={this.changeObject}>Ary</button>
                </div>
            </div>
        )
    }
}

export default A06PureComponent
